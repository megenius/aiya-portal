import React, { useState } from 'react';

interface PageFilterProps {
  onChanged: (value: string) => void;
}

const PageFilter: React.FC<PageFilterProps> = ({ onChanged }) => {
  const [value, setValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onChanged(newValue);
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-3 sm:gap-6">
      <div className="relative w-full sm:max-w-xs">
        <input
          type="text"
          id="hs-table-search"
          name="hs-table-search"
          className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
          placeholder="Search for documents"
          value={value}
          onChange={handleInputChange}
        />
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
          <svg
            className="size-4 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PageFilter;
