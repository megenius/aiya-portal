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
}

const CategoryDistribution: React.FC<CategoryDistributionProps> = ({
  categories,
  loading = false
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-900">Category Distribution</h2>
        </div>
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-600"></div>
          <span className="ml-3 text-sm text-gray-600">Loading categories...</span>
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

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
        <h2 className="text-lg font-semibold text-gray-900">Category Distribution</h2>
        <div className="text-sm text-gray-500 ml-auto">
          Total: {total.toLocaleString()} collections
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