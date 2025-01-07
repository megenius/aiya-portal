import { Outlet } from '@remix-run/react';
import React from 'react';
import Header from './_components/Header';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Outlet />
    </div>
  );
};

export default route;