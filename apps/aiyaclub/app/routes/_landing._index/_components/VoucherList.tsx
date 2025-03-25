import React, { useState } from "react";
import { Voucher } from "~/@types/app.type";
import VoucherCard from "./VoucherCard";

interface VoucherListProps {
  vouchers: Voucher[];
  title: string;
  language?: string;
  featured?: boolean;
  gridView?: boolean;
}

const VoucherList: React.FC<VoucherListProps> = ({
  vouchers: initialVouchers,
  title,
  language = 'en',
  featured = false,
  gridView = false
}) => {
  const [vouchers, setVouchers] = useState<Voucher[]>(initialVouchers);
  return (
    <div className="space-y-4 mb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 gap-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>


        <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors text-sm hidden md:block">
          View All
        </button>
      </div>

      {/* Horizontal scroll for both mobile and desktop */}
      <div
        className="flex overflow-x-auto pb-4 gap-4 px-4 scrollbar-hide"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {vouchers.map((voucher) => (
          <div key={voucher.id} className="min-w-[280px] max-w-[320px]">
            <VoucherCard
              key={voucher.id}
              voucher={voucher}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherList;
