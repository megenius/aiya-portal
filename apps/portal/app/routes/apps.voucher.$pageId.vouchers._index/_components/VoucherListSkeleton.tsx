import React from "react";

const VoucherListSkeleton: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Tab navigation skeleton */}
      <div className="flex gap-2 border-b border-gray-200 pb-2">
        {[...Array(3)].map((_, idx) => (
          <div
            key={idx}
            className="h-8 bg-gray-200 rounded w-20 animate-pulse"
          ></div>
        ))}
      </div>

      {/* Voucher grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-xs rounded-xl overflow-hidden animate-pulse"
          >
            {/* Voucher image skeleton */}
            <div className="h-48 bg-gray-200"></div>

            <div className="p-4 space-y-3">
              {/* Title skeleton */}
              <div className="h-5 bg-gray-200 rounded w-3/4"></div>

              {/* Description skeleton */}
              <div className="space-y-1">
                <div className="h-3 bg-gray-100 rounded w-full"></div>
                <div className="h-3 bg-gray-100 rounded w-2/3"></div>
              </div>

              {/* Stats row skeleton */}
              <div className="flex justify-between items-center pt-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-8"></div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="h-3 bg-gray-200 rounded w-8"></div>
                  </div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-16"></div>
              </div>

              {/* Action buttons skeleton */}
              <div className="flex gap-2 pt-2">
                <div className="h-8 bg-gray-200 rounded flex-1"></div>
                <div className="h-8 bg-gray-200 rounded w-20"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination skeleton */}
      <div className="flex justify-center items-center gap-2 pt-4">
        <div className="h-8 bg-gray-200 rounded w-20"></div>
        <div className="flex gap-1">
          {[...Array(5)].map((_, idx) => (
            <div key={idx} className="w-8 h-8 bg-gray-200 rounded"></div>
          ))}
        </div>
        <div className="h-8 bg-gray-200 rounded w-20"></div>
      </div>
    </div>
  );
};

export default VoucherListSkeleton;