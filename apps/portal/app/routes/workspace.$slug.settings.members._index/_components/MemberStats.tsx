import { Avatar } from '@repo/preline/Avatar';
import React, { useMemo } from 'react';
import { WorkspaceMember } from '~/@types/app';
import { getDirectusFileUrl } from '~/utils/files';

interface MemberStatsProps {
  members?: WorkspaceMember[]
}

const MemberStats: React.FC<MemberStatsProps> = ({ members = [] }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 xl:gap-4">
      <Card members={members} title='Admin' role='Administrator' />
      <Card members={members} title='Operator' role='operator' />
      <Card members={members} title='Agent' role='agent' />
      {/* <Card members={members} title='Unassigned' role='' /> */}
    </div>
  );
};

export default MemberStats;


const Card: React.FC<{ title: string, role: string, members: WorkspaceMember[] }> = ({ members, role, title }) => {

  const filtered = useMemo(() => {
    return members?.filter(member => member.role === role)
  }, [members, role])

  return (
    <div className="p-4 flex flex-col bg-white border border-gray-200 rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-4xl font-semibold text-gray-800 dark:text-neutral-200">
          {filtered?.length || 0}
        </h2>
        <div className="flex items-center -space-x-2">
          {filtered?.slice(0, 3).map((member, index) => (
            <Avatar key={index} src={getDirectusFileUrl(member.avatar)} firstName={member.first_name} size={30} />
          ))}
        </div>
      </div>
      <h3 className="text-gray-500 dark:text-neutral-500">{title}</h3>
    </div>
  )
}