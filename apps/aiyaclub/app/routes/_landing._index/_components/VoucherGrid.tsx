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
    <div className="voucher-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {vouchers.map(voucher => (
        <VoucherCard key={voucher.id} voucher={voucher} />
      ))}
    </div>
  );
};

export default VoucherGrid;
