import { useNavigate, useParams } from "@remix-run/react";
import { Ticket } from "lucide-react";
import React from "react";
import { lightenColor } from "~/utils/colors";
import { t } from "~/i18n/messages";

interface CouponSummaryProps {
  language: string;
  totalVouchers?: number;
  availableVouchers?: number;
  usedVouchers?: number;
  primaryColor?: string;
  // totalSaved?: string;
}

const CouponSummary: React.FC<CouponSummaryProps> = ({
  language,
  totalVouchers = 12,
  availableVouchers = 8,
  usedVouchers = 4,
  primaryColor
  // totalSaved = "฿218.50",
}) => {
  const { liffId, slug } = useParams();
  const navigate = useNavigate();
  const navigateToMyVouchers = () => {
    navigate(`/a/${liffId}/${slug}/my-coupons`, );
  };
  const availablePercentage =
    totalVouchers > 0 ? (availableVouchers / totalVouchers) * 100 : 0;
  const myCouponsText = t(language as "th" | "en", "shopSummary.myCoupons");
  const aviailableText = t(language as "th" | "en", "shopSummary.available");
  const usedText = t(language as "th" | "en", "shopSummary.used");
  const viewAllCouponsText = t(language as "th" | "en", "shopSummary.viewAll");
  const couponsAvailableText = t(
    language as "th" | "en",
    "shopSummary.couponsAvailable",
  );
  

  return (
    <button
      onClick={navigateToMyVouchers}
      className="w-full bg-gradient-to-r from-primary to-primaryLight rounded-xl shadow-lg overflow-hidden"
      style={{
        backgroundImage: primaryColor ? `linear-gradient(to right, ${primaryColor},${lightenColor(primaryColor, 20)})` : undefined, // ใช้สีอ่อนเป็นจุดเริ่ม
      }}
    >
      <div className="relative p-4">
        <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10 z-0"></div>
        <div className="absolute left-16 -bottom-16 w-40 h-40 rounded-full bg-white opacity-5 z-0"></div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <div className="relative flex items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                <Ticket className="text-white h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-start text-white font-medium text-lg">
                  {myCouponsText}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-white">
                    {availableVouchers}
                  </span>
                  <span className="ml-1 text-white/70 text-sm">
                    {couponsAvailableText}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium ">{viewAllCouponsText}</h4>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex justify-between mb-1">
              <div className="text-white/90 text-sm font-medium">
                {aviailableText}
              </div>
              <div className="text-white/90 text-sm font-medium">
                {availableVouchers}
              </div>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1.5 mb-2">
              <div
                className="bg-white h-1.5 rounded-full"
                style={{ width: `${availablePercentage}%` }}
              ></div>
            </div>
            <div className="flex justify-between">
              <div className="text-white/70 text-xs">
                {usedText}: {usedVouchers}
              </div>
              {/* <div className="text-white/70 text-xs">Total saved: {totalSaved}</div> */}
            </div>
          </div>
          {/* <button
            className="w-full bg-white/10 border border-white/20 text-white py-2 rounded-lg flex items-center justify-center font-medium relative z-10"
            onClick={navigateToMyCoupons}
          >
            {viewAllCouponsText[language]}
          </button> */}
        </div>
      </div>
    </button>
  );
};

export default CouponSummary;
