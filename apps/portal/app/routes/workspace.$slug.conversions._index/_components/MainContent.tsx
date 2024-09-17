import { Link, Outlet, useParams } from '@remix-run/react';
import React, { Suspense } from 'react';
import { cn, isRouteActive } from "@repo/ui/utils"
import Dashboard from './Dashboard';
import { ClientOnly } from 'remix-utils/client-only';

interface MainContentProps {
}

const MainContent: React.FC<MainContentProps> = () => {
  const { id } = useParams()
  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default MainContent;
