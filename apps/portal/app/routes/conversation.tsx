import React from "react";
import { useConversations } from "~/hooks/useConversations";
import { Avatar } from "@repo/preline/Avatar";
import { useSearchParams } from "@remix-run/react";

const ConversationRoute: React.FC = () => {
  const [search] = useSearchParams();
  const providerIds = search.get("provider_ids") || "";
  const { data: conversations, isLoading } = useConversations(providerIds);

  return (
    <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="mb-4 xl:mb-8">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Inbox
        </h1>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-full inline-block align-middle">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
            <thead>
              <tr>
                <th scope="col" className="min-w-24">
                  <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Contact
                  </div>
                </th>
                <th scope="col" className="min-w-[350px]">
                  <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Last Message
                  </div>
                </th>
                <th scope="col" className="min-w-32">
                  <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                    Updated
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              {isLoading
                ? [...Array(5)].map((_, index) => (
                    <tr key={index} className="animate-pulse">
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <div className="rounded-full bg-gray-300 dark:bg-neutral-700 size-10"></div>
                      </td>
                      <td className="size-px pe-4 py-3">
                        <div className="h-4 w-48 bg-gray-300 dark:bg-neutral-700 rounded-sm"></div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="h-4 w-24 bg-gray-300 dark:bg-neutral-700 rounded-sm"></div>
                      </td>
                    </tr>
                  ))
                : conversations?.data.map((conversation) => (
                    <tr key={conversation.id} className="hover:bg-gray-50 cursor-pointer">
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <div className="flex items-center gap-x-3">
                          <Avatar
                            src={conversation.contact.avatar}
                            firstName={conversation.contact.name.charAt(0)}
                          />
                          <span className="text-sm font-medium text-gray-800">
                            {conversation.contact.name}
                          </span>
                        </div>
                      </td>
                      <td className="size-px pe-4 py-3">
                        <span className="text-sm text-gray-600">
                          {conversation.last_message}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <span className="text-sm text-gray-600">
                          {calculateTimeAgo(conversation.updated_at)}
                        </span>
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ConversationRoute;

const calculateTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
  if (seconds < 2592000) return `${Math.floor(seconds / 86400)}d`;
  return date.toLocaleDateString();
};