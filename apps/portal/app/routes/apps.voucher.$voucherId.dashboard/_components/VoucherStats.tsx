import React from "react";

interface VoucherStatsProps {
  stats: {
    total: number;
    active: number;
    used: number;
    redemptionRate: number;
  };
}

const VoucherStats: React.FC<VoucherStatsProps> = ({ stats }) => {
  const statItems = [
    {
      label: "Total Vouchers",
      value: stats.total,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Active Vouchers",
      value: stats.active,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      label: "Used Vouchers",
      value: stats.used,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Redemption Rate",
      value: `${stats.redemptionRate}%`,
      color: "text-orange-600",
      bg: "bg-orange-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 shadow-xs rounded-xl p-6"
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${item.bg}`}>
              <div className={`w-6 h-6 ${item.color}`}>
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  className="w-full h-full"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">{item.label}</p>
              <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VoucherStats;