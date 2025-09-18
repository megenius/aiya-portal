import React from "react";

const CampaignDetailSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}
      <div className="bg-white p-4">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 animate-pulse rounded bg-gray-200"></div>
          <div className="h-6 w-32 animate-pulse rounded bg-gray-200"></div>
        </div>
      </div>

      {/* Banner Skeleton */}
      <div className="bg-white">
        <div className="h-48 w-full animate-pulse bg-gray-200"></div>
      </div>

      {/* Content Skeleton */}
      <div className="space-y-6 bg-white p-4">
        {/* Title */}
        <div className="space-y-2">
          <div className="h-8 w-3/4 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200"></div>
        </div>

        {/* Description */}
        <div className="space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-5/6 animate-pulse rounded bg-gray-200"></div>
          <div className="h-4 w-4/6 animate-pulse rounded bg-gray-200"></div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200 mb-2"></div>
            <div className="h-6 w-12 animate-pulse rounded bg-gray-200"></div>
          </div>
          <div className="rounded-lg border border-gray-200 p-4">
            <div className="h-4 w-16 animate-pulse rounded bg-gray-200 mb-2"></div>
            <div className="h-6 w-16 animate-pulse rounded bg-gray-200"></div>
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4">
          <div className="h-12 w-full animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailSkeleton;