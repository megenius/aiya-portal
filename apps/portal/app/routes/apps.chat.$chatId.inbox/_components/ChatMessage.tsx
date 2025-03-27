import React from "react";

interface MessageProps {
  id: string;
  name: string;
  avatar?: string;
  avatarText?: string;
  avatarColor?: string;
  message: string;
  time: string;
  isOnline?: boolean;
  isRead?: boolean;
  isAttachment?: boolean;
  notificationCount?: number;
}

interface ChatMessageProps {
  message: MessageProps;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const {
    id,
    name,
    avatar,
    avatarText,
    avatarColor = "bg-indigo-500",
    message: messageText,
    time,
    isOnline,
    isRead,
    isAttachment,
    notificationCount
  } = message;

  return (
    <div 
      className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700" 
      id={`hs-pro-tabs-chct-item-${id}`}
      aria-selected="false"
      data-hs-tab={`#hs-pro-tabs-chct-${id}`}
      aria-controls={`hs-pro-tabs-chct-${id}`} 
      role="tab"
    >
      <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
        <div className="shrink-0">
          <div className="relative size-8">
            {avatar ? (
              <img className="shrink-0 size-8 rounded-full" src={avatar} alt={`${name}'s avatar`} />
            ) : (
              <span className={`flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-${avatarColor} text-white rounded-full`}>
                {avatarText}
              </span>
            )}
            {isOnline && (
              <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-800" />
            )}
          </div>
        </div>
        
        <div className="grow truncate">
          <div className="flex justify-between items-center gap-x-1">
            <p className="truncate font-medium text-[13px] text-gray-800 dark:text-neutral-200">{name}</p>
            <div>
              {isRead && (
                <svg className="inline-block shrink-0 size-3.5 text-blue-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 7 17l-5-5" />
                  <path d="m22 10-7.5 7.5L13 16" />
                </svg>
              )}
              <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">{time}</span>
            </div>
          </div>
          
          <div className="truncate me-5">
            {isAttachment ? (
              <div className="flex items-center gap-x-1.5">
                <img className="shrink-0 size-5 rounded-sm object-cover" src="/assets/img/mockups/img10.jpg" alt="Attachment" />
                <div className="grow truncate">
                  <p className="truncate font-semibold text-gray-800 dark:text-neutral-200 text-xs">{messageText}</p>
                </div>
              </div>
            ) : (
              <p className="truncate text-gray-500 dark:text-neutral-500 text-xs">{messageText}</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
