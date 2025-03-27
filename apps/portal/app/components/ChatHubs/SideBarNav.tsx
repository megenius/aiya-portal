import React from "react";
import { NavItem } from "./NavItem";
import { useLocation } from "@remix-run/react";

export const SideBarNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  const isActive = (href: string): boolean => {
    return currentPath.includes(`/${href}`);
  };

  return (
    <div className="w-16 h-full flex flex-col pt-2 pb-4">
      <ul className="text-center space-y-4">
        <NavItem
          icon={
            <svg className="shrink-0 size-4 group-hover:scale-110 mx-auto transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          }
          label="Inbox"
          href="../inbox"
          active={isActive('inbox')}
          notificationCount={4}
        />

        <NavItem
          icon={
            <svg className="shrink-0 size-4 group-hover:scale-110 mx-auto transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
              <path d="M13 5v2" />
              <path d="M13 17v2" />
              <path d="M13 11v2" />
            </svg>
          }
          label="Tickets"
          href="../tickets"
          active={isActive('tickets')}
        />
        
        <NavItem
          icon={
            <svg className="shrink-0 size-4 group-hover:scale-110 mx-auto transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
              <path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17" />
              <path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
              <circle cx={12} cy={12} r={10} />
            </svg>
          }
          label="Visitors"
          href="../visitors"
          active={isActive('visitors')}
        />

        <NavItem
          icon={
            <svg className="shrink-0 size-4 group-hover:scale-110 mx-auto transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
            </svg>
          }
          label="Activity"
          href="../activity"
          active={isActive('activity')}
        />

        <NavItem
          icon={
            <svg className="shrink-0 size-4 group-hover:scale-110 mx-auto transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <line x1={18} x2={18} y1={20} y2={10} />
              <line x1={12} x2={12} y1={20} y2={4} />
              <line x1={6} x2={6} y1={20} y2={14} />
            </svg>
          }
          label="Reports"
          href="../reports"
          active={isActive('reports')}
        />

        <li>
          <div className="hs-dropdown [--strategy:absolute] [--placement:bottom-right] [--auto-close:inside] relative inline-flex">
            <button id="hs-pro-chmsnmd" type="button" className="relative group flex flex-col justify-center items-center gap-y-1 text-[11px] text-gray-600 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              <span className="flex justify-center items-center gap-x-3 size-9 rounded-lg group-hover:bg-gray-300 group-focus:bg-gray-300 dark:group-hover:bg-neutral-800 dark:group-focus:bg-neutral-800">
                <svg className="shrink-0 size-4 group-hover:scale-110 mx-auto transition" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7h-9" />
                  <path d="M14 17H5" />
                  <circle cx={17} cy={17} r={3} />
                  <circle cx={7} cy={7} r={3} />
                </svg>
              </span>
              Settings
            </button>
            {/* Dropdown menu content - omitted for brevity */}
          </div>
        </li>
      </ul>
    </div>
  );
};
