import React from "react";
import { useNavigate, useSearchParams } from "@remix-run/react";

interface TicketsSidebarProps {
  // Add any props that might be needed in the future
}

export const TicketsSidebar: React.FC<TicketsSidebarProps> = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get("filter") || "all";

  const handleFilterClick = (filter: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("./" + filter, { replace: true });
  };

  return (
    <div className="sm:w-72 size-full truncate bg-white border-x border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <div className="h-full flex flex-col">
        {/* Header */}
        <div className="p-2 ps-5 flex justify-between items-center gap-x-2">
          <span id="hs-pro-chat-sidebar-label" className="block truncate font-semibold text-gray-800 dark:text-neutral-200">
            Tickets
          </span>

          <div className="flex items-center">
            {/* Button */}
            <button type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
              <span className="sr-only">Search</span>
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
            </button>
            {/* End Button */}

            {/* Mobile Toggle Button */}
            <div className="lg:hidden relative flex items-center gap-x-1 ps-2 ms-2 before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
              <button type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" data-hs-overlay="#hs-pro-chat-sidebar">
                <span className="sr-only">Close sidebar</span>
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"></path>
                  <path d="m6 6 12 12"></path>
                </svg>
              </button>
            </div>
            {/* End Mobile Toggle Button */}
          </div>
        </div>
        {/* End Header */}

        {/* Search Input */}
        <div className="p-2 pb-0">
          <div className="relative">
            <input type="text" className="py-2 px-2.5 block w-full bg-gray-100 border-transparent rounded-lg sm:text-sm text-base hover:border-gray-300 hover:bg-white placeholder:text-gray-800 focus:bg-white focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700/50 dark:hover:bg-neutral-800 dark:hover:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:focus:ring-neutral-600 dark:focus:border-neutral-600" placeholder="Search" />
          </div>
        </div>
        {/* End Search Input */}

        <div className="h-full flex flex-col overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700/50 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          {/* Navigation List */}
          <div className="p-2 flex flex-col gap-y-0.5">
            <a 
              className={`flex items-center gap-x-2.5 py-1.5 px-2 text-[13px] text-gray-800 rounded-lg ${currentFilter === "all" ? "bg-gray-100 dark:bg-neutral-700/50" : "hover:bg-gray-100 dark:hover:bg-neutral-700/50"} focus:outline-hidden dark:text-neutral-300`} 
              href="?filter=all"
              onClick={handleFilterClick("all")}
            >
              <svg className="size-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path>
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path>
                <path d="M12 3v6"></path>
              </svg>
              All
            </a>

            <a 
              className={`flex items-center gap-x-2.5 py-1.5 px-2 text-[13px] text-gray-800 rounded-lg ${currentFilter === "active" ? "bg-gray-100 dark:bg-neutral-700/50" : "hover:bg-gray-100 dark:hover:bg-neutral-700/50"} focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:focus:bg-neutral-700/50`}
              href="?filter=active"
              onClick={handleFilterClick("active")}
            >
              <svg className="size-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 22h14"></path>
                <path d="M5 2h14"></path>
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"></path>
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"></path>
              </svg>
              Active
            </a>

            <a 
              className={`flex items-center gap-x-2.5 py-1.5 px-2 text-[13px] text-gray-800 rounded-lg ${currentFilter === "snoozed" ? "bg-gray-100 dark:bg-neutral-700/50" : "hover:bg-gray-100 dark:hover:bg-neutral-700/50"} focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:focus:bg-neutral-700/50`}
              href="?filter=snoozed"
              onClick={handleFilterClick("snoozed")}
            >
              <svg className="size-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M3 9h18"></path>
                <path d="M9 21V9"></path>
              </svg>
              Snoozed
            </a>

            <a 
              className={`flex items-center gap-x-2.5 py-1.5 px-2 font-semibold text-[13px] text-gray-800 rounded-lg ${currentFilter === "closed" ? "bg-gray-100 dark:bg-neutral-700/50" : "hover:bg-gray-100 dark:hover:bg-neutral-700/50"} focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:focus:bg-neutral-700/50`}
              href="?filter=closed"
              onClick={handleFilterClick("closed")}
            >
              <svg className="size-4 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76z"></path>
                <line x1="16" x2="2" y1="8" y2="22"></line>
                <line x1="17.5" x2="9" y1="15" y2="15"></line>
              </svg>
              Closed
            </a>
          </div>
          {/* End Navigation List */}

          {/* Teams Section */}
          <div className="hs-accordion p-2 group active">
            <div className="flex items-center gap-x-2 ps-1.5">
              <button type="button" className="hs-accordion-toggle group-[.active]:rotate-90 shrink-0 size-5 flex justify-center items-center rounded-full hover:bg-gray-100 text-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400" aria-expanded="true">
                <svg className="size-3 transition" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
              <span className="text-xs font-medium text-gray-500 dark:text-neutral-500">Teams</span>
            </div>

            <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
              <div className="pt-2 ps-7">
                <div className="space-y-0.5">
                  <a className="flex items-center gap-x-2.5 py-1.5 px-2 text-[13px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700/50 dark:text-neutral-200 dark:focus:bg-neutral-700/50" href="#">
                    <span className="size-2.5 bg-blue-500 rounded-full"></span>
                    Support
                  </a>
                  <a className="flex items-center gap-x-2.5 py-1.5 px-2 text-[13px] text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700/50 dark:text-neutral-200 dark:focus:bg-neutral-700/50" href="#">
                    <span className="size-2.5 bg-green-500 rounded-full"></span>
                    Sales
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Teams Section */}
        </div>
      </div>
    </div>
  );
};
