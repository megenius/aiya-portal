import React from "react";
import { getDirectusFileUrl } from "~/utils/files";
import { Brand, Voucher } from "~/types/app";

interface VoucherCardProps {
  brand: Brand;
  voucher: Voucher;
  onClick: (voucherId: string) => void;
  language: string;
}

// สไตล์ CSS โดยตรงสำหรับการแสดงข้อความที่ตัดด้วย ...
const textTruncateStyle = {
  display: "block",
  maxWidth: "100%",
  whiteSpace: "nowrap" as const,
  overflow: "hidden" as const,
  textOverflow: "ellipsis" as const
};

const VoucherCard: React.FC<VoucherCardProps> = ({
  brand,
  voucher,
  onClick,
  language,
}) => {
  const title = voucher.metadata.title[language];
  const voucherText = {
    collected: {
      th: "แตะเพื่อใช้คูปอง",
      en: "Tap to redeem",
    },
    used: {
      th: "ใช้แล้ว",
      en: "Redeemed",
    },
    expired: {
      th: "หมดอายุแล้ว",
      en: "Expired",
    },
  };

  return (
    <div className="w-full">
      {/* Ticket outer container */}
      <div className="relative">
        <button
          className="flex w-full h-28 border rounded-lg overflow-hidden"
          onClick={() => onClick(voucher.id)}
        >
          {/* Ticket inner container */}
          {/* Main ticket area (left side) */}
          <div className="flex-1 flex h-full bg-white rounded-l-lg relative">
              <img
                src={getDirectusFileUrl(voucher.cover as string) ?? ""}
                alt={title}
                className="w-24 object-cover mr-3"
              />
              <div className="py-3 space-y-3 flex flex-1 flex-col justify-between">
                <div className="w-full max-w-36 text-start">
                  <h3 
                    className="font-medium" 
                    style={textTruncateStyle}
                  >
                    {brand.name}
                  </h3>
                  <h4 
                    className="text-sm text-gray-600" 
                    style={textTruncateStyle}
                  >
                    {title}
                  </h4>
                </div>
                {/* <div className={`flex items-center gap-2 text-sm`}>
                  <span 
                    className="flex-1 text-start" 
                    style={textTruncateStyle}
                  >
                    {voucherUser.code.code_status === "used" && timeLeft > 0
                      ? voucherText["collected"][language]
                      : voucherText[
                          voucherUser.code.code_status ?? "collected"
                        ][language]}
                  </span>
                </div> */}
              </div>
          </div>

          {/* Tear-off section (right side) */}
          <div
            className="w-20 h-full bg-primary flex flex-col items-center justify-center border-l-2 border-dotted border-white text-white"
            style={{ backgroundColor: voucher.primaryColor || undefined }}
          >
            <div className="transform -rotate-90">
              <div className="text-center space-y-2 overflow-hidden">
                {/* <p className="text-xs">COUPON</p> */}
                <p 
                  className="text-base font-medium w-24" 
                  style={textTruncateStyle}
                >
                  {brand.name}
                </p>
                <img
                  src={getDirectusFileUrl(
                    (brand.logo as string) ?? ""
                  )}
                  alt={brand.name ?? ""}
                  className="w-7 h-7 mx-auto rounded-full object-cover border border-white shadow-sm"
                />
                {/* <div className="w-7 h-7 mx-auto flex justify-center items-center rounded-full object-cover text-gray-500 bg-white border border-white shadow-sm text-[6px]">
                  LOGO
                </div> */}
                {/* <QrCode className="h-6 w-6 mx-auto mt-1" /> */}
              </div>
            </div>
          </div>
        </button>
        <div className="absolute left-0 top-0 h-full">
          {[...Array(10)].map((_, i) => (
            <div
              key={`left-perf-${i}`}
              className="absolute w-2 h-2 bg-gray-50 border-r border-gray-400 rounded-full -translate-x-1"
              style={{ top: `${(i * 100) / 10}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoucherCard;