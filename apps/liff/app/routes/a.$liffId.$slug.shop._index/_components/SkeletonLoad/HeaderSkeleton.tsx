import React from "react";

export const HeaderSkeleton: React.FC = () => {
  return (
    <div className="bg-white p-4 shadow-sm">
      <div className="flex items-center">
        {/* Logo placeholder */}
        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse mr-4"></div>
        
        {/* Title placeholder */}
        <div className="flex-1">
          <div className="h-6 bg-gray-200 rounded w-2/4 animate-pulse mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
