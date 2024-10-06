import { Outlet, useOutletContext } from '@remix-run/react';
import React, { useEffect } from 'react';
import { PageLiff } from '~/types/page';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()


  useEffect(() => {
    async function initializePreline() {
      const { HSStaticMethods, HSAccordion, HSOverlay, HSTabs } = await import('preline/preline');
      setTimeout(() => {
        HSStaticMethods.autoInit();
        HSOverlay.autoInit();
        HSTabs.autoInit();
      }, 500);
    }

    initializePreline();
  }, [page]);

  return (
    <>
      <Outlet context={{ page }} />
    </>
  );
};

export default route;
