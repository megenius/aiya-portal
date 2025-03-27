import { Avatar } from '@repo/preline/Avatar';
import React, { useMemo, useState } from 'react';
import { Bot, BotChannelStatus, WorkspaceChannel } from '~/@types/app';
import { useBotChannels } from '~/hooks/bot/useBotChannels';
import { getDirectusFileUrl } from '~/utils/files';
import * as _ from 'lodash'
import MemberStats from './MemberStats';
import MemberTableFilter from './MemberTableFilter';
import ChannelTable from './ChannelTable';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const { data: channels } = useBotChannels(bot.id as string);
  const [searchValue, setSearchValue] = useState('');

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
          <MemberTableFilter onChanged={handleSearchChange} />
          {/* End Filter Group */}
          <MemberStats channels={filterItems} />

          <ChannelTable bot={bot} channels={filterItems} />
        </div>
      </div>
    </>
  )
};

export default MainContent;