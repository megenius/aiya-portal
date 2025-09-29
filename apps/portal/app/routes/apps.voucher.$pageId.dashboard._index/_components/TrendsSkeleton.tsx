import React from "react";

const TrendsSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200 animate-pulse"
        >
          {/* Chart title skeleton */}
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-3"></div>

          {/* Chart area skeleton */}
          <div className="relative h-32 bg-gray-200 rounded overflow-hidden">
            {/* Simulate chart lines/bars with animated gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"
                 style={{ animationDelay: `${idx * 200}ms` }}>
            </div>

            {/* Simulate data points */}
            <div className="absolute bottom-2 left-2 w-2 h-6 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 left-6 w-2 h-8 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 left-10 w-2 h-4 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 left-14 w-2 h-10 bg-gray-300 rounded"></div>
            <div className="absolute bottom-2 left-18 w-2 h-7 bg-gray-300 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendsSkeleton;