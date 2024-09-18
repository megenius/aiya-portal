import { useParams } from '@remix-run/react';
import { CurrencyFormatter } from '@repo/ui';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { Campaign, FacebookAdAccount } from '~/@types/app';
import { useAdCampaignActivity } from '~/hooks/adaccount/useAdCampaignActivity';

interface RecentCampaignsProps {
  adaccount: FacebookAdAccount
}


const RecentCampaigns: React.FC<RecentCampaignsProps> = ({ adaccount }) => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useAdCampaignActivity({ variables: { id: id as string } });

  return (
    <div className="bg-white shadow rounded-lg p-6 mt-6">
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
                Impressions
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reach
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Clicks
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Purchased
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Spend
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Revenue
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ROAS
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data?.map((campaign, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {campaign.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${campaign.status === 'ACTIVE'
                      ? 'bg-green-100 text-green-800'
                      : campaign.status === 'PAUSED'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-800'
                      }`}
                  >
                    {campaign.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={campaign.impressions} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={campaign.reach} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={campaign.clicks} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {campaign.purchase}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={campaign.spend || 0} currency={adaccount.metadata?.currency} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <CurrencyFormatter amount={campaign.purchase_value || 0} currency={adaccount.metadata?.currency} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <NumericFormat value={campaign.roas} decimalScale={2} suffix='x' displayType='text'/>
                </td>
              </tr>
            ))}

            {isLoading && <tr>
              <td colSpan={5} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                Loading...
              </td>
            </tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentCampaigns;
