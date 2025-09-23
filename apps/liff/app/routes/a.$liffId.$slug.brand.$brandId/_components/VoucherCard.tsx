import React from "react";
import LazyImage from "~/components/LazyImage";
import { getDirectusFileUrl } from "~/utils/files";
import { Brand, Voucher } from "~/types/app";
import { format } from "date-fns";
import { th } from "date-fns/locale";
import { t } from "~/i18n/messages";

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
  textOverflow: "ellipsis" as const,
};

const VoucherCard: React.FC<VoucherCardProps> = ({
  brand,
  voucher,
  onClick,
  language,
}) => {
  const title = voucher.metadata.title[language];
  const collectUntilText = t(language as "th" | "en", "brandVoucher.collectUntil");

  return (
    <div className="w-full">
      {/* Ticket outer container */}
      <div className="relative">
        <button
          className="flex h-28 w-full overflow-hidden rounded-lg border"
          onClick={() => onClick(voucher.id)}
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
            <div className="flex flex-1 flex-col justify-between space-y-3 py-3">
              <div className="w-full max-w-48 text-start">
                <h3 className="font-medium" style={textTruncateStyle}>
                  {brand.name}
                </h3>
                <h4 className="text-sm text-gray-600" style={textTruncateStyle}>
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
              <div className={`flex items-center gap-2 text-xs text-gray-600`}>
                <span className="flex-1 text-start" style={textTruncateStyle}>
                  {collectUntilText}:{" "}
                  {format(new Date(voucher.end_date as string), "dd MMM yyyy", {
                    locale: language === "th" ? th : undefined,
                  })}
                </span>
              </div>
            </div>
          </div>

          {/* Tear-off section (right side) */}
          {/* <div
            className="w-20 h-full bg-primary flex flex-col items-center justify-center border-l-2 border-dotted border-white text-white"
            style={{ backgroundColor: brand.primaryColor || undefined }}
          >
            <div className="transform -rotate-90">
              <div className="text-center space-y-2 overflow-hidden">
                <p 
                  className="text-base font-medium w-24" 
                  style={textTruncateStyle}
                >
                  {brand.name}
                </p>
                <LazyImage
                  src={getDirectusFileUrl(
                    (voucher?.voucher_brand_id?.logo as string) ?? "",
                  )}
                  alt={voucher?.voucher_brand_id?.name ?? ""}
                  wrapperClassName="mx-auto h-7 w-7"
                  className="h-full w-full rounded-full border border-white object-cover shadow-sm"
                  placeholder="shimmer"
                />
                <div className="w-7 h-7 mx-auto flex justify-center items-center rounded-full object-cover text-gray-500 bg-white border border-white shadow-sm text-[6px]">
                  LOGO
                </div>
              </div>
            </div>
          </div>
          </div> */}
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

export default VoucherCard;
