import React from 'react';

export const SideBar = () => <aside className="relative">
  <div
    id="hs-pro-chat-sidebar"
    className="hs-overlay [--auto-close:lg]
hs-overlay-open:translate-x-0
-translate-x-full transition-all duration-300 transform
sm:w-auto lg:w-[22rem] size-full
hidden
fixed inset-y-0 start-0  z-[60]
bg-gray-100
lg:block lg:translate-x-0 lg:end-auto lg:bottom-0  
dark:bg-neutral-900"
    tabIndex={-1}
    aria-labelledby="hs-pro-chat-sidebar-label"
  >
    <div className="h-full flex">
      <div className="relative z-10 w-16 flex flex-col h-full max-h-full pb-5">
        <header className="w-16 py-2.5 flex justify-center">
          <a
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="/"
            aria-label="Preline"
          >
            <svg
              className="w-7 h-auto"
              width={36}
              height={36}
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.0835 3.23358C9.88316 3.23358 3.23548 9.8771 3.23548 18.0723V35.5832H0.583496V18.0723C0.583496 8.41337 8.41851 0.583252 18.0835 0.583252C27.7485 0.583252 35.5835 8.41337 35.5835 18.0723C35.5835 27.7312 27.7485 35.5614 18.0835 35.5614H16.7357V32.911H18.0835C26.2838 32.911 32.9315 26.2675 32.9315 18.0723C32.9315 9.8771 26.2838 3.23358 18.0835 3.23358Z"
                className="fill-blue-600 dark:fill-white"
                fill="currentColor"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.0833 8.62162C12.8852 8.62162 8.62666 12.9245 8.62666 18.2879V35.5833H5.97468V18.2879C5.97468 11.5105 11.3713 5.97129 18.0833 5.97129C24.7954 5.97129 30.192 11.5105 30.192 18.2879C30.192 25.0653 24.7954 30.6045 18.0833 30.6045H16.7355V27.9542H18.0833C23.2815 27.9542 27.54 23.6513 27.54 18.2879C27.54 12.9245 23.2815 8.62162 18.0833 8.62162Z"
                className="fill-blue-600 dark:fill-white"
                fill="currentColor"
              />
              <path
                d="M24.8225 18.1012C24.8225 21.8208 21.8053 24.8361 18.0833 24.8361C14.3614 24.8361 11.3442 21.8208 11.3442 18.1012C11.3442 14.3815 14.3614 11.3662 18.0833 11.3662C21.8053 11.3662 24.8225 14.3815 24.8225 18.1012Z"
                className="fill-blue-600 dark:fill-white"
                fill="currentColor"
              />
            </svg>
          </a>
        </header>
        {/* Content */}
        <div className="w-16 h-full flex flex-col">
          {/* Nav */}
          <nav className="mt-2">
            <ul className="text-center space-y-4">
              {/* Item */}
              <li>
                <a
                  className="relative group flex flex-col justify-center items-center gap-y-1 text-[11px] text-gray-600 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                  href="#"
                >
                  <span className="flex justify-center items-center gap-x-3 size-9 rounded-lg bg-gray-300 dark:bg-neutral-800 ">
                    <svg
                      className="shrink-0 size-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
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
                    </svg>
                  </span>
                  Inbox
                </a>
              </li>
              {/* End Item */}
              {/* Item */}
              <li>
                <a
                  className="relative group flex flex-col justify-center items-center gap-y-1 text-[11px] text-gray-600 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                  href="#"
                >
                  <span className="flex justify-center items-center gap-x-3 size-9 rounded-lg group-hover:bg-gray-300 group-focus:bg-gray-300 dark:group-hover:bg-neutral-800 dark:group-focus:bg-neutral-800">
                    <svg
                      className="shrink-0 size-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                      <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
                      <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                      <circle cx={12} cy={12} r={10} />
                    </svg>
                  </span>
                  Visitors
                </a>
              </li>
              {/* End Item */}
              {/* Item */}
              <li>
                <a
                  className="relative group flex flex-col justify-center items-center gap-y-1 text-[11px] text-gray-600 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                  href="#"
                >
                  <span className="flex justify-center items-center gap-x-3 size-9 rounded-lg group-hover:bg-gray-300 group-focus:bg-gray-300 dark:group-hover:bg-neutral-800 dark:group-focus:bg-neutral-800">
                    <svg
                      className="shrink-0 size-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
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
                    </svg>
                  </span>
                  Activity
                  <span className="flex absolute -top-1 end-2 z-10">
                    <span className="relative min-w-[16px] min-h-[16px] inline-flex justify-center items-center text-[10px] bg-red-500 text-white rounded-full px-1">
                      2
                    </span>
                  </span>
                </a>
              </li>
              {/* End Item */}
              {/* Item */}
              <li>
                <a
                  className="relative group flex flex-col justify-center items-center gap-y-1 text-[11px] text-gray-600 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                  href="#"
                >
                  <span className="flex justify-center items-center gap-x-3 size-9 rounded-lg group-hover:bg-gray-300 group-focus:bg-gray-300 dark:group-hover:bg-neutral-800 dark:group-focus:bg-neutral-800">
                    <svg
                      className="shrink-0 size-5 mx-auto"
                      xmlns="http://www.w3.org/2000/svg"
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
                  </span>
                  Reports
                </a>
              </li>
              {/* End Item */}
              {/* Item */}
              <li>
                {/* More Dropdown */}
                <div className="hs-dropdown [--strategy:absolute] [--placement:bottom-right] relative inline-flex">
                  <button
                    id="hs-pro-chmsnmd"
                    type="button"
                    className="relative group flex flex-col justify-center items-center gap-y-1 text-[11px] text-gray-600 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <span className="flex justify-center items-center gap-x-3 size-9 rounded-lg group-hover:bg-gray-300 group-focus:bg-gray-300 dark:group-hover:bg-neutral-800 dark:group-focus:bg-neutral-800">
                      <svg
                        className="shrink-0 size-5 mx-auto"
                        xmlns="http://www.w3.org/2000/svg"
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
                        <circle cx={19} cy={12} r={1} />
                        <circle cx={5} cy={12} r={1} />
                      </svg>
                    </span>
                    Links
                  </button>
                  {/* More Dropdown */}
                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-lg dark:bg-neutral-900"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-pro-chmsnmd"
                  >
                    <div className="p-1 space-y-0.5">
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        Inbox
                        <svg
                          className="ms-auto shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
                          <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
                          <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
                          <circle cx={12} cy={12} r={10} />
                        </svg>
                        Visitors
                        <svg
                          className="ms-auto shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx={9} cy={7} r={4} />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                        Contacts
                        <svg
                          className="hidden ms-auto shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                        </svg>
                        Activity
                        <svg
                          className="ms-auto shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          <rect width={7} height={7} x={14} y={3} rx={1} />
                          <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                        </svg>
                        Plugins
                        <svg
                          className="hidden ms-auto shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          <line x1={18} x2={18} y1={20} y2={10} />
                          <line x1={12} x2={12} y1={20} y2={4} />
                          <line x1={6} x2={6} y1={20} y2={14} />
                        </svg>
                        Reports
                        <svg
                          className="ms-auto shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </button>
                      <button
                        type="button"
                        className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-xs text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                        </svg>
                        Articles
                        <svg
                          className="hidden ms-auto shrink-0 size-3.5 text-gray-800 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </button>
                    </div>
                  </div>
                  {/* End More Dropdown */}
                </div>
                {/* End More Dropdown */}
              </li>
              {/* End Item */}
            </ul>
          </nav>
          {/* End Nav */}
        </div>
        {/* End Content */}
        {/* Footer */}
        <footer className="w-16 text-center space-y-3">
          <div className="hidden lg:block">
            {/* Project Dropdown */}
            <div className="hs-dropdown relative [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] inline-flex">
              {/* Project Button */}
              <button
                id="hs-pro-dnwpd"
                type="button"
                className="w-full inline-flex items-center py-3 text-start text-gray-800 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none dark:text-white"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <svg
                  className="shrink-0 size-6"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z"
                    className="fill-black dark:fill-neutral-200"
                    fill="currentColor"
                  />
                  <path
                    d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z"
                    className="fill-black dark:fill-neutral-200"
                    fill="currentColor"
                  />
                </svg>
              </button>
              {/* End Project Button */}
              {/* Dropdown */}
              <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-pro-dnwpd"
              >
                <div className="p-1 space-y-0.5">
                  {/* Item */}
                  <a
                    className="py-2 px-3 block w-full text-start bg-gray-100 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <div className="flex gap-x-2">
                      <div className="self-center">
                        <svg
                          className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </div>
                      <svg
                        className="shrink-0 size-8"
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.7438 0.940745C6.84695 1.30308 2.6841 1.63631 2.48837 1.67533C1.9396 1.77319 1.44038 2.14544 1.20563 2.63537L1 3.06646L1.01982 13.3407L1.04893 23.615L1.36234 24.2517C1.53886 24.6042 2.73365 26.2499 4.0362 27.9439C6.61221 31.2836 6.79802 31.47 7.77726 31.5679C8.06156 31.597 10.1966 31.4991 12.5081 31.3622C14.8295 31.2154 18.5508 30.99 20.7842 30.863C30.3233 30.2839 29.8334 30.3328 30.3815 29.8627C31.0672 29.2947 31.0183 30.2251 31.0474 17.7377C31.0672 7.15003 31.0573 6.45509 30.9006 6.13177C30.7148 5.76943 30.3815 5.51487 26.0329 2.45885C23.1243 0.421704 22.9186 0.313932 21.6155 0.294111C21.0772 0.274911 16.6307 0.568497 11.7438 0.940745ZM22.752 2.28232C23.1633 2.46814 26.1704 4.56412 26.6108 4.9661C26.7284 5.08378 26.7675 5.18164 26.7086 5.24048C26.5717 5.35817 7.96245 6.465 7.42421 6.38634C7.17956 6.34732 6.81722 6.20052 6.61159 6.06302C5.75932 5.48514 3.64413 3.75149 3.64413 3.62452C3.64413 3.29129 3.57538 3.29129 11.8714 2.69421C13.4582 2.58644 16.0633 2.39071 17.6502 2.26312C21.0871 1.98874 22.1159 1.99865 22.752 2.28232ZM28.6677 7.63996C28.8046 7.77685 28.9223 8.04132 28.9613 8.29589C28.9904 8.53125 29.0102 12.9189 28.9904 18.0313C28.9613 26.8067 28.9514 27.3555 28.7848 27.61C28.6869 27.7667 28.4912 27.9333 28.3438 27.9823C27.9331 28.1489 8.43318 29.2557 8.03183 29.138C7.84601 29.0891 7.59083 28.9324 7.45394 28.7955L7.21858 28.541L7.18947 19.0799C7.16965 12.4395 7.18947 9.5012 7.26813 9.23672C7.32697 9.041 7.47376 8.80564 7.60136 8.72759C7.77788 8.60991 8.93364 8.51205 12.9101 8.2773C15.7016 8.1206 20.0206 7.85613 22.4987 7.70933C28.3933 7.34638 28.3741 7.34638 28.6677 7.63996Z"
                          className="fill-black dark:fill-neutral-200"
                          fill="currentColor"
                        />
                        <path
                          d="M23.4277 10.8818C22.3698 10.9506 21.4296 11.0484 21.3218 11.1073C20.9985 11.2739 20.8028 11.5483 20.7638 11.8617C20.7347 12.185 20.8325 12.224 21.8898 12.3516L22.35 12.4104V16.5925C22.35 19.0799 22.311 20.7256 22.2621 20.6767C22.2131 20.6178 20.8226 18.5027 19.167 15.9756C17.512 13.4392 16.1407 11.3525 16.1209 11.3333C16.1011 11.3135 15.024 11.3724 13.7313 11.4609C12.1445 11.5687 11.273 11.6666 11.0965 11.7644C10.8122 11.9112 10.4988 12.4303 10.4988 12.7734C10.4988 12.979 10.871 13.0868 11.6545 13.0868H12.0658V25.1139L11.4 25.3196C10.8809 25.4763 10.7044 25.5741 10.6165 25.7698C10.4598 26.1031 10.4697 26.4066 10.6264 26.4066C10.6852 26.4066 11.792 26.3378 13.0649 26.2598C15.582 26.113 15.8657 26.0442 16.1302 25.5252C16.2088 25.3685 16.277 25.2019 16.277 25.1529C16.277 25.1139 15.9345 24.9962 15.5226 24.8984C15.1014 24.8005 14.6802 24.7027 14.5923 24.6828C14.4257 24.6339 14.4157 24.3304 14.4157 20.1186V15.6033L17.3931 20.2753C20.5173 25.1721 20.9093 25.7308 21.3893 25.9755C21.987 26.2889 23.5051 26.0733 24.2688 25.5741L24.5042 25.4273L24.524 18.7479L24.5531 12.0586L25.0722 11.9608C25.6891 11.8431 25.9734 11.5594 25.9734 11.0695C25.9734 10.7561 25.9536 10.7362 25.66 10.7462C25.4847 10.7542 24.4757 10.813 23.4277 10.8818Z"
                          className="fill-black dark:fill-neutral-200"
                          fill="currentColor"
                        />
                      </svg>
                      <div className="grow">
                        <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                          Notion
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                          notion.so
                        </p>
                      </div>
                      <div className="ms-auto self-center">
                        <svg
                          className="shrink-0 size-4 text-gray-800 dark:text-neutral-200"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </div>
                    </div>
                  </a>
                  {/* End Item */}
                  {/* Item */}
                  <a
                    className="py-2 px-3 block w-full text-start rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    href="#"
                  >
                    <div className="flex gap-x-2">
                      <div className="self-center">
                        <svg
                          className="shrink-0 size-5 text-gray-500 dark:text-neutral-500"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </div>
                      <svg
                        className="shrink-0 size-8"
                        width={33}
                        height={32}
                        viewBox="0 0 33 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.0001 0C7.16461 0 0 7.34466 0 16.405C0 23.6533 4.5845 29.8026 10.9419 31.9718C11.7415 32.1236 12.0351 31.6159 12.0351 31.1826C12.0351 30.7915 12.0202 29.4991 12.0134 28.1283C7.56202 29.1207 6.62276 26.1927 6.62276 26.1927C5.89494 24.2965 4.84626 23.7924 4.84626 23.7924C3.39464 22.7742 4.95568 22.795 4.95568 22.795C6.5624 22.9108 7.40843 24.4856 7.40843 24.4856C8.83545 26.9936 11.1514 26.2685 12.0645 25.8495C12.208 24.789 12.6227 24.0654 13.0803 23.6558C9.5265 23.2408 5.79054 21.8342 5.79054 15.5483C5.79054 13.7573 6.41559 12.2938 7.43917 11.1449C7.27303 10.7317 6.72541 9.0632 7.59415 6.80351C7.59415 6.80351 8.93772 6.36259 11.9953 8.48512C13.2715 8.12152 14.6403 7.93934 16.0001 7.93316C17.3598 7.93934 18.7296 8.12152 20.0083 8.48512C23.0623 6.36259 24.404 6.80351 24.404 6.80351C25.2748 9.0632 24.727 10.7317 24.5608 11.1449C25.5867 12.2938 26.2075 13.7572 26.2075 15.5483C26.2075 21.8491 22.4645 23.2366 18.9017 23.6426C19.4755 24.1518 19.9869 25.1502 19.9869 26.6806C19.9869 28.8756 19.9683 30.6422 19.9683 31.1826C19.9683 31.6192 20.2563 32.1307 21.0674 31.9696C27.4213 29.798 32 23.6509 32 16.405C32 7.34466 24.8364 0 16.0001 0Z"
                          className="fill-black dark:fill-neutral-200"
                          fill="currentColor"
                        />
                        <path
                          d="M5.99251 23.3693C5.95737 23.4508 5.83213 23.4752 5.71832 23.4194C5.60224 23.3658 5.53699 23.2547 5.57464 23.1728C5.60915 23.089 5.73438 23.0655 5.8502 23.1219C5.96653 23.1753 6.03279 23.2875 5.99251 23.3693ZM6.77955 24.0893C6.70326 24.1619 6.55405 24.1282 6.45279 24.0135C6.34813 23.8991 6.32856 23.7463 6.40598 23.6726C6.48466 23.6001 6.62935 23.634 6.73425 23.7485C6.83891 23.8641 6.85924 24.0161 6.77943 24.0894M7.31952 25.0105C7.22139 25.0804 7.06102 25.0149 6.96201 24.869C6.864 24.7232 6.864 24.5482 6.96414 24.4781C7.06353 24.408 7.22139 24.471 7.32178 24.6158C7.41965 24.7641 7.41965 24.9391 7.31939 25.0107M8.23255 26.0775C8.14484 26.1766 7.95811 26.1501 7.82133 26.0147C7.68154 25.8825 7.64252 25.6947 7.73048 25.5955C7.8192 25.4962 8.00705 25.5241 8.14484 25.6583C8.28375 25.7903 8.32604 25.9795 8.23255 26.0775ZM9.41262 26.4378C9.3741 26.5662 9.19415 26.6246 9.01295 26.57C8.832 26.5138 8.71354 26.3633 8.75006 26.2335C8.7877 26.1041 8.9684 26.0433 9.15098 26.1017C9.33168 26.1577 9.45027 26.307 9.41262 26.4378ZM10.7558 26.5905C10.7603 26.7258 10.6066 26.838 10.4164 26.8405C10.225 26.8447 10.0703 26.7352 10.0683 26.6022C10.0683 26.4656 10.2185 26.3544 10.4097 26.3512C10.6 26.3473 10.7558 26.456 10.7558 26.5905ZM12.0752 26.5386C12.098 26.6706 11.9658 26.8063 11.7769 26.8423C11.5912 26.877 11.4193 26.7956 11.3955 26.6647C11.3725 26.5294 11.5072 26.3939 11.6926 26.3588C11.8818 26.3251 12.0511 26.4044 12.0752 26.5386Z"
                          className="fill-black dark:fill-neutral-200"
                          fill="currentColor"
                        />
                      </svg>
                      <div className="grow">
                        <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                          Github
                        </p>
                        <p className="text-xs text-gray-500 dark:text-neutral-500">
                          github.com
                        </p>
                      </div>
                      <div className="ms-auto self-center">
                        <svg
                          className="hidden shrink-0 size-4"
                          xmlns="http://www.w3.org/2000/svg"
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
                      </div>
                    </div>
                  </a>
                  {/* End Item */}
                </div>
                <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
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
                      <path d="M8 12h8" />
                      <path d="M12 8v8" />
                    </svg>
                    Add another project
                  </button>
                </div>
                <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                  <button
                    type="button"
                    className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  >
                    Sign out
                    <span className="ms-auto text-xs text-gray-500 dark:text-neutral-500">
                      preline@site.com
                    </span>
                  </button>
                </div>
              </div>
              {/* End Dropdown */}
            </div>
            {/* End Project Dropdown */}
          </div>
          {/* Account Dropdown */}
          <div className="hs-dropdown relative [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] inline-flex">
            <button
              id="hs-pro-chmsad"
              type="button"
              className="flex justify-center items-center gap-x-3 size-8 text-start disabled:opacity-50 disabled:pointer-events-none focus:outline-none"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Dropdown"
            >
              <img
                className="shrink-0 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Avatar"
              />
              <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-gray-100 bg-green-500 dark:ring-neutral-800" />
            </button>
            {/* Account Dropdown */}
            <div
              className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="hs-pro-chmsad"
            >
              <div className="p-1">
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
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
                    <rect width={20} height={14} x={2} y={5} rx={2} />
                    <line x1={2} x2={22} y1={10} y2={10} />
                  </svg>
                  Billing
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
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
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                    <circle cx={12} cy={12} r={3} />
                  </svg>
                  Settings
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
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
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                  My account
                </a>
              </div>
              <div className="px-4 py-3.5 border-y border-gray-200 dark:border-neutral-800">
                {/* Switch/Toggle */}
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="hs-pro-chmsaddm"
                    className="text-sm text-gray-800 dark:text-neutral-300"
                  >
                    Dark mode
                  </label>
                  <div className="relative inline-block">
                    <input
                      data-hs-theme-switch=""
                      type="checkbox"
                      id="hs-pro-chmsaddm"
                      className="relative w-11 h-6 p-px bg-gray-100 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-neutral-900

              before:inline-block before:size-5 before:bg-white checked:before:bg-white before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-white"
                    />
                  </div>
                </div>
                {/* End Switch/Toggle */}
              </div>
              <div className="p-1">
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Customization
                  <div className="ms-auto">
                    <span className="ms-auto inline-flex items-center gap-1.5 py-px px-1.5 rounded text-[10px] leading-4 font-medium bg-gray-100 text-gray-800 dark:bg-neutral-700 dark:text-neutral-300">
                      New
                    </span>
                  </div>
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Manage team
                </a>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  href="#"
                >
                  Sign out
                </a>
              </div>
              <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                <button
                  type="button"
                  className="flex mt-0.5 gap-x-3 py-2 px-3 w-full rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                  data-hs-overlay="#hs-pro-dasadam"
                >
                  <svg
                    className="shrink-0 size-4 mt-0.5"
                    xmlns="http://www.w3.org/2000/svg"
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
                    <path d="M8 12h8" />
                    <path d="M12 8v8" />
                  </svg>
                  Add team account
                </button>
              </div>
            </div>
            {/* End Account Dropdown */}
          </div>
          {/* End Account Dropdown */}
        </footer>
        {/* End Footer */}
      </div>
      {/* Secondary Content */}
      <div className="sm:w-72 size-full truncate bg-white border-x border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="py-2 px-5 flex justify-between items-center gap-x-2 border-b border-gray-200 dark:border-neutral-700">
            <h1
              id="hs-pro-chat-sidebar-label"
              className="truncate font-semibold text-gray-800 dark:text-neutral-200"
            >
              Inbox
            </h1>
            <div className="flex items-center">
              {/* Select */}
              <div className="relative inline-block">
                <select
                  id="hs-pro-select-revenue"
                  data-hs-select='{
              "placeholder": "Select option...",
              "toggleTag": "<button type=\"button\" aria-expanded=\"false\"></button>",
              "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700",
              "dropdownClasses": "mt-2 z-50 w-32 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-900",
              "optionClasses": "hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-[13px] text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800",
              "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
            }'
                  className="hidden"
                >
                  <option value="">Choose</option>
                  <option selected="">Newest</option>
                  <option>Oldest</option>
                </select>
                <div className="absolute top-1/2 end-2 -translate-y-1/2">
                  <svg
                    className="shrink-0 size-3.5 text-gray-600 dark:text-neutral-500"
                    xmlns="http://www.w3.org/2000/svg"
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
                </div>
              </div>
              {/* End Select */}
              <div className="relative flex items-center gap-x-1 ps-2 ms-2 before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
                {/* Button */}
                <button
                  type="button"
                  className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  data-hs-overlay="#hs-pro-chhcp"
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
                    <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z" />
                  </svg>
                  <span className="sr-only">Compose</span>
                </button>
                {/* End Button */}
              </div>
            </div>
          </div>
          {/* End Header */}
          {/* Search */}
          <div className="border-b border-gray-200 dark:border-neutral-700">
            {/* SearchBox */}
            <div
              className="relative"
              data-hs-combo-box='{
          "groupingType": "default",
          "preventSelection": true,
          "isOpenOnFocus": true,
          "outputEmptyTemplate": "<div class=\"p-5 h-[calc(100dvh-85px)] flex flex-col justify-center items-center text-center\"><svg class=\"w-48 mx-auto mb-4\" width=\"178\" height=\"90\" viewBox=\"0 0 178 90\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"27\" y=\"50.5\" width=\"124\" height=\"39\" rx=\"7.5\" fill=\"white\"/><rect x=\"27\" y=\"50.5\" width=\"124\" height=\"39\" rx=\"7.5\" stroke=\"#F9FAFB\"/><rect x=\"34.5\" y=\"58\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#F9FAFB\"/><rect x=\"66.5\" y=\"61\" width=\"60\" height=\"6\" rx=\"3\" fill=\"#F9FAFB\"/><rect x=\"66.5\" y=\"73\" width=\"77\" height=\"6\" rx=\"3\" fill=\"#F9FAFB\"/><rect x=\"19.5\" y=\"28.5\" width=\"139\" height=\"39\" rx=\"7.5\" fill=\"white\"/><rect x=\"19.5\" y=\"28.5\" width=\"139\" height=\"39\" rx=\"7.5\" stroke=\"#F3F4F6\"/><rect x=\"27\" y=\"36\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#F3F4F6\"/><rect x=\"59\" y=\"39\" width=\"60\" height=\"6\" rx=\"3\" fill=\"#F3F4F6\"/><rect x=\"59\" y=\"51\" width=\"92\" height=\"6\" rx=\"3\" fill=\"#F3F4F6\"/><g filter=\"url(#@@id)\"><rect x=\"12\" y=\"6\" width=\"154\" height=\"40\" rx=\"8\" fill=\"white\" shape-rendering=\"crispEdges\"/><rect x=\"12.5\" y=\"6.5\" width=\"153\" height=\"39\" rx=\"7.5\" stroke=\"#F3F4F6\" shape-rendering=\"crispEdges\"/><rect x=\"20\" y=\"14\" width=\"24\" height=\"24\" rx=\"12\" fill=\"#E5E7EB\"/><rect x=\"52\" y=\"17\" width=\"60\" height=\"6\" rx=\"3\" fill=\"#E5E7EB\"/><rect x=\"52\" y=\"29\" width=\"106\" height=\"6\" rx=\"3\" fill=\"#E5E7EB\"/></g><defs><filter id=\"@@id\" x=\"0\" y=\"0\" width=\"178\" height=\"64\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/><feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/><feOffset dy=\"6\"/><feGaussianBlur stdDeviation=\"6\"/><feComposite in2=\"hardAlpha\" operator=\"out\"/><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0\"/><feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1187_14810\"/><feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1187_14810\" result=\"shape\"/></filter></defs></svg><div class=\"max-w-sm mx-auto\"><p class=\"mt-2 text-sm text-gray-600 dark:text-neutral-400\">No search results</p></div></div>",
          "preventAutoPosition": true,
          "groupingTitleTemplate": "<div class=\"block text-xs text-gray-500 m-3 mb-1 dark:text-neutral-500 dark:border-neutral-700\"></div>"
        }'
            >
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                  <svg
                    className="shrink-0 size-4 text-gray-400 dark:text-white/60"
                    xmlns="http://www.w3.org/2000/svg"
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
                  className="py-1.5 px-10 block w-full bg-white border-0 rounded-0 md:text-[13px] placeholder:text-gray-500 focus:outline-none focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder:text-neutral-400"
                  role="combobox"
                  aria-expanded="false"
                  placeholder="Search"
                  data-hs-combo-box-input=""
                />
                <div
                  className="hidden hs-combo-box-active:flex absolute inset-y-0 end-0 items-center z-20 pe-4"
                  data-hs-combo-box-input=""
                >
                  <button
                    type="button"
                    className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500"
                    aria-label="Close"
                    data-hs-combo-box-close=""
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
              {/* SearchBox Dropdown */}
              <div
                className="absolute top-full z-50 w-full bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 hidden"
                data-hs-combo-box-output=""
              >
                <div className="pb-6 h-[calc(100dvh-85px)] overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                  {/* Content */}
                  <div data-hs-combo-box-output-items-wrapper="">
                    <div className="pt-1.5 pb-4">
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "quick-action", "title": "Quick Action"}}'
                        tabIndex={0}
                      >
                        {/* Item */}
                        <a
                          className="py-2 px-3 group flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4 text-blue-600 dark:text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
                            <circle cx={12} cy={13} r={3} />
                          </svg>
                          <span
                            className="font-medium text-[13px] text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                            data-hs-combo-box-search-text="Photos"
                            data-hs-combo-box-value=""
                          >
                            Photos
                          </span>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 group-hover:text-blue-600 dark:text-neutral-500 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Item */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "quick-action", "title": "Quick Action"}}'
                        tabIndex={1}
                      >
                        {/* Item */}
                        <a
                          className="py-2 px-3 group flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4 text-blue-600 dark:text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                          </svg>
                          <span
                            className="font-medium text-[13px] text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                            data-hs-combo-box-search-text="Links"
                            data-hs-combo-box-value=""
                          >
                            Links
                          </span>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 group-hover:text-blue-600 dark:text-neutral-500 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Item */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "quick-action", "title": "Quick Action"}}'
                        tabIndex={2}
                      >
                        {/* Item */}
                        <a
                          className="py-2 px-3 group flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <svg
                            className="shrink-0 size-4 text-blue-600 dark:text-blue-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                            <path d="M10 9H8" />
                            <path d="M16 13H8" />
                            <path d="M16 17H8" />
                          </svg>
                          <span
                            className="font-medium text-[13px] text-gray-800 group-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                            data-hs-combo-box-search-text="Documents"
                            data-hs-combo-box-value=""
                          >
                            Documents
                          </span>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 group-hover:text-blue-600 dark:text-neutral-500 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Item */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={8}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <img
                              className="shrink-0 size-8 rounded-full"
                              src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Amanda Harvey"
                              data-hs-combo-box-value=""
                            >
                              Amanda Harvey
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={9}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <img
                              className="shrink-0 size-8 rounded-full"
                              src="https://images.unsplash.com/photo-1570654639102-bdd95efeca7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Anna Richard"
                              data-hs-combo-box-value=""
                            >
                              Anna Richard
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={10}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <span className="flex shrink-0 justify-center items-center size-8 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                              A
                            </span>
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Alex Brown"
                              data-hs-combo-box-value=""
                            >
                              Alex Brown
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={11}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <span className="flex shrink-0 justify-center items-center size-8 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                              B
                            </span>
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Bob Dean"
                              data-hs-combo-box-value=""
                            >
                              Bob Dean
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={12}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <img
                              className="shrink-0 size-8 rounded-full"
                              src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Chun Wa"
                              data-hs-combo-box-value=""
                            >
                              Chun Wa
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={13}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <img
                              className="shrink-0 size-8 rounded-full"
                              src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Costa Quinn"
                              data-hs-combo-box-value=""
                            >
                              Costa Quinn
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={14}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <img
                              className="shrink-0 size-8 rounded-full"
                              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="David Harrison"
                              data-hs-combo-box-value=""
                            >
                              David Harrison
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={15}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <img
                              className="shrink-0 size-8 rounded-full"
                              src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Ella Lauda"
                              data-hs-combo-box-value=""
                            >
                              Ella Lauda
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={16}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <img
                              className="shrink-0 size-8 rounded-full"
                              src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Elizabeth Cru"
                              data-hs-combo-box-value=""
                            >
                              Elizabeth Cru
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={17}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <img
                              className="shrink-0 size-8 rounded-full"
                              src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                              alt="Avatar"
                            />
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Lewis Clarke"
                              data-hs-combo-box-value=""
                            >
                              Lewis Clarke
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={18}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <span className="flex shrink-0 justify-center items-center size-8 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                              M
                            </span>
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Mark Colbert"
                              data-hs-combo-box-value=""
                            >
                              Mark Colbert
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={19}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <span className="flex shrink-0 justify-center items-center size-8 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                              O
                            </span>
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Ols Schols"
                              data-hs-combo-box-value=""
                            >
                              Ols Schols
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                      <div
                        data-hs-combo-box-output-item='{"group": {"name": "contacts", "title": "Contacts"}}'
                        tabIndex={20}
                      >
                        {/* Avatar */}
                        <a
                          className="group py-2 px-3 flex items-center gap-x-3 focus:outline-none"
                          href="#"
                        >
                          <div className="shrink-0">
                            <span className="flex shrink-0 justify-center items-center size-8 bg-white border border-gray-200 text-gray-700 text-xs font-medium uppercase rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                              R
                            </span>
                          </div>
                          <div className="grow truncate">
                            <p
                              className="font-medium text-sm leading-4 text-gray-800 group-hover:text-blue-600 group-focus:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-500 dark:group-focus:text-blue-500"
                              data-hs-combo-box-search-text="Rachel Doe"
                              data-hs-combo-box-value=""
                            >
                              Rachel Doe
                            </p>
                          </div>
                          <div className="ms-auto">
                            <svg
                              className="shrink-0 size-3.5 text-gray-500 opacity-0 group-hover:opacity-100 group-focus:opacity-100 dark:text-neutral-500"
                              xmlns="http://www.w3.org/2000/svg"
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
                          </div>
                        </a>
                        {/* End Avatar */}
                      </div>
                    </div>
                  </div>
                  {/* End Content */}
                </div>
              </div>
              {/* End SearchBox Dropdown */}
            </div>
            {/* End Searchbox */}
          </div>
          {/* End Search */}
          {/* Tabs */}
          <div className="py-1.5 border-b border-gray-200 dark:border-neutral-700">
            <div className="-mb-2.5 px-3 overflow-x-auto">
              <div className="overflow-x-auto [&::-webkit-scrollbar]:h-0">
                {/* Nav Tab */}
                <nav
                  className="flex gap-x-1"
                  aria-label="Tabs"
                  role="tablist"
                  aria-orientation="horizontal"
                >
                  <button
                    type="button"
                    className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-2 mb-3 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 font-medium text-xs rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 active "
                    id="hs-pro-tabs-chsn-item-all"
                    aria-selected="true"
                    data-hs-tab="#hs-pro-tabs-chsn-all"
                    aria-controls="hs-pro-tabs-chsn-all"
                    role="tab"
                  >
                    All
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-2 mb-3 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-xs rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    id="hs-pro-tabs-chsn-item-mentions"
                    aria-selected="false"
                    data-hs-tab="#hs-pro-tabs-chsn-mentions"
                    aria-controls="hs-pro-tabs-chsn-mentions"
                    role="tab"
                  >
                    Mentions
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-2 mb-3 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-xs rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    id="hs-pro-tabs-chsn-item-spammed"
                    aria-selected="false"
                    data-hs-tab="#hs-pro-tabs-chsn-spammed"
                    aria-controls="hs-pro-tabs-chsn-spammed"
                    role="tab"
                  >
                    Spammed
                  </button>
                  <button
                    type="button"
                    className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-2 mb-3 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-xs rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  "
                    id="hs-pro-tabs-chsn-item-blocked"
                    aria-selected="false"
                    data-hs-tab="#hs-pro-tabs-chsn-blocked"
                    aria-controls="hs-pro-tabs-chsn-blocked"
                    role="tab"
                  >
                    Blocked
                  </button>
                </nav>
                {/* End Nav Tab */}
              </div>
            </div>
          </div>
          {/* End Tabs */}
          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            {/* Tab Content */}
            <div
              id="hs-pro-tabs-chsn-all"
              className="h-full"
              role="tabpanel"
              aria-labelledby="hs-pro-tabs-chsn-item-all"
            >
              <div aria-label="Tabs" role="tablist" aria-orientation="vertical">
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-1"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-1"
                  aria-controls="hs-pro-tabs-chct-1"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <img
                          className="shrink-0 size-8 rounded-full"
                          src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                        <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-800" />
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Costa Quinn
                        </p>
                        <div>
                          <svg
                            className="inline-block shrink-0 size-3.5 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            1m
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <p className="truncate text-gray-500 dark:text-neutral-500 text-xs">
                          Yes, you can!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-2"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-2"
                  aria-controls="hs-pro-tabs-chct-2"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-indigo-500 text-white rounded-full">
                          R
                        </span>
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Rachel Doe
                        </p>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            14m
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <div className="flex items-center gap-x-1.5">
                          <img
                            className="shrink-0 size-5 rounded object-cover"
                            src="../assets/img/mockups/img10.jpg"
                            alt="Attachment Image"
                          />
                          <div className="grow truncate">
                            <p className="truncate font-medium text-gray-800 dark:text-neutral-200 text-xs">
                              When using open method, const select = new
                              HSSelect(document.querySelector('#select'));
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="hs-tab-active:hidden absolute bottom-3.5 end-2.5">
                        <span className="relative min-w-[18px] min-h-[18px] inline-flex justify-center items-center text-[10px] bg-blue-500 text-white rounded-full px-1">
                          3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-3"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-3"
                  aria-controls="hs-pro-tabs-chct-3"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <img
                          className="shrink-0 size-8 rounded-full"
                          src="https://images.unsplash.com/photo-1679412330254-90cb240038c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Lewis Clarke
                        </p>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            15m
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <p className="truncate text-gray-500 dark:text-neutral-500 text-xs">
                          How's these all free? 🤯
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-4"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-4"
                  aria-controls="hs-pro-tabs-chct-4"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <span className="flex shrink-0 justify-center items-center size-6 text-white text-xs font-medium uppercase bg-orange-500 rounded-full">
                          T
                        </span>
                        <img
                          className="absolute top-3 start-3 shrink-0 size-5 rounded-full ring-2 ring-white dark:ring-neutral-800"
                          src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Technical issues
                        </p>
                        <div>
                          <svg
                            className="inline-block shrink-0 size-3.5 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            55m
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <p className="truncate text-gray-500 dark:text-neutral-500 text-xs">
                          Great! 👍️
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-5"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-5"
                  aria-controls="hs-pro-tabs-chct-5"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-pink-500 text-white rounded-full">
                          R
                        </span>
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Bob Dean
                        </p>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            41m
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <div className="flex items-center gap-x-1.5">
                          <svg
                            className="shrink-0 size-3 text-gray-500 dark:text-neutral-500"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <div className="grow truncate">
                            <p className="truncate font-medium text-gray-800 dark:text-neutral-200 text-xs">
                              Hey Preline team, I got an error while using the
                              headless UI component with preline. I'm not sure
                              how to fix it. Could you kindly assist me in
                              identifying what I might be missing? Your help
                              would be greatly appreciate
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="hs-tab-active:hidden absolute bottom-3.5 end-2.5">
                        <span className="relative min-w-[18px] min-h-[18px] inline-flex justify-center items-center text-[10px] bg-blue-500 text-white rounded-full px-1">
                          1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-6"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-6"
                  aria-controls="hs-pro-tabs-chct-6"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-teal-500 text-white rounded-full">
                          M
                        </span>
                        <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-white bg-green-500 dark:ring-neutral-800" />
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Mark Colbert
                        </p>
                        <div>
                          <svg
                            className="inline-block shrink-0 size-3.5 text-blue-600"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            50m
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <p className="truncate text-gray-500 dark:text-neutral-500 text-xs">
                          Voice message
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-7"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-7"
                  aria-controls="hs-pro-tabs-chct-7"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <img
                          className="shrink-0 size-8 rounded-full"
                          src="https://images.unsplash.com/photo-1659482634023-2c4fda99ac0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Ella Lauda
                        </p>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            37m
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <div className="flex items-center gap-x-1.5">
                          <svg
                            className="shrink-0 size-3 text-gray-500 dark:text-neutral-500"
                            xmlns="http://www.w3.org/2000/svg"
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
                          <div className="grow truncate">
                            <p className="truncate font-medium text-gray-800 dark:text-neutral-200 text-xs">
                              site-source.zip
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="hs-tab-active:hidden absolute bottom-3.5 end-2.5">
                        <span className="relative min-w-[18px] min-h-[18px] inline-flex justify-center items-center text-[10px] bg-blue-500 text-white rounded-full px-1">
                          2
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-8"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-8"
                  aria-controls="hs-pro-tabs-chct-8"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <span className="flex shrink-0 justify-center items-center size-6 text-white text-xs font-medium uppercase bg-purple-500 rounded-full">
                          B
                        </span>
                        <img
                          className="absolute top-3 start-3 shrink-0 size-5 rounded-full ring-2 ring-white dark:ring-neutral-800"
                          src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Bugs/Improvements
                        </p>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            1h
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <p className="truncate text-gray-500 dark:text-neutral-500 text-xs">
                          I found a bug: Combobox selection of ahref items using
                          keyboard #353
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-9"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-9"
                  aria-controls="hs-pro-tabs-chct-9"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-sky-500 text-white rounded-full">
                          A
                        </span>
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Alex Brown
                        </p>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            2h
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <p className="truncate text-gray-500 dark:text-neutral-500 text-xs">
                          I love Preline Pro! What can we expect in the next
                          update?
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-10"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-10"
                  aria-controls="hs-pro-tabs-chct-10"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <img
                          className="shrink-0 size-8 rounded-full"
                          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                          alt="Avatar"
                        />
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          David Harrison
                        </p>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500">
                            2h
                          </span>
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <p className="truncate font-medium text-gray-800 dark:text-neutral-200 text-xs">
                          Thanks!
                        </p>
                      </div>
                      <div className="hs-tab-active:hidden absolute bottom-3.5 end-2.5">
                        <span className="relative min-w-[18px] min-h-[18px] inline-flex justify-center items-center text-[10px] bg-blue-500 text-white rounded-full px-1">
                          3
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                {/* Message */}
                <div
                  className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700  "
                  id="hs-pro-tabs-chct-item-11"
                  aria-selected="false"
                  data-hs-tab="#hs-pro-tabs-chct-11"
                  aria-controls="hs-pro-tabs-chct-11"
                  role="tab"
                >
                  <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                    <div className="shrink-0">
                      <div className="relative size-8">
                        <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-orange-500 text-white rounded-full">
                          O
                        </span>
                      </div>
                    </div>
                    <div className="grow truncate">
                      <div className="flex justify-between items-center gap-x-1">
                        <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                          Ols Schols
                        </p>
                        <div>
                          <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500" />
                        </div>
                      </div>
                      <div className="truncate me-5">
                        <p className="truncate font-medium text-gray-800 dark:text-neutral-200 text-xs" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Message */}
                <div className="hidden">
                  {/* Message */}
                  <div
                    className="hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative cursor-pointer bg-white hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 active "
                    id="hs-pro-tabs-chct-item-12"
                    aria-selected="true"
                    data-hs-tab="#hs-pro-tabs-chct-12"
                    aria-controls="hs-pro-tabs-chct-12"
                    role="tab"
                  >
                    <div className="py-4 px-5 flex items-center gap-x-3 border-b border-b-gray-100 dark:border-neutral-700">
                      <div className="shrink-0">
                        <div className="relative size-8">
                          <span className="flex shrink-0 justify-center items-center size-8 text-xs font-medium uppercase bg-orange-500 text-white rounded-full">
                            O
                          </span>
                        </div>
                      </div>
                      <div className="grow truncate">
                        <div className="flex justify-between items-center gap-x-1">
                          <p className="truncate font-semibold text-[13px] text-gray-800 dark:text-neutral-200">
                            Onboarding
                          </p>
                          <div>
                            <span className="text-[10px] text-gray-400 uppercase dark:text-neutral-500" />
                          </div>
                        </div>
                        <div className="truncate me-5">
                          <p className="truncate font-medium text-gray-800 dark:text-neutral-200 text-xs" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Message */}
                </div>
              </div>
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              id="hs-pro-tabs-chsn-mentions"
              className="hidden h-full"
              role="tabpanel"
              aria-labelledby="hs-pro-tabs-chsn-item-mentions"
            >
              {/* Empty State */}
              <div className="p-5 h-full flex flex-col justify-center items-center text-center">
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
                    rx={12}
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
                    rx={12}
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
                      rx={12}
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
                <div className="max-w-sm mx-auto text-wrap">
                  <p className="mt-2 font-medium text-gray-800 dark:text-neutral-200">
                    No mentions message
                  </p>
                  <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                    Only mentions messages appear here
                  </p>
                </div>
              </div>
              {/* Empty State */}
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              id="hs-pro-tabs-chsn-spammed"
              className="hidden h-full"
              role="tabpanel"
              aria-labelledby="hs-pro-tabs-chsn-item-spammed"
            >
              {/* Empty State */}
              <div className="p-5 h-full flex flex-col justify-center items-center text-center">
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
                    rx={12}
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
                    rx={12}
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
                      rx={12}
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
                <div className="max-w-sm mx-auto text-wrap">
                  <p className="mt-2 font-medium text-gray-800 dark:text-neutral-200">
                    No spammed message
                  </p>
                  <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                    Only spammed messages appear here
                  </p>
                </div>
              </div>
              {/* Empty State */}
            </div>
            {/* End Tab Content */}
            {/* Tab Content */}
            <div
              id="hs-pro-tabs-chsn-blocked"
              className="hidden h-full"
              role="tabpanel"
              aria-labelledby="hs-pro-tabs-chsn-item-blocked"
            >
              {/* Empty State */}
              <div className="p-5 h-full flex flex-col justify-center items-center text-center">
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
                    rx={12}
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
                    rx={12}
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
                      rx={12}
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
                <div className="max-w-sm mx-auto text-wrap">
                  <p className="mt-2 font-medium text-gray-800 dark:text-neutral-200">
                    No mentioned message
                  </p>
                  <p className="mb-5 text-sm text-gray-500 dark:text-neutral-500">
                    Only mentioned messages appear here
                  </p>
                </div>
              </div>
              {/* Empty State */}
            </div>
            {/* End Tab Content */}
          </div>
        </div>
      </div>
      {/* End Secondary Content */}
    </div>
  </div>
</aside>
