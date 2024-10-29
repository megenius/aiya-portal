import { Avatar } from '@repo/preline/Avatar';
import React, { useState } from 'react';
import { Channel, PageInfo, Workspace } from '~/@types/app';
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
import AddButtons from './AddButtons';
import ChannelEditor from './ChannelEditor';
import { Trash } from 'lucide-react';
import { useWorkspaceChannelDelete } from '~/hooks/workspace/useWorkspaceChannelDelete';
interface MainContentProps {
  workspace: Workspace
}



const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const { data: channels, isLoading } = useWorkspaceChannels({ id: workspace?.id });
  const insertChannelLine = useWorkspaceChannelLineInsert();
  const insertChannelFacebook = useWorkspaceChannelFacebookInsert();
  const deleteChannel = useWorkspaceChannelDelete();
  const [searchValue, setSearchValue] = useState('');
  const { login, getPages } = useFacebookSDK({ appId: import.meta.env.VITE_FB_APP_ID });
  const [pages, setPages] = useState<Array<PageInfo & { checked: boolean }>>([]);

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


  const handleFacebookLogin = async () => {
    const configId = import.meta.env.VITE_FB_APP_LOGIN_ID
    // console.log("configId", configId);

    // login({
    //   config_id: configId,
    //   response_type: 'code',
    //   override_default_response_type: true
    // })

    const scopes = [
      'email',
      'pages_show_list',
      'read_page_mailboxes',
      'pages_messaging',
      'pages_messaging_subscriptions',
      'pages_manage_metadata', //review
      'pages_read_user_content',
      'pages_manage_engagement', //review
      'public_profile',
      'instagram_basic',
      'instagram_manage_messages',
      //page insight
      'read_insights',
      'pages_read_engagement',
      // ads api
      'ads_read',
    ];
    // console.log("scopes", scopes);
    login({
      scope: scopes.join(','),
    })
      .then((response) => {
        getPages(response.authResponse?.accessToken).then((pages) => {

          const offcanvas = document.getElementById(`add-facebook-modal`);
          if (offcanvas) {
            window.HSOverlay.open(offcanvas);
          }

          setPages(pages.map(page => ({
            ...page,
            checked: channels?.items?.some(channel => channel.provider_id === page.id) || false
          })))
        })
      })
  }

  const handleDelete = (channel: Channel) => {
    deleteChannel.mutateAsync({
      variables: {
        workspace_id: workspace.id as string,
        channel_id: channel.id as string
      }
    })
  }

  const handleInsertFacebook = (selectedPages: PageInfo[]) => {
    const existingPages = channels?.items?.map(channel => channel.provider_id);
    selectedPages = selectedPages.filter(page => !existingPages?.includes(page.id));

    insertChannelFacebook.mutateAsync({
      variables: {
        workspaceId: workspace.id as string,
        items: selectedPages.map((page) => ({
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
    }).then(() => {
      setPages(pages.map(page => {
        if (selectedPages.some(selectedPage => selectedPage.id === page.id)) {
          return {
            ...page,
            checked: true
          }
        }
        return page;
      }))
    })
  }

  // const onChannelClick = (channel: Channel) => {
  //   setSelectedChannel(channel);

  //   const offcanvas = document.getElementById(`channel-modal`);
  //   console.log("offcanvas", offcanvas);

  //   if (offcanvas) {
  //     window.HSOverlay.open(offcanvas);
  //   }
  // }


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
          <MemberTableFilter
            onChanged={handleSearchChange}
            button={<AddButtons
              onFacebookClick={handleFacebookLogin}
            />}
          // onLoadPages={(pages) => {
          //   insertChannelFacebook.mutateAsync({
          //     variables: {
          //       workspaceId: workspace.id as string,
          //       items: pages.map((page) => ({
          //         provider_id: page.id,
          //         provider_access_token: page.accessToken,
          //         provider_name: page.name,
          //         provider_info: _.omit(page, ['id', 'accessToken', 'name', 'pictureUrl']),
          //         name: page.name,
          //         logo: page.pictureUrl,
          //         team: workspace.id as string,
          //         platform: 'Facebook',
          //         provider: "Facebook",
          //       }))
          //     }
          //   })
          // }}
          />
          {/* End Filter Group */}
          <MemberStats channels={channels?.items} />
          {/* Table Section */}
          <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="min-w-full inline-block align-middle">
              {/* Loader */}
              {insertChannelFacebook.isPending && <Loading />}
              {/* End Loader */}
              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th scope="col" className="min-w-[250px] ">
                      <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Name
                      </div>
                    </th>
                    {/* <th scope="col" className="min-w-48">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Platform
                      </div>
                    </th> */}
                    <th scope="col">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Platform
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
                    <th scope="col" className="max-w-36">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {filteredItems?.map((item) => (
                    <tr key={item.id}>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <Avatar src={getDirectusFileUrl(item.logo as string,)} firstName={item.name as string} />
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {item.name}
                            </span>
                            <p className="text-sm text-gray-400">{item.provider_id}</p>
                          </div>
                        </div>
                      </td>
                      {/* <td className="size-px whitespace-nowrap px-4 py-3">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          {_.capitalize(item.platform as string)}
                        </span>
                      </td> */}
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          {_.capitalize(item.platform as string)}
                        </span>
                        <p className="text-sm text-gray-400" >{item.dataset}</p>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          {item.expired_at ? formatDistance(new Date(), new Date(item.expired_at)) : "Never"}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <Trash className="cursor-pointer w-4 text-red-300" onClick={() => handleDelete(item)} />
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
      <AddFacebookModal id='add-facebook-modal' pages={pages} onOk={(selectedPages) => {
        handleInsertFacebook(selectedPages)
      }} />
      {/* <ChannelEditor id="channel-modal" channel={selectedChannel} /> */}
    </>
  )
};

export default MainContent;


