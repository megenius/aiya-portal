import React from "react";

type ComparisonKeys =
  | "totalCollections"
  | "uniqueCollectors"
  | "totalViews"
  | "uniqueViewers"
  | "collectionRate"
  | "used"
  | "redemptionRate"
  | "viewToCollectionRate";

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
      eventsInRange?: number;
    };
  };
  comparisons?: Partial<
    Record<ComparisonKeys, { current: number; prev: number }>
  >;
  allTime?: {
    collections: number;
    redemptions: number;
    clicks: number;
  };
  dateRange: number;
}

type StatItem = {
  label: string;
  value: string | number;
  color: string;
  bg: string;
  icon: string;
  compareKey?: ComparisonKeys;
  isPercent?: boolean;
};

const VoucherStats: React.FC<VoucherStatsProps> = ({
  stats,
  overview,
  comparisons,
  allTime,
  dateRange,
}) => {
  // Helper function to compute delta vs previous period
  const computeDelta = (current?: number, prev?: number) => {
    if (current === undefined || prev === undefined) return null;
    const diff = current - prev;
    const sign = Math.sign(diff);
    const pct =
      prev === 0 ? (current === 0 ? 0 : 100) : Math.round((diff / prev) * 100);
    return { sign, pct, diff };
  };

  // Helper function to get compare label
  const getCompareLabel = () => {
    if (dateRange === 1) return "Compared to yesterday";
    return `Compared to previous ${dateRange} days`;
  };

  const statItems: StatItem[] = [
    {
      label: dateRange > 0 ? "Collections (in range)" : "Total Collections",
      value: (dateRange > 0 ? (stats?.totalCollections ?? 0) : (allTime?.collections ?? 0)).toLocaleString(),
      color: "text-blue-600",
      bg: "bg-blue-50",
      icon: "collection",
      compareKey: "totalCollections",
    },
    {
      label: "Total Users",
      value: (overview?.kpi.totalUsers ?? 0).toLocaleString(),
      color: "text-green-600",
      bg: "bg-green-50",
      icon: "users",
      compareKey: "uniqueCollectors",
    },
    {
      label: dateRange > 0 ? "Clicks (in range)" : "Total Clicks",
      value: (dateRange > 0 ? (stats?.totalViews ?? 0) : (allTime?.clicks ?? 0)).toLocaleString(),
      color: "text-purple-600",
      bg: "bg-purple-50",
      icon: "eye",
      compareKey: "totalViews",
    },
    {
      label: dateRange > 0 ? "Redemptions (in range)" : "Total Redemptions",
      value: (dateRange > 0 ? (stats?.used ?? 0) : (allTime?.redemptions ?? 0)).toLocaleString(),
      color: "text-orange-600",
      bg: "bg-orange-50",
      icon: "percentage",
      compareKey: "used",
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
        {statItems.map((item, index) => {
          const comp =
            dateRange > 0 && item.compareKey && comparisons
              ? (
                  comparisons as Partial<
                    Record<ComparisonKeys, { current: number; prev: number }>
                  >
                )[item.compareKey]
              : undefined;
          const delta = comp ? computeDelta(comp.current, comp.prev) : null;
          const deltaColor = delta
            ? delta.sign > 0
              ? "text-emerald-600"
              : delta.sign < 0
                ? "text-red-600"
                : "text-gray-500"
            : "";
          const arrowPath = delta
            ? delta.sign > 0
              ? "M5 10l7-7 7 7" // up
              : delta.sign < 0
                ? "M19 14l-7 7-7-7" // down
                : "M4 12h16" // neutral
            : "";
          return (
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
                  <div className="flex items-center gap-2">
                    <p className={`text-2xl font-bold ${item.color}`}>
                      {item.value}
                    </p>
                    {dateRange > 0 && delta && item.isPercent !== true && (
                      <span
                        className={`inline-flex items-center gap-1 text-sm ${deltaColor}`}
                      >
                        <svg
                          className="w-3.5 h-3.5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d={arrowPath}
                          />
                        </svg>
                        <span className="font-semibold">
                          {Math.abs(delta.diff || 0).toLocaleString()}
                        </span>
                      </span>
                    )}
                  </div>
                  {dateRange > 0 && (
                    <div className="mt-1 text-xs text-gray-400">
                      {getCompareLabel()}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Rate Circles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Collection Rate", value: stats.collectionRate, colorClass: "text-sky-600", bgClass: "from-sky-50 to-sky-100 border-sky-200" },
          { label: "Redemption Rate", value: stats.redemptionRate, colorClass: "text-rose-600", bgClass: "from-rose-50 to-rose-100 border-rose-200" },
          { label: "View to Collection", value: stats.viewToCollectionRate, colorClass: "text-amber-600", bgClass: "from-amber-50 to-amber-100 border-amber-200" },
        ].map((rc, idx) => {
          const pct = Math.max(0, Math.min(100, rc.value || 0));
          const size = 72;
          const r = 28;
          const cx = size / 2;
          const cy = size / 2;
          const c = 2 * Math.PI * r;
          const dash = (pct / 100) * c;
          const gap = c - dash;
          return (
            <div key={idx} className={`bg-gradient-to-br ${rc.bgClass} rounded-xl p-4 border`}>
              <div className="flex items-center gap-4">
                <div className={`${rc.colorClass}`}>
                  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                    <circle cx={cx} cy={cy} r={r} fill="none" stroke="#e5e7eb" strokeWidth={8} />
                    <circle
                      cx={cx}
                      cy={cy}
                      r={r}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={8}
                      strokeLinecap="round"
                      strokeDasharray={`${dash} ${gap}`}
                      transform={`rotate(-90 ${cx} ${cy})`}
                    />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-current" fontSize="14" fontWeight="700">
                      {pct}%
                    </text>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-500">{rc.label}</div>
                  <div className={`text-lg font-semibold ${rc.colorClass}`}>{pct}%</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VoucherStats;
