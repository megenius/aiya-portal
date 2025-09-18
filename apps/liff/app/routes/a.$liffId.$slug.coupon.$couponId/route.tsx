import { useOutletContext, useParams } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import Loading from "~/components/Loading";
import InlineNotice from "~/components/InlineNotice";
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
import { useTrackUserEvent } from "~/hooks/analytics/useTrackUserEvent";

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
  const track = useTrackUserEvent();
  const [pageState, setPageState] = useState("landing");
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState<FieldData[]>([]);
  const [isRedeemedModalOpen, setIsRedeemedModalOpen] = useState(false);
  const [showFullyCollectedModal, setShowFullyCollectedModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<"collected" | "redeem">("redeem");
  const sentViewRef = useRef(false);

  let timeLeft = 0;
  if (myCoupon?.used_date) {
    const usedDateTime = new Date(myCoupon.used_date).getTime(); // already UTC
    const expiryTime = usedDateTime + 15 * 60 * 1000;
    const now = Date.now(); // also UTC
    timeLeft = Math.floor((expiryTime - now) / 1000);
  }

  // Map server-computed effective status to UI status and disable rules
  const campaignEndAtTs = serverComputed?.campaignEndAt
    ? new Date(serverComputed.campaignEndAt).getTime()
    : null;
  const isCampaignEnded = campaignEndAtTs !== null && Date.now() >= campaignEndAtTs;
  // Compute server-client offset so that now_server ≈ Date.now() - offsetMs
  const clientNowTs = Date.now();
  const serverNowTs = serverComputed?.serverNow
    ? new Date(serverComputed.serverNow).getTime()
    : clientNowTs;
  const offsetMs = clientNowTs - serverNowTs;
  const isNotStarted = serverComputed?.effectiveStatus === "not_started";
  const isEndedEffective = isCampaignEnded || serverComputed?.effectiveStatus === "ended";
  const hasCoupon = Boolean(myCoupon);
  // If user already has a coupon, do NOT override UI to 'ended' (that's for collection phase only)
  const statusForUi = hasCoupon
    ? (isExpired || (status === "pending_confirmation" && timeLeft <= 0)
        ? ("expired" as const)
        : status)
    : (isNotStarted
        ? ("not_started" as const)
        : isEndedEffective
          ? ("ended" as const)
          : (isExpired || (status === "pending_confirmation" && timeLeft <= 0)
              ? ("expired" as const)
              : status));

  // For instant/form, show end countdown until campaignEndAt then refetch
  const endInSeconds =
    campaignEndAtTs !== null && !isCampaignEnded
      ? Math.max(0, Math.floor((campaignEndAtTs - (clientNowTs - offsetMs)) / 1000))
      : undefined;

  // Compute start countdown based on nextBoundaryAt vs client time (avoid using server-computed seconds)
  const startAtTs = serverComputed?.nextBoundaryAt
    ? new Date(serverComputed.nextBoundaryAt).getTime()
    : null;
  const computedStartInSeconds =
    isNotStarted && startAtTs !== null
      ? Math.max(0, Math.floor((startAtTs - (clientNowTs - offsetMs)) / 1000))
      : undefined;

  // Track voucher_click as page view of the coupon detail (once per mount)
  useEffect(() => {
    if (sentViewRef.current) return;
    if (!coupon || !page) return;
    sentViewRef.current = true;
    (async () => {
      try {
        await track("voucher_click", {
          voucher_id: coupon?.id,
          page_id: page?.id,
          liff_id: page?.liff_id,
          status_before: status,
          isCollected: Boolean(myCoupon),
          canCollect: serverComputed?.canCollect ?? null,
          redemptionType: coupon?.metadata.redemptionType,
        } as Record<string, unknown>);
      } catch (e) {
        console.warn("track voucher_click failed", e);
      }
    })();
  }, [coupon, page, status, myCoupon, serverComputed?.canCollect, track]);

  const handleSubmit = async (tier?: DiscountTier) => {
    // ป้องกันการกดซ้ำระหว่างกำลังส่งคำขอ
    if (isSubmitting) return;
    const isCollected = Boolean(myCoupon);

    // ผู้ใช้มีคูปองอยู่แล้ว: เปิด modal ใช้งาน/แสดงคูปองได้เสมอ ไม่ต้องสนใจช่วงรับ (ended)
    if (isCollected) {
      setIsRedeemedModalOpen(true);
      return;
    }

    // อยู่สถานะรอการยืนยัน ให้เข้าหน้าใช้ได้ถ้ายังอยู่ในเวลาที่กำหนด
    if (status === "pending_confirmation") {
      if (timeLeft > 0) {
        setIsRedeemedModalOpen(true);
      }
      return;
    }

    // บล็อคเฉพาะ flow การ "รับ" เมื่อยังไม่เริ่ม/จบแคมเปญ/หมดอายุ/ใช้ไม่ได้
    if (
      isNotStarted ||
      isCampaignEnded ||
      isExpired ||
      status === "used" ||
      status === "expired" ||
      status === "fully_collected" ||
      (status === "pending_confirmation" && timeLeft <= 0)
    ) {
      return;
    }

    // ใช้ serverComputed (v2) เป็นตัวตัดสินล่าสุดว่ากดรับได้ไหม (เฉพาะกรณียังไม่เคยรับ)
    if (serverComputed?.canCollect === false) {
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
            const msg =
              lang === "th"
                ? "คุณใช้สิทธิ์ในแคมเปญนี้ครบแล้ว"
                : "You have reached the claim limit for this campaign.";
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
            {codeStats && (
              <MainContent
                language={lang}
                voucher={coupon}
                voucherUser={myCoupon}
                codeStats={codeStats}
                pageState={pageState}
                status={statusForUi}
                onFormValidationChange={setIsFormValid}
                onFormDataChange={setFormData}
                canCollect={serverComputed?.canCollect}
                startInSeconds={computedStartInSeconds}
                startAt={isNotStarted ? serverComputed?.nextBoundaryAt ?? undefined : undefined}
                onStartReached={onBoundaryRefetch}
                endInSeconds={endInSeconds}
                endAt={serverComputed?.campaignEndAt ?? undefined}
                onEndReached={onBoundaryRefetch}
                offsetMs={offsetMs}
              />
            )}
            {!myCoupon && isNotStarted ? (
              <InlineNotice
                language={lang === "en" ? "en" : "th"}
                message={
                  lang === "en"
                    ? "This coupon is not yet available."
                    : "คูปองยังไม่เปิดให้รับ"
                }
                className="mx-4 mb-6"
                level="medium"
              />
            ) :
            !myCoupon &&
            serverComputed?.canCollect === false &&
            !(isCampaignEnded || statusForUi === "expired" || serverComputed?.effectiveStatus === "ended") ? (
              <InlineNotice
                language={lang === "en" ? "en" : "th"}
                deniedReason={serverComputed?.deniedReason ?? null}
                className="mx-4 mb-6"
                level="medium"
              />
            ) : (
              <Footer
                color={coupon.voucher_brand_id.primaryColor ?? ""}
                lang={lang === "en" ? "en" : "th"}
                status={isSubmitting ? "submitting" : statusForUi}
                onClick={handleSubmit}
                disabled={
                  (pageState === "form" && !isFormValid) ||
                  (!hasCoupon && isCampaignEnded) ||
                  isExpired ||
                  (status === "pending_confirmation" && timeLeft <= 0) ||
                  statusForUi === "used" ||
                  statusForUi === "expired" ||
                  statusForUi === "ended" ||
                  statusForUi === "fully_collected" ||
                  isNotStarted ||
                  isSubmitting ||
                  (!hasCoupon && serverComputed?.canCollect === false)
                }
              />
            )}
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
            // showRedeemConfirmation={
            //   page.metadata.template === "promotion" ? false : true
            // }
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
