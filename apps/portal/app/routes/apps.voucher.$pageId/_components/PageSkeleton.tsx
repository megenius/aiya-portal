import React from "react";

const PageSkeleton: React.FC = () => {
  return (
    <div className="w-full">
      {/* Header Skeleton */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left side - Navigation */}
            <div className="flex items-center gap-4">
              {/* Logo/Back button skeleton */}
              <div className="w-8 h-8 bg-gray-200 rounded animate-pulse"></div>

              {/* Page title skeleton */}
              <div className="hidden sm:block">
                <div className="h-5 bg-gray-200 rounded w-48 animate-pulse"></div>
              </div>
            </div>

            {/* Right side - Actions */}
            <div className="flex items-center gap-3">
              {/* Navigation tabs skeleton */}
              <div className="hidden md:flex gap-1">
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="h-8 bg-gray-200 rounded w-20 animate-pulse"
                  ></div>
                ))}
              </div>

              {/* Action buttons skeleton */}
              <div className="flex gap-2">
                <div className="h-8 bg-gray-200 rounded w-8 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-8 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <main className="w-full max-w-[85rem] mx-auto pt-[59px] pb-5 lg:pt-0">
        <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-6">
          {/* Page content skeleton */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 animate-pulse">
            {/* Content header skeleton */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 bg-gray-200 rounded w-48"></div>
              </div>
              <div className="h-8 bg-gray-200 rounded w-32"></div>
            </div>

            {/* Content grid skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 shadow-xs rounded-xl p-6"
                >
                  <div className="flex items-center">
                    <div className="p-3 rounded-lg bg-gray-100">
                      <div className="w-6 h-6 bg-gray-200 rounded"></div>
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="h-3 bg-gray-200 rounded mb-2 w-2/3"></div>
                      <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional content sections */}
            <div className="space-y-6">
              {[...Array(2)].map((_, idx) => (
                <div key={idx} className="space-y-4">
                  <div className="h-5 bg-gray-200 rounded w-64"></div>
                  <div className="h-32 bg-gray-100 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PageSkeleton;