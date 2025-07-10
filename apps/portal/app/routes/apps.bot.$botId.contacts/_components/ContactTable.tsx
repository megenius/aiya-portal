// ContactTable.tsx
import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { useBotContacts } from "~/hooks/bot/useBotContacts";
import { useBotMutedUsers } from "~/hooks/bot/useBotMutedUsers";
import { Avatar } from "@repo/preline/Avatar";

interface ContactTableProps {
  botId: string;
  workspaceId: string;
  searchValue: string;
}

const ContactTable: React.FC<ContactTableProps> = ({ botId, workspaceId, searchValue }) => {
  const { data: contacts, isLoading } = useBotContacts({
    id: botId,
    workspaceId: workspaceId,
  });
  
  const { data: mutedBotUsers, isLoading: isMutedBotUsersLoading } =
    useBotMutedUsers({ botId });

  const filteredContacts = contacts?.filter(
    (contact) =>
      contact.profile?.displayName
        ?.toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      contact.social_id.toLowerCase().includes(searchValue.toLowerCase())
  );

  const isValidUUID = (str) => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(str);
  };

  const getUID = (socialId: string) => {
    if (isValidUUID(socialId)) {
      const formattedToken = `U${socialId.split('-')[0]}`;
      return formattedToken;
    }

    return socialId;
  }

  return (
    <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <div className="min-w-full inline-block align-middle">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
            <tr>
              <th scope="col" className="min-w-24">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Avatar
                </div>
              </th>
              <th scope="col" className="min-w-[240px]">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Name
                </div>
              </th>
              <th scope="col" className="min-w-[350px]">
                <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Recent Message
                </div>
              </th>
              <th scope="col" className="min-w-[200px]">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Channel
                </div>
              </th>
              <th scope="col" className="min-w-32">
                <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Received Time
                </div>
              </th>
              <th scope="col" className="min-w-[140px]">
                <div className="py-3 flex justify-center items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Bot
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {isLoading || isMutedBotUsersLoading
              ? [...Array(5)].map((_, index) => (
                <tr key={index} className="animate-pulse">
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="rounded-full bg-gray-300 dark:bg-neutral-700 size-10"></div>
                  </td>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <div className="h-4 w-24 bg-gray-300 dark:bg-neutral-700 rounded-sm"></div>
                  </td>
                  <td className="size-px pe-4 py-3">
                    <div className="h-4 w-48 bg-gray-300 dark:bg-neutral-700 rounded-sm"></div>
                  </td>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <div className="h-4 w-24 bg-gray-300 dark:bg-neutral-700 rounded-sm"></div>
                  </td>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <div className="h-4 w-24 bg-gray-300 dark:bg-neutral-700 rounded-sm"></div>
                  </td>
                  <td className="size-px whitespace-nowrap py-3">
                    <div className="flex justify-center items-center">
                      <div className="h-6 w-10 bg-gray-300 dark:bg-neutral-700 rounded-sm"></div>
                    </div>
                  </td>
                </tr>
              ))
              : filteredContacts?.map((contact) => (
                <tr key={contact.id}>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    {contact.profile ? (
                      <Avatar
                        className="border border-gray-300"
                        src={contact.profile.pictureUrl}
                        firstName={contact.profile.displayName?.charAt(0)}
                      />
                    ) : (
                      <Avatar firstName={"?"} />
                    )}
                  </td>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <span className="text-sm font-medium text-gray-800">
                      {contact?.profile
                        ? contact.profile.displayName
                        : getUID(contact.social_id)}
                    </span>
                  </td>
                  <td className="size-px pe-4 py-3">
                    <span className="text-sm text-gray-600">
                      {contact.sentence}
                    </span>
                  </td>
                  <td className="size-px pe-4 py-3 max-w-[200px] break-words whitespace-normal">
                    <span className="text-sm font-medium text-gray-800">
                      {contact?.channel
                        ? contact.channel.provider_name
                        : contact.provider_id ?? "-"}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <span className="text-sm text-gray-600">
                      {calculateTimeAgo(contact.created)}
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap py-3">
                    <div className="flex justify-center items-center">
                      {contact.channel?.platform !== 'Website' ? (
                        <ToggleSwitch
                          botId={botId}
                          contact={contact}
                          initialChecked={
                            !mutedBotUsers?.some(
                              (user) => user.uid === contact.social_id
                            )
                          }
                        />
                      ) : (
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          -
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactTable;

const getTimeAgo = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (seconds < 31536000) {
    const months = Math.floor(seconds / 2592000);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years = Math.floor(seconds / 31536000);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
};

const calculateTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const timeDifferenceInMilliseconds = Date.now() - date.getTime();

  const timeDifferenceInSeconds = Math.floor(
    timeDifferenceInMilliseconds / 1000
  );

  return getTimeAgo(timeDifferenceInSeconds);
};
