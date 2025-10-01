import React, { useMemo } from "react";
import { useParams } from "@remix-run/react";
import { format } from "date-fns";
import { useVoucherStats } from "~/hooks/useVoucherStats";
import { useVoucherValidation } from "~/hooks/useVoucherValidation";
import { getDirectusFileUrl } from "~/utils/files";
import {
  VoucherCodeStatus,
  RedemptionType,
  REDEMPTION_TYPE_STYLES,
  REDEMPTION_TYPE_LABELS,
  VOUCHER_CONSTANTS,
} from "~/constants/voucher.constant";
import {
  sanitizeUserInput,
  getInitial,
  formatDateTimeThTH,
  isWithinTimeThreshold,
} from "~/utils/voucher";

interface CollectorData {
  userId: string;
  display_name: string;
  picture_url: string | null;
  codes: Array<{
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
  }>;
  collectedDate: Date | null;
  status: VoucherCodeStatus;
}

const VoucherLatestCollectorsPage: React.FC = () => {
  const { voucherId } = useParams();
  const validation = useVoucherValidation(voucherId);

  const {
    data: voucherStatsData,
    isLoading,
    error,
  } = useVoucherStats(voucherId as string, validation.isValid, {
    refetchInterval: VOUCHER_CONSTANTS.STATS_REFETCH_INTERVAL_MS,
  });

  // Validation error
  if (!validation.isValid) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-b from-indigo-800 via-purple-700 to-fuchsia-600">
        <div className="rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm">
          <div className="mb-2 text-xl font-medium text-white">
            {validation.error}
          </div>
          <div className="text-white/80">Please check the URL and try again.</div>
        </div>
      </div>
    );
  }

  // Loading state
  if (isLoading) {
    return (
      <div className="flex h-screen flex-col overflow-hidden bg-gradient-to-b from-indigo-800 via-purple-700 to-fuchsia-600">
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-4 p-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-20 w-full animate-pulse rounded-lg bg-white/10"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !voucherStatsData) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-b from-indigo-800 via-purple-700 to-fuchsia-600">
        <div className="rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm">
          <div className="mb-2 text-xl font-medium text-white">
            Failed to load collector data
          </div>
          <div className="text-white/80">Please try again later.</div>
        </div>
      </div>
    );
  }

  const { stats, voucher } = voucherStatsData;
  const topCollectors = stats.topCollectors || [];

  // Memoize collector processing to avoid expensive operations on every render
  const latestCollectors = useMemo<CollectorData[]>(() => {
    return [...topCollectors]
      .map((collector) => {
        const firstCode = collector.codes?.[0];
        const collectedDate = firstCode?.collected_date
          ? new Date(firstCode.collected_date)
          : null;

        // Determine status from first code (or could check all codes)
        let status = VoucherCodeStatus.COLLECTED;
        if (firstCode?.status === VoucherCodeStatus.USED ||
            firstCode?.status === VoucherCodeStatus.PENDING_CONFIRMATION) {
          status = VoucherCodeStatus.USED;
        }

        return {
          ...collector,
          collectedDate,
          status,
        };
      })
      .sort((a, b) => {
        // Sort by date, latest first
        if (!a.collectedDate && !b.collectedDate) return 0;
        if (!a.collectedDate) return 1;
        if (!b.collectedDate) return -1;
        return b.collectedDate.getTime() - a.collectedDate.getTime();
      });
  }, [topCollectors]);

  // Get redemption type styling
  const redemptionType = voucher.metadata?.redemptionType as RedemptionType | undefined;
  const redemptionTypeStyle = redemptionType
    ? REDEMPTION_TYPE_STYLES[redemptionType]
    : "bg-gray-500/80 text-white";
  const redemptionTypeLabel = redemptionType
    ? REDEMPTION_TYPE_LABELS[redemptionType]
    : redemptionType;

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-indigo-800 via-purple-700 to-fuchsia-600">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="pt-8 space-y-6">
          {/* Voucher Details Card */}
          <div className="px-6">
            <div className="rounded-xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-start">
                {/* Voucher Image */}
                <div className="flex-shrink-0">
                  {voucher.cover ? (
                    <img
                      src={getDirectusFileUrl(voucher.cover)}
                      alt={sanitizeUserInput(voucher.metadata?.title?.th || voucher.name)}
                      className="aspect-square w-32 rounded-lg object-cover md:w-48"
                    />
                  ) : (
                    <div className="flex aspect-square w-32 items-center justify-center rounded-lg bg-white/20 md:w-48">
                      <svg
                        className="h-16 w-16 text-white/50 md:h-24 md:w-24"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Voucher Info */}
                <div className="flex-1">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-2xl font-bold text-white">
                      {sanitizeUserInput(voucher.metadata?.title?.th || voucher.name)}
                    </h2>

                    {/* Redemption Type Badge */}
                    {redemptionType && (
                      <div>
                        <span
                          className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${redemptionTypeStyle}`}
                        >
                          {redemptionTypeLabel}
                        </span>
                      </div>
                    )}

                    {/* Date Range */}
                    {(voucher.start_date || voucher.end_date) && (
                      <div className="text-sm text-white/80">
                        {voucher.start_date && voucher.end_date ? (
                          <>
                            {format(
                              new Date(voucher.start_date),
                              "dd MMM yyyy HH:mm"
                            )}{" "}
                            -{" "}
                            {format(new Date(voucher.end_date), "dd MMM yyyy HH:mm")}
                          </>
                        ) : voucher.start_date ? (
                          <>
                            From{" "}
                            {format(
                              new Date(voucher.start_date),
                              "dd MMM yyyy HH:mm"
                            )}
                          </>
                        ) : (
                          <>
                            Until{" "}
                            {format(new Date(voucher.end_date), "dd MMM yyyy HH:mm")}
                          </>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    {voucher.metadata?.description?.th && (
                      <p className="mt-2 text-sm text-white/70 line-clamp-2">
                        {sanitizeUserInput(voucher.metadata.description.th)}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Summary */}
          <div className="px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">
                  {stats.totalViews || 0}
                </div>
                <div className="mt-1 text-sm text-white/80">Total Views</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">
                  {stats.collectedCodes || 0} / {stats.totalCodes || 0}
                </div>
                <div className="mt-1 text-sm text-white/80">
                  Total Collections
                </div>
                <div className="text-xs text-white/60">Collected / Total</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">
                  {stats.collectionRate || 0}%
                </div>
                <div className="mt-1 text-sm text-white/80">
                  Collection Rate
                </div>
              </div>
            </div>
          </div>

          {/* All Collectors List - 2 Columns */}
          {latestCollectors.length > 0 && (
            <div className="px-6">
              <div className="mb-6 text-center text-lg font-medium text-white/90">
                All Collectors
              </div>

              <div className="pb-8">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {latestCollectors.map((collector, index) => {
                    const safeName = sanitizeUserInput(collector.display_name);
                    const initial = getInitial(collector.display_name);
                    const isNew = isWithinTimeThreshold(
                      collector.collectedDate,
                      VOUCHER_CONSTANTS.NEW_COLLECTOR_THRESHOLD_MS
                    );

                    return (
                      <div
                        key={collector.userId}
                        className={`relative flex items-center gap-3 rounded-xl border bg-white/10 p-4 shadow-sm backdrop-blur-sm transition-all hover:bg-white/15 ${
                          isNew
                            ? "border-green-400/80 shadow-green-400/20"
                            : "border-white/20"
                        }`}
                      >
                        {isNew && (
                          <div className="absolute -right-1 -top-1 rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-white shadow-lg">
                            NEW
                          </div>
                        )}
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
                          #{index + 1}
                        </div>
                        <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/30">
                          {collector.picture_url ? (
                            <img
                              src={collector.picture_url}
                              alt={safeName}
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center bg-white/20 text-sm text-white">
                              {initial}
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="truncate text-sm font-semibold text-white">
                            {safeName}
                          </div>
                          <div className="text-xs text-white/70">
                            {formatDateTimeThTH(collector.collectedDate)}
                          </div>
                        </div>
                        <span
                          className={`flex-shrink-0 rounded-full px-2 py-1 text-xs font-medium ${
                            collector.status === VoucherCodeStatus.USED
                              ? "bg-green-500/80 text-white"
                              : "bg-blue-500/80 text-white"
                          }`}
                        >
                          {collector.status}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {latestCollectors.length === 0 && (
            <div className="px-6 pb-8">
              <div className="rounded-xl border border-white/20 bg-white/10 p-12 text-center backdrop-blur-sm">
                <div className="text-xl font-medium text-white">
                  No collectors yet
                </div>
                <div className="mt-2 text-white/80">
                  Be the first to collect this voucher!
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoucherLatestCollectorsPage;
