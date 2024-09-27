import React from 'react';

interface OrderListProps {

}

const OrderList: React.FC<OrderListProps> = () => {
  return (
    <div
      id="hs-pro-tabs-dut-all"
      role="tabpanel"
      aria-labelledby="hs-pro-tabs-dut-item-all"
    >
      {/* Table Section */}
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-stone-100 [&::-webkit-scrollbar-thumb]:bg-stone-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="min-w-full inline-block align-middle">
          {/* Table */}
          <table className="min-w-full divide-y divide-stone-200 dark:divide-neutral-700">
            <thead>
              <tr className="border-t border-stone-200 dark:border-neutral-700">
                <th scope="col" className="px-3 py-2.5 text-start">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </th>
                <th scope="col">
                  {/* Sort Dropdown */}
                  <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                    <button
                      id="hs-pro-eptors"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Order
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
                      aria-labelledby="hs-pro-eptors"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                <th scope="col" className="min-w-[230px] ">
                  {/* Sort Dropdown */}
                  <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                    <button
                      id="hs-pro-eptprs"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Purchased
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
                      aria-labelledby="hs-pro-eptprs"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                      id="hs-pro-eptsts"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Status
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
                      aria-labelledby="hs-pro-eptsts"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                      id="hs-pro-eptcts"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Customer
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
                      aria-labelledby="hs-pro-eptcts"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                <th scope="col" className="min-w-[165px] ">
                  {/* Sort Dropdown */}
                  <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                    <button
                      id="hs-pro-eptpms"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Payment method
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
                      aria-labelledby="hs-pro-eptpms"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                <th scope="col" className="min-w-[155px] ">
                  {/* Sort Dropdown */}
                  <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                    <button
                      id="hs-pro-eptpss"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Payment status
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
                      aria-labelledby="hs-pro-eptpss"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                      id="hs-pro-eptits"
                      type="button"
                      className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-label="Dropdown"
                    >
                      Items
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
                      aria-labelledby="hs-pro-eptits"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-none focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
            <tbody className="divide-y divide-stone-200 dark:divide-neutral-700">
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #235325
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Calvin Klein T-shirts
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-500/10 dark:text-green-500">
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
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Ready for pickup
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Jase Marley
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4"
                      width={32}
                      height={20}
                      viewBox="0 0 32 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1704_233ade21312)">
                        <mask
                          id="qadff23"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={32}
                          height={20}
                        >
                          <path d="M32 0H0V19.776H32V0Z" fill="white" />
                        </mask>
                        <g mask="url(#qadff23)">
                          <path
                            d="M20.32 17.6641H11.68V2.11206H20.32V17.6641Z"
                            fill="#FF5F00"
                          />
                          <path
                            d="M12.224 9.888C12.224 6.736 13.696 3.92 16 2.112C14.256 0.736 12.112 0 9.888 0C4.432 0 0 4.432 0 9.888C0 15.344 4.432 19.776 9.888 19.776C12.112 19.776 14.256 19.04 16 17.664C13.696 15.856 12.224 13.04 12.224 9.888Z"
                            fill="#EB001B"
                          />
                          <path
                            d="M32 9.888C32 15.344 27.568 19.776 22.112 19.776C19.888 19.776 17.744 19.04 16 17.664C18.304 15.856 19.776 13.04 19.776 9.888C19.776 6.736 18.304 3.92 16 2.112C17.744 0.736 19.888 0 22.112 0C27.568 0 32 4.432 32 9.888Z"
                            fill="#F79E1B"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1704_233ade21312">
                          <rect width={32} height="19.84" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    **** 1898
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span className="size-1.5 inline-block bg-stone-800 rounded-full dark:bg-neutral-200" />
                    Paid
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    2
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd1"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd1"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #646344
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Maroon Wedges
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Fulfilled
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Mathew Gustaffson
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
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
                      <line x1={3} x2={21} y1={22} y2={22} />
                      <line x1={6} x2={6} y1={18} y2={11} />
                      <line x1={10} x2={10} y1={18} y2={11} />
                      <line x1={14} x2={14} y1={18} y2={11} />
                      <line x1={18} x2={18} y1={18} y2={11} />
                      <polygon points="12 2 20 7 4 7" />
                    </svg>
                    **** 5238
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span className="size-1.5 inline-block bg-stone-800 rounded-full dark:bg-neutral-200" />
                    Paid
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    1
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd2"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd2"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #547432
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Maroon Wedges
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Fulfilled
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Mathew Gustaffson
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
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
                      <line x1={3} x2={21} y1={22} y2={22} />
                      <line x1={6} x2={6} y1={18} y2={11} />
                      <line x1={10} x2={10} y1={18} y2={11} />
                      <line x1={14} x2={14} y1={18} y2={11} />
                      <line x1={18} x2={18} y1={18} y2={11} />
                      <polygon points="12 2 20 7 4 7" />
                    </svg>
                    **** 8542
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
                    <span className="size-1.5 inline-block bg-yellow-800 rounded-full dark:bg-yellow-500" />
                    Pending
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    5
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd3"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd3"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #624363
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Pattern Winter Sweater
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Fulfilled
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Nicky Olvsson
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6424 30.9152L11.197 27.3925L9.96162 27.3639H4.06256L8.16211 1.37005C8.17431 1.29063 8.21465 1.21823 8.27577 1.16607C8.33689 1.1139 8.41472 1.08543 8.49508 1.08586H18.4417C21.7438 1.08586 24.0227 1.773 25.2124 3.12927C25.7702 3.76551 26.1255 4.43039 26.2972 5.16208C26.4775 5.92981 26.4807 6.84707 26.3047 7.9658L26.2919 8.04745V8.76429L26.8497 9.08029C27.2755 9.29602 27.6583 9.58784 27.979 9.94134C28.4562 10.4853 28.7648 11.1767 28.8952 11.9964C29.0299 12.8394 28.9854 13.8426 28.7648 14.9783C28.5103 16.2847 28.0989 17.4225 27.5432 18.3536C27.053 19.1876 26.3938 19.91 25.608 20.4744C24.8699 20.9982 23.993 21.3959 23.0015 21.6504C22.0408 21.9007 20.9454 22.0268 19.7439 22.0268H18.9698C18.4163 22.0268 17.8786 22.2262 17.4566 22.5836C17.0352 22.9447 16.7556 23.4438 16.6677 23.9918L16.6093 24.3088L15.6295 30.5175L15.585 30.7455C15.5733 30.8176 15.5532 30.8537 15.5235 30.8781C15.4947 30.9016 15.4588 30.9147 15.4217 30.9152H10.6424Z"
                        fill="#253B80"
                      />
                      <path
                        d="M27.3778 8.13017C27.3481 8.31998 27.3142 8.51403 27.276 8.71339C25.9643 15.4481 21.4766 17.7746 15.7451 17.7746H12.8268C12.1259 17.7746 11.5352 18.2836 11.426 18.975L9.93191 28.4508L9.5088 31.1368C9.49195 31.2434 9.49838 31.3523 9.52767 31.4561C9.55695 31.5599 9.60838 31.6562 9.67842 31.7382C9.74846 31.8202 9.83545 31.8861 9.9334 31.9313C10.0313 31.9765 10.1379 31.9999 10.2458 32H15.4217C16.0346 32 16.5552 31.5546 16.6517 30.9502L16.7026 30.6872L17.6771 24.5029L17.7397 24.1636C17.8351 23.557 18.3569 23.1116 18.9698 23.1116H19.7439C24.7586 23.1116 28.6842 21.0757 29.8316 15.184C30.3109 12.7228 30.0627 10.6677 28.7945 9.22239C28.3925 8.77528 27.9124 8.40516 27.3778 8.13017Z"
                        fill="#179BD7"
                      />
                      <path
                        d="M26.0056 7.58299C25.5868 7.46183 25.1607 7.36727 24.7299 7.29986C23.8788 7.16905 23.0185 7.10629 22.1574 7.11217H14.3612C14.0645 7.11194 13.7776 7.21787 13.5521 7.41079C13.3267 7.60372 13.1778 7.87092 13.1322 8.1641L11.4737 18.6685L11.426 18.975C11.4777 18.6406 11.6473 18.3357 11.9043 18.1155C12.1612 17.8954 12.4885 17.7744 12.8268 17.7746H15.7451C21.4766 17.7746 25.9642 15.447 27.276 8.71339C27.3152 8.51403 27.3481 8.31998 27.3778 8.13017C27.0316 7.94865 26.6709 7.79648 26.2993 7.67525C26.2019 7.64293 26.104 7.61217 26.0056 7.58299Z"
                        fill="#222D65"
                      />
                      <path
                        d="M13.1321 8.1641C13.1773 7.87084 13.3262 7.60351 13.5517 7.41068C13.7772 7.21785 14.0644 7.11231 14.3611 7.11323H22.1573C23.0809 7.11323 23.943 7.17368 24.7298 7.30092C25.2623 7.3846 25.7874 7.50976 26.3003 7.67525C26.6874 7.80356 27.0468 7.9552 27.3787 8.13017C27.769 5.64138 27.3756 3.94685 26.0299 2.41243C24.5464 0.7232 21.8688 0 18.4427 0H8.49601C7.79614 0 7.19913 0.508997 7.09097 1.20144L2.94795 27.4625C2.92865 27.5844 2.93599 27.7091 2.96947 27.8279C3.00294 27.9467 3.06176 28.0569 3.14187 28.1508C3.22198 28.2447 3.32149 28.3202 3.43354 28.3719C3.54559 28.4237 3.66753 28.4506 3.79097 28.4508H9.93181L11.4736 18.6685L13.1321 8.1641Z"
                        fill="#253B80"
                      />
                    </svg>
                    **** @site.so
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span className="size-1.5 inline-block bg-stone-800 rounded-full dark:bg-neutral-200" />
                    Paid
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    2
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd4"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd4"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #989011
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    White Blazer by Armani
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
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
                    Unfulfilled
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    David Nunez
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4"
                      width={32}
                      height={20}
                      viewBox="0 0 32 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1704_2332e3n1dl23)">
                        <mask
                          id="mask213r1r31112"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={32}
                          height={20}
                        >
                          <path d="M32 0H0V19.776H32V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask213r1r31112)">
                          <path
                            d="M20.32 17.6641H11.68V2.11206H20.32V17.6641Z"
                            fill="#FF5F00"
                          />
                          <path
                            d="M12.224 9.888C12.224 6.736 13.696 3.92 16 2.112C14.256 0.736 12.112 0 9.888 0C4.432 0 0 4.432 0 9.888C0 15.344 4.432 19.776 9.888 19.776C12.112 19.776 14.256 19.04 16 17.664C13.696 15.856 12.224 13.04 12.224 9.888Z"
                            fill="#EB001B"
                          />
                          <path
                            d="M32 9.888C32 15.344 27.568 19.776 22.112 19.776C19.888 19.776 17.744 19.04 16 17.664C18.304 15.856 19.776 13.04 19.776 9.888C19.776 6.736 18.304 3.92 16 2.112C17.744 0.736 19.888 0 22.112 0C27.568 0 32 4.432 32 9.888Z"
                            fill="#F79E1B"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1704_2332e3n1dl23">
                          <rect width={32} height="19.84" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    **** 1284
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
                    <span className="size-1.5 inline-block bg-yellow-800 rounded-full dark:bg-yellow-500" />
                    Pending
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    1
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd5"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd5"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #783109
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Watch
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Fulfilled
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Brian Jackson
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4"
                      width={32}
                      height={20}
                      viewBox="0 0 32 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1704_233qe12)">
                        <mask
                          id="mask0_1704_2332fdkm12"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={32}
                          height={20}
                        >
                          <path d="M32 0H0V19.776H32V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_1704_2332fdkm12)">
                          <path
                            d="M20.32 17.6641H11.68V2.11206H20.32V17.6641Z"
                            fill="#FF5F00"
                          />
                          <path
                            d="M12.224 9.888C12.224 6.736 13.696 3.92 16 2.112C14.256 0.736 12.112 0 9.888 0C4.432 0 0 4.432 0 9.888C0 15.344 4.432 19.776 9.888 19.776C12.112 19.776 14.256 19.04 16 17.664C13.696 15.856 12.224 13.04 12.224 9.888Z"
                            fill="#EB001B"
                          />
                          <path
                            d="M32 9.888C32 15.344 27.568 19.776 22.112 19.776C19.888 19.776 17.744 19.04 16 17.664C18.304 15.856 19.776 13.04 19.776 9.888C19.776 6.736 18.304 3.92 16 2.112C17.744 0.736 19.888 0 22.112 0C27.568 0 32 4.432 32 9.888Z"
                            fill="#F79E1B"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1704_233qe12">
                          <rect width={32} height="19.84" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    **** 5522
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span className="size-1.5 inline-block bg-stone-800 rounded-full dark:bg-neutral-200" />
                    Partially refunded
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    1
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd6"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd6"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #823904
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Keyboard Matt
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-500/10 dark:text-green-500">
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
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Ready for pickup
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Jacky Ferguson
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
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
                      <line x1={3} x2={21} y1={22} y2={22} />
                      <line x1={6} x2={6} y1={18} y2={11} />
                      <line x1={10} x2={10} y1={18} y2={11} />
                      <line x1={14} x2={14} y1={18} y2={11} />
                      <line x1={18} x2={18} y1={18} y2={11} />
                      <polygon points="12 2 20 7 4 7" />
                    </svg>
                    **** 9832
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
                    <span className="size-1.5 inline-block bg-yellow-800 rounded-full dark:bg-yellow-500" />
                    Pending
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    9
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd7"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd7"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #490454
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Keyboard Matt
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-green-100 text-green-800 rounded-full dark:bg-green-500/10 dark:text-green-500">
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
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    Ready for pickup
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Karla Verdy
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6424 30.9152L11.197 27.3925L9.96162 27.3639H4.06256L8.16211 1.37005C8.17431 1.29063 8.21465 1.21823 8.27577 1.16607C8.33689 1.1139 8.41472 1.08543 8.49508 1.08586H18.4417C21.7438 1.08586 24.0227 1.773 25.2124 3.12927C25.7702 3.76551 26.1255 4.43039 26.2972 5.16208C26.4775 5.92981 26.4807 6.84707 26.3047 7.9658L26.2919 8.04745V8.76429L26.8497 9.08029C27.2755 9.29602 27.6583 9.58784 27.979 9.94134C28.4562 10.4853 28.7648 11.1767 28.8952 11.9964C29.0299 12.8394 28.9854 13.8426 28.7648 14.9783C28.5103 16.2847 28.0989 17.4225 27.5432 18.3536C27.053 19.1876 26.3938 19.91 25.608 20.4744C24.8699 20.9982 23.993 21.3959 23.0015 21.6504C22.0408 21.9007 20.9454 22.0268 19.7439 22.0268H18.9698C18.4163 22.0268 17.8786 22.2262 17.4566 22.5836C17.0352 22.9447 16.7556 23.4438 16.6677 23.9918L16.6093 24.3088L15.6295 30.5175L15.585 30.7455C15.5733 30.8176 15.5532 30.8537 15.5235 30.8781C15.4947 30.9016 15.4588 30.9147 15.4217 30.9152H10.6424Z"
                        fill="#253B80"
                      />
                      <path
                        d="M27.3778 8.13017C27.3481 8.31998 27.3142 8.51403 27.276 8.71339C25.9643 15.4481 21.4766 17.7746 15.7451 17.7746H12.8268C12.1259 17.7746 11.5352 18.2836 11.426 18.975L9.93191 28.4508L9.5088 31.1368C9.49195 31.2434 9.49838 31.3523 9.52767 31.4561C9.55695 31.5599 9.60838 31.6562 9.67842 31.7382C9.74846 31.8202 9.83545 31.8861 9.9334 31.9313C10.0313 31.9765 10.1379 31.9999 10.2458 32H15.4217C16.0346 32 16.5552 31.5546 16.6517 30.9502L16.7026 30.6872L17.6771 24.5029L17.7397 24.1636C17.8351 23.557 18.3569 23.1116 18.9698 23.1116H19.7439C24.7586 23.1116 28.6842 21.0757 29.8316 15.184C30.3109 12.7228 30.0627 10.6677 28.7945 9.22239C28.3925 8.77528 27.9124 8.40516 27.3778 8.13017Z"
                        fill="#179BD7"
                      />
                      <path
                        d="M26.0056 7.58299C25.5868 7.46183 25.1607 7.36727 24.7299 7.29986C23.8788 7.16905 23.0185 7.10629 22.1574 7.11217H14.3612C14.0645 7.11194 13.7776 7.21787 13.5521 7.41079C13.3267 7.60372 13.1778 7.87092 13.1322 8.1641L11.4737 18.6685L11.426 18.975C11.4777 18.6406 11.6473 18.3357 11.9043 18.1155C12.1612 17.8954 12.4885 17.7744 12.8268 17.7746H15.7451C21.4766 17.7746 25.9642 15.447 27.276 8.71339C27.3152 8.51403 27.3481 8.31998 27.3778 8.13017C27.0316 7.94865 26.6709 7.79648 26.2993 7.67525C26.2019 7.64293 26.104 7.61217 26.0056 7.58299Z"
                        fill="#222D65"
                      />
                      <path
                        d="M13.1321 8.1641C13.1773 7.87084 13.3262 7.60351 13.5517 7.41068C13.7772 7.21785 14.0644 7.11231 14.3611 7.11323H22.1573C23.0809 7.11323 23.943 7.17368 24.7298 7.30092C25.2623 7.3846 25.7874 7.50976 26.3003 7.67525C26.6874 7.80356 27.0468 7.9552 27.3787 8.13017C27.769 5.64138 27.3756 3.94685 26.0299 2.41243C24.5464 0.7232 21.8688 0 18.4427 0H8.49601C7.79614 0 7.19913 0.508997 7.09097 1.20144L2.94795 27.4625C2.92865 27.5844 2.93599 27.7091 2.96947 27.8279C3.00294 27.9467 3.06176 28.0569 3.14187 28.1508C3.22198 28.2447 3.32149 28.3202 3.43354 28.3719C3.54559 28.4237 3.66753 28.4506 3.79097 28.4508H9.93181L11.4736 18.6685L13.1321 8.1641Z"
                        fill="#253B80"
                      />
                    </svg>
                    **** @site.so
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span className="size-1.5 inline-block bg-stone-800 rounded-full dark:bg-neutral-200" />
                    Refunded
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    5
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd8"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd8"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #190931
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Nike Air Jordan 1 Yellow
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Fulfilled
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Karla Verdy
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4"
                      width={33}
                      height={32}
                      viewBox="0 0 33 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6424 30.9152L11.197 27.3925L9.96162 27.3639H4.06256L8.16211 1.37005C8.17431 1.29063 8.21465 1.21823 8.27577 1.16607C8.33689 1.1139 8.41472 1.08543 8.49508 1.08586H18.4417C21.7438 1.08586 24.0227 1.773 25.2124 3.12927C25.7702 3.76551 26.1255 4.43039 26.2972 5.16208C26.4775 5.92981 26.4807 6.84707 26.3047 7.9658L26.2919 8.04745V8.76429L26.8497 9.08029C27.2755 9.29602 27.6583 9.58784 27.979 9.94134C28.4562 10.4853 28.7648 11.1767 28.8952 11.9964C29.0299 12.8394 28.9854 13.8426 28.7648 14.9783C28.5103 16.2847 28.0989 17.4225 27.5432 18.3536C27.053 19.1876 26.3938 19.91 25.608 20.4744C24.8699 20.9982 23.993 21.3959 23.0015 21.6504C22.0408 21.9007 20.9454 22.0268 19.7439 22.0268H18.9698C18.4163 22.0268 17.8786 22.2262 17.4566 22.5836C17.0352 22.9447 16.7556 23.4438 16.6677 23.9918L16.6093 24.3088L15.6295 30.5175L15.585 30.7455C15.5733 30.8176 15.5532 30.8537 15.5235 30.8781C15.4947 30.9016 15.4588 30.9147 15.4217 30.9152H10.6424Z"
                        fill="#253B80"
                      />
                      <path
                        d="M27.3778 8.13017C27.3481 8.31998 27.3142 8.51403 27.276 8.71339C25.9643 15.4481 21.4766 17.7746 15.7451 17.7746H12.8268C12.1259 17.7746 11.5352 18.2836 11.426 18.975L9.93191 28.4508L9.5088 31.1368C9.49195 31.2434 9.49838 31.3523 9.52767 31.4561C9.55695 31.5599 9.60838 31.6562 9.67842 31.7382C9.74846 31.8202 9.83545 31.8861 9.9334 31.9313C10.0313 31.9765 10.1379 31.9999 10.2458 32H15.4217C16.0346 32 16.5552 31.5546 16.6517 30.9502L16.7026 30.6872L17.6771 24.5029L17.7397 24.1636C17.8351 23.557 18.3569 23.1116 18.9698 23.1116H19.7439C24.7586 23.1116 28.6842 21.0757 29.8316 15.184C30.3109 12.7228 30.0627 10.6677 28.7945 9.22239C28.3925 8.77528 27.9124 8.40516 27.3778 8.13017Z"
                        fill="#179BD7"
                      />
                      <path
                        d="M26.0056 7.58299C25.5868 7.46183 25.1607 7.36727 24.7299 7.29986C23.8788 7.16905 23.0185 7.10629 22.1574 7.11217H14.3612C14.0645 7.11194 13.7776 7.21787 13.5521 7.41079C13.3267 7.60372 13.1778 7.87092 13.1322 8.1641L11.4737 18.6685L11.426 18.975C11.4777 18.6406 11.6473 18.3357 11.9043 18.1155C12.1612 17.8954 12.4885 17.7744 12.8268 17.7746H15.7451C21.4766 17.7746 25.9642 15.447 27.276 8.71339C27.3152 8.51403 27.3481 8.31998 27.3778 8.13017C27.0316 7.94865 26.6709 7.79648 26.2993 7.67525C26.2019 7.64293 26.104 7.61217 26.0056 7.58299Z"
                        fill="#222D65"
                      />
                      <path
                        d="M13.1321 8.1641C13.1773 7.87084 13.3262 7.60351 13.5517 7.41068C13.7772 7.21785 14.0644 7.11231 14.3611 7.11323H22.1573C23.0809 7.11323 23.943 7.17368 24.7298 7.30092C25.2623 7.3846 25.7874 7.50976 26.3003 7.67525C26.6874 7.80356 27.0468 7.9552 27.3787 8.13017C27.769 5.64138 27.3756 3.94685 26.0299 2.41243C24.5464 0.7232 21.8688 0 18.4427 0H8.49601C7.79614 0 7.19913 0.508997 7.09097 1.20144L2.94795 27.4625C2.92865 27.5844 2.93599 27.7091 2.96947 27.8279C3.00294 27.9467 3.06176 28.0569 3.14187 28.1508C3.22198 28.2447 3.32149 28.3202 3.43354 28.3719C3.54559 28.4237 3.66753 28.4506 3.79097 28.4508H9.93181L11.4736 18.6685L13.1321 8.1641Z"
                        fill="#253B80"
                      />
                    </svg>
                    **** @site.so
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span className="size-1.5 inline-block bg-stone-800 rounded-full dark:bg-neutral-200" />
                    Paid
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    7
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd9"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd9"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #465383
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Mango Women's shoe
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Fulfilled
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    O'brien Williams
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
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
                      <line x1={3} x2={21} y1={22} y2={22} />
                      <line x1={6} x2={6} y1={18} y2={11} />
                      <line x1={10} x2={10} y1={18} y2={11} />
                      <line x1={14} x2={14} y1={18} y2={11} />
                      <line x1={18} x2={18} y1={18} y2={11} />
                      <polygon points="12 2 20 7 4 7" />
                    </svg>
                    **** 7887
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span className="size-1.5 inline-block bg-stone-800 rounded-full dark:bg-neutral-200" />
                    Refunded
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    4
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd10"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd10"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #437433
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Nike Air Jordan 1 Yellow
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
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
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    Fulfilled
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Emma Watson
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
                    <svg
                      className="shrink-0 size-4"
                      width={32}
                      height={20}
                      viewBox="0 0 32 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1704_233491kdx)">
                        <mask
                          id="mask0_1704_23323rd1n1"
                          style={{ maskType: "luminance" }}
                          maskUnits="userSpaceOnUse"
                          x={0}
                          y={0}
                          width={32}
                          height={20}
                        >
                          <path d="M32 0H0V19.776H32V0Z" fill="white" />
                        </mask>
                        <g mask="url(#mask0_1704_23323rd1n1)">
                          <path
                            d="M20.32 17.6641H11.68V2.11206H20.32V17.6641Z"
                            fill="#FF5F00"
                          />
                          <path
                            d="M12.224 9.888C12.224 6.736 13.696 3.92 16 2.112C14.256 0.736 12.112 0 9.888 0C4.432 0 0 4.432 0 9.888C0 15.344 4.432 19.776 9.888 19.776C12.112 19.776 14.256 19.04 16 17.664C13.696 15.856 12.224 13.04 12.224 9.888Z"
                            fill="#EB001B"
                          />
                          <path
                            d="M32 9.888C32 15.344 27.568 19.776 22.112 19.776C19.888 19.776 17.744 19.04 16 17.664C18.304 15.856 19.776 13.04 19.776 9.888C19.776 6.736 18.304 3.92 16 2.112C17.744 0.736 19.888 0 22.112 0C27.568 0 32 4.432 32 9.888Z"
                            fill="#F79E1B"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_1704_233491kdx">
                          <rect width={32} height="19.84" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    **** 9024
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span className="size-1.5 inline-block bg-stone-800 rounded-full dark:bg-neutral-200" />
                    Paid
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    2
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd11"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd11"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="size-px whitespace-nowrap px-3 py-4">
                  <input
                    type="checkbox"
                    className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                  />
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <a
                    className="text-sm text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:underline dark:text-green-400 dark:hover:text-green-500"
                    href="../../pro/ecommerce/order-details.html"
                  >
                    #856744
                  </a>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Hat
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-red-100 text-red-800 rounded-full dark:bg-red-500/10 dark:text-red-500">
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
                    Unfulfilled
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    Chris Williams
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="inline-flex items-center gap-x-1 text-sm text-stone-600 dark:text-neutral-400">
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
                      <line x1={3} x2={21} y1={22} y2={22} />
                      <line x1={6} x2={6} y1={18} y2={11} />
                      <line x1={10} x2={10} y1={18} y2={11} />
                      <line x1={14} x2={14} y1={18} y2={11} />
                      <line x1={18} x2={18} y1={18} y2={11} />
                      <polygon points="12 2 20 7 4 7" />
                    </svg>
                    **** 3443
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="py-1.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-stone-100 text-stone-800 rounded-full dark:bg-neutral-700 dark:text-neutral-200">
                    <span className="size-1.5 inline-block bg-stone-800 rounded-full dark:bg-neutral-200" />
                    Partially refunded
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1">
                  <span className="text-sm text-stone-600 dark:text-neutral-400">
                    1
                  </span>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-1 text-end">
                  <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                    <button
                      id="hs-pro-errtmd12"
                      type="button"
                      className="size-7 inline-flex justify-center items-center gap-x-2 rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                        <circle cx={12} cy={12} r={1} />
                        <circle cx={12} cy={5} r={1} />
                        <circle cx={12} cy={19} r={1} />
                      </svg>
                    </button>
                    <div
                      className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-24 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="hs-pro-errtmd12"
                    >
                      <div className="p-1">
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Duplicate
                        </button>
                        <div className="my-1 border-t border-stone-200 dark:border-neutral-800" />
                        <button
                          type="button"
                          className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
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
      <div className="mt-5 flex flex-wrap justify-between items-center gap-2">
        <p className="text-sm text-stone-800 dark:text-neutral-200">
          <span className="font-medium">27</span>
          <span className="text-stone-500 dark:text-neutral-500">results</span>
        </p>
        {/* Pagination */}
        <nav
          className="flex justify-end items-center gap-x-1"
          aria-label="Pagination"
        >
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
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
              className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-stone-100 text-stone-800 py-2 px-3 text-sm rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:text-white"
              aria-current="page"
            >
              1
            </span>
            <span className="min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm dark:text-neutral-500">
              of
            </span>
            <span className="min-h-[38px] flex justify-center items-center text-stone-500 py-2 px-1.5 text-sm dark:text-neutral-500">
              3
            </span>
          </div>
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-100 dark:text-white dark:hover:bg-white/10 dark:focus:bg-neutral-700"
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

export default OrderList;