import React from "react";
import LazyImage from "~/components/LazyImage";
import { CheckCircle, QrCode, XCircle } from "lucide-react";
import { VoucherUser } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";
import { formatDateTimeShort } from "~/utils/helpers";

interface VoucherCardProps {
  voucherUser: VoucherUser;
  onClick: (voucherUserId: string) => void;
  language: string;
}

// สไตล์ CSS โดยตรงสำหรับการแสดงข้อความที่ตัดด้วย ...
const textTruncateStyle = {
  display: "block",
  maxWidth: "100%",
  whiteSpace: "nowrap" as const,
  overflow: "hidden" as const,
  textOverflow: "ellipsis" as const,
};

const CouponCard: React.FC<VoucherCardProps> = ({
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
  const isExpired =
    voucherUser.expired_date && new Date(voucherUser.expired_date) < new Date();

  let timeLeft = 0;
  if (voucherUser.used_date) {
    const usedDateTime = new Date(voucherUser.used_date).getTime();
    const expiryTime = usedDateTime + 15 * 60 * 1000; // 15 minutes after used_date
    const now = new Date().getTime();
    timeLeft = Math.floor((expiryTime - now) / 1000);
  }

  const text = () => {
    if (voucherUser.code.code_status === "pending_confirmation") {
      if (timeLeft > 0) return voucherText["collected"][language];
      else return voucherText["expired"][language];
    }
    if (
      isExpired &&
      voucherUser.code.code_status !== "used" &&
      voucherUser.code.code_status !== "pending_confirmation"
    ) {
      return voucherText["expired"][language];
    }
    return voucherText[voucherUser.code.code_status ?? "collected"][language];
  };

  return (
    <div className="w-full">
      {/* Ticket outer container */}
      <div className="relative">
        <button
          className="flex h-28 w-full overflow-hidden rounded-lg border"
          onClick={() => onClick(voucherUser.id.toString())}
        >
          {/* Ticket inner container */}
          {/* Main ticket area (left side) */}
          <div className="relative flex h-full flex-1 rounded-l-lg bg-white">
            <LazyImage
              src={getDirectusFileUrl(voucher.cover as string) ?? ""}
              alt={title}
              wrapperClassName="mr-3 w-24"
              className="h-full w-full object-cover"
              placeholder="blur"
              blurDataURL={getDirectusFileUrl(voucher.cover as string, {
                width: 24,
                height: 24,
              })}
            />
            <div className="flex flex-1 flex-col justify-between space-y-3 py-2">
              <div className="w-full max-w-36 text-start">
                <h3 className="font-medium" style={textTruncateStyle}>
                  {voucher.voucher_brand_id?.name}
                </h3>
                <h4 className="text-sm text-gray-600" style={textTruncateStyle}>
                  {title}
                </h4>
              </div>
              <div className="flex flex-col items-start gap-1">
                <div
                  className={`flex items-center gap-2 text-sm ${timeLeft > 0 ? "text-orange-500" : "text-gray-500"}`}
                >
                  {voucherUser.code.code_status === "used" && (
                    <CheckCircle className="h-4 w-4 flex-shrink-0" />
                  )}
                  {!isExpired &&
                    ((voucherUser.code.code_status === "pending_confirmation" &&
                      timeLeft > 0) ||
                      voucherUser.code.code_status === "collected") && (
                      <QrCode className="h-4 w-4 flex-shrink-0" />
                    )}
                  {((voucherUser.code.code_status === "pending_confirmation" &&
                    timeLeft <= 0) ||
                    (isExpired && voucherUser.code.code_status !== "used") ||
                    voucherUser.code.code_status === "expired") && (
                    <XCircle className="h-4 w-4 flex-shrink-0" />
                  )}
                  <span className="flex-1 text-start" style={textTruncateStyle}>
                    {text()}
                  </span>
                </div>
                {!isExpired && voucherUser.code.code_status === "collected" && (
                  <span className="text-xs text-red-500">
                    {language === "th" ? "(ถึง: " : "(Until: "}
                    {formatDateTimeShort(
                      voucherUser.expired_date as string,
                      language as "th" | "en",
                    )}
                    )
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Tear-off section (right side) */}
          <div
            className="flex h-full w-20 flex-col items-center justify-center border-l-2 border-dotted border-white bg-primary text-white"
            style={{
              backgroundColor:
                voucher.voucher_brand_id.primaryColor || undefined,
            }}
          >
            <div className="-rotate-90 transform">
              <div className="space-y-2 overflow-hidden text-center">
                {/* <p className="text-xs">COUPON</p> */}
                <p
                  className="w-24 text-base font-medium"
                  style={textTruncateStyle}
                >
                  {voucher.voucher_brand_id?.name}
                </p>
                <LazyImage
                  src={getDirectusFileUrl(
                    (voucher?.voucher_brand_id?.logo as string) ?? "",
                  )}
                  alt={voucher?.voucher_brand_id?.name ?? ""}
                  wrapperClassName="mx-auto h-7 w-7"
                  className="h-full w-full rounded-full border border-white object-cover shadow-sm"
                  placeholder="blur"
                  blurDataURL={getDirectusFileUrl(
                    (voucher?.voucher_brand_id?.logo as string) ?? "",
                    { width: 24, height: 24 },
                  )}
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
              className="absolute h-2 w-2 -translate-x-1 rounded-full border-r border-gray-400 bg-gray-50"
              style={{ top: `${(i * 100) / 10}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CouponCard;
