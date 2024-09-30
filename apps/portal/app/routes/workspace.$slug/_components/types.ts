export interface SidebarLink {
  to: string;
  label: string;
  icon?: JSX.Element;
  subLinks?: SidebarLink[];
  isDivider?: boolean;
}
