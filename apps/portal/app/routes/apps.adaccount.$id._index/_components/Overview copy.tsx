import { useParams } from '@remix-run/react';
import { CurrencyFormatter } from '@repo/ui';
import React from 'react';
import { FacebookAdAccount } from '~/@types/app';
import { useAdDashboard } from '~/hooks/adaccount/useAdDashboard';

// interface OverviewProps {
//   adaccount: FacebookAdAccount
// }

// const Overview: React.FC<OverviewProps> = ({ adaccount }) => {
//   const { id } = useParams();
//   const { data, isLoading } = useAdDashboard({
//     variables: {
//       id: id as string,
//     },
//   });

//   // if (isLoading) {
//   //   return <div>Loading...</div>;
//   // }

//   return (
//     <>
//       {/* Stats Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 border border-gray-200 shadow-xs rounded-xl overflow-hidden">
//         <div className="flex flex-col p-5 bg-white">
//           <h1 className='text-xl font-semibold'>
//             Purchase
//           </h1>
//           <div className="mt-3">
//             <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
//               {data?.purchase}
//             </h2>
//             <div className="hidden mt-2 flex flex-wrap items-center gap-y-1 gap-x-2">
//               <p className="text-sm text-gray-500">Sales last 30 days</p>
//               <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md">
//                 <svg
//                   className="shrink-0 w-3 h-3"
//                   xmlns="http://www.w3.org/2000/svg"
//                   width={24}
//                   height={24}
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
//                   <polyline points="16 17 22 17 22 11" />
//                 </svg>
//                 3.4%
//               </span>
//             </div>
//           </div>
//         </div>
//         {/* Card */}
//         <div className="flex flex-col p-5 bg-white sm:border-s-0 md:border-s border-t sm:border-t md:border-t-0 border-neutral-200">
//         <h1 className='text-xl font-semibold'>
//           Revenue
//         </h1>
//         <div className="mt-3">
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
//             <CurrencyFormatter amount={0} currency={adaccount?.metadata?.currency} />
//           </h2>
//           <div className="hidden mt-2 flex flex-wrap items-center gap-y-1 gap-x-2">
//             <p className="text-sm text-gray-500">Sales last 30 days</p>
//             <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md">
//               <svg
//                 className="shrink-0 w-3 h-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={24}
//                 height={24}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//                 <polyline points="16 7 22 7 22 13" />
//               </svg>
//               37.3%
//             </span>
//           </div>
//         </div>
//       </div>
//       {/* End Card */}
//       {/* Card */}
//       <div className="flex flex-col p-5 bg-white border-s border-t sm:border-t-0 border-neutral-200">
//         <h1 className='text-xl font-semibold'>
//           Spent
//         </h1>
//         <div className="mt-3">
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
//             <CurrencyFormatter amount={data?.spend} currency={adaccount?.metadata?.currency} />
//           </h2>
//           <div className="hidden mt-2 flex flex-wrap items-center gap-y-1 gap-x-2">
//             <p className="text-sm text-gray-500">Sales last 30 days</p>
//             <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md">
//               <svg
//                 className="shrink-0 w-3 h-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={24}
//                 height={24}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
//                 <polyline points="16 7 22 7 22 13" />
//               </svg>
//               12.9%
//             </span>
//           </div>
//         </div>
//       </div>
//       {/* End Card */}
//       {/* Card */}
//       <div className="flex flex-col p-5 bg-white sm:border-s-0 md:border-s border-t sm:border-t md:border-t-0 border-neutral-200">
//         <h1 className='text-xl font-semibold'>
//           ROAS
//         </h1>
//         <div className="mt-3">
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
//             {data?.roas}
//           </h2>
//           <div className="hidden mt-2 flex flex-wrap items-center gap-y-1 gap-x-2">
//             <p className="text-sm text-gray-500">Sales last 30 days</p>
//             <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs bg-gray-100 text-gray-800 rounded-md">
//               <svg
//                 className="shrink-0 w-3 h-3"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width={24}
//                 height={24}
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               >
//                 <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
//                 <polyline points="16 17 22 17 22 11" />
//               </svg>
//               3.4%
//             </span>
//           </div>
//         </div>
//       </div>
//       {/* End Card */}
//     </div >
//       {/* End Stats Grid */ }
//     </>
//   );
// };

// export default Overview;

// src/components/Overview.tsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import {
  KPI,
  PerformanceOverTimeData,
  SpendVsBudgetData,
  Campaign,
  TopAd,
} from '../types';

// Mock Data
const kpiData: KPI[] = [
  { label: 'Total Spend', value: '$10,000' },
  { label: 'Impressions', value: '1,200,000' },
  { label: 'Clicks', value: '24,000' },
  { label: 'Conversions', value: '1,200' },
  { label: 'CTR', value: '2%', trend: 'up' },
  { label: 'CPC', value: '$0.42', trend: 'down' },
];

const performanceOverTime: PerformanceOverTimeData[] = [
  { date: 'Sep 10', impressions: 100000, clicks: 2000, conversions: 100 },
  { date: 'Sep 11', impressions: 110000, clicks: 2200, conversions: 120 },
  { date: 'Sep 12', impressions: 105000, clicks: 2100, conversions: 110 },
  { date: 'Sep 13', impressions: 115000, clicks: 2300, conversions: 130 },
  { date: 'Sep 14', impressions: 120000, clicks: 2400, conversions: 140 },
  { date: 'Sep 15', impressions: 125000, clicks: 2500, conversions: 150 },
];

const spendVsBudget: SpendVsBudgetData[] = [
  { campaign: 'Campaign A', spend: 5000, budget: 6000 },
  { campaign: 'Campaign B', spend: 3000, budget: 4000 },
  { campaign: 'Campaign C', spend: 2000, budget: 2500 },
  { campaign: 'Campaign D', spend: 1000, budget: 1500 },
];

const recentCampaigns: Campaign[] = [
  {
    name: 'Campaign A',
    status: 'Active',
    spend: '$5,000',
    impressions: '500,000',
    clicks: '10,000',
  },
  {
    name: 'Campaign B',
    status: 'Paused',
    spend: '$3,000',
    impressions: '300,000',
    clicks: '6,000',
  },
  {
    name: 'Campaign C',
    status: 'Completed',
    spend: '$2,000',
    impressions: '200,000',
    clicks: '4,000',
  },
];

const topAds: TopAd[] = [
  { name: 'Ad 1', performance: 'Excellent', conversions: 300 },
  { name: 'Ad 2', performance: 'Good', conversions: 250 },
  { name: 'Ad 3', performance: 'Average', conversions: 150 },
];

// KPISection Component
const KPISection: React.FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {kpiData.map((kpi, index) => (
      <div
        key={index}
        className="bg-white shadow-sm rounded-lg p-6 flex items-center"
      >
        <div className="flex-1">
          <p className="text-sm text-gray-500">{kpi.label}</p>
          <p className="text-2xl font-semibold">{kpi.value}</p>
        </div>
        {kpi.trend && (
          <div>
            {kpi.trend === 'up' ? (
              <svg
                className="w-6 h-6 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h3V6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-red-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 10a1 1 0 011-1h3V6a1 1 0 112 0v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>
        )}
      </div>
    ))}
  </div>
);

// PerformanceCharts Component
const PerformanceCharts: React.FC = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
    {/* Performance Over Time */}
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Performance Over Time</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={performanceOverTime}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="impressions" stroke="#4F46E5" />
          <Line type="monotone" dataKey="clicks" stroke="#10B981" />
          <Line type="monotone" dataKey="conversions" stroke="#F59E0B" />
        </LineChart>
      </ResponsiveContainer>
    </div>

    {/* Spend vs. Budget */}
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Spend vs. Budget</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={spendVsBudget}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis type="category" dataKey="campaign" />
          <Tooltip />
          <Legend />
          <Bar dataKey="spend" fill="#4F46E5" name="Spend" />
          <Bar dataKey="budget" fill="#10B981" name="Budget" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

// RecentCampaigns Component
const RecentCampaigns: React.FC = () => (
  <div className="bg-white shadow-sm rounded-lg p-6 mt-6">
    <h2 className="text-xl font-semibold mb-4">Recent Campaigns Activity</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Campaign Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Spend
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Impressions
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Clicks
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {recentCampaigns.map((campaign, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {campaign.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${campaign.status === 'Active'
                      ? 'bg-green-100 text-green-800'
                      : campaign.status === 'Paused'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                >
                  {campaign.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {campaign.spend}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {campaign.impressions}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {campaign.clicks}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// TopAds Component
const TopAds: React.FC = () => (
  <div className="bg-white shadow-sm rounded-lg p-6 mt-6">
    <h2 className="text-xl font-semibold mb-4">Top Performing Ads</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ad Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Performance
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Conversions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {topAds.map((ad, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {ad.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${ad.performance === 'Excellent'
                      ? 'bg-green-100 text-green-800'
                      : ad.performance === 'Good'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                >
                  {ad.performance}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {ad.conversions}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// QuickActions Component
const QuickActions: React.FC = () => (
  <div className="flex justify-end space-x-4 mt-6">
    <button className="px-4 py-2 bg-blue-600 text-white rounded-sm hover:bg-blue-700">
      Create New Campaign
    </button>
    <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-sm hover:bg-gray-300">
      Export Report
    </button>
  </div>
);

// Overview Component
const Overview: React.FC = () => {
  return (
    <div className="pmin-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard Overview</h1>
      <KPISection />
      <PerformanceCharts />
      {/* <QuickActions /> */}
      <RecentCampaigns />
      <TopAds />
    </div>
  );
};

export default Overview;
