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
import Lightbox from 'yet-another-react-lightbox';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const { data: slips, isLoading } = useBotSlips({ botId: bot.id as string });
  const [searchValue, setSearchValue] = useState('');
  const [pages, setPages] = useState<Array<PageInfo & { checked: boolean }>>([]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return slips?.data ? slips.data : [];

    const searchText = searchValue.toLowerCase().trim();

    return slips?.data.filter(item => {
      return item.data.payee.name?.toLowerCase().includes(searchText) || item.data.transaction_details.transaction_id?.toLowerCase().includes(searchText)
    });
  }, [slips, searchValue]);


  return (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Title */}
        <div className="mb-4 xl:mb-8">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Slips
          </h1>
          {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
            Manage slips
          </p> */}
        </div>
        {/* End Title */}
        <div className="space-y-5">
          <MemberTableFilter
            onChanged={handleSearchChange}
            button={<></>}
          />
          {/* End Filter Group */}
          {/* <MemberStats channels={channels?.items} /> */}
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
                        Payer
                      </div>
                    </th>
                    <th scope="col" className="min-w-[250px] ">
                      <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Payee
                      </div>
                    </th>
                    <th scope="col">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Amount
                      </div>
                    </th>
                    <th scope="col">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">

                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {filteredItems?.map((item) => (
                    <tr key={item.event_id}>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          {format(new Date(item.created_at), 'dd/MM/yyyy')}
                        </span>
                        <div>
                          <span className="text-xs text-gray-400 dark:text-neutral-400">
                            {format(new Date(item.created_at), 'HH:mm:ss')}
                          </span>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {item.data.payee.name}
                            </span>
                            <p className="text-sm text-gray-400">{item.data.payee.account_number}</p>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {item.data.payer.name}
                            </span>
                            <p className="text-sm text-gray-400">{item.data.payer.account_number}</p>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <div className="grow">
                          <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                            <NumericFormat displayType='text' value={item.data.transaction_details.amount} prefix={item.data.transaction_details.currency + " "} thousandSeparator="," />
                          </span>
                          <p className="text-sm text-gray-400">{item.data.transaction_details.transaction_id}</p>
                        </div>
                      </td>
                      <td className="size-24 whitespace-nowrap px-4 py-3">
                        <div className="grow">
                          <ImageLightbox src={item.data.image_url} alt="Slip" />
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


const ImageLightbox: React.FC<{ src: string, alt: string }> = ({ src, alt }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <Lightbox
        carousel={{ finite: true }}
        render={{
          buttonPrev: () => null,
          buttonNext: () => null,
        }}
        open={isOpen}
        close={() => setIsOpen(false)}
        slides={[{
          src: src
          , alt: alt
        }]}
      />
      <img src={src} onClick={() => setIsOpen(true)} className='cursor-pointer'/>
    </>
  );
}