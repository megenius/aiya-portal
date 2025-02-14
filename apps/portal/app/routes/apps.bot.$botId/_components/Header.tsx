import { Link, useParams } from '@remix-run/react';
import { Avatar } from '@repo/preline/Avatar';
import { LogoAiya } from '@repo/ui/LogoAiya';
import { cn, isRouteActive } from '@repo/ui/utils';
import React from 'react';
import { Bot } from '~/@types/app';
import { useBot, useBots } from '~/hooks/bot';
import { useMe } from '~/hooks/useMe';
import { useWorkspace } from '~/hooks/workspace';
import { getDirectusFileUrl } from '~/utils/files';

interface HeaderProps {
  bot: Bot;
}

interface NavItem {
  label: string;
  to: string;
}

const Header: React.FC<HeaderProps> = ({ bot }) => {
  const botId = bot.id
  const { data: user } = useMe()
  const { data: workspace } = useWorkspace({ id: bot?.team });
  const { data: bots } = useBots({ variables: { workspaceId: bot?.team as string } })
  let navItems: NavItem[] = [
    { label: 'Dashboard', to: `/apps/bot/${botId}/dashboard` },
    { label: 'Messages', to: `/apps/bot/${botId}/messages` },
    { label: 'Knowledges', to: `/apps/bot/${botId}/knowledges` },
    { label: 'Logs', to: `/apps/bot/${botId}/logs` },
    // { label: 'System Prompt', to: `/apps/bot/${botId}/system-prompt` },
    { label: 'Settings', to: `/apps/bot/${botId}/settings` },
  ];

  if (bot.type === 'chatbot') {
    navItems = [
      { label: 'Dashboard', to: `/apps/bot/${botId}/dashboard` },
      { label: 'Contacts', to: `/apps/bot/${botId}/contacts` },
      { label: 'Messages', to: `/apps/bot/${botId}/messages` },
      { label: 'Knowledges', to: `/apps/bot/${botId}/knowledges` },
      // { label: 'Playground', to: `/apps/bot/${botId}/chat` },
      { label: 'Logs', to: `/apps/bot/${botId}/logs` },
      // { label: 'System Prompt', to: `/apps/bot/${botId}/system-prompt` },
      { label: 'Settings', to: `/apps/bot/${botId}/settings` },
    ];
  } else if (bot.type === 'orderbot') {
    navItems = [
      { label: 'Orders', to: `/apps/bot/${botId}/orders` },
      { label: 'Slips', to: `/apps/bot/${botId}/slips` },
      { label: 'CAPI Logs', to: `/apps/bot/${botId}/capi-logs` },
      { label: 'Templates', to: `/apps/bot/${botId}/templates` },
      { label: 'Settings', to: `/apps/bot/${botId}/settings` },
    ];
  }

  return (
    <header className="flex flex-col">
      <div className="bg-gray-800 border-b border-gray-700 dark:bg-black dark:border-neutral-800">
        <div className="max-w-[85rem] flex justify-between lg:grid lg:grid-cols-2 basis-full items-center w-full mx-auto py-2.5 px-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-x-3">
            <Link to={`/workspace/${workspace?.slug}/apps/bots`}>
              <LogoAiya colors={{
                path1: "white",
                path2: "white",
                path3: "white",
                path4: "white",
                path5: "white",
                path6: "white",
              }} />
            </Link>
            <div className="md:hidden">
              {/* Collapse Button Trigger */}
              <button
                type="button"
                className="hs-collapse-toggle inline-flex justify-center items-center w-7 h-[38px] text-start border border-white/20 text-white rounded-lg shadow-sm align-middle hover:bg-white/10 disabled:opacity-50 focus:outline-none focus:bg-white/10"
                id="hs-pro-dmh-collapse"
                aria-expanded="false"
                aria-controls="hs-pro-dmh"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-pro-dmh"
              >
                <svg
                  className="shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx={12} cy={12} r={1} />
                  <circle cx={12} cy={5} r={1} />
                  <circle cx={12} cy={19} r={1} />
                </svg>
              </button>
              {/* End Collapse Button Trigger */}
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-2">
            <div className="flex items-center">
              <div className="hidden">
                {/* Search Button Icon */}
                <button
                  type="button"
                  className="inline-flex shrink-0 justify-center items-center gap-x-2 size-[38px] rounded-full text-white hover:bg-white/10 disabled:opacity-50 focus:outline-none focus:bg-white/10"
                  data-hs-overlay="#hs-pro-dnsm"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={11} cy={11} r={8} />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </button>
                {/* End Search Button Icon */}
              </div>
              {/* Help Dropdown */}
              <div className="hidden hs-dropdown [--placement:bottom-right] relative inline-flex">
                {/* Help Button Icon */}
                <button
                  id="hs-pro-dnhd"
                  type="button"
                  className="  inline-flex shrink-0 justify-center items-center gap-x-2 size-[38px] rounded-full text-white hover:bg-white/10 disabled:opacity-50 focus:outline-none focus:bg-white/10"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                </button>
                {/* End Help Button Icon */}
                {/* Help Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-dnhd"
                >
                  <div className="p-1">
                    <a
                      className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                        <path d="M12 17h.01" />
                      </svg>
                      Help Centre
                    </a>
                    <a
                      className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Community
                    </a>
                    <a
                      className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                      </svg>
                      What’s New
                    </a>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-800" />
                    <a
                      className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx={12} cy={12} r={10} />
                        <path d="M12 16v-4" />
                        <path d="M12 8h.01" />
                      </svg>
                      Privacy and Legal
                    </a>
                    <a
                      className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                      Documentation
                    </a>
                    <a
                      className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                      Hire an Expert
                      <div className="ms-auto">
                        <span className="inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                          New
                        </span>
                      </div>
                    </a>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-800" />
                    <a
                      className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      href="#"
                    >
                      <svg
                        className="shrink-0 mt-0.5 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        <line x1={9} x2={15} y1={10} y2={10} />
                        <line x1={12} x2={12} y1={7} y2={13} />
                      </svg>
                      Submit Feedback
                    </a>
                    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] relative">
                      <button
                        id="hs-pro-dropdown-help-and-support"
                        type="button"
                        className="hs-dropdown-toggle w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect width={20} height={16} x={2} y={4} rx={2} />
                          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                        Contact Us
                        <svg
                          className="rotate-90 md:rotate-0 ms-auto size-3"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                      <div
                        className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 top-0 end-full md:!me-3 md:mt-1 md:p-1 bg-white md:shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] md:rounded-lg before:absolute before:-end-5 before:top-0 before:h-full before:w-5 dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="hs-pro-dropdown-help-and-support"
                      >
                        <a
                          className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                          href="#"
                        >
                          <svg
                            className="shrink-0 mt-0.5 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
                          </svg>
                          Contact Support
                        </a>
                        <a
                          className="flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                          href="#"
                        >
                          <svg
                            className="shrink-0 mt-0.5 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
                          </svg>
                          Contact Sales
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Help Dropdown */}
              </div>
              {/* End Help Dropdown */}
              {/* Notifications Button Icon */}
              <div className="hidden hs-dropdown [--auto-close:inside] relative inline-flex">
                <button
                  id="hs-pro-dnnd"
                  type="button"
                  className="relative inline-flex shrink-0 justify-center items-center gap-x-2 size-[38px] rounded-full text-white hover:bg-white/10 disabled:opacity-50 focus:outline-none focus:bg-white/10"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                  <span className="flex absolute top-0 end-0 z-10 -mt-1.5 -me-1.5">
                    <span className="animate-ping absolute inline-flex size-full rounded-full bg-red-400 opacity-75 dark:bg-red-600" />
                    <span className="relative min-w-[18px] min-h-[18px] inline-flex justify-center items-center text-[10px] bg-red-500 text-white rounded-full px-1">
                      2
                    </span>
                  </span>
                </button>
                {/* End Notifications Button Icon */}
                {/* Notifications Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full sm:w-96 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white border-t border-gray-200 sm:border-t-0 sm:rounded-lg shadow-md sm:shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900 dark:border-neutral-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-dnnd"
                >
                  {/* Header */}
                  <div className="px-5 pt-3 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
                    {/* Nav Tab */}
                    <nav
                      className="flex  gap-x-1"
                      aria-label="Tabs"
                      role="tablist"
                      aria-orientation="horizontal"
                    >
                      <button
                        type="button"
                        className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 text-nowrap  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active "
                        id="hs-pro-tabs-dnn-item-all"
                        aria-selected="true"
                        data-hs-tab="#hs-pro-tabs-dnn-all"
                        aria-controls="hs-pro-tabs-dnn-all"
                        role="tab"
                      >
                        All
                      </button>
                      <button
                        type="button"
                        className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 text-nowrap  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                        id="hs-pro-tabs-dnn-item-archived"
                        aria-selected="false"
                        data-hs-tab="#hs-pro-tabs-dnn-archived"
                        aria-controls="hs-pro-tabs-dnn-archived"
                        role="tab"
                      >
                        Archived
                      </button>
                    </nav>
                    {/* End Nav Tab */}
                    {/* Notifications Button Icon */}
                    <div className="hs-tooltip relative inline-block mb-3">
                      <a
                        className="hs-tooltip-toggle size-7 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="../../pro/dashboard/account-profile.html"
                      >
                        <svg
                          className="shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                      </a>
                      <span
                        className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                        role="tooltip"
                      >
                        Preferences
                      </span>
                    </div>
                    {/* End Notifications Button Icon */}
                  </div>
                  {/* End Header */}
                  {/* Tab Content */}
                  <div
                    id="hs-pro-tabs-dnn-all"
                    role="tabpanel"
                    aria-labelledby="hs-pro-tabs-dnn-item-all"
                  >
                    <div className="h-[480px] overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                      <ul className="divide-y divide-gray-200 dark:divide-neutral-800">
                        {/* List Item */}
                        <li className="relative group w-full flex gap-x-5 text-start bg-gray-100 dark:bg-neutral-800 p-5">
                          <div className="relative shrink-0">
                            <img
                              className="shrink-0 size-[38px] rounded-full"
                              src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                            <span className="absolute top-4 -start-3 size-2 bg-blue-600 rounded-full dark:bg-blue-500" />
                          </div>
                          <div className="grow">
                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                              2 hours ago
                            </p>
                            <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                              Eilis Warner
                            </span>
                            <p className="text-sm text-gray-500 dark:text-neutral-500">
                              changed an issue from 'in Progress' to 'Review'
                            </p>
                          </div>
                          <div>
                            <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                              {/* Segment Button Group */}
                              <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                <div className="flex items-center">
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <polyline points="9 11 12 14 22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                      </svg>
                                      <svg
                                        className="shrink-0 size-4 hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={18}
                                          height={18}
                                          x={3}
                                          y={3}
                                          rx={2}
                                        />
                                        <path d="M8 12h8" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Mark this notification as read
                                    </span>
                                  </div>
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={20}
                                          height={5}
                                          x={2}
                                          y={4}
                                          rx={2}
                                        />
                                        <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                        <path d="M10 13h4" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Archive this notification
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {/* End Segment Button Group */}
                            </div>
                          </div>
                        </li>
                        {/* End List Item */}
                        {/* List Item */}
                        <li className="relative group w-full flex gap-x-5 text-start  p-5">
                          <div className="relative shrink-0">
                            <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                              C
                            </span>
                          </div>
                          <div className="grow">
                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                              3 days ago
                            </p>
                            <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                              Clara Becker
                            </span>
                            <p className="text-sm text-gray-500 dark:text-neutral-500">
                              mentioned you in a comment
                            </p>
                            <div className="mt-2">
                              <blockquote className="ps-3 border-s-4 border-gray-200 text-sm text-gray-500 dark:border-neutral-700 dark:text-neutral-400">
                                Nice work, love! You really nailed it. Keep it up!
                              </blockquote>
                            </div>
                          </div>
                          <div>
                            <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                              {/* Segment Button Group */}
                              <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                <div className="flex items-center">
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <polyline points="9 11 12 14 22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                      </svg>
                                      <svg
                                        className="shrink-0 size-4 hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={18}
                                          height={18}
                                          x={3}
                                          y={3}
                                          rx={2}
                                        />
                                        <path d="M8 12h8" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Mark this notification as read
                                    </span>
                                  </div>
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={20}
                                          height={5}
                                          x={2}
                                          y={4}
                                          rx={2}
                                        />
                                        <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                        <path d="M10 13h4" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Archive this notification
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {/* End Segment Button Group */}
                            </div>
                          </div>
                        </li>
                        {/* End List Item */}
                        {/* List Item */}
                        <li className="relative group w-full flex gap-x-5 text-start  p-5">
                          <div className="relative shrink-0">
                            <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                              P
                            </span>
                          </div>
                          <div className="grow">
                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                              5 Jan 2023
                            </p>
                            <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                              New Update on Preline
                            </span>
                            <p className="text-sm text-gray-500 dark:text-neutral-500">
                              Add yourself to our new “Hire Page”. Let visitors know
                              you’re open to freelance or full-time work.
                            </p>
                            <a
                              className="mt-2 p-1.5 inline-flex items-center border border-gray-200 rounded-xl hover:bg-gray-50 hover:shadow-sm focus:outline-none focus:bg-gray-100 dark:border-neutral-700 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                              href="#"
                            >
                              <img
                                className="w-[70px] h-[62px] object-cover rounded-lg"
                                src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                                alt="Avatar"
                              />
                              <div className="grow py-2.5 px-4">
                                <p className="text-sm font-medium text-gray-800 dark:text-neutral-300">
                                  Get hired!
                                </p>
                                <p className="inline-flex items-center gap-x-1 text-sm text-gray-500 dark:text-neutral-500">
                                  Get started
                                  <svg
                                    className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="m9 18 6-6-6-6" />
                                  </svg>
                                </p>
                              </div>
                            </a>
                          </div>
                          <div>
                            <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                              {/* Segment Button Group */}
                              <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                <div className="flex items-center">
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <polyline points="9 11 12 14 22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                      </svg>
                                      <svg
                                        className="shrink-0 size-4 hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={18}
                                          height={18}
                                          x={3}
                                          y={3}
                                          rx={2}
                                        />
                                        <path d="M8 12h8" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Mark this notification as read
                                    </span>
                                  </div>
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={20}
                                          height={5}
                                          x={2}
                                          y={4}
                                          rx={2}
                                        />
                                        <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                        <path d="M10 13h4" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Archive this notification
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {/* End Segment Button Group */}
                            </div>
                          </div>
                        </li>
                        {/* End List Item */}
                        {/* List Item */}
                        <li className="relative group w-full flex gap-x-5 text-start  p-5">
                          <div className="relative shrink-0">
                            <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                              P
                            </span>
                          </div>
                          <div className="grow">
                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                              5 Jan 2023
                            </p>
                            <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                              We’re updating our Privacy Policy as of 10th January
                              2023.content
                            </span>
                            <p>
                              <a
                                className="inline-flex items-center gap-x-1 text-sm text-violet-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-violet-400 dark:hover:text-violet-500"
                                href="#"
                              >
                                Learn more
                                <svg
                                  className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={24}
                                  height={24}
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
                                  <path d="m9 18 6-6-6-6" />
                                </svg>
                              </a>
                            </p>
                          </div>
                          <div>
                            <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                              {/* Segment Button Group */}
                              <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                <div className="flex items-center">
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <polyline points="9 11 12 14 22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                      </svg>
                                      <svg
                                        className="shrink-0 size-4 hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={18}
                                          height={18}
                                          x={3}
                                          y={3}
                                          rx={2}
                                        />
                                        <path d="M8 12h8" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Mark this notification as read
                                    </span>
                                  </div>
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={20}
                                          height={5}
                                          x={2}
                                          y={4}
                                          rx={2}
                                        />
                                        <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                        <path d="M10 13h4" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Archive this notification
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {/* End Segment Button Group */}
                            </div>
                          </div>
                        </li>
                        {/* End List Item */}
                        {/* List Item */}
                        <li className="relative group w-full flex gap-x-5 text-start bg-gray-100 dark:bg-neutral-800 p-5">
                          <div className="relative shrink-0">
                            <img
                              className="shrink-0 size-[38px] rounded-full"
                              src="https://images.unsplash.com/photo-1614880353165-e56fac2ea9a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                            <span className="absolute top-4 -start-3 size-2 bg-blue-600 rounded-full dark:bg-blue-500" />
                          </div>
                          <div className="grow">
                            <p className="text-xs text-gray-500 dark:text-neutral-500">
                              31 Dec 2022
                            </p>
                            <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                              Rubia Walter
                            </span>
                            <p className="text-sm text-gray-500 dark:text-neutral-500">
                              Joined the Slack group HS Team
                            </p>
                          </div>
                          <div>
                            <div className="sm:group-hover:opacity-100 sm:opacity-0 sm:absolute sm:top-5 sm:end-5">
                              {/* Segment Button Group */}
                              <div className="inline-block p-0.5 bg-white border border-gray-200 rounded-lg shadow-sm transition ease-out dark:bg-neutral-800 dark:border-neutral-700">
                                <div className="flex items-center">
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <polyline points="9 11 12 14 22 4" />
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                      </svg>
                                      <svg
                                        className="shrink-0 size-4 hidden"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={18}
                                          height={18}
                                          x={3}
                                          y={3}
                                          rx={2}
                                        />
                                        <path d="M8 12h8" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Mark this notification as read
                                    </span>
                                  </div>
                                  <div className="hs-tooltip relative inline-block">
                                    <button
                                      type="button"
                                      className="hs-tooltip-toggle size-7 flex shrink-0 justify-center items-center text-gray-500 hover:bg-gray-100 hover:text-gray-800 rounded disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                                    >
                                      <svg
                                        className="shrink-0 size-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      >
                                        <rect
                                          width={20}
                                          height={5}
                                          x={2}
                                          y={4}
                                          rx={2}
                                        />
                                        <path d="M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9" />
                                        <path d="M10 13h4" />
                                      </svg>
                                    </button>
                                    <span
                                      className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg dark:bg-neutral-700"
                                      role="tooltip"
                                    >
                                      Archive this notification
                                    </span>
                                  </div>
                                </div>
                              </div>
                              {/* End Segment Button Group */}
                            </div>
                          </div>
                        </li>
                        {/* End List Item */}
                      </ul>
                      {/* End List Group */}
                    </div>
                    {/* Footer */}
                    <div className="text-center border-t border-gray-200 dark:border-neutral-800">
                      <a
                        className="p-4 flex justify-center items-center gap-x-2 text-sm text-gray-500 font-medium sm:rounded-b-lg hover:text-violet-600 focus:outline-none focus:text-violet-600 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                        href="../../docs/index.html"
                      >
                        Mark all as read
                      </a>
                    </div>
                    {/* End Footer */}
                  </div>
                  {/* End Tab Content */}
                  {/* Tab Content */}
                  <div
                    id="hs-pro-tabs-dnn-archived"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="hs-pro-tabs-dnn-item-archived"
                  >
                    {/* Empty State */}
                    <div className="p-5 min-h-[533px] flex flex-col justify-center items-center text-center">
                      <svg
                        className="w-48 mx-auto mb-4"
                        width={178}
                        height={90}
                        viewBox="0 0 178 90"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x={27}
                          y="50.5"
                          width={124}
                          height={39}
                          rx="7.5"
                          fill="currentColor"
                          className="fill-white dark:fill-neutral-800"
                        />
                        <rect
                          x={27}
                          y="50.5"
                          width={124}
                          height={39}
                          rx="7.5"
                          stroke="currentColor"
                          className="stroke-gray-50 dark:stroke-neutral-700/10"
                        />
                        <rect
                          x="34.5"
                          y={58}
                          width={24}
                          height={24}
                          rx={4}
                          fill="currentColor"
                          className="fill-gray-50 dark:fill-neutral-700/30"
                        />
                        <rect
                          x="66.5"
                          y={61}
                          width={60}
                          height={6}
                          rx={3}
                          fill="currentColor"
                          className="fill-gray-50 dark:fill-neutral-700/30"
                        />
                        <rect
                          x="66.5"
                          y={73}
                          width={77}
                          height={6}
                          rx={3}
                          fill="currentColor"
                          className="fill-gray-50 dark:fill-neutral-700/30"
                        />
                        <rect
                          x="19.5"
                          y="28.5"
                          width={139}
                          height={39}
                          rx="7.5"
                          fill="currentColor"
                          className="fill-white dark:fill-neutral-800"
                        />
                        <rect
                          x="19.5"
                          y="28.5"
                          width={139}
                          height={39}
                          rx="7.5"
                          stroke="currentColor"
                          className="stroke-gray-100 dark:stroke-neutral-700/30"
                        />
                        <rect
                          x={27}
                          y={36}
                          width={24}
                          height={24}
                          rx={4}
                          fill="currentColor"
                          className="fill-gray-100 dark:fill-neutral-700/70"
                        />
                        <rect
                          x={59}
                          y={39}
                          width={60}
                          height={6}
                          rx={3}
                          fill="currentColor"
                          className="fill-gray-100 dark:fill-neutral-700/70"
                        />
                        <rect
                          x={59}
                          y={51}
                          width={92}
                          height={6}
                          rx={3}
                          fill="currentColor"
                          className="fill-gray-100 dark:fill-neutral-700/70"
                        />
                        <g filter="url(#filter3)">
                          <rect
                            x={12}
                            y={6}
                            width={154}
                            height={40}
                            rx={8}
                            fill="currentColor"
                            className="fill-white dark:fill-neutral-800"
                            shapeRendering="crispEdges"
                          />
                          <rect
                            x="12.5"
                            y="6.5"
                            width={153}
                            height={39}
                            rx="7.5"
                            stroke="currentColor"
                            className="stroke-gray-100 dark:stroke-neutral-700/60"
                            shapeRendering="crispEdges"
                          />
                          <rect
                            x={20}
                            y={14}
                            width={24}
                            height={24}
                            rx={4}
                            fill="currentColor"
                            className="fill-gray-200 dark:fill-neutral-700 "
                          />
                          <rect
                            x={52}
                            y={17}
                            width={60}
                            height={6}
                            rx={3}
                            fill="currentColor"
                            className="fill-gray-200 dark:fill-neutral-700"
                          />
                          <rect
                            x={52}
                            y={29}
                            width={106}
                            height={6}
                            rx={3}
                            fill="currentColor"
                            className="fill-gray-200 dark:fill-neutral-700"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter3"
                            x={0}
                            y={0}
                            width={178}
                            height={64}
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                          >
                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                            <feColorMatrix
                              in="SourceAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            />
                            <feOffset dy={6} />
                            <feGaussianBlur stdDeviation={6} />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0"
                            />
                            <feBlend
                              mode="normal"
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1187_14810"
                            />
                            <feBlend
                              mode="normal"
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1187_14810"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      <div className="max-w-sm mx-auto">
                        <p className="mt-2 font-medium text-gray-800 dark:text-neutral-200">
                          No archived notifications
                        </p>
                        <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                          No data here yet. We will notify you when there's an
                          update.
                        </p>
                      </div>
                      <a
                        className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="@@href"
                      >
                        Notifications settings
                      </a>
                    </div>
                    {/* End Empty State */}
                  </div>
                  {/* End Tab Content */}
                </div>
              </div>
              {/* End Notifications Dropdown */}
            </div>
            <div className="hidden sm:block border-e border-gray-700 w-px h-6 mx-1.5 dark:border-neutral-800" />
            {/* Account Dropdown */}
            <div className="hs-dropdown inline-flex   [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start">
              <button
                id="hs-dnad"
                type="button"
                className="inline-flex shrink-0 items-center gap-x-3 text-start rounded-full focus:outline-none"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <Avatar src={getDirectusFileUrl(user?.avatar as string)} firstName={user?.first_name} />
              </button>
              {/* Account Dropdown */}
              <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dnad"
              >
                <div className="p-1 border-b border-gray-200 dark:border-neutral-800">
                  <Link
                    className="py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    to={"/profile"}
                  >
                    <Avatar src={getDirectusFileUrl(user?.avatar as string)} firstName={user?.first_name} />
                    <div className="grow">
                      <span className="text-sm font-semibold text-gray-800 dark:text-neutral-300">
                        {user?.first_name} {user?.last_name}
                      </span>
                      {/* <p className="text-xs text-gray-500 dark:text-neutral-500">
                        Preline@HS
                      </p> */}
                    </div>
                  </Link>
                </div>

                <div className="hidden px-4 py-3.5 border-gray-200 dark:border-neutral-800">
                  {/* Switch/Toggle */}
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="@@darkmodeID"
                      className="text-sm text-gray-800 dark:text-neutral-300"
                    >
                      Dark mode
                    </label>
                    <div className="relative inline-block">
                      <input
                        data-hs-theme-switch=""
                        type="checkbox"
                        id="@@darkmodeID"
                        className="relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-neutral-900

              before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                      />
                    </div>
                  </div>
                  {/* End Switch/Toggle */}
                </div>
                <div className="px-1 py-2">
                  <a
                    className="hidden flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    Customization
                    <div className="ms-auto">
                      <span className="ms-auto inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                        New
                      </span>
                    </div>
                  </a>
                  <Link
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    to={"/sign-out"}
                  >
                    Sign out
                  </Link>
                </div>
                <div className="hidden p-1 border-t border-gray-200 dark:border-neutral-800">
                  <button
                    type="button"
                    className="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    data-hs-overlay="#hs-pro-dasadam"
                  >
                    <svg
                      className="shrink-0 size-4 mt-0.5"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                    Add team account
                  </button>
                </div>
              </div>
              {/* End Account Dropdown */}
            </div>
            {/* End Account Dropdown */}
          </div>
        </div>
      </div>
      <nav className="relative bg-white border-b border-gray-200 dark:bg-neutral-900 dark:border-neutral-800">
        <div className="max-w-[85rem] flex flex-wrap basis-full justify-between items-center w-full mx-auto md:py-2.5 px-4 sm:px-6 lg:px-8">
          {/* Nav Links */}
          <div className="basis-full grow md:basis-auto md:grow-0">
            {/* Collapse */}
            <div
              id="hs-pro-dmh"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 md:block"
              aria-labelledby="hs-pro-dmh-collapse"
            >
              <div className="md:flex md:flex-wrap md:items-center md:gap-x-1 py-2 md:py-0 space-y-0.5 md:space-y-0">
                {navItems.map((item, index) => (
                  <NavLink
                    key={index}
                    label={item.label}
                    url={item.to}
                    activePath={window.location.pathname}
                  />
                ))}
              </div>
            </div>
            {/* End Collapse */}
          </div>
          {/* End Nav Links */}


          <div className="hidden lg:block">
            {/* Project Dropdown */}
            <div className="hs-dropdown [--auto-close:inside] [--placement:top-right] relative flex">
              {/* Project Button */}
              <button
                id="hs-pro-dnwpd"
                type="button"
                className="inline-flex items-center text-start text-sm font-medium text-stone-800 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:text-stone-500 dark:text-white dark:focus:text-neutral-200"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <Avatar src={getDirectusFileUrl(bot?.avatar as string)} firstName={bot?.name as string} />
                <span className='ms-1'>{bot?.name}</span>
                <svg
                  className="shrink-0 size-4 ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {/* End Project Button */}
              {/* Dropdown */}
              <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-pro-dnwpd"
              >
                <div className="p-1 space-y-0.5">
                  {bots?.items?.map((bot, index) => (
                    <Link
                      key={index}
                      className="py-2 px-3 block w-full text-start bg-stone-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:bg-neutral-800 dark:focus:bg-neutral-800"
                      to={`/apps/bot/${bot.id}`}
                    >
                      <div className='flex items-center gap-2'>
                        <Avatar
                          src={getDirectusFileUrl(bot.avatar as string)}
                          firstName={bot.name as string}
                        />
                        <span className='text-ellipsis'>{bot.name}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="p-1 border-t border-stone-200 dark:border-neutral-800">
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  >
                    <svg
                      className="shrink-0 size-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx={12} cy={12} r={10} />
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                    Add another bot
                  </button>
                </div>
              </div>
              {/* End Dropdown */}
            </div>
            {/* End Project Dropdown */}
          </div>
        </div>
      </nav>
    </header >
  )
};

export default Header;

function NavLink({
  label,
  url,
  activePath,
}: {
  label: string;
  url: string;
  activePath: string;
}) {
  const isCurrent = isRouteActive(url, activePath, false);
  return (
    <Link
      to={url}
      className={cn("py-2 px-3 md:px-2.5 xl:px-2 flex items-center gap-x-2 text-sm text-start text-nowrap text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800/40 dark:focus:bg-neutral-800", {
        "bg-gray-100 focus:bg-gray-200 dark:bg-neutral-800 dark:focus:bg-neutral-600": isCurrent
      })}
    >
      {label}
    </Link>
  );
}