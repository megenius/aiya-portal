import React, { useEffect, useState } from "react";
import { ChatHeader } from "./ChatHeader";
import { ChatSearch } from "./ChatSearch";
import { ChatTabs } from "./ChatTabs";
import { ChatMessageList } from "./ChatMessageList";

interface ChatThreadsProps {
  chatHub: {
    id: string;
    name: string;
    channels: Array<{
      name: string;
      providerId: string;
    }>;
  }
}

export const ChatThreads: React.FC<ChatThreadsProps> = ({
  chatHub
}) => {
  const [channels, setChannels] = useState(chatHub?.channels);

  useEffect(() => {
    setChannels(chatHub?.channels);
  }, [chatHub?.channels]);

  return (
    <div className="sm:w-72 size-full truncate bg-white border-x border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <div className="h-full flex flex-col">
        <ChatHeader />
        <ChatSearch />
        <ChatTabs />
        <ChatMessageList channels={channels} />
      </div>
    </div>
  );
}
