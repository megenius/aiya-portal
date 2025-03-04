import React from "react";
import { QrCode } from "lucide-react";
import { Voucher } from "~/types/app";
import { getDirectusFileUrl } from "~/utils/files";

interface VoucherCardProps {
  voucher: Voucher;
  onClick: (couponId: string) => void;
  isThaiLanguage: boolean;
}

const VoucherCard: React.FC<VoucherCardProps> = ({ voucher, onClick, isThaiLanguage }) => {
  const title = isThaiLanguage ? voucher.titleTH : voucher.titleEN;
  return (
    <button
      className="w-full bg-white rounded-xl shadow-sm mb-4 overflow-hidden cursor-pointer"
      onClick={() => onClick(voucher.id.toString())}
    >
      <div className="flex p-4 space-x-4">
        <img
          src={getDirectusFileUrl(voucher.cover as string) ?? ""}
          alt={voucher.titleEN ?? ""}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div className="flex flex-1 flex-col justify-between">
          <div className="space-y-1">
            <h3 className="text-start font-medium">{voucher.name}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <span>{title}</span>
            </div>
          </div>

          {/* <span className="text-start text-green-600 font-medium">
          {coupon.discount}
        </span> */}
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <QrCode className="h-4 w-4" />
            <span>แตะเพื่อใช้คูปอง</span>
          </div>
        </div>
      </div>
    </button>
  );
};

export default VoucherCard;
