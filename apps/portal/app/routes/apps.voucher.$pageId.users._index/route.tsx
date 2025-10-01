import React, { useState } from "react";
import { useOutletContext } from "@remix-run/react";
import { components } from "~/@types/directus";
import { useVoucherUsers } from "~/hooks/useVoucherUsers";
import { formatDistanceToNow } from "date-fns";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

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

  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-6">


      {/* All Users Section */}
      <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h2 className="text-lg font-semibold text-gray-900">All Users</h2>

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

        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as "name" | "date");
                  setPage(1);
                }}
                className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="date">Join Date</option>
                <option value="name">Name</option>
              </select>
              <button
                onClick={() => {
                  setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  setPage(1);
                }}
                className="p-1.5 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                title={sortOrder === "asc" ? "Ascending" : "Descending"}
              >
                <svg
                  className={`w-4 h-4 text-gray-600 transition-transform ${
                    sortOrder === "desc" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Show:</span>
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPage(1);
                }}
                className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>
        </div>

        {/* Table */}
        {isLoading || isFetching ? (
          <div className="space-y-3">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="h-16 bg-gray-100 rounded-lg animate-pulse"
              />
            ))}
          </div>
        ) : users.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      #
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      User
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      User ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Joined
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user, index) => {
                    const isNew = isNewUser(user.date_created);
                    return (
                      <tr key={user.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-xs text-gray-500">
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
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium text-gray-900">
                                {user.display_name}
                              </span>
                              {isNew && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  NEW
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600 font-mono">
                          {user.uid}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {formatDistanceToNow(new Date(user.date_created), {
                            addSuffix: true,
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-600">
                Showing {(page - 1) * limit + 1} to{" "}
                {Math.min(page * limit, totalUsers)} of {totalUsers} users
              </div>

              <div className="flex items-center gap-2">
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
          </>
        ) : (
          <div className="text-center py-12">
            <svg
              className="w-12 h-12 text-gray-400 mx-auto mb-4"
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
            <div className="text-gray-500">
              {search
                ? "No users found matching your search"
                : "No users found"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
