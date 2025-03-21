import React from "react";
import VoucherCard from "./VoucherCard";
import { Voucher } from "~/types/app";

interface VoucherListProps {
  vouchers: Voucher[];
  title: string;
  language: string;
}

const VoucherList: React.FC<VoucherListProps> = ({
  vouchers,
  title,
  language
}) => {

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-lg px-4">{title}</h3>
      <div
        className="flex overflow-x-auto gap-4 px-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {vouchers?.map((voucher) => (
          <VoucherCard
            key={voucher.id}
            voucher={voucher}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default VoucherList;
