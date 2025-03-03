import React from "react";
import VoucherCard from "./CouponCard";
import { Voucher } from "~/types/app";

interface VoucherListProps {
  vouchers: Voucher[];
  isThaiLanguage: boolean;
  titleTH?: string;
  titleEN?: string;
}

const VoucherList: React.FC<VoucherListProps> = ({
  vouchers,
  isThaiLanguage,
  titleTH,
  titleEN,
}) => {
  const displayTitle = isThaiLanguage ? titleTH : titleEN;

  return (
    <div className="space-y-2">
      {displayTitle && <h3 className="font-medium text-lg px-4">{displayTitle}</h3>}
      <div
        className="flex overflow-x-auto pb-2 gap-4 px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {vouchers?.map((voucher) => (
          <VoucherCard
            key={voucher.id}
            voucher={voucher}
            isThaiLanguage={isThaiLanguage}
          />
        ))}
      </div>
    </div>
  );
};

export default VoucherList;
