import React, { useEffect, useState } from "react";
import { DiscountTier, Voucher, VoucherStats } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import Button from "./Button";
import LimitedTimeProgressBar from "./LimitedTimeProgressBar";

interface LimitedTimePageProps {
  voucher: Voucher;
  language: string;
  primaryColor: string;
}

const LimitedTimePage: React.FC<LimitedTimePageProps> = ({
  voucher,
  language,
  primaryColor,
}) => {
  const [activeTier, setActiveTier] = useState<DiscountTier | undefined>(
    undefined
  );
  const [timeLeft, setTimeLeft] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (
      !voucher?.metadata?.discount_tiers ||
      voucher.metadata.discount_tiers.length === 0
    ) {
      return;
    }

    const calculateCurrentState = () => {
      // ใช้เวลาเริ่มต้นของคูปองเป็นจุดตั้งต้น
      let cumulativeStartTime = new Date(
        voucher.start_date as string
      ).getTime(); // <<< เวลาเริ่มต้นแบบทบต้น
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
  }, [voucher]);

  const textButton = {
    th: {
      collect: "เก็บคูปอง",
      redeem: "ใช้คูปอง",
      expired: "หมดอายุแล้ว",
    },
    en: {
      collect: "Collect",
      redeem: "Redeem",
      expired: "Expired",
    },
  };
  const descriptionButton = {
    th: {
      collect: "หลังกดรับคูปองมีอายุ 5 ชั่วโมง",
      redeem:
        "เมื่อกดใช้เเล้วคูปองมีอายุ 15 นาที\nโปรดแสดงสิทธิ์ตอนเปิดโต๊ะหน้าร้าน",
    },
    en: {
      collect:
        "After clicking the collect button, the voucher will expire in 5 hours.",
      redeem:
        "After clicking the redeem button, the voucher will expire in 15 minutes. Please show the voucher when ordering.",
    },
  };
  return (
    <>
      {/* <div
        className="h-full relative"
        style={{
          backgroundImage: `url(${getDirectusFileUrl(voucher.banner as string)})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <Button
            text={textButton[language].collect}
            className="py-4"
            primaryColor={primaryColor}
          />
          <p className="text-center text-gray-600 mt-2 text-sm">
            {descriptionButton[language].collect}
          </p>
        </div>
      </div> */}

      <div
                className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden"
              >
                <img
                  src={
                    getDirectusFileUrl(voucher.cover as string) ||
                    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&h=450&fit=crop"
                  }
                  alt={voucher.name || "Promotion"}
                  className="w-full h-full object-cover"
                />
                <div className="p-4 w-full flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">
          {voucher.metadata.title[language]}
        </h1>
        <h4>{activeTier?.value}%</h4>
        <LimitedTimeProgressBar
          percentage={progress}
          timeLeft={timeLeft}
          primaryColor={primaryColor}
          language={language}
        />
      </div>
              </div>

      
    </>
  );
};

export default LimitedTimePage;
