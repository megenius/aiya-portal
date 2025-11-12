import React from "react";
import { useParams, useNavigate, useOutletContext } from "@remix-run/react";
import { components } from "~/@types/directus";
import { getDirectusFileUrl } from "~/utils/files";
import { useVoucherStats } from "~/hooks/useVoucherStats";
import { useVoucherValidation } from "~/hooks/useVoucherValidation";
import { useCollectorPagination } from "~/hooks/useCollectorPagination";
import { StatsCard, StatsCardIcons } from "~/components/voucher/StatsCard";
import VoucherStatsSkeleton from "./_components/VoucherStatsSkeleton";
import {
  VoucherCodeStatus,
  STATUS_BADGE_STYLES,
  VOUCHER_CONSTANTS,
} from "~/constants/voucher.constant";
import {
  sanitizeUserInput,
  getInitial,
  formatDateShort,
  formatDateTimeTZ,
} from "~/utils/voucher";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

interface CollectorCode {
  code: string;
  status:
    | "available"
    | "reserved"
    | "collected"
    | "pending_confirmation"
    | "used"
    | "expired"
    | "unknown";
  collected_date: string | null;
  used_date: string | null;
}

interface Collector {
  userId: string;
  display_name: string;
  picture_url: string | null;
  codes: CollectorCode[];
}

// Helper to get status badge class
const getStatusBadgeClass = (status: string): string => {
  return (
    STATUS_BADGE_STYLES[status as VoucherCodeStatus] ||
    STATUS_BADGE_STYLES[VoucherCodeStatus.AVAILABLE]
  );
};

// Reusable back button component
const BackButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
    Back to Vouchers
  </button>
);

const VoucherStatsPage: React.FC = () => {
  const { voucherId } = useParams();
  const navigate = useNavigate();
  const { voucherPage } = useOutletContext<{ voucherPage: PageLiff }>();
  const validation = useVoucherValidation(voucherId);

  const {
    data: voucherStatsData,
    isLoading,
    error,
  } = useVoucherStats(voucherId as string, validation.isValid);

  const handleGoBack = () => {
    navigate(`/apps/voucher/${voucherPage.id}/vouchers`);
  };

  // Use pagination hook
  const {
    currentPage,
    totalPages,
    startIndex,
    currentItems: currentCollectors,
    setCurrentPage,
  } = useCollectorPagination<Collector>(
    voucherStatsData?.stats?.topCollectors,
    VOUCHER_CONSTANTS.ITEMS_PER_PAGE
  );

  // Validation error
  if (!validation.isValid) {
    return (
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        <div className="mb-4">
          <BackButton onClick={handleGoBack} />
        </div>
        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
          <div className="text-center py-8">
            <div className="text-red-600 text-lg font-medium mb-2">
              {validation.error}
            </div>
            <div className="text-gray-500">
              Please check the URL and try again.
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return <VoucherStatsSkeleton />;
  }

  // Error state
  if (error || !voucherStatsData) {
    return (
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        <div className="mb-4">
          <BackButton onClick={handleGoBack} />
        </div>
        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
          <div className="text-center py-8">
            <div className="text-red-600 text-lg font-medium mb-2">
              Failed to load voucher statistics
            </div>
            <div className="text-gray-500">
              Please try refreshing the page or contact support.
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { voucher, stats } = voucherStatsData;
  const totalCollectors = stats.topCollectors?.length || 0;

  // CSV Export: collectors
  const handleExportCsv = () => {
    try {
      const collectors = stats.topCollectors || [];
      const header = [
        "collected_by.uid",
        "collected_by.display_name",
        "code",
        "status",
        "collected_date",
        "used_date",
        "expired_date",
      ];

      const escape = (val: unknown) => {
        const s = val === null || val === undefined ? "" : String(val);
        const escaped = s.replace(/"/g, '""');
        return `"${escaped}"`;
      };

      const rows = collectors.map((collector) => {
        const codeItem = collector.codes?.[0];
        return [
          collector.userId || "",
          collector.display_name || "",
          codeItem?.code || "",
          codeItem?.status || "",
          codeItem?.collected_date
            ? formatDateTimeTZ(codeItem.collected_date)
            : "",
          codeItem?.used_date ? formatDateTimeTZ(codeItem.used_date) : "",
          codeItem?.expired_date ? formatDateTimeTZ(codeItem.expired_date) : "",
        ];
      });

      const csv = [
        header.join(","),
        ...rows.map((r) => r.map(escape).join(",")),
      ].join("\n");

      const blob = new Blob(["\uFEFF" + csv], {
        type: "text/csv;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const safeName = sanitizeUserInput(
        voucher?.metadata?.title?.th || voucher?.name || "voucher"
      );
      const ts = new Date();
      const pad = (n: number) => String(n).padStart(2, "0");
      const filename = `${safeName}-collectors-${ts.getFullYear()}${pad(ts.getMonth() + 1)}${pad(ts.getDate())}-${pad(ts.getHours())}${pad(ts.getMinutes())}${pad(ts.getSeconds())}.csv`;
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (e) {
      console.error("Export CSV failed:", e);
      alert("Failed to export CSV. Please try again.");
    }
  };

  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
      {/* Header with Back Button */}
      <div className="mb-4">
        <BackButton onClick={handleGoBack} />

        {/* Voucher Header */}
        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {voucher?.cover && (
                <img
                  className="h-12 w-12 rounded-lg object-cover"
                  src={getDirectusFileUrl(voucher.cover)}
                  alt={sanitizeUserInput(voucher.name)}
                />
              )}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {sanitizeUserInput(
                    voucher?.metadata?.title?.th ||
                      voucher?.name ||
                      "Voucher Statistics"
                  )}
                </h1>
                <p className="text-gray-600 mt-1">
                  Detailed statistics and analytics for this voucher
                </p>
              </div>
            </div>
            <button
              onClick={() =>
                window.open(`/apps/voucher/live-board/${voucherId}`, "_blank")
              }
              className="inline-flex items-center gap-2 rounded-lg border-2 border-blue-600 bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-all hover:bg-blue-50 "
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              View Live Board
            </button>
          </div>
        </div>
      </div>

      {/* Stats Content */}
      <div className="space-y-6">
        {/* Overview Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            icon={StatsCardIcons.Views}
            label="Total Views"
            value={stats.totalViews || 0}
            subtitle={`${stats.uniqueViewers || 0} unique`}
            iconBgColor="bg-blue-100"
            iconColor="text-blue-600"
          />

          <StatsCard
            icon={StatsCardIcons.Collected}
            label="Collected"
            value={stats.collectedCodes}
            subtitle={`${stats.uniqueCollectors || 0} unique`}
            iconBgColor="bg-green-100"
            iconColor="text-green-600"
          />

          <StatsCard
            icon={StatsCardIcons.Used}
            label="Used"
            value={stats.usedCodes}
            subtitle={`${stats.redemptionRate}% rate`}
            iconBgColor="bg-purple-100"
            iconColor="text-purple-600"
          />

          <StatsCard
            icon={StatsCardIcons.Rate}
            label="Collection Rate"
            value={`${stats.collectionRate}%`}
            subtitle="viewers → collectors"
            iconBgColor="bg-orange-100"
            iconColor="text-orange-600"
          />
        </div>

        {/* Time-based Metrics */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Recent Activity
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xs text-gray-600">Today Views</div>
              <div className="text-lg font-semibold text-blue-900">
                {stats.todayViews || 0}
              </div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-xs text-gray-600">Today Collections</div>
              <div className="text-lg font-semibold text-green-900">
                {stats.todayCollections}
              </div>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <div className="text-xs text-gray-600">Week Views</div>
              <div className="text-lg font-semibold text-blue-900">
                {stats.thisWeekViews || 0}
              </div>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <div className="text-xs text-gray-600">Week Collections</div>
              <div className="text-lg font-semibold text-green-900">
                {stats.thisWeekCollections}
              </div>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Avg. Time to Redemption</span>
              <span className="font-medium text-gray-900">
                {stats.avgTimeToRedemption} days
              </span>
            </div>
          </div>
        </div>

        {/* All Collectors with Pagination */}
        <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">
              All Collectors
            </h3>
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-500">
                {totalCollectors} total
              </div>
              <button
                type="button"
                onClick={handleExportCsv}
                className="inline-flex items-center gap-1 rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500"
                title="Export collectors as CSV"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v12m0 0l-3-3m3 3l3-3M6 20h12"
                  />
                </svg>
                Export CSV
              </button>
            </div>
          </div>

          {totalCollectors > 0 ? (
            <>
              {/* Table View for better density */}
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        #
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Collector
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Code
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">
                        Collected
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {currentCollectors.map((collector, index) => {
                      const codeItem = collector.codes?.[0];
                      const safeName = sanitizeUserInput(
                        collector.display_name
                      );
                      const initial = getInitial(collector.display_name);

                      return (
                        <tr
                          key={`${collector.userId}-${index}`}
                          className="hover:bg-gray-50"
                        >
                          <td className="px-3 py-2 text-xs text-gray-500">
                            #{startIndex + index + 1}
                          </td>
                          <td className="px-3 py-2">
                            <div className="flex items-center gap-2">
                              {collector.picture_url ? (
                                <img
                                  className="w-6 h-6 rounded-full object-cover"
                                  src={collector.picture_url}
                                  alt={safeName}
                                  onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                  }}
                                />
                              ) : (
                                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                                  <span className="text-xs text-gray-600 font-medium">
                                    {initial}
                                  </span>
                                </div>
                              )}
                              <span className="text-sm font-medium text-gray-900 truncate max-w-[120px]">
                                {safeName}
                              </span>
                            </div>
                          </td>
                          <td className="px-3 py-2">
                            {codeItem ? (
                              <span className="font-mono text-xs text-gray-700">
                                {sanitizeUserInput(codeItem.code)}
                              </span>
                            ) : (
                              <span className="text-xs text-gray-400">-</span>
                            )}
                          </td>
                          <td className="px-3 py-2">
                            {codeItem ? (
                              <span
                                className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${getStatusBadgeClass(
                                  codeItem.status
                                )}`}
                              >
                                {codeItem.status}
                              </span>
                            ) : (
                              <span className="text-xs text-gray-400">-</span>
                            )}
                          </td>
                          <td className="px-3 py-2 text-xs text-gray-400">
                            {formatDateShort(codeItem?.collected_date)}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Pagination Component */}
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  Showing {startIndex + 1} to{" "}
                  {Math.min(
                    startIndex + VOUCHER_CONSTANTS.ITEMS_PER_PAGE,
                    totalCollectors
                  )}{" "}
                  of {totalCollectors}
                </div>

                {/* Full pagination */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Previous
                  </button>

                  {/* Page numbers */}
                  <div className="flex items-center gap-1">
                    {[...Array(Math.min(5, totalPages))].map((_, i) => {
                      let pageNum: number;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <button
                          key={pageNum}
                          onClick={() => setCurrentPage(pageNum)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            currentPage === pageNum
                              ? "bg-blue-600 text-white"
                              : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-500">No collections yet</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoucherStatsPage;
