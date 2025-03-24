import React from "react";

export const ChatTabs = () => (
  <div className="py-1.5 border-b border-gray-200 dark:border-neutral-700">
    <div className="-mb-2.5 px-3 overflow-x-auto">
      <div className="overflow-x-auto [&::-webkit-scrollbar]:h-0">
        {/* Nav Tab */}
        <nav className="flex gap-1" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
          <button 
            type="button" 
            className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-2 mb-3 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 font-medium text-xs rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden active" 
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
            className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-2 mb-3 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 font-medium text-xs rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden" 
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
            className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-2 mb-3 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 font-medium text-xs rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden" 
            id="hs-pro-tabs-chsn-item-spammed" 
            aria-selected="false" 
            data-hs-tab="#hs-pro-tabs-chsn-spammed" 
            aria-controls="hs-pro-tabs-chsn-spammed" 
            role="tab"
          >
            Spam
          </button>
          <button 
            type="button" 
            className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2.5 py-2 mb-3 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 font-medium text-xs rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2.5 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden" 
            id="hs-pro-tabs-chsn-item-blocked" 
            aria-selected="false" 
            data-hs-tab="#hs-pro-tabs-chsn-blocked" 
            aria-controls="hs-pro-tabs-chsn-blocked" 
            role="tab"
          >
            Blocked
          </button>
        </nav>
      </div>
    </div>
  </div>
);
