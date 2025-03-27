import { Link } from "@remix-run/react";
import React, { ReactNode } from "react";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  href: string;
  active?: boolean;
  notificationCount?: number;
}

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  label,
  href,
  active = false,
  notificationCount
}) => {
  return (
    <li>
      <Link
        className={`relative group flex flex-col justify-center items-center gap-y-1 text-[11px] text-gray-600 dark:text-neutral-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden`}
        to={href}
      >
        <span className={`flex justify-center items-center gap-x-3 size-9 rounded-lg ${active ? 'bg-gray-300 dark:bg-neutral-800' : 'group-hover:bg-gray-300 group-focus:bg-gray-300 dark:group-hover:bg-neutral-800 dark:group-focus:bg-neutral-800'} transition`}>
          {icon}
        </span>
        {label}
        {notificationCount && (
          <span className="flex absolute -top-1 end-2 z-10">
            <span className="relative min-w-4 min-h-4 inline-flex justify-center items-center text-[10px] bg-red-500 text-white rounded-full px-1">
              {notificationCount}
            </span>
          </span>
        )}
      </Link>
    </li>
  );
};
