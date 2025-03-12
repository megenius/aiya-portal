import React from "react";
import { CheckCircle, QrCode, XCircle } from "lucide-react";
import { VoucherUser } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";

interface VoucherCardProps {
  voucherUser: VoucherUser;
  onClick: (voucherUserId: string) => void;
  language: string;
}

const VoucherCard: React.FC<VoucherCardProps> = ({
  voucherUser,
  onClick,
  language,
}) => {
  const voucher = voucherUser.code.voucher;
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
  let timeLeft = 0;
  if (voucherUser.used_date) {
    const usedDateTime = new Date(voucherUser.used_date).getTime();
    const expiryTime = usedDateTime + 15 * 60 * 1000; // 15 minutes after used_date
    const now = new Date().getTime();
    timeLeft = Math.floor((expiryTime - now) / 1000);
  }

  return (
    <div className="w-full">
      {/* Ticket outer container */}
      <div className="relative">
        <button
          className="flex w-full border rounded-lg overflow-hidden"
          onClick={() =>
            voucherUser.code.code_status === "collected" ||
            (voucherUser.code.code_status === "used" && timeLeft > 0)
              ? onClick(voucherUser.id.toString())
              : null
          }
        >
          {/* Ticket inner container */}
          {/* Main ticket area (left side) */}
          <div className="flex-1 bg-white rounded-l-lg relative">
            <div className="flex">
              <img
                src={getDirectusFileUrl(voucher.cover as string) ?? ""}
                alt={title}
                className="w-24 object-cover mr-3"
              />
              <div className="py-3 space-y-3 flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="w-full text-start max-w-36 text-nowrap truncate font-medium">
                    {voucher.voucher_brand_id?.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{title}</span>
                  </div>
                </div>
                <div className={`flex items-center gap-2 text-sm ${timeLeft > 0 ? "text-orange-500" : "text-gray-500"}`}>
                  {voucherUser.code.code_status === "used" && timeLeft <= 0 && (
                    <CheckCircle className="h-4 w-4" />
                  )}
                  {((voucherUser.code.code_status === "used" && timeLeft > 0) ||
                    voucherUser.code.code_status === "collected") && (
                    <QrCode className="h-4 w-4" />
                  )}
                  {voucherUser.code.code_status === "expired" && (
                    <XCircle className="h-4 w-4" />
                  )}
                  <span>
                    {voucherUser.code.code_status === "used" && timeLeft > 0
                      ? voucherText["collected"][language]
                      : voucherText[
                          voucherUser.code.code_status ?? "collected"
                        ][language]}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Tear-off section (right side) */}
          <div
            className="bg-primary flex flex-col items-center justify-center border-l-2 border-dotted border-white text-white relative"
            style={{ backgroundColor: voucher.primaryColor || undefined }}
          >
            <div className="transform -rotate-90">
              <div className="text-center space-y-2 overflow-hidden">
                {/* <p className="text-xs">COUPON</p> */}
                <p className="text-base font-medium text-nowrap truncate w-24">
                  {voucher.voucher_brand_id?.name}
                </p>
                <img
                  src={getDirectusFileUrl(
                    (voucher?.voucher_brand_id?.logo as string) ?? ""
                  )}
                  alt={voucher?.voucher_brand_id?.name ?? ""}
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
