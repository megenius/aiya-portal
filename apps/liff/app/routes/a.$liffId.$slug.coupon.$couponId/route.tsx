import { useOutletContext, useParams } from "@remix-run/react";
import { useState, useEffect } from "react";
import Loading from "~/components/Loading";
import { useInsertLeadSubmission } from "~/hooks/leadSubmissions/useInsertLeadSubmissions";
import { useCollectVoucher } from "~/hooks/vouchers/useCollectVoucher";
import { useVoucherCodeStats } from "~/hooks/vouchers/useVoucherCodeStats";
import { useVouchersUser } from "~/hooks/vouchers/useVouchersUser";
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
import { useVoucher } from "~/hooks/vouchers/useVoucher";
import { useLineLiff } from "~/contexts/LineLiffContext";
import { useVoucherView } from "~/hooks/vouchers/useVoucherViews";

// Hook สำหรับ refetch voucher view เมื่อถึงเวลา start_date
function useRefetchOnVoucherStart(
  startDate?: string,
  refetchVoucherView?: () => void
) {
  useEffect(() => {
    if (!startDate || !refetchVoucherView) return;
    const now = Date.now();
    const start = new Date(startDate).getTime();
    const msUntilStart = start - now;
    if (msUntilStart > 0) {
      const timeout = setTimeout(() => {
        refetchVoucherView();
      }, msUntilStart);
      return () => clearTimeout(timeout);
    }
  }, [startDate, refetchVoucherView]);
}

const Route = () => {
  const { page, lang } = useOutletContext<{ page: PageLiff; lang: string }>();
  const { couponId } = useParams();
  const { data: coupon, isLoading: isCouponLoading } = useVoucher({
    voucherId: couponId as string,
  });
  const { liff } = useLineLiff();
  const { data: myCoupons, isLoading: isMyCouponsLoading } = useVouchersUser();
  const {
    data: codeStats,
    isLoading: isCodeStatsLoading,
    refetch: refetchCodeStats,
  } = useVoucherCodeStats({
    voucherId: couponId as string,
  });
  const {
    data: voucherView,
    isLoading: isVoucherViewLoading,
    refetch: refetchVoucherView,
  } = useVoucherView({
    voucherId: couponId as string,
  });

  // เรียกใช้ hook เพื่อ refetch voucher view เมื่อถึง start_date
  useRefetchOnVoucherStart(coupon?.start_date, refetchVoucherView);
  const collectVoucher = useCollectVoucher();
  const leadSubmission = useInsertLeadSubmission();
  const myCoupon = myCoupons?.find((v) => v.code.voucher.id === coupon?.id);
  const [isCollected, setIsCollected] = useState(Boolean(myCoupon));
  const [pageState, setPageState] = useState("landing");
  const [isFormValid, setIsFormValid] = useState(false);
  const [formData, setFormData] = useState<FieldData[]>([]);
  const [isRedeemedModalOpen, setIsRedeemedModalOpen] = useState(false);
  const [showFullyCollectedModal, setShowFullyCollectedModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<"collected" | "redeem">("redeem");

  const status = myCoupon
    ? (myCoupon.code.code_status ?? "collected")
    : codeStats?.available === 0
      ? "fully_collected"
      : (coupon?.metadata.redemptionType ?? "instant");

  const isExpired = myCoupon
    ? myCoupon.expired_date && new Date(myCoupon.expired_date) < new Date()
    : false;

  let timeLeft = 0;
  if (myCoupon?.used_date) {
    const usedDateTime = new Date(myCoupon.used_date).getTime(); // already UTC
    const expiryTime = usedDateTime + 15 * 60 * 1000;
    const now = Date.now(); // also UTC
    timeLeft = Math.floor((expiryTime - now) / 1000);
  }

  const handleSubmit = async (tier?: DiscountTier) => {
    if (
      isExpired ||
      (status === "pending_confirmation" && timeLeft <= 0) ||
      status === "used" ||
      status === "expired" ||
      status === "fully_collected"
    ) {
      return;
    }

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

    await collectVoucher
      .mutateAsync(
        {
          variables: collectVoucherData,
        },
        {
          onSuccess: async (res) => {
            setIsCollected(true);
            setPageState("landing");
            setState("collected");
            const data: Partial<LeadSubmission> = {
              source: "voucher",
              source_id: res.id as string,
              data:
                coupon?.metadata.redemptionType === "form"
                  ? { form: { fields: formData } }
                  : undefined,
              metadata: coupon?.metadata,
            };
            leadSubmission.mutateAsync({
              variables: data,
            });

            // Fire celebration effect: Lottie on Android (safe), canvas-confetti elsewhere
            try {
              if (
                typeof window !== "undefined" &&
                typeof document !== "undefined"
              ) {
                const isAndroid =
                  (typeof navigator !== "undefined" &&
                    /Android/i.test(navigator.userAgent)) ||
                  liff?.getOS?.() === "android";
                if (isAndroid) {
                  // Use Lottie overlay via CDN to avoid canvas issues on Android WebView
                  const ensureLottie = () =>
                    new Promise<void>((resolve, reject) => {
                      if (
                        customElements &&
                        customElements.get &&
                        customElements.get("lottie-player")
                      )
                        return resolve();
                      const existing = document.querySelector(
                        "script[data-lottie-player]"
                      ) as HTMLScriptElement | null;
                      if (existing) {
                        existing.addEventListener("load", () => resolve());
                        existing.addEventListener("error", () =>
                          reject(new Error("lottie-player load error"))
                        );
                        return;
                      }
                      const s = document.createElement("script");
                      s.src =
                        "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
                      s.async = true;
                      s.setAttribute("data-lottie-player", "true");
                      s.onload = () => resolve();
                      s.onerror = () =>
                        reject(new Error("lottie-player load error"));
                      document.head.appendChild(s);
                    });

                  await ensureLottie();

                  const overlay = document.createElement("div");
                  overlay.style.position = "fixed";
                  overlay.style.inset = "0";
                  overlay.style.zIndex = "10000";
                  overlay.style.pointerEvents = "none";
                  overlay.style.display = "flex";
                  overlay.style.alignItems = "center";
                  overlay.style.justifyContent = "center";

                  const player = document.createElement("lottie-player") as any;
                  // Use a stable confetti animation URL
                  player.setAttribute(
                    "src",
                    "https://assets9.lottiefiles.com/packages/lf20_jwkvwzqz.json"
                  );
                  player.setAttribute("autoplay", "");
                  player.setAttribute("speed", "1");
                  player.setAttribute("loop", "");
                  player.setAttribute(
                    "style",
                    "width: 100%; height: 100%; max-width: 100vw; max-height: 100vh;"
                  );

                  overlay.appendChild(player);
                  document.body.appendChild(overlay);

                  // Remove after a short duration to avoid lingering overlay
                  setTimeout(() => {
                    try {
                      document.body.removeChild(overlay);
                    } catch {
                      console.error("Failed to remove overlay");
                    }
                  }, 1200);
                } else {
                  const { default: confetti } = await import("canvas-confetti");
                  const fire = () =>
                    confetti({
                      particleCount: 100,
                      spread: 70,
                      origin: { y: 0.9 },
                      disableForReducedMotion: true,
                      zIndex: 9999,
                      ticks: 150,
                      scalar: 0.9,
                      useWorker: true,
                    });
                  if (typeof requestAnimationFrame === "function") {
                    requestAnimationFrame(fire);
                  } else {
                    setTimeout(fire, 0);
                  }
                }
              }
            } catch (e) {
              console.warn("celebration effect failed", e);
            }
            setIsRedeemedModalOpen(true);
          },
          onError: () => {
            // if (error?.message?.includes('fully collected') || error?.message?.includes('out of stock')) {
            setShowFullyCollectedModal(true);
            // }
          },
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  if (
    isCouponLoading ||
    isMyCouponsLoading ||
    isCodeStatsLoading ||
    isVoucherViewLoading
  ) {
    return <Loading primaryColor={page?.bg_color as string} />;
  }

  return (
    coupon && (
      <div className="h-screen-safe flex flex-col overflow-hidden">
        {coupon.metadata.redemptionType === "limited_time" &&
        status === "limited_time" ? (
          <LimitedTimePage
            voucher={coupon}
            voucherView={voucherView}
            language={lang}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
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
              lang={lang}
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
