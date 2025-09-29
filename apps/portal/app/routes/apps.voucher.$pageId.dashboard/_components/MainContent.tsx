import React, { useState } from "react";
import { components } from "~/@types/directus";
import VoucherStats from "./VoucherStats";
import VoucherStatsSkeleton from "./VoucherStatsSkeleton";
import { useVoucherDashboard } from "~/hooks/useVoucherDashboard";
import { useAnalyticsOverview } from "~/hooks/useAnalyticsOverview";
import { useAnalyticsTrends } from "~/hooks/useAnalyticsTrends";
import { useAnalyticsLeaderboards } from "~/hooks/useAnalyticsLeaderboards";
import { Loading } from "@repo/preline";
import { getDirectusFileUrl } from "~/utils/files";
import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";
import CategoryDistribution from "./CategoryDistribution";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

interface MainContentProps {
  voucherPage: PageLiff;
}

// Types
type TopUserItem = {
  id: string;
  name: string;
  avatar?: string;
  collected?: number;
  used?: number;
};

const MainContent: React.FC<MainContentProps> = ({ voucherPage }) => {
  // Dashboard data
  const {
    data: dashboardData,
    isLoading: dashboardLoading,
    error: dashboardError,
  } = useVoucherDashboard(voucherPage.id as string);

  // Analytics data (scoped to current LIFF page)
  const { data: overview } = useAnalyticsOverview(
    voucherPage.id as string
  );
  const { data: trends, isLoading: trendsLoading } = useAnalyticsTrends(
    30,
    voucherPage.id as string
  );
  const { data: boards, isLoading: boardsLoading } = useAnalyticsLeaderboards(
    30,
    5,
    voucherPage.id as string
  );

  // Local UI state for leaderboards tab (must be declared before any early return)
  const [topUserTab, setTopUserTab] = useState<"collected" | "used">(
    "collected"
  );

  // Show loading if dashboard is loading
  if (dashboardLoading) {
    return <Loading />;
  }

  // Show error state if dashboard fails
  if (dashboardError && !dashboardData) {
    return (
      <div className="space-y-6">
        <div className="mb-6">
          <div className="flex items-center gap-4">
            {voucherPage.image && (
              <img
                className="h-12 w-12 rounded-lg object-cover"
                src={getDirectusFileUrl(voucherPage.image as string)}
                alt={voucherPage.name || "Voucher App"}
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {voucherPage.name}
              </h1>
              <p className="text-gray-600">
                Monitor your LIFF voucher application performance
              </p>
              <div className="mt-2 text-sm text-red-600">
                Unable to load dashboard data. Please try refreshing the page.
              </div>
            </div>
          </div>
        </div>

        <VoucherStatsSkeleton />
      </div>
    );
  }

  // Get stats from dashboard data or use fallback
  const stats = dashboardData?.stats || {
    total: 0,
    active: 0,
    used: 0,
    redemptionRate: 0,
    totalCollections: 0,
    uniqueCollectors: 0,
    collectionRate: 0,
    totalViews: 0,
    uniqueViewers: 0,
    viewToCollectionRate: 0,
    todayCollections: 0,
    thisWeekCollections: 0,
    avgTimeToRedemption: 0,
  };

  // Show "no data" state only if dashboard is loaded but empty
  if (!dashboardLoading && !dashboardData) {
    return (
      <div className="space-y-6">
        <div className="mb-6">
          <div className="flex items-center gap-4">
            {voucherPage.image && (
              <img
                className="h-12 w-12 rounded-lg object-cover"
                src={getDirectusFileUrl(voucherPage.image as string)}
                alt={voucherPage.name || "Voucher App"}
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {voucherPage.name}
              </h1>
              <p className="text-gray-600">
                Monitor your LIFF voucher application performance
              </p>
              <div className="mt-2 text-sm text-yellow-600">
                No voucher data found for this LIFF page yet.
              </div>
            </div>
          </div>
        </div>

        <VoucherStats
          stats={{
            total: 0,
            active: 0,
            used: 0,
            redemptionRate: 0,
            totalCollections: 0,
            uniqueCollectors: 0,
            collectionRate: 0,
            totalViews: 0,
            uniqueViewers: 0,
            viewToCollectionRate: 0,
            todayCollections: 0,
            thisWeekCollections: 0,
            avgTimeToRedemption: 0,
          }}
        />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      {/* <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 shadow-sm rounded-xl p-6">
        <div className="flex items-center gap-4">
          {voucherPage.image && (
            <div className="relative">
              <img
                className="h-12 w-12 rounded-xl object-cover ring-2 ring-white shadow-lg"
                src={getDirectusFileUrl(voucherPage.image as string)}
                alt={voucherPage.name || "Voucher App"}
              />
            </div>
          )}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {voucherPage.name} Dashboard
            </h1>
            <p className="text-sm text-blue-700 font-medium">
              Complete performance overview and analytics
            </p>
          </div>
        </div>
      </div> */}

      {/* Performance Overview */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-900">
            Performance Overview
          </h2>
        </div>

        {/* Voucher Stats */}
        <VoucherStats stats={stats} overview={overview} />
      </div>

      {/* Category Distribution Section */}
      <CategoryDistribution
        categories={boards?.categoryShareByClaims || []}
        loading={boardsLoading}
      />

      {/* Growth Analytics */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-900">
            Growth Analytics (30 days)
          </h2>
        </div>
        {trendsLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
            <span className="ml-3 text-sm text-gray-600">
              Loading trends...
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border border-blue-200">
              <p className="text-sm font-medium text-blue-700 mb-3">
                Daily New Users
              </p>
              <LineChart series={trends?.usersNewDaily || []} color="#2563eb" />
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 border border-purple-200">
              <p className="text-sm font-medium text-purple-700 mb-3">
                Daily Collections
              </p>
              <BarChart series={trends?.claimsDaily || []} color="#7c3aed" />
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 border border-green-200">
              <p className="text-sm font-medium text-green-700 mb-3">
                Daily Events
              </p>
              <LineChart series={trends?.eventsDaily || []} color="#059669" />
            </div>
          </div>
        )}
      </div>

      {/* Leaderboards Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1 h-6 bg-amber-500 rounded-full"></div>
          <h2 className="text-lg font-semibold text-gray-900">
            Performance Leaderboards
          </h2>
        </div>
        {boardsLoading ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-600"></div>
            <span className="ml-3 text-sm text-gray-600">
              Loading leaderboards...
            </span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Top Brands */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-base font-semibold text-gray-900">
                  Top Brands by Collections
                </h3>
              </div>
              <div className="space-y-3">
                {(boards?.topBrandsByClaims || []).slice(0, 5).map((b, idx) => (
                  <div
                    key={b.id}
                    className="group flex items-center justify-between p-3 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border border-blue-200 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <div className="flex-shrink-0 relative">
                        {idx === 0 && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-yellow-900 text-[8px] font-bold">
                              ★
                            </span>
                          </div>
                        )}
                        {b.logo ? (
                          <img
                            src={getDirectusFileUrl(b.logo as string)}
                            alt={b.name}
                            className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm"
                          />
                        ) : (
                          <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold ring-2 ring-blue-200">
                            {(b.name || "B").charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div
                          className="text-sm font-medium text-gray-900 truncate"
                          title={b.name}
                        >
                          {b.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          #{idx + 1} Brand
                        </div>
                      </div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <div className="text-sm font-bold text-blue-600 group-hover:text-blue-700">
                        {b.claims.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">collections</div>
                    </div>
                  </div>
                ))}
                {(!boards || boards.topBrandsByClaims.length === 0) && (
                  <div className="text-sm text-gray-500 text-center py-6 bg-gray-50 rounded-lg">
                    No brand data available
                  </div>
                )}
              </div>
            </div>

            {/* Top Vouchers */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 2a1 1 0 000 2h1v3H4a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2h-2V4h1a1 1 0 100-2H5zM8 4h4v3H8V4zm.5 7.5A1.5 1.5 0 0110 10a1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5 1.5 1.5 0 01-1.5-1.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <h3 className="text-base font-semibold text-gray-900">
                  Top Vouchers by Clicks
                </h3>
              </div>
              <div className="space-y-3">
                {(boards?.topVouchersByClicks || [])
                  .slice(0, 5)
                  .map((v, idx) => (
                    <div
                      key={v.voucherId}
                      className="group flex items-center justify-between p-3 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg border border-purple-200 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="flex-shrink-0 relative">
                          {idx === 0 && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                              <span className="text-yellow-900 text-[8px] font-bold">
                                ★
                              </span>
                            </div>
                          )}
                          {v.cover ? (
                            <img
                              src={getDirectusFileUrl(v.cover as string)}
                              alt={v.name}
                              className="w-10 h-7 rounded-md object-cover ring-2 ring-white shadow-sm"
                            />
                          ) : (
                            <div className="w-10 h-7 rounded-md bg-purple-100 text-purple-700 flex items-center justify-center text-[10px] font-bold ring-2 ring-purple-200">
                              IMG
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className="text-sm font-medium text-gray-900 truncate"
                            title={v.name}
                          >
                            {v.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            #{idx + 1} Voucher
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className="text-sm font-bold text-purple-600 group-hover:text-purple-700">
                          {v.clicks.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">clicks</div>
                      </div>
                    </div>
                  ))}
                {(!boards || boards.topVouchersByClicks.length === 0) && (
                  <div className="text-sm text-gray-500 text-center py-6 bg-gray-50 rounded-lg">
                    No voucher data available
                  </div>
                )}
              </div>
            </div>

            {/* Top Users */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  className="w-5 h-5 text-teal-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <h3 className="text-base font-semibold text-gray-900">
                  Top Users
                </h3>
              </div>
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setTopUserTab("collected")}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                    topUserTab === "collected"
                      ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                      : "bg-white text-teal-700 border-teal-300 hover:bg-teal-50"
                  }`}
                >
                  Most Collected
                </button>
                <button
                  onClick={() => setTopUserTab("used")}
                  className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
                    topUserTab === "used"
                      ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                      : "bg-white text-teal-700 border-teal-300 hover:bg-teal-50"
                  }`}
                >
                  Most Redemption
                </button>
              </div>
              <div className="space-y-3">
                {(() => {
                  const list = (
                    topUserTab === "collected"
                      ? boards?.topUsersByCollected || []
                      : boards?.topUsersByUsed || []
                  ) as TopUserItem[];
                  const valueKey =
                    topUserTab === "collected" ? "collected" : "used";
                  if (!list || list.length === 0) {
                    return (
                      <div className="text-sm text-gray-500 text-center py-6 bg-gray-50 rounded-lg">
                        No user data available
                      </div>
                    );
                  }
                  return list.slice(0, 5).map((u, idx) => (
                    <div
                      key={u.id}
                      className="group flex items-center justify-between p-3 bg-gradient-to-r from-teal-50 to-teal-100 rounded-lg border border-teal-200 hover:shadow-md transition-all duration-200"
                    >
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className="flex-shrink-0 relative">
                          {idx === 0 && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full flex items-center justify-center">
                              <span className="text-yellow-900 text-[8px] font-bold">
                                ★
                              </span>
                            </div>
                          )}
                          {u.avatar ? (
                            <img
                              src={u.avatar}
                              alt={u.name}
                              className="w-8 h-8 rounded-full object-cover ring-2 ring-white shadow-sm"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold ring-2 ring-teal-200">
                              {(u.name || "U").charAt(0).toUpperCase()}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div
                            className="text-sm font-medium text-gray-900 truncate"
                            title={u.name}
                          >
                            {u.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            #{idx + 1} User
                          </div>
                        </div>
                      </div>
                      <div className="flex-shrink-0 text-right">
                        <div className="text-sm font-bold text-teal-600 group-hover:text-teal-700">
                          {(u[valueKey] || 0).toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500">{valueKey === "used" ? "redemption" : valueKey}</div>
                      </div>
                    </div>
                  ));
                })()}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;
