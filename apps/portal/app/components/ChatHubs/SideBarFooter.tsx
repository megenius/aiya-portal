import React from "react";

export const SideBarFooter = () => (
  <footer className="w-16 space-y-3 pt-4">
    <div className="hidden lg:block">
      {/* Project Dropdown */}
      <div className="inline-flex justify-center w-full">
        <div className="hs-dropdown relative [--strategy:absolute] [--placement:bottom-left] inline-flex">
          <button id="hs-pro-dnwpd" type="button" className="flex justify-center items-center gap-x-3 size-8 mx- rounded-lg hover:bg-gray-300 focus:bg-gray-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
            <img className="shrink-0 size-8 rounded-md object-cover" src="/assets/img/logo/hs.png" alt="Logo" />
            <span className="sr-only">Workspace</span>
          </button>
          {/* Dropdown menu content - omitted for brevity */}
        </div>
      </div>
    </div>
    
    {/* Account Dropdown */}
    <div className="inline-flex justify-center w-full">
      <div className="hs-dropdown relative [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] inline-flex">
        <button id="hs-pro-chmsad" type="button" className="flex justify-center items-center gap-x-3 size-8 text-start disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          <img className="shrink-0 rounded-full" src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80" alt="Avatar" />
          <span className="absolute -bottom-0 -end-0 block size-2 rounded-full ring-2 ring-gray-100 bg-green-500 dark:ring-neutral-800" />
        </button>
        {/* Account dropdown menu content - omitted for brevity */}
      </div>
    </div>
  </footer>
);
