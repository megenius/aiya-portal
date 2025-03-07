import React from "react";

interface VoucherProgressBarProps {
  totalVouchers: number;
  availableVouchers: number;
  primaryColor?: string;
  language: string;
}

const VoucherProgressBar: React.FC<VoucherProgressBarProps> = ({
  totalVouchers,
  availableVouchers,
  primaryColor,
  language
}) => {
  // Calculate remaining coupons and percentage
  const remainingPercentage = Math.round((availableVouchers / totalVouchers) * 100);
  const remainingText = { th: "คูปองคงเหลือ", en: "Remaining Vouchers" };
  const warningText = { th: "คูปองใกล้หมด! รีบใช้ก่อนหมดเวลา", en: "Vouchers are running out! Use them before they expire" };
  const fullyCollectedText = { th: "คูปองถูกเก็บหมดแล้ว", en: "Vouchers fully collected" };
  
  const isFullyCollected = availableVouchers === 0;

  return (
    <div className="px-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">
          {remainingText[language]}
        </span>
        <span className={`text-sm font-bold ${isFullyCollected ? 'text-gray-500' : 'text-primary'}`} style={{ color: isFullyCollected ? undefined : primaryColor }}>
          {remainingPercentage}%
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full transition-all duration-500 ease-in-out ${isFullyCollected ? 'bg-gray-500' : 'bg-primary'}`}
          style={{
            width: `${remainingPercentage}%`,
            backgroundColor: isFullyCollected ? undefined : primaryColor,
          }}
        ></div>
      </div>

      {remainingPercentage <= 20 && !isFullyCollected && (
        <p className="text-xs text-red-500 mt-1">
          {warningText[language]}
        </p>
      )}
      
      {isFullyCollected && (
        <p className="text-xs text-gray-500 mt-1">
          {fullyCollectedText[language]}
        </p>
      )}
    </div>
  );
};

export default VoucherProgressBar;