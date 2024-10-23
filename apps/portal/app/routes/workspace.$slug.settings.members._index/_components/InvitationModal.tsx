import React from 'react';

interface InvitationModalProps {

}

const InvitationModal: React.FC<InvitationModalProps> = () => {
  return (
    <div id="hs-pro-dshm" className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto [--close-when-click-inside:true] pointer-events-none" role="dialog" tabIndex={-1} aria-labelledby="hs-pro-dshm-label">
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="w-full max-h-full flex flex-col bg-white rounded-xl pointer-events-auto shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-800">
          {/* Header */}
          <div className="py-2.5 px-4 flex justify-between items-center border-b dark:border-neutral-700">
            <h3 id="hs-pro-dshm-label" className="font-medium text-gray-800 dark:text-neutral-200">
              Invite
            </h3>
            <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-pro-dshm">
              <span className="sr-only">Close</span>
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          {/* End Header */}
          {/* Header */}
          <div className="p-4 border-b border-gray-200 dark:border-neutral-700">
            <span className="block text-xs font-medium text-gray-800 mb-2 dark:text-neutral-300">
              Invite
            </span>
            {/* Input Form */}
            <div className="flex items-center gap-x-2">
              <div className="relative w-full">
                <input type="text" className="py-2 px-3 pe-24 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600" placeholder="Add name or emails" />
                <div className="absolute inset-y-0 end-0 flex items-center z-20 pe-[5px] text-gray-400">
                  {/* Select */}
                  <div className="relative inline-block">
                    <select id="hs-pro-select-mini-modal" data-hs-select="{
                  &quot;placeholder&quot;: &quot;Select option...&quot;,
                  &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
                  &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
                  
                  &quot;dropdownClasses&quot;: &quot;end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950&quot;,
                  &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
                  &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;
                }" className="hidden">
                      <option value>Choose</option>
                      <option selected>Can view</option>
                      <option>Can edit</option>
                      <option>Admin</option>
                    </select>
                    <div className="absolute top-1/2 end-1.5 -translate-y-1/2">
                      <svg className="shrink-0 size-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                  {/* End Select */}
                </div>
              </div>
              <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500">
                Send
              </button>
            </div>
            {/* End Input Form */}
            <div className="flex mt-2">
              <input type="checkbox" className="shrink-0 size-3.5 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-pro-dnshmch" defaultChecked />
              <label htmlFor="hs-pro-dnshmch" className="text-xs text-gray-600 ms-1.5 dark:text-neutral-400">
                Notify recipients via email
              </label>
            </div>
          </div>
          {/* End Header */}
          {/* Body */}
          <div id="hs-modal-share-body" className="p-4 space-y-4 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <span className="block text-xs font-medium text-gray-800 dark:text-neutral-300">
              From Htmlstream
            </span>
            {/* User */}
            <div className="w-full flex items-center gap-x-3">
              <img className="shrink-0 size-[38px] rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
              <div className="grow">
                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                  James Collison <span className="text-xs font-normal text-gray-500 dark:text-neutral-500">(you)</span>
                </span>
                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                  james@site.com
                </span>
              </div>
              {/* Select */}
              <div className="relative">
                <select data-hs-select="{
              &quot;placeholder&quot;: &quot;Select option...&quot;,
              &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
              &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
              &quot;dropdownClasses&quot;: &quot;end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950&quot;,
              &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
              &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;,
              &quot;viewport&quot;: &quot;#hs-modal-share-body&quot;
            }" className="hidden">
                  <option value>Choose</option>
                  <option>Can view</option>
                  <option>Can edit</option>
                  <option selected>Admin</option>
                  <option>Remove</option>
                </select>
                <div className="absolute top-1/2 end-1.5 -translate-y-1/2">
                  <svg className="shrink-0 size-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              {/* End Select */}
            </div>
            {/* End User */}
            {/* User */}
            <div className="w-full flex items-center gap-x-3">
              <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-500">
                L
              </span>
              <div className="grow">
                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                  Liza Harrison
                </span>
                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                  liza@site.com
                </span>
              </div>
              {/* Select */}
              <div className="relative">
                <select data-hs-select="{
              &quot;placeholder&quot;: &quot;Select option...&quot;,
              &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
              &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
              &quot;dropdownClasses&quot;: &quot;end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950&quot;,
              &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
              &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;,
              &quot;viewport&quot;: &quot;#hs-modal-share-body&quot;
            }" className="hidden">
                  <option value>Choose</option>
                  <option selected>Can view</option>
                  <option>Can edit</option>
                  <option>Admin</option>
                  <option>Remove</option>
                </select>
                <div className="absolute top-1/2 end-1.5 -translate-y-1/2">
                  <svg className="shrink-0 size-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              {/* End Select */}
            </div>
            {/* End User */}
            {/* User */}
            <div className="w-full flex items-center gap-x-3">
              <img className="shrink-0 size-[38px] rounded-full" src="https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
              <div className="grow">
                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                  Daniel Hobbs
                </span>
                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                  dhobbs@site.com
                </span>
              </div>
              {/* Select */}
              <div className="relative">
                <select data-hs-select="{
              &quot;placeholder&quot;: &quot;Select option...&quot;,
              &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
              &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
              &quot;dropdownClasses&quot;: &quot;end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950&quot;,
              &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
              &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;,
              &quot;viewport&quot;: &quot;#hs-modal-share-body&quot;
            }" className="hidden">
                  <option value>Choose</option>
                  <option>Can view</option>
                  <option selected>Can edit</option>
                  <option>Admin</option>
                  <option>Remove</option>
                </select>
                <div className="absolute top-1/2 end-1.5 -translate-y-1/2">
                  <svg className="shrink-0 size-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              {/* End Select */}
            </div>
            {/* End User */}
            {/* Show More Button */}
            <button type="button" className="hs-collapse-toggle hs-collapse-open:hidden w-full text-start flex items-center gap-x-3 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-pro-dshmc-item-button" aria-expanded="false" aria-controls="hs-pro-dshmc-button" data-hs-collapse="#hs-pro-dshmc-button">
              <span className="flex shrink-0 justify-center items-center size-[38px] text-sm font-semibold text-gray-500 rounded-lg dark:text-neutral-500">
                <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" viewBox="0 0 16 16">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
              </span>
              <span className="grow">
                <span className="text-xs text-gray-500 dark:text-neutral-500">
                  2 more people
                </span>
              </span>
            </button>
            {/* End Show More Button */}
            {/* Show More Collapse */}
            <div id="hs-pro-dshmc-button" className="hs-collapse hidden w-full transition-none space-y-4" aria-labelledby="hs-pro-dshmc-item-button">
              {/* User */}
              <div className="w-full flex items-center gap-x-3">
                <span className="flex shrink-0 justify-center items-center size-[38px] bg-white border border-gray-200 text-gray-500 text-sm font-semibold rounded-full shadow-sm dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-500">
                  O
                </span>
                <div className="grow">
                  <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                    Ols Shols
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-neutral-500">
                    ols@site.com
                  </span>
                </div>
                {/* Select */}
                <div className="relative">
                  <select data-hs-select="{
                &quot;placeholder&quot;: &quot;Select option...&quot;,
                &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
                &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
                &quot;dropdownClasses&quot;: &quot;end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950&quot;,
                &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
                &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;,
              &quot;viewport&quot;: &quot;#hs-modal-share-body&quot;
              }" className="hidden">
                    <option value>Choose</option>
                    <option>Can view</option>
                    <option selected>Can edit</option>
                    <option>Admin</option>
                    <option>Remove</option>
                  </select>
                  <div className="absolute top-1/2 end-1.5 -translate-y-1/2">
                    <svg className="shrink-0 size-2.5 text-gray-600 dark:text-neutral-400" width={16} height={16} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                </div>
                {/* End Select */}
              </div>
              {/* End User */}
              {/* User */}
              <div className="w-full flex items-center gap-x-3">
                <img className="shrink-0 size-[38px] rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
                <div className="grow">
                  <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                    Crane
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-neutral-500">
                    crane@site.com
                  </span>
                </div>
                {/* Select */}
                <div className="relative">
                  <select data-hs-select="{
                &quot;placeholder&quot;: &quot;Select option...&quot;,
                &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
                &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
                &quot;dropdownClasses&quot;: &quot;end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950&quot;,
                &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
                &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;,
              &quot;viewport&quot;: &quot;#hs-modal-share-body&quot;
              }" className="hidden">
                    <option value>Choose</option>
                    <option selected>Can view</option>
                    <option>Can edit</option>
                    <option>Admin</option>
                    <option>Remove</option>
                  </select>
                  <div className="absolute top-1/2 end-1.5 -translate-y-1/2">
                    <svg className="shrink-0 size-2.5 text-gray-600 dark:text-neutral-400" width={16} height={16} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                  </div>
                </div>
                {/* End Select */}
              </div>
              {/* End User */}
            </div>
            {/* End Show More Collapse */}
            {/* User */}
            <div className="w-full flex items-center gap-x-3">
              <img className="shrink-0 size-[38px] rounded-full" src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
              <div className="grow">
                <span className="block text-sm font-medium text-gray-800 dark:text-neutral-300">
                  Anna Richard
                </span>
                <span className="block text-xs text-gray-500 dark:text-neutral-500">
                  anna@site.com
                </span>
              </div>
              {/* Select */}
              <div className="relative">
                <select data-hs-select="{
              &quot;placeholder&quot;: &quot;Select option...&quot;,
              &quot;toggleTag&quot;: &quot;<button type=\&quot;button\&quot; aria-expanded=\&quot;false\&quot;></button>&quot;,
              &quot;toggleClasses&quot;: &quot;hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-1.5 ps-2.5 pe-6 inline-flex shrink-0 justify-center items-center gap-x-1.5 text-xs text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 before:absolute before:inset-0 before:z-[1] dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700&quot;,
              &quot;dropdownClasses&quot;: &quot;end-0 mt-2 z-50 w-28 p-1 space-y-0.5 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:bg-neutral-950&quot;,
              &quot;optionClasses&quot;: &quot;hs-selected:bg-gray-100 dark:hs-selected:bg-neutral-800 py-1.5 px-2 w-full text-xs text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800&quot;,
              &quot;optionTemplate&quot;: &quot;<div class=\&quot;flex justify-between items-center w-full\&quot;><span data-title></span><span class=\&quot;hidden hs-selected:block\&quot;><svg class=\&quot;shrink-0 size-3.5 text-gray-800 dark:text-neutral-200\&quot; xmlns=\&quot;http:.w3.org/2000/svg\&quot; width=\&quot;24\&quot; height=\&quot;24\&quot; viewBox=\&quot;0 0 24 24\&quot; fill=\&quot;none\&quot; stroke=\&quot;currentColor\&quot; stroke-width=\&quot;2\&quot; stroke-linecap=\&quot;round\&quot; stroke-linejoin=\&quot;round\&quot;><polyline points=\&quot;20 6 9 17 4 12\&quot;/></svg></span></div>&quot;,
              &quot;viewport&quot;: &quot;#hs-modal-share-body&quot;
            }" className="hidden">
                  <option value>Choose</option>
                  <option>Can view</option>
                  <option selected>Can edit</option>
                  <option>Admin</option>
                  <option>Remove</option>
                </select>
                <div className="absolute top-1/2 end-1.5 -translate-y-1/2">
                  <svg className="shrink-0 size-3.5 text-gray-600 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>
              {/* End Select */}
            </div>
            {/* End User */}
          </div>
          {/* End Body */}
          {/* Subfooter */}
          <div className="p-4 border-t border-gray-200 dark:border-neutral-800">
            <span className="block text-xs font-medium text-gray-800 mb-2 dark:text-neutral-300">
              Share read-only link
            </span>
            {/* Input Form */}
            <div className="flex items-center gap-x-2">
              <input id="hs-pro-share-input-modal" type="text" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm placeholder:text-gray-400 focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder:text-neutral-500 dark:focus:ring-neutral-600" readOnly defaultValue="https://www.figma.com/community/file/1179068859697769656" />
              <button type="button" className="js-clipboard [--is-toggle-tooltip:false] hs-tooltip size-[38px] shrink-0 inline-flex justify-center items-center gap-x-2 rounded-lg border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-200 dark:focus:bg-neutral-600" data-clipboard-target="#hs-pro-share-input-modal" data-clipboard-action="copy" data-clipboard-success-text="Copied">
                <svg className="js-clipboard-default shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <rect width={14} height={14} x={8} y={8} rx={2} ry={2} />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                <svg className="js-clipboard-success hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity hidden invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-lg shadow-sm dark:bg-neutral-700" role="tooltip">
                  <span className="js-clipboard-success-text">Copy</span>
                </span>
              </button>
            </div>
            {/* End Input Form */}
          </div>
          {/* End Subfooter */}
          {/* Footer */}
          <div className="p-4 border-t border-gray-200 dark:border-neutral-700">
            <a className="inline-flex items-center gap-x-1.5 text-xs text-gray-500 hover:underline font-medium focus:outline-none focus:underline dark:text-blue-400 dark:hover:text-blue-500" href="#">
              <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <circle cx={12} cy={12} r={10} />
                <path d="M12 16v-4" />
                <path d="M12 8h.01" />
              </svg>
              Read more about share
            </a>
          </div>
          {/* End Footer */}
        </div>
      </div>
    </div>
  );
};

export default InvitationModal;