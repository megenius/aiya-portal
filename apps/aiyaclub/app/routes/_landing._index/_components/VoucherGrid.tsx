import React from "react";
import { Voucher } from "~/@types/app.type";
import VoucherCard from "./VoucherCard";

interface VoucherGridProps {
  vouchers: Voucher[];
}

const VoucherGrid: React.FC<VoucherGridProps> = ({ vouchers }) => {
  if (vouchers.length === 0) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
          <span className="text-2xl">🎫</span>
        </div>
        <p className="text-gray-500 mb-2">No vouchers available</p>
        <p className="text-sm text-gray-400">Check back soon for new offers!</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto pb-4 -mx-4" style={{
      scrollbarWidth: 'none', /* Firefox */
      msOverflowStyle: 'none',  /* IE and Edge */
    }}>
      <style>
        {`
        div::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }
        `}
      </style>
      <div className="flex px-4 space-x-4 min-w-full">
        {vouchers.map(voucher => (
          <div key={voucher.id} className="w-72 flex-shrink-0">
            <VoucherCard voucher={voucher} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VoucherGrid;
