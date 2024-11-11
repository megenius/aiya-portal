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
import ChatApp from './ChatApp';

interface MainContentProps {
}

const MainContent: React.FC<MainContentProps> = () => {
  const { botId } = useParams();

  return (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        <ChatApp botId={botId as string} />
      </div>

      {/* <ChannelEditor id="channel-modal" channel={selectedChannel} /> */}
    </>
  )
};

export default MainContent;


