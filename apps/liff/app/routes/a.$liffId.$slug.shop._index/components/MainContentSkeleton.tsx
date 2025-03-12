import React from "react";

export const MainContentSkeleton: React.FC = () => {
  return (
    <div className="pb-3 px-4 space-y-3 bg-white min-h-screen">
      {/* Search Bar Skeleton */}
      <div className="relative flex items-center">
        <div className="absolute left-3 w-5 h-5 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="h-11 bg-gray-100 rounded-xl w-full pl-10 pr-3 animate-pulse"></div>
      </div>

      {/* VoucherSummary Skeleton */}
      <div className="mb-6">
        <div className="bg-gray-300 animate-pulse rounded-xl shadow-lg overflow-hidden">
          <div className="relative p-4">
            <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-white opacity-10 z-0"></div>
            <div className="absolute left-16 -bottom-16 w-40 h-40 rounded-full bg-white opacity-5 z-0"></div>

            <div className="space-y-2">
              <div className="relative flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <div className="h-6 w-6 bg-white/70 rounded-sm animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <div className="h-5 bg-white/40 rounded w-32 animate-pulse mb-1"></div>
                  <div className="flex items-baseline">
                    <div className="h-7 w-8 bg-white/40 rounded animate-pulse"></div>
                    <div className="ml-1 h-4 w-28 bg-white/30 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-3">
                <div className="flex justify-between mb-1">
                  <div className="h-4 w-16 bg-white/30 rounded animate-pulse"></div>
                  <div className="h-4 w-6 bg-white/30 rounded animate-pulse"></div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1.5 mb-2">
                  <div className="bg-white/60 h-1.5 rounded-full w-2/3 animate-pulse"></div>
                </div>
                <div className="flex justify-between">
                  <div className="h-3 w-20 bg-white/30 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="w-full h-10 bg-white/10 border border-white/20 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* CategoryList Skeleton */}
      <div
        className="flex overflow-x-auto pb-2 gap-3"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* All category skeleton */}
        <div className="p-3 max-w-16 flex flex-col items-center gap-2 rounded-2xl shadow-sm border border-gray-100 bg-white">
          <div className="w-9 h-9 rounded-full bg-gray-100 animate-pulse"></div>
          <div className="h-3 w-10 bg-gray-200 rounded animate-pulse"></div>
        </div>

        {/* Additional category skeletons */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="p-3 max-w-16 flex flex-col items-center gap-3 rounded-2xl shadow-sm border border-gray-100 bg-white"
          >
            <div className="w-9 h-9 rounded-full bg-gray-100 animate-pulse"></div>
            <div className="h-3 w-10 bg-gray-200 rounded animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* VoucherList Skeletons */}
      <div className="space-y-2">
        <div className="h-6 bg-gray-200 rounded w-2/4 animate-pulse mb-2"></div>
        <div
          className="flex overflow-x-auto pb-2 gap-4"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {Array(2)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col shrink-0 w-36"
              >
                <div className="h-32 relative bg-gray-200 animate-pulse">
                  <div className="absolute bottom-2 left-2">
                    <div className="w-7 h-7 rounded-full bg-gray-300 border border-white shadow-sm"></div>
                  </div>
                </div>
                <div className="p-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-full animate-pulse"></div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
