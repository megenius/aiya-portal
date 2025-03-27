import React from 'react';

const Filters: React.FC<{
  onSearchChanged: (value: string) => void;
}> = ({ onSearchChanged }) => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5">
        <svg
          className="shrink-0 size-4 text-stone-500 dark:text-neutral-400"
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
        className="py-[7px] px-3 ps-10 block w-full bg-stone-100 border-transparent rounded-lg text-sm placeholder:text-stone-500 focus:border-green-500 focus:ring-green-600 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder:text-neutral-400 dark:focus:ring-neutral-600"
        placeholder="Search intents"
        onChange={(e) => onSearchChanged(e.target.value)}
      />
    </div>
  );
};

export default Filters;