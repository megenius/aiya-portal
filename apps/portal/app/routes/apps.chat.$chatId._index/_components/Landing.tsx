import React from 'react';

interface LandingProps {

}

const Landing: React.FC<LandingProps> = () => {
  return (
    <div
      id="hs-pro-tabs-chct-1"
      // className="hidden"
      role="tabpanel"
      aria-labelledby="hs-pro-tabs-chct-item-1"
    >
      <div className="relative h-dvh flex flex-col justify-end">
        {/* Header */}
        <header className="sticky top-0 inset-x-0 z-[9] p-2 sm:px-5 flex justify-between gap-x-2 xl:grid xl:grid-cols-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
          <div className="lg:hidden w-20 sm:w-auto flex items-center">
            {/* Sidebar Toggle */}
            <div className="sm:-ms-3 ">
              <button
                type="button"
                className="flex justify-center items-center gap-x-1 py-1.5 px-2.5 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                data-hs-overlay="#hs-pro-chat-sidebar"
                aria-controls="hs-pro-chat-sidebar"
                aria-label="Toggle navigation"
              >
                <svg
                  className="shrink-0 size-4 -ms-1"
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
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Chat
              </button>
            </div>
            {/* End Sidebar Toggle */}
          </div>
          {/* Avatar */}
          <div>
            <button
              type="button"
              className="truncate flex items-center gap-x-3.5 focus:outline-none"
              data-hs-overlay="#hs-pro-chhds1"
              aria-controls="hs-pro-chhds1"
              aria-label="Toggle navigation"
            >
              <span className="lg:block hidden relative shrink-0">
                <img
                  className="shrink-0 size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                  alt="Avatar"
                />
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
              <button
                type="button"
                className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                data-hs-overlay="#hs-pro-chhsn"
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
                  <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                  <path d="M22 8c0-2.3-.8-4.3-2-6" />
                </svg>
                <span className="sr-only">Snooze</span>
              </button>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                role="tooltip"
              >
                Snooze
              </span>
            </div>
            {/* End Button */}
            {/* Button */}
            <div className="hs-tooltip [--placement:bottom] hidden sm:inline-block">
              <button
                type="button"
                className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                data-hs-overlay="#hs-pro-chhtgm"
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
                  <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                  <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                </svg>
                <span className="sr-only">Tags</span>
              </button>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                role="tooltip"
              >
                Tags
              </span>
            </div>
            {/* End Button */}
            {/* More Dropdown */}
            <div className="hs-dropdown [--strategy:absolute] [--placement:top-right] relative inline-flex">
              <button
                id="hs-pro-cht1hmd"
                type="button"
                className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
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
              {/* More Dropdown */}
              <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-[11] bg-white rounded-xl shadow-lg dark:bg-neutral-950"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-pro-cht1hmd"
              >
                <div className="p-1 space-y-0.5">
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                    Mark as unread
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                      <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                    </svg>
                    Mark as read
                  </button>
                  <button
                    type="button"
                    className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    data-hs-overlay="#hs-pro-chhsn"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path d="M4 2C2.8 3.7 2 5.7 2 8" />
                      <path d="M22 8c0-2.3-.8-4.3-2-6" />
                    </svg>
                    Snooze
                  </button>
                  <button
                    type="button"
                    className="sm:hidden w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    data-hs-overlay="#hs-pro-chhtgm"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
                      <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
                    </svg>
                    Tags
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    data-hs-overlay="#hs-pro-chhsh"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1={12} x2={12} y1={2} y2={15} />
                    </svg>
                    Share
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    data-hs-overlay="#hs-pro-chhsp"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
                      <line x1={12} x2={12} y1={8} y2={12} />
                      <line x1={12} x2="12.01" y1={16} y2={16} />
                    </svg>
                    Spam
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    data-hs-overlay="#hs-pro-chhbu"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path d="m4.9 4.9 14.2 14.2" />
                    </svg>
                    Block user
                  </button>
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    data-hs-overlay="#hs-pro-chhdl"
                  >
                    <svg
                      className="shrink-0 size-3.5"
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
              <button
                type="button"
                className="hidden lg:flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                data-hs-overlay="#hs-pro-chhds1"
                aria-controls="hs-pro-chhds1"
                aria-label="Toggle navigation"
              >
                <svg
                  className="xl:hidden shrink-0 size-4"
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
                  <rect width={18} height={18} x={3} y={3} rx={2} />
                  <path d="M15 3v18" />
                  <path d="m10 15-3-3 3-3" />
                </svg>
                <svg
                  className="hidden xl:block shrink-0 size-4"
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
                  <rect width={18} height={18} x={3} y={3} rx={2} />
                  <path d="M15 3v18" />
                  <path d="m8 9 3 3-3 3" />
                </svg>
              </button>
              <button
                type="button"
                className="lg:hidden relative shrink-0 flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                data-hs-overlay="#hs-pro-chhds1"
                aria-controls="hs-pro-chhds1"
                aria-label="Toggle navigation"
              >
                <img
                  className="shrink-0 size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                  alt="Avatar"
                />
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
              <div className="sticky top-0 inset-x-0 z-[8] max-w-lg mx-auto text-center">
                <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">
                  Today
                </span>
              </div>
              {/* End Time */}
              {/* List */}
              <div className="w-full space-y-5">
                {/* Item */}
                <div className="max-w-md flex gap-x-2">
                  <div className="shrink-0 mt-auto">
                    <img
                      className="shrink-0 size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                  </div>
                  {/* Chat Bubble */}
                  <div>
                    <p className="mb-1.5 ps-2.5 text-xs text-gray-400 dark:text-neutral-500">
                      Costa
                    </p>
                    <div className="space-y-1">
                      {/* Message */}
                      <div
                        className="group flex justify-start gap-x-2"
                        style={{ wordBreak: "break-word" }}
                      >
                        <div className="order-1 bg-white shadow-sm dark:bg-neutral-800 dark:border-neutral-700 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                          <div className="text-sm text-gray-800 dark:text-neutral-200">
                            Hi, I'd like to ask some questions. Can I use Preline
                            UI on a client project?
                            <a
                              className="group block mt-3 mb-1 focus:outline-none"
                              href="https://preline.co/"
                              target="_blank"
                            >
                              <span className="text-blue-600 underline dark:text-blue-500">
                                https://preline.co/
                              </span>
                              <div className="p-2 ps-2.5 mt-2 relative cursor-default bg-blue-50 rounded-lg overflow-hidden group-focus:scale-[.98] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full before:bg-blue-600 dark:bg-blue-500/10 dark:before:bg-blue-500">
                                <p className="font-medium text-xs text-blue-600 dark:text-blue-500">
                                  Preline
                                </p>
                                <p className="font-semibold text-xs text-gray-800 dark:text-neutral-200">
                                  Preline UI, crafted with Tailwind CSS
                                </p>
                                <p className="text-xs text-gray-800 dark:text-neutral-200">
                                  Preline UI is an open-source set of prebuilt UI
                                  components based on the utility-first Tailwind
                                  CSS framework.
                                </p>
                                <img
                                  className="mt-1 rounded-md"
                                  src="https://preline.co/hero-image-2.jpg"
                                  alt="Website Preview Image"
                                />
                              </div>
                            </a>
                            <span>
                              <span className="text-[11px] text-gray-400 dark:text-neutral-600 italic">
                                11:27
                              </span>
                            </span>
                          </div>
                        </div>
                        {/* More Dropdown */}
                        <div className="order-2 lg:opacity-0 lg:group-hover:opacity-100">
                          <div className="hs-dropdown [--strategy:absolute] [--auto-close:inside]  relative inline-flex">
                            <button
                              id="hs-pro-cht1cmd_1"
                              type="button"
                              className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <svg
                                className="shrink-0 size-4 rounded-full"
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
                            {/* More Dropdown */}
                            <div
                              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-[8] bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="hs-pro-cht1cmd_1"
                            >
                              <div className="p-1">
                                <a
                                  className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href="#"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
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
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                    <path d="m15 5 4 4" />
                                  </svg>
                                  Edit
                                </a>
                                <a
                                  className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href="#"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
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
                                    <path d="m10 7-3 3 3 3" />
                                    <path d="M17 13v-1a2 2 0 0 0-2-2H7" />
                                  </svg>
                                  Reply
                                </a>
                                <a
                                  className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href="#"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
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
                      </div>
                      {/* End Message */}
                    </div>
                  </div>
                  {/* End Chat Bubble */}
                </div>
                {/* End Item */}
                {/* Item */}
                <div className="max-w-md ms-auto text-end flex justify-end gap-x-2">
                  {/* Chat Bubble */}
                  <div>
                    <p className="mb-1.5 pe-2.5 text-xs text-gray-400 dark:text-neutral-500">
                      James
                    </p>
                    <div className="space-y-1">
                      {/* Message */}
                      <div
                        className="group flex justify-end gap-x-2"
                        style={{ wordBreak: "break-word" }}
                      >
                        <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                          <div className="text-sm text-gray-800 dark:text-neutral-200">
                            Hi Costa,
                            <span>
                              <span className="text-[11px] text-end text-blue-600 dark:text-blue-500 italic">
                                12:44
                              </span>
                              <svg
                                className="inline-block shrink-0 size-4 text-blue-600 dark:text-blue-500"
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
                                <path d="M18 6 7 17l-5-5" />
                                <path d="m22 10-7.5 7.5L13 16" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        {/* More Dropdown */}
                        <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                          <div className="hs-dropdown [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                            <button
                              id="hs-pro-cht1cmd_2"
                              type="button"
                              className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <svg
                                className="shrink-0 size-4 rounded-full"
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
                            {/* More Dropdown */}
                            <div
                              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-[8] bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="hs-pro-cht1cmd_2"
                            >
                              <div className="p-1">
                                <a
                                  className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href="#"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
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
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                    <path d="m15 5 4 4" />
                                  </svg>
                                  Edit
                                </a>
                                <a
                                  className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href="#"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
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
                                    <path d="m10 7-3 3 3 3" />
                                    <path d="M17 13v-1a2 2 0 0 0-2-2H7" />
                                  </svg>
                                  Reply
                                </a>
                                <a
                                  className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href="#"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
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
                      </div>
                      {/* End Message */}
                      {/* Message */}
                      <div
                        className="group flex justify-end gap-x-2"
                        style={{ wordBreak: "break-word" }}
                      >
                        <div className="order-2 text-start bg-blue-100 dark:bg-blue-500/20 inline-block rounded-xl pt-2 pb-1.5 px-2.5">
                          <div className="text-sm text-gray-800 dark:text-neutral-200">
                            <div className="mb-2 py-1 ps-2.5 pe-1.5 relative cursor-default bg-blue-50 before:bg-blue-600 dark:bg-blue-500/10 dark:before:bg-blue-500 rounded-lg overflow-hidden group-focus:scale-[.98] transition before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:h-full">
                              <blockquote>
                                <p className="font-medium text-[13px] text-blue-600 dark:text-blue-500">
                                  Costa Quinn
                                </p>
                                <p className="text-[13px] text-gray-800 dark:text-neutral-200">
                                  Hi, I'd like to ask some questions. Can I use
                                  Preline UI on a client project?
                                </p>
                              </blockquote>
                            </div>
                            Yes, you can!
                            <span>
                              <span className="text-[11px] text-end text-blue-600 dark:text-blue-500 italic">
                                12:44
                              </span>
                              <svg
                                className="inline-block shrink-0 size-4 text-blue-600 dark:text-blue-500"
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
                                <path d="M18 6 7 17l-5-5" />
                                <path d="m22 10-7.5 7.5L13 16" />
                              </svg>
                            </span>
                          </div>
                        </div>
                        {/* More Dropdown */}
                        <div className="order-1 lg:opacity-0 lg:group-hover:opacity-100">
                          <div className="hs-dropdown [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                            <button
                              id="hs-pro-cht1cmd_3"
                              type="button"
                              className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-200 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                              aria-haspopup="menu"
                              aria-expanded="false"
                              aria-label="Dropdown"
                            >
                              <svg
                                className="shrink-0 size-4 rounded-full"
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
                            {/* More Dropdown */}
                            <div
                              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-32 transition-[opacity,margin] duration opacity-0 hidden z-[8] bg-white rounded-xl shadow-lg dark:bg-neutral-800 before:h-4 before:absolute before:-top-4 before:start-0 before:w-full after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full"
                              role="menu"
                              aria-orientation="vertical"
                              aria-labelledby="hs-pro-cht1cmd_3"
                            >
                              <div className="p-1">
                                <a
                                  className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href="#"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
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
                                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                                    <path d="m15 5 4 4" />
                                  </svg>
                                  Edit
                                </a>
                                <a
                                  className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href="#"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
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
                                    <path d="m10 7-3 3 3 3" />
                                    <path d="M17 13v-1a2 2 0 0 0-2-2H7" />
                                  </svg>
                                  Reply
                                </a>
                                <a
                                  className="flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                  href="#"
                                >
                                  <svg
                                    className="shrink-0 size-3.5"
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
                      </div>
                      {/* End Message */}
                    </div>
                  </div>
                  {/* End Chat Bubble */}
                  <div className="shrink-0 mt-auto">
                    <img
                      className="shrink-0 size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                      alt="Avatar"
                    />
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
        <footer className="sticky bottom-0 inset-x-0 z-[9] bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
          <label htmlFor="hs-chat-autoheight-textarea-1" className="sr-only">
            Message
          </label>
          <div className="pb-2 ps-2">
            <textarea
              id="hs-chat-autoheight-textarea-1"
              className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-none focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
              placeholder="Message Costa"
              defaultValue={""}
            />
            <div className="pe-4 flex justify-between items-center gap-x-1">
              {/* Button Group */}
              <div className="flex items-center gap-x-1">
                {/* Button */}
                <button
                  type="button"
                  className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
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
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                  <span className="sr-only">Attach file</span>
                </button>
                {/* End Button */}
                {/* Button */}
                <button
                  type="button"
                  className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
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
                <button
                  type="button"
                  className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
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
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                    <line x1={12} x2={12} y1={19} y2={22} />
                  </svg>
                  <span className="sr-only">Send voice message</span>
                </button>
                {/* End Button */}
                {/* Send Button */}
                <button
                  type="button"
                  className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <span className="sr-only">Send</span>
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
      <aside
        id="hs-pro-chhds1"
        className="hs-overlay [--body-scroll:true] 2xl:[--overlay-backdrop:false] [--is-layout-affect:true] [--opened:2xl] [--auto-close:2xl] hs-overlay-open:translate-x-0 2xl:hs-overlay-layout-open:translate-x-0 
translate-x-full transition-all duration-300 transform
sm:w-96 w-full
hidden
fixed bottom-0 end-0 z-10 top-0 h-full
bg-white border-s border-gray-200
2xl:block 2xl:translate-x-full 2xl:bottom-0
dark:bg-neutral-800 dark:border-neutral-700"
        tabIndex={-1}
        aria-labelledby="hs-pro-chhds1-label"
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="py-3 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
            <h3
              id="hs-pro-chhds1-label"
              className="font-semibold text-gray-800 dark:text-neutral-200"
            >
              Details
            </h3>
            {/* Close Button */}
            <div className="absolute top-2 end-4 z-10">
              <button
                type="button"
                className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-white text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:focus:bg-neutral-700"
                aria-label="Close"
                data-hs-overlay="#hs-pro-chhds1"
              >
                <span className="sr-only">Close</span>
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
            <img
              className="shrink-0 size-16 rounded-full"
              src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
              alt="Avatar"
            />
            <div className="mt-2 w-full">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
                Costa Quinn
              </h2>
              <p className="mb-2 text-[13px] text-gray-500 dark:text-neutral-500">
                Online
              </p>
              {/* Button Group */}
              <div className="mt-4 flex justify-center items-center gap-x-3">
                <button
                  type="button"
                  className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  <svg
                    className="shrink-0 size-3.5"
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
                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                    <rect width={18} height={18} x={3} y={4} rx={2} />
                    <circle cx={12} cy={10} r={2} />
                    <line x1={8} x2={8} y1={2} y2={4} />
                    <line x1={16} x2={16} y1={2} y2={4} />
                  </svg>
                  View profile
                </button>
                <button
                  type="button"
                  className="py-2 px-2.5 min-w-32 inline-flex justify-center items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  <svg
                    className="shrink-0 size-3.5"
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
                  Send email
                </button>
              </div>
              {/* End Button Group */}
            </div>
          </div>
          {/* End Profile */}
          {/* Body */}
          <div className="overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="hs-accordion-group" data-hs-accordion-always-open="">
              {/* User Details */}
              <div
                className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active"
                id="hs-pro-chdsudc1"
              >
                <button
                  type="button"
                  className="hs-accordion-toggle p-5 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="true"
                  aria-controls="hs-pro-chdsudc1-collapse"
                >
                  <span className="text-sm font-medium">User details</span>
                  <svg
                    className="hs-accordion-active:hidden block size-4"
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
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
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
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div
                  id="hs-pro-chdsudc1-collapse"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-pro-chdsudc1"
                >
                  <div className="px-5 pb-5">
                    {/* List Item */}
                    <dl className="py-1 grid grid-cols-3 gap-x-4">
                      <dt className="col-span-1">
                        <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path d="M12 12h.01" />
                            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                            <rect width={20} height={14} x={2} y={6} rx={2} />
                          </svg>
                          Company:
                        </p>
                      </dt>
                      <dd className="col-span-2">
                        <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                          Fortex
                        </p>
                      </dd>
                    </dl>
                    {/* End List Item */}
                    {/* List Item */}
                    <dl className="py-1 grid grid-cols-3 gap-x-4">
                      <dt className="col-span-1">
                        <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx={12} cy={10} r={3} />
                          </svg>
                          Country:
                        </p>
                      </dt>
                      <dd className="col-span-2">
                        <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                          United States
                        </p>
                      </dd>
                    </dl>
                    {/* End List Item */}
                    {/* List Item */}
                    <dl className="py-1 grid grid-cols-3 gap-x-4">
                      <dt className="col-span-1">
                        <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                          <svg
                            className="shrink-0 size-3.5"
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
                          Email:
                        </p>
                      </dt>
                      <dd className="col-span-2">
                        <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                          costa.notion@gmail.com
                        </p>
                      </dd>
                    </dl>
                    {/* End List Item */}
                    {/* List Item */}
                    <dl className="py-1 grid grid-cols-3 gap-x-4">
                      <dt className="col-span-1">
                        <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                          Phone:
                        </p>
                      </dt>
                      <dd className="col-span-2">
                        <p className="font-medium text-[13px] text-gray-800 dark:text-neutral-200">
                          +1 000-00-00
                        </p>
                      </dd>
                    </dl>
                    {/* End List Item */}
                    {/* List Item */}
                    <dl className="py-1 grid grid-cols-3 gap-x-4">
                      <dt className="col-span-1">
                        <p className="inline-flex items-center gap-x-2 text-[13px] text-gray-500 dark:text-neutral-500">
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" />
                          </svg>
                          Site:
                        </p>
                      </dt>
                      <dd className="col-span-2">
                        <a
                          className="align-top text-sm text-blue-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500"
                          href="#"
                        >
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
                <button
                  type="button"
                  className="hs-accordion-toggle p-5 w-full flex justify-between items-center gap-x-3 text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
                  aria-expanded="true"
                  aria-controls="hs-pro-chdssmc1-collapse"
                >
                  <span className="text-sm font-medium">Shared media</span>
                  <svg
                    className="hs-accordion-active:hidden block size-4"
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
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hidden size-4"
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
                    <path d="M5 12h14" />
                  </svg>
                </button>
                <div
                  id="hs-pro-chdssmc1-collapse"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  role="region"
                  aria-labelledby="hs-pro-chdssmc1"
                >
                  <div className="pb-5 px-5">
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
  );
};

export default Landing;