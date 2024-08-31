import React from 'react';

const CoverPhoto: React.FC = () => {
  return (
    <div className="py-6 sm:py-8 space-y-5 border-t border-gray-200 first:border-t-0 dark:border-neutral-700">
      {/* Grid */}
      <div className="grid sm:grid-cols-12 gap-y-1.5 sm:gap-y-0 sm:gap-x-5">
        <div className="sm:col-span-4 xl:col-span-3 2xl:col-span-2">
          <label className="sm:mt-2.5 inline-block text-sm text-gray-500 dark:text-neutral-500">
            Cover photo
          </label>
        </div>
        {/* End Col */}
        <div className="sm:col-span-8 xl:col-span-4">
          {/* Drag 'n Drop */}
          <div className="mt-2 p-12 flex justify-center bg-white border border-dashed border-gray-300 rounded-xl dark:bg-neutral-800 dark:border-neutral-600">
            <div className="text-center">
              <svg
                className="w-16 text-gray-400 mx-auto dark:text-neutral-400"
                width={70}
                height={46}
                viewBox="0 0 70 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.05172 9.36853L17.2131 7.5083V41.3608L12.3018 42.3947C9.01306 43.0871 5.79705 40.9434 5.17081 37.6414L1.14319 16.4049C0.515988 13.0978 2.73148 9.92191 6.05172 9.36853Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"
                />
                <path
                  d="M63.9483 9.36853L52.7869 7.5083V41.3608L57.6982 42.3947C60.9869 43.0871 64.203 40.9434 64.8292 37.6414L68.8568 16.4049C69.484 13.0978 67.2685 9.92191 63.9483 9.36853Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"
                />
                <rect
                  x="17.0656"
                  y="1.62305"
                  width="35.8689"
                  height="42.7541"
                  rx={5}
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="fill-white stroke-gray-400 dark:fill-neutral-800 dark:stroke-neutral-500"
                />
                <path
                  d="M47.9344 44.3772H22.0655C19.3041 44.3772 17.0656 42.1386 17.0656 39.3772L17.0656 35.9161L29.4724 22.7682L38.9825 33.7121C39.7832 34.6335 41.2154 34.629 42.0102 33.7025L47.2456 27.5996L52.9344 33.7209V39.3772C52.9344 42.1386 50.6958 44.3772 47.9344 44.3772Z"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="stroke-gray-400 dark:stroke-neutral-500"
                />
                <circle
                  cx="39.5902"
                  cy="14.9672"
                  r="4.16393"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="stroke-gray-400 dark:stroke-neutral-500"
                />
              </svg>
              <div className="mt-4 flex flex-wrap justify-center text-sm leading-6 text-gray-600">
                <span className="pe-1 font-medium text-gray-800 dark:text-neutral-200">
                  Drop your file here or
                </span>
                <label
                  htmlFor="hs-pro-dapcp"
                  className="relative cursor-pointer bg-white font-semibold text-blue-600 hover:text-blue-700 rounded-lg decoration-2 hover:underline focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 dark:bg-neutral-800 dark:text-blue-500 dark:hover:text-blue-600"
                >
                  <span>browse</span>
                  <input
                    id="hs-pro-dapcp"
                    type="file"
                    className="sr-only"
                    name="hs-pro-dapcp"
                  />
                </label>
              </div>
              <p className="mt-1 text-xs text-gray-400 dark:text-neutral-400">
                Pick a photo up to 2MB.
              </p>
            </div>
          </div>
          {/* End Drag 'n Drop */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default CoverPhoto;