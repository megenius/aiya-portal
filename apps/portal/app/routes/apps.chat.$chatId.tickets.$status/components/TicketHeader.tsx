import React from "react";

export const TicketHeader: React.FC = () => {
  return (
    <div className="py-2.5 ps-5 pe-3 flex justify-between items-center gap-x-2 border-b border-gray-200 dark:border-neutral-700">
      <span id="hs-pro-chtshid1-label" className="block truncate font-semibold text-gray-800 dark:text-neutral-200">
        All
      </span>
      <div className="flex items-center gap-x-1">
        {/* Filter Dropdown */}
        <FilterDropdown />
        
        {/* Sort Dropdown */}
        <div className="relative ps-1.5 ms-0.5 before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
          <SortDropdown />
        </div>
        
        {/* Close button (mobile only) */}
        <button 
          type="button" 
          className="lg:hidden flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200" 
          data-hs-overlay="#hs-pro-chtshid1"
        >
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};

const FilterDropdown: React.FC = () => {
  return (
    <div className="hs-dropdown [--placement:top-right] relative inline-flex">
      <button id="hs-pro-chttfd" type="button" className="flex justify-center items-center size-7 text-gray-500 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 6h18" />
          <path d="M7 12h10" />
          <path d="M10 18h4" />
        </svg>
        <span className="sr-only">Filter</span>
      </button>
      
      <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-40 transition-[opacity,margin] duration opacity-0 hidden z-11 bg-white rounded-xl shadow-lg dark:bg-neutral-950" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-chttfd">
        <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
          <div className="space-y-0.5 max-h-48 overflow-y-auto [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            {filterOptions.map((option) => (
              <FilterOption 
                key={option.id}
                id={option.id}
                label={option.label}
                defaultChecked={option.defaultChecked}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface FilterOptionProps {
  id: string;
  label: string;
  defaultChecked?: boolean;
}

const FilterOption: React.FC<FilterOptionProps> = ({ id, label, defaultChecked }) => {
  return (
    <label 
      htmlFor={id} 
      className="py-1.5 px-3 group flex items-center gap-x-3 rounded-lg cursor-pointer text-[13px] text-gray-800 hover:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
    >
      <input type="radio" className="hidden" id={id} name="hs-pro-chttfdin" defaultChecked={defaultChecked} />
      {label}
      <svg className="shrink-0 size-3.5 ms-auto opacity-0 group-has-checked:opacity-100" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </label>
  );
};

const filterOptions = [
  { id: "hs-pro-chttfdall", label: "All", defaultChecked: true },
  { id: "hs-pro-chttfdmn", label: "Mentions" },
  { id: "hs-pro-chttfdcby", label: "Created by you" },
  { id: "hs-pro-chttfdas", label: "Assigned" },
  { id: "hs-pro-chttfdua", label: "Unassigned" }
];

const SortDropdown: React.FC = () => {
  return (
    <div className="relative inline-block">
      <select 
        id="hs-pro-select-revenue" 
        data-hs-select="{
          &quot;placeholder&quot;: &quot;Select option...&quot;,
          &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
          &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 before:absolute before:inset-0 before:z-1 dark:text-neutral-500 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
          &quot;dropdownClasses&quot;: &quot;mt-2 z-50 end-0 w-40 p-1 space-y-0.5 bg-white rounded-xl shadow-xl dark:bg-neutral-900&quot;,
          &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-[13px] text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
          &quot;optionTemplate&quot;: &quot;<div><div class=\&quot;flex items-center\&quot;><div class=\&quot;me-3\&quot; data-icon></div><div class=\&quot;text-gray-800 dark:text-neutral-200\&quot; data-title></div></div></div>&quot;,
          &quot;extraMarkup&quot;: &quot;<div class=\&quot;absolute top-1/2 end-1.5 -translate-y-1/2\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><path d=\&quot;m6 9 6 6 6-6\&quot;/></svg></div>&quot;
        }" 
        className="hidden"
      >
        <option>Choose</option>
        <option value={1} selected data-hs-select-option="{
          &quot;icon&quot;: &quot;<svg class=\&quot;shrink-0 size-4\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><path d=\&quot;M7 2h10\&quot;/><path d=\&quot;M5 6h14\&quot;/><rect width=\&quot;18\&quot; height=\&quot;12\&quot; x=\&quot;3\&quot; y=\&quot;10\&quot; rx=\&quot;2\&quot;/></svg>&quot;
        }">All</option>
        <option value={2} data-hs-select-option="{
          &quot;icon&quot;: &quot;<svg class=\&quot;shrink-0 size-4\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><path d=\&quot;m5 12 7-7 7 7\&quot;/><path d=\&quot;M12 19V5\&quot;/></svg>&quot;
        }">Newest</option>
        <option value={3} data-hs-select-option="{
          &quot;icon&quot;: &quot;<svg class=\&quot;shrink-0 size-4\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><path d=\&quot;M12 5v14\&quot;/><path d=\&quot;m19 12-7 7-7-7\&quot;/></svg>&quot;
        }">Oldest</option>
        <option value={5} data-hs-select-option="{
          &quot;icon&quot;: &quot;<svg class=\&quot;shrink-0 size-4\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><path d=\&quot;M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7\&quot;/><circle cx=\&quot;18\&quot; cy=\&quot;6\&quot; r=\&quot;3\&quot;/></svg>&quot;
        }">Unread</option>
        <option value={6} data-hs-select-option="{
          &quot;icon&quot;: &quot;<svg class=\&quot;shrink-0 size-4\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><path d=\&quot;M5 12h14\&quot;/><path d=\&quot;m12 5 7 7-7 7\&quot;/></svg>&quot;
        }">Unresolved</option>
        <option value={7} data-hs-select-option="{
          &quot;icon&quot;: &quot;<svg class=\&quot;shrink-0 size-4\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><path d=\&quot;M20 6 9 17l-5-5\&quot;/></svg>&quot;
        }">Resolved</option>
      </select>
    </div>
  );
};
