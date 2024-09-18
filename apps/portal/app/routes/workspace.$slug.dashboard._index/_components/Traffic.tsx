import React from 'react';

interface TrafficProps {

}

const Traffic: React.FC<TrafficProps> = () => {
  return (
    <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      {/* Header */}
      <div className="p-5 pb-4 grid grid-cols-2 items-center gap-x-4">
        <div>
          <h2 className="inline-block font-semibold text-gray-800 dark:text-neutral-200">
            Referral Traffic
          </h2>
        </div>
        {/* End Col */}
        <div className="flex justify-end items-center gap-x-1">
          {/* Download Dropdown */}
          <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
            <button
              id="hs-pro-dbrrtchdd"
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
              aria-labelledby="hs-pro-dbrrtchdd"
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
                      htmlFor="hs-pro-dbrrtchddts1"
                      className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                        className="hidden"
                        id="hs-pro-dbrrtchddts1"
                        defaultChecked=""
                      />
                    </label>
                    <label
                      htmlFor="hs-pro-dbrrtchddts2"
                      className="relative py-1.5 px-3 w-full cursor-pointer text-center text-sm text-gray-800 rounded-lg has-[:checked]:bg-white has-[:checked]:shadow-sm dark:text-neutral-200 dark:has-[:checked]:bg-neutral-600"
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
                        className="hidden"
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
                    className="shrink-0 size-3.5 border-gray-300 rounded text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
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
                    className="shrink-0 size-3.5 border-gray-300 rounded text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
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
                    className="shrink-0 size-3.5 border-gray-300 rounded text-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                    id="hs-pro-dbrrtchdds3"
                    defaultChecked=""
                  />
                </div>
                <div className="my-1 border-t border-gray-200 dark:border-neutral-700" />
                <button
                  type="button"
                  className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Download
                </button>
              </div>
            </div>
            {/* End Download Dropdown */}
          </div>
          {/* End Download Dropdown */}
          {/* Download Dropdown */}
          <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
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
            {/* Download Dropdown */}
            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
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
            </div>
            {/* End Download Dropdown */}
          </div>
          {/* End Download Dropdown */}
        </div>
        {/* End Col */}
      </div>
      {/* End Header */}
      {/* Body */}
      <div className="h-full p-5 pt-0">
        <div className="h-full flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex gap-x-1 w-full h-2.5 rounded-full overflow-hidden">
              <div
                className="flex flex-col justify-center overflow-hidden bg-blue-500 text-xs text-white text-center whitespace-nowrap"
                style={{ width: "42%" }}
                role="progressbar"
                aria-valuenow={42}
                aria-valuemin={0}
                aria-valuemax={100}
              />
              <div
                className="flex flex-col justify-center overflow-hidden bg-violet-500 text-xs text-white text-center whitespace-nowrap"
                style={{ width: "27%" }}
                role="progressbar"
                aria-valuenow={27}
                aria-valuemin={0}
                aria-valuemax={100}
              />
              <div
                className="flex flex-col justify-center overflow-hidden bg-teal-400 text-xs text-white text-center whitespace-nowrap"
                style={{ width: "16%" }}
                role="progressbar"
                aria-valuenow={16}
                aria-valuemin={0}
                aria-valuemax={100}
              />
              <div
                className="flex flex-col justify-center overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap"
                style={{ width: "6%" }}
                role="progressbar"
                aria-valuenow={6}
                aria-valuemin={0}
                aria-valuemax={100}
              />
              <div
                className="flex flex-col justify-center overflow-hidden bg-gray-200 text-xs text-white text-center whitespace-nowrap dark:bg-neutral-500"
                style={{ width: "9%" }}
                role="progressbar"
                aria-valuenow={9}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            {/* List Group */}
            <ul>
              {/* List Item */}
              <li className="py-2 grid grid-cols-2 justify-between items-center gap-x-4">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-blue-600 rounded-sm me-2.5" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    github.com
                  </span>
                </div>
                <div className="text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    164k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="py-2 grid grid-cols-2 justify-between items-center gap-x-4">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-violet-500 rounded-sm me-2.5" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    accounts.google.com
                  </span>
                </div>
                <div className="text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    49k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="py-2 grid grid-cols-2 justify-between items-center gap-x-4">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-teal-400 rounded-sm me-2.5" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    themes.getbootstrap.com
                  </span>
                </div>
                <div className="text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    26k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="py-2 grid grid-cols-2 justify-between items-center gap-x-4">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-blue-400 rounded-sm me-2.5" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    htmlstream.com
                  </span>
                </div>
                <div className="text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    8k
                  </span>
                </div>
              </li>
              {/* End List Item */}
              {/* List Item */}
              <li className="py-2 grid grid-cols-2 justify-between items-center gap-x-4">
                <div className="flex items-center">
                  <span className="shrink-0 size-2.5 inline-block bg-gray-200 rounded-sm me-2 dark:bg-neutral-500" />
                  <span className="text-sm text-gray-800 dark:text-neutral-200">
                    Others
                  </span>
                </div>
                <div className="text-end">
                  <span className="text-sm text-gray-500 dark:text-neutral-500">
                    12k
                  </span>
                </div>
              </li>
              {/* End List Item */}
            </ul>
            {/* End List Group */}
          </div>
          {/* Avatar Group */}
          <div className="flex items-center -space-x-2">
            <div className="hs-tooltip hover:z-10">
              <img
                className="shrink-0 size-7 lg:size-[38px] border-2 border-white rounded-full dark:border-neutral-700"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Avatar"
              />
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-neutral-700"
                role="tooltip"
              >
                James Collins
              </span>
            </div>
            <div className="hs-tooltip hover:z-10">
              <span className="flex shrink-0 justify-center items-center size-7 lg:size-[38px] bg-white border border-gray-200 text-gray-700 text-xs lg:text-sm font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                E
              </span>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-neutral-700"
                role="tooltip"
              >
                Ella Lauda
              </span>
            </div>
            <div className="hs-tooltip hover:z-10">
              <img
                className="shrink-0 size-7 lg:size-[38px] border-2 border-white rounded-full dark:border-neutral-700"
                src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Avatar"
              />
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-neutral-700"
                role="tooltip"
              >
                Costa Quinn
              </span>
            </div>
            <div className="hs-tooltip hover:z-10">
              <img
                className="shrink-0 size-7 lg:size-[38px] border-2 border-white rounded-full dark:border-neutral-700"
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Avatar"
              />
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-neutral-700"
                role="tooltip"
              >
                Amanda Harvey
              </span>
            </div>
            <div className="hs-tooltip hover:z-10">
              <img
                className="shrink-0 size-7 lg:size-[38px] border-2 border-white rounded-full dark:border-neutral-700"
                src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Avatar"
              />
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-neutral-700"
                role="tooltip"
              >
                Alisa Grasso
              </span>
            </div>
            <div className="hs-tooltip hover:z-10">
              <span className="flex shrink-0 justify-center items-center size-7 lg:size-[38px] bg-white border border-gray-200 text-gray-700 text-xs lg:text-sm font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                O
              </span>
              <span
                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-neutral-700"
                role="tooltip"
              >
                Ols Schols
              </span>
            </div>
            <div>
              <span className="ms-4 lg:ms-5 text-sm text-gray-500 dark:text-neutral-500">
                215k more
              </span>
            </div>
          </div>
          {/* End Avatar Group */}
        </div>
      </div>
      {/* End Body */}
      {/* Footer */}
      <div className="text-center border-t border-gray-200 dark:border-neutral-700">
        <a
          className="p-3 flex justify-center items-center gap-x-2 text-sm text-blue-600 rounded-b-lg hover:text-blue-700 focus:outline-none focus:decoration-2 focus:underline focus:text-blue-700 dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600"
          href="#"
        >
          View full reports
        </a>
      </div>
      {/* End Footer */}
    </div>
  );
};

export default Traffic;