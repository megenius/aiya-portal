import { Link, Outlet, useParams } from '@remix-run/react';
import React from 'react';
import { cn, isRouteActive } from "@repo/ui/utils"

interface MainContentProps {
  children: React.ReactNode;
}

interface NavItem {
  label: string;
  to: string;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const { slug } = useParams()

  const navItems: NavItem[] = [
    { label: 'Workspace', to: `/workspace/${slug}/settings` },
    // { label: 'Integrations', to: `/workspace/${slug}/settings/integrations` },
    // { label: 'Plan & Billing', to: `/workspace/${slug}/settings/plan` },
    { label: 'Members', to: `/workspace/${slug}/settings/members` },
    { label: 'Channels', to: `/workspace/${slug}/settings/channels` },
  ];

  return (
    <>
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        <div className="w-full flex flex-row whitespace-nowrap overflow-x-auto overflow-y-hidden pb-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          {navItems.map((item, index) => (
            <AcccountNavLink
              key={index}
              label={item.label}
              url={item.to}
              activePath={window.location.pathname} />
          ))}
        </div>
        {children}
      </div>
    </>
  );
};

export default MainContent;




function AcccountNavLink({
  label,
  url,
  activePath,
}: {
  label: string;
  url: string;
  activePath: string;
}) {
  const isCurrent = isRouteActive(url, activePath, true);
  return (
    <Link
      to={url}
      className={cn("py-2 px-3 inline-flex items-center gap-x-2 text-sm whitespace-nowrap border border-transparent text-gray-800 hover:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400", {
        "bg-white border-gray-200! focus:text-gray-800 shadow-xs dark:bg-neutral-800 dark:border-neutral-700! dark:focus:text-neutral-200": isCurrent
      })}
    >
      {label}
    </Link>
  );
}