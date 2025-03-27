import React from "react";

interface Message {
  id: string;
  sender: {
    id: string;
    name: string;
    avatarUrl: string;
  };
  content: string;
  timestamp: string;
  isOwn: boolean;
  quotedMessage?: {
    sender: string;
    content: string;
  };
  attachments?: {
    type: "link";
    title: string;
    description: string;
    url: string;
    imageUrl: string;
  }[];
}

interface ChatContentProps {
  messages: Message[];
}

const ChatContent: React.FC<ChatContentProps> = ({ messages }) => {
  return (
    <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <div className="py-5 px-2 sm:px-5 space-y-5">
        <div className="relative">
          {/* Time */}
          <div className="sticky top-0 inset-x-0 z-8 max-w-lg mx-auto text-center">
            <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">Today</span>
          </div>
          {/* End Time */}
          
          {/* List */}
          <div className="w-full space-y-5">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </div>
          {/* End List */}
        </div>
      </div>
    </div>
  );
};

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const { isOwn, sender, content, timestamp, quotedMessage, attachments } = message;
  
  return (
    <div className={`max-w-md ${isOwn ? "ms-auto text-end flex justify-end" : ""} flex gap-x-2`}>
      {/* Avatar for received messages (left side) */}
      {!isOwn && (
        <div className="shrink-0 mt-auto">
          <img className="shrink-0 size-8 rounded-full" src={sender.avatarUrl} alt={`${sender.name}'s avatar`} />
        </div>
      )}
      
      {/* Chat Bubble */}
      <div>
        <p className={`mb-1.5 ${isOwn ? "pe-2.5" : "ps-2.5"} text-xs text-gray-400 dark:text-neutral-500`}>
          {sender.name}
        </p>
        <div className="space-y-1">
          {/* Message */}
          <div className={`group flex ${isOwn ? "justify-end" : "justify-start"} gap-x-2`} style={{ wordBreak: 'break-word' }}>
            <div className={`${isOwn ? "order-2 text-start bg-blue-100 dark:bg-blue-500/20" : "order-1 bg-white shadow-2xs dark:bg-neutral-800"} inline-block rounded-xl pt-2 pb-1.5 px-2.5`}>
              <div className="text-sm text-gray-800 dark:text-neutral-200">
                {quotedMessage && (
                  <div className={`mb-2 py-1 ps-2.5 pe-1.5 relative cursor-default bg-blue-50 before:bg-blue-600 dark:bg-blue-500/10 dark:before:bg-blue-500 rounded-lg overflow-hidden group-focus:scale-[.98] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full`}>
                    <blockquote>
                      <p className="font-medium text-[13px] text-blue-600 dark:text-blue-500">{quotedMessage.sender}</p>
                      <p className="text-[13px] text-gray-800 dark:text-neutral-200">{quotedMessage.content}</p>
                    </blockquote>
                  </div>
                )}
                
                {/* Link attachments */}
                {attachments?.map((attachment, index) => (
                  attachment.type === "link" && (
                    <a key={index} className="group block mt-3 mb-1 focus:outline-hidden" href={attachment.url} target="_blank">
                      <span className="text-blue-600 underline dark:text-blue-500">
                        {attachment.url}
                      </span>
                      <div className="p-2 ps-2.5 mt-2 relative cursor-default bg-blue-50 rounded-lg overflow-hidden group-focus:scale-[.98] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full before:bg-blue-600 dark:bg-blue-500/10 dark:before:bg-blue-500">
                        <p className="font-medium text-xs text-blue-600 dark:text-blue-500">{attachment.title}</p>
                        <p className="font-semibold text-xs text-gray-800 dark:text-neutral-200">{attachment.description}</p>
                        {attachment.imageUrl && (
                          <img className="mt-1 rounded-md" src={attachment.imageUrl} alt="Preview" />
                        )}
                      </div>
                    </a>
                  )
                ))}
                
                {content}
                <span>
                  <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">{timestamp}</span>
                  {isOwn && (
                    <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 7 17l-5-5" />
                      <path d="m22 10-7.5 7.5L13 16" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            
            {/* Message Actions Dropdown */}
            <MessageActionsDropdown isOwn={isOwn} messageId={message.id} />
          </div>
        </div>
      </div>
      
      {/* Avatar for sent messages (right side) */}
      {isOwn && (
        <div className="shrink-0 mt-auto">
          <img className="shrink-0 size-8 rounded-full" src={sender.avatarUrl} alt={`${sender.name}'s avatar`} />
        </div>
      )}
    </div>
  );
};

interface MessageActionsDropdownProps {
  isOwn: boolean;
  messageId: string;
}

const MessageActionsDropdown: React.FC<MessageActionsDropdownProps> = ({ isOwn, messageId }) => {
  return (
    <div className={`${isOwn ? "order-1" : "order-2"} lg:opacity-0 lg:group-hover:opacity-100`}>
      <div className={`hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] ${isOwn ? "[--placement:bottom-right]" : ""} relative inline-flex`}>
        <button 
          id={`hs-pro-cht1cmd_${messageId}`} 
          type="button" 
          className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" 
          aria-haspopup="menu" 
          aria-expanded="false" 
          aria-label="Dropdown"
        >
          <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={12} cy={12} r={1} />
            <circle cx={12} cy={5} r={1} />
            <circle cx={12} cy={19} r={1} />
          </svg>
        </button>
        
        {/* Dropdown Menu */}
        <div 
          className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" 
          role="menu" 
          aria-orientation="vertical" 
          aria-labelledby={`hs-pro-cht1cmd_${messageId}`}
        >
          <div className="p-1">
            <a className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                <path d="m15 5 4 4" />
              </svg>
              Edit
            </a>
            <a className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                <path d="m10 7-3 3 3 3" />
                <path d="M17 13v-1a2 2 0 0 0-2-2H7" />
              </svg>
              Reply
            </a>
            <a className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 6h18" />
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                <line x1={10} x2={10} y1={11} y2={17} />
                <line x1={14} x2={14} y1={11} y2={17} />
              </svg>
              Delete
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
