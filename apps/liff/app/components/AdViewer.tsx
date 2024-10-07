import { format, formatDistance } from 'date-fns';
import React, { useMemo } from 'react';
import { QueQNS } from '~/types/app';
import { th } from 'date-fns/locale'
import Footer from './Footer';
import { useOutletContext } from '@remix-run/react';
import { PageLiff } from '~/types/page';

interface AdViewerProps {
  ad?: QueQNS.AdDetail
  onCollectCoupon?: (ad?: QueQNS.AdDetail) => void
}

const AdViewer: React.FC<AdViewerProps> = ({ ad, onCollectCoupon }) => {
  const { page } = useOutletContext<{ page: PageLiff }>()
  const canCollect = useMemo(() => {
    return ad?.barcode ? true : false
  }, [ad])

  return (
    <>
      <div className='flex flex-col w-full h-screen max-w-screen-sm mx-auto'>
        <div style={{ paddingBottom: 150 }} className='cursor-pointer bg-white'>
          <div className=''>
            <img src={ad?.ads_img_detail} alt={ad?.ads_name} className='border rounded-lg shadow-lg' />
          </div>
          <div className='mt-4'>
            <div className='text-2xl font-bold px-2 py-3'>{ad?.ads_name}</div>
            {ad?.use_expire_datetime &&
              <div>
                <div className='text-gray-700 text-lg px-2'>จะหมดอายุใน {formatDistance(new Date(), new Date(ad.use_expire_datetime), { locale: th })}</div>
              </div>
            }
            <p className='text-gray-900 text-lg bg-slate-100 mx-1 mt-6 p-3 rounded-lg' dangerouslySetInnerHTML={{ __html: (ad?.ads_detail || "").replaceAll("\n", "<br/>") }} />
          </div>
        </div>

        {canCollect &&
          <Footer className="flex-none"
            bgColor={page?.bg_color}
            // bgColor={analyzer.isPending ? "#999999" : page.fore_color}
            height="h-20">
            <div className="w-full">
              <button
                // disabled={analyzer.isPending}
                // type="submit"
                // id={page.metadata?.tracking?.button?.id}
                onClick={() => onCollectCoupon && onCollectCoupon(ad)}
                className={"text-white rounded-none w-full h-14 text-xl font-semibold"} >
                {/* {analyzer.isPending ? "Analyzing..." : buttonText} */}
                เก็บคูปอง
              </button>
            </div>
          </Footer >
        }
      </div>
    </>
  );
};

export default AdViewer;