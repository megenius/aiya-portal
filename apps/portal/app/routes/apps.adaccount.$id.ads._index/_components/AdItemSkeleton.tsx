// components/AdItemSkeleton.tsx
import React from 'react';

export const AdItemSkeleton = () => {
  return (
    <div className="animate-pulse border dark:border-neutral-700 rounded-lg p-4">
      <div className="flex items-start gap-4">
        {/* Image placeholder */}
        <div className="w-12 h-12 bg-gray-200 dark:bg-neutral-700 rounded" />
        
        <div className="flex-1 space-y-3">
          {/* Title */}
          <div className="h-4 bg-gray-200 dark:bg-neutral-700 rounded w-3/4" />
          
          {/* Status and date */}
          <div className="flex gap-3">
            <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-20" />
            <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-24" />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-4">
            <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-24" />
            <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-32" />
            <div className="h-3 bg-gray-200 dark:bg-neutral-700 rounded w-28" />
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <div className="h-8 w-8 bg-gray-200 dark:bg-neutral-700 rounded" />
          <div className="h-8 w-8 bg-gray-200 dark:bg-neutral-700 rounded" />
        </div>
      </div>
    </div>
  );
};

export const AdListSkeleton = () => {
  return (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <AdItemSkeleton key={index} />
      ))}
    </div>
  );
};