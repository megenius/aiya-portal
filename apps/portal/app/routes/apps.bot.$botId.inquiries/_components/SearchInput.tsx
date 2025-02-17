import React from 'react';

interface SearchInputProps {
  onSearchChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearchChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(event.target.value);
  };


  return (
    <div className="relative w-full">
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
        <svg
          className="flex-shrink-0 size-4 text-gray-500 dark:text-neutral-400"
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
          <circle cx={11} cy={11} r={8} />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </div>
      <input
        type="text"
        className="py-2 px-3 ps-10 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
        placeholder="Search by name or ID"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;