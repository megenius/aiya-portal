import { Avatar } from '@repo/preline/Avatar';
import React from 'react';
import { Bot } from '~/@types/app';

interface ChatBubbleProps {
  children: React.ReactNode;
  bot: Bot
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ children, bot }) => {

  return (
    <div className="w-full space-y-5">
      <div className="max-w-md flex gap-x-2">
        <div className="shrink-0">
          <Avatar size={36} src={bot.avatar as string} firstName={bot.name as string} />
        </div>
        <div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;