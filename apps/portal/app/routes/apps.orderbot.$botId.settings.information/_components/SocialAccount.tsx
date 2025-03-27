import React from 'react';

interface SocialAccountProps {

}

const SocialAccount: React.FC<SocialAccountProps> = () => {
  return (
    <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
      <h2 className="font-semibold text-gray-800 dark:text-neutral-200">
        Social accounts
      </h2>
      {/* Grid */}
      <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
        <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
          <label
            htmlFor="hs-pro-dapsaurl"
            className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500"
          >
            URL
          </label>
        </div>
        {/* End Col */}
        <div className="sm:col-span-8 xl:col-span-4">
          <div className="space-y-2">
            <div id="hs-wrapper-for-copy" className="space-y-2">
              <input
                id="hs-pro-dapsaurl"
                type="text"
                className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                placeholder="Link to social profile"
              />
              <input
                type="text"
                className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                placeholder="Link to social profile"
              />
              <input
                id="hs-content-for-copy"
                type="text"
                className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-neutral-300 dark:placeholder:text-white/60 dark:focus:ring-neutral-600"
                placeholder="Link to social profile"
              />
            </div>
            {/* Add Link */}
            <p className="mt-3">
              <button
                type="button"
                data-hs-copy-markup='{
        "targetSelector": "#hs-content-for-copy",
        "wrapperSelector": "#hs-wrapper-for-copy",
        "limit": 4
      }'
                className="py-1.5 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-full border border-dashed border-gray-200 bg-white text-gray-800 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              >
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
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
                Add link
              </button>
            </p>
            {/* End Add Link */}
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default SocialAccount;