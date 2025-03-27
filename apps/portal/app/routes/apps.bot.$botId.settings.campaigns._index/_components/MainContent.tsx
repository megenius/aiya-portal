import { Avatar } from '@repo/preline/Avatar';
import React, { useMemo, useState } from 'react';
import { Bot, BotChannelStatus, WorkspaceChannel } from '~/@types/app';
import { useBotChannels } from '~/hooks/bot/useBotChannels';
import { getDirectusFileUrl } from '~/utils/files';
import * as _ from 'lodash'
import TableFilter from './TableFilter';
import CampaignTable from './CampaignTable';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  // const filterItems = useMemo(() => {
  //   if (!campaigns) return [];

  //   const lowerSearchValue = searchValue.toLowerCase().trim();

  //   return campaigns.filter(campaign =>
  //     !searchValue ||
  //     campaign.name?.toLowerCase().includes(lowerSearchValue)
  //   )
  // }, [bot, campaigns, searchValue]);

  const filterItems = []

  return (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Title */}
        <div className="mb-4 xl:mb-8">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Campaigns
          </h1>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            Manage campaigns
          </p>
        </div>
        {/* End Title */}
        <div className="space-y-5">
          <TableFilter onChanged={handleSearchChange} />
          {/* <CampaignTable bot={bot} campaigns={filterItems} /> */}
        </div>
      </div>
    </>
  )
};

export default MainContent;