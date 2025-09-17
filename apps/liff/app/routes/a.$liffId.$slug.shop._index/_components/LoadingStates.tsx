import React from "react";

export const CouponCardSkeleton: React.FC = () => (
  <div className="flex-none w-32 h-32 bg-gray-200 rounded-xl animate-pulse">
    <div className="h-20 bg-gray-300 rounded-t-xl"></div>
    <div className="p-2 space-y-1">
      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
      <div className="h-2 bg-gray-300 rounded w-1/2"></div>
    </div>
  </div>
);

export const BrandCardSkeleton: React.FC = () => (
  <div className="flex-none w-20 h-20 bg-gray-200 rounded-xl animate-pulse">
    <div className="h-12 bg-gray-300 rounded-t-xl"></div>
    <div className="p-1">
      <div className="h-2 bg-gray-300 rounded w-full"></div>
    </div>
  </div>
);

export const CategorySkeleton: React.FC = () => (
  <div className="flex gap-3">
    {Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-3 bg-gray-200 rounded w-12 animate-pulse"></div>
      </div>
    ))}
  </div>
);

export const CouponListSkeleton: React.FC<{ vertical?: boolean }> = ({ vertical = false }) => (
  <div className="space-y-2">
    <div className="h-6 bg-gray-200 rounded w-32 animate-pulse mx-4"></div>
    {vertical ? (
      <div className="grid grid-cols-2 gap-3 p-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="aspect-square bg-gray-200 rounded-xl animate-pulse">
            <div className="h-2/3 bg-gray-300 rounded-t-xl"></div>
            <div className="p-2 space-y-1">
              <div className="h-3 bg-gray-300 rounded"></div>
              <div className="h-2 bg-gray-300 rounded w-2/3"></div>
            </div>
          </div>
        ))}
      </div>
    ) : (
      <div className="flex gap-4 overflow-x-auto px-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <CouponCardSkeleton key={index} />
        ))}
      </div>
    )}
  </div>
);

export const BrandListSkeleton: React.FC = () => (
  <div className="space-y-2">
    <div className="h-6 bg-gray-200 rounded w-24 animate-pulse mx-4"></div>
    <div className="flex gap-3 overflow-x-auto px-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <BrandCardSkeleton key={index} />
      ))}
    </div>
  </div>
);

export const BannerSkeleton: React.FC = () => (
  <div className="overflow-hidden rounded-xl">
    <div className="w-full bg-gray-200 animate-pulse" style={{ aspectRatio: "16/9" }}>
      <div className="w-full h-full bg-gray-300"></div>
    </div>
  </div>
);

export const SearchResultsSkeleton: React.FC = () => (
  <div className="space-y-4">
    <div className="px-4">
      <div className="h-6 bg-gray-200 rounded w-48 animate-pulse mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-32 animate-pulse"></div>
    </div>
    <CouponListSkeleton vertical />
  </div>
);