import { useNavigate, useOutletContext } from '@remix-run/react';
import React from 'react';
import AdsList from '~/components/AdsList';
import Header1 from '~/components/headers/Header1';
import Loading from '~/components/Loading';
import MyVoucher from '~/components/MyVoucher';
import { useListQAds } from '~/hooks/useListQAds';
import { QueQNS } from '~/types/app';
import { PageLiff } from '~/types/page';

interface routeProps {

}

const route: React.FC<routeProps> = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()
  const { data: ads } = useListQAds()
  const navigate = useNavigate()

  const handleAdClick = (ad: QueQNS.Ad) => {
    navigate(`./${ad.ads_code}`)
  }

  return (
    <>
      <Header1 backgroundColor={page?.bg_color} color={page.fore_color} />
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
              className={`hs-tab-active:font-semibold hs-tab-active:border-[${page?.bg_color}] hs-tab-active:text-[${page?.bg_color}] py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-[${page?.bg_color}] focus:outline-none focus:text-[${page?.bg_color}] disabled:opacity-50 disabled:pointer-events-none active`}
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
              className={`hs-tab-active:font-semibold hs-tab-active:border-[${page?.bg_color}] hs-tab-active:text-[${page?.bg_color}] py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-[${page?.bg_color}] focus:outline-none focus:text-[${page?.bg_color}] disabled:opacity-50 disabled:pointer-events-none`}
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
            <AdsList ads={ads} onAdClick={handleAdClick} />
          </div>
          <div
            id="horizontal-alignment-2"
            className="hidden"
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-2"
          >
            <MyVoucher/>
          </div>
        </div>
      </>


    </>
  );
};

export default route;



