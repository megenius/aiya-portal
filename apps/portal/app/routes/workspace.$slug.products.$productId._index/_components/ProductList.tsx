import React from 'react';

interface ProductListProps {

}

const ProductList: React.FC<ProductListProps> = () => {
  return (
    <div>
      {/* Tab Content */}
      <div
        id="hs-pro-tabs-dut-all"
        role="tabpanel"
        aria-labelledby="hs-pro-tabs-dut-item-all"
      >
        {/* Table Content */}
        <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div className="min-w-full inline-block align-middle">
            {/* Table */}
            <table className="min-w-full divide-y divide-stone-200 dark:divide-neutral-700">
              <thead>
                <tr>
                  <th scope="col" className="ps-3 text-start">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </th>
                  <th scope="col" className="min-w-[250px] ">
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
                        Item
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
                  <th scope="col" className="min-w-36">
                    {/* Sort Dropdown */}
                    <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                      <button
                        id="hs-pro-epttys"
                        type="button"
                        className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        Type
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
                        aria-labelledby="hs-pro-epttys"
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
                        id="hs-pro-eptsts"
                        type="button"
                        className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        Stocks
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
                  <th scope="col">
                    {/* Sort Dropdown */}
                    <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                      <button
                        id="hs-pro-eptsks"
                        type="button"
                        className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        SKU
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
                        aria-labelledby="hs-pro-eptsks"
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
                        id="hs-pro-eptprs"
                        type="button"
                        className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        Price
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
                  <th scope="col" className="min-w-[160px] ">
                    {/* Sort Dropdown */}
                    <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
                      <button
                        id="hs-pro-eptai"
                        type="button"
                        className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-none focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
                        aria-haspopup="menu"
                        aria-expanded="false"
                        aria-label="Dropdown"
                      >
                        Available In
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
                        aria-labelledby="hs-pro-eptai"
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
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1528310385748-dba09bf1657a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Google Home
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Electronics
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts1"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      2384741241
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $65
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🛍️ In store
                      </span>
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🌐 Online
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd1"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd1"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd1ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd1ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd1ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd1ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd1ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd1ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd1s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd1s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd1s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd1s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd1s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd1s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd1s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd1s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd1s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd1s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd1s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd1s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1613852348851-df1739db8201?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Calvin Klein T-shirts
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Clothing
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts2"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      4124123847
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $21
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🛍️ In store
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd2"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd2"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd2ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd2ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd2ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd2ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd2ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd2ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd2s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd2s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd2s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd2s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd2s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd2s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd2s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd2s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd2s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd2s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd2s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd2s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1611911813383-67769b37a149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Pattern Winter Sweater
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Accessories
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts3"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      8472341241
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $37
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🛍️ In store
                      </span>
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🌐 Online
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd3"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd3"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd3ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd3ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd3ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd3ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd3ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd3ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd3s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd3s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd3s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd3s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd3s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd3s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd3s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd3s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd3s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd3s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd3s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd3s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1610398752800-146f269dfcc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Mango Women's shoe
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Shoes
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts4"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      2412384741
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $65
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🌐 Online
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd4"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd4"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd4ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd4ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd4ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd4ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd4ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd4ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd4s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd4s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd4s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd4s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd4s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd4s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd4s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd4s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd4s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd4s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd4s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd4s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Plain white sweater
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Clothing
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts5"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      8234741241
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $89
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🌐 Online
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd5"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd5"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd5ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd5ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd5ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd5ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd5ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd5ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd5s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd5s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd5s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd5s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd5s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd5s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd5s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd5s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd5s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd5s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd5s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd5s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Maroon Wedges
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Shoes
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts6"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      9984741241
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $199
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🛍️ In store
                      </span>
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🌐 Online
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd6"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd6"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd6ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd6ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd6ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd6ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd6ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd6ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd6s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd6s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd6s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd6s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd6s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd6s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd6s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd6s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd6s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd6s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd6s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd6s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1616969899621-0ea269426a21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          White Blazer by Armani
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Clothing
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts7"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      7184741241
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $17
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🛍️ In store
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd7"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd7"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd7ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd7ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd7ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd7ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd7ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd7ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd7s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd7s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd7s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd7s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd7s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd7s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd7s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd7s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd7s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd7s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd7s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd7s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Watch
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Tech
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts8"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      1084741241
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $249
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🌐 Online
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd8"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd8"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd8ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd8ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd8ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd8ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd8ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd8ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd8s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd8s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd8s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd8s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd8s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd8s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd8s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd8s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd8s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd8s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd8s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd8s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1549298916-f52d724204b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Nike Air Jordan 1 Yellow
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Shoes
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts9"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      4831441241
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $149
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🛍️ In store
                      </span>
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🌐 Online
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd9"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd9"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd9ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd9ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd9ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd9ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd9ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd9ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd9s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd9s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd9s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd9s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd9s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd9s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd9s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd9s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd9s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd9s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd9s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd9s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1617220933132-4e0d0596ff64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Keyboard Matt
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Accessories
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts10"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      1223847441
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $39
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🛍️ In store
                      </span>
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🌐 Online
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd10"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd10"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd10ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd10ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd10ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd10ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd10ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd10ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd10s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd10s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd10s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd10s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd10s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd10s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd10s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd10s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd10s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd10s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd10s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd10s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="size-px whitespace-nowrap ps-3 py-4">
                    <input
                      type="checkbox"
                      className="shrink-0 border-stone-300 rounded text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
                    />
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="w-full flex items-center gap-x-3">
                      <img
                        className="shrink-0 size-12 rounded-md"
                        src="https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Product Image"
                      />
                      <div className="grow">
                        <a
                          className="text-sm font-medium text-stone-800 hover:text-green-600 decoration-2 hover:underline focus:outline-none focus:underline focus:text-green-600 dark:text-neutral-200 dark:hover:text-green-500 dark:focus:text-green-500"
                          href="../../pro/ecommerce/product-details.html"
                        >
                          Hat
                        </a>
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      Accessories
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex justify-between items-center">
                      <div className="relative inline-block">
                        <input
                          type="checkbox"
                          id="hs-pro-epts11"
                          className="relative w-[35px] h-[21px] bg-stone-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-green-600 checked:border-green-600 focus:checked:border-green-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-900

                  before:inline-block before:size-4 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                          defaultChecked=""
                        />
                      </div>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      1242384741
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <span className="text-sm text-stone-600 dark:text-neutral-400">
                      $4
                    </span>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="flex flex-wrap gap-1">
                      <span className="p-2 bg-stone-100 text-stone-800 text-xs rounded-md dark:bg-neutral-700 dark:text-neutral-200">
                        🛍️ In store
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap px-4 py-3">
                    <div className="inline-flex items-center -space-x-px">
                      <a
                        className="size-8 inline-flex justify-center items-center gap-x-2 font-medium rounded-s-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                        href="../../pro/ecommerce/product-details.html"
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
                      </a>
                      {/* Download Dropdown */}
                      <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
                        <button
                          id="hs-pro-etwsdd11"
                          type="button"
                          className="size-8 inline-flex justify-center items-center gap-x-2 rounded-e-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
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
                          aria-labelledby="hs-pro-etwsdd11"
                        >
                          <div className="p-1">
                            <div className="py-2 px-3">
                              <span className="block font-semibold text-stone-800 dark:text-neutral-200">
                                Download Report
                              </span>
                              <span className="block text-xs text-stone-500 dark:text-neutral-500">
                                Select Options
                              </span>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="py-1 px-2">
                              <div className="flex items-center bg-stone-100 rounded-xl p-1 dark:bg-neutral-800">
                                <label
                                  htmlFor="hs-pro-etwsdd11ts1"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd11ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd11ts1"
                                    defaultChecked=""
                                  />
                                </label>
                                <label
                                  htmlFor="hs-pro-etwsdd11ts2"
                                  className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-stone-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                                    name="hs-pro-etwsdd11ts"
                                    className="hidden"
                                    id="hs-pro-etwsdd11ts2"
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="m-2 border-t border-stone-200 dark:border-neutral-700" />
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd11s1"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Item
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd11s1"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd11s2"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Type
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd11s2"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd11s3"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Stocks
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd11s3"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd11s4"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                SKU
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd11s4"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd11s5"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Price
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd11s5"
                                defaultChecked=""
                              />
                            </div>
                            <div className="flex justify-between items-center py-2 px-3 cursor-pointer rounded-lg hover:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-700">
                              <label
                                htmlFor="hs-pro-etwsdd11s6"
                                className="flex flex-1 items-center gap-x-3 cursor-pointer text-sm text-stone-800 dark:text-neutral-300"
                              >
                                Available in
                              </label>
                              <input
                                type="checkbox"
                                className="shrink-0 size-3.5 border-stone-300 rounded text-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-stone-800"
                                id="hs-pro-etwsdd11s6"
                                defaultChecked=""
                              />
                            </div>
                            <div className="my-1 border-t border-stone-200 dark:border-neutral-700" />
                            <button
                              type="button"
                              className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
                            >
                              Download
                            </button>
                          </div>
                        </div>
                        {/* End Download Dropdown */}
                      </div>
                      {/* End Download Dropdown */}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* End Table */}
          </div>
        </div>
        {/* End Table Content */}
        {/* Footer */}
        <div className="mt-5 flex flex-wrap justify-between items-center gap-2">
          <p className="text-sm text-stone-800 dark:text-neutral-200">
            <span className="font-medium">27</span>
            <span className="text-stone-500 dark:text-neutral-500">
              results
            </span>
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
      {/* End Tab Content */}
      {/* Tab Content */}
      <div
        id="hs-pro-tabs-dut-archived"
        className="hidden"
        role="tabpanel"
        aria-labelledby="hs-pro-tabs-dut-item-archived"
      >
        {/* Empty State */}
        <div className="p-5  flex flex-col justify-center items-center text-center">
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
              className="stroke-stone-50 dark:stroke-neutral-700/10"
            />
            <rect
              x="34.5"
              y={58}
              width={24}
              height={24}
              rx={4}
              fill="currentColor"
              className="fill-stone-50 dark:fill-neutral-700/30"
            />
            <rect
              x="66.5"
              y={61}
              width={60}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-50 dark:fill-neutral-700/30"
            />
            <rect
              x="66.5"
              y={73}
              width={77}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-50 dark:fill-neutral-700/30"
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
              className="stroke-stone-100 dark:stroke-neutral-700/30"
            />
            <rect
              x={27}
              y={36}
              width={24}
              height={24}
              rx={4}
              fill="currentColor"
              className="fill-stone-100 dark:fill-neutral-700/70"
            />
            <rect
              x={59}
              y={39}
              width={60}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-100 dark:fill-neutral-700/70"
            />
            <rect
              x={59}
              y={51}
              width={92}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-100 dark:fill-neutral-700/70"
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
                className="stroke-stone-100 dark:stroke-neutral-700/60"
                shapeRendering="crispEdges"
              />
              <rect
                x={20}
                y={14}
                width={24}
                height={24}
                rx={4}
                fill="currentColor"
                className="fill-stone-200 dark:fill-neutral-700 "
              />
              <rect
                x={52}
                y={17}
                width={60}
                height={6}
                rx={3}
                fill="currentColor"
                className="fill-stone-200 dark:fill-neutral-700"
              />
              <rect
                x={52}
                y={29}
                width={106}
                height={6}
                rx={3}
                fill="currentColor"
                className="fill-stone-200 dark:fill-neutral-700"
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
            <p className="mt-2 font-medium text-stone-800 dark:text-neutral-200">
              Your data will appear here soon.
            </p>
            <p className="mb-5 text-sm text-stone-500 dark:text-neutral-500">
              In the meantime, you can create new custom insights to monitor
              your most important metrics.
            </p>
          </div>
          <a
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Learn more
          </a>
        </div>
        {/* End Empty State */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div
        id="hs-pro-tabs-dut-publish"
        className="hidden"
        role="tabpanel"
        aria-labelledby="hs-pro-tabs-dut-item-publish"
      >
        {/* Empty State */}
        <div className="p-5  flex flex-col justify-center items-center text-center">
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
              className="stroke-stone-50 dark:stroke-neutral-700/10"
            />
            <rect
              x="34.5"
              y={58}
              width={24}
              height={24}
              rx={4}
              fill="currentColor"
              className="fill-stone-50 dark:fill-neutral-700/30"
            />
            <rect
              x="66.5"
              y={61}
              width={60}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-50 dark:fill-neutral-700/30"
            />
            <rect
              x="66.5"
              y={73}
              width={77}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-50 dark:fill-neutral-700/30"
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
              className="stroke-stone-100 dark:stroke-neutral-700/30"
            />
            <rect
              x={27}
              y={36}
              width={24}
              height={24}
              rx={4}
              fill="currentColor"
              className="fill-stone-100 dark:fill-neutral-700/70"
            />
            <rect
              x={59}
              y={39}
              width={60}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-100 dark:fill-neutral-700/70"
            />
            <rect
              x={59}
              y={51}
              width={92}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-100 dark:fill-neutral-700/70"
            />
            <g filter="url(#filter5)">
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
                className="stroke-stone-100 dark:stroke-neutral-700/60"
                shapeRendering="crispEdges"
              />
              <rect
                x={20}
                y={14}
                width={24}
                height={24}
                rx={4}
                fill="currentColor"
                className="fill-stone-200 dark:fill-neutral-700 "
              />
              <rect
                x={52}
                y={17}
                width={60}
                height={6}
                rx={3}
                fill="currentColor"
                className="fill-stone-200 dark:fill-neutral-700"
              />
              <rect
                x={52}
                y={29}
                width={106}
                height={6}
                rx={3}
                fill="currentColor"
                className="fill-stone-200 dark:fill-neutral-700"
              />
            </g>
            <defs>
              <filter
                id="filter5"
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
            <p className="mt-2 font-medium text-stone-800 dark:text-neutral-200">
              Your data will appear here soon.
            </p>
            <p className="mb-5 text-sm text-stone-500 dark:text-neutral-500">
              In the meantime, you can create new custom insights to monitor
              your most important metrics.
            </p>
          </div>
          <a
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Learn more
          </a>
        </div>
        {/* End Empty State */}
      </div>
      {/* End Tab Content */}
      {/* Tab Content */}
      <div
        id="hs-pro-tabs-dut-unpublish"
        className="hidden"
        role="tabpanel"
        aria-labelledby="hs-pro-tabs-dut-item-unpublish"
      >
        {/* Empty State */}
        <div className="p-5  flex flex-col justify-center items-center text-center">
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
              className="stroke-stone-50 dark:stroke-neutral-700/10"
            />
            <rect
              x="34.5"
              y={58}
              width={24}
              height={24}
              rx={4}
              fill="currentColor"
              className="fill-stone-50 dark:fill-neutral-700/30"
            />
            <rect
              x="66.5"
              y={61}
              width={60}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-50 dark:fill-neutral-700/30"
            />
            <rect
              x="66.5"
              y={73}
              width={77}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-50 dark:fill-neutral-700/30"
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
              className="stroke-stone-100 dark:stroke-neutral-700/30"
            />
            <rect
              x={27}
              y={36}
              width={24}
              height={24}
              rx={4}
              fill="currentColor"
              className="fill-stone-100 dark:fill-neutral-700/70"
            />
            <rect
              x={59}
              y={39}
              width={60}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-100 dark:fill-neutral-700/70"
            />
            <rect
              x={59}
              y={51}
              width={92}
              height={6}
              rx={3}
              fill="currentColor"
              className="fill-stone-100 dark:fill-neutral-700/70"
            />
            <g filter="url(#filter6)">
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
                className="stroke-stone-100 dark:stroke-neutral-700/60"
                shapeRendering="crispEdges"
              />
              <rect
                x={20}
                y={14}
                width={24}
                height={24}
                rx={4}
                fill="currentColor"
                className="fill-stone-200 dark:fill-neutral-700 "
              />
              <rect
                x={52}
                y={17}
                width={60}
                height={6}
                rx={3}
                fill="currentColor"
                className="fill-stone-200 dark:fill-neutral-700"
              />
              <rect
                x={52}
                y={29}
                width={106}
                height={6}
                rx={3}
                fill="currentColor"
                className="fill-stone-200 dark:fill-neutral-700"
              />
            </g>
            <defs>
              <filter
                id="filter6"
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
            <p className="mt-2 font-medium text-stone-800 dark:text-neutral-200">
              Your data will appear here soon.
            </p>
            <p className="mb-5 text-sm text-stone-500 dark:text-neutral-500">
              In the meantime, you can create new custom insights to monitor
              your most important metrics.
            </p>
          </div>
          <a
            className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-stone-200 bg-white text-stone-800 shadow-sm hover:bg-stone-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-stone-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            href="#"
          >
            Learn more
          </a>
        </div>
        {/* End Empty State */}
      </div>
      {/* End Tab Content */}
    </div>
  );
};

export default ProductList;