import { useOutletContext, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "~/components/Loading";
import { useInsertLeadSubmission } from "~/hooks/leadSubmissions/useInsertLeadSubmissions";
import { useCollectVoucher } from "~/hooks/vouchers/useCollectVoucher";
import { useCouponPageV2 } from "~/hooks/vouchers/useCouponPageV2";
import {
  CollectVoucher,
  DiscountTier,
  FieldData,
  LeadSubmission,
} from "~/types/app";
import Footer from "./_components/Footer";
import FullyCollectedModal from "./_components/FullyCollectedModal";
import Header from "./_components/Header";
import MainContent from "./_components/MainContent";
import RedeemModal from "../../components/RedeemModal";
import LimitedTimePage from "./_components/LimitedTime/LimitedTimePage";
import { PageLiff } from "~/types/page";
import { useLineLiff } from "~/contexts/LineLiffContext";
import { triggerConfettiFromButton } from "~/utils/confetti";
import { useSendServiceMessage } from "~/hooks/notifies/useSendServiceMessage";

// ใช้ v2 view เป็น single source of truth จึงไม่ต้อง refetch ตาม start_date ในระดับ route อีกต่อไป

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { couponId } = useParams();
  const { liff } = useLineLiff();
  const queryClient = useQueryClient();
  const {
    coupon,
    isCouponLoading,
    myCoupon,
    codeStats,
    serverComputed,
    status,
    isExpired,
    refetchCodeStats,
    onBoundaryRefetch,
    isVoucherPageV2Loading,
  } = useCouponPageV2(couponId as string);
  const collectVoucher = useCollectVoucher();
  const leadSubmission = useInsertLeadSubmission();
  const sendServiceMessage = useSendServiceMessage();
  const [pageState, setPageState] = useState("landing");
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState<FieldData[]>([]);
  const [isRedeemedModalOpen, setIsRedeemedModalOpen] = useState(false);
  const [showFullyCollectedModal, setShowFullyCollectedModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<"collected" | "redeem">("redeem");

  let timeLeft = 0;
  if (myCoupon?.used_date) {
    const usedDateTime = new Date(myCoupon.used_date).getTime(); // already UTC
    const expiryTime = usedDateTime + 15 * 60 * 1000;
    const now = Date.now(); // also UTC
    timeLeft = Math.floor((expiryTime - now) / 1000);
  }

  const handleSubmit = async (tier?: DiscountTier) => {
    // ป้องกันการกดซ้ำระหว่างกำลังส่งคำขอ
    if (isSubmitting) return;
    if (
      isExpired ||
      (status === "pending_confirmation" && timeLeft <= 0) ||
      status === "used" ||
      status === "expired" ||
      status === "fully_collected"
    ) {
      return;
    }

    // ใช้ serverComputed (v2) เป็นตัวตัดสินล่าสุดว่ากดรับได้ไหม
    if (serverComputed?.canCollect === false) {
      return;
    }

    const isCollected = Boolean(myCoupon);

    if (isCollected || status === "pending_confirmation") {
      // navigate(`/a/${page.liff_id}/${page.slug}/my-coupons`);
      setIsRedeemedModalOpen(true);
      return;
    }

    if (pageState === "landing" && coupon?.metadata.redemptionType === "form") {
      setPageState("form");
      return;
    }
    setIsSubmitting(true);
    const collectVoucherData: CollectVoucher = {
      voucher_id: coupon?.id as string,
      channel: page?.channel as string,
      ...(tier && {
        discount_value: tier.value || 0,
        discount_type: tier.type,
      }),
    };

    collectVoucher.mutate(
      { variables: collectVoucherData },
      {
        onSuccess: async (res) => {
          try {
            setPageState("landing");
            setState("collected");

            // Fire celebration effect: Pure CSS confetti on all platforms (safe for WebView)
            try {
              triggerConfettiFromButton();
            } catch (e) {
              console.warn("celebration effect failed", e);
            }
            setIsRedeemedModalOpen(true);
          } finally {
            // ปล่อย isSubmitting ใน effect เมื่อ myCoupon มา หรือ canCollect=false
            const data: Partial<LeadSubmission> = {
              source: "voucher",
              source_id: res.id as string,
              data:
                coupon?.metadata.redemptionType === "form"
                  ? { form: { fields: formData } }
                  : undefined,
              metadata: coupon?.metadata,
            };
            await leadSubmission.mutateAsync({ variables: data });
            await sendServiceMessage.mutateAsync({
              variables: {
                liff_access_token: liff?.getAccessToken() || "",
                template_name:
                  lang === "th" ? "couponnoti_s_c_th" : "couponnoti_s_c_en",
                template_params: {
                  btn1_url: `https://miniapp.line.me/${page?.liff_id}/coupon/${coupon?.id}`,
                },
              },
            });
          }
        },
        onError: (error) => {
          console.error(error);
          // Distinguish server-side rules via safe type guards (no any)
          type Resp = { data?: unknown };
          type Err = { response?: Resp } & { data?: unknown };
          const e = error as Err;
          const rawData: unknown = e?.response?.data ?? e?.data ?? undefined;
          let code: string | undefined = undefined;
          if (typeof rawData === "object" && rawData !== null) {
            const maybe = (rawData as Record<string, unknown>)["error"];
            if (typeof maybe === "string") code = maybe;
          }
          if (code === "already_collected") {
            // treat as success UI-wise: show the existing coupon modal
            setPageState("landing");
            setState("collected");
            setIsRedeemedModalOpen(true);
            setIsSubmitting(false);
            return;
          }
          if (code === "group_quota_full") {
            // campaign quota reached
            const msg = lang === "th" ? "คุณใช้สิทธิ์ในแคมเปญนี้ครบแล้ว" : "You have reached the claim limit for this campaign.";
            // simple UX for now
            window.alert(msg);
            setIsSubmitting(false);
            return;
          }
          // Fallback: out of stock or unknown => show fully collected modal
          setShowFullyCollectedModal(true);
          setIsSubmitting(false);
        },
      },
    );
  };

  // ปล่อย isSubmitting หลังสำเร็จ เมื่อ myCoupon โผล่หรือ server ยืนยันว่าเก็บไม่ได้แล้ว
  useEffect(() => {
    if (!isSubmitting) return;
    if (myCoupon || serverComputed?.canCollect === false) {
      setIsSubmitting(false);
    }
  }, [isSubmitting, myCoupon, serverComputed?.canCollect]);

  // Clear cached v2 page when leaving this route, so next entry starts fresh
  useEffect(() => {
    return () => {
      if (couponId) {
        queryClient.removeQueries({ queryKey: ["coupon-page-v2", couponId] });
      }
    };
  }, [couponId, queryClient]);

  if (isCouponLoading || isVoucherPageV2Loading) {
    return <Loading primaryColor={page?.bg_color as string} />;
  }

  return (
    coupon && (
      <div className="flex h-screen-safe flex-col overflow-hidden">
        {coupon.metadata.redemptionType === "limited_time" &&
        status === "limited_time" ? (
          <LimitedTimePage
            voucher={coupon}
            language={lang}
            primaryColor={coupon.primary_color ?? ""}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            serverComputed={serverComputed || undefined}
            onBoundaryRefetch={onBoundaryRefetch}
          />
        ) : (
          <>
            <Header
              language={lang}
              voucher={coupon}
              color={coupon.voucher_brand_id.primaryColor ?? ""}
              isIsClient={liff?.isInClient() ?? false}
            />
            {serverComputed && serverComputed.canCollect === false && !myCoupon && (
              <div className="mx-4 mt-3 rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-center text-sm text-yellow-800 sm:text-base">
                {lang === "th"
                  ? "คุณใช้สิทธิ์ในแคมเปญนี้ครบแล้ว"
                  : "You have reached the claim limit for this campaign."}
              </div>
            )}
            {codeStats && (
              <MainContent
                language={lang}
                voucher={coupon}
                voucherUser={myCoupon}
                codeStats={codeStats}
                pageState={pageState}
                status={
                  isExpired ||
                  (status === "pending_confirmation" && timeLeft <= 0)
                    ? "expired"
                    : status
                }
                onFormValidationChange={setIsFormValid}
                onFormDataChange={setFormData}
              />
            )}
            <Footer
              color={coupon.voucher_brand_id.primaryColor ?? ""}
              lang={lang === "en" ? "en" : "th"}
              status={
                isSubmitting
                  ? "submitting"
                  : isExpired ||
                      (status === "pending_confirmation" && timeLeft <= 0)
                    ? "expired"
                    : status
              }
              onClick={handleSubmit}
              disabled={
                (pageState === "form" && !isFormValid) ||
                isExpired ||
                (status === "pending_confirmation" && timeLeft <= 0) ||
                status === "used" ||
                status === "expired" ||
                status === "fully_collected" ||
                isSubmitting
              }
            />
          </>
        )}

        <FullyCollectedModal
          isOpen={showFullyCollectedModal}
          onClose={() => {
            setShowFullyCollectedModal(false);
            onBoundaryRefetch();
          }}
          language={lang}
          primaryColor={coupon.voucher_brand_id.primaryColor ?? ""}
        />

        {myCoupon && (
          <RedeemModal
            page={page}
            voucherUser={myCoupon}
            language={lang}
            primaryColor={coupon.voucher_brand_id.primaryColor ?? ""}
            state={state}
            showRedeemConfirmation={
              page.metadata.template === "promotion" ? false : true
            }
            isOpen={isRedeemedModalOpen}
            onClose={() => {
              setState("redeem");
              refetchCodeStats();
              setIsRedeemedModalOpen(false);
            }}
          />
        )}
      </div>
    )
  );
};

export default Route;
