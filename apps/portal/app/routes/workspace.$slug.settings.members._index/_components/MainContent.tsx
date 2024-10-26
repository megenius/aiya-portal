import { Avatar } from '@repo/preline/Avatar';
import React, { useState } from 'react';
import { Workspace } from '~/@types/app';
import { useWorkspaceMembers } from '~/hooks/workspace/useWorkspaceMembers';
import { getDirectusFileUrl } from '~/utils/files';
import * as _ from 'lodash'
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import MemberStats from './MemberStats';
import MemberTableFilter from './MemberTableFilter';
import AddMember from './AddMember';
import { useWorkspaceInviteMember } from '~/hooks/workspace/useWorkspaceInviteMember';
import { toast } from 'react-toastify';
import { EllipsisVertical } from 'lucide-react';
import { ActionButtons } from './ActionButtons';
import { useWorkspaceRemoveMember } from '~/hooks/workspace/useWorkspaceRemoveMember';
interface MainContentProps {
  workspace: Workspace
}

const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const { data: members, isLoading } = useWorkspaceMembers({ id: workspace.id });
  const [searchValue, setSearchValue] = useState('');
  const inviteMember = useWorkspaceInviteMember();
  const removeMember = useWorkspaceRemoveMember();

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleInviteMember = (emails: string[], role: string = "administrator") => {

    // remove existing members
    const existingMembers = members?.items?.map(member => member.email);
    emails = emails.filter(email => !existingMembers?.includes(email));
    if (emails.length > 0) {
      inviteMember.mutateAsync({
        workspaceId: workspace.id as string,
        emails,
        role
      }).then(() => {
        toast.success("Invitation sent successfully");
      });
    } else {
      toast.error("All the emails are already members of this workspace");
    }
  }

  const filteredMembers = React.useMemo(() => {
    if (!searchValue) return members ? members.items : [];

    const searchText = searchValue.toLowerCase().trim();

    return members?.items?.filter(member => {
      return member.name?.toLowerCase().includes(searchText) || member.email?.toLowerCase().includes(searchText);
    });
  }, [members, searchValue]);


  const handleRemoveMember = (id: string) => {
    removeMember.mutateAsync({
      workspaceId: workspace.id as string,
      memberId: id
    }).then(() => {
      toast.success("Member removed successfully");
    })
  }


  return (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Title */}
        <div className="mb-4 xl:mb-8">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Members
          </h1>
          <p className="text-sm text-gray-500 dark:text-neutral-500">
            Manage members and users of your workspace and set their access level.
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
                      {/* <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Status
                      </div> */}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {filteredMembers?.map((member) => (
                    <tr key={member.id}>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <Avatar src={getDirectusFileUrl(member.avatar)} firstName={member.first_name || member.email} />
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {member.first_name ? `${member.first_name} ${member.last_name || ""}` : member.email}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          {_.capitalize(member.role || "No role")}
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
                        {/* <span className="inline-flex items-center gap-x-1.5 py-1.5 px-2.5 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                          <span className="size-1.5 inline-block bg-gray-800 rounded-full dark:bg-neutral-200" />
                          Active
                        </span> */}
                        <ActionButtons id={member.id} onRemove={(id) => {
                          handleRemoveMember(id)
                        }} />
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

      <AddMember id="add-member-modal" onOk={(values) => {
        handleInviteMember(values.emails)
      }} />
    </>
  )
};

export default MainContent;