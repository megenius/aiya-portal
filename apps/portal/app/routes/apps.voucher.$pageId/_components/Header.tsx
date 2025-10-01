import { Link } from "@remix-run/react";
import { Avatar } from "@repo/preline/Avatar";
import { LogoAiya } from "@repo/ui/LogoAiya";
import { cn, isRouteActive } from "@repo/ui/utils";
import React from "react";
import { components } from "~/@types/directus";
import { useMe } from "~/hooks/useMe";
import { getDirectusFileUrl } from "~/utils/files";
import { useWorkspace } from "~/hooks/workspace";

type PageLiff = components["schemas"]["ItemsPagesLiff"];

interface HeaderProps {
  voucherPage: PageLiff;
}

interface NavItem {
  label: string;
  to: string;
}

const Header: React.FC<HeaderProps> = ({ voucherPage }) => {
  const voucherId = voucherPage.id;
  const { data: user } = useMe();

  // Resolve team id from string or populated object
  const resolveTeamId = (team: components["schemas"]["ItemsPagesLiff"]["team"]) => {
    if (typeof team === "string") return team;
    if (team && typeof team === "object" && "id" in team) {
      const maybeId = (team as { id?: unknown }).id;
      if (typeof maybeId === "string") return maybeId;
    }
    return undefined;
  };

  const teamId = resolveTeamId(voucherPage?.team as components["schemas"]["ItemsPagesLiff"]["team"]);
  const { data: workspace } = useWorkspace({ id: teamId });
  const backTo = workspace?.slug ? `/workspace/${workspace.slug}/apps/vouchers` : "/workspace/vouchers";

  console.log(voucherPage);

  const navItems: NavItem[] = [
    { label: "Dashboard", to: `/apps/voucher/${voucherId}/dashboard` },
    { label: "Vouchers", to: `/apps/voucher/${voucherId}/vouchers` },
    { label: "Users", to: `/apps/voucher/${voucherId}/users` },
    // { label: 'Settings', to: `/apps/voucher/${voucherId}/settings` },
  ];

  return (
    <header className="flex flex-col">
      <div className="bg-gray-800 border-b border-gray-700 dark:bg-black dark:border-neutral-800">
        <div className="max-w-[85rem] flex justify-between lg:grid lg:grid-cols-2 basis-full items-center w-full mx-auto py-2.5 px-2 sm:px-6 lg:px-8">
          <div className="flex items-center gap-x-3">
            <Link to={backTo}>
              <LogoAiya
                colors={{
                  path1: "white",
                  path2: "white",
                  path3: "white",
                  path4: "white",
                  path5: "white",
                  path6: "white",
                }}
              />
            </Link>
          </div>
          <div className="flex justify-end items-center gap-x-2">
            <div className="hs-dropdown inline-flex [--strategy:absolute] [--auto-close:inside] [--placement:bottom-right] relative text-start">
              <button
                id="hs-dnad"
                type="button"
                className="inline-flex shrink-0 items-center gap-x-3 text-start rounded-full focus:outline-hidden"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <Avatar
                  src={getDirectusFileUrl(user?.avatar as string)}
                  firstName={user?.first_name}
                />
              </button>
              <div
                className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-20 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dnad"
              >
                <div className="p-1 border-b border-gray-200 dark:border-neutral-800">
                  <Link
                    className="py-2 px-3 flex items-center gap-x-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    to={"/profile"}
                  >
                    <Avatar
                      src={getDirectusFileUrl(user?.avatar as string)}
                      firstName={user?.first_name}
                    />
                    <div className="grow">
                      <span className="text-sm font-semibold text-gray-800 dark:text-neutral-300">
                        {user?.first_name} {user?.last_name}
                      </span>
                    </div>
                  </Link>
                </div>
                <div className="px-1 py-2">
                  <Link
                    className="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                    to={"/sign-out"}
                  >
                    Sign out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="relative bg-white border-b border-gray-200 dark:bg-neutral-900 dark:border-neutral-800">
        <div className="max-w-[85rem] flex flex-wrap basis-full justify-between items-center w-full mx-auto md:py-2.5 px-4 sm:px-6 lg:px-8">
          <div className="basis-full grow md:basis-auto md:grow-0">
            <div
              id="hs-pro-dmh"
              className="hs-collapse hidden overflow-hidden transition-all duration-300 md:block"
              aria-labelledby="hs-pro-dmh-collapse"
            >
              <div className="md:flex md:flex-wrap md:items-center md:gap-x-1 py-2 md:py-0 space-y-0.5 md:space-y-0">
                {navItems.map((item, index) => (
                  <NavLink
                    key={index}
                    label={item.label}
                    url={item.to}
                    activePath={window.location.pathname}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="hs-dropdown [--auto-close:inside] [--placement:top-right] relative flex">
              <button
                id="hs-pro-dnwpd"
                type="button"
                className="inline-flex items-center text-start text-sm font-medium text-stone-800 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:text-stone-500 dark:text-white dark:focus:text-neutral-200"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <Avatar
                  src={
                    voucherPage?.image
                      ? getDirectusFileUrl(voucherPage.image as string)
                      : ""
                  }
                  firstName={voucherPage?.name as string}
                />
                <span className="ms-1">{voucherPage?.name}</span>
                <svg
                  className="shrink-0 size-4 ms-1"
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
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

function NavLink({
  label,
  url,
  activePath,
}: {
  label: string;
  url: string;
  activePath: string;
}) {
  const isCurrent = isRouteActive(url, activePath, false);
  return (
    <Link
      to={url}
      className={cn(
        "py-2 px-3 md:px-2.5 xl:px-2 flex items-center gap-x-2 text-sm text-start text-nowrap text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-800/40 dark:focus:bg-neutral-800",
        {
          "bg-gray-100 focus:bg-gray-200 dark:bg-neutral-800 dark:focus:bg-neutral-600":
            isCurrent,
        }
      )}
    >
      {label}
    </Link>
  );
}
