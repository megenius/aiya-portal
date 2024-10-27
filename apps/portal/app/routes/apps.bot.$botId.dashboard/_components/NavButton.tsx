import { cn } from '@repo/ui/utils';
import React from 'react';
import { NumericFormat } from 'react-number-format';


interface NavButtonProps {
  label: string;
  value: number;
  active?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

const NavButton: React.FC<NavButtonProps> = ({ label, value, icon, active, onClick }) => {
  return (
    <>
      <button
        type="button"
        className={
          cn("hs-tab-active:border-t-indigo-600 relative flex-1 first:border-s-0 border-s border-t-[3px] md:border-t-4 border-t-transparent hover:border-t-gray-300 focus:outline-none focus:border-t-gray-300 p-3.5 xl:px-6 text-start focus:z-10 dark:hs-tab-active:border-t-indigo-500 dark:border-t-transparent dark:border-neutral-700 dark:hover:border-t-neutral-600 dark:focus:border-t-neutral-600",
            { "active": active }
          )
        }
        id="bar-with-underline-item-1"
        aria-selected="true"
        data-hs-tab="#bar-with-underline-1"
        aria-controls="bar-with-underline-1"
        role="tab"
        onClick={() => onClick && onClick()}
      >
        <span className="flex gap-x-4">
          <span className="shrink-0 size-6">
            {icon}
          </span>
          <span className="grow text-center md:text-start">
            <span className="block text-xs md:text-sm text-gray-500 dark:text-neutral-500">
              {label}
            </span>
            <span className="hidden xl:mt-1 md:flex md:justify-between md:items-center md:gap-x-2">
              <span className="block text-lg lg:text-xl xl:text-2xl text-gray-800 dark:text-neutral-200">
                <NumericFormat
                  value={value}
                  displayType={'text'}
                  thousandSeparator={true}
                  renderText={(value) => <span className="block text-lg lg:text-xl xl:text-2xl text-gray-800 dark:text-neutral-200">{value}</span>}
                />
              </span>
              {/* <span className="inline-flex items-center gap-x-1 text-xs lg:text-sm text-gray-600 dark:text-neutral-400">
                <svg
                  className="shrink-0 size-4 text-teal-500 dark:text-teal-400"
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
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
                1.2%
              </span> */}
            </span>
          </span>
        </span>
      </button>
    </>
  );
};

export default NavButton;