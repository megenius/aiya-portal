import { Link, Outlet, useParams } from '@remix-run/react';
import React from 'react';
import { cn, isRouteActive } from "@repo/ui/utils"

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  const { id } = useParams()
  return (
    <>
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        {children}
      </div>
    </>
  );
};

export default MainContent;

