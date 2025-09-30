import React from "react";
import { useParams } from "@remix-run/react";
import { useVoucherStats } from "~/hooks/useVoucherStats";

const VoucherLatestCollectorsPage: React.FC = () => {
  const { voucherId } = useParams();

  const { data: voucherStatsData, isLoading, error } = useVoucherStats(
    voucherId as string,
    !!voucherId,
    { refetchInterval: 5000 }
  );

  if (isLoading) {
    return (
      <div className="flex h-screen flex-col overflow-hidden bg-gradient-to-b from-indigo-800 via-purple-700 to-fuchsia-600">
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-4 p-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="h-20 w-full animate-pulse rounded-lg bg-white/10"
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !voucherStatsData) {
    return (
      <div className="flex h-screen items-center justify-center bg-gradient-to-b from-indigo-800 via-purple-700 to-fuchsia-600">
        <div className="rounded-xl bg-white/10 p-8 text-center backdrop-blur-sm">
          <div className="mb-2 text-xl font-medium text-white">Failed to load collector data</div>
          <div className="text-white/80">Please try again later.</div>
        </div>
      </div>
    );
  }

  const { stats } = voucherStatsData;
  const topCollectors = stats.topCollectors || [];

  // Sort collectors by collection date (latest first) and prepare data
  const latestCollectors = [...topCollectors]
    .map((collector) => {
      const firstCode = collector.codes?.[0];
      const collectedDate = firstCode?.collected_date ? new Date(firstCode.collected_date) : null;
      const status = firstCode?.status === 'used' || firstCode?.status === 'pending_confirmation' ? 'used' : 'collected';

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

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-indigo-800 via-purple-700 to-fuchsia-600">
      <div className="min-h-0 flex-1 overflow-y-auto">
        <div className="space-y-6">
          <div className="px-6 pt-8">
            <h1 className="text-center text-4xl font-bold tracking-tight text-white">
              Latest Collectors
            </h1>
            <p className="mt-3 text-center text-lg text-white/80">
              Most recent collectors for this voucher
            </p>
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
                  {stats.collectedCodes || 0}
                </div>
                <div className="mt-1 text-sm text-white/80">Total Collections</div>
              </div>
              <div className="rounded-xl border border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-white">
                  {stats.collectionRate || 0}%
                </div>
                <div className="mt-1 text-sm text-white/80">Collection Rate</div>
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
                <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 lg:grid-cols-2">
                  {latestCollectors.map((collector, index) => {
                    // Check if collector is NEW (within 1 minute)
                    const now = new Date();
                    const isNew = collector.collectedDate && (now.getTime() - collector.collectedDate.getTime()) < 60000;

                    return (
                    <div
                      key={collector.userId}
                      className={`relative flex items-center gap-3 rounded-xl border bg-white/10 p-4 shadow-sm backdrop-blur-sm transition-all hover:bg-white/15 ${
                        isNew ? 'border-green-400/80 shadow-green-400/20' : 'border-white/20'
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
                            alt={collector.display_name}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-white/20 text-sm text-white">
                            {collector.display_name.charAt(0).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-semibold text-white">
                          {collector.display_name}
                        </div>
                        <div className="text-xs text-white/70">
                          {collector.collectedDate
                            ? collector.collectedDate.toLocaleDateString('th-TH', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric'
                              }) + ' ' + collector.collectedDate.toLocaleTimeString('th-TH', {
                                hour: '2-digit',
                                minute: '2-digit'
                              })
                            : '-'}
                        </div>
                      </div>
                      <span className={`flex-shrink-0 rounded-full px-2 py-1 text-xs font-medium ${
                        collector.status === 'used' ? 'bg-green-500/80 text-white' : 'bg-blue-500/80 text-white'
                      }`}>
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
                <div className="text-xl font-medium text-white">No collectors yet</div>
                <div className="mt-2 text-white/80">Be the first to collect this voucher!</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VoucherLatestCollectorsPage;