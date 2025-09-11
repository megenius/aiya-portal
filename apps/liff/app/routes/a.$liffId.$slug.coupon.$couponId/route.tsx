import { useOutletContext, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import Loading from "~/components/Loading";
import { useInsertLeadSubmission } from "~/hooks/leadSubmissions/useInsertLeadSubmissions";
import { useCollectVoucher } from "~/hooks/vouchers/useCollectVoucher";
import { useCouponPageData } from "~/hooks/vouchers/useCouponPageData";
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
  const {
    coupon,
    isCouponLoading,
    isMyCouponsLoading,
    codeStats,
    isCodeStatsLoading,
    voucherViewV2,
    isVoucherViewV2Loading,
    myCoupon,
    status,
    isExpired,
    refetchCodeStats,
    onBoundaryRefetch,
  } = useCouponPageData(couponId as string);
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
    if (voucherViewV2 && voucherViewV2.canCollect === false) {
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
          // if (error?.message?.includes('fully collected') || error?.message?.includes('out of stock')) {
          setShowFullyCollectedModal(true);
          setIsSubmitting(false);
          // }
        },
      },
    );
  };

  // ปล่อย isSubmitting หลังสำเร็จ เมื่อ myCoupon โผล่หรือ server ยืนยันว่าเก็บไม่ได้แล้ว
  useEffect(() => {
    if (!isSubmitting) return;
    if (myCoupon || voucherViewV2?.canCollect === false) {
      setIsSubmitting(false);
    }
  }, [isSubmitting, myCoupon, voucherViewV2?.canCollect]);

  if (
    isCouponLoading ||
    isMyCouponsLoading ||
    isCodeStatsLoading ||
    isVoucherViewV2Loading
  ) {
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
            serverComputed={voucherViewV2 || undefined}
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
            refetchCodeStats();
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
