import React from 'react';

interface ProjectProps {

}

const Project: React.FC<ProjectProps> = () => {
  return (
    <div className="p-5 space-y-4 flex flex-col bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      {/* Header */}
      <div className="flex justify-between items-center gap-x-5">
        <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
          Project
        </h2>
        <div className="flex justify-end items-center gap-x-2">
          {/* Button */}
          <button
            type="button"
            className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            data-hs-overlay="#hs-pro-dasadpm"
          >
            <svg
              className="hidden sm:block shrink-0 size-3.5"
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
            Add project
          </button>
          {/* End Button */}
        </div>
      </div>
      {/* End Header */}
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
              className="py-[7px] ps-10 pe-8 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
              placeholder="Search projects"
            />
            <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none z-20 pe-1">
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
        <div className="flex md:justify-end items-center gap-x-2">
          {/* Import / Export Dropdown */}
          <div className="hs-dropdown [--auto-close:true] relative inline-flex">
            {/* Import / Export Button */}
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
            {/* End Import / Export Button */}
            {/* Dropdown */}
            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-pro-dptied"
            >
              <div className="p-1">
                <button
                  type="button"
                  className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  data-hs-overlay="#hs-pro-dicm"
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
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1={12} x2={12} y1={15} y2={3} />
                  </svg>
                  Import contacts
                </button>
                <button
                  type="button"
                  className="w-full flex gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  data-hs-overlay="#hs-pro-decm"
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
          {/* End Import / Export Dropdown */}
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
                <th scope="col" className="min-w-[280px] ">
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
                <th scope="col" className="min-w-[180px] ">
                  {/* Sort Dropdown */}
                  <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                    <button
                      id="hs-pro-duttgs"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Tags
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
                      aria-labelledby="hs-pro-duttgs"
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
                <th scope="col" className="min-w-[180px] ">
                  {/* Sort Dropdown */}
                  <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                    <button
                      id="hs-pro-dutass"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Assignee
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
                      aria-labelledby="hs-pro-dutass"
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
                      id="hs-pro-dutprs"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Progress
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
                      aria-labelledby="hs-pro-dutprs"
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
                      id="hs-pro-dutdds"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Deadline
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
                      aria-labelledby="hs-pro-dutdds"
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
                      id="hs-pro-dutrts"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm text-nowrap font-normal text-gray-500 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Rating
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
                      aria-labelledby="hs-pro-dutrts"
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Improve website UI
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Website
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      SaaS
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      IT
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Tech
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      B2B
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          James Collins
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          L
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lori Hunter
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lewis Clarke
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ella Lauda
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          O
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ols Schols
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        1/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "20%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      Apr 10, 2023
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Internal UX audit
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Website
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Ecommerce
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Shopify
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Anna Richard
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          L
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lori Hunter
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Costa Quinn
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        1/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={20}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "20%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      May 5, 2023
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Digital marketing
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      IT department
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Sales
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Marketing
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          A
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Alex Brown
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          B
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Bob Dean
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          M
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Mark Colbert
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          C
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Chris Mathew
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          A
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Alex Brown
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          E
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Emma Watson
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        5/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      Apr 29, 2023
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Case studies
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      IT department
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Branding
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          David Harrison
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        5/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400"></span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Social media assets
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Marketing
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      B2B
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          A
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Alex Brown
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          C
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Chris Mathew
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Costa Quinn
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Mia Maya
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          M
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Mark Colbert
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        0/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      Mar 16, 2023
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      UI/UX library
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Marketing
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      SaaS
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      B2B
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Alisa Grasso
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Amanda Harvey
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lewis Clarke
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        2/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "40%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      Jun 1, 2023
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Defining core values of the Guideline
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Marketing
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Sales
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Branding
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Alisa Grasso
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          L
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lori Hunter
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          O
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ols Schols
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        5/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={100}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400"></span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Seeking feedback
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Company
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Tech
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      IT
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Fintech
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      AI
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          James Collins
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          L
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lori Hunter
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lewis Clarke
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ella Lauda
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        0/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      Apr 8, 2023
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Trending NFT Collections
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Analysis
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Crypto
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Wallet
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          James Collins
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          L
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lori Hunter
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          A
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Alex Brown
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          O
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ols Schols
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lewis Clarke
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ella Lauda
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          O
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ols Schols
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        4/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "80%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400"></span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Understanding and leveraging Notion strength
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Analysis
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Online
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          L
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lori Hunter
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          O
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ols Schols
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        4/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={80}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "80%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      Apr 25, 2023
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      App design
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Branding
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Branding
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Design
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Amanda Harvey
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          James Collins
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          L
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lori Hunter
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ella Lauda
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        2/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={60}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "60%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      Mar 3, 2023
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200 dark:divide-neutral-700">
                <td className="size-px whitespace-nowrap">
                  <div className="px-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-gray-300 rounded-sm text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    />
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <p className="text-sm font-semibold text-gray-800 dark:text-neutral-200">
                      Untitled
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Not defined
                    </p>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="flex flex-wrap gap-1.5 px-4 py-1">
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      IT
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      Tech
                    </span>
                    <span className="p-2 bg-gray-100 text-gray-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                      B2B
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center -space-x-2">
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          James Collins
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          L
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lori Hunter
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Lewis Clarke
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <span className="flex shrink-0 justify-center items-center size-7 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          O
                        </span>
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ols Schols
                        </span>
                      </div>
                      <div className="hs-tooltip hover:z-10">
                        <img
                          className="shrink-0 size-7 rounded-full"
                          src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-xs dark:bg-neutral-700"
                          role="tooltip"
                        >
                          Ella Lauda
                        </span>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <div className="flex items-center gap-x-3">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        0/5
                      </span>
                      <div
                        className="flex w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
                        role="progressbar"
                        aria-valuenow={0}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="flex flex-col justify-center overflow-hidden bg-gray-800 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-200"
                          style={{ width: "0%" }}
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2">
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      May 22, 2023
                    </span>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="px-5 py-2 flex gap-x-1">
                    <svg
                      className="shrink-0 size-3.5 text-blue-600 dark:text-blue-500"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                    <svg
                      className="shrink-0 size-3.5 text-gray-300 dark:text-neutral-700"
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>
                  </div>
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
  );
};

export default Project;