import React, { useEffect, useState } from "react";
import { DiscountTier, Voucher, VoucherView } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import LimitedTimeTimer from "./LimitedTimeTimer";
import { useNavigate, useParams } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { formatDateTime } from "~/utils/helpers";

interface LimitedTimePageProps {
  voucher: Voucher;
  voucherView?: VoucherView;
  language: string;
  primaryColor?: string;
  isSubmitting: boolean;
  onSubmit: (tier: DiscountTier | undefined) => void;
}

const LimitedTimePage: React.FC<LimitedTimePageProps> = ({
  voucher,
  voucherView,
  language,
  primaryColor,
  isSubmitting,
  onSubmit,
}) => {
  const [activeTier, setActiveTier] = useState<DiscountTier | undefined>(
    undefined,
  );
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);
  const messageFromApi = voucher.metadata.title[language];
  const { liffId, slug } = useParams();
  const navigate = useNavigate();

  const navigateToBack = () => {
    const idx = window.history.state?.idx ?? window.history.length;
    if (idx > 0) {
      navigate(-1);
    } else {
      navigate(`/a/${liffId}/${slug}/shop`);
    }
  };

  useEffect(() => {
    if (
      !voucher?.metadata?.discount_tiers ||
      voucher.metadata.discount_tiers.length === 0 ||
      !voucherView
    ) {
      return;
    }

    const calculateCurrentState = () => {
      // ใช้ voucherView.first_viewed_at เป็นจุดตั้งต้น
      let cumulativeStartTime = new Date(
        voucherView?.first_viewed_at as string,
      ).getTime(); // <<< เวลาเริ่มต้นแบบทบต้นใหม่
      const now = new Date().getTime();

      let currentTier: DiscountTier | undefined = undefined;
      let tierDeadline = 0;
      let totalDurationForTier = 0;
      let isDefaultTierActive = false;

      // วน Loop หา Tier ที่กำลังทำงานอยู่
      for (const tier of voucher.metadata.discount_tiers || []) {
        if (tier.condition.duration_before_claim_seconds) {
          const tierDuration =
            tier.condition.duration_before_claim_seconds * 1000;
          // คำนวณเส้นตายของ Tier นี้จากเวลาเริ่มต้นล่าสุด
          const deadline = cumulativeStartTime + tierDuration;

          // ถ้าเวลาปัจจุบันยังไม่เลยเส้นตายของ Tier นี้
          if (now < deadline) {
            currentTier = tier;
            tierDeadline = deadline;
            totalDurationForTier = tierDuration; // <<< ใช้ระยะเวลาของ Tier นี้เป็นตัวหาร
            break; // เจอ Tier ที่ทำงานอยู่แล้ว ออกจาก Loop
          } else {
            // ถ้าเวลาเลย Tier นี้ไปแล้ว ให้อัปเดตเวลาเริ่มต้นสำหรับ Loop ถัดไป
            cumulativeStartTime = deadline; // <<< จุดสำคัญที่เปลี่ยนแปลง
          }
        }
      }

      // ถ้าไม่เจอ Tier ที่มีเงื่อนไขเวลา ให้หา Tier ที่เป็น default
      if (!currentTier && voucher.metadata.discount_tiers) {
        const defaultTier = voucher.metadata.discount_tiers.find(
          (t) => t.condition.default === true,
        );
        if (defaultTier) {
          currentTier = defaultTier;
          isDefaultTierActive = true; // ตั้งค่าสถานะว่าเป็น Tier default
        }
      }

      setActiveTier(currentTier);

      // --- ตรรกะการคำนวณเวลาและ ProgressBar ที่อัปเดตแล้ว ---
      if (isDefaultTierActive && currentTier && voucher.end_date) {
        // กรณีเป็น Tier default: นับถอยหลังจากวันหมดอายุของคูปอง
        const campaignEndDate = new Date(voucher.end_date).getTime();
        const finalPhaseTotalDuration = campaignEndDate - cumulativeStartTime;
        const remainingTime = Math.round((campaignEndDate - now) / 1000);

        setTimeLeft(remainingTime > 0 ? remainingTime : 0);
        setProgress(
          remainingTime > 0 && finalPhaseTotalDuration > 0
            ? ((remainingTime * 1000) / finalPhaseTotalDuration) * 100
            : 0,
        );
      } else if (tierDeadline > 0 && currentTier) {
        // กรณีเป็น Tier ที่มีเงื่อนไขเวลา
        const remainingTime = Math.round((tierDeadline - now) / 1000);
        setTimeLeft(remainingTime > 0 ? remainingTime : 0);
        setProgress(
          remainingTime > 0
            ? ((remainingTime * 1000) / totalDurationForTier) * 100
            : 0,
        );
      } else {
        // กรณีอื่นๆ หรือหมดเวลาแล้ว
        setTimeLeft(0);
        setProgress(0);
      }
    };

    calculateCurrentState();
    const timerId = setInterval(calculateCurrentState, 1000);

    return () => clearInterval(timerId);
  }, [voucher, voucherView]);

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

  const otherVoucherTextButton = {
    th: "เลือกดูคูปองอื่นก่อน",
    en: "Choose another voucher",
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
  const descriptionButton = {
    th: {
      collect: `หลังกดรับคูปองมีอายุ ${formatDurationSingleUnit(voucher.validity_in_seconds ?? 0, "th")}`,
    },
    en: {
      collect: `After clicking the collect button, the voucher will expire in ${formatDurationSingleUnit(voucher.validity_in_seconds ?? 0, "en")}.`,
    },
  };

  const endedTextButton = {
    th: "ขออภัย ขณะนี้หมดเวลารับคูปองแล้ว!",
    en: "Sorry, coupon collection time has ended!",
  };

  const backToHomeTextButton = { th: "กลับหน้าหลัก", en: "Back to Home" };

  return (
    <>
      {voucherView && timeLeft <= 0 && !activeTier && (
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
        <button
          className="absolute left-4 top-4 z-50 flex items-center gap-2 bg-transparent font-light text-white focus:outline-none"
          onClick={navigateToBack}
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="sm:text-lg">{backToHomeTextButton[language]}</span>
        </button>
        <img
          src={
            getDirectusFileUrl(voucher.poster as string) ||
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=450&fit=crop"
          }
          alt={voucher.name || "Promotion"}
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 p-4 pt-[50%]"
          style={{ paddingTop: voucher.metadata.layout?.container?.paddingTop }}
        >
          {voucherView && (
            <div className="flex h-full w-full flex-col gap-8">
              <div className="flex flex-col items-center gap-10">
                {!voucher.metadata.layout?.title?.visible && (
                  <h1 className="whitespace-pre-line text-center text-2xl font-bold text-white">
                    {displayMessage}
                  </h1>
                )}

                <LimitedTimeTimer time={formatTime(timeLeft)} />
              </div>
              <div className="flex flex-col items-center justify-center gap-2 px-3">
                <button
                  onClick={() => onSubmit(activeTier)}
                  disabled={isSubmitting}
                  // className={`w-full py-4 text-lg sm:text-2xl rounded-xl border-0 transition ${
                  //   isSubmitting
                  //     ? "bg-gray-300 text-gray-500"
                  //     : "bg-gradient-to-r from-[#D43E0B] via-[#FDBF44] to-[#D43E0B] text-white"
                  // }`}
                  className={`w-full rounded-xl border-0 py-4 text-lg transition sm:text-2xl ${
                    isSubmitting
                      ? "bg-gray-300 text-gray-500"
                      : "bg-[#9AD3A8] font-bold text-[#375CA3]"
                  }`}
                  style={{
                    backgroundColor: isSubmitting ? "#d1d5db" : primaryColor,
                    color: isSubmitting ? "#6b7280" : "white",
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                >
                  {isSubmitting
                    ? language === "th"
                      ? "กำลังรับคูปอง..."
                      : "Collecting..."
                    : textButton[language].collect}
                </button>
                <h5 className="whitespace-pre-line text-center text-sm text-white sm:text-base">
                  {descriptionButton[language].collect}
                </h5>
              </div>
            </div>
          )}
          {!voucherView && (
            <div className="flex h-full w-full flex-col gap-20">
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
              <div className="flex flex-col items-center justify-center gap-2 px-3">
                <button
                  onClick={() => navigateToBack()}
                  className={`w-full rounded-xl border-0 bg-[#9AD3A8] py-4 text-lg font-bold text-[#375CA3] transition sm:text-2xl`}
                  style={{
                    backgroundColor: primaryColor ? primaryColor : undefined,
                    color: primaryColor ? "white" : undefined,
                  }}
                >
                  {otherVoucherTextButton[language]}
                </button>
              </div>
            </div>
          )}
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
