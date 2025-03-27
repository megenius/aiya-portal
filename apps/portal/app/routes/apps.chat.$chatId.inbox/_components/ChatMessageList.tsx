import React, { useEffect, useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { useConversations } from "~/hooks/useConversations";

interface ChatMessageListProps {
  channels: Array<{
    name: string;
    providerId: string;
  }>
}

export const ChatMessageList: React.FC<ChatMessageListProps> = ({
  channels
}) => {
  // Track selected provider IDs (initially select all available providers)
  const [selectedProviderIds, setSelectedProviderIds] = useState<string[]>([]);
  // State for tracking which channel/provider is currently active for filtering
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const { data: conversations, isLoading, refetch } = useConversations(selectedProviderIds);
  
  // Update selectedProviderIds when channels data becomes available
  useEffect(() => {
    if (channels?.length > 0) {
      const providerIds = channels.map(channel => channel.providerId);
      setSelectedProviderIds(providerIds);
    }
  }, [channels]);

  // Transform conversations data to match the expected message structure
  const messages = conversations?.data.map(conversation => ({
    id: conversation.id,
    name: conversation.contact.name,
    avatar: conversation.contact.avatar,
    avatarText: conversation.contact.name.charAt(0),
    avatarColor: "indigo-500", // Default color, could be dynamic
    message: conversation.last_message,
    time: calculateTimeAgo(conversation.updated_at),
    isOnline: false, // This could be fetched from a separate online status API
    isRead: true, // This could be determined from conversation data
    notificationCount: 0, // Could be calculated from unread messages count
    isAttachment: conversation.last_message.includes("attachment"), // Simple check for attachments
    providerId: conversation.providerId // Include providerId for filtering
  })) || [];

  // Filter messages based on active filter
  const filteredMessages = activeFilter === "all" 
    ? messages 
    : messages.filter(message => {
        const channel = channels.find(ch => ch.providerId === message.providerId);
        return channel?.name === activeFilter;
      });

  // Handle channel filter change
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  // Show loading state if explicitly loading or if we're waiting for provider IDs
  const isLoadingData = isLoading || (channels?.length > 0 && selectedProviderIds.length === 0);

  return (
    <div className="h-full flex flex-col">
      
      <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div id="hs-pro-tabs-chsn-all" className="h-full" role="tabpanel" aria-labelledby="hs-pro-tabs-chsn-item-all">
          <div aria-label="Tabs" role="tablist" aria-orientation="vertical">
            {isLoadingData ? (
              // Show loading skeleton
              [...Array(3)].map((_, index) => (
                <div key={index} className="flex items-center gap-x-3 p-4 border-b border-gray-200 animate-pulse">
                  <div className="rounded-full bg-gray-300 dark:bg-neutral-700 size-10"></div>
                  <div className="w-full">
                    <div className="h-4 w-24 bg-gray-300 dark:bg-neutral-700 rounded-sm mb-2"></div>
                    <div className="h-3 w-48 bg-gray-300 dark:bg-neutral-700 rounded-sm"></div>
                  </div>
                </div>
              ))
            ) : filteredMessages.length > 0 ? (
              filteredMessages.map(message => (
                <ChatMessage key={message.id} message={message} />
              ))
            ) : (
              <div className="flex justify-center items-center h-32 text-gray-500">
                No conversations found
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reuse the calculation function from ConversationRoute
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
