import React from "react";

export const ChatSearch = () => (
  <div className="border-b border-gray-200 dark:border-neutral-700">
    <div className="relative" data-hs-combo-box="{
      &quot;groupingType&quot;: &quot;default&quot;,
      &quot;preventSelection&quot;: true,
      &quot;isOpenOnFocus&quot;: true,
      &quot;outputEmptyTemplate&quot;: &quot;<div class=\&quot;p-5 h-[calc(100dvh-85px)] flex flex-col justify-center items-center text-center\&quot;><svg class=\&quot;w-48 mx-auto mb-4\&quot; width=\&quot;178\&quot; height=\&quot;90\&quot; viewBox=\&quot;0 0 178 90\&quot; fill=\&quot;none\&quot; xmlns=\&quot;http://www.w3.org/2000/svg\&quot;><rect x=\&quot;27\&quot; y=\&quot;50.5\&quot; width=\&quot;124\&quot; height=\&quot;39\&quot; rx=\&quot;7.5\&quot; fill=\&quot;white\&quot;/><rect x=\&quot;27\&quot; y=\&quot;50.5\&quot; width=\&quot;124\&quot; height=\&quot;39\&quot; rx=\&quot;7.5\&quot; stroke=\&quot;#F9FAFB\&quot;/><rect x=\&quot;34.5\&quot; y=\&quot;58\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; rx=\&quot;12\&quot; fill=\&quot;#F9FAFB\&quot;/><rect x=\&quot;66.5\&quot; y=\&quot;61\&quot; width=\&quot;60\&quot; height=\&quot;6\&quot; rx=\&quot;3\&quot; fill=\&quot;#F9FAFB\&quot;/><rect x=\&quot;66.5\&quot; y=\&quot;73\&quot; width=\&quot;77\&quot; height=\&quot;6\&quot; rx=\&quot;3\&quot; fill=\&quot;#F9FAFB\&quot;/><rect x=\&quot;19.5\&quot; y=\&quot;28.5\&quot; width=\&quot;139\&quot; height=\&quot;39\&quot; rx=\&quot;7.5\&quot; fill=\&quot;white\&quot;/><rect x=\&quot;19.5\&quot; y=\&quot;28.5\&quot; width=\&quot;139\&quot; height=\&quot;39\&quot; rx=\&quot;7.5\&quot; stroke=\&quot;#F3F4F6\&quot;/><rect x=\&quot;27\&quot; y=\&quot;36\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; rx=\&quot;12\&quot; fill=\&quot;#F3F4F6\&quot;/><rect x=\&quot;59\&quot; y=\&quot;39\&quot; width=\&quot;60\&quot; height=\&quot;6\&quot; rx=\&quot;3\&quot; fill=\&quot;#F3F4F6\&quot;/><rect x=\&quot;59\&quot; y=\&quot;51\&quot; width=\&quot;92\&quot; height=\&quot;6\&quot; rx=\&quot;3\&quot; fill=\&quot;#F3F4F6\&quot;/><g filter=\&quot;url(#@@id)\&quot;><rect x=\&quot;12\&quot; y=\&quot;6\&quot; width=\&quot;154\&quot; height=\&quot;40\&quot; rx=\&quot;8\&quot; fill=\&quot;white\&quot; shape-rendering=\&quot;crispEdges\&quot;/><rect x=\&quot;12.5\&quot; y=\&quot;6.5\&quot; width=\&quot;153\&quot; height=\&quot;39\&quot; rx=\&quot;7.5\&quot; stroke=\&quot;#F3F4F6\&quot; shape-rendering=\&quot;crispEdges\&quot;/><rect x=\&quot;20\&quot; y=\&quot;14\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; rx=\&quot;12\&quot; fill=\&quot;#E5E7EB\&quot;/><rect x=\&quot;52\&quot; y=\&quot;17\&quot; width=\&quot;60\&quot; height=\&quot;6\&quot; rx=\&quot;3\&quot; fill=\&quot;#E5E7EB\&quot;/><rect x=\&quot;52\&quot; y=\&quot;29\&quot; width=\&quot;106\&quot; height=\&quot;6\&quot; rx=\&quot;3\&quot; fill=\&quot;#E5E7EB\&quot;/></g><defs><filter id=\&quot;@@id\&quot; x=\&quot;0\&quot; y=\&quot;0\&quot; width=\&quot;178\&quot; height=\&quot;64\&quot; filterUnits=\&quot;userSpaceOnUse\&quot; color-interpolation-filters=\&quot;sRGB\&quot;><feFlood flood-opacity=\&quot;0\&quot; result=\&quot;BackgroundImageFix\&quot;/><feColorMatrix in=\&quot;SourceAlpha\&quot; type=\&quot;matrix\&quot; values=\&quot;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\&quot; result=\&quot;hardAlpha\&quot;/><feOffset dy=\&quot;6\&quot;/><feGaussianBlur stdDeviation=\&quot;6\&quot;/><feComposite in2=\&quot;hardAlpha\&quot; operator=\&quot;out\&quot;/><feColorMatrix type=\&quot;matrix\&quot; values=\&quot;0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.03 0\&quot;/><feBlend mode=\&quot;normal\&quot; in2=\&quot;BackgroundImageFix\&quot; result=\&quot;effect1_dropShadow_1187_14810\&quot;/><feBlend mode=\&quot;normal\&quot; in=\&quot;SourceGraphic\&quot; in2=\&quot;effect1_dropShadow_1187_14810\&quot; result=\&quot;shape\&quot;/></filter></defs></svg><div class=\&quot;max-w-sm mx-auto\&quot;><p class=\&quot;mt-2 text-sm text-gray-600 dark:text-neutral-400\&quot;>No search results</p></div></div>&quot;,
      &quot;preventAutoPosition&quot;: true,
      &quot;groupingTitleTemplate&quot;: &quot;<div class=\&quot;block text-xs text-gray-500 mt-3 mx-5 mb-1 dark:text-neutral-500 dark:border-neutral-700\&quot;></div>&quot;
    }">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-5">
          <svg className="shrink-0 size-4 text-gray-400 dark:text-white/60" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx={11} cy={11} r={8} />
            <path d="m21 21-4.3-4.3" />
          </svg>
        </div>
        <input type="text" className="py-1.5 px-12 block w-full bg-white border-0 rounded-0 md:text-[13px] placeholder:text-gray-500 focus:outline-hidden focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder:text-neutral-400" role="combobox" aria-expanded="false" placeholder="Search" data-hs-combo-box-input />
        <div className="hidden hs-combo-box-active:flex absolute inset-y-0 end-0 items-center z-20 pe-4" data-hs-combo-box-input>
          <button type="button" className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" aria-label="Close" data-hs-combo-box-close>
            <span className="sr-only">Close</span>
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <circle cx={12} cy={12} r={10} />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          </button>
        </div>
      </div>
      {/* SearchBox Dropdown - omitted for brevity */}
    </div>
  </div>
);
