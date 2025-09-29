import React from "react";

const VoucherStatsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {[...Array(8)].map((_, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 shadow-xs rounded-xl p-6 animate-pulse"
        >
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-gray-100">
              <div className="w-6 h-6 bg-gray-200 rounded"></div>
            </div>
            <div className="ml-4 flex-1">
              <div className="h-3 bg-gray-200 rounded mb-2 w-2/3"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VoucherStatsSkeleton;