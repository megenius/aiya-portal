import { Avatar } from '@repo/preline/Avatar';
import React, { useState } from 'react';
import { Bot } from '~/@types/app';
import { useBotMembers } from '~/hooks/bot/useBotMembers';
import { getDirectusFileUrl } from '~/utils/files';
import * as _ from 'lodash'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import MemberStats from './MemberStats';
import MemberTableFilter from './MemberTableFilter';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const { data: members, isLoading } = useBotMembers({ id: bot.id });
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredMembers = React.useMemo(() => {
    if (!searchValue) return members ? members.items : [];

    const searchText = searchValue.toLowerCase().trim();

    return members?.items?.filter(member => {
      return member.name?.toLowerCase().includes(searchText) || member.email?.toLowerCase().includes(searchText);
    });
  }, [members, searchValue]);
  
  return (
    <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      {/* Title */}
      <div className="mb-4 xl:mb-8">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Members
        </h1>
        <p className="text-sm text-gray-500 dark:text-neutral-500">
          Manage members and users of your bot and set their access level.
        </p>
      </div>
      {/* End Title */}
      <div className="space-y-5">
        <MemberTableFilter onChanged={handleSearchChange} />
        {/* End Filter Group */}
        <MemberStats members={members?.items} />
        {/* Table Section */}
        <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div className="min-w-full inline-block align-middle">
            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th scope="col" className="min-w-[250px] ">
                    <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Member
                    </div>
                  </th>
                  <th scope="col" className="min-w-48">
                    <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Role
                    </div>
                  </th>
                  <th scope="col">
                    <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Email
                    </div>
                  </th>
                  <th scope="col" className="min-w-36">
                    <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Last activity
                    </div>
                  </th>
                  <th scope="col">
                    <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                      Status
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                {filteredMembers?.map((member) => (
                  <tr>
                    <td className="size-px whitespace-nowrap pe-4 py-3">
                      <div className="w-full flex items-center gap-x-3">
                        <Avatar src={getDirectusFileUrl(member.avatar)} />
                        <div className="grow">
                          <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                            {member.first_name} {member.last_name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap px-4 py-3">
                      <span className="text-sm text-gray-600 dark:text-neutral-400">
                        {_.capitalize(member.role)}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap px-4 py-3">
                      <span className="text-sm text-gray-600 dark:text-neutral-400">
                        {member.email}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap px-4 py-3">
                      <span className="text-sm text-gray-600 dark:text-neutral-400">
                        {member.last_access ? formatDistance(new Date(), new Date(member.last_access)) : "Never"}
                      </span>
                    </td>
                    <td className="size-px whitespace-nowrap px-4 py-3">
                      <span className="inline-flex items-center gap-x-1.5 py-1.5 px-2.5 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                        <span className="size-1.5 inline-block bg-gray-800 rounded-full dark:bg-neutral-200" />
                        Active
                      </span>
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
  )
};

export default MainContent;