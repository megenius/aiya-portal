import React from "react";

export interface TicketItemProps {
  id: string;
  name: string;
  time: string;
  subject: string;
  message: string;
  isActive?: boolean;
  avatarSrc?: string;
  avatarType?: 'image' | 'initial' | 'icon';
  avatarText?: string;
  platformIcon?: React.ReactNode;
  statusIcon?: React.ReactNode;
  statusTooltip?: string;
  isReply?: boolean;
  replyMessage?: string;
  onClick?: () => void;
}

export const TicketItem: React.FC<TicketItemProps> = ({
  id,
  name,
  time,
  subject,
  message,
  isActive = false,
  avatarSrc,
  avatarType = 'image',
  avatarText = '',
  platformIcon,
  statusIcon,
  statusTooltip,
  isReply = false,
  replyMessage,
  onClick
}) => {
  const tabItemId = `hs-pro-tabs-chtcpt-item-${id}`;
  const tabPanelId = `hs-pro-tabs-chtcpt-${id}`;

  return (
    <div 
      className={`hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative overflow-hidden group cursor-pointer bg-white hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 ${isActive ? 'active' : ''}`}
      id={tabItemId}
      aria-selected={isActive ? "true" : "false"}
      data-hs-tab={`#${tabPanelId}`}
      aria-controls={tabPanelId}
      role="tab"
      onClick={onClick}
    >
      <div className="py-4 px-5 border-b border-b-gray-100 dark:border-neutral-700">
        <div className="flex gap-x-2.5">
          <div className="mt-1 shrink-0">
            <div className="relative size-8">
              {renderAvatar()}
              {platformIcon && (
                <span className="absolute top-3.5 start-3.5 flex shrink-0 justify-center items-center size-5 bg-white rounded-full group-hover:bg-gray-100 dark:bg-neutral-800 dark:group-hover:bg-neutral-700">
                  {platformIcon}
                </span>
              )}
            </div>
          </div>
          <div className="grow truncate">
            <div className="flex justify-between gap-x-1">
              <span className="block truncate font-medium text-[13px] text-gray-800 dark:text-neutral-200">{name}</span>
              <span className="block text-[10px] leading-5 text-gray-400 uppercase dark:text-neutral-500">{time}</span>
            </div>
            <div className="mt-1 flex justify-between items-center gap-x-1">
              <div className="w-10/12 truncate">
                <p className="truncate text-xs text-gray-500 dark:text-neutral-500">{subject}</p>
              </div>
              {statusIcon && (
                <div className="hs-tooltip [--placement:left] inline-block">
                  {statusIcon}
                  {statusTooltip && (
                    <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1 px-1.5 w-auto max-w-56 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
                      {statusTooltip}
                    </span>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-x-1.5 mt-1">
              {isReply && (
                <svg className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 17 4 12 9 7" />
                  <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
                </svg>
              )}
              <div className="w-10/12 truncate">
                <p className={`truncate ${!isReply ? 'font-semibold text-gray-800 dark:text-neutral-200' : 'text-gray-500 dark:text-neutral-500'} text-xs`}>
                  {isReply ? replyMessage : message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function renderAvatar() {
    if (avatarType === 'image' && avatarSrc) {
      return <img className="shrink-0 size-7 rounded-full" src={avatarSrc} alt={`${name} avatar`} />;
    } else if (avatarType === 'initial') {
      return (
        <span className="flex shrink-0 justify-center items-center size-7 text-xs font-medium uppercase bg-indigo-500 text-white rounded-full">
          {avatarText}
        </span>
      );
    } else if (avatarType === 'icon') {
      return (
        <span className="flex shrink-0 justify-center items-center size-7 text-xs font-medium uppercase bg-gray-800 text-white dark:bg-neutral-200 dark:text-neutral-800 rounded-full">
          {avatarText}
        </span>
      );
    }
  }
};
