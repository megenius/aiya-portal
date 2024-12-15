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
    )
  },
];

interface SidebarLink {
  to: string;
  label: string;
  icon: JSX.Element | null;
  subLinks?: SidebarLink[];
  isDivider?: boolean;
}