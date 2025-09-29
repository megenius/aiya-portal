import React, { useState } from "react";
import { useParams, useNavigate, useOutletContext } from "@remix-run/react";
import { components } from "~/@types/directus";
import { getDirectusFileUrl } from "~/utils/files";
import { useVoucherStats } from "~/hooks/useVoucherStats";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

const VoucherStatsPage: React.FC = () => {
  const { voucherId } = useParams();
  const navigate = useNavigate();
  const { voucherPage } = useOutletContext<{ voucherPage: PageLiff }>();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const { data: voucherStatsData, isLoading, error } = useVoucherStats(
    voucherId as string,
    !!voucherId
  );

  const handleGoBack = () => {
    navigate(`/apps/voucher/${voucherPage.id}/vouchers`);
  };

  if (isLoading) {
    return (
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-2 text-gray-600">Loading voucher statistics...</span>
        </div>
      </div>
    );
  }

  if (error || !voucherStatsData) {
    return (
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        <div className="mb-4">
          <button
            onClick={handleGoBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Vouchers
          </button>
        </div>

        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
          <div className="text-center py-8">
            <div className="text-red-600 text-lg font-medium mb-2">Failed to load voucher statistics</div>
            <div className="text-gray-500">Please try refreshing the page or contact support.</div>
          </div>
        </div>
      </div>
    );
  }

  const { voucher, stats } = voucherStatsData;

  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
      {/* Header with Back Button */}
      <div className="mb-4">
        <button
          onClick={handleGoBack}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm mb-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Vouchers
        </button>

        {/* Voucher Header */}
        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
          <div className="flex items-center gap-4">
            {voucher?.cover && (
              <img
                className="h-12 w-12 rounded-lg object-cover"
                src={getDirectusFileUrl(voucher.cover)}
                alt={voucher.name}
              />
            )}
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {voucher?.metadata?.title?.th || voucher?.name || "Voucher Statistics"}
              </h1>
              <p className="text-gray-600 mt-1">
                Detailed statistics and analytics for this voucher
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Content */}
      <div className="space-y-6">
          {/* Overview Stats Grid - รวม Views และ Collections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Views Stats */}
            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
              <div className="flex items-center">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="text-xs font-medium text-gray-500">Total Views</div>
                  <div className="text-lg font-bold text-gray-900">{stats.totalViews || 0}</div>
                  <div className="text-xs text-gray-400">{stats.uniqueViewers || 0} unique</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
              <div className="flex items-center">
                <div className="p-2 bg-green-100 rounded-lg">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="text-xs font-medium text-gray-500">Collected</div>
                  <div className="text-lg font-bold text-gray-900">{stats.collectedCodes}</div>
                  <div className="text-xs text-gray-400">of {stats.totalCodes} codes</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
              <div className="flex items-center">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="text-xs font-medium text-gray-500">Used</div>
                  <div className="text-lg font-bold text-gray-900">{stats.usedCodes}</div>
                  <div className="text-xs text-gray-400">{stats.redemptionRate}% rate</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
              <div className="flex items-center">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="ml-3">
                  <div className="text-xs font-medium text-gray-500">Collection Rate</div>
                  <div className="text-lg font-bold text-gray-900">{stats.collectionRate}%</div>
                  <div className="text-xs text-gray-400">conversion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Time-based Metrics */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recent Activity</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xs text-gray-600">Today Views</div>
                <div className="text-lg font-semibold text-blue-900">{stats.todayViews || 0}</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-gray-600">Today Collections</div>
                <div className="text-lg font-semibold text-green-900">{stats.todayCollections}</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-xs text-gray-600">Week Views</div>
                <div className="text-lg font-semibold text-blue-900">{stats.thisWeekViews || 0}</div>
              </div>
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-xs text-gray-600">Week Collections</div>
                <div className="text-lg font-semibold text-green-900">{stats.thisWeekCollections}</div>
              </div>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-200">
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-600">Avg. Time to Redemption</span>
                <span className="font-medium text-gray-900">{stats.avgTimeToRedemption} days</span>
              </div>
            </div>
          </div>

          {/* All Collectors with Pagination */}
          <div className="bg-white border border-gray-200 shadow-sm rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">All Collectors</h3>
              <div className="text-xs text-gray-500">
                {stats.topCollectors?.length || 0} total
              </div>
            </div>

            {stats.topCollectors && stats.topCollectors.length > 0 ? (() => {
              const totalPages = Math.ceil(stats.topCollectors.length / itemsPerPage);
              const startIndex = (currentPage - 1) * itemsPerPage;
              const endIndex = startIndex + itemsPerPage;
              const currentCollectors = stats.topCollectors.slice(startIndex, endIndex);

              return (
                <>
                  {/* Table View for better density */}
                  <div className="overflow-x-auto mb-4">
                    <table className="w-full text-sm">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Collector</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Code</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                          <th className="px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase">Collected</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {currentCollectors.map((collector: any, index: number) => {
                          const codeItem = collector.codes?.[0];
                          return (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="px-3 py-2 text-xs text-gray-500">
                                #{startIndex + index + 1}
                              </td>
                              <td className="px-3 py-2">
                                <div className="flex items-center gap-2">
                                  {collector.picture_url ? (
                                    <img
                                      className="w-6 h-6 rounded-full object-cover"
                                      src={collector.picture_url}
                                      alt={collector.display_name}
                                    />
                                  ) : (
                                    <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                                      <span className="text-xs text-gray-600 font-medium">
                                        {collector.display_name.charAt(0).toUpperCase()}
                                      </span>
                                    </div>
                                  )}
                                  <span className="text-sm font-medium text-gray-900 truncate max-w-[120px]">
                                    {collector.display_name}
                                  </span>
                                </div>
                              </td>
                              <td className="px-3 py-2">
                                {codeItem ? (
                                  <span className="font-mono text-xs text-gray-700">
                                    {codeItem.code}
                                  </span>
                                ) : (
                                  <span className="text-xs text-gray-400">-</span>
                                )}
                              </td>
                              <td className="px-3 py-2">
                                {codeItem ? (
                                  <span className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                                    codeItem.status === 'used' ? 'bg-green-100 text-green-800' :
                                    codeItem.status === 'collected' ? 'bg-blue-100 text-blue-800' :
                                    codeItem.status === 'pending_confirmation' ? 'bg-yellow-100 text-yellow-800' :
                                    codeItem.status === 'reserved' ? 'bg-purple-100 text-purple-800' :
                                    codeItem.status === 'available' ? 'bg-gray-100 text-gray-800' :
                                    codeItem.status === 'expired' ? 'bg-red-100 text-red-800' :
                                    'bg-gray-100 text-gray-800'
                                  }`}>
                                    {codeItem.status}
                                  </span>
                                ) : (
                                  <span className="text-xs text-gray-400">-</span>
                                )}
                              </td>
                              <td className="px-3 py-2 text-xs text-gray-400">
                                {codeItem?.collected_date
                                  ? new Date(codeItem.collected_date).toLocaleDateString('en-US', {
                                      month: 'short',
                                      day: 'numeric'
                                    })
                                  : '-'
                                }
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Compact Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between text-xs">
                      <div className="text-gray-500">
                        {startIndex + 1}-{Math.min(endIndex, stats.topCollectors.length)} of {stats.topCollectors.length}
                      </div>
                      <div className="flex gap-1">
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          ‹
                        </button>
                        <span className="px-2 py-1 text-xs text-gray-600">
                          {currentPage} / {totalPages}
                        </span>
                        <button
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  )}
                </>
              );
            })() : (
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