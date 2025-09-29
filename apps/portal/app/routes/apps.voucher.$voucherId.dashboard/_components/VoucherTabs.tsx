import React, { useState } from "react";
import { components } from "~/@types/directus";
import { getDirectusFileUrl } from "~/utils/files";
import { format } from "date-fns";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

interface VoucherTabsProps {
  voucherPage: PageLiff;
  allVouchers: any[];
  popularVouchers: any[];
  bannerVouchers: any[];
}

const VoucherTabs: React.FC<VoucherTabsProps> = ({
  voucherPage,
  allVouchers,
  popularVouchers,
  bannerVouchers,
}) => {
  const [activeTab, setActiveTab] = useState("all");
  const [sortBy, setSortBy] = useState("date_created");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [viewMode, setViewMode] = useState<"card" | "table">("card");

  const formatDate = (dateString?: string | null) => {
    if (!dateString) return "-";
    try {
      return format(new Date(dateString), "dd MMM yyyy HH:mm");
    } catch {
      return "-";
    }
  };

  const formatDateRange = (startDate?: string | null, endDate?: string | null) => {
    const start = formatDate(startDate);
    const end = formatDate(endDate);

    if (start === "-" && end === "-") return "-";
    if (start === "-") return `Until ${end}`;
    if (end === "-") return `${start} -`;
    return `${start} - ${end}`;
  };

  const sortVouchers = (vouchers: any[]) => {
    return [...vouchers].sort((a, b) => {
      let aValue, bValue;

      switch (sortBy) {
        case "name":
          aValue = a.metadata?.title?.th || a.name || "";
          bValue = b.metadata?.title?.th || b.name || "";
          break;
        case "start_date":
          aValue = new Date(a.start_date || 0).getTime();
          bValue = new Date(b.start_date || 0).getTime();
          break;
        case "end_date":
          aValue = new Date(a.end_date || 0).getTime();
          bValue = new Date(b.end_date || 0).getTime();
          break;
        case "date_created":
        default:
          aValue = new Date(a.date_created || 0).getTime();
          bValue = new Date(b.date_created || 0).getTime();
          break;
      }

      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });
  };

  const tabs = [
    {
      id: "all",
      label: "All Vouchers",
      count: allVouchers.length,
      data: sortVouchers(allVouchers),
    },
    {
      id: "popular",
      label: "Popular",
      count: popularVouchers.length,
      data: sortVouchers(popularVouchers),
    },
    {
      id: "banner",
      label: "Banner",
      count: bannerVouchers.length,
      data: sortVouchers(bannerVouchers),
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className="bg-white border border-gray-200 shadow-xs rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">
          {voucherPage.name} Vouchers
        </h3>
        <p className="text-sm text-gray-500">
          Manage vouchers for this LIFF application
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <div className="flex justify-between items-center px-6">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2`}
              >
                {tab.label}
                <span
                  className={`${
                    activeTab === tab.id
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-100 text-gray-900"
                  } inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>

          {/* View Mode & Sort Controls */}
          <div className="flex items-center gap-2 py-4">
            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => setViewMode("card")}
                className={`px-3 py-1 text-sm ${
                  viewMode === "card"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("table")}
                className={`px-3 py-1 text-sm ${
                  viewMode === "table"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>

            {/* Sort Controls */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-300 rounded-md px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="date_created">Date Created</option>
              <option value="name">Name</option>
              <option value="start_date">Start Date</option>
              <option value="end_date">End Date</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className="text-sm border border-gray-300 rounded-md px-2 py-1 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {sortOrder === "asc" ? "↑" : "↓"}
            </button>
          </div>
        </div>
      </div>

      {/* Tab Content */}
      {viewMode === "card" ? (
        /* Card View */
        <div className="p-6">
          {activeTabData && activeTabData.data.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {activeTabData.data.map((voucher: any) => (
                <div
                  key={voucher.id}
                  className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  {/* Voucher Image - 1:1 aspect ratio */}
                  <div className="aspect-square bg-gray-100 relative">
                    {voucher.cover ? (
                      <img
                        className="w-full h-full object-cover"
                        src={getDirectusFileUrl(voucher.cover)}
                        alt={voucher.name}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}

                    {/* Code Count Badge - positioned on image */}
                    {voucher.codes && voucher.codes.length > 0 && (
                      <div className="absolute top-2 right-2">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {voucher.codes.length} codes
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Voucher Info */}
                  <div className="p-2">
                    <h4 className="text-xs font-medium text-gray-900 truncate mb-1">
                      {voucher.metadata?.title?.th || voucher.name || "Untitled Voucher"}
                    </h4>
                    <div className="space-y-1">
                      <div className="flex items-center justify-end">
                        {voucher.metadata?.redemptionType && (
                          <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium ${
                            voucher.metadata.redemptionType === 'instant'
                              ? 'bg-green-100 text-green-800'
                              : voucher.metadata.redemptionType === 'limited_time'
                              ? 'bg-orange-100 text-orange-800'
                              : voucher.metadata.redemptionType === 'form'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {voucher.metadata.redemptionType === 'instant'
                              ? 'Instant'
                              : voucher.metadata.redemptionType === 'limited_time'
                              ? 'Limited Time'
                              : voucher.metadata.redemptionType === 'form'
                              ? 'Form Required'
                              : voucher.metadata.redemptionType
                            }
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">
                        {formatDateRange(voucher.start_date, voucher.end_date)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 text-sm">
                No {activeTabData?.label.toLowerCase()} vouchers found
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Table View */
        <div className="overflow-x-auto">
          {activeTabData && activeTabData.data.length > 0 ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Voucher
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Codes
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Start Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    End Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Created
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {activeTabData.data.map((voucher: any) => (
                  <tr key={voucher.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          {voucher.cover ? (
                            <img
                              className="h-10 w-10 rounded-lg object-cover"
                              src={getDirectusFileUrl(voucher.cover)}
                              alt={voucher.name}
                            />
                          ) : (
                            <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {voucher.metadata?.title?.th || voucher.name || "Untitled Voucher"}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        voucher.status === 'published'
                          ? 'bg-green-100 text-green-800'
                          : voucher.status === 'draft'
                          ? 'bg-gray-100 text-gray-800'
                          : voucher.status === 'archived'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {voucher.status || "Unknown"}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {voucher.metadata?.redemptionType && (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          voucher.metadata.redemptionType === 'instant'
                            ? 'bg-green-100 text-green-800'
                            : voucher.metadata.redemptionType === 'limited_time'
                            ? 'bg-orange-100 text-orange-800'
                            : voucher.metadata.redemptionType === 'form'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {voucher.metadata.redemptionType === 'instant'
                            ? 'Instant'
                            : voucher.metadata.redemptionType === 'limited_time'
                            ? 'Limited Time'
                            : voucher.metadata.redemptionType === 'form'
                            ? 'Form Required'
                            : voucher.metadata.redemptionType
                          }
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {voucher.codes?.length || 0}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(voucher.start_date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {formatDate(voucher.end_date)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDate(voucher.date_created)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-8">
              <div className="text-gray-400 text-sm">
                No {activeTabData?.label.toLowerCase()} vouchers found
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      {activeTabData && activeTabData.data.length > 0 && (
        <div className="px-6 py-3 border-t border-gray-200 bg-gray-50">
          <div className="text-sm text-gray-500">
            Showing {activeTabData.data.length} voucher{activeTabData.data.length !== 1 ? "s" : ""} in {viewMode} view
          </div>
        </div>
      )}
    </div>
  );
};

export default VoucherTabs;