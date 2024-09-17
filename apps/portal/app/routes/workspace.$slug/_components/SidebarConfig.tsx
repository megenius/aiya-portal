import { CircleDollarSign } from "lucide-react";

// SidebarConfig.ts
export const sidebarLinks: SidebarLink[] = [
  {
    to: "dashboard",
    label: "Dashboard",
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
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    to: "conversions",
    label: "Conversions",
    icon: (
      <CircleDollarSign size={18}/>
    )
  },
  // {
  //   to: "engagements",
  //   label: "Engagements",
  //   icon: (
  //     <svg
  //       className="flex-shrink-0 mt-0.5 size-4"
  //       xmlns="http://www.w3.org/2000/svg"
  //       width={24}
  //       height={24}
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth={2}
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  //       <circle cx={9} cy={7} r={4} />
  //       <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  //       <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  //     </svg>
  //   )
  // },
  {
    to: "settings",
    label: "Settings",
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
        <circle cx={18} cy={15} r={3} />
        <circle cx={9} cy={7} r={4} />
        <path d="M10 15H6a4 4 0 0 0-4 4v2" />
        <path d="m21.7 16.4-.9-.3" />
        <path d="m15.2 13.9-.9-.3" />
        <path d="m16.6 18.7.3-.9" />
        <path d="m19.1 12.2.3-.9" />
        <path d="m19.6 18.7-.4-1" />
        <path d="m16.8 12.3-.4-1" />
        <path d="m14.3 16.6 1-.4" />
        <path d="m20.7 13.8 1-.4" />
      </svg>
    ),
    subLinks: [
      { to: "settings", label: "Workspace" },
      // { to: "/settings/integrations", label: "Integrations" },
      // { to: "/settings/plan", label: "Plan & Billing" },
      { to: "settings/members", label: "Members" },
      { to: "settings/channels", label: "Channels" },
    ],
  },
  // {
  //   to: "/account",
  //   label: "Account",
  //   icon: (
  //     <svg
  //       className="flex-shrink-0 mt-0.5 size-4"
  //       xmlns="http://www.w3.org/2000/svg"
  //       width={24}
  //       height={24}
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth={2}
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <circle cx={18} cy={15} r={3} />
  //       <circle cx={9} cy={7} r={4} />
  //       <path d="M10 15H6a4 4 0 0 0-4 4v2" />
  //       <path d="m21.7 16.4-.9-.3" />
  //       <path d="m15.2 13.9-.9-.3" />
  //       <path d="m16.6 18.7.3-.9" />
  //       <path d="m19.1 12.2.3-.9" />
  //       <path d="m19.6 18.7-.4-1" />
  //       <path d="m16.8 12.3-.4-1" />
  //       <path d="m14.3 16.6 1-.4" />
  //       <path d="m20.7 13.8 1-.4" />
  //     </svg>
  //   ),
  //   subLinks: [
  //     { to: "/settings", label: "Workspace" },
  //     // { to: "/settings/integrations", label: "Integrations" },
  //     // { to: "/settings/plan", label: "Plan & Billing" },
  //     { to: "/settings/members", label: "Users" },
  //   ],
  // },
  // {
  //   to: "/plan",
  //   label: "Plans",
  //   icon: (
  //     <svg
  //       className="flex-shrink-0 mt-0.5 size-4 text-blue-600 dark:text-blue-500"
  //       xmlns="http://www.w3.org/2000/svg"
  //       width={24}
  //       height={24}
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth={2}
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     >
  //       <circle cx={12} cy={12} r={10} />
  //       <path d="m16 12-4-4-4 4" />
  //       <path d="M12 16V8" />
  //     </svg>
  //   ),
  // },
  {
    to: "apps",
    label: "Apps",
    isDivider: true,
  },
  {
    to: "apps/ads",
    label: "AiAds",
    icon: (
      <span className="flex justify-center items-center size-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
        <svg
          className="flex-shrink-0 size-3"
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
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      </span>
    ),
  },
  // {
  //   to: "apps/beacons",
  //   label: "AiBeacon",
  //   icon: (
  //     <span className="flex justify-center items-center size-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
  //       <svg
  //         className="flex-shrink-0 size-3"
  //         xmlns="http://www.w3.org/2000/svg"
  //         width={24}
  //         height={24}
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth={2}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       >
  //         <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
  //         <path d="m3.3 7 8.7 5 8.7-5" />
  //         <path d="M12 22V12" />
  //       </svg>
  //     </span>
  //   ),
  // },
  {
    to: "apps/bots",
    label: "AiBots",
    icon: (
      <span className="flex justify-center items-center size-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
        <svg
          className="flex-shrink-0 size-3"
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
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      </span>
    ),
  },
  // {
  //   to: "apps/chats",
  //   label: "AiChat",
  //   icon: (
  //     <span className="flex justify-center items-center size-6 bg-blue-600 text-white rounded-md dark:bg-blue-500">
  //       <svg
  //         className="flex-shrink-0 size-3"
  //         xmlns="http://www.w3.org/2000/svg"
  //         width={24}
  //         height={24}
  //         viewBox="0 0 24 24"
  //         fill="none"
  //         stroke="currentColor"
  //         strokeWidth={2}
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //       >
  //         <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
  //         <path d="m3.3 7 8.7 5 8.7-5" />
  //         <path d="M12 22V12" />
  //       </svg>
  //     </span>
  //   ),
  // },
];

interface SidebarLink {
  to: string;
  label: string;
  icon?: JSX.Element;
  subLinks?: SidebarLink[];
  isDivider?: boolean;
}

