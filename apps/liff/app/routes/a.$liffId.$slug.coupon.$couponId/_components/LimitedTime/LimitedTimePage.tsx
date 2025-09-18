import React, { useEffect, useState } from "react";
import { DiscountTier, Voucher, VoucherView } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import LimitedTimeTimer from "./LimitedTimeTimer";
import { useNavigate, useParams } from "@remix-run/react";
import { formatDateTime } from "~/utils/helpers";
import InlineNotice from "~/components/InlineNotice";
import ChooseAnotherVoucherButton from "~/components/ChooseAnotherVoucherButton";
import LazyImage from "~/components/LazyImage";
import BackButton from "~/components/BackButton";

// Extend Voucher type locally to include optional teaser field from Directus
type VoucherWithTeaser = Voucher & { teaser?: string | null };

interface LimitedTimePageProps {
  voucher: Voucher;
  language: string;
  primaryColor?: string;
  isSubmitting: boolean;
  onSubmit: (tier: DiscountTier | undefined) => void;
  // v2 server-computed snapshot (optional)
  serverComputed?: VoucherView;
  onBoundaryRefetch?: () => void;
}

// Shape is defined in VoucherViewV2 type

const LimitedTimePage: React.FC<LimitedTimePageProps> = ({
  voucher,
  language,
  primaryColor,
  isSubmitting,
  onSubmit,
  serverComputed,
  onBoundaryRefetch,
}) => {
  const [activeTier, setActiveTier] = useState<DiscountTier | undefined>(
    undefined,
  );
  const [timeLeft, setTimeLeft] = useState(0);
  const [mounted, setMounted] = useState(false);
  const messageFromApi = voucher.metadata.title[language];
  const { liffId, slug } = useParams();
  const navigate = useNavigate();
  const [isLeaving, setIsLeaving] = useState(false);

  const navigateToBack = () => {
    // Hide current content immediately to avoid flash of stale data
    setIsLeaving(true);
    const idx = window.history.state?.idx ?? window.history.length;
    if (idx > 0) {
      navigate(-1);
    } else {
      navigate(`/a/${liffId}/${slug}/shop`);
    }
  };

  // Avoid initial flicker by delaying overlay rendering until after first mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // If serverComputed is provided, drive UI from it and schedule boundary-based refetch
  useEffect(() => {
    if (!serverComputed) return;
    // Freeze UI re-initialization while submitting to avoid timer jump
    if (!isSubmitting) {
      if (serverComputed.currentTier) {
        setActiveTier({
          value: serverComputed.currentTier.value as number,
          type: serverComputed.currentTier.type as DiscountTier["type"],
          condition: {},
        });
      } else {
        setActiveTier(undefined);
      }

      setTimeLeft(Math.max(0, serverComputed.timeLeftSeconds || 0));
    }

    let tickId: number | undefined;
    if ((serverComputed.timeLeftSeconds || 0) > 0) {
      tickId = window.setInterval(() => {
        setTimeLeft((t) => (t > 0 ? t - 1 : 0));
      }, 1000);
    }

    let boundaryId: number | undefined;
    if (serverComputed.nextBoundaryAt && onBoundaryRefetch) {
      const serverNowMs = new Date(serverComputed.serverNow).getTime();
      const skew = Date.now() - serverNowMs;
      const boundaryMs = new Date(serverComputed.nextBoundaryAt).getTime();
      const msToBoundary = boundaryMs - (Date.now() - skew);
      if (msToBoundary > 0 && msToBoundary < 24 * 3600 * 1000) {
        boundaryId = window.setTimeout(() => {
          onBoundaryRefetch();
        }, msToBoundary);
      }
    }

    return () => {
      if (tickId) window.clearInterval(tickId);
      if (boundaryId) window.clearTimeout(boundaryId);
    };
  }, [serverComputed, onBoundaryRefetch, isSubmitting]);

  // Removed client-side fallback calculator: we now rely exclusively on serverComputed (v2)

  // แทนที่ ${value} ด้วย activeTier.value
  const displayMessage = messageFromApi.replace(
    /\$\{value\}/g,
    activeTier?.value
      ? `${activeTier.value}${activeTier.type === "percentage" ? "%" : ""}`
      : `${
          voucher.metadata.discount_tiers?.[
            voucher.metadata.discount_tiers.length - 1
          ].value
        }${
          voucher.metadata.discount_tiers?.[
            voucher.metadata.discount_tiers.length - 1
          ].type === "percentage"
            ? "%"
            : ""
        }`,
  );
  const displayDescription = {
    th: `เริ่มแจกพร้อมกัน\n${formatDateTime(voucher.start_date as string, "th")}`,
    en: `Starts at\n${formatDateTime(voucher.start_date as string, "en")}`,
  };

  const textButton = {
    th: {
      collect: getCollectText({ lang: "th", activeTier, voucher }),
      redeem: "ใช้คูปอง",
      expired: "หมดอายุแล้ว",
    },
    en: {
      collect: getCollectText({ lang: "en", activeTier, voucher }),
      redeem: "Redeem",
      expired: "Expired",
    },
  };
  // กรณีไม่มี validity_in_seconds ให้ใช้เวลาที่เหลือจนถึง end_date แทน
  const validitySecondsForDescription = (() => {
    const s = voucher.validity_in_seconds;
    if (typeof s === "number" && s > 0) return s;
    const endStr = voucher.end_date as string | null;
    if (endStr) {
      const nowMs = serverComputed
        ? new Date(serverComputed.serverNow).getTime()
        : Date.now();
      const endMs = new Date(endStr).getTime();
      if (!Number.isNaN(endMs)) {
        return Math.max(0, Math.floor((endMs - nowMs) / 1000));
      }
    }
    return 0;
  })();
  const descriptionButton = {
    th: {
      collect: `หลังกดรับคูปองมีอายุ ${formatDurationSingleUnit(validitySecondsForDescription, "th")}`,
    },
    en: {
      collect: `After clicking the collect button, the voucher will expire in ${formatDurationSingleUnit(validitySecondsForDescription, "en")}.`,
    },
  };

  const endedTextButton = {
    th: "ขออภัย ขณะนี้หมดเวลารับคูปองแล้ว!",
    en: "Sorry, coupon collection time has ended!",
  };

  if (isLeaving) return null;

  // Consider UI as ended when server says ended OR countdown reached 0 in started phase (avoid short mismatch window)
  const isEnded =
    !!serverComputed &&
    (serverComputed.effectiveStatus === "ended" ||
      (serverComputed.effectiveStatus !== "not_started" && timeLeft <= 0));
  const cannotCollect = !!serverComputed && serverComputed.canCollect === false;

  // Teaser handling: show teaser exclusively when not_started and voucher.teaser provided
  const teaserImage = (voucher as VoucherWithTeaser).teaser ?? null;
  const showTeaser =
    (serverComputed?.effectiveStatus === "not_started" &&
      Boolean(teaserImage)) ||
    false;

  return (
    <>
      {mounted &&
        isEnded &&
        !(
          serverComputed &&
          (serverComputed.deniedReason === "group_quota_full" ||
            (serverComputed.available ?? 0) <= 0)
        ) && (
          <div className="pointer-events-auto absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="flex rotate-[-15deg] flex-col items-center justify-center gap-2">
              <div className="h-0.5 w-full rounded-lg bg-white"></div>
              <div className="px-5">
                <span className="whitespace-pre-line text-center text-lg text-white sm:text-xl">
                  {endedTextButton[language]}
                </span>
              </div>
              <div className="h-0.5 w-full rounded-lg bg-white"></div>
            </div>
          </div>
        )}
      <div className="relative h-full w-full">
        {/* ปุ่มย้อนกลับ */}
        <BackButton
          onClick={navigateToBack}
          variant="overlay"
          showText={true}
          text={language === "th" ? "กลับหน้าหลัก" : "Back"}
        />
        <LazyImage
          src={getDirectusFileUrl(voucher.poster as string)}
          alt={voucher.name || "Promotion"}
          className="h-full w-full object-cover"
          wrapperClassName="h-full w-full"
          placeholder="blur"
          blurDataURL={getDirectusFileUrl(voucher.poster as string, {
            width: 64,
            height: 36,
          })}
          rootMargin="200px"
          priority
        />
        <div
          className={`absolute inset-0 ${showTeaser ? "" : "p-4 pt-[50%]"}`}
          style={{
            paddingTop: showTeaser
              ? undefined
              : voucher.metadata.layout?.container?.paddingTop,
          }}
        >
          {serverComputed &&
            serverComputed.effectiveStatus !== "not_started" &&
            !isEnded && (
              <div className="flex h-full w-full flex-col gap-8">
                <div className="flex flex-col items-center gap-10">
                  {!voucher.metadata.layout?.title?.visible && (
                    <h1 className="whitespace-pre-line text-center text-2xl font-bold text-white">
                      {displayMessage}
                    </h1>
                  )}

                  {!cannotCollect && (
                    <LimitedTimeTimer time={formatTime(timeLeft)} />
                  )}
                </div>
                {serverComputed &&
                  serverComputed.canCollect === false &&
                  (serverComputed.deniedReason ||
                    (serverComputed.available ?? 0) <= 0) && (
                    <InlineNotice
                      language={language as "th" | "en"}
                      deniedReason={serverComputed.deniedReason ?? null}
                      message={
                        serverComputed.deniedReason
                          ? undefined
                          : (serverComputed.available ?? 0) <= 0
                            ? language === "th"
                              ? "คูปองถูกเก็บครบแล้ว"
                              : "All vouchers have been collected."
                            : undefined
                      }
                      className="mx-3 -mt-4"
                      level="soft"
                    />
                  )}
                {cannotCollect && (
                  <ChooseAnotherVoucherButton
                    onClick={navigateToBack}
                    primaryColor={primaryColor}
                    language={language as "th" | "en"}
                  />
                )}
                {!cannotCollect && (
                  <div className="flex flex-col items-center justify-center gap-2 px-3">
                    {(() => {
                      const disabled = isSubmitting || timeLeft <= 0;
                      return (
                        <button
                          onClick={() => onSubmit(activeTier)}
                          disabled={disabled}
                          className={`w-full rounded-xl border-0 py-4 text-lg transition sm:text-2xl ${
                            disabled
                              ? "bg-gray-300 text-gray-500"
                              : "bg-[#9AD3A8] font-bold text-[#375CA3]"
                          }`}
                          style={{
                            backgroundColor: disabled
                              ? "#d1d5db"
                              : primaryColor,
                            color: disabled ? "#6b7280" : "white",
                            opacity: disabled ? 0.7 : 1,
                            cursor: disabled ? "not-allowed" : "pointer",
                          }}
                        >
                          {isSubmitting
                            ? language === "th"
                              ? "กำลังรับคูปอง..."
                              : "Collecting..."
                            : textButton[language].collect}
                        </button>
                      );
                    })()}
                    <h5 className="whitespace-pre-line text-center text-sm text-white sm:text-base">
                      {descriptionButton[language].collect}
                    </h5>
                  </div>
                )}
              </div>
            )}
          {serverComputed &&
            isEnded &&
            (serverComputed.available ?? 0) <= 0 && (
              <div className="flex h-full w-full flex-col gap-8">
                <div className="flex flex-col items-center gap-10">
                  {!voucher.metadata.layout?.title?.visible && (
                    <h1 className="whitespace-pre-line text-center text-2xl font-bold text-white">
                      {displayMessage}
                    </h1>
                  )}
                </div>
                <InlineNotice
                  language={language as "th" | "en"}
                  deniedReason={serverComputed.deniedReason ?? null}
                  message={
                    language === "th"
                      ? "คูปองถูกเก็บครบแล้ว"
                      : "All vouchers have been collected."
                  }
                  className="mx-3 -mt-4"
                  level="medium"
                />
                <ChooseAnotherVoucherButton
                  onClick={navigateToBack}
                  primaryColor={primaryColor}
                  language={language as "th" | "en"}
                />
              </div>
            )}
          {serverComputed &&
            isEnded &&
            serverComputed.deniedReason === "group_quota_full" && (
              <div className="flex h-full w-full flex-col gap-8">
                <div className="flex flex-col items-center gap-10">
                  {!voucher.metadata.layout?.title?.visible && (
                    <h1 className="whitespace-pre-line text-center text-2xl font-bold text-white">
                      {displayMessage}
                    </h1>
                  )}
                </div>
                <InlineNotice
                  language={language as "th" | "en"}
                  deniedReason={serverComputed.deniedReason ?? null}
                  className="mx-3 -mt-4"
                  level="medium"
                />
                <ChooseAnotherVoucherButton
                  onClick={navigateToBack}
                  primaryColor={primaryColor}
                  language={language as "th" | "en"}
                />
              </div>
            )}
          {serverComputed &&
            serverComputed.effectiveStatus === "not_started" &&
            (teaserImage ? (
              <div className="flex h-full w-full">
                <LazyImage
                  src={teaserImage}
                  alt={"Teaser"}
                  className="h-full w-full object-cover"
                  wrapperClassName="h-full w-full"
                  placeholder="blur"
                  blurDataURL={getDirectusFileUrl(String(teaserImage), {
                    width: 64,
                    height: 36,
                  })}
                  rootMargin="200px"
                  priority
                />
              </div>
            ) : (
              <div className="flex h-full w-full flex-col gap-8">
                <div className="flex flex-col items-center gap-6">
                  {!voucher.metadata.layout?.title?.visible && (
                    <h1 className="whitespace-pre-line text-center text-2xl font-bold text-white sm:text-3xl">
                      {displayMessage}
                    </h1>
                  )}
                  {!voucher.metadata.layout?.description?.visible && (
                    <h3 className="whitespace-pre-line text-center text-xl text-white sm:text-2xl">
                      {displayDescription[language]}
                    </h3>
                  )}
                </div>
                {serverComputed &&
                  (serverComputed.deniedReason ||
                    (serverComputed.available ?? 0) <= 0) && (
                    <InlineNotice
                      language={language as "th" | "en"}
                      deniedReason={serverComputed.deniedReason ?? null}
                      message={
                        serverComputed.deniedReason
                          ? undefined
                          : (serverComputed.available ?? 0) <= 0
                            ? language === "th"
                              ? "คูปองถูกเก็บครบแล้ว"
                              : "All vouchers have been collected."
                            : undefined
                      }
                      className="mx-3 -mt-6"
                      level="soft"
                    />
                  )}
                <ChooseAnotherVoucherButton
                  onClick={navigateToBack}
                  primaryColor={primaryColor}
                  language={language as "th" | "en"}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
function formatTime(totalSeconds: number) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// แปลงวินาทีให้เป็นหน่วยเดียวที่ใหญ่ที่สุด (วัน/ชั่วโมง/นาที/วินาที)
function formatDurationSingleUnit(
  totalSeconds: number,
  lang: "th" | "en" = "th",
) {
  const s = Math.max(0, Math.floor(totalSeconds || 0));
  const DAY = 86400;
  const HOUR = 3600;
  const MIN = 60;

  if (s >= DAY) {
    const n = Math.floor(s / DAY);
    return lang === "th" ? `${n} วัน` : `${n} day${n > 1 ? "s" : ""}`;
  }
  if (s >= HOUR) {
    const n = Math.floor(s / HOUR);
    return lang === "th" ? `${n} ชั่วโมง` : `${n} hour${n > 1 ? "s" : ""}`;
  }
  if (s >= MIN) {
    const n = Math.floor(s / MIN);
    return lang === "th" ? `${n} นาที` : `${n} minute${n > 1 ? "s" : ""}`;
  }
  // น้อยกว่า 1 นาที แสดงเป็นวินาที
  const n = s;
  return lang === "th" ? `${n} วินาที` : `${n} second${n !== 1 ? "s" : ""}`;
}

function getCollectText({
  lang,
  activeTier,
  voucher,
}: {
  lang: "th" | "en";
  activeTier?: { value?: number; type?: string } | null;
  voucher: Voucher;
}) {
  // 1. หาค่า value/type ที่จะใช้ (activeTier ก่อน, fallback เป็น tier สุดท้าย)
  const tiers = voucher.metadata.discount_tiers;
  const fallbackTier = tiers?.[tiers.length - 1];
  const value = activeTier?.value ?? fallbackTier?.value ?? "";
  const type = activeTier?.type ?? fallbackTier?.type ?? "";

  // 2. แยก unit ตามภาษาและ type
  const unit = type === "percentage" ? "% " : "";

  // 3. สร้างข้อความ
  if (lang === "th") {
    return `รับ${value ? ` ส่วนลด ${value}` : ""}${unit}เลย`;
  }
  return `Collect${value ? ` Discount ${value}` : ""} ${unit}`;
}

export default LimitedTimePage;
