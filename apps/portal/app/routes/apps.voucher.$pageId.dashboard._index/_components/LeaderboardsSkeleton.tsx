import React from "react";

const LeaderboardsSkeleton: React.FC = () => {
  const createSkeletonColumn = (color: string) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
      {/* Header skeleton */}
      <div className="flex items-center gap-2 mb-4">
        <div className={`w-5 h-5 ${color} rounded`}></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      {/* Items skeleton */}
      <div className="space-y-3">
        {[...Array(5)].map((_, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200"
          >
            <div className="flex items-center gap-3 min-w-0 flex-1">
              {/* Star badge for first item */}
              <div className="flex-shrink-0 relative">
                {idx === 0 && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-200 rounded-full"></div>
                )}
                {/* Avatar/Logo skeleton */}
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
              </div>
              <div className="min-w-0 flex-1">
                {/* Name skeleton */}
                <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                {/* Ranking skeleton */}
                <div className="h-2 bg-gray-100 rounded w-1/2"></div>
              </div>
            </div>
            <div className="flex-shrink-0 text-right">
              {/* Value skeleton */}
              <div className="h-3 bg-gray-200 rounded w-12 mb-1"></div>
              {/* Label skeleton */}
              <div className="h-2 bg-gray-100 rounded w-8"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Top Brands Skeleton */}
      {createSkeletonColumn("bg-blue-200")}

      {/* Top Vouchers Skeleton */}
      {createSkeletonColumn("bg-purple-200")}

      {/* Top Users Skeleton */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
        {/* Header skeleton */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-5 bg-teal-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>

        {/* Tab buttons skeleton */}
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-gray-200 rounded-full w-20"></div>
          <div className="h-6 bg-gray-100 rounded-full w-24"></div>
        </div>

        {/* Items skeleton */}
        <div className="space-y-3">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="flex-shrink-0 relative">
                  {idx === 0 && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-gray-200 rounded-full"></div>
                  )}
                  <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                </div>
                <div className="min-w-0 flex-1">
                  <div className="h-3 bg-gray-200 rounded w-3/4 mb-1"></div>
                  <div className="h-2 bg-gray-100 rounded w-1/2"></div>
                </div>
              </div>
              <div className="flex-shrink-0 text-right">
                <div className="h-3 bg-gray-200 rounded w-12 mb-1"></div>
                <div className="h-2 bg-gray-100 rounded w-8"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardsSkeleton;