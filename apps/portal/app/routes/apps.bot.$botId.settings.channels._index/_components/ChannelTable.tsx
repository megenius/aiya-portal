import { Avatar } from '@repo/preline/Avatar';
import { formatDistance } from 'date-fns';
import _ from 'lodash';
import React from 'react';
import { Bot, BotChannelStatus, Channel } from '~/@types/app';
import { useBotUpdate } from '~/hooks/bot';
import { useBotChannelDelete } from '~/hooks/bot/useBotChannelDelete';
import { useBotChannelInsert } from '~/hooks/bot/useBotChannelInsert';
import { subscribeApp, unsubscribeApp } from '~/services/facebook';
import { getDirectusFileUrl } from '~/utils/files';

interface ChannelTableProps {
  bot: Bot
  channels: Array<Channel & { _id: number }>
}

const ChannelTable: React.FC<ChannelTableProps> = ({ bot, channels }) => {
  const insertBotChannel = useBotChannelInsert();
  const updateBot = useBotUpdate();

  const handleConnectChannel = async (channel: Channel) => {
    insertBotChannel.mutateAsync({ variables: { bot_id: bot.id as string, channel_id: channel.id as string } })
      .then(async () => {
        if (channel.platform === "Facebook") {
          await subscribeApp(channel.id as string);
        }
      });
  };

  const handleDisconnectChannel = async (channel: Channel & { _id: number }) => {
    updateBot.mutateAsync({
      variables: {
        key: bot.id as string,
        data: {
          // @ts-ignore
          channels: {
            create: [],
            update: [],
            delete: [channel._id]
          }
        }
      }
    }).then(() => {
      if (channel.platform === "Facebook") {
        unsubscribeApp(channel.id as string);
      }
    })
  };

  return (
    <>
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="min-w-full inline-block align-middle">
          {/* Table */}
          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead>
              <tr>
                <th scope="col" className="min-w-[250px] ">
                  <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Name
                  </div>
                </th>
                <th scope="col" className="min-w-48">
                  <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Platform
                  </div>
                </th>
                <th scope="col">
                  <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Provider ID
                  </div>
                </th>
                <th scope="col" className="min-w-36">
                  <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Expires In
                  </div>
                </th>
                <th scope="col">
                  {/* <div className="px-4 py-3 text-start flex items-center justify-end gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                Status
              </div> */}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              {channels?.map((item) => (
                <tr key={item.id} className='cursor-pointer'>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <Avatar src={getDirectusFileUrl(item.logo as string,)} firstName={item.name as string} />
                      <div className="grow">
                        <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      {_.capitalize(item.platform as string)}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      {item.provider_id}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      {item.expired_at ? formatDistance(new Date(), new Date(item.expired_at)) : "Never"}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className='flex justify-end'>
                      {/* Checkbox Button */}
                      <label
                        htmlFor={`hs-pro-daicn1-${item.id}`}
                        className="relative py-2 px-2.5 w-full sm:w-auto block text-center sm:text-start rounded-lg cursor-pointer text-xs font-medium focus:outline-none"
                      >
                        <input
                          type="checkbox"
                          id={`hs-pro-daicn1-${item.id}`}
                          className="peer absolute top-0 start-0 size-full bg-transparent border border-gray-200 text-transparent rounded-lg cursor-pointer focus:ring-white after:block after:size-full after:rounded-md checked:after:bg-gray-200 checked:text-transparent checked:border-gray-200 checked:hover:border-gray-200 checked:focus:border-gray-200 checked:bg-none focus:bg-gray-100 checked:focus:after:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:checked:after:bg-neutral-600 dark:checked:border-neutral-700 dark:focus:ring-0 dark:focus:ring-offset-0 dark:focus:bg-neutral-700 dark:checked:focus:after:bg-neutral-700"
                          defaultChecked={item._id !== undefined}
                          onChange={(e) => {
                            if (e.target.checked) {
                              handleConnectChannel(item);
                            } else {
                              handleDisconnectChannel(item);
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
            </tbody>
          </table>
          {/* End Table */}
        </div>
      </div>
    </>
  );
};

export default ChannelTable;