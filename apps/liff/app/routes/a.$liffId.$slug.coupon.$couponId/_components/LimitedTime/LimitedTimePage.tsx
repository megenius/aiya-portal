import React, { useEffect, useState } from "react";
import { DiscountTier, Voucher, VoucherView } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import LimitedTimeTimer from "./LimitedTimeTimer";
import { useNavigate, useParams } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { th } from "date-fns/locale";
import { formatDateTime } from "~/utils/helpers";
interface LimitedTimePageProps {
  voucher: Voucher;
  voucherView?: VoucherView;
  language: string;
  isSubmitting: boolean;
  onSubmit: (tier: DiscountTier | undefined) => void;
}

const LimitedTimePage: React.FC<LimitedTimePageProps> = ({
  voucher,
  voucherView,
  language,
  isSubmitting,
  onSubmit,
}) => {
  const [activeTier, setActiveTier] = useState<DiscountTier | undefined>(
    undefined
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
      // ใช้ voucherView.date_created เป็นจุดตั้งต้น
      let cumulativeStartTime = new Date(
        voucherView?.date_created as string
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
          (t) => t.condition.default === true
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
            : 0
        );
      } else if (tierDeadline > 0 && currentTier) {
        // กรณีเป็น Tier ที่มีเงื่อนไขเวลา
        const remainingTime = Math.round((tierDeadline - now) / 1000);
        setTimeLeft(remainingTime > 0 ? remainingTime : 0);
        setProgress(
          remainingTime > 0
            ? ((remainingTime * 1000) / totalDurationForTier) * 100
            : 0
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
      }`
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
      collect: "หลังกดรับคูปองมีอายุ 2 ชั่วโมง",
    },
    en: {
      collect:
        "After clicking the collect button, the voucher will expire in 2 hours.",
    },
  };

  return (
    <>
      {voucherView && timeLeft <= 0 && !activeTier && (
        <div className="absolute inset-0 z-50 bg-black bg-opacity-70 flex justify-center items-center pointer-events-auto">
          <div className="rotate-[-15deg] flex flex-col items-center justify-center gap-2">
            <div className="w-full h-0.5 bg-white rounded-lg"></div>
            <div className="px-5">
              <span className="text-white text-lg sm:text-xl text-center whitespace-pre-line">
                ขออภัย ขณะนี้หมดเวลารับคูปองแล้ว!
              </span>
            </div>
            <div className="w-full h-0.5 bg-white rounded-lg"></div>
          </div>
        </div>
      )}
      <div className="relative w-full h-full">
        {/* ปุ่มย้อนกลับ */}
        <button
          className="absolute top-4 left-4 z-50 flex items-center gap-2 bg-transparent text-white font-light focus:outline-none"
          onClick={navigateToBack}
        >
          <ArrowLeft className="h-6 w-6" />
          <span className="sm:text-lg">กลับหน้าหลัก</span>
        </button>
        <img
          src={
            getDirectusFileUrl(voucher.banner as string) ||
            "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=450&fit=crop"
          }
          alt={voucher.name || "Promotion"}
          className="w-full h-full object-cover"
        />
        <div className="absolute pt-[50%] p-4 inset-0 flex justify-center items-center">
          {voucherView && <div className="w-full h-full flex flex-col gap-8">
            <div className="flex flex-col items-center gap-10">
              <h1 className="text-white text-2xl font-bold whitespace-pre-line text-center">
                {displayMessage}
              </h1>

              <LimitedTimeTimer time={formatTime(timeLeft)} />
            </div>
            <div className="px-3 flex flex-col gap-2 justify-center items-center">
              <button
                onClick={() => onSubmit(activeTier)}
                disabled={isSubmitting}
                // className={`w-full py-4 text-lg sm:text-2xl rounded-xl border-0 transition ${
                //   isSubmitting
                //     ? "bg-gray-300 text-gray-500"
                //     : "bg-gradient-to-r from-[#D43E0B] via-[#FDBF44] to-[#D43E0B] text-white"
                // }`}
                className={`w-full py-4 text-lg sm:text-2xl rounded-xl border-0 transition ${
                  isSubmitting
                    ? "bg-gray-300 text-gray-500"
                    : "bg-[#9AD3A8] text-[#375CA3] font-bold"
                }`}
              >
                {isSubmitting
                  ? "กำลังรับคูปอง..."
                  : textButton[language].collect}
              </button>
              <h5 className="text-white text-sm sm:text-base text-center whitespace-pre-line">
                {descriptionButton[language].collect}
              </h5>
            </div>
          </div>}
          {!voucherView && (
            <div className="w-full h-full flex flex-col gap-20">
              <div className="flex flex-col items-center gap-6">
                <h1 className="text-white text-2xl sm:text-3xl font-bold whitespace-pre-line text-center">
                  {displayMessage}
                </h1>
                <h3 className="text-white text-xl sm:text-2xl text-center whitespace-pre-line">
                  {displayDescription[language]}
                </h3>
              </div>
              <div className="px-3 flex flex-col gap-2 justify-center items-center">
                <button
                  onClick={() => navigateToBack()}
                  className={`w-full py-4 text-lg sm:text-2xl rounded-xl border-0 transition bg-[#9AD3A8] text-[#375CA3] font-bold`}
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
  const unit =
    type === "percentage"
      ? "%"
      : type === "gift"
        ? lang === "th" ? "ขวดน้ำ" : "Water Bottle"
        : "";

  // 3. สร้างข้อความ
  if (lang === "th") {
    return `รับ${value ? ` ส่วนลด ${value}` : ""}${unit}เลย`;
  }
  return `Collect${value ? ` Discount ${value}` : ""}${unit}`;
}


export default LimitedTimePage;
