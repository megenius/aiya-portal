import { useNavigate, useOutletContext, useSearchParams } from '@remix-run/react';
import { cn } from '@repo/ui/utils';
import React, { useEffect, useMemo } from 'react';
import AdsList from '~/components/AdsList';
import Footer from '~/components/Footer';
import Header1 from '~/components/headers/Header1';
import Loading from '~/components/Loading';
import MyVoucher from '~/components/MyVoucher';
import { useLiff } from '~/hooks/useLiff';
import { useListQAds } from '~/hooks/useListQAds';
import { QueQNS } from '~/types/app';
import { PageLiff } from '~/types/page';
interface routeProps {

}

type Tab = 'voucher' | 'my-voucher';

const route: React.FC<routeProps> = () => {
  const { page } = useOutletContext<{ page: PageLiff }>()
  const { data: ads, isLoading } = useListQAds()
  const navigate = useNavigate()
  const [search] = useSearchParams()
  const [tab, setTab] = React.useState<Tab>((search.get('tab') || 'voucher') as Tab);

  useLiff({ liffId: page?.liff_id })

  const handleAdClick = (ad: QueQNS.Ad) => {
    navigate(`./${ad.ads_code}`)
  }

  const getTabClass = useMemo(() => {
    const bgColor = "#47B383";

    return (isActive: boolean) => {
      return `hs-tab-active:font-semibold hs-tab-active:border-[#47B383] hs-tab-active:text-[#47B383] py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-[#47B383] focus:outline-none focus:text-[#47B383] disabled:opacity-50 disabled:pointer-events-none ${isActive ? 'active' : ''}`;
      // return `hs-tab-active:font-semibold  py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500  disabled:opacity-50 disabled:pointer-events-none ${isActive ? 'active' : ''}`;
    };
  }, [page]);

  return (
    <>
      <Header1 backgroundColor={page?.bg_color} color={page?.fore_color} />
      <div className='min-h-[calc(100vh-200px)]' style={{ paddingBottom: 150 }}>
        <div className="border-b border-gray-200">
          <nav
            className="-mb-0.5 flex justify-center gap-x-6"
            aria-label="Tabs"
            role="tablist"
            aria-orientation="horizontal"
          >
            <button
              type="button"
              className={getTabClass(tab === 'voucher')}
              // className={cn(
              //   'hs-tab-active:font-semibold  py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500  disabled:opacity-50 disabled:pointer-events-none',
              //   {
              //     'hs-tab-active:border-[#47B383] hs-tab-active:text-[#47B383] hover:text-[#47B383] focus:outline-none focus:text-[#47B383] active': tab === 'voucher'
              //   })}
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
              className={getTabClass(tab === 'my-voucher')}
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
            className={cn(
              {
                "hidden": tab !== 'voucher'
              },
            )}
            aria-labelledby="horizontal-alignment-item-1"
          >
            {isLoading ? <Loading /> :
              <AdsList ads={ads} onAdClick={handleAdClick} />
            }
          </div>
          <div
            id="horizontal-alignment-2"
            className={cn(
              {
                "hidden": tab !== 'my-voucher'
              }
            )}
            role="tabpanel"
            aria-labelledby="horizontal-alignment-item-2"
          >
            <MyVoucher />
          </div>
        </div>
      </div >
      <Footer fixed={false}>
        <div className='w-full flex justify-center'>
          <div className='text-sm text-gray-500'>Powered by AIYA.AI</div>
        </div>
      </Footer>
    </>
  );
};

export default route;



