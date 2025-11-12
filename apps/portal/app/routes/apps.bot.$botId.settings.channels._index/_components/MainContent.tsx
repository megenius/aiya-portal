import { Avatar } from '@repo/preline/Avatar';
import React, { useMemo, useState } from 'react';
import { Bot, BotChannelStatus, WorkspaceChannel, PageInfo } from '~/@types/app';
import { useBotChannels } from '~/hooks/bot/useBotChannels';
import { getDirectusFileUrl } from '~/utils/files';
import * as _ from 'lodash'
import MemberStats from './MemberStats';
import MemberTableFilter from './MemberTableFilter';
import ChannelTable from './ChannelTable';
import AddButtons from './AddButtons';
import AddLineModal from './AddLineModal';
import AddFacebookModal from './AddFacebookModal';
import { useWorkspaceChannelLineInsert } from '~/hooks/workspace/useWorkspaceChannelLineInsert';
import { useWorkspaceChannelFacebookInsert } from '~/hooks/workspace/useWorkspaceChannelFacebookInsert';
import { useBotChannelInsert } from '~/hooks/bot/useBotChannelInsert';
import { useBotChannelDelete } from '~/hooks/bot/useBotChannelDelete';
import { useBotChannelLineSetWebhook } from '~/hooks/bot/useBotChannelLineSetWebhook';
import { useFacebookSDK } from '~/hooks/useFacebookSDK';
import { Loading } from '@repo/preline';
import { useWorkspaceChannels } from '~/hooks/workspace/useWorkspaceChannels';
import { subscribeApp } from '~/services/facebook';
import { toast } from 'react-toastify';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const { data: channels } = useBotChannels(bot.id as string);
  const { data: workspaceChannels } = useWorkspaceChannels({ id: bot.team as string });
  const insertChannelLine = useWorkspaceChannelLineInsert();
  const insertChannelFacebook = useWorkspaceChannelFacebookInsert();
  const insertBotChannel = useBotChannelInsert();
  const deleteBotChannel = useBotChannelDelete();
  const setLineWebhook = useBotChannelLineSetWebhook();
  const [searchValue, setSearchValue] = useState('');
  const { login, getPages } = useFacebookSDK({ appId: import.meta.env.VITE_FB_APP_ID });
  const [pages, setPages] = useState<Array<PageInfo & { checked: boolean }>>([]);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filterItems = useMemo(() => {
    if (!channels) return [];

    const lowerSearchValue = searchValue.toLowerCase().trim();

    return channels.filter(channel =>
      !searchValue ||
      channel.name?.toLowerCase().includes(lowerSearchValue) ||
      channel.provider_id?.toLowerCase().includes(lowerSearchValue)
    )
  }, [bot, channels, searchValue]);

  const handleFacebookLogin = async () => {
    const scopes = [
      'email',
      'pages_show_list',
      'read_page_mailboxes',
      'pages_messaging',
      'pages_messaging_subscriptions',
      'pages_manage_metadata',
      'pages_read_user_content',
      'pages_manage_engagement',
      'page_events',
      'public_profile',
      'instagram_basic',
      'instagram_manage_messages',
      'read_insights',
      'pages_read_engagement',
      'ads_read',
      'ads_management',
    ];

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
            checked: workspaceChannels?.items?.some(channel => channel.provider_id === page.id) || false
          })))
        })
      })
  }

  const handleInsertLine = async (values: { provider_id: string; provider_secret: string }) => {
    try {
      // Step 1: Create channel in workspace
      const channel = await insertChannelLine.mutateAsync({
        variables: {
          workspaceId: bot.team as string,
          data: {
            ...values,
            team: bot.team as string,
            platform: 'Line',
            provider: "Line"
          }
        }
      });

      if (!channel?.id) {
        throw new Error('Failed to create channel');
      }

      try {
        // Step 2: Connect channel to bot
        await insertBotChannel.mutateAsync({
          variables: {
            bot_id: bot.id as string,
            channel_id: channel.id as string
          }
        });

        // Step 3: Configure LINE webhook
        await setLineWebhook.mutateAsync({
          variables: {
            bot_id: bot.id as string,
            channel_id: channel.id as string,
            endpoint: import.meta.env.VITE_LINE_WEBHOOK_ENDPOINT,
          }
        });

        toast.success(`เพิ่มและเชื่อมต่อ ${channel.name} สำเร็จ`);
      } catch (webhookError) {
        // Rollback: Delete bot-channel relationship
        console.error('Webhook configuration failed, rolling back...', webhookError);
        await deleteBotChannel.mutateAsync({
          variables: {
            bot_id: bot.id as string,
            channel_id: channel.id as string
          }
        });
        toast.error('ไม่สามารถตั้งค่า webhook ได้ กรุณาลองใหม่อีกครั้ง');
      }
    } catch (error) {
      console.error('Channel creation failed:', error);
      toast.error('ไม่สามารถเพิ่ม channel ได้ กรุณาลองใหม่อีกครั้ง');
    }
  }

  const handleInsertFacebook = async (selectedPages: PageInfo[]) => {
    const existingPages = workspaceChannels?.items?.map(channel => channel.provider_id);
    const newPages = selectedPages.filter(page => !existingPages?.includes(page.id));

    try {
      // Step 1: Create channels in workspace
      const channels = await insertChannelFacebook.mutateAsync({
        variables: {
          workspaceId: bot.team as string,
          items: newPages.map((page) => ({
            provider_id: page.id,
            provider_access_token: page.accessToken,
            provider_name: page.name,
            provider_info: _.omit(page, ['id', 'accessToken', 'name', 'pictureUrl']),
            name: page.name,
            logo: page.pictureUrl,
            team: bot.team as string,
            platform: 'Facebook',
            provider: "Facebook",
          }))
        }
      });

      if (!channels || channels.length === 0) {
        throw new Error('Failed to create channels');
      }

      // Step 2 & 3: Connect to bot and configure webhooks for each channel
      const results = await Promise.allSettled(
        channels.map(async (channel) => {
          if (!channel?.id) {
            throw new Error(`Invalid channel data`);
          }

          try {
            // Connect channel to bot
            await insertBotChannel.mutateAsync({
              variables: {
                bot_id: bot.id as string,
                channel_id: channel.id as string
              }
            });

            // Subscribe to Facebook page
            await subscribeApp(channel.id as string);

            return { success: true, channel };
          } catch (error) {
            // Rollback: Delete bot-channel relationship
            console.error(`Webhook configuration failed for ${channel.name}, rolling back...`, error);
            await deleteBotChannel.mutateAsync({
              variables: {
                bot_id: bot.id as string,
                channel_id: channel.id as string
              }
            }).catch(err => console.error('Rollback failed:', err));

            return { success: false, channel, error };
          }
        })
      );

      // Count successes and failures
      const successful = results.filter(r => r.status === 'fulfilled' && r.value.success).length;
      const failed = results.length - successful;

      // Show appropriate toast message
      if (failed === 0) {
        toast.success(`เพิ่มและเชื่อมต่อ ${successful} channels สำเร็จ`);
      } else if (successful === 0) {
        toast.error('ไม่สามารถตั้งค่า webhook ได้ กรุณาลองใหม่อีกครั้ง');
      } else {
        toast.warning(`เพิ่มและเชื่อมต่อสำเร็จ ${successful} channels, ล้มเหลว ${failed} channels`);
      }

      // Update pages checked state
      setPages(pages.map(page => {
        if (selectedPages.some(selectedPage => selectedPage.id === page.id)) {
          return {
            ...page,
            checked: true
          }
        }
        return page;
      }));
    } catch (error) {
      console.error('Channel creation failed:', error);
      toast.error('ไม่สามารถเพิ่ม channels ได้ กรุณาลองใหม่อีกครั้ง');
    }
  }

  return (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
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
            button={
              <AddButtons onFacebookClick={handleFacebookLogin} />
            }
          />
          {/* End Filter Group */}
          {/* Loader */}
          {(insertChannelLine.isPending || insertChannelFacebook.isPending || insertBotChannel.isPending || setLineWebhook.isPending) && <Loading />}
          {/* End Loader */}
          <MemberStats channels={filterItems} />

          <ChannelTable bot={bot} channels={filterItems} />
        </div>
      </div>
      <AddLineModal id='add-line-modal' onOk={handleInsertLine} />
      <AddFacebookModal id='add-facebook-modal' pages={pages} onOk={handleInsertFacebook} />
    </>
  )
};

export default MainContent;