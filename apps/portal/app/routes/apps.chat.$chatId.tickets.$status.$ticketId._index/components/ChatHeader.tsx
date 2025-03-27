import React from "react";

interface User {
  name: string;
  status: string;
  avatarUrl: string;
}

interface ChatHeaderProps {
  user?: User;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ user }) => {
  return (
    <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <div className="lg:hidden w-20 sm:w-auto flex items-center">
        {/* Sidebar Toggle */}
        <div className="sm:-ms-3 ">
          <button
            type="button"
            className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
            data-hs-overlay="#hs-pro-chat-sidebar"
            aria-controls="hs-pro-chat-sidebar"
            aria-label="Toggle navigation"
          >
            <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg> Chat
          </button>
        </div>
        {/* End Sidebar Toggle */}
      </div>
      {/* Avatar */}
      <div>
        <button
          type="button"
          className="truncate flex items-center gap-x-3.5 focus:outline-hidden"
          data-hs-overlay="#hs-pro-chhds1"
          aria-controls="hs-pro-chhds1"
          aria-label="Toggle navigation"
        >
          <span className="lg:block hidden relative shrink-0">
            <img className="shrink-0 size-8 rounded-full" src={user?.avatarUrl} alt="Avatar" />
            <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-900" />
          </span>
          <span className="grow text-center lg:text-start truncate">
            <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
              {user?.name}
            </span>
            <span className="truncate block text-xs text-blue-600 dark:text-blue-500 leading-4">
              {user?.status}
            </span>
          </span>
        </button>
      </div>
      {/* End Avatar */}
      <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
        {/* Header Buttons */}
        <HeaderButtons user={user} />
      </div>
    </header>
  );
};

const HeaderButtons: React.FC<ChatHeaderProps> = ({ user }) => {
  return (
    <>
      {/* Button */}
      <div className="hs-tooltip [--placement:bottom] hidden sm:inline-block">
        <button type="button" className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhsn">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            <path d="M4 2C2.8 3.7 2 5.7 2 8" />
            <path d="M22 8c0-2.3-.8-4.3-2-6" />
          </svg>
          <span className="sr-only">Snooze</span>
        </button>
        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
          Snooze
        </span>
      </div>
      {/* End Button */}
      {/* Button */}
      <div className="hs-tooltip [--placement:bottom] hidden sm:inline-block">
        <button type="button" className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhtgm">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
            <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
          </svg>
          <span className="sr-only">Tags</span>
        </button>
        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
          Tags
        </span>
      </div>
      {/* End Button */}
      {/* More Dropdown */}
      <div className="hs-dropdown [--strategy:absolute] [--placement:top-right] relative inline-flex">
        <button id="hs-pro-cht1hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={12} cy={12} r={1} />
            <circle cx={12} cy={5} r={1} />
            <circle cx={12} cy={19} r={1} />
          </svg>
        </button>
        {/* More Dropdown Menu */}
        <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht1hmd">
          {/* Dropdown menu content */}
          <div className="p-1 space-y-0.5">
            {/* Menu items */}
            <MoreDropdownItem icon="mail" text="Mark as unread" />
            <MoreDropdownItem icon="mail-read" text="Mark as read" />
            {/* Mobile-only items */}
            <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                <path d="M22 8c0-2.3-.8-4.3-2-6" />
              </svg>
              Snooze
            </button>
            <MoreDropdownItem icon="tag" text="Tags" mobileOnly={true} overlayId="hs-pro-chhtgm" />
            <MoreDropdownItem icon="share" text="Share" overlayId="hs-pro-chhsh" />
            <MoreDropdownItem icon="warning" text="Spam" overlayId="hs-pro-chhsp" />
            <MoreDropdownItem icon="block" text="Block user" overlayId="hs-pro-chhbu" />
            <MoreDropdownItem icon="trash" text="Delete" overlayId="hs-pro-chhdl" />
          </div>
        </div>
      </div>
      {/* End More Dropdown */}
      <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
        {/* Sidebar Toggle */}
        <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds1" aria-controls="hs-pro-chhds1" aria-label="Toggle navigation">
          <svg className="xl:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect width={18} height={18} x={3} y={3} rx={2} />
            <path d="M15 3v18" />
            <path d="m10 15-3-3 3-3" />
          </svg>
          <svg className="hidden xl:block shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect width={18} height={18} x={3} y={3} rx={2} />
            <path d="M15 3v18" />
            <path d="m8 9 3 3-3 3" />
          </svg>
        </button>
        <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds1" aria-controls="hs-pro-chhds1" aria-label="Toggle navigation">
          <img className="shrink-0 size-8 rounded-full" src={user?.avatarUrl} alt="Avatar" />
          <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-800" />
        </button>
        {/* End Sidebar Toggle */}
      </div>
    </>
  );
};

interface MoreDropdownItemProps {
  icon: string;
  text: string;
  mobileOnly?: boolean;
  overlayId?: string;
}

const MoreDropdownItem: React.FC<MoreDropdownItemProps> = ({ icon, text, mobileOnly = false, overlayId }) => {
  // Map of icon names to SVG paths
  const icons: Record<string, React.ReactNode> = {
    mail: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
      </svg>
    ),
    "mail-read": (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <rect width={20} height={16} x={2} y={4} rx={2} />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    tag: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
      </svg>
    ),
    share: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1={12} x2={12} y1={2} y2={15} />
      </svg>
    ),
    warning: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
        <line x1={12} x2={12} y1={8} y2={12} />
        <line x1={12} x2="12.01" y1={16} y2={16} />
      </svg>
    ),
    block: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx={12} cy={12} r={10} />
        <path d="m4.9 4.9 14.2 14.2" />
      </svg>
    ),
    trash: (
      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 6h18" />
        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        <line x1={10} x2={10} y1={11} y2={17} />
        <line x1={14} x2={14} y1={11} y2={17} />
      </svg>
    )
  };

  const buttonClassName = `${mobileOnly ? "sm:hidden" : ""} w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800`;

  const overlayProps = overlayId ? { "data-hs-overlay": `#${overlayId}` } : {};

  return (
    <button type="button" className={buttonClassName} {...overlayProps}>
      {icons[icon]}
      {text}
    </button>
  );
};

export default ChatHeader;
