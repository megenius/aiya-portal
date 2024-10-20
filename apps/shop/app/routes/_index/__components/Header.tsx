import React from 'react';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 h-[60px] bg-white border-b border-gray-200 dark:bg-neutral-900 dark:border-neutral-700">
      <div className="max-w-[85rem] flex flex-wrap justify-between md:grid md:grid-cols-2 basis-full items-center w-full mx-auto py-[11px] md:py-0 px-4 sm:px-6 lg:px-8">
        <div className="md:col-span-1 order-1">
          {/* Logo */}
          <a
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="../../pro/shop/index.html"
            aria-label="Preline"
          >
            <svg
              className="w-28 h-auto"
              width={116}
              height={32}
              viewBox="0 0 116 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091ZM49.2427 25.5V11.3182H53.0559V13.7926H53.2037C53.4622 12.9124 53.8961 12.2476 54.5055 11.7983C55.1149 11.3428 55.8166 11.1151 56.6106 11.1151C56.8076 11.1151 57.02 11.1274 57.2477 11.152C57.4754 11.1766 57.6755 11.2105 57.8478 11.2536V14.7436C57.6632 14.6882 57.4077 14.639 57.0815 14.5959C56.7553 14.5528 56.4567 14.5312 56.1859 14.5312C55.6073 14.5312 55.0903 14.6574 54.6348 14.9098C54.1854 15.156 53.8284 15.5007 53.5638 15.9439C53.3052 16.3871 53.176 16.898 53.176 17.4766V25.5H49.2427ZM64.9043 25.777C63.4455 25.777 62.1898 25.4815 61.1373 24.8906C60.0909 24.2936 59.2845 23.4503 58.7182 22.3608C58.1519 21.2652 57.8688 19.9695 57.8688 18.4737C57.8688 17.0149 58.1519 15.7346 58.7182 14.6328C59.2845 13.531 60.0816 12.6723 61.1096 12.0568C62.1437 11.4413 63.3563 11.1335 64.7474 11.1335C65.683 11.1335 66.5539 11.2843 67.3603 11.5859C68.1728 11.8814 68.8806 12.3277 69.4839 12.9247C70.0932 13.5218 70.5672 14.2727 70.9057 15.1776C71.2443 16.0762 71.4135 17.1288 71.4135 18.3352V19.4155H59.4384V16.978H67.7111C67.7111 16.4117 67.588 15.91 67.3418 15.473C67.0956 15.036 66.754 14.6944 66.317 14.4482C65.8861 14.1958 65.3844 14.0696 64.812 14.0696C64.2149 14.0696 63.6856 14.2081 63.2239 14.4851C62.7684 14.7559 62.4114 15.1222 62.1529 15.5838C61.8944 16.0393 61.762 16.5471 61.7559 17.1072V19.4247C61.7559 20.1264 61.8851 20.7327 62.1437 21.2436C62.4083 21.7545 62.7807 22.1484 63.2608 22.4254C63.741 22.7024 64.3103 22.8409 64.9689 22.8409C65.406 22.8409 65.8061 22.7794 66.1692 22.6562C66.5324 22.5331 66.8432 22.3485 67.1018 22.1023C67.3603 21.8561 67.5572 21.5545 67.6927 21.1974L71.3304 21.4375C71.1458 22.3116 70.7672 23.0748 70.1948 23.7273C69.6285 24.3736 68.896 24.8783 67.9974 25.2415C67.1048 25.5985 66.0738 25.777 64.9043 25.777ZM77.1335 6.59091V25.5H73.2003V6.59091H77.1335ZM79.5043 25.5V11.3182H83.4375V25.5H79.5043ZM81.4801 9.49006C80.8954 9.49006 80.3937 9.29616 79.9752 8.90838C79.5628 8.51444 79.3566 8.04356 79.3566 7.49574C79.3566 6.95407 79.5628 6.48935 79.9752 6.10156C80.3937 5.70762 80.8954 5.51065 81.4801 5.51065C82.0649 5.51065 82.5635 5.70762 82.9759 6.10156C83.3944 6.48935 83.6037 6.95407 83.6037 7.49574C83.6037 8.04356 83.3944 8.51444 82.9759 8.90838C82.5635 9.29616 82.0649 9.49006 81.4801 9.49006ZM89.7415 17.3011V25.5H85.8083V11.3182H89.5569V13.8203H89.723C90.037 12.9955 90.5632 12.343 91.3019 11.8629C92.0405 11.3767 92.9361 11.1335 93.9887 11.1335C94.9735 11.1335 95.8322 11.349 96.5647 11.7798C97.2971 12.2107 97.8665 12.8262 98.2728 13.6264C98.679 14.4205 98.8821 15.3684 98.8821 16.4702V25.5H94.9489V17.1719C94.9551 16.304 94.7335 15.6269 94.2841 15.1406C93.8348 14.6482 93.2162 14.402 92.4283 14.402C91.8989 14.402 91.4311 14.5159 91.0249 14.7436C90.6248 14.9714 90.3109 15.3037 90.0831 15.7408C89.8615 16.1716 89.7477 16.6918 89.7415 17.3011ZM107.665 25.777C106.206 25.777 104.951 25.4815 103.898 24.8906C102.852 24.2936 102.045 23.4503 101.479 22.3608C100.913 21.2652 100.63 19.9695 100.63 18.4737C100.63 17.0149 100.913 15.7346 101.479 14.6328C102.045 13.531 102.842 12.6723 103.87 12.0568C104.905 11.4413 106.117 11.1335 107.508 11.1335C108.444 11.1335 109.315 11.2843 110.121 11.5859C110.934 11.8814 111.641 12.3277 112.245 12.9247C112.854 13.5218 113.328 14.2727 113.667 15.1776C114.005 16.0762 114.174 17.1288 114.174 18.3352V19.4155H102.199V16.978H110.472C110.472 16.4117 110.349 15.91 110.103 15.473C109.856 15.036 109.515 14.6944 109.078 14.4482C108.647 14.1958 108.145 14.0696 107.573 14.0696C106.976 14.0696 106.446 14.2081 105.985 14.4851C105.529 14.7559 105.172 15.1222 104.914 15.5838C104.655 16.0393 104.523 16.5471 104.517 17.1072V19.4247C104.517 20.1264 104.646 20.7327 104.905 21.2436C105.169 21.7545 105.542 22.1484 106.022 22.4254C106.502 22.7024 107.071 22.8409 107.73 22.8409C108.167 22.8409 108.567 22.7794 108.93 22.6562C109.293 22.5331 109.604 22.3485 109.863 22.1023C110.121 21.8561 110.318 21.5545 110.454 21.1974L114.091 21.4375C113.907 22.3116 113.528 23.0748 112.956 23.7273C112.389 24.3736 111.657 24.8783 110.758 25.2415C109.866 25.5985 108.835 25.777 107.665 25.777Z"
                className="fill-indigo-600 dark:fill-white"
                fill="currentColor"
              />
              <path
                d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12"
                className="stroke-indigo-600 dark:stroke-white"
                stroke="currentColor"
                strokeWidth={2}
              />
              <path
                d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12"
                className="stroke-indigo-600 dark:stroke-white"
                stroke="currentColor"
                strokeWidth={2}
              />
              <circle
                cx={13}
                cy="16.5214"
                r={5}
                className="fill-indigo-600 dark:fill-white"
                fill="currentColor"
              />
            </svg>
          </a>
          {/* End Logo */}
        </div>
        <div className="md:col-span-1 order-2 md:order-3 flex justify-end items-center gap-x-2">
          <div className="flex items-center gap-x-0.5">
            {/* Search Button Icon */}
            <button
              type="button"
              className="inline-flex shrink-0 justify-center items-center gap-x-2 size-[38px] rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              data-hs-overlay="#hs-pro-shnsm"
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
            {/* Favorites Button Icon */}
            <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
              <button
                id="hs-pro-dnnd"
                type="button"
                className="relative shrink-0 inline-flex justify-center items-center gap-x-2 size-[38px] rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                <span className="flex absolute top-0 end-0 z-10 -mt-1 -me-1">
                  <span className="relative min-w-[18px] min-h-[18px] inline-flex justify-center items-center text-[10px] bg-gray-800 text-white rounded-full px-1 dark:bg-neutral-200 dark:text-neutral-800">
                    2<span className="sr-only">Notifications</span>
                  </span>
                </span>
              </button>
              {/* End Favorites Button Icon */}
              {/* Favorites Dropdown */}
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full sm:w-96 hidden z-10 bg-white border-y sm:border-x border-gray-200 sm:border-gray-100 sm:mt-2 sm:rounded-xl shadow-lg before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-900 dark:border-neutral-700"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-pro-dnnd"
              >
                <div className="py-4 px-6">
                  <span className="block font-medium text-gray-800 dark:text-neutral-200">
                    Favorites
                  </span>
                </div>
                <div className="px-6 max-h-[480px] overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  <div className="space-y-5">
                    {/* Item */}
                    <div
                      id="hs-pro-shfdi1"
                      className="hs-removing:opacity-0 duration-300 flex gap-x-5"
                    >
                      <div className="relative">
                        <img
                          className="shrink-0 w-20 h-28 object-cover bg-gray-100 rounded-lg dark:bg-neutral-700"
                          src="https://images.unsplash.com/photo-1627225925683-1da7021732ea?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Product Image"
                        />
                      </div>
                      <div className="grow flex flex-col">
                        <h4 className="text-sm text-gray-800 dark:text-neutral-200">
                          Everyday Solid Black T-Shirt
                        </h4>
                        <span className="mt-1.5">
                          <span className="text-sm text-gray-500 dark:text-neutral-500">
                            <s>$60</s>
                          </span>
                          <span className="text-sm text-red-500">$40</span>
                        </span>
                        <div className="">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-1.5 text-[13px] text-gray-800 underline underline-offset-4 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400"
                            data-hs-remove-element="#hs-pro-shfdi1"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* End Item */}
                    {/* Item */}
                    <div
                      id="hs-pro-shfdi2"
                      className="hs-removing:opacity-0 duration-300 flex gap-x-5"
                    >
                      <div className="relative">
                        <img
                          className="shrink-0 w-20 h-28 object-cover bg-gray-100 rounded-lg dark:bg-neutral-700"
                          src="https://images.unsplash.com/photo-1699595749116-33a4a869503c?q=80&w=320&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Product Image"
                        />
                      </div>
                      <div className="grow flex flex-col">
                        <h4 className="text-sm text-gray-800 dark:text-neutral-200">
                          Nike Air Force 1
                        </h4>
                        <span className="mt-1.5 text-sm text-gray-800 dark:text-neutral-200">
                          $139
                        </span>
                        <div className="">
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-1.5 text-[13px] text-gray-800 underline underline-offset-4 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400"
                            data-hs-remove-element="#hs-pro-shfdi2"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* End Item */}
                  </div>
                </div>
                <div className="py-4 px-6 text-center">
                  <a
                    className="inline-flex justify-center items-center font-medium text-sm text-gray-800 underline underline-offset-4 decoration-1 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 dark:text-neutral-200 dark:hover:text-indigo-400 dark:focus:text-indigo-400"
                    href="../../pro/shop/favorites.html"
                  >
                    View favorites
                  </a>
                </div>
              </div>
            </div>
            {/* End Favorites Dropdown */}
            {/* Cart Button Icon */}
            <button
              type="button"
              className="relative shrink-0 inline-flex justify-center items-center gap-x-2 size-[38px] rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
              data-hs-overlay="#hs-pro-shco"
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
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              <span className="flex absolute top-0 end-0 z-10 -mt-1 -me-1">
                <span className="relative min-w-[18px] min-h-[18px] inline-flex justify-center items-center text-[10px] bg-gray-800 text-white rounded-full px-1 dark:bg-neutral-200 dark:text-neutral-800">
                  3<span className="sr-only">Notifications</span>
                </span>
              </span>
            </button>
            {/* End Cart Button Icon */}
            {/* Account Button Icon */}
            <div className="hs-dropdown [--auto-close:inside] [--placement:bottom-right] relative inline-flex">
              <button
                id="hs-pro-shadnli"
                type="button"
                className="relative shrink-0 inline-flex justify-center items-center gap-x-2 size-[38px] rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <img
                  className="shrink-0 size-8 rounded-full"
                  src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                  alt="Avatar"
                />
              </button>
              {/* End Account Button Icon */}
              {/* Account Dropdown */}
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full sm:w-72 hidden z-10 bg-white border-y sm:border-x border-gray-200 sm:border-gray-100 sm:mt-2 sm:rounded-xl shadow-lg before:absolute before:-top-4 before:start-0 before:w-full before:h-5 dark:bg-neutral-900 dark:border-neutral-700"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-pro-shadnli"
              >
                <div className="p-2">
                  {/* Account Details */}
                  <a
                    className="py-2 px-2.5 flex items-center gap-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="../../pro/shop/account.html"
                  >
                    <img
                      className="shrink-0 size-10 rounded-full"
                      src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                      alt="Avatar"
                    />
                    <div className="grow">
                      <span className="block font-medium text-sm text-gray-800 dark:text-neutral-200">
                        James Collins
                      </span>
                      <p className="text-xs text-gray-500 dark:text-neutral-500">
                        jamescollins@site.so
                      </p>
                    </div>
                  </a>
                  {/* End Account Details */}
                  <div className="my-2 mx-2.5 h-px bg-gray-200 dark:bg-neutral-700" />
                  {/* List */}
                  <ul className="flex flex-col space-y-0.5">
                    <li>
                      <a
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="../../pro/shop/personal-info.html"
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
                        Personal Info
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="../../pro/shop/my-orders.html"
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
                          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                          <path d="M3 6h18" />
                          <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        My Orders
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="../../pro/shop/order-details.html"
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
                          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
                          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
                          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
                          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
                          <path d="M8 7v10" />
                          <path d="M12 7v10" />
                          <path d="M17 7v10" />
                        </svg>
                        Order Details
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="../../pro/shop/addresses.html"
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
                          <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                          <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                          <path d="M18 22v-3" />
                          <circle cx={10} cy={10} r={3} />
                        </svg>
                        Addresses
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="../../pro/shop/payment.html"
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
                          <rect width={20} height={14} x={2} y={5} rx={2} />
                          <line x1={2} x2={22} y1={10} y2={10} />
                        </svg>
                        Payment
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="../../pro/shop/email-newsletter.html"
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
                        Email Newsletter
                      </a>
                    </li>
                  </ul>
                  {/* End List */}
                  <div className="my-2 mx-2.5 h-px bg-gray-200 dark:bg-neutral-700" />
                  {/* List */}
                  <ul className="flex flex-col space-y-0.5">
                    <li>
                      <a
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="../../pro/shop/gift-cards.html"
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
                          <rect x={3} y={8} width={18} height={4} rx={1} />
                          <path d="M12 8v13" />
                          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
                          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
                        </svg>
                        Gift Cards
                      </a>
                    </li>
                    <li>
                      <a
                        className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        href="../../pro/shop/returns-and-refunds.html"
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
                          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                          <path d="M3 3v5h5" />
                        </svg>
                        Returns &amp; Refunds
                      </a>
                    </li>
                  </ul>
                  {/* End List */}
                  <div className="my-2 mx-2.5 h-px bg-gray-200 dark:bg-neutral-700" />
                  <p>
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100 hover:text-red-500 focus:outline-none focus:bg-gray-100 focus:text-red-500 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:hover:text-red-500 dark:focus:text-red-500"
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
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                        <polyline points="16 17 21 12 16 7" />
                        <line x1={21} x2={9} y1={12} y2={12} />
                      </svg>
                      Logout
                    </button>
                  </p>
                </div>
              </div>
            </div>
            {/* End Account Dropdown */}
          </div>
          <div className="md:hidden">
            {/* Collapse Button Trigger */}
            <button
              type="button"
              className="w-7 h-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              id="hs-pro-dmh-collapse"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="hs-pro-dmh"
              aria-label="Toggle navigation"
              data-hs-overlay="#hs-pro-dmh"
              data-hs-overlay-options='{
  "moveOverlayToBody": 767
}'
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
      </div>
    </header>
  );
};

export default Header;