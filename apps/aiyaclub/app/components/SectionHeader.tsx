import { ReactNode } from "react";

interface SectionHeaderProps {
  title: string;
  className?: string;
  children?: ReactNode;
}

export const SectionHeader = ({ title, className = "", children }: SectionHeaderProps) => (
  <h2 className={`text-xl font-semibold mb-4 pl-3 border-l-4 border-blue-500 ${className}`}>
    {title}
    {children}
  </h2>
);
