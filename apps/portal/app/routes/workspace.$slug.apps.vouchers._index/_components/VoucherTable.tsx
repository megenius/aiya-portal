import React from "react";
import { format } from "date-fns";
import { ExternalLink, Settings, BarChart3 } from "lucide-react";
import { components } from "~/@types/directus";
import { getDirectusFileUrl } from "~/utils/files";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

interface VoucherTableProps {
  pages: PageLiff[];
  onSelectPage: (page: PageLiff) => void;
}

const StatusBadge: React.FC<{ status?: string }> = ({ status }) => {
  const getStatusStyles = (status?: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800";
      case "draft":
        return "bg-yellow-100 text-yellow-800";
      case "archived":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(status)}`}
    >
      {status || "draft"}
    </span>
  );
};

export const VoucherTable: React.FC<VoucherTableProps> = ({
  pages,
  onSelectPage
}) => {
  const formatDate = (dateString?: string | null) => {
    if (!dateString) return "-";
    try {
      return format(new Date(dateString), "MMM dd, yyyy");
    } catch {
      return "-";
    }
  };

  if (pages.length === 0) {
    return (
      <div className="bg-white border border-gray-200 shadow-xs rounded-xl p-8">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 text-gray-400">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-6M4 13h6m4-8v12m0 0l-3-3m3 3l3-3" />
            </svg>
          </div>
          <h3 className="mt-2 text-sm font-medium text-gray-900">No voucher apps</h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating your first LIFF voucher application.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 shadow-xs rounded-xl overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">LIFF Voucher Apps</h3>
        <p className="text-sm text-gray-500">Manage your voucher applications</p>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Application
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                LIFF ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pages.map((page) => (
              <tr key={page.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 mr-4">
                      {page.image ? (
                        <img
                          className="h-10 w-10 rounded-lg object-cover"
                          src={getDirectusFileUrl(page.image)}
                          alt={page.name || "Voucher App"}
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-lg bg-gray-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {page.name || "Untitled"}
                      </div>
                      <div className="text-sm text-gray-500">
                        {page.slug || "-"}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 font-mono">
                    {page.liff_id || "-"}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <StatusBadge status={page.status} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {formatDate(page.date_created)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => onSelectPage(page)}
                      className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200"
                    >
                      <BarChart3 className="h-3 w-3 mr-1" />
                      Dashboard
                    </button>
                    <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                      <Settings className="h-3 w-3 mr-1" />
                      Settings
                    </button>
                    <button className="inline-flex items-center px-3 py-1 border border-gray-300 text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Open
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};