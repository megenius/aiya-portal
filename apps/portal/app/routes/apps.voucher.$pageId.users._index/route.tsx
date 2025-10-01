import React, { useState, useMemo } from "react";
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
  const { data: usersData, isLoading } = useVoucherUsers(liffId, {
    page,
    limit,
    search,
    sortBy,
    sortOrder,
  });

  // Fetch new users (last 7 days)
  const sevenDaysAgo = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString();
  }, []);

  const { data: newUsersData, isLoading: newUsersLoading } = useVoucherUsers(
    liffId,
    {
      page: 1,
      limit: 10,
      sortBy: "date",
      sortOrder: "desc",
      dateFrom: sevenDaysAgo,
    }
  );

  const users = usersData?.data || [];
  const totalUsers = usersData?.meta?.total_count || 0;
  const newUsers = newUsersData?.data || [];

  const totalPages = Math.ceil(totalUsers / limit);

  // Check if user is new (< 24 hours)
  const isNewUser = (dateCreated: string) => {
    const created = new Date(dateCreated);
    const now = new Date();
    const hoursDiff = (now.getTime() - created.getTime()) / (1000 * 60 * 60);
    return hoursDiff < 24;
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(1);
  };

  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-6">
      {/* Header */}
      <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-600 mt-1">
              Manage and monitor all LIFF app users
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-blue-100">
              <svg
                className="w-6 h-6 text-blue-600"
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
            </div>
            <div className="ml-4">
              <div className="text-sm text-gray-600">Total Users</div>
              <div className="text-2xl font-bold text-gray-900">
                {isLoading ? "-" : totalUsers.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-green-100">
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <div className="text-sm text-gray-600">New Users (7 days)</div>
              <div className="text-2xl font-bold text-gray-900">
                {newUsersLoading ? "-" : newUsers.length}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
          <div className="flex items-center">
            <div className="p-3 rounded-lg bg-purple-100">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <div className="text-sm text-gray-600">New Today</div>
              <div className="text-2xl font-bold text-gray-900">
                {newUsersLoading
                  ? "-"
                  : newUsers.filter((u) => isNewUser(u.date_created)).length}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent New Users Section */}
      {newUsers.length > 0 && (
        <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent New Users (Last 7 Days)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {newUsers.map((user, index) => {
              const isNew = isNewUser(user.date_created);
              return (
                <div
                  key={user.id}
                  className={`relative flex items-center gap-3 p-3 rounded-lg border ${
                    isNew
                      ? "bg-gradient-to-r from-green-50 to-green-100 border-green-200"
                      : "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200"
                  }`}
                >
                  {isNew && (
                    <div className="absolute -right-1 -top-1 rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-white shadow-lg">
                      NEW
                    </div>
                  )}
                  {user.picture_url ? (
                    <img
                      src={user.picture_url}
                      alt={user.display_name}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-white shadow-sm"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm font-bold ring-2 ring-blue-200">
                      {(user.display_name || "U").charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-gray-900 truncate">
                      {user.display_name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {formatDistanceToNow(new Date(user.date_created), {
                        addSuffix: true,
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

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
        {isLoading ? (
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
              {search ? "No users found matching your search" : "No users found"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersPage;
