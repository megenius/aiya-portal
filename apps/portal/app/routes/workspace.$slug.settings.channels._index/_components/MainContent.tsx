import { Avatar } from '@repo/preline/Avatar';
import React, { useState } from 'react';
import { Workspace } from '~/@types/app';
import { useWorkspaceChannels } from '~/hooks/workspace/useWorkspaceChannels';
import { getDirectusFileUrl } from '~/utils/files';
import * as _ from 'lodash'
import MemberStats from './MemberStats';
import MemberTableFilter from './MemberTableFilter';
import AddLineModal from './AddLineModal';
import { useWorkspaceChannelLineInsert } from '~/hooks/workspace/useWorkspaceChannelLineInsert';
import { formatDistance } from 'date-fns';
import { useFacebookSDK } from '~/hooks/useFacebookSDK';
import { Loading } from '@repo/preline';
import AddFacebookModal from './AddFacebookModal';
import { useWorkspaceChannelFacebookInsert } from '~/hooks/workspace/useWorkspaceChannelFacebookInsert';
interface MainContentProps {
  workspace: Workspace
}



const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const { data: channels, isLoading } = useWorkspaceChannels({ id: workspace.id });
  const insertChannelLine = useWorkspaceChannelLineInsert();
  const insertChannelFacebook = useWorkspaceChannelFacebookInsert();
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return channels ? channels.items : [];

    const searchText = searchValue.toLowerCase().trim();

    return channels?.items?.filter(item => {
      return item.name?.toLowerCase().includes(searchText) || item.provider_id?.toLowerCase().includes(searchText);
    });
  }, [channels, searchValue]);


  return (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Title */}
        <div className="mb-4 xl:mb-8">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Channels
          </h1>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            Manage channels
          </p>
        </div>
        {/* End Title */}
        <div className="space-y-5">
          <MemberTableFilter onChanged={handleSearchChange} onLoadPages={(pages) => {
            insertChannelFacebook.mutateAsync({
              variables: {
                workspaceId: workspace.id as string,
                items: pages.map((page) => ({
                  provider_id: page.id,
                  provider_access_token: page.accessToken,
                  provider_name: page.name,
                  provider_info: _.omit(page, ['id', 'accessToken', 'name', 'pictureUrl']),
                  name: page.name,
                  logo: page.pictureUrl,
                  team: workspace.id as string,
                  platform: 'Facebook',
                  provider: "Facebook",
                }))
              }
            })
          }}
          />
          {/* End Filter Group */}
          <MemberStats channels={channels?.items} />
          {/* Table Section */}
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
                    {/* <th scope="col">
                    <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Status
                    </div>
                  </th> */}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {filteredItems?.map((item) => (
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
                      {/* <td className="size-px whitespace-nowrap px-4 py-3">
                        <span className="inline-flex items-center gap-x-1.5 py-1.5 px-2.5 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                          <span className="size-1.5 inline-block bg-gray-800 rounded-full dark:bg-neutral-200" />
                          Active
                        </span>
                      </td> */}
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
      <AddLineModal id='add-line-modal' onOk={(values) => {
        insertChannelLine.mutateAsync({
          variables: {
            workspaceId: workspace.id as string,
            data: {
              ...values,
              team: workspace.id as string,
              platform: 'Line',
              provider: "Line"
            }
          }
        })
      }} />
    </>
  )
};

export default MainContent;