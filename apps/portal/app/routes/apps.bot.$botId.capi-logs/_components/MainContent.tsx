import { Avatar } from '@repo/preline/Avatar';
import React, { useState } from 'react';
import { Bot, Channel, PageInfo, Workspace } from '~/@types/app';
import { getDirectusFileUrl } from '~/utils/files';
import * as _ from 'lodash'
import MemberTableFilter from './MemberTableFilter';
import { format, formatDistance } from 'date-fns';
import { useFacebookSDK } from '~/hooks/useFacebookSDK';
import { Loading } from '@repo/preline';
import { useBotSlips } from '~/hooks/bot/useBotSlips';
import { NumericFormat } from 'react-number-format';
import { useParams } from '@remix-run/react';
import { useBotCapiLogs } from '~/hooks/bot/useBotCapiLogs';

interface MainContentProps {
}

const MainContent: React.FC<MainContentProps> = () => {
  const { botId } = useParams();
  const { data: logs, isLoading } = useBotCapiLogs({ botId });
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return logs?.data ? logs.data : [];

    const searchText = searchValue.toLowerCase().trim();

    return logs?.data.filter(item => {
      return item.user_data.page_scoped_user_id?.toLowerCase().includes(searchText)
    });
  }, [logs, searchValue]);


  return (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Title */}
        <div className="mb-4 xl:mb-8">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            CAPI Logs
          </h1>
          {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
            Manage slips
          </p> */}
        </div>
        {/* End Title */}
        <div className="space-y-5">
          {/* Table Section */}
          <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="min-w-full inline-block align-middle">
              {/* Loader */}
              {isLoading && <Loading />}
              {/* End Loader */}
              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th scope="col" className="min-w-36">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Date
                      </div>
                    </th>
                    <th scope="col" className="min-w-[250px] ">
                      <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Page/Dataset
                      </div>
                    </th>
                    <th scope="col" className="min-w-[250px] ">
                      <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Event/User
                      </div>
                    </th>
                    <th scope="col" className="min-w-[250px] ">
                      <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Source
                      </div>
                    </th>
                    <th scope="col">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Amount
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {filteredItems?.map((item) => (
                    <tr key={item.fbtrace_id}>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              {format(new Date(item.created_at), 'dd/MM/yyyy')}
                            </span>
                            <p className="text-sm text-gray-400">
                              {format(new Date(item.created_at), 'HH:mm:ss')}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {item.user_data.page_id}
                            </span>
                            <p className="text-sm text-gray-400">{item.dataset}</p>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {item.event_name}
                            </span>
                            <p className="text-sm text-gray-400">{item.user_data.page_scoped_user_id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {item.action_source}
                            </span>
                            <p className="text-sm text-gray-400">{item.messaging_channel}</p>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              <NumericFormat displayType='text' value={item.custom_data.value} thousandSeparator="," />
                            </span>
                            <p className="text-sm text-gray-400">{item.custom_data.currency}</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* End Table */}
            </div>
          </div>
          {/* End Table Section */}
        </div>
      </div>

      {/* <ChannelEditor id="channel-modal" channel={selectedChannel} /> */}
    </>
  )
};

export default MainContent;


