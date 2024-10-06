import { useNavigate, useOutletContext } from '@remix-run/react';
import React, { useEffect, useMemo } from 'react';
import AdsList from '~/components/AdsList';
import Header1 from '~/components/headers/Header1';
import Loading from '~/components/Loading';
import MyVoucher from '~/components/MyVoucher';
import { useLiff } from '~/hooks/useLiff';
import { useListQAds } from '~/hooks/useListQAds';
import { QueQNS } from '~/types/app';
import { PageLiff } from '~/types/page';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()
  const { data: ads, isLoading } = useListQAds()
  const navigate = useNavigate()
  useLiff({ liffId: page?.liff_id })

  const handleAdClick = (ad: QueQNS.Ad) => {
    navigate(`./${ad.ads_code}`)
  }

  const getTabClass = useMemo(() => {
    const bgColor = "#47B383";

    return (isActive: boolean) => {
      return `hs-tab-active:font-semibold hs-tab-active:border-[${bgColor}] hs-tab-active:text-[${bgColor}] py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-[${bgColor}] focus:outline-none focus:text-[${bgColor}] disabled:opacity-50 disabled:pointer-events-none ${isActive ? 'active' : ''}`;
    };
  }, [page]);


  useEffect(() => {
    async function initializePreline() {
      const { HSStaticMethods, HSOverlay, HSTabs } = await import('preline/preline');
      setTimeout(() => {
        HSStaticMethods.autoInit();
        HSOverlay.autoInit();
        HSTabs.autoInit();
      }, 1000);
    }
    if (page) {
      initializePreline();
    }
  }, [page]);

  return (
    <>
      <Header1 backgroundColor={page?.bg_color} color={page?.fore_color} />
      <>
        <div className="border-b border-gray-200">
          <nav
            className="-mb-0.5 flex justify-center gap-x-6"
            aria-label="Tabs"
            role="tablist"
            aria-orientation="horizontal"
          >
            <button
              type="button"
              className={getTabClass(true)}
              id="horizontal-alignment-item-1"
              aria-selected="true"
              data-hs-tab="#horizontal-alignment-1"
              aria-controls="horizontal-alignment-1"
              role="tab"
            >
              Voucher
            </button>
            <button
              type="button"
              className={getTabClass(false)}
              id="horizontal-alignment-item-2"
              aria-selected="false"
              data-hs-tab="#horizontal-alignment-2"
              aria-controls="horizontal-alignment-2"
              role="tab"
            >
              My Voucher
            </button>
          </nav>
        </div>
        <div className="mt-3 px-3">
          <div
            id="horizontal-alignment-1"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-1"
          >
            {isLoading ? <Loading /> :
              <AdsList ads={ads} onAdClick={handleAdClick} />
            }
          </div>
          <div
            id="horizontal-alignment-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-2"
          >
            <MyVoucher />
          </div>
        </div>
      </>
    </>
  );
};

export default route;



