import React from "react"
import { Outlet, useNavigate } from "@remix-run/react"
import { useEffect } from "react";
import { useAppSelector } from "~/store";
import { ChatThreads } from "../apps.chat.$chatId.inbox/_components/ChatThreads";

const Route = () => {
  const navigate = useNavigate()
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     window.location.href = '/';
  //   }
  // }, [isAuthenticated]);

  // if (isAuthenticated) {
  //   return <div></div>
  // }

  return (
    <>
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-1" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-1">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds1" aria-controls="hs-pro-chhds1" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0">
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-900" />
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Costa Quinn
                  </span>
                  <span className="truncate block text-xs text-blue-600 dark:text-blue-500 leading-4">
                    Online
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht1hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
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
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-800" />
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
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
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Costa</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Hi, I'd like to ask some questions. Can I use Preline UI on a client project?
                              <a className="group block mt-3 mb-1 focus:outline-hidden" href="https://preline.co/" target="_blank">
                                <span className="text-blue-600 underline dark:text-blue-500">
                                  https://preline.co/
                                </span>
                                <div className="p-2 ps-2.5 mt-2 relative cursor-default bg-blue-50 rounded-lg overflow-hidden group-focus:scale-[.98] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full before:bg-blue-600 dark:bg-blue-500/10 dark:before:bg-blue-500">
                                  <p className="font-medium text-xs text-blue-600 dark:text-blue-500">Preline</p>
                                  <p className="font-semibold text-xs text-gray-800 dark:text-neutral-200">Preline UI, crafted with Tailwind CSS</p>
                                  <p className="text-xs text-gray-800 dark:text-neutral-200">Preline UI is an open-source set of prebuilt UI components based on the utility-first Tailwind CSS framework.</p>
                                  <img className="mt-1 rounded-md" src="https://preline.co/hero-image-2.jpg" alt="Website Preview Image" />
                                </div>
                              </a>
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">11:27</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht1cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht1cmd_1">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="max-w-md ms-auto text-end flex justify-end gap-x-2">
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 pe-2.5 text-xs text-gray-400 dark:text-neutral-500">James</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Hi Costa,
                              <span>
                                <span className="text-[11px] text-end text-gray-400 dark:text-neutral-600 italic">12:44</span>
                                <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 6 7 17l-5-5" />
                                  <path d="m22 10-7.5 7.5L13 16" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                              <button id="hs-pro-cht1cmd_2" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht1cmd_2">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              <div className="mb-2 py-1 ps-2.5 pe-1.5 relative cursor-default bg-blue-50 before:bg-blue-600 dark:bg-blue-500/10 dark:before:bg-blue-500 rounded-lg overflow-hidden group-focus:scale-[.98] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full">
                                <blockquote>
                                  <p className="font-medium text-[13px] text-blue-600 dark:text-blue-500">Costa Quinn</p>
                                  <p className="text-[13px] text-gray-800 dark:text-neutral-200">Hi, I'd like to ask some questions. Can I use Preline UI on a client project?</p>
                                </blockquote>
                              </div>
                              Yes, you can!
                              <span>
                                <span className="text-[11px] text-end text-gray-400 dark:text-neutral-600 italic">12:44</span>
                                <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 6 7 17l-5-5" />
                                  <path d="m22 10-7.5 7.5L13 16" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                              <button id="hs-pro-cht1cmd_3" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht1cmd_3">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-1" className="sr-only">Message</label>
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-1" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Costa" data-hs-textarea-auto-height defaultValue={""} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds1" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds1-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds1-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds1">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Costa Quinn
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  Online
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc1">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc1-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc1-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc1">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 12h.01" />
                              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                              <rect width={20} height={14} x={2} y={6} rx={2} />
                            </svg>
                            Company:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            Fortex
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                            Country:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            United States
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            costa.notion@gmail.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Phone:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            +1 000-00-00
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <circle cx={12} cy={12} r={10} />
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                              <path d="M2 12h20" />
                            </svg>
                            Site:
                          </p>
                        </dt>
                        <dd className="grow">
                          <a className="align-top text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                            fortex.com
                          </a>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc1">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc1-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc1-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc1">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Only shared images appear here
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-2" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-2">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds2" aria-controls="hs-pro-chhds2" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-indigo-500 text-white rounded-full">
                  R
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-900" />
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Rachel Doe
                  </span>
                  <span className="truncate block text-xs text-gray-500 dark:text-neutral-500 leading-4">
                    Last seen 5 mins ago
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht2hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht2hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds2" aria-controls="hs-pro-chhds2" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds2" aria-controls="hs-pro-chhds2" aria-label="Toggle navigation"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-indigo-500 text-white rounded-full">
                  R
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-800" />
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
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
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase rounded-full bg-indigo-500 text-white">
                        R
                      </span>
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Rachel</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Hello
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">11:10</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht2cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht2cmd_1">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              <img className="mb-2 rounded-lg" src="../assets/img/mockups/img12.jpg" alt="Download Image" />
                              When using open method,<br /><code>const select = new</code><br />it creates another instance of the select.
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">11:10</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht2cmd_2" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht2cmd_2">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              <img className="mb-2 rounded-lg" src="../assets/img/mockups/img10.jpg" alt="Download Image" />
                              2. Using the&nbsp;static method causes an error in the console.
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">11:12</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht2cmd_3" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht2cmd_3">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-2" className="sr-only">Message</label>
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-2" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Rachel" data-hs-textarea-auto-height defaultValue={""} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds2" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds2-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds2-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds2">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <span className="flex shrink-0 justify-center items-center size-16 text-2xl font-medium uppercase bg-indigo-500 text-white rounded-full">
                R
              </span>
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Rachel Doe
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  Last seen 5 mins ago
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc2">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc2-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc2-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc2">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                            Country:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            Netherlands
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            rachel@gmail.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Phone:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            +297 000-00-00
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc2">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc2-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc2-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc2">
                    <div className="px-5 pb-5">
                      <div className="grid grid-cols-3 gap-px">
                        <img className="shrink-0 size-28 rounded-lg object-cover" src="../assets/img/mockups/img10.jpg" alt="Media Image" />
                        <img className="shrink-0 size-28 rounded-lg object-cover" src="../assets/img/mockups/img12.jpg" alt="Media Image" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-3" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-3">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds3" aria-controls="hs-pro-chhds3" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0">
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-900" />
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Lewis Clarke
                  </span>
                  <span className="truncate block text-xs text-gray-500 dark:text-neutral-500 leading-4">
                    Last seen 12 mins ago
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht3hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht3hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds3" aria-controls="hs-pro-chhds3" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds3" aria-controls="hs-pro-chhds3" aria-label="Toggle navigation">
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-800" />
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-5 px-2 sm:px-5 space-y-5">
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-8 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">Today</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Lewis</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              <div className="mb-1 grid grid-cols-2 gap-x-1">
                                <img className="shrink-0 size-41 rounded-s-md object-cover" src="../assets/img/examples/img9.webp" alt="Media Image" />
                                <div className="space-y-1">
                                  <img className="shrink-0 w-full h-20 rounded-tr-md object-cover" src="../assets/img/examples/img6.webp" alt="Media Image" />
                                  <img className="shrink-0 w-full h-20 rounded-br-md object-cover" src="../assets/img/examples/img1.webp" alt="Media Image" />
                                </div>
                              </div>
                              How's these all free? 🤯
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">07:02</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht3cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht3cmd_1">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-3" className="sr-only">Message</label>
            {/* Reply */}
            <div id="hs-ch1trc" className="hs-removing:opacity-0 transition duration-100 py-2.5 px-5 border-b border-gray-100 dark:border-neutral-700">
              <div className="flex justify-between items-center gap-x-3 border-s-2 border-blue-600 ps-2">
                <div className="w-full">
                  <p className="font-medium text-xs text-blue-600">Reply to Lewis</p>
                  <p className="text-xs text-gray-800 dark:text-neutral-200">How's these all free? 🤯</p>
                </div>
                <div className="grow">
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" aria-label="Close" data-hs-remove-element="#hs-ch1trc">
                    <span className="sr-only">Close</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx={12} cy={12} r={10} />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Reply */}
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-3" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Lewis" data-hs-textarea-auto-height defaultValue={"This is little appreciation to community! 🤭"} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds3" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds3-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds3-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds3">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Lewis Clarke
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  Last seen 12 mins ago
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc3">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc3-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc3-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc3">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 12h.01" />
                              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                              <rect width={20} height={14} x={2} y={6} rx={2} />
                            </svg>
                            Company:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            Acroma
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                            Country:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            United States
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            lewis@acroma.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <circle cx={12} cy={12} r={10} />
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                              <path d="M2 12h20" />
                            </svg>
                            Site:
                          </p>
                        </dt>
                        <dd className="grow">
                          <a className="align-top text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                            acroma.com
                          </a>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc3">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc3-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc3-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc3">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Only shared images appear here
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-4" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-4">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds4" aria-controls="hs-pro-chhds4" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-orange-500 text-white rounded-full">
                  T
                </span>
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Technical issues
                  </span>
                  <span className="truncate block text-xs text-gray-500 dark:text-neutral-500 leading-4">
                    4 members
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht4hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds4" aria-controls="hs-pro-chhds4" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds4" aria-controls="hs-pro-chhds4" aria-label="Toggle navigation"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-orange-500 text-white rounded-full">
                  T
                </span>
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-5 px-2 sm:px-5 space-y-5">
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-8 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">01 May</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Lousie</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Hello everyone
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:49</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht4cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_1">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="max-w-md ms-auto text-end flex justify-end gap-x-2">
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 pe-2.5 text-xs text-gray-400 dark:text-neutral-500">James</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Hi Lousie
                              <span>
                                <span className="text-[11px] text-end text-gray-400 dark:text-neutral-600 italic">18:39</span>
                                <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 6 7 17l-5-5" />
                                  <path d="m22 10-7.5 7.5L13 16" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                              <button id="hs-pro-cht4cmd_2" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_2">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              How are you?
                              <span>
                                <span className="text-[11px] text-end text-gray-400 dark:text-neutral-600 italic">18:40</span>
                                <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 6 7 17l-5-5" />
                                  <path d="m22 10-7.5 7.5L13 16" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                              <button id="hs-pro-cht4cmd_3" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_3">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-8 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">02 May</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Anna</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              you guys I need your help
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:00</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht4cmd_4" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_4">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              <div className="flex items-center gap-x-2">
                                <button type="button" className="flex justify-center items-center size-9 bg-blue-600 hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 text-white rounded-full dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="6 3 20 12 6 21 6 3" />
                                  </svg>
                                </button>
                                <div className="grow">
                                  <svg className="text-blue-600 dark:text-blue-500" width={77} height={19} viewBox="0 0 77 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={3} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={6} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={9} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={12} y={4} width={2} height={15} fill="currentColor" />
                                    <rect x={15} y={6} width={2} height={13} fill="currentColor" />
                                    <rect x={18} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={21} y={15} width={2} height={4} fill="currentColor" />
                                    <rect x={24} y={12} width={2} height={7} fill="currentColor" />
                                    <rect x={27} width={2} height={19} fill="currentColor" />
                                    <rect x={30} y={7} width={2} height={12} fill="currentColor" />
                                    <rect x={33} y={3} width={2} height={16} fill="currentColor" />
                                    <rect x={36} y={9} width={2} height={10} fill="currentColor" />
                                    <rect x={39} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={42} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={45} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={48} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={51} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={54} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={57} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={60} width={2} height={19} fill="currentColor" />
                                    <rect x={63} y={7} width={2} height={12} fill="currentColor" />
                                    <rect x={66} width={2} height={19} fill="currentColor" />
                                    <rect x={69} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={72} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={75} y={18} width={2} height={1} fill="currentColor" />
                                  </svg>
                                  <div className="inline-flex items-center gap-x-1">
                                    <p className="text-xs text-gray-500 dark:text-neutral-500">
                                      00:08
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:51</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht4cmd_5" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_5">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="max-w-md ms-auto text-end flex justify-end gap-x-2">
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 pe-2.5 text-xs text-gray-400 dark:text-neutral-500">Christina</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              <div className="flex items-center gap-x-2">
                                <button type="button" className="flex justify-center items-center size-9 bg-blue-600 hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 text-white rounded-full dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="6 3 20 12 6 21 6 3" />
                                  </svg>
                                </button>
                                <div className="grow">
                                  <svg className="text-blue-600 dark:text-blue-500" width={77} height={19} viewBox="0 0 77 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={3} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={6} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={9} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={12} y={4} width={2} height={15} fill="currentColor" />
                                    <rect x={15} y={6} width={2} height={13} fill="currentColor" />
                                    <rect x={18} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={21} y={15} width={2} height={4} fill="currentColor" />
                                    <rect x={24} y={12} width={2} height={7} fill="currentColor" />
                                    <rect x={27} width={2} height={19} fill="currentColor" />
                                    <rect x={30} y={7} width={2} height={12} fill="currentColor" />
                                    <rect x={33} y={3} width={2} height={16} fill="currentColor" />
                                    <rect x={36} y={9} width={2} height={10} fill="currentColor" />
                                    <rect x={39} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={42} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={45} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={48} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={51} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={54} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={57} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={60} width={2} height={19} fill="currentColor" />
                                    <rect x={63} y={7} width={2} height={12} fill="currentColor" />
                                    <rect x={66} width={2} height={19} fill="currentColor" />
                                    <rect x={69} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={72} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={75} y={18} width={2} height={1} fill="currentColor" />
                                  </svg>
                                  <div className="inline-flex items-center gap-x-1">
                                    <p className="text-xs text-gray-500 dark:text-neutral-500">
                                      00:08
                                    </p>
                                    <span className="inline-block size-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                                  </div>
                                </div>
                              </div>
                              <span>
                                <span className="text-[11px] text-end text-gray-400 dark:text-neutral-600 italic">09:52</span>
                                <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 6 7 17l-5-5" />
                                  <path d="m22 10-7.5 7.5L13 16" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                              <button id="hs-pro-cht4cmd_6" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_6">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase rounded-full bg-sky-500 text-white">
                        S
                      </span>
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Sun</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Hi
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:14</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht4cmd_7" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_7">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              After the purchase, user should receive two emails, one from us with the details to create an account for Preline Pro and another one from Paddle with the user purchase details including invoice.<br /><br />Also need to check the spam folders just in case
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:25</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht4cmd_8" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_8">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Looks like user entered the wrong email <a className="break-all text-blue-600 underline dark:text-blue-500" href="#">annarichard@gmail.cm</a> (typo at <a className="break-all text-blue-600 underline dark:text-blue-500" href="#">gmail.cm</a>) - we will send a new email to <a className="break-all text-blue-600 underline dark:text-blue-500" href="#">annarichard@gmail.com</a> with a link to create an account in a moment.
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:27</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht4cmd_9" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_9">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-8 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">Today</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Anna</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              ohh I didn't notice that typo 🙃
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">09:30</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht4cmd_10" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_10">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              big thanks 😊
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">09:31</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht4cmd_11" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_11">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase rounded-full bg-sky-500 text-white">
                        S
                      </span>
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Sun</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              You're welcome
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:14</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht4cmd_12" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_12">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="max-w-md ms-auto text-end flex justify-end gap-x-2">
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 pe-2.5 text-xs text-gray-400 dark:text-neutral-500">James</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Great! 👍️
                              <span>
                                <span className="text-[11px] text-end text-gray-400 dark:text-neutral-600 italic">18:39</span>
                                <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 6 7 17l-5-5" />
                                  <path d="m22 10-7.5 7.5L13 16" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                              <button id="hs-pro-cht4cmd_13" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht4cmd_13">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-4" className="sr-only">Message</label>
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-4" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Group" data-hs-textarea-auto-height defaultValue={""} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds4" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds4-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds4-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds4">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <span className="flex shrink-0 justify-center items-center size-16 text-2xl font-medium uppercase bg-orange-500 text-white rounded-full">
                B
              </span>
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Technical issues
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  4 members
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* Members */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsm1">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsm1-collapse">
                    <span className="text-sm font-medium">Members</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsm1-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsm1">
                    <div className="px-2 pb-5 space-y-1">
                      <a className="block py-2 px-3 w-full flex items-center gap-x-3 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                        <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar" />
                        <div className="grow">
                          <p className="font-semibold text-[13px] text-gray-800 dark:text-neutral-200">Christina Christy</p>
                          <p className="text-xs text-gray-500 dark:text-neutral-500">Online</p>
                        </div>
                      </a>
                      <a className="block py-2 px-3 w-full flex items-center gap-x-3 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                        <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar" />
                        <div className="grow">
                          <p className="font-semibold text-[13px] text-gray-800 dark:text-neutral-200">Louise Donadieu</p>
                          <p className="text-xs text-gray-500 dark:text-neutral-500">Last seen 5 mins ago</p>
                        </div>
                      </a>
                      <a className="block py-2 px-3 w-full flex items-center gap-x-3 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                        <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-pink-500 text-white rounded-full">
                          S
                        </span>
                        <div className="grow">
                          <p className="font-semibold text-[13px] text-gray-800 dark:text-neutral-200">Sun Chai</p>
                          <p className="text-xs text-gray-500 dark:text-neutral-500">Last seen 3 hours ago</p>
                        </div>
                      </a>
                      <a className="block py-2 px-3 w-full flex items-center gap-x-3 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                        <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar" />
                        <div className="grow">
                          <p className="font-semibold text-[13px] text-gray-800 dark:text-neutral-200">Tom Lowry</p>
                          <p className="text-xs text-gray-500 dark:text-neutral-500">Last seen 1 day ago</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Members */}
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc4">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc4-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc4-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc4">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            technical-issue@preline.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc4">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc4-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc4-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc4">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Only shared images appear here
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-5" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-5">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds5" aria-controls="hs-pro-chhds5" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-pink-500 text-white rounded-full">
                  B
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-900" />
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Bob Dean
                  </span>
                  <span className="truncate block text-xs text-gray-500 dark:text-neutral-500 leading-4">
                    Last seen 40 mins ago
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht5hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht5hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds5" aria-controls="hs-pro-chhds5" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds5" aria-controls="hs-pro-chhds5" aria-label="Toggle navigation"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-pink-500 text-white rounded-full">
                  B
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-800" />
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-5 px-2 sm:px-5 space-y-5">
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-8 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">Today</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase rounded-full bg-pink-500 text-white">
                        B
                      </span>
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Bob</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              <div className="flex items-center gap-x-2">
                                <img className="shrink-0 mb-2 size-16 rounded-md object-cover" src="../assets/img/mockups/img8.jpg" alt="Download Image" />
                                <div className="grow">
                                  <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">Screenshot 2024-05-01 at 11.23.24</p>
                                  <p className="text-xs text-gray-500 dark:text-neutral-500">339 KB - <a className="font-medium text-blue-600 hover:text-blue-700 focus:outline-hidden focus:text-blue-700 dark:text-blue-500 dark:focus:text-blue-600" href="#">Download</a></p>
                                </div>
                              </div>
                              Hey Preline team, I got an error while using the headless UI component with preline. I'm not sure how to fix it. Could you kindly assist me in identifying what I might be missing? Your help would be greatly appreciate
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:47</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht5cmd_2" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht5cmd_2">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-5" className="sr-only">Message</label>
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-5" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Bob" data-hs-textarea-auto-height defaultValue={""} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds5" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds5-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds5-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds5">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <span className="flex shrink-0 justify-center items-center size-16 text-2xl font-medium uppercase bg-pink-500 text-white rounded-full">
                B
              </span>
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Bob Dean
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  Last seen 40 mins ago
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc5">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc5-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc5-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc5">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M12 12h.01" />
                              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                              <rect width={20} height={14} x={2} y={6} rx={2} />
                            </svg>
                            Company:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            HALO LAB
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                            Country:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            United Kingdom
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            bob.dean@halolab.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Phone:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            +33 000-00-00
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <circle cx={12} cy={12} r={10} />
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                              <path d="M2 12h20" />
                            </svg>
                            Site:
                          </p>
                        </dt>
                        <dd className="grow">
                          <a className="align-top text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-hidden focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
                            halolab.com
                          </a>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc5">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc5-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc5-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc5">
                    <div className="px-5 pb-5">
                      <div className="grid grid-cols-3 gap-px">
                        <img className="shrink-0 size-28 rounded-lg object-cover" src="../assets/img/mockups/img8.jpg" alt="Media Image" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-6" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-6">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds6" aria-controls="hs-pro-chhds6" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-teal-500 text-white rounded-full">
                  M
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-900" />
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Mark Colbert
                  </span>
                  <span className="truncate block text-xs text-blue-600 dark:text-blue-500 leading-4">
                    Online
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht6hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht6hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds6" aria-controls="hs-pro-chhds6" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds6" aria-controls="hs-pro-chhds6" aria-label="Toggle navigation"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-teal-500 text-white rounded-full">
                  M
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-800" />
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-5 px-2 sm:px-5 space-y-5">
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-10 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-800 dark:text-neutral-500">02 May</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase rounded-full bg-teal-500 text-white">
                        M
                      </span>
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Mark</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              How do I share my team license with the rest of my team?
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">11:13</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht6cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht6cmd_1">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="max-w-md ms-auto text-end flex justify-end gap-x-2">
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 pe-2.5 text-xs text-gray-400 dark:text-neutral-500">Christina</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Hey there, thanks for checking out Preline UI!<br /><br />At the moment, we don't have it but we will soon add some more Framework Guides including for Rails.<br /><br />You may post into Github issues <a className="break-all text-blue-600 underline dark:text-blue-500" href="#">https://github.com/htmlstreamofficial/preline</a> - community members might share their installation steps.<br /><br />Cheers!
                              <a className="group block mt-3 mb-1 focus:outline-hidden" href target="_blank">
                                <span className="text-blue-600 underline dark:text-blue-500">
                                </span>
                                <div className="p-2 ps-2.5 mt-2 relative cursor-default bg-blue-50 rounded-lg overflow-hidden group-focus:scale-[.98] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full before:bg-blue-600 dark:bg-blue-500/10 dark:before:bg-blue-500">
                                  <p className="font-medium text-xs text-blue-600 dark:text-blue-500">GitHub</p>
                                  <p className="font-semibold text-xs text-gray-800 dark:text-neutral-200">GitHub: Let's build from here</p>
                                  <p className="text-xs text-gray-800 dark:text-neutral-200">GitHub is where 100 million developers shape the future of software, together. Contribute to the open source community, manage Git repositories, review code like a pro, track bugs and features.</p>
                                  <img className="mt-1 rounded-md" src="./assets.com/assets/github-octocat-13c86b8b336d.png" alt="Website Preview Image" />
                                </div>
                              </a>
                              <span>
                                <span className="text-[11px] text-end text-gray-400 dark:text-neutral-600 italic">13:02</span>
                                <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 6 7 17l-5-5" />
                                  <path d="m22 10-7.5 7.5L13 16" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                              <button id="hs-pro-cht6cmd_2" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht6cmd_2">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar" />
                    </div>
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-10 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-800 dark:text-neutral-500">03 May</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase rounded-full bg-teal-500 text-white">
                        M
                      </span>
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Mark</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Ah cool, thanks! Any idea when that will be available?
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">11:20</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht6cmd_3" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht6cmd_3">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="max-w-md ms-auto text-end flex justify-end gap-x-2">
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 pe-2.5 text-xs text-gray-400 dark:text-neutral-500">Christina</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              We can’t give ETA but we will prioritize and do our best to include in few weeks.
                              <span>
                                <span className="text-[11px] text-end text-gray-400 dark:text-neutral-600 italic">12:25</span>
                                <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 6 7 17l-5-5" />
                                  <path d="m22 10-7.5 7.5L13 16" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                              <button id="hs-pro-cht6cmd_4" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht6cmd_4">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar" />
                    </div>
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-10 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-800 dark:text-neutral-500">Today</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase rounded-full bg-teal-500 text-white">
                        M
                      </span>
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Mark</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Thanks, that would be really useful!
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">09:13</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht6cmd_5" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht6cmd_5">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                  {/* Item */}
                  <div className="max-w-md ms-auto text-end flex justify-end gap-x-2">
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 pe-2.5 text-xs text-gray-400 dark:text-neutral-500">Christina</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-end gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              <div className="flex items-center gap-x-2">
                                <button type="button" className="flex justify-center items-center size-9 bg-blue-600 hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 text-white rounded-full dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="6 3 20 12 6 21 6 3" />
                                  </svg>
                                </button>
                                <div className="grow">
                                  <svg className="text-blue-600 dark:text-blue-500" width={77} height={19} viewBox="0 0 77 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={3} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={6} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={9} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={12} y={4} width={2} height={15} fill="currentColor" />
                                    <rect x={15} y={6} width={2} height={13} fill="currentColor" />
                                    <rect x={18} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={21} y={15} width={2} height={4} fill="currentColor" />
                                    <rect x={24} y={12} width={2} height={7} fill="currentColor" />
                                    <rect x={27} width={2} height={19} fill="currentColor" />
                                    <rect x={30} y={7} width={2} height={12} fill="currentColor" />
                                    <rect x={33} y={3} width={2} height={16} fill="currentColor" />
                                    <rect x={36} y={9} width={2} height={10} fill="currentColor" />
                                    <rect x={39} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={42} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={45} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={48} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={51} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={54} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={57} y={14} width={2} height={5} fill="currentColor" />
                                    <rect x={60} width={2} height={19} fill="currentColor" />
                                    <rect x={63} y={7} width={2} height={12} fill="currentColor" />
                                    <rect x={66} width={2} height={19} fill="currentColor" />
                                    <rect x={69} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={72} y={18} width={2} height={1} fill="currentColor" />
                                    <rect x={75} y={18} width={2} height={1} fill="currentColor" />
                                  </svg>
                                  <div className="inline-flex items-center gap-x-1">
                                    <p className="text-xs text-gray-500 dark:text-neutral-500">
                                      00:08
                                    </p>
                                    <span className="inline-block size-1.5 rounded-full bg-blue-600 dark:bg-blue-500" />
                                  </div>
                                </div>
                              </div>
                              <span>
                                <span className="text-[11px] text-end text-gray-400 dark:text-neutral-600 italic">09:52</span>
                                <svg className="inline-block shrink-0 size-4 text-gray-400 dark:text-neutral-600" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M18 6 7 17l-5-5" />
                                  <path d="m22 10-7.5 7.5L13 16" />
                                </svg>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                              <button id="hs-pro-cht6cmd_6" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht6cmd_6">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80" alt="Avatar" />
                    </div>
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-6" className="sr-only">Message</label>
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-6" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Mark" data-hs-textarea-auto-height defaultValue={""} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds6" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds6-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds6-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds6">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <span className="flex shrink-0 justify-center items-center size-16 text-2xl font-medium uppercase bg-teal-500 text-white rounded-full">
                M
              </span>
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Mark Colbert
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  Online
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc6">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc6-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc6-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc6">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                            Country:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            Australia
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            mark@gmail.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Phone:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            +420 000-00-00
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc6">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc6-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc6-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc6">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Only shared images appear here
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-7" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-7">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds7" aria-controls="hs-pro-chhds7" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0">
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-900" />
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Ella Lauda
                  </span>
                  <span className="truncate block text-xs text-gray-500 dark:text-neutral-500 leading-4">
                    Last seen 12 min ago
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht7hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht7hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds7" aria-controls="hs-pro-chhds7" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds7" aria-controls="hs-pro-chhds7" aria-label="Toggle navigation">
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-800" />
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-5 px-2 sm:px-5 space-y-5">
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-8 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">Today</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Ella</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              For some strange reasons, my navbar mega menu displays not properly placed. here's the source file
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:49</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht7cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht7cmd_1">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              <div className="flex items-center gap-x-2">
                                <button type="button" className="flex justify-center items-center size-9 bg-blue-600 hover:bg-blue-700 focus:outline-hidden focus:bg-blue-700 text-white rounded-full dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                                  <svg className="shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 5v14" />
                                    <path d="m19 12-7 7-7-7" />
                                  </svg>
                                </button>
                                <div className="grow">
                                  <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">site-source.zip</p>
                                  <p className="text-xs text-gray-500 dark:text-neutral-500">512 KB - <a className="font-medium text-blue-600 hover:text-blue-700 focus:outline-hidden focus:text-blue-700 dark:text-blue-500 dark:focus:text-blue-600" href="#">Download</a></p>
                                </div>
                              </div>
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">10:51</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht7cmd_2" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht7cmd_2">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-7" className="sr-only">Message</label>
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-7" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Ella" data-hs-textarea-auto-height defaultValue={""} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds7" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds7-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds7-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds7">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Ella Lauda
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  Last seen 12 min ago
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc7">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc7-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc7-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc7">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                            Country:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            United States
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            ellalauda@icloud.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Phone:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            +1 212-00-11
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc7">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc7-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc7-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc7">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Only shared images appear here
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-8" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-8">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds8" aria-controls="hs-pro-chhds8" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-purple-500 text-white rounded-full">
                  B
                </span>
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Bugs/Improvements
                  </span>
                  <span className="truncate block text-xs text-blue-600 dark:text-blue-500 leading-4">
                    James is typing...
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht8hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht8hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds8" aria-controls="hs-pro-chhds8" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds8" aria-controls="hs-pro-chhds8" aria-label="Toggle navigation"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-purple-500 text-white rounded-full">
                  B
                </span>
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-5 px-2 sm:px-5 space-y-5">
              <div className="relative">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-10 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-800 dark:text-neutral-500">Today</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-5">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Amanda</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              I found a bug: Combobox selection of ahref items using keyboard #353
                              <a className="group block mt-3 mb-1 focus:outline-hidden" href="https://github.com/" target="_blank">
                                <span className="text-blue-600 underline dark:text-blue-500">
                                  https://github.com/
                                </span>
                                <div className="p-2 ps-2.5 mt-2 relative cursor-default bg-blue-50 rounded-lg overflow-hidden group-focus:scale-[.98] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full before:bg-blue-600 dark:bg-blue-500/10 dark:before:bg-blue-500">
                                  <p className="font-medium text-xs text-blue-600 dark:text-blue-500">Github</p>
                                  <p className="font-semibold text-xs text-gray-800 dark:text-neutral-200">GitHub: Let's build from here</p>
                                  <p className="text-xs text-gray-800 dark:text-neutral-200">GitHub is where 100 million developers shape the future of software, together. Contribute to the open source community, manage Git repositories, review code like a pro, track bugs and features.</p>
                                  <img className="mt-1 rounded-md" src="./assets.com/assets/github-octocat-13c86b8b336d.png" alt="Website Preview Image" />
                                </div>
                              </a>
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">08:40</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht8cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht8cmd_1">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-8" className="sr-only">Message</label>
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-8" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Group" data-hs-textarea-auto-height defaultValue={""} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds8" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds8-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds8-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds8">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <span className="flex shrink-0 justify-center items-center size-16 text-2xl font-medium uppercase bg-purple-500 text-white rounded-full">
                B
              </span>
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Bugs/Improvements
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  3 members
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* Members */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsm2">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsm2-collapse">
                    <span className="text-sm font-medium">Members</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsm2-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsm2">
                    <div className="px-2 pb-5 space-y-1">
                      <a className="block py-2 px-3 w-full flex items-center gap-x-3 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                        <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
                        <div className="grow">
                          <p className="font-semibold text-[13px] text-gray-800 dark:text-neutral-200">James Collins (You)</p>
                          <p className="text-xs text-gray-500 dark:text-neutral-500">Online</p>
                        </div>
                      </a>
                      <a className="block py-2 px-3 w-full flex items-center gap-x-3 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                        <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                        <div className="grow">
                          <p className="font-semibold text-[13px] text-gray-800 dark:text-neutral-200">Amanda Harvey</p>
                          <p className="text-xs text-gray-500 dark:text-neutral-500">Online</p>
                        </div>
                      </a>
                      <a className="block py-2 px-3 w-full flex items-center gap-x-3 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                        <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-sky-500 text-white rounded-full">
                          P
                        </span>
                        <div className="grow">
                          <p className="font-semibold text-[13px] text-gray-800 dark:text-neutral-200">Patrick</p>
                          <p className="text-xs text-gray-500 dark:text-neutral-500">Online</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                {/* End Members */}
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc8">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc8-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc8-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc8">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            bugs-improvements@preline.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc8">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc8-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc8-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc8">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Only shared images appear here
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-9" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-9">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds9" aria-controls="hs-pro-chhds9" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-sky-500 text-white rounded-full">
                  A
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-900" />
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Alex Brown
                  </span>
                  <span className="truncate block text-xs text-gray-500 dark:text-neutral-500 leading-4">
                    Last seen 2 hours ago
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht9hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht9hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds9" aria-controls="hs-pro-chhds9" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds9" aria-controls="hs-pro-chhds9" aria-label="Toggle navigation"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-sky-500 text-white rounded-full">
                  A
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-800" />
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-5 px-2 sm:px-5 space-y-5">
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-10 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-800 dark:text-neutral-500">Today</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase rounded-full bg-sky-500 text-white">
                        A
                      </span>
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">Alex</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              I love Preline Pro! What can we expect in the next update?
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">11:13</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht9cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht9cmd_1">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-9" className="sr-only">Message</label>
            {/* Reply */}
            <div id="hs-ch9trc" className="hs-removing:opacity-0 transition duration-100 py-2.5 px-5 border-b border-gray-100 dark:border-neutral-700">
              <div className="flex justify-between items-center gap-x-3 border-s-2 border-blue-600 ps-2">
                <div className="w-full">
                  <p className="font-medium text-xs text-blue-600">Reply to Alex</p>
                  <p className="text-xs text-gray-800 dark:text-neutral-200">I love Preline Pro! What can we expect in the next update?</p>
                </div>
                <div className="grow">
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" aria-label="Close" data-hs-remove-element="#hs-ch9trc">
                    <span className="sr-only">Close</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx={12} cy={12} r={10} />
                      <path d="m15 9-6 6" />
                      <path d="m9 9 6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* End Reply */}
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-9" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Lewis" data-hs-textarea-auto-height defaultValue={"A brand new Chat demo. 🙂"} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds9" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds9-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds9-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds9">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <span className="flex shrink-0 justify-center items-center size-16 text-2xl font-medium uppercase bg-sky-500 text-white rounded-full">
                A
              </span>
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Alex Brown
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  Last seen 2 hours ago
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc9">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc9-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc9-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc9">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                            Country:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            United Kingdom
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            alex2brown@gmail.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc9">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc9-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc9-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc9">
                    <div className="px-5 pb-5">
                      <div className="grid grid-cols-3 gap-px">
                        <img className="shrink-0 size-28 rounded-lg object-cover" src="../assets/img/examples/img9.webp" alt="Media Image" />
                        <img className="shrink-0 size-28 rounded-lg object-cover" src="../assets/img/examples/img6.webp" alt="Media Image" />
                        <img className="shrink-0 size-28 rounded-lg object-cover" src="../assets/img/examples/img9.webp" alt="Media Image" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-10" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-10">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds10" aria-controls="hs-pro-chhds10" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0">
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-900" />
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    David Harrison
                  </span>
                  <span className="truncate block text-xs text-gray-500 dark:text-neutral-500 leading-4">
                    Last seen 2 hours ago
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht10hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht10hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds10" aria-controls="hs-pro-chhds10" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds10" aria-controls="hs-pro-chhds10" aria-label="Toggle navigation">
                  <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-800" />
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="py-5 px-2 sm:px-5 space-y-5">
              <div className="relative space-y-5">
                {/* Time */}
                <div className="sticky top-0 inset-x-0 z-8 max-w-lg mx-auto text-center">
                  <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">Today</span>
                </div>
                {/* End Time */}
                {/* List */}
                <div className="w-full space-y-4">
                  {/* Item */}
                  <div className="max-w-md flex gap-x-2">
                    <div className="shrink-0 mt-auto">
                      <img className="shrink-0 size-8 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
                    </div>
                    {/* Chat Bubble */}
                    <div>
                      <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">David</p>
                      <div className="space-y-1">
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Hello! I'm looking through Preline Pro and curious if Figma files the templates are also included to your pricing plans?
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">07:00</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht10cmd_1" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht10cmd_1">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Ah, I found an answer on your FAQ, not included. Nevermind
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">07:00</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht10cmd_2" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht10cmd_2">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                        {/* Message */}
                        <div className="group flex justify-start gap-x-2" style={{ wordBreak: 'break-word' }}>
                          <div className="order-1 bg-white shadow-2xs dark:bg-neutral-800 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                            <div className="text-sm text-gray-800 dark:text-neutral-200">
                              Thanks!
                              <span>
                                <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">07:01</span>
                              </span>
                            </div>
                          </div>
                          {/* More Dropdown */}
                          <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                            <div className="hs-dropdown --exclude-from-auto-opening [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                              <button id="hs-pro-cht10cmd_3" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                <svg className="shrink-0 size-4 rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx={12} cy={12} r={1} />
                                  <circle cx={12} cy={5} r={1} />
                                  <circle cx={12} cy={19} r={1} />
                                </svg>
                              </button>
                              {/* More Dropdown */}
                              <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-8 bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht10cmd_3">
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
                              {/* End More Dropdown */}
                            </div>
                          </div>
                          {/* End More Dropdown */}
                        </div>{/* End Message */}
                      </div>
                    </div>
                    {/* End Chat Bubble */}
                  </div>
                  {/* End Item */}
                </div>
                {/* End List */}
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-10" className="sr-only">Message</label>
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-10" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message David" data-hs-textarea-auto-height defaultValue={""} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds10" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds10-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds10-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds10">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <img className="shrink-0 size-16 rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80" alt="Avatar" />
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  David Harrison
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  Last seen 2 hours ago
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc10">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc10-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc10-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc10">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                            Country:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            United States
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            david@icloud.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Phone:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            +492-00-11
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc10">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc10-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc10-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc10">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Only shared images appear here
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-11" className="hidden" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-11">
        <div className="relative h-dvh flex flex-col justify-end">
          {/* Header */}
          <header className="sticky top-0 inset-x-0 z-9 p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <div className="lg:hidden w-20 sm:w-auto flex items-center">
              {/* Sidebar Toggle */}
              <div className="sm:-ms-3 ">
                <button type="button" className="flex justify-center items-center gap-x-1 py-1.5 px-2 min-h-8 text-xs text-gray-600 bg-white hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar" aria-controls="hs-pro-chat-sidebar" aria-label="Toggle navigation">
                  <svg className="shrink-0 size-4 -ms-1" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m15 18-6-6 6-6" />
                  </svg> Chat
                </button>
              </div>
              {/* End Sidebar Toggle */}
            </div>
            {/* Avatar */}
            <div>
              <button type="button" className="truncate flex items-center gap-x-3.5 focus:outline-hidden" data-hs-overlay="#hs-pro-chhds11" aria-controls="hs-pro-chhds11" aria-label="Toggle navigation">
                <span className="lg:block hidden relative shrink-0"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-orange-500 text-white rounded-full">
                  O
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-900" />
                </span>
                <span className="grow text-center lg:text-start truncate">
                  <span className="truncate block font-semibold text-sm leading-4 text-gray-800 dark:text-neutral-200">
                    Ols Schols
                  </span>
                  <span className="truncate block text-xs text-gray-500 dark:text-neutral-500 leading-4">
                    Last seen 4 hours ago
                  </span>
                </span>
              </button>
            </div>
            {/* End Avatar */}
            <div className="w-20 sm:w-auto flex justify-end items-center gap-x-0.5">
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
                <button id="hs-pro-cht11hmd" type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx={12} cy={12} r={1} />
                    <circle cx={12} cy={5} r={1} />
                    <circle cx={12} cy={19} r={1} />
                  </svg>
                </button>
                {/* More Dropdown */}
                <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-cht11hmd">
                  <div className="p-1 space-y-0.5">
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <rect width={20} height={16} x={2} y={4} rx={2} />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                      Mark as unread
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                        <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                      </svg>
                      Mark as read
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsn">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                        <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                        <path d="M22 8c0-2.3-.8-4.3-2-6" />
                      </svg>
                      Snooze
                    </button>
                    <button type="button" className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhtgm">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                        <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                      </svg>
                      Tags
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsh">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                        <polyline points="16 6 12 2 8 6" />
                        <line x1={12} x2={12} y1={2} y2={15} />
                      </svg>
                      Share
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhsp">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                        <line x1={12} x2={12} y1={8} y2={12} />
                        <line x1={12} x2="12.01" y1={16} y2={16} />
                      </svg>
                      Spam
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhbu">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <circle cx={12} cy={12} r={10} />
                        <path d="m4.9 4.9 14.2 14.2" />
                      </svg>
                      Block user
                    </button>
                    <button type="button" className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" data-hs-overlay="#hs-pro-chhdl">
                      <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 6h18" />
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                        <line x1={10} x2={10} y1={11} y2={17} />
                        <line x1={14} x2={14} y1={11} y2={17} />
                      </svg>
                      Delete
                    </button>
                  </div>
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
              <div className="relative md:ps-2 ms-1 before:hidden md:before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Sidebar Toggle */}
                <button type="button" className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds11" aria-controls="hs-pro-chhds11" aria-label="Toggle navigation">
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
                <button type="button" className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chhds11" aria-controls="hs-pro-chhds11" aria-label="Toggle navigation"><span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-orange-500 text-white rounded-full">
                  O
                </span>
                  <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-orange-500 dark:ring-neutral-800" />
                </button>
                {/* End Sidebar Toggle */}
              </div>
            </div>
          </header>
          {/* End Header */}
          {/* Chat Content */}
          <div className="h-full overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="h-full p-4 space-y-5">
              <div className="h-full relative space-y-5">
                <div className="h-full flex flex-col justify-center items-center">
                  <svg className="w-48 mx-auto mb-4" width={178} height={90} viewBox="0 0 178 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x={27} y="50.5" width={124} height={39} rx="7.5" fill="currentColor" className="fill-white dark:fill-neutral-800" />
                    <rect x={27} y="50.5" width={124} height={39} rx="7.5" stroke="currentColor" className="stroke-gray-50 dark:stroke-neutral-700/10" />
                    <rect x="34.5" y={58} width={24} height={24} rx={4} fill="currentColor" className="fill-gray-50 dark:fill-neutral-700/30" />
                    <rect x="66.5" y={61} width={60} height={6} rx={3} fill="currentColor" className="fill-gray-50 dark:fill-neutral-700/30" />
                    <rect x="66.5" y={73} width={77} height={6} rx={3} fill="currentColor" className="fill-gray-50 dark:fill-neutral-700/30" />
                    <rect x="19.5" y="28.5" width={139} height={39} rx="7.5" fill="currentColor" className="fill-white dark:fill-neutral-800" />
                    <rect x="19.5" y="28.5" width={139} height={39} rx="7.5" stroke="currentColor" className="stroke-gray-100 dark:stroke-neutral-700/30" />
                    <rect x={27} y={36} width={24} height={24} rx={4} fill="currentColor" className="fill-gray-100 dark:fill-neutral-700/70" />
                    <rect x={59} y={39} width={60} height={6} rx={3} fill="currentColor" className="fill-gray-100 dark:fill-neutral-700/70" />
                    <rect x={59} y={51} width={92} height={6} rx={3} fill="currentColor" className="fill-gray-100 dark:fill-neutral-700/70" />
                    <g filter="url(#filter1)">
                      <rect x={12} y={6} width={154} height={40} rx={8} fill="currentColor" className="fill-white dark:fill-neutral-800" shapeRendering="crispEdges" />
                      <rect x="12.5" y="6.5" width={153} height={39} rx="7.5" stroke="currentColor" className="stroke-gray-100 dark:stroke-neutral-700/60" shapeRendering="crispEdges" />
                      <rect x={20} y={14} width={24} height={24} rx={4} fill="currentColor" className="fill-gray-200 dark:fill-neutral-700 " />
                      <rect x={52} y={17} width={60} height={6} rx={3} fill="currentColor" className="fill-gray-200 dark:fill-neutral-700" />
                      <rect x={52} y={29} width={106} height={6} rx={3} fill="currentColor" className="fill-gray-200 dark:fill-neutral-700" />
                    </g>
                    <defs>
                      <filter id="filter1" x={0} y={0} width={178} height={64} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy={6} />
                        <feGaussianBlur stdDeviation={6} />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1187_14810" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1187_14810" result="shape" />
                      </filter>
                    </defs>
                  </svg>
                  <p className="font-medium text-gray-600 dark:text-neutral-400">
                    No message here yet
                  </p>
                  <p className="text-sm text-gray-500 dark:text-neutral-500">
                    Send a message and start a conversation
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End Chat Content */}
          {/* Textarea */}
          <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
            <label htmlFor="hs-chat-autoheight-textarea-11" className="sr-only">Message</label>
            <div className="pb-2 ps-2">
              <textarea id="hs-chat-autoheight-textarea-11" className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" placeholder="Message Ols" data-hs-textarea-auto-height defaultValue={""} />
              <div className="pe-4 flex justify-between items-center gap-x-1">
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                    </svg>
                    <span className="sr-only">Attach file</span>
                  </button>
                  {/* End Button */}
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11v1a10 10 0 1 1-9-10" />
                      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                      <line x1={9} x2="9.01" y1={9} y2={9} />
                      <line x1={15} x2="15.01" y1={9} y2={9} />
                      <path d="M16 5h6" />
                      <path d="M19 2v6" />
                    </svg>
                    <span className="sr-only">Add emoji</span>
                  </button>
                  {/* End Button */}
                </div>
                {/* End Button Group */}
                {/* Button Group */}
                <div className="flex items-center gap-x-1">
                  {/* Button */}
                  <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      <line x1={12} x2={12} y1={19} y2={22} />
                    </svg>
                    <span className="sr-only">Send voice message</span>
                  </button>
                  {/* End Button */}
                  {/* Send Button */}
                  <button type="button" className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600">
                    <span className="sr-only">Send</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m5 12 7-7 7 7" />
                      <path d="M12 19V5" />
                    </svg>
                  </button>
                  {/* End Send Button */}
                </div>
                {/* End Button Group */}
              </div>
            </div>
          </footer>
          {/* End Textarea */}
        </div>
        {/* Secondary Sidebar */}
        <aside id="hs-pro-chhds11" className="hs-sidebar-details hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] [--auto-close-equality-type:less-than] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
  translate-x-full transition-all duration-300 transform
  sm:w-96 w-full
  hidden
  fixed bottom-0 end-0 z-10 top-0 h-full
  bg-white border-s border-gray-200
  2xl:block 2xl:translate-x-full 2xl:bottom-0
  dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chhds11-label">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
              <span id="hs-pro-chhds11-label" className="block font-semibold text-gray-800 dark:text-neutral-200">
                Details
              </span>
              {/* Close Button */}
              <div className="absolute top-2 end-4 z-10">
                <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700" aria-label="Close" data-hs-overlay="#hs-pro-chhds11">
                  <span className="sr-only">Close</span>
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                  </svg>
                </button>
              </div>
              {/* End Close Button */}
            </div>
            {/* End Header */}
            {/* Profile */}
            <div className="p-5 flex flex-col justify-center items-center text-center border-b border-gray-100 dark:border-neutral-800">
              <span className="flex shrink-0 justify-center items-center size-16 text-2xl font-medium uppercase bg-orange-500 text-white rounded-full">
                O
              </span>
              <div className="mt-2 w-full">
                <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                  Ols Schols
                </h2>
                <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                  Last seen 4 hours ago
                </p>
                {/* Button Group */}
                <div className="mt-4 flex justify-center items-center gap-x-3">
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                      <rect width={18} height={18} x={3} y={4} rx={2} />
                      <circle cx={12} cy={10} r={2} />
                      <line x1={8} x2={8} y1={2} y2={4} />
                      <line x1={16} x2={16} y1={2} y2={4} />
                    </svg>
                    View profile
                  </button>
                  <button type="button" className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <rect width={20} height={16} x={2} y={4} rx={2} />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Send email
                  </button>
                </div>
                {/* End Button Group */}
              </div>
            </div>
            {/* End Profile */}
            {/* Body */}
            <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="hs-accordion-group" data-hs-accordion-always-open>
                {/* User Details */}
                <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active" id="hs-pro-chdsudc11">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdsudc11-collapse">
                    <span className="text-sm font-medium">User details</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdsudc11-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdsudc11">
                    <div className="px-5 pb-5">
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                              <circle cx={12} cy={10} r={3} />
                            </svg>
                            Country:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            Australia
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <rect width={20} height={16} x={2} y={4} rx={2} />
                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            Email:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            olsschols@gmail.com
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                      {/* List Item */}
                      <dl className="py-1 flex items-center gap-x-4">
                        <dt className="w-full max-w-28">
                          <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                            <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Phone:
                          </p>
                        </dt>
                        <dd className="grow">
                          <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                            +234-95-86
                          </p>
                        </dd>
                      </dl>
                      {/* End List Item */}
                    </div>
                  </div>
                </div>
                {/* End User Details */}
                {/* Shared Media */}
                <div className="hs-accordion active" id="hs-pro-chdssmc11">
                  <button type="button" className="hs-accordion-toggle p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-hidden focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400" aria-expanded="true" aria-controls="hs-pro-chdssmc11-collapse">
                    <span className="text-sm font-medium">Shared media</span>
                    <svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                    <svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                    </svg>
                  </button>
                  <div id="hs-pro-chdssmc11-collapse" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-pro-chdssmc11">
                    <div className="px-5 pb-5">
                      <p className="text-sm text-gray-500 dark:text-neutral-500">
                        Only shared images appear here
                      </p>
                    </div>
                  </div>
                </div>
                {/* End Shared Media */}
              </div>
            </div>
            {/* End Body */}
          </div>
        </aside>
        {/* End Secondary Sidebar */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div id="hs-pro-tabs-chct-12" role="tabpanel" aria-labelledby="hs-pro-tabs-chct-item-12">
        <div className="relative sm:h-dvh flex flex-col justify-center items-center">
          {/* Cards Grid */}
          <div className="2xl:-me-96">
            <div className="py-16 px-5 sm:py-5 max-w-3xl w-full mx-auto">
              {/* Body */}
              <div>
                {/* Header */}
                <div className="mb-5 flex flex-col justify-center items-center sm:flex-row sm:justify-between gap-2 sm:gap-3">
                  <h2 className="font-medium text-lg text-gray-800 dark:text-neutral-200">
                    Let's get you setup
                  </h2>
                  <div>
                    <a className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="../../pro/dashboard/account-integrations.html">
                      View all apps
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* End Header */}
                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Card */}
                  <div className="p-4 group relative flex flex-col border border-gray-200 bg-white hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700/50 dark:hover:border-neutral-700 rounded-lg">
                    <div className="h-full flex gap-x-5">
                      <div className="shrink-0 size-8">
                        <svg className="shrink-0 size-8" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" clipRule="evenodd" d="M11.7326 0C9.96372 0.00130479 8.53211 1.43397 8.53342 3.19935C8.53211 4.96473 9.96503 6.39739 11.7339 6.39869H14.9345V3.20065C14.9358 1.43527 13.5029 0.00260958 11.7326 0C11.7339 0 11.7339 0 11.7326 0M11.7326 8.53333H3.20053C1.43161 8.53464 -0.00130383 9.9673 3.57297e-06 11.7327C-0.00261123 13.4981 1.4303 14.9307 3.19922 14.9333H11.7326C13.5016 14.932 14.9345 13.4994 14.9332 11.734C14.9345 9.9673 13.5016 8.53464 11.7326 8.53333V8.53333Z" fill="#36C5F0" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M32 11.7327C32.0013 9.9673 30.5684 8.53464 28.7995 8.53333C27.0306 8.53464 25.5976 9.9673 25.5989 11.7327V14.9333H28.7995C30.5684 14.932 32.0013 13.4994 32 11.7327ZM23.4666 11.7327V3.19935C23.4679 1.43527 22.0363 0.00260958 20.2674 0C18.4984 0.00130479 17.0655 1.43397 17.0668 3.19935V11.7327C17.0642 13.4981 18.4971 14.9307 20.2661 14.9333C22.035 14.932 23.4679 13.4994 23.4666 11.7327Z" fill="#2EB67D" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M20.2661 32C22.035 31.9987 23.4679 30.566 23.4666 28.8007C23.4679 27.0353 22.035 25.6026 20.2661 25.6013H17.0656V28.8007C17.0642 30.5647 18.4972 31.9974 20.2661 32ZM20.2661 23.4654H28.7995C30.5684 23.4641 32.0013 22.0314 32 20.266C32.0026 18.5006 30.5697 17.068 28.8008 17.0654H20.2674C18.4985 17.0667 17.0656 18.4993 17.0669 20.2647C17.0656 22.0314 18.4972 23.4641 20.2661 23.4654V23.4654Z" fill="#ECB22E" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.93953e-07 20.266C-0.00130651 22.0314 1.43161 23.4641 3.20052 23.4654C4.96944 23.4641 6.40235 22.0314 6.40105 20.266V17.0667H3.20052C1.43161 17.068 -0.00130651 18.5006 8.93953e-07 20.266ZM8.53342 20.266V28.7993C8.53081 30.5647 9.96372 31.9974 11.7326 32C13.5016 31.9987 14.9345 30.566 14.9332 28.8007V20.2686C14.9358 18.5032 13.5029 17.0706 11.7339 17.068C9.96372 17.068 8.53211 18.5006 8.53342 20.266C8.53342 20.2673 8.53342 20.266 8.53342 20.266Z" fill="#E01E5A" />
                        </svg>
                      </div>
                      <div className="grow">
                        <div className="h-full flex flex-col">
                          <div>
                            <h3 className="inline-flex items-center gap-x-1 font-medium text-gray-800 dark:text-neutral-200">
                              Slack
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                              Connect a slack workspace in order to setup automated notifications.
                            </p>
                          </div>
                          <div className="pt-1 mt-auto">
                            <span className="inline-flex items-center gap-x-2 text-sm font-medium group-disabled:opacity-50 group-disabled:pointer-events-none text-blue-600 group-hover:text-blue-700 group-hover:underline group-hover:decoration-2 dark:text-blue-500 dark:group-hover:text-blue-400">
                              Install now
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="after:absolute after:inset-0 after:z-10" href="#" />
                  </div>
                  {/* End Card */}
                  {/* Card */}
                  <div className="p-4 group relative flex flex-col border border-gray-200 bg-white dark:bg-neutral-800 dark:border-neutral-700/50bg-gray-50 opacity-50 pointer-events-none dark:bg-neutral-800 dark:border-neutral-700/50 rounded-lg">
                    <div className="h-full flex gap-x-5">
                      <div className="shrink-0 size-8">
                        <div className="flex justify-center items-center size-8 rounded-full bg-gray-200 text-gray-500 dark:bg-neutral-700 dark:text-neutral-500"><svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg></div>
                      </div>
                      <div className="grow">
                        <div className="h-full flex flex-col">
                          <div>
                            <h3 className="inline-flex items-center gap-x-1 font-medium text-gray-800 dark:text-neutral-200">
                              Notion
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                              Connect your Notion account to work seamlessly across Notion &amp; Preline.
                            </p>
                          </div>
                          <div className="pt-1 mt-auto">
                            <span className="inline-flex items-center gap-x-2 text-sm font-medium group-disabled:opacity-50 group-disabled:pointer-events-none text-gray-600 dark:text-neutral-400text-gray-600 dark:text-neutral-400">
                              Installed
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                  {/* Card */}
                  <div className="p-4 group relative flex flex-col border border-gray-200 bg-white hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700/50 dark:hover:border-neutral-700 rounded-lg">
                    <div className="h-full flex gap-x-5">
                      <div className="shrink-0 size-8">
                        <svg className="shrink-0 size-8 text-gray-500 dark:text-neutral-500" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M16.0001 0C7.16461 0 0 7.34466 0 16.405C0 23.6533 4.5845 29.8026 10.9419 31.9718C11.7415 32.1236 12.0351 31.6159 12.0351 31.1826C12.0351 30.7915 12.0202 29.4991 12.0134 28.1283C7.56202 29.1207 6.62276 26.1927 6.62276 26.1927C5.89494 24.2965 4.84626 23.7924 4.84626 23.7924C3.39464 22.7742 4.95568 22.795 4.95568 22.795C6.5624 22.9108 7.40843 24.4856 7.40843 24.4856C8.83545 26.9936 11.1514 26.2685 12.0645 25.8495C12.208 24.789 12.6227 24.0654 13.0803 23.6558C9.5265 23.2408 5.79054 21.8342 5.79054 15.5483C5.79054 13.7573 6.41559 12.2938 7.43917 11.1449C7.27303 10.7317 6.72541 9.0632 7.59415 6.80351C7.59415 6.80351 8.93772 6.36259 11.9953 8.48512C13.2715 8.12152 14.6403 7.93934 16.0001 7.93316C17.3598 7.93934 18.7296 8.12152 20.0083 8.48512C23.0623 6.36259 24.404 6.80351 24.404 6.80351C25.2748 9.0632 24.727 10.7317 24.5608 11.1449C25.5867 12.2938 26.2075 13.7572 26.2075 15.5483C26.2075 21.8491 22.4645 23.2366 18.9017 23.6426C19.4755 24.1518 19.9869 25.1502 19.9869 26.6806C19.9869 28.8756 19.9683 30.6422 19.9683 31.1826C19.9683 31.6192 20.2563 32.1307 21.0674 31.9696C27.4213 29.798 32 23.6509 32 16.405C32 7.34466 24.8364 0 16.0001 0Z" className="fill-black dark:fill-neutral-200" fill="currentColor" />
                          <path d="M5.99251 23.3693C5.95737 23.4508 5.83213 23.4752 5.71832 23.4194C5.60224 23.3658 5.53699 23.2547 5.57464 23.1728C5.60915 23.089 5.73438 23.0655 5.8502 23.1219C5.96653 23.1753 6.03279 23.2875 5.99251 23.3693ZM6.77955 24.0893C6.70326 24.1619 6.55405 24.1282 6.45279 24.0135C6.34813 23.8991 6.32856 23.7463 6.40598 23.6726C6.48466 23.6001 6.62935 23.634 6.73425 23.7485C6.83891 23.8641 6.85924 24.0161 6.77943 24.0894M7.31952 25.0105C7.22139 25.0804 7.06102 25.0149 6.96201 24.869C6.864 24.7232 6.864 24.5482 6.96414 24.4781C7.06353 24.408 7.22139 24.471 7.32178 24.6158C7.41965 24.7641 7.41965 24.9391 7.31939 25.0107M8.23255 26.0775C8.14484 26.1766 7.95811 26.1501 7.82133 26.0147C7.68154 25.8825 7.64252 25.6947 7.73048 25.5955C7.8192 25.4962 8.00705 25.5241 8.14484 25.6583C8.28375 25.7903 8.32604 25.9795 8.23255 26.0775ZM9.41262 26.4378C9.3741 26.5662 9.19415 26.6246 9.01295 26.57C8.832 26.5138 8.71354 26.3633 8.75006 26.2335C8.7877 26.1041 8.9684 26.0433 9.15098 26.1017C9.33168 26.1577 9.45027 26.307 9.41262 26.4378ZM10.7558 26.5905C10.7603 26.7258 10.6066 26.838 10.4164 26.8405C10.225 26.8447 10.0703 26.7352 10.0683 26.6022C10.0683 26.4656 10.2185 26.3544 10.4097 26.3512C10.6 26.3473 10.7558 26.456 10.7558 26.5905ZM12.0752 26.5386C12.098 26.6706 11.9658 26.8063 11.7769 26.8423C11.5912 26.877 11.4193 26.7956 11.3955 26.6647C11.3725 26.5294 11.5072 26.3939 11.6926 26.3588C11.8818 26.3251 12.0511 26.4044 12.0752 26.5386Z" className="fill-black dark:fill-neutral-200" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="grow">
                        <div className="h-full flex flex-col">
                          <div>
                            <h3 className="inline-flex items-center gap-x-1 font-medium text-gray-800 dark:text-neutral-200">
                              Github
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                              Link git pull requests, branches, and commits to Preline.
                            </p>
                          </div>
                          <div className="pt-1 mt-auto">
                            <span className="inline-flex items-center gap-x-2 text-sm font-medium group-disabled:opacity-50 group-disabled:pointer-events-none text-blue-600 group-hover:text-blue-700 group-hover:underline group-hover:decoration-2 dark:text-blue-500 dark:group-hover:text-blue-400">
                              Install now
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="after:absolute after:inset-0 after:z-10" href="#" />
                  </div>
                  {/* End Card */}
                  {/* Card */}
                  <div className="p-4 group relative flex flex-col border border-gray-200 bg-white hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700/50 dark:hover:border-neutral-700 rounded-lg">
                    <div className="h-full flex gap-x-5">
                      <div className="shrink-0 size-8">
                        <svg className="shrink-0 size-8" width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_11766_122209asdasd)">
                            <path d="M3.11931 28.4817H8.21019V16.1181L0.937439 10.6636V26.3C0.937439 27.5054 1.91381 28.4819 3.11931 28.4819V28.4817Z" fill="#4285F4" />
                            <path d="M25.6647 28.4817H30.7556C31.961 28.4817 32.9374 27.5054 32.9374 26.2999V10.6636L25.6647 16.1181V28.4817Z" fill="#34A853" />
                            <path d="M25.6647 6.66356V16.1181L32.9374 10.6636V7.7545C32.9374 5.05812 29.8593 3.51812 27.701 5.13631L25.6647 6.66356Z" fill="#FBBC04" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.21021 16.1181V6.66356L16.9375 13.2091L25.6647 6.66356V16.1181L16.9375 22.6636L8.21021 16.1181Z" fill="#EA4335" />
                            <path d="M0.937439 7.7545V10.6636L8.21019 16.1181V6.66356L6.17381 5.13631C4.01556 3.51813 0.937439 5.05813 0.937439 7.75438V7.7545Z" fill="#C5221F" />
                          </g>
                          <defs>
                            <clipPath id="clip0_11766_122209asdasd">
                              <rect width={32} height={32} fill="white" transform="translate(0.937439)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="grow">
                        <div className="h-full flex flex-col">
                          <div>
                            <h3 className="inline-flex items-center gap-x-1 font-medium text-gray-800 dark:text-neutral-200">
                              Gmail
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                              Create and share Preline right from your inbox.
                            </p>
                          </div>
                          <div className="pt-1 mt-auto">
                            <span className="inline-flex items-center gap-x-2 text-sm font-medium group-disabled:opacity-50 group-disabled:pointer-events-none text-blue-600 group-hover:text-blue-700 group-hover:underline group-hover:decoration-2 dark:text-blue-500 dark:group-hover:text-blue-400">
                              Install now
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="after:absolute after:inset-0 after:z-10" href="#" />
                  </div>
                  {/* End Card */}
                  {/* Card */}
                  <div className="p-4 group relative flex flex-col border border-gray-200 bg-white hover:border-gray-300 dark:bg-neutral-800 dark:border-neutral-700/50 dark:hover:border-neutral-700 rounded-lg">
                    <div className="h-full flex gap-x-5">
                      <div className="shrink-0 size-8">
                        <svg className="shrink-0 size-8" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_11766_122079)">
                            <path d="M16 32C7.16 32 0 24.84 0 16C0 7.16 7.16 0 16 0C24.84 0 32 7.16 32 16C32 24.84 24.84 32 16 32Z" fill="#FFE01B" />
                            <path d="M11.72 19.28C11.74 19.3 11.74 19.34 11.72 19.38C11.64 19.52 11.48 19.6 11.32 19.58C11.02 19.54 10.8 19.3 10.82 19C10.82 18.8 10.86 18.62 10.92 18.42C11.02 18.18 10.92 17.92 10.72 17.78C10.6 17.7 10.44 17.68 10.3 17.7C10.16 17.72 10.04 17.82 9.96001 17.94C9.90001 18.04 9.86001 18.14 9.84001 18.24C9.84001 18.26 9.82001 18.28 9.82001 18.28C9.78001 18.4 9.70001 18.44 9.64001 18.44C9.62001 18.44 9.58001 18.42 9.56001 18.36C9.50001 18.02 9.62001 17.68 9.84001 17.42C10.04 17.2 10.32 17.1 10.62 17.14C10.92 17.18 11.2 17.38 11.32 17.66C11.46 18 11.42 18.38 11.24 18.7C11.22 18.72 11.22 18.76 11.2 18.78C11.14 18.9 11.12 19.06 11.2 19.18C11.26 19.26 11.34 19.3 11.44 19.3C11.48 19.3 11.52 19.3 11.56 19.28C11.64 19.24 11.7 19.24 11.72 19.28ZM24.94 19.6C24.92 20.22 24.78 20.82 24.56 21.4C23.44 24.1 20.76 25.6 17.56 25.5C14.58 25.42 12.04 23.84 10.94 21.26C10.24 21.24 9.56001 20.96 9.06001 20.5C8.52001 20.04 8.18001 19.4 8.10001 18.7C8.04001 18.22 8.10001 17.74 8.28001 17.28L7.66001 16.76C4.78001 14.36 13.72 4.4 16.56 6.9C16.58 6.92 17.54 7.86 17.54 7.86C17.54 7.86 18.06 7.64 18.08 7.64C20.58 6.6 22.62 7.1 22.62 8.76C22.62 9.62 22.08 10.62 21.2 11.54C21.56 11.9 21.8 12.34 21.92 12.82C22.02 13.16 22.06 13.5 22.08 13.86C22.1 14.22 22.12 15.04 22.12 15.04C22.14 15.04 22.4 15.12 22.48 15.14C23 15.26 23.46 15.48 23.86 15.82C24.08 16.02 24.2 16.3 24.26 16.58C24.32 16.96 24.22 17.34 24 17.64C24.06 17.78 24.1 17.9 24.16 18.04C24.24 18.28 24.28 18.48 24.3 18.5C24.52 18.54 24.94 18.86 24.94 19.6ZM12.34 18.12C12.14 16.86 11.3 16.42 10.72 16.38C10.58 16.38 10.44 16.38 10.28 16.42C9.26001 16.62 8.66001 17.5 8.78001 18.64C8.96001 19.7 9.82001 20.5 10.88 20.56C10.98 20.56 11.08 20.56 11.18 20.54C12.24 20.38 12.5 19.24 12.34 18.12ZM14.1 10.12C14.98 9.4 15.9 8.76 16.88 8.2C16.88 8.2 16.1 7.3 15.86 7.22C14.42 6.82 11.3 8.98 9.30001 11.84C8.50001 13 7.34001 15.04 7.90001 16.08C8.10001 16.32 8.32001 16.52 8.56001 16.72C8.92001 16.2 9.48001 15.84 10.12 15.72C10.9 13.54 12.28 11.6 14.1 10.12ZM17.22 20.1C17.3 20.44 17.56 20.72 17.9 20.8C18.08 20.86 18.24 20.92 18.44 20.94C20.72 21.34 22.86 20.02 23.34 19.7C23.38 19.68 23.4 19.7 23.38 19.74C23.36 19.76 23.34 19.78 23.34 19.8C22.76 20.56 21.18 21.44 19.12 21.44C18.22 21.44 17.32 21.12 17 20.64C16.48 19.88 16.98 18.78 17.82 18.9C17.82 18.9 18.12 18.94 18.2 18.94C19.52 19.06 20.86 18.86 22.08 18.32C23.24 17.78 23.68 17.18 23.62 16.7C23.6 16.56 23.52 16.42 23.42 16.3C23.1 16.04 22.72 15.86 22.32 15.78C22.14 15.72 22.02 15.7 21.88 15.66C21.64 15.58 21.52 15.52 21.5 15.06C21.48 14.86 21.46 14.18 21.44 13.88C21.42 13.38 21.36 12.7 20.94 12.42C20.84 12.34 20.7 12.3 20.58 12.3C20.5 12.3 20.44 12.3 20.36 12.32C20.14 12.36 19.96 12.48 19.8 12.64C19.4 13 18.88 13.18 18.34 13.14C18.04 13.12 17.74 13.08 17.38 13.06C17.32 13.06 17.24 13.06 17.18 13.04C16.22 13.06 15.44 13.78 15.32 14.74C15.12 16.16 16.14 16.88 16.44 17.32C16.48 17.38 16.52 17.44 16.52 17.52C16.52 17.6 16.48 17.68 16.42 17.72C15.6 18.64 15.3 19.92 15.62 21.12C15.66 21.26 15.7 21.4 15.76 21.54C16.5 23.28 18.82 24.1 21.08 23.36C21.38 23.26 21.66 23.14 21.94 23C22.44 22.76 22.88 22.42 23.26 22.02C23.84 21.44 24.22 20.68 24.36 19.86C24.42 19.4 24.32 19.24 24.2 19.16C24.1 19.1 24 19.08 23.88 19.1C23.82 18.74 23.72 18.4 23.58 18.08C22.94 18.56 22.2 18.94 21.42 19.16C20.48 19.42 19.52 19.52 18.54 19.48C17.92 19.42 17.5 19.24 17.34 19.76C18.28 20.08 19.28 20.18 20.28 20.06C20.3 20.06 20.34 20.08 20.34 20.1C20.34 20.12 20.32 20.14 20.3 20.16C20.22 20.14 19.06 20.68 17.22 20.1ZM13.84 11.88C14.6 11.34 15.48 10.96 16.38 10.76C17.42 10.52 18.48 10.52 19.52 10.76C19.56 10.76 19.58 10.7 19.54 10.68C19 10.4 18.42 10.24 17.8 10.22C17.78 10.22 17.76 10.2 17.76 10.18V10.16C17.86 10.04 17.96 9.92 18.08 9.84C18.1 9.82 18.1 9.8 18.08 9.8L18.06 9.78C17.32 9.86 16.62 10.1 15.98 10.52C15.96 10.52 15.94 10.52 15.94 10.52V10.5C15.98 10.32 16.06 10.14 16.16 9.96C16.16 9.94 16.16 9.92 16.14 9.92H16.12C15.22 10.42 14.42 11.08 13.76 11.86C13.74 11.88 13.74 11.9 13.76 11.9C13.8 11.9 13.82 11.9 13.84 11.88ZM19.84 16.7C19.96 16.78 20.14 16.76 20.24 16.64C20.3 16.52 20.22 16.38 20.06 16.3C19.94 16.22 19.76 16.24 19.66 16.36C19.6 16.46 19.68 16.62 19.84 16.7ZM20.34 14.88C20.38 15.08 20.46 15.28 20.58 15.44C20.7 15.42 20.84 15.42 20.96 15.44C21.04 15.22 21.04 14.98 20.98 14.76C20.88 14.34 20.76 14.1 20.52 14.14C20.26 14.18 20.24 14.48 20.34 14.88ZM20.88 15.84C20.72 15.8 20.54 15.88 20.48 16.06C20.44 16.22 20.52 16.4 20.7 16.46C20.88 16.52 21.04 16.42 21.1 16.24C21.1 16.22 21.12 16.18 21.12 16.16C21.12 16 21.02 15.86 20.88 15.84Z" fill="black" />
                            <path d="M16.66 15.8C16.62 15.8 16.6 15.78 16.6 15.76C16.58 15.68 16.7 15.58 16.8 15.48C17.14 15.22 17.6 15.18 17.98 15.34C18.16 15.42 18.32 15.54 18.42 15.7C18.46 15.76 18.46 15.82 18.44 15.84C18.4 15.88 18.3 15.84 18.12 15.76C17.92 15.66 17.68 15.6 17.46 15.62C17.2 15.66 16.92 15.72 16.66 15.8ZM18.38 16.16C18.22 16 18 15.92 17.8 15.96C17.64 15.98 17.5 16.04 17.38 16.14C17.32 16.18 17.28 16.24 17.28 16.32C17.28 16.34 17.28 16.36 17.3 16.36C17.32 16.36 17.32 16.38 17.34 16.38C17.4 16.38 17.46 16.36 17.5 16.34C17.74 16.26 17.98 16.22 18.22 16.26C18.34 16.28 18.38 16.28 18.42 16.24C18.4 16.2 18.4 16.18 18.38 16.16Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_11766_122079">
                              <rect width={32} height={32} fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </div>
                      <div className="grow">
                        <div className="h-full flex flex-col">
                          <div>
                            <h3 className="inline-flex items-center gap-x-1 font-medium text-gray-800 dark:text-neutral-200">
                              Mailchimp
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                              Send email newsletters and manage subscribers in Mailchimp.
                            </p>
                          </div>
                          <div className="pt-1 mt-auto">
                            <span className="inline-flex items-center gap-x-2 text-sm font-medium group-disabled:opacity-50 group-disabled:pointer-events-none text-blue-600 group-hover:text-blue-700 group-hover:underline group-hover:decoration-2 dark:text-blue-500 dark:group-hover:text-blue-400">
                              Install now
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a className="after:absolute after:inset-0 after:z-10" href="#" />
                  </div>
                  {/* End Card */}
                  {/* Card */}
                  <div className="p-4 group relative flex flex-col border border-gray-200 bg-white dark:bg-neutral-800 dark:border-neutral-700/50 rounded-lg">
                    <div className="h-full flex gap-x-5">
                      <div className="shrink-0 size-8">
                        <svg className="shrink-0 size-8" width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M32.8875 15.3054C32.9242 16.2093 32.8209 17.1099 32.5811 17.9792C32.3447 18.8486 31.9716 19.6695 31.4787 20.4141C30.989 21.1593 30.3861 21.8167 29.6935 22.3607L29.6769 22.3745L23.019 27.563L19.7451 30.1433L17.7501 31.7089C17.6335 31.8024 17.5036 31.8716 17.3671 31.9201C17.2305 31.9686 17.084 31.9929 16.9374 31.9929C16.7942 31.9929 16.6477 31.9686 16.5111 31.9201C16.3745 31.8716 16.2447 31.8024 16.1281 31.7089L14.1331 30.1433L10.8591 27.563L4.24125 22.4057L4.20129 22.378L4.18796 22.3641C3.49187 21.8203 2.88904 21.1623 2.39611 20.4176C1.90319 19.6729 1.53016 18.8486 1.29036 17.9792C1.05056 17.1099 0.947313 16.2059 0.98395 15.3019C1.02392 14.3979 1.20044 13.5078 1.51018 12.6626L1.55348 12.5414L5.90654 0.747936C5.92875 0.69021 5.95539 0.634792 5.98648 0.581684C6.01534 0.528576 6.04976 0.478931 6.08972 0.43275C6.12747 0.38426 6.16855 0.339234 6.21295 0.297671C6.25736 0.258417 6.30399 0.221472 6.35284 0.186836C6.45609 0.121028 6.56267 0.0725381 6.67924 0.0448295C6.79248 0.0136573 6.91238 -0.000196993 7.02895 0.00673016C7.14885 0.0136573 7.26542 0.0379024 7.37533 0.0829289C7.48524 0.124492 7.59181 0.186836 7.68507 0.263035C7.72948 0.302289 7.77278 0.343852 7.81496 0.387724C7.85493 0.433905 7.89046 0.483549 7.92154 0.536658C7.95485 0.587457 7.98371 0.641719 8.00814 0.699446C8.03256 0.754863 8.05254 0.812589 8.06809 0.872625L11.0023 10.2139H22.8792L25.8134 0.872625C25.8289 0.812589 25.85 0.754863 25.8767 0.699446C25.9011 0.644029 25.93 0.589766 25.9633 0.536658C25.9944 0.485858 26.0299 0.437368 26.0699 0.391187C26.1098 0.345006 26.1531 0.302289 26.1997 0.263035C26.293 0.186836 26.3962 0.127955 26.5062 0.0829289C26.6194 0.0413659 26.736 0.0171209 26.8525 0.0101937C26.9724 0.00326659 27.089 0.0136573 27.2056 0.0448295C27.3188 0.0760017 27.4287 0.124492 27.5286 0.1903C27.5797 0.222627 27.6275 0.259571 27.6719 0.301134C27.7163 0.340388 27.7573 0.38426 27.7951 0.43275C27.8328 0.48124 27.8673 0.532039 27.8983 0.585148C27.9272 0.638256 27.9527 0.693673 27.9749 0.751399L32.3213 12.5483L32.3646 12.6696C32.6744 13.5112 32.8509 14.4014 32.8875 15.3054Z" fill="#E24329" />
                          <path d="M32.8909 15.309C32.9275 16.2095 32.8243 17.1135 32.5845 17.9829C32.3447 18.8523 31.9717 19.6766 31.4787 20.4213C30.9858 21.1659 30.383 21.824 29.6902 22.3678L29.6736 22.3816L23.0157 27.5701C23.0157 27.5701 20.1881 25.3499 16.9374 22.7903L26.4795 15.2813C26.9092 14.9453 27.3588 14.6371 27.8218 14.3531C28.2847 14.0656 28.7643 13.8093 29.2539 13.5807C29.7468 13.3521 30.2498 13.1477 30.7593 12.978C31.2722 12.8048 31.7918 12.6628 32.3214 12.5485L32.3647 12.6698C32.6744 13.5149 32.8509 14.405 32.8909 15.309Z" fill="#FC6D26" />
                          <path d="M16.9374 22.7903C20.1881 25.343 23.0191 27.5701 23.0191 27.5701L19.7451 30.1504L17.7501 31.716C17.6335 31.8095 17.5036 31.8788 17.3671 31.9273C17.2305 31.9758 17.084 32 16.9374 32C16.7942 32 16.6477 31.9758 16.5111 31.9273C16.3746 31.8788 16.2447 31.8095 16.1281 31.716L14.1331 30.1504L10.8591 27.5701C10.8591 27.5701 13.6868 25.343 16.9374 22.7903Z" fill="#FCA326" />
                          <path d="M16.9374 22.7834C13.6834 25.343 10.8591 27.5631 10.8591 27.5631L4.24125 22.4059L4.20129 22.3782L4.18796 22.3643C3.49187 21.8205 2.88904 21.1625 2.39611 20.4178C1.90319 19.6731 1.53016 18.8488 1.29036 17.9794C1.05056 17.1101 0.947313 16.2061 0.98395 15.3021C1.02392 14.3981 1.20044 13.5079 1.51018 12.6628L1.55348 12.5416C2.08304 12.6559 2.60261 12.7979 3.11552 12.9711C3.6251 13.1443 4.12801 13.3452 4.62094 13.5772C5.11053 13.8058 5.59014 14.0656 6.05309 14.3496C6.51604 14.6336 6.96233 14.9453 7.39531 15.2813L16.9374 22.7834Z" fill="#FC6D26" />
                        </svg>
                      </div>
                      <div className="grow">
                        <div className="h-full flex flex-col">
                          <div>
                            <h3 className="inline-flex items-center gap-x-1 font-medium text-gray-800 dark:text-neutral-200">
                              Gitlab
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                              Link git merge requests, branches, and commits to Preline.
                            </p>
                          </div>
                          <div className="pt-1 mt-auto">
                            <span className="inline-flex items-center gap-x-2 text-sm font-medium group-disabled:opacity-50 group-disabled:pointer-events-none text-gray-600 dark:text-neutral-400">
                              Coming soon
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Grid */}
              </div>
              {/* End Body */}
              {/* Footer */}
              <div className="mt-3 p-5 text-center bg-white border border-gray-200 rounded-lg dark:bg-neutral-800 dark:border-neutral-700/50">
                <div className="mb-3 flex justify-center items-center gap-x-1.5">
                  {/* Icon */}
                  <div className="flex shrink-0 justify-center items-center">
                    <svg className="shrink-0 size-5 rounded-full" width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0_12670_125260)">
                        <path d="M20.9373 16.007C20.9379 17.1608 20.7297 18.3053 20.3229 19.385C19.2428 19.7917 18.0981 20.0002 16.9439 20.0004H16.9304C15.7419 19.9989 14.6032 19.7816 13.5524 19.3855C13.1454 18.3056 12.937 17.161 12.9374 16.007V15.993C12.9369 14.8394 13.1448 13.6952 13.5512 12.6155C14.6313 12.208 15.7762 11.9995 16.9306 12H16.9441C18.0983 11.9994 19.2431 12.2079 20.3231 12.6154C20.7299 13.6949 20.938 14.8392 20.9374 15.9929V16.0069L20.9373 16.007ZM32.7152 13.3334H23.3757L29.9793 6.72925C29.461 6.00115 28.8828 5.31757 28.2508 4.68563V4.68512C27.6188 4.05386 26.9354 3.47621 26.2077 2.95813L19.6036 9.56225V0.22275C18.7252 0.074991 17.8361 0.000484612 16.9454 0L16.9289 0C16.0229 0.0005 15.1356 0.0775 14.2708 0.22275V9.56225L7.66669 2.95813C6.93887 3.47607 6.25577 4.05413 5.62456 4.68625L5.62106 4.68875C4.99013 5.3199 4.41277 6.00242 3.89494 6.72925L10.4996 13.3334H1.16019C1.16019 13.3334 0.937439 15.0875 0.937439 15.9945V16.0055C0.937439 16.9125 1.01431 17.8014 1.16019 18.6666H10.4997L3.89506 25.2708C4.93402 26.7288 6.20869 28.0034 7.66669 29.0424L14.2708 22.4377V31.7778C15.1482 31.9248 16.0362 31.9991 16.9258 32H16.9484C17.8381 31.9992 18.7261 31.9249 19.6034 31.7778V22.4377L26.2082 29.0424C26.9357 28.5241 27.619 27.9463 28.2508 27.3149L28.2523 27.3134C28.8835 26.6814 29.4611 25.9982 29.9793 25.2708L23.3747 18.6666H32.7152C32.8606 17.8029 32.9364 16.9166 32.9374 16.0116V15.9884C32.9364 15.0834 32.8606 14.1971 32.7152 13.3334Z" fill="#FF4A00" />
                      </g>
                      <defs>
                        <clipPath id="clip0_12670_125260">
                          <rect width={32} height={32} fill="white" transform="translate(0.937439)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  {/* End Icon */}
                  {/* Icon */}
                  <div className="flex shrink-0 justify-center items-center">
                    <svg className="shrink-0 size-5 rounded-full" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M27.7334 17.5935C27.7303 17.8744 27.6166 18.1428 27.4169 18.3403C27.2172 18.5379 26.9476 18.6487 26.6667 18.6487C26.3858 18.6487 26.1162 18.5379 25.9165 18.3403C25.7168 18.1428 25.603 17.8744 25.6 17.5935V8C25.603 7.7191 25.7168 7.45073 25.9165 7.25317C26.1162 7.05561 26.3858 6.9448 26.6667 6.9448C26.9476 6.9448 27.2172 7.05561 27.4169 7.25317C27.6166 7.45073 27.7303 7.7191 27.7334 8V17.5935ZM27.3611 24.2701C27.1963 24.4112 23.2449 27.727 16 27.727C8.75525 27.727 4.804 24.4111 4.63912 24.27C4.42437 24.0859 4.29155 23.8239 4.26986 23.5419C4.24818 23.2598 4.33941 22.9807 4.5235 22.7659C4.70719 22.5514 4.96845 22.4186 5.24996 22.3965C5.53148 22.3744 5.81025 22.4649 6.02513 22.6481C6.08775 22.7006 9.61625 25.5935 16.0001 25.5935C22.4641 25.5935 25.938 22.6798 25.9724 22.6504C26.4188 22.267 27.0934 22.3185 27.4765 22.766C27.6606 22.9808 27.7519 23.2599 27.7303 23.542C27.7087 23.824 27.5759 24.086 27.3611 24.2701ZM4.26662 8C4.26967 7.7191 4.38339 7.45073 4.5831 7.25317C4.78281 7.05561 5.05239 6.9448 5.33331 6.9448C5.61423 6.9448 5.88381 7.05561 6.08353 7.25317C6.28324 7.45073 6.39696 7.7191 6.4 8V17.5935C6.39696 17.8744 6.28324 18.1428 6.08353 18.3403C5.88381 18.5379 5.61423 18.6487 5.33331 18.6487C5.05239 18.6487 4.78281 18.5379 4.5831 18.3403C4.38339 18.1428 4.26967 17.8744 4.26662 17.5935V8ZM9.60013 5.86662C9.60441 5.58657 9.71867 5.31943 9.91824 5.1229C10.1178 4.92636 10.3867 4.81621 10.6667 4.81621C10.9468 4.81621 11.2157 4.92636 11.4153 5.1229C11.6148 5.31943 11.7291 5.58657 11.7334 5.86662V20.1168C11.7291 20.3968 11.6148 20.6639 11.4153 20.8605C11.2157 21.057 10.9468 21.1672 10.6667 21.1672C10.3867 21.1672 10.1178 21.057 9.91824 20.8605C9.71867 20.6639 9.60441 20.3968 9.60013 20.1168V5.86662ZM14.9334 5.32688C14.9334 5.1868 14.9609 5.04809 15.0145 4.91868C15.0681 4.78926 15.1467 4.67167 15.2457 4.57262C15.3448 4.47357 15.4624 4.39501 15.5918 4.34141C15.7212 4.28781 15.8599 4.26023 16 4.26025C16.1401 4.26022 16.2788 4.28778 16.4082 4.34137C16.5377 4.39496 16.6553 4.47353 16.7543 4.57258C16.8534 4.67163 16.932 4.78922 16.9856 4.91865C17.0392 5.04807 17.0668 5.18679 17.0667 5.32688V20.7935C17.0637 21.0744 16.95 21.3428 16.7503 21.5403C16.5506 21.7379 16.281 21.8487 16.0001 21.8487C15.7191 21.8487 15.4496 21.7379 15.2499 21.5403C15.0501 21.3428 14.9364 21.0744 14.9334 20.7935V5.32688ZM20.2668 5.86662C20.271 5.58657 20.3853 5.31943 20.5849 5.1229C20.7844 4.92636 21.0533 4.81621 21.3334 4.81621C21.6135 4.81621 21.8823 4.92636 22.0819 5.1229C22.2814 5.31943 22.3957 5.58657 22.4 5.86662V20.1168C22.3957 20.3968 22.2814 20.6639 22.0819 20.8605C21.8823 21.057 21.6135 21.1672 21.3334 21.1672C21.0533 21.1672 20.7844 21.057 20.5849 20.8605C20.3853 20.6639 20.271 20.3968 20.2668 20.1168V5.86662ZM28 0H4C1.79087 0 0 1.79087 0 4V28C0 30.209 1.79087 32 4 32H28C30.2091 32 32 30.209 32 28V4C32 1.79087 30.2091 0 28 0Z" fill="#1F8DED" />
                    </svg>
                  </div>
                  {/* End Icon */}
                  {/* Icon */}
                  <div className="flex shrink-0 justify-center items-center">
                    <svg className="shrink-0 size-5 rounded-full" width={33} height={32} viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M32.3386 25.481C33.0617 26.7366 33.1317 28.0569 32.5309 29.1006C31.9309 30.1452 30.7569 30.7434 29.31 30.7434H26.5831C26.6155 30.2349 26.637 29.7222 26.637 29.2057C26.637 28.6273 26.6101 28.056 26.5706 27.4866L28.3643 27.4848C28.8053 27.4848 29.1618 27.1265 29.1618 26.6845C29.1617 26.5513 29.1287 26.4202 29.0658 26.3029L17.6337 6.43244C17.5647 6.30951 17.4641 6.20719 17.3424 6.13601C17.2207 6.06483 17.0823 6.02736 16.9413 6.02746C16.8038 6.0275 16.6688 6.06309 16.5491 6.13076C16.4295 6.19844 16.3295 6.29591 16.2587 6.41369L14.4435 9.56893C19.96 13.7275 23.6686 20.1701 24.1761 27.4848C24.2156 28.0533 24.2425 28.6246 24.2425 29.2039C24.2425 29.7203 24.221 30.2323 24.1895 30.7416H15.2841C15.3326 30.2349 15.3605 29.7231 15.3605 29.2039C15.3605 28.6228 15.3263 28.0498 15.2635 27.4848C14.8235 23.4592 12.8528 19.8916 9.95081 17.374L8.70048 19.5459C10.8929 21.5864 12.3893 24.3654 12.7962 27.4848C12.8699 28.0479 12.9112 28.621 12.9112 29.2039C12.9112 29.7231 12.8771 30.2368 12.8187 30.7416H4.56353C3.11659 30.7416 1.94264 30.1425 1.34266 29.0979C0.741815 28.0542 0.811812 26.7348 1.53491 25.4783L3.22984 22.5736C4.19808 23.0945 5.07307 23.7725 5.8191 24.5801L4.80877 26.301C4.74599 26.4185 4.71294 26.5495 4.71252 26.6827C4.71233 26.7876 4.73281 26.8915 4.77281 26.9885C4.81281 27.0854 4.87154 27.1736 4.94563 27.2478C5.01972 27.3221 5.10773 27.381 5.20461 27.4212C5.30149 27.4613 5.40535 27.482 5.51024 27.4821L9.5142 27.4839C9.17834 25.5645 8.29275 23.8328 7.02455 22.4613C6.27721 21.6557 5.40425 20.9738 4.43241 20.4521L8.90347 12.6837C9.85279 13.2144 10.7546 13.826 11.5989 14.5116C15.4521 17.6381 18.0541 22.2557 18.5256 27.4831H20.922C20.4332 21.3718 17.3625 15.9828 12.8052 12.4152C11.9494 11.7449 11.0438 11.1408 10.0963 10.6081L13.9126 3.97779C14.6347 2.72122 15.7393 2 16.9413 2C18.1421 2 19.2459 2.72122 19.969 3.97779L32.3386 25.481Z" className="fill-black dark:fill-neutral-200" fill="currentColor" />
                    </svg>
                  </div>
                  {/* End Icon */}
                </div>
                <p className="text-sm text-gray-800 dark:text-neutral-200">
                  What integration should come next?
                </p>
                <p>
                  <a className="font-medium text-sm text-gray-600 underline decoration-2 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 dark:focus:text-blue-400" href="#">
                    Let us know
                  </a>
                </p>
              </div>
              {/* End Footer */}
              <div className="mt-5">
                <div className="lg:hidden flex justify-center items-center">
                  <button type="button" className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500" aria-haspopup="dialog" aria-expanded="false" aria-controls="hs-pro-chat-sidebar" data-hs-overlay="#hs-pro-chat-sidebar">
                    Show chat window
                    <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End Cards Grid */}
        </div>
      </div>
      {/* End Tab Content */}
    </>
  )
}

export default Route


