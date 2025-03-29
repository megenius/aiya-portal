import React from 'react';
import ViewToggle from './ViewToggle';

interface FilterGroupProps {
  activeView: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

const FilterGroup: React.FC<FilterGroupProps> = ({ activeView, onViewChange }) => {
  return (
    <div className="flex flex-wrap justify-between items-center gap-1 sm:gap-5">
      {/* File Type Filter */}
      <div className="relative inline-flex items-center">
        <span className="me-1 text-xs sm:text-sm text-gray-500 dark:text-neutral-500">Filter:</span>
        <select data-hs-select="{
          &quot;placeholder&quot;: &quot;Filter&quot;,
          &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
          &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1 ps-1.5 pe-7 inline-flex shrink-0 justify-center items-center gap-x-1.5 border border-transparent text-sm text-gray-800 rounded-lg hover:bg-gray-100 hover:text-gray-800 focus:outline-hidden focus:bg-gray-100 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:bg-neutral-900 dark:hover:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
          &quot;dropdownClasses&quot;: &quot;start-0 mt-2 p-1 z-50 w-40 sm:w-44 bg-white rounded-xl shadow-xl dark:bg-neutral-800&quot;,
          &quot;optionClasses&quot;: &quot;flex items-center gap-x-3 py-2 px-3 text-xs sm:text-[13px] text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
          &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex items-center w-full\&quot;><div class=\&quot;me-2 sm:me-3\&quot; data-icon></div><span data-title></span><span class=\&quot;hidden hs-selected:block ms-auto\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;
        }" className="hidden">
          <option>Choose</option>
          <option selected data-hs-select-option="{
          &quot;icon&quot;: &quot;<svg class=\&quot;shrink-0 size-3 sm:size-3.5\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><path d=\&quot;M7 2h10\&quot;/><path d=\&quot;M5 6h14\&quot;/><rect width=\&quot;18\&quot; height=\&quot;12\&quot; x=\&quot;3\&quot; y=\&quot;10\&quot; rx=\&quot;2\&quot;/></svg>&quot;}">
            All files
          </option>
          <option data-hs-select-option="{
          &quot;icon&quot;: &quot;<svg class=\&quot;shrink-0 size-3 sm:size-3.5\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><path d=\&quot;M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z\&quot;/><polyline points=\&quot;14 2 14 8 20 8\&quot;/><line x1=\&quot;16\&quot; x2=\&quot;8\&quot; y1=\&quot;13\&quot; y2=\&quot;13\&quot;/><line x1=\&quot;16\&quot; x2=\&quot;8\&quot; y1=\&quot;17\&quot; y2=\&quot;17\&quot;/><line x1=\&quot;10\&quot; x2=\&quot;8\&quot; y1=\&quot;9\&quot; y2=\&quot;9\&quot;/></svg>&quot;}">
            Documents
          </option>
          {/* ... other options ... */}
        </select>
        <div className="absolute top-1/2 end-2 sm:end-1.5 -translate-y-1/2">
          <svg className="shrink-0 size-3 sm:size-4 text-gray-700 dark:text-neutral-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
      </div>
      
      {/* Sort and View Options */}
      <div className="flex justify-end items-center gap-x-2">
        {/* Sort Dropdown */}
        <div className="relative inline-flex items-center">
          <span className="me-1 text-xs sm:text-sm text-gray-500 dark:text-neutral-500">Sort:</span>
          <select data-hs-select="{
            &quot;placeholder&quot;: &quot;Sort&quot;,
            &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
            &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1 ps-1.5 pe-7 inline-flex shrink-0 justify-center items-center gap-x-1.5 border border-transparent text-sm text-gray-800 rounded-lg hover:bg-gray-100 hover:text-gray-800 focus:outline-hidden focus:bg-gray-100 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:bg-neutral-900 dark:hover:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
            &quot;dropdownClasses&quot;: &quot;end-0 mt-2 p-1 z-50 w-32 bg-white rounded-xl shadow-xl dark:bg-neutral-800&quot;,
            &quot;optionClasses&quot;: &quot;flex items-center gap-x-3 py-2 px-3 text-xs sm:text-[13px] text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
            &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;
          }" className="hidden">
            <option>Choose</option>
            <option selected>Newest file</option>
            <option>Oldest file</option>
            <option>A to Z</option>
            <option>Z to A</option>
          </select>
          <div className="absolute top-1/2 end-2 sm:end-1.5 -translate-y-1/2">
            <svg className="shrink-0 size-3 sm:size-4 text-gray-700 dark:text-neutral-300" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </div>
        
        {/* View Toggle */}
        <ViewToggle activeView={activeView} onViewChange={onViewChange} />
      </div>
    </div>
  );
};

export default FilterGroup;
