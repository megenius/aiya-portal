import React from 'react';

interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <div className="p-2 sm:p-5 sm:py-0 sm:py-5 space-y-5">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h2 className="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Overview
        </h2>
        <div className="mt-1 flex items-center gap-x-2">
          {/* Calendar Dropdown */}
          <div className="hs-dropdown [--auto-close:inside] inline-flex">
            <button
              id="hs-pro-dnic"
              type="button"
              className="py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <svg
                className="shrink-0 me-2 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
                <line x1={16} x2={16} y1={2} y2={6} />
                <line x1={8} x2={8} y1={2} y2={6} />
                <line x1={3} x2={21} y1={10} y2={10} />
                <path d="M8 14h.01" />
                <path d="M12 14h.01" />
                <path d="M16 14h.01" />
                <path d="M8 18h.01" />
                <path d="M12 18h.01" />
                <path d="M16 18h.01" />
              </svg>
              Today
              <svg
                className="shrink-0 ms-1.5 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
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
            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-[318px] transition-[opacity,margin] duration opacity-0 hidden z-50 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-pro-dnic"
            >
              {/* Calendar */}
              <div className="p-3 space-y-0.5">
                {/* Months */}
                <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                  {/* Prev Button */}
                  <div className="col-span-1">
                    <button
                      type="button"
                      className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      aria-label="Previous"
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
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                  </div>
                  {/* End Prev Button */}
                  {/* Month / Year */}
                  <div className="col-span-3 flex justify-center items-center gap-x-1">
                    <div className="relative">
                      <select
                        data-hs-select='{
                      "placeholder": "Select month",
                      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                      "dropdownClasses": "mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                      "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                    }'
                        className="hidden"
                      >
                        <option value={0}>January</option>
                        <option value={1}>February</option>
                        <option value={2}>March</option>
                        <option value={3}>April</option>
                        <option value={4}>May</option>
                        <option value={5}>June</option>
                        <option value={6} selected>
                          July
                        </option>
                        <option value={7}>August</option>
                        <option value={8}>September</option>
                        <option value={9}>October</option>
                        <option value={10}>November</option>
                        <option value={11}>December</option>
                      </select>
                    </div>
                    <span className="text-gray-800 dark:text-neutral-200">/</span>
                    <div className="relative">
                      <select
                        data-hs-select='{
                      "placeholder": "Select year",
                      "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
                      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-gray-600 focus:outline-none focus:text-gray-600 before:absolute before:inset-0 before:z-[1] dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300",
                      "dropdownClasses": "mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
                      "optionClasses": "p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
                      "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
                    }'
                        className="hidden"
                      >
                        <option selected>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                      </select>
                    </div>
                  </div>
                  {/* End Month / Year */}
                  {/* Next Button */}
                  <div className="col-span-1 flex justify-end">
                    <button
                      type="button"
                      className=" size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      aria-label="Next"
                    >
                      <svg
                        className="shrink-0 size-4"
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
                  </div>
                  {/* End Next Button */}
                </div>
                {/* Months */}
                {/* Weeks */}
                <div className="flex pb-1.5">
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Mo
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Tu
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    We
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Th
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Fr
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Sa
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Su
                  </span>
                </div>
                {/* Weeks */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                      disabled
                    >
                      26
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                      disabled
                    >
                      27
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                      disabled
                    >
                      28
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                      disabled
                    >
                      29
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                      disabled
                    >
                      30
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      1
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      2
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      3
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      4
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      5
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      6
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      7
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      8
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      9
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      10
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      11
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      12
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      13
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      14
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      15
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      16
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      17
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      18
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      19
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center bg-indigo-600 border border-transparent text-sm font-medium text-white hover:border-indigo-600 rounded-full dark:bg-indigo-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:border-neutral-700"
                    >
                      20
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      21
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      22
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      23
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      24
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      25
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      26
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      27
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      28
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      29
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      30
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-indigo-600 hover:text-indigo-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:border-indigo-600 focus:text-indigo-600 dark:text-neutral-200"
                    >
                      31
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-indigo-600 hover:text-indigo-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                      disabled
                    >
                      1
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-indigo-600 hover:text-indigo-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                      disabled
                    >
                      2
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-indigo-600 hover:text-indigo-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                      disabled
                    >
                      3
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-indigo-600 hover:text-indigo-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                      disabled
                    >
                      4
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-indigo-600 hover:text-indigo-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                      disabled
                    >
                      5
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-indigo-600 hover:text-indigo-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700"
                      disabled
                    >
                      6
                    </button>
                  </div>
                </div>
                {/* Days */}
              </div>
              {/* End Calendar */}
            </div>
          </div>
          {/* End Calendar Dropdown */}
          {/* Add Activity Dropdown */}
          <div className="hs-dropdown [--auto-close:inside] [--placement:top-right] relative inline-flex">
            {/* Button */}
            <button
              id="hs-pro-daaad"
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-500"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
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
              Add activity
            </button>
            {/* End Button */}
            {/* Add Activity Dropdown */}
            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-pro-daaad"
            >
              <div className="p-1">
                <div className="flex justify-between items-center py-1.5 px-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
                  <label
                    htmlFor="hs-pro-dachdds1"
                    className="flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300"
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx={9} cy={7} r={4} />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                    Customers
                  </label>
                  <input
                    type="checkbox"
                    className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                    id="hs-pro-dachdds1"
                    defaultChecked=""
                  />
                </div>
                <div className="flex justify-between items-center py-1.5 px-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
                  <label
                    htmlFor="hs-pro-dachdds2"
                    className="flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300"
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
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                      <path d="m12 12 4 10 1.7-4.3L22 16Z" />
                    </svg>
                    Avg. click rate
                  </label>
                  <input
                    type="checkbox"
                    className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                    id="hs-pro-dachdds2"
                    defaultChecked=""
                  />
                </div>
                <div className="flex justify-between items-center py-1.5 px-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
                  <label
                    htmlFor="hs-pro-dachdds3"
                    className="flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300"
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
                      <line x1={18} x2={18} y1={20} y2={10} />
                      <line x1={12} x2={12} y1={20} y2={4} />
                      <line x1={6} x2={6} y1={20} y2={14} />
                    </svg>
                    Sessions
                  </label>
                  <input
                    type="checkbox"
                    className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                    id="hs-pro-dachdds3"
                    defaultChecked=""
                  />
                </div>
                <div className="flex justify-between items-center py-1.5 px-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
                  <label
                    htmlFor="hs-pro-dachdds4"
                    className="flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300"
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
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx={12} cy={12} r={3} />
                    </svg>
                    Pageviews
                  </label>
                  <input
                    type="checkbox"
                    className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                    id="hs-pro-dachdds4"
                    defaultChecked=""
                  />
                </div>
                <div className="flex justify-between items-center py-1.5 px-2 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800">
                  <label
                    htmlFor="hs-pro-dachdds5"
                    className="flex flex-1 items-center gap-x-3 cursor-pointer text-[13px] text-gray-800 dark:text-neutral-300"
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
                      <path d="M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z" />
                      <path d="m2 22 3-3" />
                      <path d="M7.5 13.5 10 11" />
                      <path d="M10.5 16.5 13 14" />
                      <path d="m18 3-4 4h6l-4 4" />
                    </svg>
                    Requests
                  </label>
                  <input
                    type="checkbox"
                    className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                    id="hs-pro-dachdds5"
                  />
                </div>
                <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                <button
                  type="button"
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                >
                  Delete all
                </button>
              </div>
            </div>
            {/* End Add Activity Dropdown */}
          </div>
          {/* End Add Activity Dropdown */}
        </div>
      </div>
      {/* End Header */}
      {/* Audience */}
      <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
        {/* Tab Nav */}
        <nav
          className="relative z-0 flex border-b border-gray-200 dark:border-neutral-700"
          aria-label="Tabs"
          role="tablist"
          aria-orientation="horizontal"
        >
          {/* Nav Item */}
          <button
            type="button"
            className="hs-tab-active:border-t-indigo-600 relative flex-1 first:border-s-0 border-s border-t-[3px] md:border-t-4 border-t-transparent hover:border-t-gray-300 focus:outline-none focus:border-t-gray-300 p-3.5 xl:px-6 text-start focus:z-10 dark:hs-tab-active:border-t-indigo-500 dark:border-t-transparent dark:border-neutral-700 dark:hover:border-t-neutral-600 dark:focus:border-t-neutral-600 active"
            id="bar-with-underline-item-1"
            aria-selected="true"
            data-hs-tab="#bar-with-underline-1"
            aria-controls="bar-with-underline-1"
            role="tab"
          >
            <span className="flex gap-x-4">
              <svg
                className="hidden xl:block shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
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
              <span className="grow text-center md:text-start">
                <span className="block text-xs md:text-sm text-gray-500 dark:text-neutral-500">
                  Users
                </span>
                <span className="hidden xl:mt-1 md:flex md:justify-between md:items-center md:gap-x-2">
                  <span className="block text-lg lg:text-xl xl:text-2xl text-gray-800 dark:text-neutral-200">
                    54,382
                  </span>
                  <span className="inline-flex items-center gap-x-1 text-xs lg:text-sm text-gray-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4 text-teal-500 dark:text-teal-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    1.2%
                  </span>
                </span>
              </span>
            </span>
          </button>
          {/* End Nav Item */}
          {/* Nav Item */}
          <button
            type="button"
            className="hs-tab-active:border-t-indigo-600 relative flex-1 first:border-s-0 border-s border-t-[3px] md:border-t-4 border-t-transparent hover:border-t-gray-300 focus:outline-none focus:border-t-gray-300 p-3.5 xl:px-6 text-start focus:z-10 dark:hs-tab-active:border-t-indigo-500 dark:border-t-transparent dark:border-neutral-700 dark:hover:border-t-neutral-600 dark:focus:border-t-neutral-600"
            id="bar-with-underline-item-2"
            aria-selected="false"
            data-hs-tab="#bar-with-underline-2"
            aria-controls="bar-with-underline-2"
            role="tab"
          >
            <span className="flex gap-x-4">
              <svg
                className="hidden xl:block shrink-0 size-5 text-gray-500 dark:text-neutral-500"
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
              <span className="grow text-center md:text-start">
                <span className="block text-xs md:text-sm text-gray-500 dark:text-neutral-500">
                  New users
                </span>
                <span className="hidden xl:mt-1 md:flex md:justify-between md:items-center md:gap-x-2">
                  <span className="block text-lg lg:text-xl xl:text-2xl text-gray-800 dark:text-neutral-200">
                    3.301
                  </span>
                  <span className="inline-flex items-center gap-x-1 text-xs lg:text-sm text-gray-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4 text-red-500 dark:text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                    5.2%
                  </span>
                </span>
              </span>
            </span>
          </button>
          {/* End Nav Item */}
          {/* Nav Item */}
          <button
            type="button"
            className="hs-tab-active:border-t-indigo-600 relative flex-1 first:border-s-0 border-s border-t-[3px] md:border-t-4 border-t-transparent hover:border-t-gray-300 focus:outline-none focus:border-t-gray-300 p-3.5 xl:px-6 text-start focus:z-10 dark:hs-tab-active:border-t-indigo-500 dark:border-t-transparent dark:border-neutral-700 dark:hover:border-t-neutral-600 dark:focus:border-t-neutral-600"
            id="bar-with-underline-item-3"
            aria-selected="false"
            data-hs-tab="#bar-with-underline-3"
            aria-controls="bar-with-underline-3"
            role="tab"
          >
            <span className="flex gap-x-4">
              <svg
                className="hidden xl:block shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              <span className="grow text-center md:text-start">
                <span className="block text-xs md:text-sm text-gray-500 dark:text-neutral-500">
                  Returning users
                </span>
                <span className="hidden xl:mt-1 md:flex md:justify-between md:items-center md:gap-x-2">
                  <span className="block text-lg lg:text-xl xl:text-2xl text-gray-800 dark:text-neutral-200">
                    50,402
                  </span>
                  <span className="inline-flex items-center gap-x-1 text-xs lg:text-sm text-gray-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4 text-red-500 dark:text-red-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                      <polyline points="16 17 22 17 22 11" />
                    </svg>
                    14.7%
                  </span>
                </span>
              </span>
            </span>
          </button>
          {/* End Nav Item */}
          {/* Nav Item */}
          <button
            type="button"
            className="hs-tab-active:border-t-indigo-600 relative flex-1 first:border-s-0 border-s border-t-[3px] md:border-t-4 border-t-transparent hover:border-t-gray-300 focus:outline-none focus:border-t-gray-300 p-3.5 xl:px-6 text-start focus:z-10 dark:hs-tab-active:border-t-indigo-500 dark:border-t-transparent dark:border-neutral-700 dark:hover:border-t-neutral-600 dark:focus:border-t-neutral-600"
            id="bar-with-underline-item-4"
            aria-selected="false"
            data-hs-tab="#bar-with-underline-4"
            aria-controls="bar-with-underline-4"
            role="tab"
          >
            <span className="flex gap-x-4">
              <svg
                className="hidden xl:block shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                xmlns="http://www.w3.org/2000/svg"
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
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="grow text-center md:text-start">
                <span className="block text-xs md:text-sm text-gray-500 dark:text-neutral-500">
                  Avg. engagement time
                </span>
                <span className="hidden xl:mt-1 md:flex md:justify-between md:items-center md:gap-x-2">
                  <span className="block text-lg lg:text-xl xl:text-2xl text-gray-800 dark:text-neutral-200">
                    2m 25s
                  </span>
                  <span className="inline-flex items-center gap-x-1 text-xs lg:text-sm text-gray-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4 text-teal-500 dark:text-teal-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                      <polyline points="16 7 22 7 22 13" />
                    </svg>
                    3%
                  </span>
                </span>
              </span>
            </span>
          </button>
          {/* End Nav Item */}
        </nav>
        {/* End Tab Nav */}
        {/* Tab Content */}
        <div className="p-5">
          {/* Tab Content Item */}
          <div
            id="bar-with-underline-1"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-1"
          >
            {/* Title Stats */}
            <div className="md:hidden flex items-center gap-x-2 mb-4">
              <span className="inline-flex items-center gap-x-1 text-lg font-medium text-gray-800 dark:text-neutral-200">
                54,382
              </span>
              <span className="inline-flex items-center gap-x-1 text-xs lg:text-sm text-gray-600 dark:text-neutral-400">
                <svg
                  className="size-4 text-teal-500 dark:text-teal-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                1.2%
              </span>
            </div>
            {/* End Title Stats */}
            {/* Grid */}
            <div className="xl:grid xl:grid-cols-12 xl:items-center xl:gap-x-5">
              <div className="xl:col-span-7">
                <div id="hs-users-datamap" className="sm:min-h-[430px] " />
              </div>
              {/* End Col */}
              <div className="xl:col-span-5">
                {/* Table Section */}
                <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  <div className="min-w-full inline-block align-middle">
                    {/* Table */}
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                      <thead>
                        <tr className="space-x-2">
                          <th scope="col" className="xl:min-w-[220px] min-w-48">
                            <div className="py-2.5 text-text-start flex items-center gap-x-1 text-sm font-normal text-gray-500 dark:text-neutral-500">
                              Country
                            </div>
                          </th>
                          <th scope="col" className="min-w-[100px] ">
                            <div className="py-2.5 text-text-start flex items-center gap-x-1 text-sm font-normal text-gray-500 dark:text-neutral-500">
                              Visits
                            </div>
                          </th>
                          <th scope="col" className="min-w-[100px] ">
                            <div className="py-2.5 text-text-start flex items-center gap-x-1 text-sm font-normal text-gray-500 dark:text-neutral-500">
                              Purchases
                            </div>
                          </th>
                          <th scope="col" className="min-w-[100px] ">
                            <div className="py-2.5 text-text-start flex items-center gap-x-1 text-sm font-normal text-gray-500 dark:text-neutral-500">
                              Change
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        <tr>
                          <td className="size-px whitespace-nowrap py-3">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="shrink-0 size-5 rounded-full"
                                xmlns="http://www.w3.org/2000/svg"
                                id="flag-icon-css-us"
                                viewBox="0 0 512 512"
                              >
                                <g fillRule="evenodd">
                                  <g strokeWidth="1pt">
                                    <path
                                      fill="#bd3d44"
                                      d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                      transform="scale(3.9385)"
                                    />
                                    <path
                                      fill="#fff"
                                      d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                                      transform="scale(3.9385)"
                                    />
                                  </g>
                                  <path
                                    fill="#192f5d"
                                    d="M0 0h98.8v70H0z"
                                    transform="scale(3.9385)"
                                  />
                                  <path
                                    fill="#fff"
                                    d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                                    transform="scale(3.9385)"
                                  />
                                </g>
                              </svg>
                              <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                United States
                              </span>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              10,013
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              $5,361
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="inline-flex items-center gap-x-1 text-sm text-gray-600 dark:text-neutral-400">
                              3.2%
                              <svg
                                className="shrink-0 size-4 text-red-500 dark:text-red-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                                <polyline points="16 17 22 17 22 11" />
                              </svg>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="size-px whitespace-nowrap py-3">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="shrink-0 size-5 rounded-full"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                id="flag-icon-css-in"
                                viewBox="0 0 512 512"
                              >
                                <path fill="#f93" d="M0 0h512v170.7H0z" />
                                <path fill="#fff" d="M0 170.7h512v170.6H0z" />
                                <path fill="#128807" d="M0 341.3h512V512H0z" />
                                <g transform="translate(256 256) scale(3.41333)">
                                  <circle r={20} fill="#008" />
                                  <circle r="17.5" fill="#fff" />
                                  <circle r="3.5" fill="#008" />
                                  <g id="d">
                                    <g id="c">
                                      <g id="b">
                                        <g id="a" fill="#008">
                                          <circle
                                            r=".9"
                                            transform="rotate(7.5 -8.8 133.5)"
                                          />
                                          <path d="M0 17.5L.6 7 0 2l-.6 5L0 17.5z" />
                                        </g>
                                        <use
                                          width="100%"
                                          height="100%"
                                          transform="rotate(15)"
                                          xlinkHref="#a"
                                        />
                                      </g>
                                      <use
                                        width="100%"
                                        height="100%"
                                        transform="rotate(30)"
                                        xlinkHref="#b"
                                      />
                                    </g>
                                    <use
                                      width="100%"
                                      height="100%"
                                      transform="rotate(60)"
                                      xlinkHref="#c"
                                    />
                                  </g>
                                  <use
                                    width="100%"
                                    height="100%"
                                    transform="rotate(120)"
                                    xlinkHref="#d"
                                  />
                                  <use
                                    width="100%"
                                    height="100%"
                                    transform="rotate(-120)"
                                    xlinkHref="#d"
                                  />
                                </g>
                              </svg>
                              <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                India
                              </span>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              8,545
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              $5,361
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="inline-flex items-center gap-x-1 text-sm text-gray-600 dark:text-neutral-400">
                              45.8%
                              <svg
                                className="shrink-0 size-4 text-teal-500 dark:text-teal-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                <polyline points="16 7 22 7 22 13" />
                              </svg>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="size-px whitespace-nowrap py-3">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="shrink-0 size-5 rounded-full"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512"
                              >
                                <defs>
                                  <path
                                    id="cn12da"
                                    fill="#ffde00"
                                    d="M1-.3-.7.8 0-1 .6.8-1-.3z"
                                  />
                                </defs>
                                <path fill="#de2910" d="M0 0h512v512H0z" />
                                <use
                                  xlinkHref="#cn12da"
                                  width={30}
                                  height={20}
                                  transform="matrix(76.8 0 0 76.8 128 128)"
                                />
                                <use
                                  xlinkHref="#cn12da"
                                  width={30}
                                  height={20}
                                  transform="rotate(-121 142.6 -47) scale(25.5827)"
                                />
                                <use
                                  xlinkHref="#cn12da"
                                  width={30}
                                  height={20}
                                  transform="rotate(-98.1 198 -82) scale(25.6)"
                                />
                                <use
                                  xlinkHref="#cn12da"
                                  width={30}
                                  height={20}
                                  transform="rotate(-74 272.4 -114) scale(25.6137)"
                                />
                                <use
                                  xlinkHref="#cn12da"
                                  width={30}
                                  height={20}
                                  transform="matrix(16 -19.968 19.968 16 256 230.4)"
                                />
                              </svg>
                              <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                China
                              </span>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              6,837
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              $3,954
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="inline-flex items-center gap-x-1 text-sm text-gray-600 dark:text-neutral-400">
                              24.4%
                              <svg
                                className="shrink-0 size-4 text-teal-500 dark:text-teal-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                <polyline points="16 7 22 7 22 13" />
                              </svg>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="size-px whitespace-nowrap py-3">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="shrink-0 size-5 rounded-full"
                                xmlns="http://www.w3.org/2000/svg"
                                id="flag-icons-br"
                                viewBox="0 0 512 512"
                              >
                                <g strokeWidth="1pt">
                                  <path
                                    fill="#229e45"
                                    fillRule="evenodd"
                                    d="M0 0h512v512H0z"
                                  />
                                  <path
                                    fill="#f8e509"
                                    fillRule="evenodd"
                                    d="m261.4 405.4 229.8-149.2L260 106.6l-230.7 150 232 148.8z"
                                  />
                                  <path
                                    fill="#2b49a3"
                                    fillRule="evenodd"
                                    d="M361.5 256a97.2 97.2 0 1 1-194.3-.2 97.2 97.2 0 0 1 194.3.2z"
                                  />
                                  <path
                                    fill="#ffffef"
                                    fillRule="evenodd"
                                    d="m232.3 314.2-3-1.8-3.1 1.6.7-3.5-2.4-2.5 3.4-.4 1.6-3.2 1.5 3.3 3.4.6-2.6 2.4m65.7 20-3-1.8-3.2 1.6.7-3.5-2.4-2.5 3.5-.4 1.6-3.2 1.4 3.3 3.4.6-2.5 2.4m-27.6-22.9-2.6-1.5-2.7 1.3.6-3-2-2.2 2.9-.3 1.4-2.7 1.2 2.8 3 .5-2.2 2m66.2-6.4-2.6-1.5-2.6 1.3.6-2.9-2-2.1 2.9-.4 1.3-2.6 1.3 2.7 2.9.5-2.2 2m-66.6-16.7-3-1.8-3.1 1.6.7-3.5-2.4-2.5 3.4-.4 1.6-3.1 1.5 3.2 3.4.6-2.6 2.4M188 245l-3-1.8-3 1.6.6-3.5-2.4-2.5 3.5-.4 1.6-3.2 1.4 3.3 3.4.6-2.5 2.4m10.1 43.5-3-1.7-3.1 1.5.7-3.4-2.4-2.6 3.4-.4 1.6-3 1.5 3.1 3.4.7-2.6 2.3m100.6-51.3-2.6-1.5-2.8 1.3.6-3-2-2.3 3-.3 1.4-2.8 1.3 2.9 3 .5-2.3 2.1m-5 29.2L290 255l-2.1 1 .4-2.4-1.6-1.7 2.4-.3 1.1-2.2 1 2.3 2.4.4-1.8 1.6m-108.4 38.5-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.4-.2 1-2 1 2 2.3.5-1.7 1.6m152.6 11.5-1.7-.8-1.7.7.4-1.7-1.3-1.3 1.9-.2.9-1.5.7 1.6 1.9.3-1.4 1.2"
                                  />
                                  <path
                                    fill="#ffffef"
                                    fillRule="evenodd"
                                    d="m183.5 292.3-2-1.2-2.1 1 .5-2.3-1.7-1.7 2.3-.2 1.1-2 1 2 2.3.5-1.7 1.6"
                                  />
                                  <path
                                    fill="#ffffef"
                                    fillRule="evenodd"
                                    d="m183.5 292.3-2-1.2-2.1 1 .5-2.3-1.7-1.7 2.3-.2 1.1-2 1 2 2.3.5-1.7 1.6m32.2 2.3-2-1.2-2 1 .4-2.3-1.6-1.7 2.3-.2 1-2.1 1 2.1 2.3.5-1.7 1.6m-3.7 13-2-1.2-2 1 .4-2.3-1.6-1.7 2.3-.3 1-2 1 2 2.3.5-1.7 1.6m66.7-17-2-1.2-2.1 1 .4-2.3-1.6-1.7 2.3-.2 1.1-2.1 1 2.1 2.2.4-1.7 1.6m-19.1 2.4-2-1.2-2.1 1 .5-2.3-1.6-1.7 2.3-.2 1-2.1 1 2.1 2.3.4-1.7 1.6m-52.5-4.4-1.2-.7-1.3.6.2-1.5-1-1 1.5-.2.7-1.3.5 1.4 1.5.2-1 1M333.2 310l-2-1.1-2.1 1 .5-2.3-1.6-1.7 2.3-.3 1-2 1 2 2.3.5-1.7 1.6m-16 4.4-1.6-1-1.7 1 .4-2-1.4-1.4 2-.2.8-1.7.8 1.7 2 .4-1.5 1.3m8 1.8-1.6-1-1.6.9.3-1.8-1.2-1.3 1.8-.2.8-1.6.7 1.6 1.8.3-1.3 1.3m22.2-17.4-1.5-.9-1.6.8.4-1.7-1.2-1.3 1.7-.2.8-1.5.7 1.6 1.7.3-1.3 1.2M317 322.9l-2-1.1-2 1 .5-2.2-1.6-1.5 2.2-.3 1.1-1.9 1 2 2.1.4-1.6 1.4m.4 10.9-1.8-1-1.8.9.4-2.2-1.4-1.5 2-.3 1-1.9.8 2 2 .4-1.5 1.4M302.3 312l-1.5-.9-1.6.8.4-1.8-1.2-1.2 1.7-.2.8-1.6.7 1.6 1.7.3-1.3 1.2m-13.5 1.8-1.5-.9-1.6.8.4-1.8-1.2-1.2 1.7-.2.8-1.6.7 1.6 1.7.3-1.2 1.2M265 291.4l-1.5-.9-1.6.8.4-1.7-1.2-1.3 1.7-.2.8-1.5.7 1.6 1.7.3-1.3 1.1m2.9 43.5-1.3-.7-1.3.7.3-1.5-1-1 1.4-.3.7-1.3.6 1.4 1.5.2-1.1 1m-35.2-66-3-1.7-3.1 1.5.7-3.4-2.4-2.6 3.4-.4 1.6-3.1 1.5 3.2 3.4.6-2.6 2.4"
                                  />
                                  <path
                                    fill="#fff"
                                    fillRule="evenodd"
                                    d="M355.1 291a95 95 0 0 0 4.4-15.1c-51.6-45.4-109.2-68.7-182-63.9a95 95 0 0 0-6.4 15.9 233 233 0 0 1 184 63z"
                                  />
                                  <path
                                    fill="#309e3a"
                                    d="m331.9 265.4 1.8 1a2.6 2.6 0 0 0-.2 1.8c.1.4.5.9 1 1.2.6.4 1.1.6 1.6.6.4 0 .8-.3 1-.6.1-.2.2-.4.1-.7l-.3-.8-1.2-1.3a5.9 5.9 0 0 1-1.4-2.3 2.8 2.8 0 0 1 1.6-3.3 2.9 2.9 0 0 1 1.7-.2 5.3 5.3 0 0 1 2 .9 6 6 0 0 1 2 2.4 3 3 0 0 1-.5 2.6l-1.8-1.1c.2-.5.3-1 .2-1.4-.1-.3-.5-.7-1-1-.5-.4-1-.5-1.4-.5a.8.8 0 0 0-.6.3.8.8 0 0 0-.1.7c0 .4.5 1 1.2 1.7l1.5 2a3 3 0 0 1-.2 3.2 3.1 3.1 0 0 1-1.4 1.1 3 3 0 0 1-1.9.2 6 6 0 0 1-2.1-1 4.6 4.6 0 0 1-2-2.5c-.3-.9-.2-1.9.4-3zm-8.8-5.7 2 1a2.6 2.6 0 0 0-.2 1.6c.1.5.5 1 1 1.3.6.4 1.1.5 1.6.4.4 0 .8-.2 1-.6a1 1 0 0 0 .1-.6c0-.3-.1-.5-.4-.8l-1.2-1.3a6 6 0 0 1-1.5-2.2 2.8 2.8 0 0 1 .3-2.4 2.8 2.8 0 0 1 1.2-1 3 3 0 0 1 1.7-.2c.6 0 1.2.3 2 .8 1 .7 1.8 1.4 2 2.3a3 3 0 0 1-.3 2.6l-1.9-1.1c.3-.5.3-1 .2-1.3-.2-.4-.5-.7-1-1a2.4 2.4 0 0 0-1.5-.5.8.8 0 0 0-.6.4.8.8 0 0 0 0 .7c0 .3.5.9 1.2 1.7.8.7 1.3 1.4 1.6 1.8a3 3 0 0 1-.1 3.3 3.2 3.2 0 0 1-3.2 1.4 6.1 6.1 0 0 1-2.2-.9 4.7 4.7 0 0 1-2.1-2.4 4.1 4.1 0 0 1 .3-3zm-10.8-3 5.6-9 6.7 4-1 1.6-4.8-3-1.3 2 4.6 2.8-1 1.6-4.5-2.8-1.5 2.5 5 3-.9 1.6-6.9-4.2zm-15.8-12.9.9-1.6 4 2.2-1.9 3.7a7.2 7.2 0 0 1-4.8-.6 5.8 5.8 0 0 1-2.2-2 4.5 4.5 0 0 1-.8-2.6c0-1 .3-1.9.8-2.8a6.1 6.1 0 0 1 2-2.3c.7-.6 1.7-.9 2.7-.9.7 0 1.6.3 2.5.7a5 5 0 0 1 2.3 2.2c.4.8.5 1.7.3 2.7l-2.1-.6a2.2 2.2 0 0 0-.2-1.5 2.5 2.5 0 0 0-1.2-1.1 2.9 2.9 0 0 0-2.4-.3c-.7.3-1.4 1-2 2a4.8 4.8 0 0 0-.5 3c.2.8.7 1.4 1.6 1.8l1.3.4h1.3l.6-1.2-2.2-1.2zm-68.8-17 1.6-10.6 3.2.5.8 7.5 3-7 3.1.5-1.5 10.6-2-.3 1.2-8.3-3.3 8-2-.3-.9-8.7-1.2 8.4-2-.3zm-10.7-1.3 1-10.6 7.8.7-.1 1.8-5.8-.5-.2 2.3 5.3.5-.1 1.8-5.3-.5-.3 3 5.9.5-.2 1.8-8-.8z"
                                  />
                                  <g strokeOpacity=".5">
                                    <path
                                      fill="#309e3a"
                                      d="M181.4 218.8c0-1 .2-2 .5-2.7l1-1.4 1.5-1a5.8 5.8 0 0 1 2.3-.3 5 5 0 0 1 3.7 1.6c1 1 1.3 2.3 1.3 4 0 1.8-.6 3.1-1.5 4a5 5 0 0 1-3.8 1.4 5 5 0 0 1-3.7-1.5 5 5 0 0 1-1.3-4z"
                                    />
                                    <path
                                      fill="#f7ffff"
                                      d="M183.6 218.8c0 1.2.2 2.2.8 2.8.5.7 1.2 1 2 1a3 3 0 0 0 2.2-.9c.5-.6.8-1.5.9-2.7 0-1.3-.2-2.2-.8-2.8a2.7 2.7 0 0 0-2-1c-1 0-1.7.3-2.2.9-.6.6-.9 1.5-1 2.7z"
                                    />
                                  </g>
                                  <g strokeOpacity=".5">
                                    <path
                                      fill="#309e3a"
                                      d="m194 224.4.1-10.7h4.5c1.2 0 2 .2 2.5.4s1 .5 1.2 1 .5 1 .5 1.7c0 .8-.3 1.4-.7 2-.5.5-1.2.8-2.2 1 .5.2.9.5 1.2.8l1.2 1.8 1.3 2H201l-1.5-2.3a16 16 0 0 0-1.2-1.6 1.6 1.6 0 0 0-.6-.4 3.5 3.5 0 0 0-1-.2h-.5v4.5H194z"
                                    />
                                    <path
                                      fill="#fff"
                                      d="M196.2 218.2h1.6a8.1 8.1 0 0 0 2 0l.5-.5c.2-.2.3-.5.3-.8 0-.4-.1-.7-.3-.9a1.3 1.3 0 0 0-.8-.4h-3.2v2.6z"
                                    />
                                  </g>
                                  <g strokeOpacity=".5">
                                    <path
                                      fill="#309e3a"
                                      d="m206.2 214.2 3.9.2a7.6 7.6 0 0 1 2 .3 4 4 0 0 1 1.5 1 5 5 0 0 1 1 1.9c.2.7.2 1.5.2 2.5a5.3 5.3 0 0 1-1.7 4.1c-.4.3-.9.6-1.5.8h-2l-4-.1.6-10.7z"
                                    />
                                    <path
                                      fill="#fff"
                                      d="m208.2 216.1-.3 7 1.6.2h1.3l.9-.5c.3-.2.4-.5.6-1l.3-2-.1-1.8c-.2-.5-.3-.8-.6-1a2 2 0 0 0-1-.6 9.6 9.6 0 0 0-1.7-.2h-1z"
                                    />
                                  </g>
                                  <g strokeOpacity=".5">
                                    <path
                                      fill="#309e3a"
                                      d="m258.5 233.3 2.5-10.4 3.3.8c1.3.3 2.1.6 2.5.8.5.3 1 .7 1.2 1.3.3.7.3 1.4.1 2.2a3 3 0 0 1-1.9 2.3 3 3 0 0 1-1.1.3 12 12 0 0 1-2.2-.4l-1.4-.3-1 3.9-2-.5z"
                                    />
                                    <path
                                      fill="#fff"
                                      d="m262.6 225.2-.7 3 1.2.2c.8.2 1.4.3 1.7.2a1.4 1.4 0 0 0 1.2-1l-.1-1.1a1.5 1.5 0 0 0-.8-.7l-1.5-.4-1-.2z"
                                    />
                                  </g>
                                  <g strokeOpacity=".5">
                                    <path
                                      fill="#309e3a"
                                      d="m268.4 236.3 3.5-10.1 4.3 1.5a8 8 0 0 1 2.2 1c.4.4.7.9.9 1.5s0 1.1-.2 1.7c-.2.8-.7 1.3-1.3 1.6a3 3 0 0 1-2.3.3l.8 1.2.6 2 .5 2.4-2.4-.8-.7-2.7a14.5 14.5 0 0 0-.6-1.9 1.6 1.6 0 0 0-.4-.6 3.4 3.4 0 0 0-1-.5l-.4-.1-1.5 4.2-2-.7z"
                                    />
                                    <path
                                      fill="#fff"
                                      d="m272.4 231.2 1.5.5 1.9.5c.3 0 .5 0 .7-.2l.5-.7v-1a1.3 1.3 0 0 0-.6-.6l-1.5-.5-1.6-.6-.9 2.6z"
                                    />
                                  </g>
                                  <g strokeOpacity=".5">
                                    <path
                                      fill="#309e3a"
                                      d="M280.9 235.9a6.8 6.8 0 0 1 1.3-2.5c.3-.5.8-.8 1.3-1.1a4.2 4.2 0 0 1 1.6-.5c.7 0 1.5 0 2.3.3a5 5 0 0 1 3.2 2.5c.6 1.2.7 2.7.1 4.3a5.6 5.6 0 0 1-2.5 3.5 5 5 0 0 1-4 .2 5 5 0 0 1-3.2-2.5 5.5 5.5 0 0 1-.1-4.2z"
                                    />
                                    <path
                                      fill="#fff"
                                      d="M283 236.5c-.3 1.1-.3 2 0 2.8.4.8 1 1.3 1.8 1.6.8.2 1.5.1 2.2-.3.7-.4 1.3-1.2 1.7-2.4.3-1.2.3-2.1 0-2.9a2.7 2.7 0 0 0-1.8-1.5 2.7 2.7 0 0 0-2.3.3c-.7.4-1.2 1.2-1.6 2.4z"
                                    />
                                  </g>
                                  <g strokeOpacity=".5">
                                    <path
                                      fill="#309e3a"
                                      d="m301.7 250.8 4.9-9.5 4 2c1 .6 1.7 1 2 1.4.4.5.6 1 .7 1.5s0 1.2-.4 1.7c-.3.7-.8 1.2-1.5 1.5-.7.2-1.4.2-2.3-.1.3.4.5.9.6 1.3l.3 2.1.2 2.5-2.3-1.2-.3-2.8-.3-2a1.6 1.6 0 0 0-.4-.6 3.5 3.5 0 0 0-.9-.6l-.4-.2-2 4-1.9-1z"
                                    />
                                    <path
                                      fill="#fff"
                                      d="m306.4 246.3 1.4.7 1.8.8c.3 0 .5 0 .7-.2a1.5 1.5 0 0 0 .8-1.5 1.3 1.3 0 0 0-.6-.7 21 21 0 0 0-1.3-.8l-1.5-.7-1.3 2.4z"
                                    />
                                  </g>
                                  <g strokeOpacity=".5">
                                    <path
                                      fill="#309e3a"
                                      d="M341.2 270.3c.6-1 1.2-1.6 2-2a5 5 0 0 1 1.6-.7 4.2 4.2 0 0 1 1.6 0c.7.1 1.5.4 2.2 1a5 5 0 0 1 2.3 3.3 6 6 0 0 1-1.1 4.1 5.6 5.6 0 0 1-3.5 2.6 5 5 0 0 1-3.9-.9 5 5 0 0 1-2.3-3.3 5.5 5.5 0 0 1 1-4.1z"
                                    />
                                    <path
                                      fill="#fff"
                                      d="M343 271.4c-.6 1-.9 2-.8 2.8a3 3 0 0 0 1.3 2 2.7 2.7 0 0 0 2.2.4c.8-.2 1.6-.8 2.3-1.9.7-1 1-1.9.8-2.7 0-.8-.5-1.4-1.2-2s-1.5-.6-2.3-.4c-.8.2-1.5.8-2.2 1.8z"
                                    />
                                  </g>
                                  <path
                                    fill="#309e3a"
                                    d="m246.4 229 1.7-7.6 5.6 1.3-.3 1.3-4-1-.4 1.7 3.7.9-.3 1.3-3.7-1-.5 2.1 4.2 1-.3 1.3-5.7-1.3z"
                                  />
                                </g>
                              </svg>
                              <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                Brasil
                              </span>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              4,512
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              $2,512
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="inline-flex items-center gap-x-1 text-sm text-gray-600 dark:text-neutral-400">
                              12%
                              <svg
                                className="shrink-0 size-4 text-red-500 dark:text-red-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                                <polyline points="16 17 22 17 22 11" />
                              </svg>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="size-px whitespace-nowrap py-3">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="shrink-0 size-5 rounded-full"
                                xmlns="http://www.w3.org/2000/svg"
                                id="flag-icons-de"
                                viewBox="0 0 512 512"
                              >
                                <path fill="#ffce00" d="M0 341.3h512V512H0z" />
                                <path d="M0 0h512v170.7H0z" />
                                <path fill="#d00" d="M0 170.7h512v170.6H0z" />
                              </svg>
                              <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                Germany
                              </span>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              3,795
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              $1,173
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="inline-flex items-center gap-x-1 text-sm text-gray-600 dark:text-neutral-400">
                              0.9%
                              <svg
                                className="shrink-0 size-4 text-teal-500 dark:text-teal-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                                <polyline points="16 7 22 7 22 13" />
                              </svg>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="size-px whitespace-nowrap py-3">
                            <div className="flex items-center gap-x-3">
                              <svg
                                className="shrink-0 size-5 rounded-full"
                                xmlns="http://www.w3.org/2000/svg"
                                id="flag-icons-gb"
                                viewBox="0 0 512 512"
                              >
                                <path fill="#012169" d="M0 0h512v512H0z" />
                                <path
                                  fill="#FFF"
                                  d="M512 0v64L322 256l190 187v69h-67L254 324 68 512H0v-68l186-187L0 74V0h62l192 188L440 0z"
                                />
                                <path
                                  fill="#C8102E"
                                  d="m184 324 11 34L42 512H0v-3l184-185zm124-12 54 8 150 147v45L308 312zM512 0 320 196l-4-44L466 0h46zM0 1l193 189-59-8L0 49V1z"
                                />
                                <path
                                  fill="#FFF"
                                  d="M176 0v512h160V0H176zM0 176v160h512V176H0z"
                                />
                                <path
                                  fill="#C8102E"
                                  d="M0 208v96h512v-96H0zM208 0v512h96V0h-96z"
                                />
                              </svg>
                              <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                United Kingdom
                              </span>
                            </div>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              2,100
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="text-sm text-gray-600 dark:text-neutral-400">
                              $1,012
                            </span>
                          </td>
                          <td className="size-px whitespace-nowrap py-3">
                            <span className="inline-flex items-center gap-x-1 text-sm text-gray-600 dark:text-neutral-400">
                              0.1%
                              <svg
                                className="shrink-0 size-4 text-red-500 dark:text-red-400"
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
                                <polyline points="16 17 22 17 22 11" />
                              </svg>
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    {/* End Table */}
                  </div>
                </div>
                {/* End Table Section */}
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}
          </div>
          {/* End Tab Content Item */}
          {/* Tab Content Item */}
          <div
            id="bar-with-underline-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-2"
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
                <g filter="url(#filter2)">
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
                    className="fill-gray-200 dark:fill-neutral-700"
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
                    id="filter2"
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
                  No New Users data
                </p>
                <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                  In the meantime, you can create new custom insights to monitor
                  your most important metrics
                </p>
              </div>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                data-hs-overlay="#hs-pro-atbetb"
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
                Create insight
              </button>
            </div>
            {/* End Empty State */}
          </div>
          {/* End Tab Content Item */}
          {/* Tab Content Item */}
          <div
            id="bar-with-underline-3"
            className="hidden"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-3"
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
                    className="fill-gray-200 dark:fill-neutral-700"
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
                  No Returning Users data
                </p>
                <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                  In the meantime, you can create new custom insights to monitor
                  your most important metrics
                </p>
              </div>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                data-hs-overlay="#hs-pro-atbetb"
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
                Create insight
              </button>
            </div>
            {/* End Empty State */}
          </div>
          {/* End Tab Content Item */}
          {/* Tab Content Item */}
          <div
            id="bar-with-underline-4"
            className="hidden"
            role="tabpanel"
            aria-labelledby="bar-with-underline-item-4"
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
                    className="fill-gray-200 dark:fill-neutral-700"
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
                  No Avg. Engagement Time data
                </p>
                <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                  In the meantime, you can create new custom insights to monitor
                  your most important metrics
                </p>
              </div>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                data-hs-overlay="#hs-pro-atbetb"
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
                Create insight
              </button>
            </div>
            {/* End Empty State */}
          </div>
          {/* End Tab Content Item */}
        </div>
        {/* End Tab Content */}
      </div>
      {/* End Audience */}
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Listbar Card */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="p-5 pb-4 grid grid-cols-2 items-center gap-x-4">
            <div>
              <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
                Goal Conversions
              </h2>
            </div>
            {/* End Col */}
            <div className="flex justify-end items-center gap-x-1">
              {/* Download Dropdown */}
              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrachd8"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                  aria-labelledby="hs-pro-dbrachd8"
                >
                  {/* Card */}
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
                          htmlFor="hs-pro-dprgcchddts1"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Excel</span>
                          <input
                            type="radio"
                            name="hs-pro-dprgcchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dprgcchddts1"
                            defaultChecked=""
                          />
                        </label>
                        <label
                          htmlFor="hs-pro-dprgcchddts2"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Word</span>
                          <input
                            type="radio"
                            name="hs-pro-dprgcchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dprgcchddts2"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dprgcchdds1"
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
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                        Section name
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dprgcchdds1"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dprgcchdds2"
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
                          <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
                          <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
                        </svg>
                        Comparison stats
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dprgcchdds2"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dprgcchdds3"
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
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                        Legend indicator
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dprgcchdds3"
                        defaultChecked=""
                      />
                    </div>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Download Dropdown */}
              </div>
              {/* End Download Dropdown */}
              {/* More Dropdown */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-agcmd"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                {/* More Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-agcmd"
                >
                  <div className="p-1">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={18} cy={5} r={3} />
                        <circle cx={6} cy={12} r={3} />
                        <circle cx={18} cy={19} r={3} />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share reports
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                      View in fullscreen
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M3 3h6l6 18h6" />
                        <path d="M14 3h7" />
                      </svg>
                      Connect other apps
                    </button>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <line x1={9} x2={15} y1={10} y2={10} />
                        <line x1={12} x2={12} y1={7} y2={13} />
                      </svg>
                      Submit Feedback
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
            </div>
            {/* End Col */}
          </div>
          {/* End Header */}
          {/* Heading */}
          <div className="pb-2 px-7 flex gap-x-2">
            <div className="w-full">
              <h3 className="inline-block font-medium text-xs uppercase text-gray-800 dark:text-white">
                Goal
              </h3>
            </div>
            <div className="w-20 text-end">
              <h3 className="inline-block font-medium text-xs uppercase text-gray-800 dark:text-white">
                Unique
              </h3>
            </div>
            <div className="w-20 text-end">
              <h3 className="inline-block font-medium text-xs uppercase text-gray-800 dark:text-white">
                Total
              </h3>
            </div>
            <div className="w-20 text-end">
              <h3 className="inline-block font-medium text-xs uppercase text-gray-800 dark:text-white">
                CR
              </h3>
            </div>
          </div>
          {/* End Heading */}
          {/* Body */}
          <div className="p-5 pt-0 space-y-4">
            {/* List Group */}
            <ul className="space-y-2">
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    preiline.co
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "100%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    39,8k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    329,3k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    19,8k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    preline.co/examples
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "65%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    27k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    56,2k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    48,2k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    preline.co/plugins
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "40%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    77,8k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    13.0k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    5.5k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    preline.co/docs
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "20%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    56,9k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    35,97k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    5k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    preline.co/figma
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "15%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    8,9k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    3,1k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    4k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    preline.co/examples/hero
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "15%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    2k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    2,2k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    76,4k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    preline.co/examples/ai-tables
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "10%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    2,1k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    22,1k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    34,1k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    Others
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "7%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    1,4k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    4k
                  </span>
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    5,1k
                  </span>
                </div>
              </li>
              {/* End List Item */}
            </ul>
            {/* End List Group */}
          </div>
          {/* End Body */}
          {/* Footer */}
          <div className="text-center border-t border-gray-200 dark:border-neutral-700">
            <a
              className="p-3 flex justify-center items-center gap-x-2 text-sm text-indigo-600 rounded-b-lg hover:text-indigo-700 focus:outline-none focus:decoration-2 focus:underline focus:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-600 dark:focus:text-indigo-600"
              href="#"
            >
              View full reports
            </a>
          </div>
          {/* End Footer */}
        </div>
        {/* End Listbar Card */}
        {/* Listbar Card */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="p-5 pb-4 grid grid-cols-2 items-center gap-x-4">
            <div>
              <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
                Devices
              </h2>
            </div>
            {/* End Col */}
            <div className="flex justify-end items-center gap-x-1">
              {/* Download Dropdown */}
              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrachd7"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                  aria-labelledby="hs-pro-dbrachd7"
                >
                  {/* Card */}
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
                          htmlFor="hs-pro-dprbchddts1"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Excel</span>
                          <input
                            type="radio"
                            name="hs-pro-dprbchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dprbchddts1"
                            defaultChecked=""
                          />
                        </label>
                        <label
                          htmlFor="hs-pro-dprbchddts2"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Word</span>
                          <input
                            type="radio"
                            name="hs-pro-dprbchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dprbchddts2"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dprbchdds1"
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
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                        Section name
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dprbchdds1"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dprbchdds2"
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
                          <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
                          <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
                        </svg>
                        Comparison stats
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dprbchdds2"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dprbchdds3"
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
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                        Legend indicator
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dprbchdds3"
                        defaultChecked=""
                      />
                    </div>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Download Dropdown */}
              </div>
              {/* End Download Dropdown */}
              {/* More Dropdown */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-admd"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                {/* More Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-admd"
                >
                  <div className="p-1">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={18} cy={5} r={3} />
                        <circle cx={6} cy={12} r={3} />
                        <circle cx={18} cy={19} r={3} />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share reports
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                      View in fullscreen
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M3 3h6l6 18h6" />
                        <path d="M14 3h7" />
                      </svg>
                      Connect other apps
                    </button>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <line x1={9} x2={15} y1={10} y2={10} />
                        <line x1={12} x2={12} y1={7} y2={13} />
                      </svg>
                      Submit Feedback
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
            </div>
            {/* End Col */}
          </div>
          {/* End Header */}
          {/* Heading */}
          <div className="pb-2 px-7 flex gap-x-2">
            <div className="w-full">
              <h3 className="inline-block font-medium text-xs uppercase text-gray-800 dark:text-white">
                Visitors
              </h3>
            </div>
            <div className="w-20 text-end">
              <h3 className="inline-block font-medium text-xs uppercase text-gray-800 dark:text-white">
                %
              </h3>
            </div>
          </div>
          {/* End Heading */}
          {/* Body */}
          <div className="p-5 pt-0 space-y-4">
            {/* List Group */}
            <ul className="space-y-2">
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    Chrome
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "760%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    78,8k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    Firefox
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "48%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    47k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    Safari
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "31%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    37,8k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    Microsoft Edge
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "20%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    26,9k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    Opera
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "12%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    8,9k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    Mobile App
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "8%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    2k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    DuckDuckGo Privacy Browser
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "5%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    2,1k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="relative size-full truncate">
                  <span className="relative z-[1] block py-1 px-2 w-full text-sm truncate text-gray-800 dark:text-neutral-200">
                    Yandex Browser
                  </span>
                  <div
                    className="absolute inset-y-0 start-0 bg-indigo-100 h-full rounded dark:bg-indigo-500/20"
                    style={{ width: "2%" }}
                  />
                </div>
                <div className="w-20 text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    1,4k
                  </span>
                </div>
              </li>
              {/* End List Item */}
            </ul>
            {/* End List Group */}
          </div>
          {/* End Body */}
          {/* Footer */}
          <div className="text-center border-t border-gray-200 dark:border-neutral-700">
            <a
              className="p-3 flex justify-center items-center gap-x-2 text-sm text-indigo-600 rounded-b-lg hover:text-indigo-700 focus:outline-none focus:decoration-2 focus:underline focus:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-600 dark:focus:text-indigo-600"
              href="#"
            >
              View full reports
            </a>
          </div>
          {/* End Footer */}
        </div>
        {/* End Listbar Card */}
      </div>
      {/* End Grid */}
      {/* Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {/* Progress w/ Labels in Card */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="p-5 pb-4 grid grid-cols-2 items-center gap-x-4">
            <div>
              <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
                Location
              </h2>
            </div>
            {/* End Col */}
            <div className="flex justify-end items-center gap-x-1">
              {/* Download Dropdown */}
              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrachd3"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                  aria-labelledby="hs-pro-dbrachd3"
                >
                  {/* Card */}
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
                          htmlFor="hs-pro-dprlchddts1"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Excel</span>
                          <input
                            type="radio"
                            name="hs-pro-dprlchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dprlchddts1"
                            defaultChecked=""
                          />
                        </label>
                        <label
                          htmlFor="hs-pro-dprlchddts2"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Word</span>
                          <input
                            type="radio"
                            name="hs-pro-dprlchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dprlchddts2"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dprlchdds1"
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
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                        Section name
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dprlchdds1"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dprlchdds2"
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
                          <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
                          <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
                        </svg>
                        Comparison stats
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dprlchdds2"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dprlchdds3"
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
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                        Legend indicator
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dprlchdds3"
                        defaultChecked=""
                      />
                    </div>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Download Dropdown */}
              </div>
              {/* End Download Dropdown */}
              {/* More Dropdown */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-almd"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                {/* More Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-almd"
                >
                  <div className="p-1">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={18} cy={5} r={3} />
                        <circle cx={6} cy={12} r={3} />
                        <circle cx={18} cy={19} r={3} />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share reports
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                      View in fullscreen
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M3 3h6l6 18h6" />
                        <path d="M14 3h7" />
                      </svg>
                      Connect other apps
                    </button>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <line x1={9} x2={15} y1={10} y2={10} />
                        <line x1={12} x2={12} y1={7} y2={13} />
                      </svg>
                      Submit Feedback
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
            </div>
            {/* End Col */}
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="h-full p-5 pt-0 space-y-4">
            {/* List Group */}
            <ul className="space-y-4">
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="w-full grid grid-cols-2 items-center gap-x-2">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    United States
                  </span>
                  <div
                    className="flex justify-end"
                    role="progressbar"
                    aria-valuenow={100}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-1.5 flex flex-col justify-center overflow-hidden bg-indigo-500 rounded-full text-xs text-white text-center whitespace-nowrap"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div className="min-w-[60px] text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    39,8%
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="w-full grid grid-cols-2 items-center gap-x-2">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    India
                  </span>
                  <div
                    className="flex justify-end"
                    role="progressbar"
                    aria-valuenow={65}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-1.5 flex flex-col justify-center overflow-hidden bg-indigo-500 rounded-full text-xs text-white text-center whitespace-nowrap"
                      style={{ width: "65%" }}
                    />
                  </div>
                </div>
                <div className="min-w-[60px] text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    27,1%
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="w-full grid grid-cols-2 items-center gap-x-2">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Canada
                  </span>
                  <div
                    className="flex justify-end"
                    role="progressbar"
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-1.5 flex flex-col justify-center overflow-hidden bg-indigo-500 rounded-full text-xs text-white text-center whitespace-nowrap"
                      style={{ width: "40%" }}
                    />
                  </div>
                </div>
                <div className="min-w-[60px] text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    13.5%
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="w-full grid grid-cols-2 items-center gap-x-2">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    China
                  </span>
                  <div
                    className="flex justify-end"
                    role="progressbar"
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-1.5 flex flex-col justify-center overflow-hidden bg-indigo-500 rounded-full text-xs text-white text-center whitespace-nowrap"
                      style={{ width: "20%" }}
                    />
                  </div>
                </div>
                <div className="min-w-[60px] text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    5,9%
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="w-full grid grid-cols-2 items-center gap-x-2">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    United Kingdom
                  </span>
                  <div
                    className="flex justify-end"
                    role="progressbar"
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-1.5 flex flex-col justify-center overflow-hidden bg-indigo-500 rounded-full text-xs text-white text-center whitespace-nowrap"
                      style={{ width: "15%" }}
                    />
                  </div>
                </div>
                <div className="min-w-[60px] text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    5,1%
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="w-full grid grid-cols-2 items-center gap-x-2">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Brasil
                  </span>
                  <div
                    className="flex justify-end"
                    role="progressbar"
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-1.5 flex flex-col justify-center overflow-hidden bg-indigo-500 rounded-full text-xs text-white text-center whitespace-nowrap"
                      style={{ width: "15%" }}
                    />
                  </div>
                </div>
                <div className="min-w-[60px] text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    5%
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="w-full grid grid-cols-2 items-center gap-x-2">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Indonesia
                  </span>
                  <div
                    className="flex justify-end"
                    role="progressbar"
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-1.5 flex flex-col justify-center overflow-hidden bg-indigo-500 rounded-full text-xs text-white text-center whitespace-nowrap"
                      style={{ width: "10%" }}
                    />
                  </div>
                </div>
                <div className="min-w-[60px] text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    2,1%
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="flex justify-between items-center gap-x-2">
                <div className="w-full grid grid-cols-2 items-center gap-x-2">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Others
                  </span>
                  <div
                    className="flex justify-end"
                    role="progressbar"
                    aria-valuenow={7}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="h-1.5 flex flex-col justify-center overflow-hidden bg-indigo-500 rounded-full text-xs text-white text-center whitespace-nowrap"
                      style={{ width: "7%" }}
                    />
                  </div>
                </div>
                <div className="min-w-[60px] text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    1,4%
                  </span>
                </div>
              </li>
              {/* End List Item */}
            </ul>
            {/* End List Group */}
          </div>
          {/* End Body */}
          {/* Footer */}
          <div className="text-center border-t border-gray-200 dark:border-neutral-700">
            <a
              className="p-3 flex justify-center items-center gap-x-2 text-sm text-indigo-600 rounded-b-lg hover:text-indigo-700 focus:outline-none focus:decoration-2 focus:underline focus:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-600 dark:focus:text-indigo-600"
              href="#"
            >
              View full reports
            </a>
          </div>
          {/* End Footer */}
        </div>
        {/* End Progress w/ Labels in Card */}
        {/* Doughnut Chart in Card */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="p-5 pb-4 grid grid-cols-2 items-center gap-x-4">
            <div>
              <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
                Market Share
              </h2>
            </div>
            {/* End Col */}
            <div className="flex justify-end items-center gap-x-1">
              {/* Download Dropdown */}
              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrachd2"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                  aria-labelledby="hs-pro-dbrachd2"
                >
                  {/* Card */}
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
                          htmlFor="hs-pro-ddnmshchddts1"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Excel</span>
                          <input
                            type="radio"
                            name="hs-pro-ddnmshchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-ddnmshchddts1"
                            defaultChecked=""
                          />
                        </label>
                        <label
                          htmlFor="hs-pro-ddnmshchddts2"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Word</span>
                          <input
                            type="radio"
                            name="hs-pro-ddnmshchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-ddnmshchddts2"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-ddnmshchdds1"
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
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                        Section name
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-ddnmshchdds1"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-ddnmshchdds2"
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
                          <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
                          <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
                        </svg>
                        Comparison stats
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-ddnmshchdds2"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-ddnmshchdds3"
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
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                        Legend indicator
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-ddnmshchdds3"
                        defaultChecked=""
                      />
                    </div>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Download Dropdown */}
              </div>
              {/* End Download Dropdown */}
              {/* More Dropdown */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="@@id"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                {/* More Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="@@id"
                >
                  <div className="p-1">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={18} cy={5} r={3} />
                        <circle cx={6} cy={12} r={3} />
                        <circle cx={18} cy={19} r={3} />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share reports
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                      View in fullscreen
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M3 3h6l6 18h6" />
                        <path d="M14 3h7" />
                      </svg>
                      Connect other apps
                    </button>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <line x1={9} x2={15} y1={10} y2={10} />
                        <line x1={12} x2={12} y1={7} y2={13} />
                      </svg>
                      Submit Feedback
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
            </div>
            {/* End Col */}
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="h-full p-5 pt-0 space-y-4">
            <div className="h-full flex flex-col justify-between space-y-4">
              <div className="h-full flex justify-center w-full">
                {/* Apex Donut Chart */}
                <div id="hs-market-share-donut-chart" />
              </div>
              {/* Legend Indicator */}
              <div className="flex justify-center items-center gap-x-4 mb-6">
                <div className="inline-flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-indigo-600 rounded-sm me-2.5" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Tailwind CSS
                  </span>
                </div>
                <div className="inline-flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-cyan-500 rounded-sm me-2.5" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Preline UI
                  </span>
                </div>
                <div className="inline-flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-gray-200 rounded-sm me-2.5 dark:bg-neutral-700" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Others
                  </span>
                </div>
              </div>
              {/* End Legend Indicator */}
            </div>
          </div>
          {/* End Body */}
          {/* Footer */}
          <div className="text-center border-t border-gray-200 dark:border-neutral-700">
            <a
              className="p-3 flex justify-center items-center gap-x-2 text-sm text-indigo-600 rounded-b-lg hover:text-indigo-700 focus:outline-none focus:decoration-2 focus:underline focus:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-600 dark:focus:text-indigo-600"
              href="#"
            >
              View full reports
            </a>
          </div>
          {/* End Footer */}
        </div>
        {/* End Doughnut Chart in Card */}
        {/* Line Charts in Card */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="p-5 pb-4 grid grid-cols-2 items-center gap-x-4">
            <div>
              <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
                Age
              </h2>
            </div>
            {/* End Col */}
            <div className="flex justify-end items-center gap-x-1">
              {/* Download Dropdown */}
              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrachd1"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                  aria-labelledby="hs-pro-dbrachd1"
                >
                  {/* Card */}
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
                          htmlFor="hs-pro-dbrachddts1"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Excel</span>
                          <input
                            type="radio"
                            name="hs-pro-dbrachddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dbrachddts1"
                            defaultChecked=""
                          />
                        </label>
                        <label
                          htmlFor="hs-pro-dbrachddts2"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Word</span>
                          <input
                            type="radio"
                            name="hs-pro-dbrachddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dbrachddts2"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dbrachdds1"
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
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                        Section name
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dbrachdds1"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dbrachdds2"
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
                          <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
                          <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
                        </svg>
                        Comparison stats
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dbrachdds2"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dbrachdds3"
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
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                        Legend indicator
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dbrachdds3"
                        defaultChecked=""
                      />
                    </div>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Download Dropdown */}
              </div>
              {/* End Download Dropdown */}
              {/* More Dropdown */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrachmd"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                {/* More Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-dbrachmd"
                >
                  <div className="p-1">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={18} cy={5} r={3} />
                        <circle cx={6} cy={12} r={3} />
                        <circle cx={18} cy={19} r={3} />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share reports
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                      View in fullscreen
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M3 3h6l6 18h6" />
                        <path d="M14 3h7" />
                      </svg>
                      Connect other apps
                    </button>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <line x1={9} x2={15} y1={10} y2={10} />
                        <line x1={12} x2={12} y1={7} y2={13} />
                      </svg>
                      Submit Feedback
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
            </div>
            {/* End Col */}
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="h-full p-5 pt-0 space-y-4">
            <div className="w-full">
              {/* Apex Lines Chart */}
              <div id="hs-age-lines-chart" className="min-h-[277px] " />
            </div>
            {/* Legend Indicator */}
            <div className="flex justify-center items-center gap-x-4 mt-6">
              <div className="inline-flex items-center">
                <span className="shrink-0 size-2.5 inline-block bg-indigo-600 rounded-sm me-2.5" />
                <span className="text-sm text-gray-800 dark:text-neutral-200">
                  18-25
                </span>
              </div>
              <div className="inline-flex items-center">
                <span className="shrink-0 size-2.5 inline-block bg-cyan-500 rounded-sm me-2.5 dark:bg-cyan-500" />
                <span className="text-sm text-gray-800 dark:text-neutral-200">
                  25-40
                </span>
              </div>
              <div className="inline-flex items-center">
                <span className="shrink-0 size-2.5 inline-block bg-gray-200 rounded-sm me-2.5 dark:bg-neutral-700" />
                <span className="text-sm text-gray-800 dark:text-neutral-200">
                  40+
                </span>
              </div>
            </div>
            {/* End Legend Indicator */}
          </div>
          {/* End Body */}
          {/* Footer */}
          <div className="text-center border-t border-gray-200 dark:border-neutral-700">
            <a
              className="p-3 flex justify-center items-center gap-x-2 text-sm text-indigo-600 rounded-b-lg hover:text-indigo-700 focus:outline-none focus:decoration-2 focus:underline focus:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-600 dark:focus:text-indigo-600"
              href="#"
            >
              View full reports
            </a>
          </div>
          {/* End Footer */}
        </div>
        {/* End Line Charts in Card */}
        {/* Bubble Chart with Legend Indicators in Card */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="p-5 pb-4 grid grid-cols-2 items-center gap-x-4 relative z-10">
            <div>
              <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
                Devices
              </h2>
            </div>
            {/* End Col */}
            <div className="flex justify-end items-center gap-x-1">
              {/* Download Dropdown */}
              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrachd6"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                  aria-labelledby="hs-pro-dbrachd6"
                >
                  {/* Card */}
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
                          htmlFor="hs-pro-dbbdchddts1"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Excel</span>
                          <input
                            type="radio"
                            name="hs-pro-dbbdchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dbbdchddts1"
                            defaultChecked=""
                          />
                        </label>
                        <label
                          htmlFor="hs-pro-dbbdchddts2"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Word</span>
                          <input
                            type="radio"
                            name="hs-pro-dbbdchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dbbdchddts2"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dbbdchdds1"
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
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                        Section name
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dbbdchdds1"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dbbdchdds2"
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
                          <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
                          <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
                        </svg>
                        Comparison stats
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dbbdchdds2"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dbbdchdds3"
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
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                        Legend indicator
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dbbdchdds3"
                        defaultChecked=""
                      />
                    </div>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Download Dropdown */}
              </div>
              {/* End Download Dropdown */}
              {/* More Dropdown */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbbdchmd"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                {/* More Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-dbbdchmd"
                >
                  <div className="p-1">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={18} cy={5} r={3} />
                        <circle cx={6} cy={12} r={3} />
                        <circle cx={18} cy={19} r={3} />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share reports
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                      View in fullscreen
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M3 3h6l6 18h6" />
                        <path d="M14 3h7" />
                      </svg>
                      Connect other apps
                    </button>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <line x1={9} x2={15} y1={10} y2={10} />
                        <line x1={12} x2={12} y1={7} y2={13} />
                      </svg>
                      Submit Feedback
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
            </div>
            {/* End Col */}
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="h-full p-5 pt-0 space-y-4">
            <div className=" h-[340px] -mb-1 -mt-10">
              {/* Apex Bubble Chart */}
              <div id="hs-devices-bubble-chart" />
            </div>
            {/* List Group */}
            <ul>
              {/* Header */}
              <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                    Devices
                  </h4>
                </div>
                <div className="text-end">
                  <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                    Users
                  </h4>
                </div>
              </li>
              {/* End Header */}
              {/* List Item */}
              <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-indigo-600 rounded-sm me-2.5" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Desktop
                  </span>
                </div>
                <div className="flex justify-end items-center gap-x-1.5">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    41,624
                  </span>
                  <span className="text-sm text-teal-500 dark:text-teal-400">
                    +453
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-cyan-500 rounded-sm me-2.5 dark:bg-cyan-500" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Mobile
                  </span>
                </div>
                <div className="flex justify-end items-center gap-x-1.5">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    7,390
                  </span>
                  <span className="text-sm text-teal-500 dark:text-teal-400">
                    +2
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-gray-200 rounded-sm me-2 dark:bg-neutral-700" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Tablets
                  </span>
                </div>
                <div className="flex justify-end items-center gap-x-1.5">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    3,128
                  </span>
                  <span className="text-sm text-red-500 dark:text-red-400">
                    -157
                  </span>
                </div>
              </li>
              {/* End List Item */}
            </ul>
            {/* End List Group */}
          </div>
          {/* End Body */}
          {/* Footer */}
          <div className="text-center border-t border-gray-200 dark:border-neutral-700">
            <a
              className="p-3 flex justify-center items-center gap-x-2 text-sm text-indigo-600 rounded-b-lg hover:text-indigo-700 focus:outline-none focus:decoration-2 focus:underline focus:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-600 dark:focus:text-indigo-600"
              href="#"
            >
              View full reports
            </a>
          </div>
          {/* End Footer */}
        </div>
        {/* End Bubble Chart with Legend Indicators in Card */}
        {/* Area Charts with Legend Indicators in Card */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="p-5 pb-2 grid grid-cols-2 items-center gap-x-4">
            <div>
              <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
                Total sales
              </h2>
            </div>
            {/* End Col */}
            <div className="flex justify-end items-center gap-x-1">
              {/* Download Dropdown */}
              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrachd5"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                  aria-labelledby="hs-pro-dbrachd5"
                >
                  {/* Card */}
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
                          htmlFor="hs-pro-dbrrtchddts1"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Excel</span>
                          <input
                            type="radio"
                            name="hs-pro-dbrrtchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dbrrtchddts1"
                            defaultChecked=""
                          />
                        </label>
                        <label
                          htmlFor="hs-pro-dbrrtchddts2"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Word</span>
                          <input
                            type="radio"
                            name="hs-pro-dbrrtchddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dbrrtchddts2"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dbrrtchdds1"
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
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                        Section name
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dbrrtchdds1"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dbrrtchdds2"
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
                          <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
                          <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
                        </svg>
                        Comparison stats
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dbrrtchdds2"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dbrrtchdds3"
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
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                        Legend indicator
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dbrrtchdds3"
                        defaultChecked=""
                      />
                    </div>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Download Dropdown */}
              </div>
              {/* End Download Dropdown */}
              {/* More Dropdown */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrrtchmd"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                {/* More Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-dbrrtchmd"
                >
                  <div className="p-1">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={18} cy={5} r={3} />
                        <circle cx={6} cy={12} r={3} />
                        <circle cx={18} cy={19} r={3} />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share reports
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                      View in fullscreen
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M3 3h6l6 18h6" />
                        <path d="M14 3h7" />
                      </svg>
                      Connect other apps
                    </button>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <line x1={9} x2={15} y1={10} y2={10} />
                        <line x1={12} x2={12} y1={7} y2={13} />
                      </svg>
                      Submit Feedback
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
            </div>
            {/* End Col */}
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="h-full p-5 pt-0">
            <h3 className="text-2xl font-medium text-gray-800 dark:text-neutral-200">
              $24,389.55
            </h3>
            <div id="hs-total-sales" className="min-h-[215px] -ms-3" />
            <div className="pt-4 px-2 mb-3.5">
              <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                Conversion funnel
              </h4>
            </div>
            <div className="relative after:absolute after:bottom-0 after:inset-x-2.5 after:border-b after:border-gray-200 dark:after:border-neutral-700">
              {/* Nav Tab */}
              <nav
                className="flex  gap-x-1"
                aria-label="Tabs"
                role="tablist"
                aria-orientation="horizontal"
              >
                <button
                  type="button"
                  className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active"
                  id="hs-pro-tabs-dtsch-item-first-time"
                  aria-selected="true"
                  data-hs-tab="#hs-pro-tabs-dtsch-first-time"
                  aria-controls="hs-pro-tabs-dtsch-first-time"
                  role="tab"
                >
                  <span className="shrink-0 size-2.5 inline-block bg-indigo-600 rounded-sm dark:bg-indigo-500" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    First-time
                  </span>
                </button>
                <button
                  type="button"
                  className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2  hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 "
                  id="hs-pro-tabs-dtsch-item-returning"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-dtsch-returning"
                  aria-controls="hs-pro-tabs-dtsch-returning"
                  role="tab"
                >
                  <span className="shrink-0 size-2.5 inline-block bg-cyan-400 rounded-sm dark:bg-cyan-500" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Returning
                  </span>
                </button>
              </nav>
              {/* End Nav Tab */}
            </div>
            <div>
              {/* Tab Content */}
              <div
                id="hs-pro-tabs-dtsch-first-time"
                role="tabpanel"
                aria-labelledby="hs-pro-tabs-dtsch-item-first-time"
              >
                {/* List Group */}
                <ul className="px-2">
                  {/* List Item */}
                  <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Added to cart
                      </span>
                    </div>
                    <div className="flex justify-end items-center gap-x-1.5">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        37%
                      </span>
                      <span className="text-sm text-red-500 dark:text-red-400">
                        -2%
                      </span>
                    </div>
                  </li>
                  {/* End List Item */}
                  {/* List Item */}
                  <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Reached checkout
                      </span>
                    </div>
                    <div className="flex justify-end items-center gap-x-1.5">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        489%
                      </span>
                      <span className="text-sm text-teal-500 dark:text-teal-400">
                        +52%
                      </span>
                    </div>
                  </li>
                  {/* End List Item */}
                  {/* List Item */}
                  <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Sessions converted
                      </span>
                    </div>
                    <div className="flex justify-end items-center gap-x-1.5">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        5%
                      </span>
                      <span className="text-sm text-red-500 dark:text-red-400">
                        -11%
                      </span>
                    </div>
                  </li>
                  {/* End List Item */}
                </ul>
                {/* End List Group */}
              </div>
              {/* End Tab Content */}
              {/* Tab Content */}
              <div
                id="hs-pro-tabs-dtsch-returning"
                className="hidden"
                role="tabpanel"
                aria-labelledby="hs-pro-tabs-dtsch-item-returning"
              >
                {/* List Group */}
                <ul className="px-2">
                  {/* List Item */}
                  <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Added to cart
                      </span>
                    </div>
                    <div className="flex justify-end items-center gap-x-1.5">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        12%
                      </span>
                      <span className="text-sm text-teal-500 dark:text-teal-400">
                        +19%
                      </span>
                    </div>
                  </li>
                  {/* End List Item */}
                  {/* List Item */}
                  <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Reached checkout
                      </span>
                    </div>
                    <div className="flex justify-end items-center gap-x-1.5">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        4%
                      </span>
                      <span className="text-sm text-teal-500 dark:text-teal-400">
                        +0.2%
                      </span>
                    </div>
                  </li>
                  {/* End List Item */}
                  {/* List Item */}
                  <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                    <div className="flex items-center">
                      <span className="text-sm text-gray-800 dark:text-neutral-200">
                        Sessions converted
                      </span>
                    </div>
                    <div className="flex justify-end items-center gap-x-1.5">
                      <span className="text-sm text-gray-500 dark:text-neutral-500">
                        34%
                      </span>
                      <span className="text-sm text-red-500 dark:text-red-400">
                        -0.1%
                      </span>
                    </div>
                  </li>
                  {/* End List Item */}
                </ul>
                {/* End List Group */}
              </div>
              {/* End Tab Content */}
            </div>
          </div>
          {/* End Body */}
          {/* Footer */}
          <div className="text-center border-t border-gray-200 dark:border-neutral-700">
            <a
              className="p-3 flex justify-center items-center gap-x-2 text-sm text-indigo-600 rounded-b-lg hover:text-indigo-700 focus:outline-none focus:decoration-2 focus:underline focus:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-600 dark:focus:text-indigo-600"
              href="#"
            >
              View full reports
            </a>
          </div>
          {/* End Footer */}
        </div>
        {/* End Area Charts with Legend Indicators in Card */}
        {/* Pie Chart with Legend Indicators in Card */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          {/* Header */}
          <div className="p-5 pb-4 grid grid-cols-2 items-center gap-x-4">
            <div>
              <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
                Acquisition
              </h2>
            </div>
            {/* End Col */}
            <div className="flex justify-end items-center gap-x-1">
              {/* Download Dropdown */}
              <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dbrachd4"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                  aria-labelledby="hs-pro-dbrachd4"
                >
                  {/* Card */}
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
                          htmlFor="hs-pro-dpeachddts1"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Excel</span>
                          <input
                            type="radio"
                            name="hs-pro-dpeachddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dpeachddts1"
                            defaultChecked=""
                          />
                        </label>
                        <label
                          htmlFor="hs-pro-dpeachddts2"
                          className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg dark:text-neutral-200"
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
                          <span className="relative z-10 align-middle">Word</span>
                          <input
                            type="radio"
                            name="hs-pro-dpeachddts"
                            className="shrink-0 size-0 bg-transparent border-0 text-transparent cursor-pointer before:absolute before:inset-0 before:rounded-lg checked:bg-none checked:before:bg-white checked:before:shadow-sm focus:ring-0 focus:before:opacity-80 dark:checked:before:bg-neutral-900 dark:focus:before:bg-neutral-950"
                            id="hs-pro-dpeachddts2"
                          />
                        </label>
                      </div>
                    </div>
                    <div className="m-2 border-t border-gray-200 dark:border-neutral-700" />
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dpeachdds1"
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
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                        Section name
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dpeachdds1"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dpeachdds2"
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
                          <path d="M16 22h2a2 2 0 0 0 2-2V7.5L14.5 2H6a2 2 0 0 0-2 2v3" />
                          <polyline points="14 2 14 8 20 8" />
                          <path d="M4.04 11.71a5.84 5.84 0 1 0 8.2 8.29" />
                          <path d="M13.83 16A5.83 5.83 0 0 0 8 10.17V16h5.83Z" />
                        </svg>
                        Comparison stats
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dpeachdds2"
                        defaultChecked=""
                      />
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                      <label
                        htmlFor="hs-pro-dpeachdds3"
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
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                        Legend indicator
                      </label>
                      <input
                        type="checkbox"
                        className="shrink-0 size-3.5 border-gray-300 rounded text-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-indigo-500 dark:checked:border-indigo-500 dark:focus:ring-offset-gray-800"
                        id="hs-pro-dpeachdds3"
                        defaultChecked=""
                      />
                    </div>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      Download
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End Download Dropdown */}
              </div>
              {/* End Download Dropdown */}
              {/* More Dropdown */}
              <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                <button
                  id="hs-pro-dpeachmd"
                  type="button"
                  className="size-[34px] inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                {/* More Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-44 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-pro-dpeachmd"
                >
                  <div className="p-1">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={18} cy={5} r={3} />
                        <circle cx={6} cy={12} r={3} />
                        <circle cx={18} cy={19} r={3} />
                        <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
                        <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
                      </svg>
                      Share reports
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                        <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
                        <path d="M3 16v3a2 2 0 0 0 2 2h3" />
                        <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                      </svg>
                      View in fullscreen
                    </button>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <path d="M3 3h6l6 18h6" />
                        <path d="M14 3h7" />
                      </svg>
                      Connect other apps
                    </button>
                    <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 disabled:pointer-events-none dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <line x1={9} x2={15} y1={10} y2={10} />
                        <line x1={12} x2={12} y1={7} y2={13} />
                      </svg>
                      Submit Feedback
                    </button>
                  </div>
                  {/* End Card */}
                </div>
                {/* End More Dropdown */}
              </div>
              {/* End More Dropdown */}
            </div>
            {/* End Col */}
          </div>
          {/* End Header */}
          {/* Body */}
          <div className="h-full p-5 pt-0 space-y-4">
            <div className="h-[297px] flex justify-center w-full">
              {/* Apex Pie Chart */}
              <div id="hs-acquisition-pie-chart" />
            </div>
            {/* List Group */}
            <ul>
              {/* Header */}
              <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                    Channels
                  </h4>
                </div>
                <div className="text-end">
                  <h4 className="font-medium text-gray-800 dark:text-neutral-200">
                    Users
                  </h4>
                </div>
              </li>
              {/* End Header */}
              {/* List Item */}
              <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-indigo-600 rounded-sm me-2.5" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Direct
                  </span>
                </div>
                <div className="flex justify-end items-center gap-x-1.5">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    11,932
                  </span>
                  <span className="text-sm text-red-500 dark:text-red-400">
                    -417%
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-cyan-500 rounded-sm me-2.5 dark:bg-cyan-500" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Organic search
                  </span>
                </div>
                <div className="flex justify-end items-center gap-x-1.5">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    8,740
                  </span>
                  <span className="text-sm text-red-500 dark:text-red-400">
                    -4.1%
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="py-3 grid grid-cols-2 justify-between items-center gap-x-4 border-b last:border-b-0 border-gray-200 dark:border-neutral-700">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-gray-200 rounded-sm me-2 dark:bg-neutral-700" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Referral
                  </span>
                </div>
                <div className="flex justify-end items-center gap-x-1.5">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    5,128
                  </span>
                  <span className="text-sm text-teal-500 dark:text-teal-400">
                    +243%
                  </span>
                </div>
              </li>
              {/* End List Item */}
            </ul>
            {/* End List Group */}
          </div>
          {/* End Body */}
          {/* Footer */}
          <div className="text-center border-t border-gray-200 dark:border-neutral-700">
            <a
              className="p-3 flex justify-center items-center gap-x-2 text-sm text-indigo-600 rounded-b-lg hover:text-indigo-700 focus:outline-none focus:decoration-2 focus:underline focus:text-indigo-700 dark:text-indigo-500 dark:hover:text-indigo-600 dark:focus:text-indigo-600"
              href="#"
            >
              View full reports
            </a>
          </div>
          {/* End Footer */}
        </div>
        {/* End Pie Chart with Legend Indicators in Card */}
      </div>
      {/* End Charts Grid */}
    </div>
  );
};

export default MainContent;