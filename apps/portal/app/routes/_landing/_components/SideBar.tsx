import { Link, useNavigate } from "@remix-run/react";
import { LogoAiya } from "@repo/ui/LogoAiya";
import { sidebarLinks } from "./SidebarConfig";

interface SideBarProps {
}

const SideBar: React.FC<SideBarProps> = () => {
  const navigate = useNavigate()

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
                {sidebarLinks.map((link) => (
                  <li key={link.to}
                    className="hs-accordion px-5 mb-1.5" id={link.label}>
                    <button
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:bg-gray-100 w-full text-start flex gap-x-3 py-2 px-3 text-sm text-gray-800 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:bg-neutral-700 focus:outline-none focus:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-300 dark:focus:bg-neutral-700"
                      onClick={() => navigate(link.to)}
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
                        >
                          <ul
                            className="hs-accordion-group ps-7 mt-1.5 space-y-1.5 relative before:absolute before:top-0 before:start-[18px] before:w-0.5 before:h-full before:bg-gray-100 dark:before:bg-neutral-700"
                            data-hs-accordion-always-open=""
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
                ))}
              </ul>
            </nav>
            {/* End Nav */}
          </div>
          {/* End Content */}

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
