import React from "react";
import { QrCode } from "lucide-react";
import { Voucher } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";

interface VoucherCardProps {
  voucher: Voucher;
  onClick: (couponId: string) => void;
  language: string;
}

const VoucherCard: React.FC<VoucherCardProps> = ({
  voucher,
  onClick,
  language
}) => {
  const title = voucher.metadata.title[language];
  return (
    <div className="w-full">
      {/* Ticket outer container */}
      <div className="relative">
        <button
          className="flex w-full border rounded-lg overflow-hidden"
          onClick={() => onClick(voucher.id.toString())}
        >
          {/* Ticket inner container */}
          {/* Main ticket area (left side) */}
          <div className="flex-1 bg-white rounded-l-lg relative">
            <div className="flex">
              <img
                src={getDirectusFileUrl(voucher.cover as string) ?? ""}
                alt={voucher.titleEN ?? ""}
                className="w-24 object-cover mr-3"
              />
              <div className="py-3 space-y-3 flex flex-1 flex-col justify-between">
                <div>
                  <h3 className="w-full text-start max-w-36 text-nowrap truncate font-medium">{voucher.name}</h3>
                  <div className="flex items-center text-sm text-gray-600">
                    <span>{title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <QrCode className="h-4 w-4" />
                  <span>แตะเพื่อใช้คูปอง</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tear-off section (right side) */}
          <div
            className="w-20 bg-primary flex flex-col items-center justify-center border-l-2 border-dotted border-white text-white relative"
            style={{ backgroundColor: voucher.primaryColor || undefined }}
          >
            <div className="transform -rotate-90">
              <div className="text-center space-y-2 overflow-hidden">
                {/* <p className="text-xs">COUPON</p> */}
                <p className="text-base font-medium text-nowrap truncate w-24">
                  {voucher.name}
                </p>
                <div className="w-7 h-7 mx-auto flex justify-center items-center rounded-full object-cover text-gray-500 bg-white border border-white shadow-sm text-[6px]">
                  LOGO
                </div>
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
