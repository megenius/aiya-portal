import React, { useState } from 'react';
import SearchInput from './SearchInput';

interface TableFilterProps {
  onChanged?: (value: string) => void;
}

const TableFilter: React.FC<TableFilterProps> = ({ onChanged }) => {
  return (
    <div className="flex sm:grid sm:grid-cols-2 gap-x-2 sm:gap-x-5">
      <SearchInput onSearchChange={(value) => onChanged && onChanged(value)} />
      <div className="flex justify-end items-center gap-x-2">
        {/* <DownloadCSVButton />
        <SendInviteButton /> */}
      </div>
    </div>
  );
};

export default TableFilter;


const SendInviteButton: React.FC = () => {
  return (
    <button
      type="button"
      className="py-2 px-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      data-hs-overlay="#hs-pro-dshm"
    >
      <span className="hidden sm:block">Send</span>Invite
    </button>
  )
}

const DownloadCSVButton: React.FC = () => {
  return (
    <button
      type="button"
      className="p-2.5 sm:py-2 sm:px-3 inline-flex items-center text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
    >
      <svg
        className="flex-shrink-0 sm:me-2 size-4"
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1={12} x2={12} y1={15} y2={3} />
      </svg>
      <span className="hidden sm:block">Download CSV</span>
    </button>
  )
}