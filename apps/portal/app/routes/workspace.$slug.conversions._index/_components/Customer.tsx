import React from 'react';

interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
      {/* Page Header */}
      <div className="flex justify-between items-center gap-x-5">
        <h2 className="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Users
        </h2>
        <div className="flex justify-end items-center gap-x-2">
          {/* Button */}
          <a
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            href="../../pro/dashboard/users-add-user.html"
          >
            <svg
              className="hidden sm:block shrink-0 size-3"
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z"
              />
            </svg>
            Add user
          </a>
          {/* End Button */}
        </div>
      </div>
      {/* End Page Header */}
      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 xl:gap-5">
        {/* Card */}
        <div className="relative overflow-hidden p-4 sm:p-5 bg-white border border-gray-200 rounded-xl shadow-xs before:absolute before:top-0 before:end-0 before:size-full before:bg-linear-to-br before:from-purple-100 before:via-transparent before:blur-xl dark:bg-neutral-800 dark:border-neutral-700 dark:before:from-purple-800/30 dark:before:via-transparent">
          <div className="relative z-10">
            {/* Header */}
            <div className="flex justify-between gap-x-3">
              {/* Icon */}
              <span className="mb-3 inline-flex justify-center items-center size-8 md:size-10 rounded-lg bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                <svg
                  className="shrink-0 size-4 md:size-5 text-purple-500"
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
              </span>
              {/* End Icon */}
              <div>
                {/* More Dropdown */}
                <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                  <button
                    id="hs-pro-dusd1"
                    type="button"
                    className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-36 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-dusd1"
                  >
                    <div className="p-1">
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="shrink-0 size-3.5 mt-0.5"
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
                          <circle cx={18} cy={5} r={3} />
                          <circle cx={6} cy={12} r={3} />
                          <circle cx={18} cy={19} r={3} />
                          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                        </svg>
                        Share stats
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="shrink-0 size-3.5 mt-0.5"
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
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1={2} x2={22} y1={2} y2={22} />
                        </svg>
                        Hide stats
                      </button>
                    </div>
                  </div>
                  {/* End Dropdown */}
                </div>
                {/* End More Dropdown */}
              </div>
            </div>
            {/* End Header */}
            <h2 className="text-sm md:text-base text-gray-800 dark:text-neutral-200">
              Total Users
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                356
              </h3>
              <div className="flex items-center -space-x-2">
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <img
                    className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
                    src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Lewis Clarke
                  </span>
                </div>
                {/* End Avatar */}
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                    L
                  </span>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Lori Hunter
                  </span>
                </div>
                {/* End Avatar */}
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <img
                    className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
                    src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Ella Lauda
                  </span>
                </div>
                {/* End Avatar */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="relative overflow-hidden p-4 sm:p-5 bg-white border border-gray-200 rounded-xl shadow-xs before:absolute before:top-0 before:end-0 before:size-full before:bg-linear-to-br before:from-teal-100 before:via-transparent before:blur-xl dark:bg-neutral-800 dark:border-neutral-700 dark:before:from-teal-800/30 dark:before:via-transparent">
          <div className="relative z-10">
            {/* Header */}
            <div className="flex justify-between gap-x-3">
              {/* Icon */}
              <span className="mb-3 inline-flex justify-center items-center size-8 md:size-10 rounded-lg bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                <svg
                  className="shrink-0 size-4 md:size-5 text-teal-500"
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
                  <polyline points="16 11 18 13 22 9" />
                </svg>
              </span>
              {/* End Icon */}
              <div>
                {/* More Dropdown */}
                <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                  <button
                    id="hs-pro-dusd2"
                    type="button"
                    className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-36 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-dusd2"
                  >
                    <div className="p-1">
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="shrink-0 size-3.5 mt-0.5"
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
                          <circle cx={18} cy={5} r={3} />
                          <circle cx={6} cy={12} r={3} />
                          <circle cx={18} cy={19} r={3} />
                          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                        </svg>
                        Share stats
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="shrink-0 size-3.5 mt-0.5"
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
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1={2} x2={22} y1={2} y2={22} />
                        </svg>
                        Hide stats
                      </button>
                    </div>
                  </div>
                  {/* End Dropdown */}
                </div>
                {/* End More Dropdown */}
              </div>
            </div>
            {/* End Header */}
            <h2 className="text-sm md:text-base text-gray-800 dark:text-neutral-200">
              Active users
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                239
              </h3>
              <div className="flex items-center -space-x-2">
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <img
                    className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
                    src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Lewis Clarke
                  </span>
                </div>
                {/* End Avatar */}
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <img
                    className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
                    src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Ella Lauda
                  </span>
                </div>
                {/* End Avatar */}
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                    O
                  </span>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Ols Schols
                  </span>
                </div>
                {/* End Avatar */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="relative overflow-hidden p-4 sm:p-5 bg-white border border-gray-200 rounded-xl shadow-xs before:absolute before:top-0 before:end-0 before:size-full before:bg-linear-to-br before:from-blue-100 before:via-transparent before:blur-xl dark:bg-neutral-800 dark:border-neutral-700 dark:before:from-blue-800/30 dark:before:via-transparent">
          <div className="relative z-10">
            {/* Header */}
            <div className="flex justify-between gap-x-3">
              {/* Icon */}
              <span className="mb-3 inline-flex justify-center items-center size-8 md:size-10 rounded-lg bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                <svg
                  className="shrink-0 size-4 md:size-5 text-blue-500"
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
                  <path d="M9 14 4 9l5-5" />
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
                </svg>
              </span>
              {/* End Icon */}
              <div>
                {/* More Dropdown */}
                <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                  <button
                    id="hs-pro-dusd3"
                    type="button"
                    className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-36 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-dusd3"
                  >
                    <div className="p-1">
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="shrink-0 size-3.5 mt-0.5"
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
                          <circle cx={18} cy={5} r={3} />
                          <circle cx={6} cy={12} r={3} />
                          <circle cx={18} cy={19} r={3} />
                          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                        </svg>
                        Share stats
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="shrink-0 size-3.5 mt-0.5"
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
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1={2} x2={22} y1={2} y2={22} />
                        </svg>
                        Hide stats
                      </button>
                    </div>
                  </div>
                  {/* End Dropdown */}
                </div>
                {/* End More Dropdown */}
              </div>
            </div>
            {/* End Header */}
            <h2 className="text-sm md:text-base text-gray-800 dark:text-neutral-200">
              Return user rate
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                79
              </h3>
              <div className="flex items-center -space-x-2">
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <img
                    className="hs-tooltip-toggle shrink-0 size-7 border-2 border-white rounded-full dark:border-neutral-800"
                    src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                    alt="Avatar"
                  />
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Lewis Clarke
                  </span>
                </div>
                {/* End Avatar */}
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                    M
                  </span>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Mark Colbert
                  </span>
                </div>
                {/* End Avatar */}
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                    S
                  </span>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Sara Andrews
                  </span>
                </div>
                {/* End Avatar */}
              </div>
            </div>
          </div>
        </div>
        {/* End Card */}
        {/* Card */}
        <div className="relative overflow-hidden p-4 sm:p-5 bg-white border border-gray-200 rounded-xl shadow-xs before:absolute before:top-0 before:end-0 before:size-full before:bg-linear-to-br before:from-red-100 before:via-transparent before:blur-xl dark:bg-neutral-800 dark:border-neutral-700 dark:before:from-red-800/30 dark:before:via-transparent">
          <div className="relative z-10">
            {/* Header */}
            <div className="flex justify-between gap-x-3">
              {/* Icon */}
              <span className="mb-3 inline-flex justify-center items-center size-8 md:size-10 rounded-lg bg-white text-gray-700 shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                <svg
                  className="shrink-0 size-4 md:size-5 text-red-500"
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
                  <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                  <path d="M12 9v4" />
                  <path d="M12 17h.01" />
                </svg>
              </span>
              {/* End Icon */}
              <div>
                {/* More Dropdown */}
                <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                  <button
                    id="hs-pro-dusd4"
                    type="button"
                    className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                      <circle cx={12} cy={12} r={1} />
                      <circle cx={12} cy={5} r={1} />
                      <circle cx={12} cy={19} r={1} />
                    </svg>
                  </button>
                  {/* Dropdown */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-36 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-dusd4"
                  >
                    <div className="p-1">
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="shrink-0 size-3.5 mt-0.5"
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
                          <circle cx={18} cy={5} r={3} />
                          <circle cx={6} cy={12} r={3} />
                          <circle cx={18} cy={19} r={3} />
                          <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                          <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                        </svg>
                        Share stats
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                      >
                        <svg
                          className="shrink-0 size-3.5 mt-0.5"
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
                          <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                          <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                          <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                          <line x1={2} x2={22} y1={2} y2={22} />
                        </svg>
                        Hide stats
                      </button>
                    </div>
                  </div>
                  {/* End Dropdown */}
                </div>
                {/* End More Dropdown */}
              </div>
            </div>
            {/* End Header */}
            <h2 className="text-sm md:text-base text-gray-800 dark:text-neutral-200">
              Fake accounts
            </h2>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-3">
              <h3 className="text-lg md:text-2xl font-semibold text-gray-800 dark:text-neutral-200">
                2
              </h3>
              <div className="flex items-center -space-x-2">
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                    C
                  </span>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Chris Mathew
                  </span>
                </div>
                {/* End Avatar */}
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                    L
                  </span>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Lori Hunter
                  </span>
                </div>
                {/* End Avatar */}
                {/* Avatar */}
                <div className="hs-tooltip hidden sm:inline-block hover:z-10">
                  <span className="hs-tooltip-toggle flex shrink-0 justify-center items-center size-7 bg-gray-200 border-2 border-white text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
                    F
                  </span>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Finch Hoot
                  </span>
                </div>
                {/* End Avatar */}
              </div>
            </div>
          </div>
          {/* End Col */}
        </div>
        {/* End Card */}
      </div>
      {/* End Stats Grid */}
      {/* Users Table Card */}
      <div className="p-5 space-y-4 flex flex-col bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Nav Tab */}
        <nav
          className="relative  flex space-x-1 after:absolute after:bottom-0 after:inset-x-0 after:border-b-2 after:border-gray-200 dark:after:border-neutral-700"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          <button
            type="button"
            className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active "
            id="hs-pro-tabs-dut-item-all"
            aria-selected="true"
            data-hs-tab="#hs-pro-tabs-dut-all"
            aria-controls="hs-pro-tabs-dut-all"
            role="tab"
          >
            All
          </button>
          <button
            type="button"
            className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
            id="hs-pro-tabs-dut-item-validaccounts"
            aria-selected="false"
            data-hs-tab="#hs-pro-tabs-dut-validaccounts"
            aria-controls="hs-pro-tabs-dut-validaccounts"
            role="tab"
          >
            Valid accounts
          </button>
          <button
            type="button"
            className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-0 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
            id="hs-pro-tabs-dut-item-fakeaccounts"
            aria-selected="false"
            data-hs-tab="#hs-pro-tabs-dut-fakeaccounts"
            aria-controls="hs-pro-tabs-dut-fakeaccounts"
            role="tab"
          >
            Fake accounts
          </button>
        </nav>
        {/* End Nav Tab */}
        {/* Filter Group */}
        <div className="grid md:grid-cols-2 gap-y-2 md:gap-y-0 md:gap-x-5">
          <div>
            {/* Search Input */}
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
                <svg
                  className="shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
              </div>
              <input
                type="text"
                className="py-[7px] ps-10 pe-8 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:bg-white focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:bg-neutral-800 dark:focus:ring-neutral-600"
                placeholder="Search projects"
              />
              <div className="hidden absolute inset-y-0 end-0 flex items-center z-20 pe-1">
                <button
                  type="button"
                  className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                  aria-label="Close"
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
                    <circle cx={12} cy={12} r={10} />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </button>
              </div>
            </div>
            {/* End Search Input */}
          </div>
          {/* End Col */}
          <div className="flex justify-end items-center gap-x-2">
            {/* Filter Dropdown */}
            <div className="hs-dropdown [--auto-close:true] relative inline-flex">
              {/* Filter Button */}
              <button
                id="hs-pro-dptied"
                type="button"
                className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <svg
                  className="shrink-0 mt-0.5 size-3.5"
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
                  <path d="m3 16 4 4 4-4" />
                  <path d="M7 20V4" />
                  <path d="m21 8-4-4-4 4" />
                  <path d="M17 4v16" />
                </svg>
                Import / Export
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
              {/* End Filter Button */}
              {/* Dropdown */}
              <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-pro-dptied"
              >
                <div className="p-1">
                  <button
                    type="button"
                    className="w-full flex gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    data-hs-overlay="#hs-pro-dicm"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1={12} x2={12} y1={15} y2={3} />
                    </svg>
                    Import contacts
                  </button>
                  <button
                    type="button"
                    className="w-full flex gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    data-hs-overlay="#hs-pro-decm"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1={12} x2={12} y1={3} y2={15} />
                    </svg>
                    Export contacts
                  </button>
                </div>
              </div>
              {/* End Dropdown */}
            </div>
            {/* End Filter Dropdown */}
            {/* Download Dropdown */}
            <div className="hs-dropdown [--auto-close:inside] relative inline-flex">
              <button
                id="hs-pro-dptfd"
                type="button"
                className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
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
                  <line x1={21} x2={14} y1={4} y2={4} />
                  <line x1={10} x2={3} y1={4} y2={4} />
                  <line x1={21} x2={12} y1={12} y2={12} />
                  <line x1={8} x2={3} y1={12} y2={12} />
                  <line x1={21} x2={16} y1={20} y2={20} />
                  <line x1={12} x2={3} y1={20} y2={20} />
                  <line x1={14} x2={14} y1={2} y2={6} />
                  <line x1={8} x2={8} y1={10} y2={14} />
                  <line x1={16} x2={16} y1={18} y2={22} />
                </svg>
                Filter
                <span className="font-medium text-[10px] py-0.5 px-[5px] bg-gray-800 text-white leading-3 rounded-full dark:bg-neutral-500">
                  5
                </span>
              </button>
              {/* Download Dropdown */}
              <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-pro-dptfd"
              >
                {/* Search Input */}
                <div className="pt-1 px-1">
                  <div className="pb-1 border-b border-gray-200 dark:border-neutral-800">
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-2.5">
                        <svg
                          className="shrink-0 size-3.5 text-gray-400 dark:text-white/60"
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
                      </div>
                      <input
                        type="text"
                        className="py-1.5 px-8 block w-full bg-gray-100 border-transparent rounded-md text-sm placeholder:text-gray-500 focus:outline-hidden focus:border-blue-500 focus:ring-blue-500 focus:bg-white disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600 dark:focus:bg-neutral-900"
                        placeholder="Search"
                      />
                      <div className="hidden absolute inset-y-0 end-0 flex items-center z-20 pe-1">
                        <button
                          type="button"
                          className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                          aria-label="Close"
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
                            <circle cx={12} cy={12} r={10} />
                            <path d="m15 9-6 6" />
                            <path d="m9 9 6 6" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Search Input */}
                <div className="p-1 space-y-0.5">
                  <a
                    className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                      <circle cx={12} cy={10} r={3} />
                      <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                    </svg>
                    Name
                  </a>
                  <a
                    className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                    Email addresses
                  </a>
                  <a
                    className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                      <path d="M11 12H3" />
                      <path d="M16 6H3" />
                      <path d="M16 18H3" />
                      <path d="M21 12h-6" />
                    </svg>
                    Description
                  </a>
                  <a
                    className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                      <path d="M10 6h4" />
                      <path d="M10 10h4" />
                      <path d="M10 14h4" />
                      <path d="M10 18h4" />
                    </svg>
                    Company
                  </a>
                  <a
                    className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                    User ID
                  </a>
                  <a
                    className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                    Phone numbers
                  </a>
                  <a
                    className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                    Location
                  </a>
                  <a
                    className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <svg
                      className="shrink-0 mt-0.5 size-3.5"
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
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Signed up as
                  </a>
                </div>
              </div>
              {/* End Download Dropdown */}
            </div>
            {/* End Download Dropdown */}
          </div>
          {/* End Col */}
        </div>
        {/* End Filter Group */}
        <div>
          {/* Tab Content */}
          <div
            id="hs-pro-tabs-dut-all"
            role="tabpanel"
            aria-labelledby="hs-pro-tabs-dut-item-all"
          >
            {/* Table Section */}
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="min-w-full inline-block align-middle">
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr className="border-t border-gray-200 divide-x divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                      <th scope="col" className="px-3 py-2.5 text-start">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </th>
                      <th scope="col" className="min-w-72 ">
                        {/* Sort Dropdown */}
                        <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                          <button
                            id="hs-pro-dutnms"
                            type="button"
                            className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            Name
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
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </button>
                          {/* Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutnms"
                          >
                            <div className="p-1">
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m5 12 7-7 7 7" />
                                  <path d="M12 19V5" />
                                </svg>
                                Sort ascending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M12 5v14" />
                                  <path d="m19 12-7 7-7-7" />
                                </svg>
                                Sort descending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m12 19-7-7 7-7" />
                                  <path d="M19 12H5" />
                                </svg>
                                Move left
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                                Move right
                              </button>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-800" />
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                  <line x1={2} x2={22} y1={2} y2={22} />
                                </svg>
                                Hide in view
                              </button>
                            </div>
                          </div>
                          {/* End Dropdown */}
                        </div>
                        {/* End Sort Dropdown */}
                      </th>
                      <th scope="col" className="min-w-40">
                        {/* Sort Dropdown */}
                        <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                          <button
                            id="hs-pro-dutads"
                            type="button"
                            className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            Address
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
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </button>
                          {/* Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutads"
                          >
                            <div className="p-1">
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m5 12 7-7 7 7" />
                                  <path d="M12 19V5" />
                                </svg>
                                Sort ascending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M12 5v14" />
                                  <path d="m19 12-7 7-7-7" />
                                </svg>
                                Sort descending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m12 19-7-7 7-7" />
                                  <path d="M19 12H5" />
                                </svg>
                                Move left
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                                Move right
                              </button>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-800" />
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                  <line x1={2} x2={22} y1={2} y2={22} />
                                </svg>
                                Hide in view
                              </button>
                            </div>
                          </div>
                          {/* End Dropdown */}
                        </div>
                        {/* End Sort Dropdown */}
                      </th>
                      <th scope="col" className="min-w-36">
                        {/* Sort Dropdown */}
                        <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                          <button
                            id="hs-pro-dutsgs"
                            type="button"
                            className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            Signed up as
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
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </button>
                          {/* Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutsgs"
                          >
                            <div className="p-1">
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m5 12 7-7 7 7" />
                                  <path d="M12 19V5" />
                                </svg>
                                Sort ascending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M12 5v14" />
                                  <path d="m19 12-7 7-7-7" />
                                </svg>
                                Sort descending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m12 19-7-7 7-7" />
                                  <path d="M19 12H5" />
                                </svg>
                                Move left
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                                Move right
                              </button>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-800" />
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                  <line x1={2} x2={22} y1={2} y2={22} />
                                </svg>
                                Hide in view
                              </button>
                            </div>
                          </div>
                          {/* End Dropdown */}
                        </div>
                        {/* End Sort Dropdown */}
                      </th>
                      <th scope="col">
                        {/* Sort Dropdown */}
                        <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                          <button
                            id="hs-pro-dutems"
                            type="button"
                            className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            Email
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
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </button>
                          {/* Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutems"
                          >
                            <div className="p-1">
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m5 12 7-7 7 7" />
                                  <path d="M12 19V5" />
                                </svg>
                                Sort ascending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M12 5v14" />
                                  <path d="m19 12-7 7-7-7" />
                                </svg>
                                Sort descending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m12 19-7-7 7-7" />
                                  <path d="M19 12H5" />
                                </svg>
                                Move left
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                                Move right
                              </button>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-800" />
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                  <line x1={2} x2={22} y1={2} y2={22} />
                                </svg>
                                Hide in view
                              </button>
                            </div>
                          </div>
                          {/* End Dropdown */}
                        </div>
                        {/* End Sort Dropdown */}
                      </th>
                      <th scope="col">
                        {/* Sort Dropdown */}
                        <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                          <button
                            id="hs-pro-dutphs"
                            type="button"
                            className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                            aria-haspopup="menu"
                            aria-expanded="false"
                            aria-label="Dropdown"
                          >
                            Phone
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
                              <path d="m7 15 5 5 5-5" />
                              <path d="m7 9 5-5 5 5" />
                            </svg>
                          </button>
                          {/* Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutphs"
                          >
                            <div className="p-1">
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m5 12 7-7 7 7" />
                                  <path d="M12 19V5" />
                                </svg>
                                Sort ascending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M12 5v14" />
                                  <path d="m19 12-7 7-7-7" />
                                </svg>
                                Sort descending
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="m12 19-7-7 7-7" />
                                  <path d="M19 12H5" />
                                </svg>
                                Move left
                              </button>
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M5 12h14" />
                                  <path d="m12 5 7 7-7 7" />
                                </svg>
                                Move right
                              </button>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-800" />
                              <button
                                type="button"
                                className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                                  <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                  <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                  <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                  <line x1={2} x2={22} y1={2} y2={22} />
                                </svg>
                                Hide in view
                              </button>
                            </div>
                          </div>
                          {/* End Dropdown */}
                        </div>
                        {/* End Sort Dropdown */}
                      </th>
                      <th scope="col" />
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <img
                            className="shrink-0 size-[38px] rounded-full"
                            src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Amanda Harvey
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          4222 River Rd, Columbus, 31904, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-500/20 dark:text-neutral-500">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Valid account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          amanda@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400"></span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm1"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm1"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm1ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm1ts"
                                      className="hidden"
                                      id="hs-pro-dutdm1ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm1ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm1ts"
                                      className="hidden"
                                      id="hs-pro-dutdm1ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm1s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm1s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm1s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm1s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm1s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm1s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm1s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm1s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm1s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm1s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            Rd
                          </span>
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Rachel Doe
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          2952 S Peoria Ave, Tulsa, 74114, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
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
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                          </svg>
                          Fake account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          rachel@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          +297 000-00-00
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm2"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm2"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm2ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm2ts"
                                      className="hidden"
                                      id="hs-pro-dutdm2ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm2ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm2ts"
                                      className="hidden"
                                      id="hs-pro-dutdm2ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm2s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm2s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm2s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm2s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm2s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm2s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm2s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm2s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm2s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm2s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <img
                            className="shrink-0 size-[38px] rounded-full"
                            src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Costa Quinn
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          255 Dock Ln, New Tazewell, 37825, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-500/20 dark:text-neutral-500">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Valid account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          costa@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          +1 000-00-00
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm3"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm3"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm3ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm3ts"
                                      className="hidden"
                                      id="hs-pro-dutdm3ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm3ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm3ts"
                                      className="hidden"
                                      id="hs-pro-dutdm3ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm3s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm3s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm3s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm3s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm3s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm3s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm3s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm3s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm3s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm3s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <img
                            className="shrink-0 size-[38px] rounded-full"
                            src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Anna Richard
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          4970 Park Ave W, Ohio, 44273, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-500/20 dark:text-neutral-500">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Valid account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          anne@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          +1 230-28-00
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm4"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm4"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm4ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm4ts"
                                      className="hidden"
                                      id="hs-pro-dutdm4ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm4ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm4ts"
                                      className="hidden"
                                      id="hs-pro-dutdm4ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm4s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm4s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm4s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm4s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm4s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm4s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm4s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm4s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm4s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm4s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            Bd
                          </span>
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Bob Dean
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          4222 River Rd, Columbus, 31904, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
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
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                          </svg>
                          Fake account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          bob@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          +33 000-00-00
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm5"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm5"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm5ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm5ts"
                                      className="hidden"
                                      id="hs-pro-dutdm5ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm5ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm5ts"
                                      className="hidden"
                                      id="hs-pro-dutdm5ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm5s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm5s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm5s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm5s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm5s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm5s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm5s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm5s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm5s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm5s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            Mc
                          </span>
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Mark Colbert
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          2952 S Peoria Ave, Tulsa, 74114, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-500/20 dark:text-neutral-500">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Valid account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          mark@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          +420 000-00-00
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm6"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm6"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm6ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm6ts"
                                      className="hidden"
                                      id="hs-pro-dutdm6ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm6ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm6ts"
                                      className="hidden"
                                      id="hs-pro-dutdm6ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm6s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm6s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm6s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm6s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm6s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm6s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm6s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm6s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm6s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm6s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            Fh
                          </span>
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Finch Hoot
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          1818 H St NW, Washington, 20433, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-500/20 dark:text-neutral-500">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Valid account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          finch@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400"></span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm7"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm7"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm7ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm7ts"
                                      className="hidden"
                                      id="hs-pro-dutdm7ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm7ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm7ts"
                                      className="hidden"
                                      id="hs-pro-dutdm7ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm7s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm7s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm7s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm7s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm7s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm7s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm7s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm7s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm7s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm7s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <img
                            className="shrink-0 size-[38px] rounded-full"
                            src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Ella Lauda
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          3 Grace Dr, New Mexico, 08857, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
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
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                          </svg>
                          Fake account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          ella@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          +1 212-00-11
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm8"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm8"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm8ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm8ts"
                                      className="hidden"
                                      id="hs-pro-dutdm8ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm8ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm8ts"
                                      className="hidden"
                                      id="hs-pro-dutdm8ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm8s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm8s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm8s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm8s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm8s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm8s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm8s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm8s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm8s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm8s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <img
                            className="shrink-0 size-[38px] rounded-full"
                            src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Lewis Clarke
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          4531 W Saile Dr, Batavia, North Dakota, 14020, United
                          States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-500/20 dark:text-neutral-500">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Valid account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          lewis@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400"></span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm9"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm9"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm9ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm9ts"
                                      className="hidden"
                                      id="hs-pro-dutdm9ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm9ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm9ts"
                                      className="hidden"
                                      id="hs-pro-dutdm9ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm9s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm9s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm9s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm9s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm9s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm9s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm9s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm9s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm9s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm9s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            Lh
                          </span>
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Lori Hunter
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          2126 N Eagle Rd #120, Meridian, Illinois, 83646, United
                          States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-500/20 dark:text-neutral-500">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Valid account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          lori@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400"></span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm10"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm10"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm10ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm10ts"
                                      className="hidden"
                                      id="hs-pro-dutdm10ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm10ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm10ts"
                                      className="hidden"
                                      id="hs-pro-dutdm10ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm10s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm10s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm10s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm10s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm10s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm10s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm10s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm10s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm10s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm10s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <img
                            className="shrink-0 size-[38px] rounded-full"
                            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                            alt="Avatar"
                          />
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              David Harrison
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          3817 Beryl Rd, Raleigh, Nebraska, 27607, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-neutral-500/20 dark:text-neutral-500">
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
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Valid account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          david@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          +492-00-11
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm11"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm11"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm11ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm11ts"
                                      className="hidden"
                                      id="hs-pro-dutdm11ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm11ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm11ts"
                                      className="hidden"
                                      id="hs-pro-dutdm11ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm11s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm11s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm11s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm11s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm11s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm11s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm11s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm11s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm11s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm11s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                    <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                      <td className="size-px whitespace-nowrap px-3 py-4">
                        <input
                          type="checkbox"
                          className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                        />
                      </td>
                      <td className="size-px px-4 py-1 relative group cursor-pointer pe-20 lg:pe-24">
                        <div className="w-full flex items-center gap-x-3">
                          <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                            Cm
                          </span>
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              Chris Mathew
                            </span>
                          </div>
                        </div>
                        <div className="lg:group-hover:block lg:hidden absolute top-1/2 end-4 transform -translate-y-1/2">
                          <button
                            type="button"
                            className="hs-tooltip-toggle py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700"
                            data-hs-overlay="#hs-pro-dutoo"
                          >
                            <svg
                              className="shrink-0 size-3.5 hidden lg:block"
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
                                ry={2}
                              />
                              <line x1={15} x2={15} y1={3} y2={21} />
                              <path d="m10 15-3-3 3-3" />
                            </svg>
                            Open
                          </button>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          4807 3rd Ave, Kearney, New Hampshire, 68845, United States
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="py-1.5 ps-1.5 pe-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
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
                            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                            <path d="M12 9v4" />
                            <path d="M12 17h.01" />
                          </svg>
                          Fake account
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          chris@site.so
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          +234-95-86
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap px-4 py-1">
                        {/* Download Dropdown */}
                        <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                          <button
                            id="hs-pro-dutdm12"
                            type="button"
                            className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                              <polyline points="7 10 12 15 17 10" />
                              <line x1={12} x2={12} y1={15} y2={3} />
                            </svg>
                          </button>
                          {/* Download Dropdown */}
                          <div
                            className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="hs-pro-dutdm12"
                          >
                            <div className="p-1">
                              <div className="py-2 px-3">
                                <span className="block font-semibold text-gray-800 dark:text-neutral-200">
                                  Download Report
                                </span>
                                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                                  Select Options
                                </span>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="py-1 px-2">
                                <div className="flex items-center bg-gray-100 rounded-xl p-1 dark:bg-neutral-800">
                                  <label
                                    htmlFor="hs-pro-dutdm12ts1"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M20.0324 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 15.8079L25.9844 18.3197L31.9364 15.8079V8.86395L20.0324 1.91994Z"
                                        fill="#21A366"
                                      />
                                      <path
                                        d="M8.12839 8.86395H20.0324V15.8079H8.12839V8.86395Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M30.614 1.91994H20.0324V8.86395H31.9364V3.24228C31.9364 2.89158 31.7971 2.55523 31.5491 2.30725C31.3011 2.05926 30.9647 1.91994 30.614 1.91994Z"
                                        fill="#33C481"
                                      />
                                      <path
                                        d="M20.0324 15.8079H8.12839V28.3736C8.12839 28.7243 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.6959 9.45071 29.6959H30.6141C30.9647 29.6959 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7243 31.9364 28.3736V22.7519L20.0324 15.8079Z"
                                        fill="#185C37"
                                      />
                                      <path
                                        d="M20.0324 15.8079H31.9364V22.7519H20.0324V15.8079Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16402 23.7439 0.827672 23.6047 0.579686 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579686 8.25922C0.827672 8.01122 1.16402 7.87194 1.51472 7.87194Z"
                                        fill="#107C41"
                                      />
                                      <path
                                        d="M3.69711 20.7679L6.90722 15.794L3.96694 10.8479H6.33286L7.93791 14.0095C8.08536 14.3091 8.18688 14.5326 8.24248 14.68H8.26328C8.36912 14.4407 8.47984 14.2079 8.5956 13.9817L10.3108 10.8479H12.4822L9.46656 15.7663L12.5586 20.7679H10.2473L8.3932 17.2959C8.30592 17.148 8.23184 16.9927 8.172 16.8317H8.14424C8.09016 16.9891 8.01824 17.1399 7.92998 17.2811L6.02236 20.7679H3.69711Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Excel
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm12ts"
                                      className="hidden"
                                      id="hs-pro-dutdm12ts1"
                                      defaultChecked=""
                                    />
                                  </label>
                                  <label
                                    htmlFor="hs-pro-dutdm12ts2"
                                    className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-checked:bg-white has-checked:shadow-xs dark:text-neutral-200 dark:has-checked:bg-neutral-600"
                                  >
                                    <svg
                                      className="relative z-10 me-1.5 inline-block align-middle shrink-0 size-4"
                                      width={32}
                                      height={32}
                                      viewBox="0 0 32 32"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M30.6141 1.91994H9.45071C9.09999 1.91994 8.76367 2.05926 8.51567 2.30725C8.26767 2.55523 8.12839 2.89158 8.12839 3.24228V8.86395L20.0324 12.3359L31.9364 8.86395V3.24228C31.9364 2.89158 31.797 2.55523 31.549 2.30725C31.3011 2.05926 30.9647 1.91994 30.6141 1.91994Z"
                                        fill="#41A5EE"
                                      />
                                      <path
                                        d="M31.9364 8.86395H8.12839V15.8079L20.0324 19.2799L31.9364 15.8079V8.86395Z"
                                        fill="#2B7CD3"
                                      />
                                      <path
                                        d="M31.9364 15.8079H8.12839V22.7519L20.0324 26.2239L31.9364 22.7519V15.8079Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M31.9364 22.752H8.12839V28.3736C8.12839 28.7244 8.26767 29.0607 8.51567 29.3087C8.76367 29.5567 9.09999 29.696 9.45071 29.696H30.6141C30.9647 29.696 31.3011 29.5567 31.549 29.3087C31.797 29.0607 31.9364 28.7244 31.9364 28.3736V22.752Z"
                                        fill="#103F91"
                                      />
                                      <path
                                        opacity="0.1"
                                        d="M16.7261 6.87994H8.12839V25.7279H16.7261C17.0764 25.7269 17.4121 25.5872 17.6599 25.3395C17.9077 25.0917 18.0473 24.756 18.0484 24.4056V8.20226C18.0473 7.8519 17.9077 7.51616 17.6599 7.2684C17.4121 7.02064 17.0764 6.88099 16.7261 6.87994Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V26.7199H15.7341C16.0844 26.7189 16.4201 26.5792 16.6679 26.3315C16.9157 26.0837 17.0553 25.748 17.0564 25.3976V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M15.7341 7.87194H8.12839V24.7359H15.7341C16.0844 24.7349 16.4201 24.5952 16.6679 24.3475C16.9157 24.0997 17.0553 23.764 17.0564 23.4136V9.19426C17.0553 8.84386 16.9157 8.50818 16.6679 8.26042C16.4201 8.01266 16.0844 7.87299 15.7341 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        opacity="0.2"
                                        d="M14.7421 7.87194H8.12839V24.7359H14.7421C15.0924 24.7349 15.4281 24.5952 15.6759 24.3475C15.9237 24.0997 16.0633 23.764 16.0644 23.4136V9.19426C16.0633 8.84386 15.9237 8.50818 15.6759 8.26042C15.4281 8.01266 15.0924 7.87299 14.7421 7.87194Z"
                                        className="fill-black dark:fill-neutral-200"
                                        fill="currentColor"
                                      />
                                      <path
                                        d="M1.51472 7.87194H14.7421C15.0927 7.87194 15.4291 8.01122 15.6771 8.25922C15.925 8.50722 16.0644 8.84354 16.0644 9.19426V22.4216C16.0644 22.7723 15.925 23.1087 15.6771 23.3567C15.4291 23.6047 15.0927 23.7439 14.7421 23.7439H1.51472C1.16401 23.7439 0.827669 23.6047 0.579687 23.3567C0.3317 23.1087 0.192383 22.7723 0.192383 22.4216V9.19426C0.192383 8.84354 0.3317 8.50722 0.579687 8.25922C0.827669 8.01122 1.16401 7.87194 1.51472 7.87194Z"
                                        fill="#185ABD"
                                      />
                                      <path
                                        d="M12.0468 20.7679H10.2612L8.17801 13.9231L5.99558 20.7679H4.20998L2.22598 10.8479H4.01158L5.40038 17.7919L7.48358 11.0463H8.97161L10.9556 17.7919L12.3444 10.8479H14.0308L12.0468 20.7679Z"
                                        fill="white"
                                      />
                                    </svg>
                                    <span className="relative z-10 align-middle">
                                      Word
                                    </span>
                                    <input
                                      type="radio"
                                      name="hs-pro-dutdm12ts"
                                      className="hidden"
                                      id="hs-pro-dutdm12ts2"
                                    />
                                  </label>
                                </div>
                              </div>
                              <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm12s1"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                    <circle cx={12} cy={7} r={4} />
                                  </svg>
                                  Full name
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm12s1"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm12s2"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                    <circle cx={12} cy={10} r={3} />
                                  </svg>
                                  Address
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm12s2"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm12s3"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                    <path d="m9 12 2 2 4-4" />
                                  </svg>
                                  Signed up as
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm12s3"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm12s4"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2" />
                                    <rect
                                      width={18}
                                      height={18}
                                      x={3}
                                      y={4}
                                      rx={2}
                                    />
                                    <circle cx={12} cy={10} r={2} />
                                    <line x1={8} x2={8} y1={2} y2={4} />
                                    <line x1={16} x2={16} y1={2} y2={4} />
                                  </svg>
                                  User ID
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm12s4"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                                <label
                                  htmlFor="hs-pro-dutdm12s5"
                                  className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-gray-800 dark:text-neutral-300"
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
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                  </svg>
                                  Phone
                                </label>
                                <input
                                  type="checkbox"
                                  className="shrink-0 size-3.5 border-gray-300 rounded-sm text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                  id="hs-pro-dutdm12s5"
                                  defaultChecked=""
                                />
                              </div>
                              <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                              <button
                                type="button"
                                className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                              >
                                Download
                              </button>
                            </div>
                          </div>
                          {/* End Download Dropdown */}
                        </div>
                        {/* End Download Dropdown */}
                      </td>
                    </tr>
                  </tbody>
                </table>
                {/* End Table */}
              </div>
            </div>
            {/* End Table Section */}
            {/* Footer */}
            <div className="grid grid-cols-2 items-center gap-y-2 sm:gap-y-0 sm:gap-x-5">
              <p className="text-sm text-gray-800 dark:text-neutral-200">
                <span className="font-medium">27</span>
                <span className="text-gray-500 dark:text-neutral-500">results</span>
              </p>
              {/* Pagination */}
              <nav
                className="flex justify-end items-center gap-x-1"
                aria-label="Pagination"
              >
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
                  aria-label="Previous"
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
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                  <span className="sr-only">Previous</span>
                </button>
                <div className="flex items-center gap-x-1">
                  <span
                    className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-gray-100 text-gray-800 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:text-white"
                    aria-current="page"
                  >
                    1
                  </span>
                  <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
                    of
                  </span>
                  <span className="min-h-[38px] flex justify-center items-center text-gray-500 py-2 px-1.5 text-sm dark:text-neutral-500">
                    3
                  </span>
                </div>
                <button
                  type="button"
                  className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
                  aria-label="Next"
                >
                  <span className="sr-only">Next</span>
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
                    <path d="m9 18 6-6-6-6" />
                  </svg>
                </button>
              </nav>
              {/* End Pagination */}
            </div>
            {/* End Footer */}
          </div>
          {/* End Tab Content */}
          {/* Tab Content */}
          <div
            id="hs-pro-tabs-dut-validaccounts"
            className="hidden"
            role="tabpanel"
            aria-labelledby="hs-pro-tabs-dut-item-validaccounts"
          >
            {/* Empty State */}
            <div className="p-5 min-h-[500px]  flex flex-col justify-center items-center text-center">
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
                  Your data will appear here soon.
                </p>
                <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                  In the meantime, you can create new custom insights to monitor
                  your most important metrics.
                </p>
              </div>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                data-hs-overlay="#hs-pro-empty"
              >
                <svg
                  className="hidden sm:block shrink-0 size-4"
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
                Add user
              </button>
            </div>
            {/* End Empty State */}
          </div>
          {/* End Tab Content */}
          {/* Tab Content */}
          <div
            id="hs-pro-tabs-dut-fakeaccounts"
            className="hidden"
            role="tabpanel"
            aria-labelledby="hs-pro-tabs-dut-item-fakeaccounts"
          >
            {/* Empty State */}
            <div className="p-5 min-h-[500px]  flex flex-col justify-center items-center text-center">
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
                <g filter="url(#filter4)">
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
                    id="filter4"
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
                  Your data will appear here soon.
                </p>
                <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                  In the meantime, you can create new custom insights to monitor
                  your most important metrics.
                </p>
              </div>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                data-hs-overlay="#hs-pro-empty"
              >
                <svg
                  className="hidden sm:block shrink-0 size-4"
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
                Add user
              </button>
            </div>
            {/* End Empty State */}
          </div>
          {/* End Tab Content */}
        </div>
      </div>
      {/* End Users Table Card */}
    </div>
  );
};

export default MainContent;