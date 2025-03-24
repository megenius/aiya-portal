import React from "react";
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
  vouchers,
  title,
  language = 'en',
  featured = false,
  gridView = false
}) => {
  if (vouchers.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4 mb-10">
      <div className="flex justify-between items-center px-4">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        {!gridView && (
          <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors text-sm">
            View All
          </button>
        )}
      </div>
      
      {gridView ? (
        // Grid layout for desktop view
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {vouchers.map((voucher) => (
            <VoucherCard 
              key={voucher.id} 
              voucher={voucher} 
              language={language}
              featured={featured}
            />
          ))}
        </div>
      ) : (
        // Horizontal scroll for mobile or featured sections
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
                voucher={voucher} 
                language={language}
                featured={featured}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VoucherList;
