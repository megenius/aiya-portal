import React, { useState } from 'react';
import {
  Filter, Download, MoreVertical, Info,
  CheckCircle, ChevronDown, ChevronUp, Clock, AlertCircle
} from 'lucide-react';

const CreditStatus = {
  AVAILABLE: 'Available',
  EXPIRING_SOON: 'Expiring Soon',
  LOW_BALANCE: 'Low Balance'
};

const CreditsTable = () => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [expandedRows, setExpandedRows] = useState({});
  const [filterText, setFilterText] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Mock data
  const credits = [
    {
      creditName: "Get Friend - Smart Replies",
      status: CreditStatus.AVAILABLE,
      percentRemaining: 99,
      remainingValue: 2970,
      originalValue: 3000,
      type: "Monthly",
      creditId: "sr7859...",
      scope: "Smart Replies usage only",
      startDate: "2024-12-01",
      endDate: "2025-03-01",
      usageHistory: [
        { date: '2024-12-01', used: 10 },
        { date: '2024-12-02', used: 20 },
      ]
    },
    {
      creditName: "Get Friend - Generative Replies",
      status: CreditStatus.EXPIRING_SOON,
      percentRemaining: 45,
      remainingValue: 540,
      originalValue: 1200,
      type: "Monthly",
      creditId: "gr2458...",
      scope: "Generative Replies usage only",
      startDate: "2024-12-01",
      endDate: "2025-03-01",
      usageHistory: [
        { date: '2024-12-01', used: 330 },
        { date: '2024-12-02', used: 330 },
      ]
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case CreditStatus.AVAILABLE:
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case CreditStatus.EXPIRING_SOON:
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case CreditStatus.LOW_BALANCE:
        return <AlertCircle className="w-4 h-4 text-red-500" />;
      default:
        return null;
    }
  };

  const toggleSort = (key) => {
    setSortConfig({
      key,
      direction: sortConfig.key === key && sortConfig.direction === 'asc' ? 'desc' : 'asc'
    });
  };

  const toggleExpandRow = (creditId) => {
    setExpandedRows(prev => ({
      ...prev,
      [creditId]: !prev[creditId]
    }));
  };

  return (
    <main id="content" className="pb-[40px] sm:pb-[64px] ">
      {/* End Breadcrumb */}
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">

        {/* Account Card */}
        <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Title */}
          <div className="flex justify-between gap-x-3 mb-4 xl:mb-8">
            <div>
              <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Credit
              </h1>
              <p className="text-sm text-gray-500 dark:text-neutral-500">
              </p>
            </div>
          </div>
          {/* End Title */}


          {/* Table */}
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg overflow-hidden dark:border-gray-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Credit name
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Status
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Remaining
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                              Value
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-end"></th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {credits.map((credit) => (
                        <React.Fragment key={credit.creditId}>
                          <tr className="hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={() => toggleExpandRow(credit.creditId)}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                              {credit.creditName}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              <div className="flex items-center gap-x-2">
                                {getStatusIcon(credit.status)}
                                <span>{credit.status}</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              <div className="flex items-center gap-x-3">
                                <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700">
                                  <div
                                    className="flex bg-blue-600"
                                    style={{ width: `${credit.percentRemaining}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                  {credit.percentRemaining}%
                                </span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                              {credit.remainingValue.toLocaleString()} / {credit.originalValue.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                              {expandedRows[credit.creditId] ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </td>
                          </tr>

                          {expandedRows[credit.creditId] && (
                            <tr className="bg-gray-50 dark:bg-gray-800">
                              <td colSpan="5" className="px-6 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Details</h4>
                                    <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                      <dt className="text-gray-500 dark:text-gray-400">Credit ID</dt>
                                      <dd className="text-gray-800 dark:text-gray-200">{credit.creditId}</dd>
                                      <dt className="text-gray-500 dark:text-gray-400">Type</dt>
                                      <dd className="text-gray-800 dark:text-gray-200">{credit.type}</dd>
                                      <dt className="text-gray-500 dark:text-gray-400">Start Date</dt>
                                      <dd className="text-gray-800 dark:text-gray-200">{credit.startDate}</dd>
                                      <dt className="text-gray-500 dark:text-gray-400">End Date</dt>
                                      <dd className="text-gray-800 dark:text-gray-200">{credit.endDate}</dd>
                                    </dl>
                                  </div>
                                  <div>
                                    <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Usage History</h4>
                                    {credit.usageHistory.map((usage, index) => (
                                      <div key={index} className="text-sm text-gray-600 dark:text-gray-400">
                                        {usage.date}: {usage.used} units used
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </td>
                            </tr>
                          )}
                        </React.Fragment>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};

export default CreditsTable;