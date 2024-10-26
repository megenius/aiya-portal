import { EllipsisVertical } from 'lucide-react';
import React from 'react';
import { WorkspaceMember } from '~/@types/app';

interface AddButtonsProps {
  id: string;
  onRemove?: (id: string) => void;
}

const ActionButtons: React.FC<AddButtonsProps> = ({ id, onRemove }) => {
  return (
    <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
      {/* Help Button Icon */}
      <div className="hs-tooltip [--placement:bottom] inline-block">
        <button
          id={`action-${id}`}
          type="button"
          className="hs-tooltip-toggle"
          aria-haspopup="menu"
          aria-expanded="false"
          aria-label="Dropdown"
        >
          <EllipsisVertical size={14} />
        </button>
      </div>
      {/* End Help Button Icon */}
      {/* Help Dropdown */}
      <div
        className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby={`action-${id}`}
      >
        <div className="p-1">
          <button
            className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
            onClick={() => onRemove && onRemove(id)}
          // data-hs-overlay={`#add-facebook-modal`}
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
            Remove Member
          </button>

        </div>
      </div>
      {/* End Help Dropdown */}
    </div>

  )
};

export { ActionButtons }
