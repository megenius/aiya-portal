import React from "react";

const VoucherStatsSkeleton: React.FC = () => {
  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-6">
      {/* Back button skeleton */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
      </div>

      {/* Voucher header skeleton */}
      <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6 animate-pulse">
        <div className="flex items-start gap-4">
          {/* Voucher image skeleton */}
          <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0"></div>

          <div className="flex-1 space-y-3">
            {/* Title skeleton */}
            <div className="h-6 bg-gray-200 rounded w-3/4"></div>

            {/* Description skeleton */}
            <div className="space-y-1">
              <div className="h-3 bg-gray-100 rounded w-full"></div>
              <div className="h-3 bg-gray-100 rounded w-2/3"></div>
            </div>

            {/* Status badges skeleton */}
            <div className="flex gap-2">
              <div className="h-5 bg-gray-200 rounded-full w-16"></div>
              <div className="h-5 bg-gray-200 rounded-full w-20"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(8)].map((_, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 shadow-xs rounded-xl p-6 animate-pulse"
          >
            <div className="flex items-center">
              {/* Icon skeleton */}
              <div className="p-3 rounded-lg bg-gray-100">
                <div className="w-6 h-6 bg-gray-200 rounded"></div>
              </div>
              <div className="ml-4 flex-1">
                {/* Label skeleton */}
                <div className="h-3 bg-gray-200 rounded mb-2 w-2/3"></div>
                {/* Value skeleton */}
                <div className="h-6 bg-gray-300 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts section skeleton */}
      <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6 animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-48 mb-6"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart skeletons */}
          {[...Array(2)].map((_, idx) => (
            <div key={idx} className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-1/3"></div>
              <div className="h-64 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* User interactions table skeleton */}
      <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6 animate-pulse">
        <div className="h-5 bg-gray-200 rounded w-40 mb-6"></div>

        {/* Table header skeleton */}
        <div className="grid grid-cols-4 gap-4 mb-4 pb-2 border-b border-gray-100">
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="h-3 bg-gray-200 rounded w-3/4"></div>
          ))}
        </div>

        {/* Table rows skeleton */}
        <div className="space-y-3">
          {[...Array(10)].map((_, idx) => (
            <div key={idx} className="grid grid-cols-4 gap-4 py-2">
              <div className="h-3 bg-gray-100 rounded w-4/5"></div>
              <div className="h-3 bg-gray-100 rounded w-2/3"></div>
              <div className="h-3 bg-gray-100 rounded w-1/2"></div>
              <div className="h-3 bg-gray-100 rounded w-3/4"></div>
            </div>
          ))}
        </div>

        {/* Pagination skeleton */}
        <div className="flex justify-center items-center gap-2 pt-6 border-t border-gray-100 mt-6">
          <div className="h-8 bg-gray-200 rounded w-20"></div>
          <div className="flex gap-1">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="w-8 h-8 bg-gray-200 rounded"></div>
            ))}
          </div>
          <div className="h-8 bg-gray-200 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default VoucherStatsSkeleton;