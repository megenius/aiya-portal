import { endOfDay, format, startOfDay } from 'date-fns';
import React, { useMemo } from 'react';
import { useMe } from '~/hooks/useMe';

interface DateRangeSelectorProps {
  startDate?: Date;
  endDate?: Date;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({ startDate = startOfDay(new Date()), endDate = endOfDay(new Date()) }) => {


  const handleDateRangeChange = () => {
  }

  const dateLabel = useMemo(() => {
    return `${format(startDate, "PP")} - ${format(endDate, "PP")}`;
  }, [startDate, endDate])

  return (
    <>
      <div className="hs-dropdown [--placement:bottom-right] [--strategy:absolute] [--flip:false] [--auto-close:inside] relative inline-flex">
        <button id="hs-pro-dachcd" type="button" className="py-2 px-2.5 inline-flex items-center gap-x-1.5 font-medium text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
            <line x1={16} x2={16} y1={2} y2={6} />
            <line x1={8} x2={8} y1={2} y2={6} />
            <line x1={3} x2={21} y1={10} y2={10} />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
          {dateLabel}
          <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-[318px] sm:w-[636px] transition-[opacity,margin] duration opacity-0 start-5 z-50 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900 hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-dachcd" style={{}}>
          <div className=" flex flex-col bg-white border shadow-lg rounded-xl overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
            {/* Calendar */}
            <div className="sm:flex">
              {/* Calendar */}
              <div className="p-3 space-y-0.5">
                {/* Months */}
                <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                  {/* Prev Button */}
                  <div className="col-span-1">
                    <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-label="Previous">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                  </div>
                  {/* End Prev Button */}
                  {/* Month / Year */}
                  <div className="col-span-3 flex justify-center items-center gap-x-1">
                    <div className="relative">
                      <div className="hs-select relative"><select data-hs-select="{
                          &quot;placeholder&quot;: &quot;Select month&quot;,
                          &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
                          &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500&quot;,
                          &quot;dropdownClasses&quot;: &quot;mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700&quot;,
                          &quot;optionClasses&quot;: &quot;p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800&quot;,
                          &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;
                        }" className="hidden" style={{ display: 'none' }}>
                        <option value={0}>January</option>
                        <option value={1}>February</option>
                        <option value={2}>March</option>
                        <option value={3}>April</option>
                        <option value={4}>May</option>
                        <option value={5}>June</option>
                        <option value={6} selected>July</option>
                        <option value={7}>August</option>
                        <option value={8}>September</option>
                        <option value={9}>October</option>
                        <option value={10}>November</option>
                        <option value={11}>December</option>
                      </select><button type="button" aria-expanded="false" className="hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"><span className="truncate">July</span></button><div data-hs-select-dropdown className="absolute top-full hidden mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700" role="listbox" tabIndex={-1} aria-orientation="vertical"><div data-value={0} data-title-value="January" tabIndex={0} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={0}><div className="flex justify-between items-center w-full"><span data-title>January</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={1} data-title-value="February" tabIndex={1} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={1}><div className="flex justify-between items-center w-full"><span data-title>February</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2} data-title-value="March" tabIndex={2} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={2}><div className="flex justify-between items-center w-full"><span data-title>March</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={3} data-title-value="April" tabIndex={3} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={3}><div className="flex justify-between items-center w-full"><span data-title>April</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={4} data-title-value="May" tabIndex={4} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={4}><div className="flex justify-between items-center w-full"><span data-title>May</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={5} data-title-value="June" tabIndex={5} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={5}><div className="flex justify-between items-center w-full"><span data-title>June</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={6} data-title-value="July" tabIndex={6} className="cursor-pointer selected p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={6}><div className="flex justify-between items-center w-full"><span data-title>July</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={7} data-title-value="August" tabIndex={7} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={7}><div className="flex justify-between items-center w-full"><span data-title>August</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={8} data-title-value="September" tabIndex={8} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={8}><div className="flex justify-between items-center w-full"><span data-title>September</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={9} data-title-value="October" tabIndex={9} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={9}><div className="flex justify-between items-center w-full"><span data-title>October</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={10} data-title-value="November" tabIndex={10} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={10}><div className="flex justify-between items-center w-full"><span data-title>November</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={11} data-title-value="December" tabIndex={11} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={11}><div className="flex justify-between items-center w-full"><span data-title>December</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div></div></div>
                    </div>
                    <span className="text-gray-800 dark:text-neutral-200">/</span>
                    <div className="relative">
                      <div className="hs-select relative"><select data-hs-select="{
                          &quot;placeholder&quot;: &quot;Select year&quot;,
                          &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
                          &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500&quot;,
                          &quot;dropdownClasses&quot;: &quot;mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700&quot;,
                          &quot;optionClasses&quot;: &quot;p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800&quot;,
                          &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;
                        }" className="hidden" style={{ display: 'none' }}>
                        <option selected>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                      </select><button type="button" aria-expanded="false" className="hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"><span className="truncate">2023</span></button><div data-hs-select-dropdown className="absolute top-full hidden mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700" role="listbox" tabIndex={-1} aria-orientation="vertical"><div data-value={2023} data-title-value={2023} tabIndex={0} className="cursor-pointer selected p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={0}><div className="flex justify-between items-center w-full"><span data-title>2023</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2024} data-title-value={2024} tabIndex={1} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={1}><div className="flex justify-between items-center w-full"><span data-title>2024</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2025} data-title-value={2025} tabIndex={2} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={2}><div className="flex justify-between items-center w-full"><span data-title>2025</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2026} data-title-value={2026} tabIndex={3} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={3}><div className="flex justify-between items-center w-full"><span data-title>2026</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2027} data-title-value={2027} tabIndex={4} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={4}><div className="flex justify-between items-center w-full"><span data-title>2027</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div></div></div>
                    </div>
                  </div>
                  {/* End Month / Year */}
                  {/* Next Button */}
                  <div className="col-span-1 flex justify-end">
                    <button type="button" className="opacity-0 pointer-events-none size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-label="Next">
                      <svg className="shrink-0 size-4" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                  {/* End Next Button */}
                </div>
                {/* Months */}
                {/* Weeks */}
                <div className="flex pb-1.5">
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Mo
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Tu
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    We
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Th
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Fr
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Sa
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Su
                  </span>
                </div>
                {/* Weeks */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200" disabled>
                      26
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200" disabled>
                      27
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200" disabled>
                      28
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200" disabled>
                      29
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200" disabled>
                      30
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      1
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      2
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      3
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      4
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      5
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      6
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      7
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      8
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      9
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      10
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      11
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      12
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      13
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      14
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      15
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      16
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      17
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      18
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      19
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      20
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      21
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      22
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      23
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      24
                    </button>
                  </div>
                  <div className="bg-gray-100 rounded-s-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:border-neutral-700">
                      25
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      26
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      27
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      28
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      29
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      30
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      31
                    </button>
                  </div>
                  <div className="bg-linear-to-r from-gray-100 dark:from-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      1
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      2
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      3
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      4
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      5
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      6
                    </button>
                  </div>
                </div>
                {/* Days */}
              </div>
              {/* Calendar */}
              <div className="p-3 space-y-0.5">
                {/* Months */}
                <div className="grid grid-cols-5 items-center gap-x-3 mx-1.5 pb-3">
                  {/* Prev Button */}
                  <div className="col-span-1">
                    <button type="button" className="opacity-0 pointer-events-none size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-label="Previous">
                      <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m15 18-6-6 6-6" />
                      </svg>
                    </button>
                  </div>
                  {/* End Prev Button */}
                  {/* Month / Year */}
                  <div className="col-span-3 flex justify-center items-center gap-x-1">
                    <div className="relative">
                      <div className="hs-select relative"><select data-hs-select="{
                          &quot;placeholder&quot;: &quot;Select month&quot;,
                          &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
                          &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500&quot;,
                          &quot;dropdownClasses&quot;: &quot;mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700&quot;,
                          &quot;optionClasses&quot;: &quot;p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800&quot;,
                          &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;
                        }" className="hidden" style={{ display: 'none' }}>
                        <option value={0}>January</option>
                        <option value={1}>February</option>
                        <option value={2}>March</option>
                        <option value={3}>April</option>
                        <option value={4}>May</option>
                        <option value={5}>June</option>
                        <option value={6} selected>July</option>
                        <option value={7}>August</option>
                        <option value={8}>September</option>
                        <option value={9}>October</option>
                        <option value={10}>November</option>
                        <option value={11}>December</option>
                      </select><button type="button" aria-expanded="false" className="hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"><span className="truncate">July</span></button><div data-hs-select-dropdown className="absolute top-full hidden mt-2 z-50 w-32 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700" role="listbox" tabIndex={-1} aria-orientation="vertical"><div data-value={0} data-title-value="January" tabIndex={0} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={0}><div className="flex justify-between items-center w-full"><span data-title>January</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={1} data-title-value="February" tabIndex={1} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={1}><div className="flex justify-between items-center w-full"><span data-title>February</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2} data-title-value="March" tabIndex={2} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={2}><div className="flex justify-between items-center w-full"><span data-title>March</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={3} data-title-value="April" tabIndex={3} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={3}><div className="flex justify-between items-center w-full"><span data-title>April</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={4} data-title-value="May" tabIndex={4} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={4}><div className="flex justify-between items-center w-full"><span data-title>May</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={5} data-title-value="June" tabIndex={5} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={5}><div className="flex justify-between items-center w-full"><span data-title>June</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={6} data-title-value="July" tabIndex={6} className="cursor-pointer selected p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={6}><div className="flex justify-between items-center w-full"><span data-title>July</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={7} data-title-value="August" tabIndex={7} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={7}><div className="flex justify-between items-center w-full"><span data-title>August</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={8} data-title-value="September" tabIndex={8} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={8}><div className="flex justify-between items-center w-full"><span data-title>September</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={9} data-title-value="October" tabIndex={9} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={9}><div className="flex justify-between items-center w-full"><span data-title>October</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={10} data-title-value="November" tabIndex={10} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={10}><div className="flex justify-between items-center w-full"><span data-title>November</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={11} data-title-value="December" tabIndex={11} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={11}><div className="flex justify-between items-center w-full"><span data-title>December</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div></div></div>
                    </div>
                    <span className="text-gray-800 dark:text-neutral-200">/</span>
                    <div className="relative">
                      <div className="hs-select relative"><select data-hs-select="{
                          &quot;placeholder&quot;: &quot;Select year&quot;,
                          &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
                          &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500&quot;,
                          &quot;dropdownClasses&quot;: &quot;mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700&quot;,
                          &quot;optionClasses&quot;: &quot;p-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800&quot;,
                          &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;
                        }" className="hidden" style={{ display: 'none' }}>
                        <option selected>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                        <option>2027</option>
                      </select><button type="button" aria-expanded="false" className="hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative flex text-nowrap w-full cursor-pointer text-start font-medium text-gray-800 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 before:absolute before:inset-0 before:z-1 dark:text-neutral-200 dark:hover:text-blue-500 dark:focus:text-blue-500"><span className="truncate">2023</span></button><div data-hs-select-dropdown className="absolute top-full hidden mt-2 z-50 w-20 max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700" role="listbox" tabIndex={-1} aria-orientation="vertical"><div data-value={2023} data-title-value={2023} tabIndex={0} className="cursor-pointer selected p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={0}><div className="flex justify-between items-center w-full"><span data-title>2023</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2024} data-title-value={2024} tabIndex={1} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={1}><div className="flex justify-between items-center w-full"><span data-title>2024</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2025} data-title-value={2025} tabIndex={2} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={2}><div className="flex justify-between items-center w-full"><span data-title>2025</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2026} data-title-value={2026} tabIndex={3} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={3}><div className="flex justify-between items-center w-full"><span data-title>2026</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div><div data-value={2027} data-title-value={2027} tabIndex={4} className="cursor-pointer p-2 w-full text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800" data-id={4}><div className="flex justify-between items-center w-full"><span data-title>2027</span><span className="hidden hs-selected:block"><svg className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" xmlns="http:.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg></span></div></div></div></div>
                    </div>
                  </div>
                  {/* End Month / Year */}
                  {/* Next Button */}
                  <div className="col-span-1 flex justify-end">
                    <button type="button" className="size-8 flex justify-center items-center text-gray-800 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-label="Next">
                      <svg className="shrink-0 size-4" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </button>
                  </div>
                  {/* End Next Button */}
                </div>
                {/* Months */}
                {/* Weeks */}
                <div className="flex pb-1.5">
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Mo
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Tu
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    We
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Th
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Fr
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Sa
                  </span>
                  <span className="m-px w-10 block text-center text-sm text-gray-500 dark:text-neutral-500">
                    Su
                  </span>
                </div>
                {/* Weeks */}
                {/* Days */}
                <div className="flex">
                  <div className="bg-linear-to-l from-gray-100 dark:from-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      31
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700">
                      1
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700">
                      2
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700">
                      3
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700">
                      4
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      5
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      6
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      7
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      8
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      9
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      10
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      11
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      12
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      13
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      14
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      15
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      16
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      17
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      18
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      19
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      20
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      21
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      22
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      23
                    </button>
                  </div>
                  <div className="bg-gray-100 first:rounded-s-full last:rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      24
                    </button>
                  </div>
                  <div className="bg-gray-100 rounded-e-full dark:bg-neutral-800">
                    <button type="button" className="m-px size-10 flex justify-center items-center bg-blue-600 border border-transparent text-sm font-medium text-white hover:border-blue-600 rounded-full dark:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:hover:border-neutral-700">
                      25
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      26
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      27
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      28
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      29
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      30
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 rounded-full hover:border-blue-600 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:border-blue-600 focus:text-blue-600 dark:text-neutral-200">
                      31
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      1
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      2
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      3
                    </button>
                  </div>
                </div>
                {/* Days */}
                {/* Days */}
                <div className="flex">
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      4
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      5
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      6
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      7
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      8
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      9
                    </button>
                  </div>
                  <div>
                    <button type="button" className="m-px size-10 flex justify-center items-center border border-transparent text-sm text-gray-800 hover:border-blue-600 hover:text-blue-600 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:border-neutral-500 dark:focus:bg-neutral-700" disabled>
                      10
                    </button>
                  </div>
                </div>
                {/* Days */}
              </div>
            </div>
            {/* End Calendar */}
            {/* Button Group */}
            <div className="flex items-center py-3 px-4 justify-end border-t border-gray-200 dark:border-neutral-700 gap-x-2">
              <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                Cancel
              </button>
              <button type="button" className="py-2 px-3  inline-flex justify-center items-center gap-x-2 text-xs font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500">
                Apply
              </button>
            </div>
            {/* End Button Group */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DateRangeSelector;