import React from "react";

const VoucherListSkeleton: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 shadow-xs rounded-xl overflow-hidden flex flex-col max-h-[calc(100vh-80px)]">
      {/* Header - Tab Navigation */}
      <div className="border-b border-gray-200 flex-shrink-0">
        <div className="flex justify-between items-center px-6">
          {/* Tabs Skeleton */}
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {[...Array(3)].map((_, idx) => (
              <div key={idx} className="py-4 flex items-center gap-2">
                <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
                <div className="h-5 w-8 bg-gray-200 rounded-full animate-pulse"></div>
              </div>
            ))}
          </nav>

          {/* View Mode & Sort Controls Skeleton */}
          <div className="flex items-center gap-2 py-4">
            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <div className="w-10 h-8 bg-gray-200 animate-pulse"></div>
              <div className="w-10 h-8 bg-gray-200 animate-pulse border-l border-gray-300"></div>
            </div>

            {/* Sort Select */}
            <div className="h-8 w-32 bg-gray-200 rounded-md animate-pulse"></div>

            {/* Sort Order Button */}
            <div className="h-8 w-10 bg-gray-200 rounded-md animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-3">
            {[...Array(10)].map((_, idx) => (
              <div
                key={idx}
                className="border border-gray-200 rounded-lg overflow-hidden animate-pulse"
              >
                {/* Voucher Image - 16:9 aspect ratio */}
                <div className="aspect-video bg-gray-200 relative">
                  {/* Badge Skeletons */}
                  <div className="absolute top-2 left-2">
                    <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="absolute top-2 right-2">
                    <div className="h-6 w-14 bg-gray-300 rounded-full"></div>
                  </div>
                </div>

                {/* Voucher Info */}
                <div className="p-2 space-y-1">
                  {/* Title */}
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>

                  {/* Available/Total */}
                  <div className="h-3 bg-gray-100 rounded w-full"></div>

                  {/* Start Date */}
                  <div className="h-3 bg-gray-100 rounded w-2/3"></div>

                  {/* End Date */}
                  <div className="h-3 bg-gray-100 rounded w-2/3"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-gray-200 bg-gray-50 flex-shrink-0">
        <div className="flex items-center justify-between">
          {/* Showing text skeleton */}
          <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>

          {/* Pagination skeleton */}
          <div className="flex items-center justify-center gap-1">
            <div className="w-8 h-7 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-8 h-7 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoucherListSkeleton;
