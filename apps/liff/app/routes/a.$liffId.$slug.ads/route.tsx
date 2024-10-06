import { Outlet, useOutletContext } from '@remix-run/react';
import React from 'react';
import { PageLiff } from '~/types/page';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()

  return (
    <>
      <Outlet context={{ page }} />
    </>
  );
};

export default route;
