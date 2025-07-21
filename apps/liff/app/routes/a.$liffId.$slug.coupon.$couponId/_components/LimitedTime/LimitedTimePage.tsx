import React, { useEffect, useState } from "react";
import { DiscountTier, Voucher } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import Button from "../Button";
import LimitedTimeTimer from "./LimitedTimeTimer";
import { useNavigate, useParams } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";
import { useVoucherView } from "~/hooks/vouchers/useVoucherViews";
import Loading from "~/components/Loading";

interface LimitedTimePageProps {
  voucher: Voucher;
  language: string;
  primaryColor: string;
  onSubmit: (tier: DiscountTier | undefined) => void;
}

const LimitedTimePage: React.FC<LimitedTimePageProps> = ({
  voucher,
  language,
  primaryColor,
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
  const { data: voucherView, isLoading: isVoucherViewLoading } = useVoucherView(
    {
      voucherId: voucher.id,
    }
  );

  // แทนที่ ${value} ด้วย activeTier.value
  const displayMessage = messageFromApi.replace(
    /\$\{value\}/g,
    activeTier?.value ??
      voucher.metadata.discount_tiers?.[
        voucher.metadata.discount_tiers.length - 1
      ].value
  );

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
      isVoucherViewLoading ||
      !voucher?.metadata?.discount_tiers ||
      voucher.metadata.discount_tiers.length === 0
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
  }, [voucher, voucherView, isVoucherViewLoading]);

  const textButton = {
    th: {
      collect: `รับคูปอง ${
        activeTier?.value ??
        voucher.metadata.discount_tiers?.[
          voucher.metadata.discount_tiers.length - 1
        ].value
      }% เลย`,
      redeem: "ใช้คูปอง",
      expired: "หมดอายุแล้ว",
    },
    en: {
      collect: `Collect ${
        activeTier?.value ??
        voucher.metadata.discount_tiers?.[
          voucher.metadata.discount_tiers.length - 1
        ].value
      }%`,
      redeem: "Redeem",
      expired: "Expired",
    },
  };
  const descriptionButton = {
    th: {
      collect: "หลังกดรับคูปองมีอายุ 5 ชั่วโมง",
      redeem:
        "เมื่อกดใช้แล้วคูปองมีอายุ 15 นาที\nโปรดแสดงสิทธิ์ตอนเปิดโต๊ะหน้าร้าน",
    },
    en: {
      collect:
        "After clicking the collect button, the voucher will expire in 5 hours.",
      redeem:
        "After clicking the redeem button, the voucher will expire in 15 minutes. Please show the voucher when ordering.",
    },
  };

  if (isVoucherViewLoading) {
    return <Loading primaryColor={primaryColor} />;
  }

  return (
    <>
      {timeLeft <= 0 && !activeTier && (
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
          <div className="w-full h-full flex flex-col gap-8">
            <div className="flex flex-col items-center gap-10">
              <h1 className="text-white text-2xl font-bold whitespace-pre-line text-center">
                {displayMessage}
              </h1>

              <LimitedTimeTimer time={formatTime(timeLeft)} />
            </div>
            <div className="px-3 flex flex-col gap-2 justify-center items-center">
              <Button
                className="py-4 text-lg sm:text-2xl text-white border-0 bg-gradient-to-r from-[#D43E0B] via-[#FDBF44] to-[#D43E0B]"
                text={textButton[language].collect}
                onClick={() => onSubmit(activeTier)}
              />
              <h5 className="text-white text-sm sm:text-base text-center whitespace-pre-line">
                {descriptionButton[language].collect}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  function formatTime(totalSeconds: number) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    if (hours > 0) {
      return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
};

export default LimitedTimePage;
