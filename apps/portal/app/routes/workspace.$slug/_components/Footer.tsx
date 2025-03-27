import React from 'react';

interface FooterProps {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="lg:ps-[260px] h-[40px] sm:h-[64px]">
      <div className="p-2 sm:p-5 flex justify-between items-center">
        <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-500">
          © 2024 AIYA.AI
        </p>
        {/* List */}
        <ul>
          <li className="inline-block relative pe-5 text-xs sm:text-sm text-gray-500 align-middle last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-px before:h-3.5 before:bg-gray-400 before:rotate-[18deg] dark:text-neutral-500 dark:before:bg-neutral-600">
            <a
              className="hover:text-blue-600 focus:outline-hidden focus:underline dark:hover:text-neutral-200"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li className="inline-block relative pe-5 text-xs sm:text-sm text-gray-500 align-middle last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-px before:h-3.5 before:bg-gray-400 before:rotate-[18deg] dark:text-neutral-500 dark:before:bg-neutral-600">
            <a
              className="hover:text-blue-600 focus:outline-hidden focus:underline dark:hover:text-neutral-200"
              href="#"
            >
              License
            </a>
          </li>
          <li className="inline-block relative pe-5 text-xs sm:text-sm text-gray-500 align-middle sm:leading-3 last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-2 before:-translate-y-1/2 before:w-px before:h-3.5 before:bg-gray-400 before:rotate-[18deg] dark:text-neutral-500 dark:before:bg-neutral-600">
            <button
              type="button"
              className="hover:text-blue-600 focus:outline-hidden focus:text-gray-800 dark:hover:text-neutral-200 dark:focus:text-neutral-400"
              data-hs-overlay="#hs-pro-dfkm"
            >
              <svg
                className="shrink-0 size-3.5 sm:size-4"
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
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
            </button>
          </li>
        </ul>
        {/* End List */}
      </div>
    </div>

  );
};

export default Footer;