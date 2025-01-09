import { Outlet } from '@remix-run/react';
import React from 'react';
import Header from './_components/Header';
import Footer from './_components/Footer';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default route;