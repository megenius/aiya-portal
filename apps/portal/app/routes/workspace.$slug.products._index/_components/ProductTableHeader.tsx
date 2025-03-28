import React from 'react';

interface ProductTableHeaderProps {

}

const ProductTableHeader: React.FC<ProductTableHeaderProps> = () => {
  return (
    <thead>
      <tr>
        <th scope="col" className="ps-3 text-start">
          <input
            type="checkbox"
            className="shrink-0 border-stone-300 rounded-sm text-green-600 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-green-500 dark:checked:border-green-500 dark:focus:ring-offset-neutral-800"
          />
        </th>
        <th scope="col" className="min-w-[250px] ">
          {/* Sort Dropdown */}
          <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
            <button
              id="hs-pro-eptits"
              type="button"
              className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-hidden focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
              className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-hidden focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
        {/* <th scope="col">
          <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
            <button
              id="hs-pro-eptsts"
              type="button"
              className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-hidden focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
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
            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-pro-eptsts"
            >
              <div className="p-1">
                <button
                  type="button"
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
          </div>
        </th> */}
        <th scope="col">
          {/* Sort Dropdown */}
          <div className="hs-dropdown relative inline-flex w-full cursor-pointer">
            <button
              id="hs-pro-eptsks"
              type="button"
              className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-hidden focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
              className="px-5 py-2.5 text-start w-full flex items-center gap-x-1 text-sm font-normal text-stone-500 focus:outline-hidden focus:bg-stone-100 dark:text-neutral-500 dark:focus:bg-neutral-700"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  className="w-full flex items-center gap-x-3 py-1.5 px-2 rounded-lg text-[13px] font-normal text-stone-800 hover:bg-stone-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-300 focus:outline-hidden focus:bg-stone-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
  );
};

export default ProductTableHeader;