import React from "react";

interface VoucherStatsProps {
  stats: {
    total: number;
    active: number;
    used: number;
    redemptionRate: number;
    totalCollections: number;
    uniqueCollectors: number;
    collectionRate: number;
    totalViews: number;
    uniqueViewers: number;
    viewToCollectionRate: number;
    todayCollections: number;
    thisWeekCollections: number;
    avgTimeToRedemption: number;
  };
  overview?: {
    kpi: {
      totalUsers: number;
      eventsLastHour: number;
    };
  };
}

const VoucherStats: React.FC<VoucherStatsProps> = ({ stats, overview }) => {
  const statItems = [
    {
      label: "Total Collections",
      value: stats.totalCollections,
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: "collection",
    },
    {
      label: "Total Users",
      value: overview?.kpi.totalUsers ?? 0,
      color: "text-green-600",
      bg: "bg-green-50",
      icon: "users",
    },
    {
      label: "Total Views",
      value: stats.totalViews,
      color: "text-purple-600",
      bg: "bg-purple-50",
      icon: "eye",
    },
    {
      label: "Collection Rate",
      value: `${stats.collectionRate}%`,
      color: "text-orange-600",
      bg: "bg-orange-50",
      icon: "percentage",
    },
    {
      label: "View-to-Collection",
      value: `${stats.viewToCollectionRate}%`,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      icon: "conversion",
    },
    {
      label: "Today's Collections",
      value: stats.todayCollections,
      color: "text-pink-600",
      bg: "bg-pink-50",
      icon: "today",
    },
    {
      label: "This Week",
      value: stats.thisWeekCollections,
      color: "text-cyan-600",
      bg: "bg-cyan-50",
      icon: "week",
    },
    {
      label: "Events Last Hour",
      value: overview?.kpi.eventsLastHour ?? 0,
      color: "text-amber-600",
      bg: "bg-amber-50",
      icon: "time",
    },
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "collection":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        );
      case "users":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
          />
        );
      case "eye":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        );
      case "percentage":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        );
      case "conversion":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        );
      case "today":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        );
      case "week":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        );
      case "time":
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        );
      default:
        return (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
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
                    {getIcon(item.icon)}
                  </svg>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-500">
                  {item.label}
                </p>
                <p className={`text-2xl font-bold ${item.color}`}>
                  {item.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Active Vouchers Progress */}
      <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm font-medium text-gray-600">Active Vouchers</p>
          <p className="text-sm font-semibold text-gray-900">
            {stats.active} / {stats.total}
          </p>
        </div>
        {(() => {
          const total = Math.max(1, stats.total || 0);
          const pct = Math.min(
            100,
            Math.max(0, Math.round((stats.active / total) * 100))
          );
          return (
            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-green-500"
                style={{ width: `${pct}%` }}
              />
            </div>
          );
        })()}
      </div>

      {/* Donut Charts for Rates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {(() => {
          const clamp = (n: number) =>
            Math.min(100, Math.max(0, Math.round(n || 0)));
          const donuts = [
            {
              label: "Collection Rate",
              value: clamp(stats.collectionRate),
              color: "#2563eb",
              bg: "#dbeafe",
            },
            {
              label: "Redemption Rate",
              value: clamp(stats.redemptionRate),
              color: "#7c3aed",
              bg: "#ede9fe",
            },
            {
              label: "View → Collection",
              value: clamp(stats.viewToCollectionRate),
              color: "#f59e0b",
              bg: "#fffbeb",
            },
          ];

          const radius = 36;
          const stroke = 8;
          const cx = 48;
          const cy = 48;
          const circumference = 2 * Math.PI * radius;

          return donuts.map((d, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-200 shadow-xs rounded-xl p-6 flex items-center gap-4"
            >
              <svg
                width="96"
                height="96"
                viewBox="0 0 96 96"
                className="shrink-0"
              >
                <circle
                  cx={cx}
                  cy={cy}
                  r={radius}
                  stroke={d.bg}
                  strokeWidth={stroke}
                  fill="none"
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r={radius}
                  stroke={d.color}
                  strokeWidth={stroke}
                  fill="none"
                  strokeDasharray={`${(d.value / 100) * circumference} ${circumference}`}
                  strokeLinecap="round"
                  transform={`rotate(-90 ${cx} ${cy})`}
                />
                <text
                  x="50%"
                  y="50%"
                  dominantBaseline="middle"
                  textAnchor="middle"
                  className="fill-gray-900 text-xl font-bold"
                >
                  {d.value}%
                </text>
              </svg>
              <div>
                <p className="text-sm text-gray-500">{d.label}</p>
                <p className="text-lg font-semibold text-gray-900">
                  {d.value}%
                </p>
              </div>
            </div>
          ));
        })()}
      </div>

      {/* Today vs This Week */}
      <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
        <p className="text-sm font-medium text-gray-600 mb-3">
          Activity Summary
        </p>
        {(() => {
          const today = stats.todayCollections || 0;
          const week = stats.thisWeekCollections || 0;
          const maxVal = Math.max(1, today, week);
          const toPct = Math.round((today / maxVal) * 100);
          const wkPct = Math.round((week / maxVal) * 100);
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">Today</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {today}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${toPct}%` }}
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-500">This Week</span>
                  <span className="text-sm font-semibold text-gray-900">
                    {week}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500"
                    style={{ width: `${wkPct}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};

export default VoucherStats;
