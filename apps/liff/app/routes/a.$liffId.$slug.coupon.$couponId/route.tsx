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

            // Fire celebration effect: Pure CSS confetti on all platforms (safe for WebView)
            try {
              if (
                typeof window !== "undefined" &&
                typeof document !== "undefined"
              ) {
                const reduceMotion =
                  typeof window.matchMedia === "function" &&
                  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
                if (!reduceMotion) {
                  // Use the same fast CSS confetti on all platforms
                  const styleSel = "style[data-confetti-css]";
                  let styleEl = document.querySelector(
                    styleSel
                  ) as HTMLStyleElement | null;
                  if (!styleEl) {
                    styleEl = document.createElement("style");
                    styleEl.setAttribute("data-confetti-css", "true");
                    styleEl.textContent = `
@keyframes confetti-up-down {
  0% {
    transform: translate3d(0, 0, 0) rotate(var(--rot, 0deg));
    opacity: 0.95;
    animation-timing-function: cubic-bezier(.12,.62,.2,1);
  }
  45% {
    transform: translate3d(calc(var(--dx, 0px) * 0.7 + var(--sx, 0px) * 0.5), var(--upY, -60vh), 0) rotate(var(--rotMid, 540deg));
    opacity: 1;
    animation-timing-function: cubic-bezier(.4,0,.6,.2);
  }
  75% {
    transform: translate3d(calc(var(--dx, 0px) * 1.1 - var(--sx, 0px) * 0.3), calc(var(--downY, 100vh) * 0.55), 0) rotate(var(--rotEnd, 900deg));
    opacity: .98;
    animation-timing-function: cubic-bezier(.2,0,.2,1);
  }
  100% {
    transform: translate3d(calc(var(--dx, 0px) * 1.6), var(--downY, 100vh), 0) rotate(var(--rotEnd, 900deg));
    opacity: .9;
  }
}
.confetti-piece { 
  position: absolute; 
  opacity: .95; 
  will-change: transform, opacity; 
  /* filter: drop-shadow(0 1px 1px rgba(0,0,0,.08)); disabled for perf */ 
 }
 @media (prefers-reduced-motion: reduce) { 
  .confetti-piece { 
    animation: none !important; 
    display: none !important; 
  }
}
`;
                    document.head.appendChild(styleEl);
                  }
                }
                if (!reduceMotion) {
                  const overlay = document.createElement("div");
                  overlay.style.position = "fixed";
                  overlay.style.inset = "0";
                  overlay.style.zIndex = "10000";
                  overlay.style.pointerEvents = "none";
                  overlay.style.overflow = "hidden";
                  document.body.appendChild(overlay);

                  const colors = [
                    "#FFC700",
                    "#FF3D00",
                    "#00E0FF",
                    "#7C4DFF",
                    "#4CAF50",
                    "#FF6F91",
                  ];
                  const cores =
                    typeof navigator !== "undefined"
                      ? navigator.hardwareConcurrency
                      : 4;
                  const smallViewport =
                    window.innerWidth <= 360 || window.innerHeight <= 640;
                  let pieces = 100;
                  if (cores <= 2) pieces = 60;
                  else if (cores <= 4 || smallViewport) pieces = 80;

                  // Compute origin from the footer button center
                  const btn = document.querySelector(
                    '[data-confetti-button="true"]'
                  ) as HTMLElement | null;
                  const rect = btn?.getBoundingClientRect();
                  const originLeft = rect
                    ? rect.left + rect.width / 2
                    : window.innerWidth / 2;
                  const originTop = rect
                    ? rect.top + rect.height / 2
                    : Math.min(
                        window.innerHeight * 0.85,
                        window.innerHeight - 80
                      );

                  // Setup cleanup/event tracking
                  let finishedCount = 0;
                  const cleanup = () => {
                    try {
                      document.body.removeChild(overlay);
                    } catch (_e) {
                      /* noop */
                    }
                  };
                  const onPieceDone = () => {
                    finishedCount++;
                    if (finishedCount >= pieces) cleanup();
                  };

                  const vh = window.innerHeight / 100;
                  const spreadDeg = 70; // ~canvas-confetti spread
                  const frag = document.createDocumentFragment();

                  for (let i = 0; i < pieces; i++) {
                    const d = document.createElement("div");
                    d.className = "confetti-piece";
                    const w = 6 + Math.floor(Math.random() * 8);
                    const h = 8 + Math.floor(Math.random() * 10);
                    const upVh = 50 + Math.random() * 20; // 50-70vh
                    const downVh = 95 + Math.random() * 20; // 95-115vh
                    const angle =
                      (Math.random() * spreadDeg - spreadDeg / 2) *
                      (Math.PI / 180);
                    const vertPx = (upVh + downVh * 0.6) * vh; // approximate vertical distance in px
                    const dxPx = Math.tan(angle) * vertPx;
                    const xJitter = Math.random() * 8 - 4; // small origin jitter
                    const sway = dxPx * 0.15; // lateral drift proportional to dx
                    d.style.width = `${w}px`;
                    d.style.height = `${h}px`;
                    d.style.left = `${originLeft + xJitter}px`;
                    d.style.top = `${originTop}px`;
                    d.style.backgroundColor = colors[i % colors.length];
                    d.style.borderRadius = `${Math.random() < 0.3 ? 50 : 4}%`;
                    d.style.transformOrigin = `${20 + Math.floor(Math.random() * 60)}% ${20 + Math.floor(Math.random() * 60)}%`;
                    const duration = 1600 + Math.random() * 500; // slightly tighter duration
                    const delay = 0; // single burst
                    const rot = Math.floor(Math.random() * 360);
                    const rotMid =
                      rot + (360 + Math.floor(Math.random() * 360));
                    const rotEnd =
                      rotMid + (180 + Math.floor(Math.random() * 360));
                    d.style.setProperty("--dx", `${dxPx.toFixed(1)}px`);
                    d.style.setProperty("--upY", `-${upVh.toFixed(1)}vh`);
                    d.style.setProperty("--downY", `${downVh.toFixed(1)}vh`);
                    d.style.setProperty("--rot", `${rot}deg`);
                    d.style.setProperty("--rotMid", `${rotMid}deg`);
                    d.style.setProperty("--rotEnd", `${rotEnd}deg`);
                    d.style.setProperty("--sx", `${sway.toFixed(1)}px`);
                    d.addEventListener("animationend", onPieceDone, {
                      once: true,
                    });
                    d.style.animation = `confetti-up-down ${duration}ms linear ${delay}ms forwards`;
                    frag.appendChild(d);
                  }
                  // Append all pieces at once for performance
                  overlay.appendChild(frag);
                  const maxDuration = 2800; // allow fall to complete for the longest pieces
                  const fallback = () => {
                    if (finishedCount < pieces) cleanup();
                  };
                  if (typeof requestAnimationFrame === "function") {
                    requestAnimationFrame(() =>
                      setTimeout(fallback, maxDuration)
                    );
                  } else {
                    setTimeout(fallback, maxDuration);
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
