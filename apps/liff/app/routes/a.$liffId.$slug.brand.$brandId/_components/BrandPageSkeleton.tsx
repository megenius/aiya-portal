import React from "react";
import VoucherCardShimmer from "~/components/VoucherCardShimmer";

export const BrandHeaderSkeleton: React.FC = () => (
  <div className="relative h-48 animate-pulse bg-gray-200">
    {/* Cover image skeleton */}
    <div className="h-full w-full bg-gray-300"></div>

    {/* Back button skeleton */}
    <div className="absolute left-4 top-4 h-10 w-10 animate-pulse rounded-full bg-gray-400"></div>

    {/* Share button skeleton */}
    {/* <div className="absolute right-4 top-4 h-10 w-10 animate-pulse rounded-full bg-gray-400"></div> */}
  </div>
);

export const BrandCardSkeleton: React.FC = () => (
  <div className="relative z-20 mx-4 -mt-24">
    <div className="animate-pulse overflow-hidden rounded-2xl bg-white shadow-lg">
      <div className="p-5">
        <div className="flex items-start">
          {/* Brand logo skeleton */}
          <div className="mr-4 h-20 w-20 flex-shrink-0 animate-pulse rounded-xl bg-gray-200"></div>

          <div className="flex-1 space-y-3">
            <div className="flex items-center">
              {/* Brand name skeleton */}
              <div className="mr-2 h-6 w-32 animate-pulse rounded bg-gray-200"></div>
            </div>

            {/* Description skeleton */}
            <div className="mb-4 flex gap-2">
              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
              <div className="h-4 w-full animate-pulse rounded bg-gray-200"></div>
            </div>
          </div>
        </div>

        {/* Follow button skeleton - positioned at bottom right */}
        <div className="mt-4 flex justify-start">
          <div className="h-8 w-20 animate-pulse rounded-lg bg-gray-200"></div>
        </div>
      </div>
    </div>
  </div>
);

// Remove VoucherCardSkeleton - will use VoucherCardShimmer instead

export const VoucherListSkeleton: React.FC = () => <VoucherCardShimmer />;

export const BrandPageSkeleton: React.FC = () => (
  <div className="min-h-screen bg-gray-50">
    {/* Header Skeleton */}
    <BrandHeaderSkeleton />

    {/* Brand Card Skeleton */}
    <BrandCardSkeleton />

    {/* Content Section with vouchers */}
    <div className="sticky top-0 z-10 mt-4 bg-white">
      <VoucherListSkeleton />
    </div>

    {/* Bottom spacing */}
    <div className="h-20"></div>
  </div>
);

export default BrandPageSkeleton;
