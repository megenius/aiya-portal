import { CurrencyFormatter } from '@repo/ui';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { useAdaccountPerformanceCampaignsTop10 } from '~/hooks/adaccount/useAdaccountPerformanceCampaignsTop10';

const CampaignDisplay = ({ adaccount }) => {
  const { data } = useAdaccountPerformanceCampaignsTop10({ variables: { id: adaccount.id } });

  return (
    <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      {/* Title */}
      <div className="mb-4 xl:mb-8">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Top 10 Campaigns by ROAS
        </h1>
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          {/* Manage campaigns */}
        </p>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
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
                  ROAS
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
                  Impressions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reach
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clicks
                </th>

              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {data?.map((campaign) => (
                <tr key={campaign.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${campaign.status === 'ACTIVE'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <NumericFormat value={campaign.roas} decimalScale={2} suffix='x' displayType='text' />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.purchase}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.spend || 0} currency={adaccount?.metadata?.currency} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.purchase_value || 0} currency={adaccount?.metadata?.currency} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.impressions} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.reach} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={Number(campaign.clicks || "0")} />
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CampaignDisplay;