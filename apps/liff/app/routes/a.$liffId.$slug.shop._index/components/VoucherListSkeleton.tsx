import React from "react";

interface VoucherListSkeletonProps {
  count?: number;
}

const VoucherListSkeleton: React.FC<VoucherListSkeletonProps> = ({
  count = 2
}) => {
  return (
    <div className="space-y-2">
        <div className="h-6 bg-gray-200 rounded w-2/4 animate-pulse mb-2"></div>
      <div
        className="flex overflow-x-auto pb-2 gap-4"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {Array(count).fill(0).map((_, index) => (
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
  );
};

export default VoucherListSkeleton;
