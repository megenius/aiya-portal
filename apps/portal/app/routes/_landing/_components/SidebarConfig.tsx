import { } from 'lucide-react'


// SidebarConfig.ts
export const sidebarLinks: SidebarLink[] = [
  {
    to: "/",
    label: "Workspaces",
    icon: (
      <svg
        className="flex-shrink-0 mt-0.5 size-4 dark:text-blue-500 active:text-blue-600"
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
        <rect width="7" height="7" x="14" y="3" rx="1" /><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
      </svg>
    ),
  },

  {
    to: "/profile",
    label: "My Account",
    icon: (
      <svg
        className="flex-shrink-0 mt-0.5 size-4"
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
        <circle cx={12} cy={10} r={3} />
        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
      </svg>
    )
  },
  {
    to: "/plans",
    label: (
      <span className="bg-clip-text bg-gradient-to-tr from-blue-600 to-purple-600 to-80% text-transparent dark:from-blue-500 dark:to-purple-500">
        Plans
      </span>
    ),
    icon: (
      <svg className="shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="m16 12-4-4-4 4" />
        <path d="M12 16V8" />
      </svg>
    )
  },
  {
    to: "/billing",
    label: "Billing",
    icon: (
      <svg
        className="flex-shrink-0 mt-0.5 size-4"
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
        <rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
        <line x1={1} y1={10} x2={23} y2={10} />
      </svg>
    ),
  },
  {
    to: "/credits",
    label: "Credits",
    icon: (
      <svg
        className="flex-shrink-0 mt-0.5 size-4"
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
        <rect x="3" y="8" width="18" height="4" rx="1" /><path d="M12 8v13" /><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
      </svg>
    )
  },
  {
    to: "/affiliates",
    label: "Affiliates Program",
    icon: (
      <svg
        className="flex-shrink-0 mt-0.5 size-4"
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
        <circle cx="12" cy="12" r="10" /><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" /><path d="M12 18V6" />
      </svg>
    )
  },
];

interface SidebarLink {
  to: string;
  label: JSX.Element | string;
  icon: JSX.Element | null;
  subLinks?: SidebarLink[];
  isDivider?: boolean;
}