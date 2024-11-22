import { Avatar } from '@repo/preline/Avatar';
import React, { useMemo } from 'react';
import { Channel } from '~/@types/app';
import { getDirectusFileUrl } from '~/utils/files';

interface MemberStatsProps {
  channels?: Array<Channel & { _id: number }>
}

const MemberStats: React.FC<MemberStatsProps> = ({ channels = [] }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-2 xl:gap-4">
      <Card channels={channels} title='LINE' platform='Line' />
      <Card channels={channels} title='Facebook' platform='Facebook' />
      {/* <Card channels={channels} title='Instagram' platform='Instagram' /> */}
      {/* <Card channels={channels} title='Unassigned' role='' /> */}
    </div>
  );
};

export default MemberStats;


const Card: React.FC<{ title: string, platform: string, channels: Array<Channel & { _id: number }> }> = ({ channels, platform, title }) => {

  const filtered = useMemo(() => {
    return channels?.filter(channel => channel.platform === platform)
  }, [channels, platform])


  return (
    <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-4xl font-semibold text-gray-800 dark:text-neutral-200">
          {filtered.filter(item => item._id !== undefined).length} / {filtered?.length || 0}
        </h2>
        <div className="flex items-center -space-x-2">
          {filtered.filter(item => item._id !== undefined).slice(0, 5).map((channel, index) => (
            <Avatar key={index} src={getDirectusFileUrl(channel.logo as string)} firstName={channel.name as string} size={30} />
          ))}
        </div>
      </div>
      <h3 className="text-gray-500 dark:text-neutral-500">{title}</h3>
    </div>
  )
}