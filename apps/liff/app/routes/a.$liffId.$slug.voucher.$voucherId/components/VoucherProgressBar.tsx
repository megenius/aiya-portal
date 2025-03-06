import React from "react";

interface VoucherProgressBarProps {
  totalVouchers: number;
  collectedVouchers: number;
  primaryColor?: string;
  language: string;
}

const VoucherProgressBar: React.FC<VoucherProgressBarProps> = ({
  totalVouchers,
  collectedVouchers,
  primaryColor,
  language
}) => {
  // Calculate remaining coupons and percentage
  const remainingVouchers = totalVouchers - collectedVouchers;
  const remainingPercentage = Math.round((remainingVouchers / totalVouchers) * 100);
  const remainingText = { th: "คูปองคงเหลือ", en: "Remaining Vouchers" };
  const warningText = { th: "คูปองใกล้หมด! รีบใช้ก่อนหมดเวลา", en: "Vouchers are running out! Use them before they expire" };

  return (
    <div className="px-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">
          {remainingText[language]}
        </span>
        <span className="text-sm font-bold text-primary" style={{ color: primaryColor }}>
          {remainingPercentage}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full transition-all duration-500 ease-in-out bg-primary"
          style={{
            width: `${remainingPercentage}%`,
            backgroundColor: primaryColor,
          }}
        ></div>
      </div>

      {remainingPercentage <= 20 && (
        <p className="text-xs text-red-500 mt-1">
          {warningText[language]}
        </p>
      )}
    </div>
  );
};

export default VoucherProgressBar;