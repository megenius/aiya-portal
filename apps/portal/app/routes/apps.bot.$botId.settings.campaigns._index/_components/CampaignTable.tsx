import _ from 'lodash';
import { CurrencyFormatter } from '@repo/ui';
import React from 'react';
import { NumericFormat } from 'react-number-format';
import { Bot, Campaign, FacebookAdAccount } from '~/@types/app';
import { useBotUpdate } from '~/hooks/bot';
// import { useBotCampaignDelete } from '~/hooks/bot/useBotCampaignDelete';
// import { useBotCampaignInsert } from '~/hooks/bot/useBotCampaignInsert';
// import { useBotCampaignLineSetWebhook } from '~/hooks/bot/useBotCampaignLineSetWebhook';
import { subscribeApp, unsubscribeApp } from '~/services/facebook';
import { getDirectusFileUrl } from '~/utils/files';

interface CampaignTableProps {
  bot: Bot;
  adaccount?: FacebookAdAccount;
  campaigns: Array<Campaign & { _id: number }>
}

const CampaignTable: React.FC<CampaignTableProps> = ({ bot, campaigns, adaccount }) => {
  // const insertBotCampaign = useBotCampaignInsert();
  // const setLineWebhook = useBotCampaignLineSetWebhook();
  const updateBot = useBotUpdate();
  const isLoading = !campaigns;

  const handleConnectCampaign = async (channel: Campaign) => {
    // insertBotCampaign.mutateAsync({ variables: { bot_id: bot.id as string, channel_id: channel.id as string } })
    //   .then(async () => {
    //     if (channel.platform === "Facebook") {
    //       await subscribeApp(channel.id as string);
    //     } else if (channel.platform === "Line") {
    //       // @todo
    //       setLineWebhook.mutateAsync({
    //         variables: {
    //           bot_id: bot.id as string, channel_id: channel.id as string,
    //           endpoint: import.meta.env.VITE_LINE_WEBHOOK_ENDPOINT,
    //         }
    //       });
    //     }
    //   });
  };

  const handleDisconnectCampaign = async (channel: Campaign & { _id: number }) => {
    updateBot.mutateAsync({
      variables: {
        key: bot.id as string,
        data: {
          // @ts-ignore
          campaigns: {
            create: [],
            update: [],
            delete: [channel._id]
          }
        }
      }
    }).then(() => {
      // if (channel.platform === "Facebook") {
      //   unsubscribeApp(channel.id as string);
      // }
    })
  };

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
                  Impressions
                </th>
                {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reach
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Clicks
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Purchased
                </th> */}
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Spend
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ROAS
                </th>
                <th scope="col">
                  {/* <div className="px-4 py-3 text-start flex items-center justify-end gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                Status
              </div> */}
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
                    <CurrencyFormatter amount={campaign.impressions} />
                  </td>
                  {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.reach} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.clicks} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {campaign.purchase}
                  </td> */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.spend || 0} currency={adaccount?.metadata?.currency} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <CurrencyFormatter amount={campaign.purchase_value || 0} currency={adaccount?.metadata?.currency} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <NumericFormat value={campaign.roas} decimalScale={2} suffix='x' displayType='text' />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className='flex justify-end'>
                      {/* Checkbox Button */}
                      <label
                        htmlFor={`hs-pro-daicn1-${campaign?.id}`}
                        className="relative py-2 px-2.5 w-full sm:w-auto block text-center sm:text-start rounded-lg cursor-pointer text-xs font-medium focus:outline-hidden"
                      >
                        <input
                          type="checkbox"
                          id={`hs-pro-daicn1-${campaign?.id}`}
                          className="peer absolute top-0 start-0 size-full bg-transparent border border-gray-200 text-transparent rounded-lg cursor-pointer focus:ring-white after:block after:size-full after:rounded-md checked:after:bg-gray-200 checked:text-transparent checked:border-gray-200 checked:hover:border-gray-200 checked:focus:border-gray-200 checked:bg-none focus:bg-gray-100 checked:focus:after:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:checked:after:bg-neutral-600 dark:checked:border-neutral-700 dark:focus:ring-0 dark:focus:ring-offset-0 dark:focus:bg-neutral-700 dark:checked:focus:after:bg-neutral-700"
                          defaultChecked={campaign?._id !== undefined}
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleConnectCampaign(item);
                            } else {
                              handleDisconnectCampaignl(item);
                            }
                          }}
                        />
                        <span className="relative z-10 peer-checked:hidden text-gray-800 dark:text-white">
                          Connect
                        </span>
                        <span className="relative z-10 justify-center items-center gap-x-1.5 hidden peer-checked:flex peer-checked:text-gray-800 text-gray-200 dark:text-white dark:peer-checked:text-white">
                          <svg
                            className="shrink-0 size-3.5 mt-0.5"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={3}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Connected
                        </span>
                      </label>
                      {/* End Checkbox Button */}
                    </div>

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