import { useNavigate, useOutletContext, useParams } from '@remix-run/react';
import React from 'react';
import AdViewer from '~/components/AdViewer';
import Footer from '~/components/Footer';
import HeaderNavBar from '~/components/HeaderNavBar';
import Header1 from '~/components/headers/Header1';
import Loading from '~/components/Loading';
import { useGetQAd } from '~/hooks/useGetQAd';
import { useLiff } from '~/hooks/useLiff';
import { QueQNS } from '~/types/app';
import { PageLiff } from '~/types/page';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()
  const { adId } = useParams()
  const { data: ad, isLoading } = useGetQAd({ adId: adId as string })
  const { language, isLoggedIn } = useLiff({ liffId: page.liff_id });
  const isThaiLanguage = language.startsWith('th');
  const buttonText = isThaiLanguage ? page.metadata.btnTextTH : page.metadata.btnTextEN;
  const navigate = useNavigate()

  const handleCollectCoupon = async (ad?: QueQNS.AdDetail) => {
    // if (ad?.barcode) {
    navigate(`../?tab=my-voucher`)
    // }
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <HeaderNavBar title={"Deal"} />
      <div className='p-2'>
        <AdViewer ad={ad} onCollectCoupon={handleCollectCoupon} />
      </div>
    </>
  );
};

export default route;

