import React from 'react';

interface AddButtonsProps {
  onFacebookClick?: () => void;
}

const AddButtons: React.FC<AddButtonsProps> = ({ onFacebookClick }) => {

  return (
    <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
      {/* Help Button Icon */}
      <div className="hs-tooltip [--placement:bottom] inline-block">
        <button
          id="hs-pro-dnhd"
          type="button"
          className="hs-tooltip-toggle  py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          Add Channel
        </button>
      </div>
      {/* End Help Button Icon */}
      {/* Help Dropdown */}
      <div
        className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="hs-pro-dnhd"
      >
        <div className="p-1">
          <button
            className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            data-hs-overlay={`#add-line-modal`}
          >
            <svg
              className="hidden shrink-0 mt-0.5 size-4"
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
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <path d="M12 17h.01" />
            </svg>
            LINE
          </button>
          <button
            className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            onClick={() => onFacebookClick && onFacebookClick()}
          >
            <svg
              className="hidden shrink-0 mt-0.5 size-4"
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
            Facebook
          </button>
        </div>
      </div>
      {/* End Help Dropdown */}
    </div>

  )
};

export default AddButtons;
