import _ from 'lodash';
import { CurrencyFormatter } from '@repo/ui';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { AdDashboard, Bot, Campaign, FacebookAdAccount } from '~/@types/app';
import { useBotUpdate } from '~/hooks/bot';
// import { useBotCampaignDelete } from '~/hooks/bot/useBotCampaignDelete';
// import { useBotCampaignInsert } from '~/hooks/bot/useBotCampaignInsert';
// import { useBotCampaignLineSetWebhook } from '~/hooks/bot/useBotCampaignLineSetWebhook';
import { subscribeApp, unsubscribeApp } from '~/services/facebook';
import { getDirectusFileUrl } from '~/utils/files';

interface CampaignTableProps {
  adaccount?: FacebookAdAccount;
  campaigns: Array<Campaign & AdDashboard>
}

const CampaignTable: React.FC<CampaignTableProps> = ({ campaigns, adaccount }) => {
  // const insertBotCampaign = useBotCampaignInsert();
  // const setLineWebhook = useBotCampaignLineSetWebhook();
  const isLoading = !campaigns;

  return (
    <>
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="min-w-full inline-block align-middle">
          {/* Table */}
          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
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
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROAS
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
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {campaigns?.map((campaign, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${campaign.status === 'ACTIVE'
                        ? 'bg-green-100 text-green-800'
                        : campaign.status === "Paused"
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                        }`}
                    >
                      {campaign.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.spend || 0} currency={adaccount?.metadata?.currency} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.purchase_value || 0} currency={adaccount?.metadata?.currency} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <NumericFormat value={campaign.roas} decimalScale={2} suffix='x' displayType='text' />
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.purchase}
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
          {/* End Table */}
        </div>
      </div>
    </>
  );
};

export default CampaignTable;