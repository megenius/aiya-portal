import { Link, useNavigate, useParams } from "@remix-run/react";
import { LogoAiya } from "@repo/ui/LogoAiya";
import { sidebarLinks } from "./SidebarConfig";
import { Avatar } from "@repo/preline/Avatar";
import { getDirectusFileUrl } from "~/utils/files";
import { FeatureFlags, Workspace } from "~/@types/app";
import { useMe } from "~/hooks/useMe";
import { useWorkspace } from "~/hooks/workspace";
import { useEffect, useMemo, useState } from "react";
import { SidebarLink } from "./types";

interface SideBarProps {
  workspaces: Workspace[]
  workspace?: Workspace
}

const DEFAULT_FEATURE_FLAGS: FeatureFlags = {
  feature_dashboard: false,
  feature_products: false,
  feature_engagements: false,
  feature_orders: false,
  feature_conversions: false,
  feature_customers: false,
  feature_apps_ads: true,
  feature_apps_beacons: false,
  feature_apps_bots: true,
  feature_apps_chats: false,
  feature_apps_orderbots: true,
  feature_apps_vourchers: false
}

const SideBar: React.FC<SideBarProps> = ({ workspaces, workspace }) => {
  const navigate = useNavigate()
  const { data: user } = useMe()
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags>(DEFAULT_FEATURE_FLAGS);

  useEffect(() => {
    if (workspace && workspace.feature_flags) {
      setFeatureFlags({
        ...DEFAULT_FEATURE_FLAGS,
        ...workspace.feature_flags
      });
    }
    console.log(workspace);
    
  }, [workspace]);

  useEffect(() => {
    console.log(featureFlags);
    
  }, [featureFlags]);

  const filteredSidebarLinks = sidebarLinks.filter(link => {
    if (link.to.startsWith('apps/')) {
      const appFeature = link.to.replace('apps/', 'feature_apps_');
      console.log(appFeature);
      return featureFlags[appFeature as keyof FeatureFlags] !== false;
    } else {
      const featureName = `feature_${link.to}` as keyof FeatureFlags;
      return featureFlags[featureName] !== false;
    }
  });

  const handleSignOut = () => {
    navigate("/sign-out")
  }


  return (
    <>
      {/* ========== MAIN SIDEBAR ========== */}
      <aside
        id="hs-pro-sidebar"
        className="hs-overlay [--auto-close:lg]
          hs-overlay-open:translate-x-0
          -translate-x-full transition-all duration-300 transform
          w-[260px] h-full
          hidden
          fixed inset-y-0 start-0 z-[60]
          bg-white border-e border-gray-200
          lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
          dark:bg-neutral-800 dark:border-neutral-700"
      >
        <div className="relative flex flex-col h-full max-h-full pt-3">
          <header className="h-[46px] py-0.5 px-5">
            {/* Logo */}
            <Link to="/">
              <LogoAiya />
            </Link>
            {/* End Logo */}
          </header>
          {/* Content */}
          <div className="mt-1.5 h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            {/* Nav */}
            <nav
              className="hs-accordion-group pb-3  w-full flex flex-col flex-wrap"
              data-hs-accordion-always-open=""
            >
              <ul>
                {filteredSidebarLinks.map((link) => {
                  if (link.isDivider) {
                    return (
                      <li
                        className="hs-accordion px-5 mb-1.5" id={link.label}>
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:bg-gray-100 w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                          onClick={() => {

                          }}
                        >
                          {link.icon}
                          {link.label}
                        </button>
                      </li>
                    )
                  }

                  return (
                    <li key={link.to}
                      className="hs-accordion px-5 mb-1.5" id={link.label}>
                      <button
                        type="button"
                        className="hs-accordion-toggle hs-accordion-active:bg-gray-100 w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                        onClick={() => {
                          if (!link.subLinks) {
                            navigate(link.to)
                          }
                        }}
                      >
                        {link.icon}
                        {link.label}

                        {link.subLinks && (
                          <svg
                            className="hs-accordion-active:-rotate-180 flex-shrink-0 mt-1 size-3.5 ms-auto transition"
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
                        )}
                      </button>
                      {link.subLinks && (
                        <>
                          <div
                            id={`${link.label}-sub`}
                            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300 hidden  "
                            role="region" aria-labelledby="account-accordion"
                          >
                            <ul
                              className="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                            // data-hs-accordion-always-open=""
                            >
                              {link.subLinks.map((subLink) => (
                                <li key={subLink.to} className="px-5 mb-1.5">
                                  <Link
                                    to={`${subLink.to}`}
                                    className="flex gap-x-4 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                                  >
                                    {subLink.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      )}
                    </li>
                  )
                })}
              </ul>
            </nav>
            {/* End Nav */}
          </div>
          {/* End Content */}

          <footer className="hidden lg:block border-t border-gray-200 dark:border-neutral-700">
            {/* Project Dropdown */}
            <div className="px-7 ">
              <div className="hs-dropdown [--auto-close:inside] relative flex">
                {/* Project Button */}
                <button
                  id="hs-pro-dnwpd"
                  type="button"
                  className="group w-full inline-flex items-center py-3 text-start text-gray-800 align-middle disabled:opacity-50 disabled:pointer-events-none focus:outline-none dark:text-white"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Dropdown"
                >
                  <Avatar src={getDirectusFileUrl(workspace?.avatar as string)} />
                  <span className="block ms-3">
                    <span className="block text-sm font-medium text-gray-800 group-hover:text-blue-600 group-focus-hover:text-blue-600 dark:text-neutral-200 dark:group-hover:text-blue-600 dark:group-focus-hover:text-blue-600">
                      {workspace?.name}
                    </span>
                    <span className="block text-xs text-gray-500 dark:text-neutral-500">
                      {workspace?.slug}
                    </span>
                  </span>
                  <svg
                    className="shrink-0 size-3.5 ms-auto"
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
                    <path d="m7 15 5 5 5-5" />
                    <path d="m7 9 5-5 5 5" />
                  </svg>
                </button>
                {/* End Project Button */}
                {/* Dropdown */}
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-60 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  aria-labelledby="hs-pro-dnwpd"
                >
                  <div className="p-1 space-y-0.5">
                    {workspaces?.slice(0, 5).map(workspace => (
                      <Link
                        key={workspace.id}
                        reloadDocument
                        className="py-2 px-3 block w-full text-start rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        to={`/workspace/${workspace.slug}`}
                      >
                        <div className="flex gap-x-2 items-center">
                          <Avatar src={getDirectusFileUrl(workspace.avatar as string)} firstName={workspace.name || ""} size={30} />
                          <div className="grow">
                            <p className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                              {workspace?.name}
                            </p>
                          </div>
                          <div className="ms-auto self-center">
                            <svg
                              className="hidden flex-shrink-0 size-4"
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
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      data-hs-overlay="#hs-pro-create-workspace-modal"
                    >
                      <svg
                        className="flex-shrink-0 size-4"
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
                        <circle cx={12} cy={12} r={10} />
                        <path d="M8 12h8" />
                        <path d="M12 8v8" />
                      </svg>
                      Add another workspace
                    </button>
                  </div>
                  <div className="p-1 border-t border-gray-200 dark:border-neutral-800">
                    <button
                      type="button"
                      className="w-full flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 disabled:opacity-50 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      onClick={handleSignOut}
                    >
                      Sign out
                      <span className="ms-auto text-xs text-gray-500 dark:text-neutral-500">
                        {user?.email}
                      </span>
                    </button>
                  </div>
                </div>
                {/* End Dropdown */}
              </div>
            </div>
            {/* End Project Dropdown */}
          </footer>


          <div className="lg:hidden absolute top-3 -end-3 z-10">
            {/* Sidebar Close */}
            <button
              type="button"
              className="w-6 h-7 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
              data-hs-overlay="#hs-pro-sidebar"
              aria-controls="hs-pro-sidebar"
              aria-label="Toggle navigation"
            >
              <svg
                className="flex-shrink-0 size-4"
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
                <polyline points="7 8 3 12 7 16" />
                <line x1={21} x2={11} y1={12} y2={12} />
                <line x1={21} x2={11} y1={6} y2={6} />
                <line x1={21} x2={11} y1={18} y2={18} />
              </svg>
            </button>
            {/* End Sidebar Close */}
          </div>
        </div>
      </aside>
      {/* ========== END MAIN SIDEBAR ========== */}
    </>
  );
};

export default SideBar;



function mapFeatureFlagsToSidebarLinks(
  featureFlags: Record<string, boolean>,
  links: SidebarLink[]
): SidebarLink[] {
  return links.filter(link => {
    const featureName = `feature_${link.to}`;
    return featureFlags[featureName] !== false; // Show link if feature is undefined or true
  });
}
