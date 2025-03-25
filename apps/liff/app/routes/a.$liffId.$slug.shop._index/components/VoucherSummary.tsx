import React from "react";
import { Ticket } from "lucide-react";
import { useNavigate, useParams } from "@remix-run/react";
import { lightenColor } from "~/utils/colors";

interface VoucherSummaryProps {
  language: string;
  totalVouchers?: number;
  availableVouchers?: number;
  usedVouchers?: number;
  primaryColor?: string;
  // totalSaved?: string;
}

const VoucherSummary: React.FC<VoucherSummaryProps> = ({
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
    navigate(`/a/${liffId}/${slug}/myVouchers`);
  };
  const availablePercentage =
    totalVouchers > 0 ? (availableVouchers / totalVouchers) * 100 : 0;
  const myVouchersText = {
    th: "คูปองของฉัน",
    en: "My Vouchers",
  };
  const vouchersCollectedText = {
    th: "คูปองที่เก็บ",
    en: "Vouchers collected",
  };
  const aviailableText = {
    th: "พร้อมใช้งาน",
    en: "Available",
  };
  const usedText = {
    th: "ใช้แล้ว",
    en: "Used",
  };
  const viewAllVouchersText = {
    th: "ดูทั้งหมด",
    en: "View All",
  };

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
                  {myVouchersText[language]}
                </h3>
                <div className="flex items-baseline">
                  <span className="text-xl font-bold text-white">
                    {totalVouchers}
                  </span>
                  <span className="ml-1 text-white/70 text-sm">
                    {vouchersCollectedText[language]}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-medium ">{viewAllVouchersText[language]}</h4>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-3">
            <div className="flex justify-between mb-1">
              <div className="text-white/90 text-sm font-medium">
                {aviailableText[language]}
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
                {usedText[language]}: {usedVouchers}
              </div>
              {/* <div className="text-white/70 text-xs">Total saved: {totalSaved}</div> */}
            </div>
          </div>
          {/* <button
            className="w-full bg-white/10 border border-white/20 text-white py-2 rounded-lg flex items-center justify-center font-medium relative z-10"
            onClick={navigateToMyVouchers}
          >
            {viewAllVouchersText[language]}
          </button> */}
        </div>
      </div>
    </button>
  );
};

export default VoucherSummary;
