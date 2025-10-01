import React, { useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { components } from "~/@types/directus";
import { useVoucherUsers } from "~/hooks/useVoucherUsers";
import { formatDistanceToNow } from "date-fns";
import { SortSelect, SortOption } from "~/routes/apps.voucher.$pageId.vouchers._index/_components/SortSelect";
import { ShowSelect } from "~/components/voucher/ShowSelect";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

// Sort options for users
const USER_SORT_OPTIONS: SortOption[] = [
  {
    value: "date",
    label: "Join Date",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    value: "name",
    label: "Name",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
];

const UsersPage: React.FC = () => {
  const { voucherPage } = useOutletContext<{ voucherPage: PageLiff }>();
  const liffId = voucherPage.liff_id as string;

  // State
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(25);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [sortBy, setSortBy] = useState<"name" | "date">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Fetch all users
  const { data: usersData, isLoading, isFetching } = useVoucherUsers(liffId, {
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  });

  // Normalize response shapes defensively
  const users = React.useMemo(() => {
    const d: any = usersData as any;
    if (!d) return [];
    if (Array.isArray(d.data)) return d.data;
    if (Array.isArray(d.items)) return d.items;
    if (d.data && Array.isArray(d.data.data)) return d.data.data;
    return [];
  }, [usersData]);

  const totalUsers = React.useMemo(() => {
    const d: any = usersData as any;
    const filterCount = d?.meta?.filter_count ?? d?.data?.meta?.filter_count;
    if (typeof filterCount === "number") return filterCount;
    return d?.meta?.total_count ?? d?.meta?.total ?? d?.data?.meta?.total_count ?? d?.data?.meta?.total ?? 0;
  }, [usersData]);

  const totalPages = Math.max(1, Math.ceil(totalUsers / limit));

  // Check if user is new today (local time)
  const isNewUser = (dateCreated: string) => {
    const created = new Date(dateCreated);
    const todayStart = new Date();
    todayStart.setHours(0, 0, 0, 0);
    return created >= todayStart;
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  // Handle sort change
  const handleSortChange = (value: string) => {
    setSortBy(value as "name" | "date");
    setPage(1);
  };

  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5">
      {/* Main Users Table */}
      <div className="bg-white border border-gray-200 shadow-xs rounded-xl overflow-hidden flex flex-col max-h-[calc(100vh-160px)]">
        {/* Header Section - Sticky */}
        <div className="flex-shrink-0 border-b border-gray-200 p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <h2 className="text-lg font-semibold text-gray-900">All Users</h2>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
              {/* Sort & Show Controls */}
              <div className="flex items-center gap-2">
                {/* Sort Select */}
                <SortSelect
                  options={USER_SORT_OPTIONS}
                  value={sortBy}
                  onChange={handleSortChange}
                />

                {/* Sort Order Button */}
                <button
                  onClick={() => {
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                    setPage(1);
                  }}
                  className="flex items-center justify-center px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 transition-all duration-200"
                  title={sortOrder === "asc" ? "Ascending" : "Descending"}
                >
                  {sortOrder === "asc" ? (
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
                        d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                      />
                    </svg>
                  ) : (
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
                        d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex gap-2">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search by name or ID..."
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Search
                </button>
                {search && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearch("");
                      setSearchInput("");
                      setPage(1);
                    }}
                    className="px-4 py-2 text-sm rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Clear
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Table Content - Scrollable */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {isLoading || isFetching ? (
            <div className="p-6 space-y-3">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="h-16 bg-gray-100 rounded-lg animate-pulse"
                />
              ))}
            </div>
          ) : users.length > 0 ? (
            <table className="w-full table-fixed text-sm">
              <thead className="bg-gray-50 sticky top-0">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-16">
                    #
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-64">
                    User
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    User ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase w-44">
                    Joined
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user: any, index: number) => {
                  const isNew = isNewUser(user.date_created);
                  return (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-xs text-gray-500 whitespace-nowrap">
                        {(page - 1) * limit + index + 1}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          {user.picture_url ? (
                            <img
                              src={user.picture_url}
                              alt={user.display_name}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-600 font-medium">
                              {(user.display_name || "U")
                                .charAt(0)
                                .toUpperCase()}
                            </div>
                          )}
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="text-sm font-medium text-gray-900 truncate">
                              {user.display_name}
                            </span>
                            {isNew && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 flex-shrink-0">
                                NEW
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 font-mono whitespace-nowrap">
                        {user.uid}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 whitespace-nowrap">
                        {formatDistanceToNow(new Date(user.date_created), {
                          addSuffix: true,
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="text-center py-8">
              <svg
                className="w-10 h-10 text-gray-400 mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <p className="text-sm text-gray-500">
                {search
                  ? "No users found matching your search"
                  : "No users found"}
              </p>
            </div>
          )}
        </div>

        {/* Footer with Pagination - Sticky */}
        {users.length > 0 && (
          <div className="flex-shrink-0 px-6 py-3 border-t border-gray-200 bg-gray-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {(page - 1) * limit + 1} to{" "}
                {Math.min(page * limit, totalUsers)} of {totalUsers} users
              </div>

              <div className="flex items-center gap-3">
                {/* Show Selector */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Show:</span>
                  <ShowSelect
                    value={limit}
                    onChange={(value) => {
                      setLimit(value);
                      setPage(1);
                    }}
                  />
                </div>

                {/* Pagination Buttons */}
                <div className="flex items-center gap-2 pl-3 border-l border-gray-300">
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
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
                    } else if (page <= 3) {
                      pageNum = i + 1;
                    } else if (page >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = page - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => setPage(pageNum)}
                        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                          page === pageNum
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
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
