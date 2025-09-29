import React from "react";
import DonutChart from "./charts/DonutChart";
import { asText } from "./utils";

interface CategoryData {
  id: string;
  name: string;
  claims: number;
}

interface CategoryDistributionProps {
  categories: CategoryData[];
  loading?: boolean;
  dateRange: number;
}

const CategoryDistribution: React.FC<CategoryDistributionProps> = ({
  categories,
  loading = false,
  dateRange
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-900">Category Distribution</h2>
          <div className="ml-auto animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-32"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 animate-pulse"
            >
              {/* Donut chart skeleton */}
              <div className="flex-shrink-0">
                <div className="w-18 h-18 bg-gray-200 rounded-full relative">
                  <div className="absolute inset-2 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  {/* Category name skeleton */}
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                  {/* Percentage skeleton */}
                  <div className="h-3 bg-gray-200 rounded w-8 ml-2"></div>
                </div>
                {/* Collections count skeleton */}
                <div className="h-2 bg-gray-100 rounded w-1/2 mb-2"></div>
                {/* Progress bar skeleton */}
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div className="h-1.5 bg-gray-300 rounded-full w-1/3"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!categories || categories.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-900">Category Distribution</h2>
        </div>
        <div className="text-sm text-gray-500 text-center py-8">
          No category data available
        </div>
      </div>
    );
  }

  const total = categories.reduce((sum, category) => sum + category.claims, 0);

  // Helper function to get period text for total
  const getTotalLabel = () => {
    switch (dateRange) {
      case 0: return "Total";
      case 1: return "Today";
      case 7: return "7 Days";
      case 30: return "30 Days";
      case 90: return "90 Days";
      default: return `${dateRange} Days`;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
        <h2 className="text-lg font-semibold text-gray-900">Category Distribution</h2>
        <div className="text-sm text-gray-500 ml-auto">
          {getTotalLabel()}: {total.toLocaleString()} collections
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.slice(0, 6).map((category, idx) => {
          const percentage = Math.round((category.claims / total) * 100);
          const colors = [
            "#ef4444", // red
            "#f59e0b", // amber
            "#10b981", // emerald
            "#6366f1", // indigo
            "#8b5cf6", // violet
            "#06b6d4"  // cyan
          ];

          return (
            <div
              key={category.id}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
            >
              <DonutChart
                value={percentage}
                color={colors[idx % colors.length]}
                bg="#f3f4f6"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {asText(category.name)}
                  </p>
                  <span className="text-sm font-bold text-gray-700 ml-2">
                    {percentage}%
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  {category.claims.toLocaleString()} collections
                </p>
                {/* Progress bar */}
                <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: `${percentage}%`,
                      backgroundColor: colors[idx % colors.length]
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {categories.length > 6 && (
        <div className="mt-4 text-center">
          <span className="text-xs text-gray-500">
            Showing top 6 of {categories.length} categories
          </span>
        </div>
      )}
    </div>
  );
};

export default CategoryDistribution;