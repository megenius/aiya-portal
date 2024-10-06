import { useOutletContext, useParams } from '@remix-run/react';
import React from 'react';
import AdViewer from '~/components/AdViewer';
import HeaderNavBar from '~/components/HeaderNavBar';
import Header1 from '~/components/headers/Header1';
import Loading from '~/components/Loading';
import { useGetQAd } from '~/hooks/useGetQAd';
import { PageLiff } from '~/types/page';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()
  const { adId } = useParams()
  const { data: ad, isLoading } = useGetQAd({ adId: adId as string })

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <HeaderNavBar title={"Deal"} />
      <div className='p-2'>
        <AdViewer ad={ad} />
      </div>
    </>
  );
};

export default route;

