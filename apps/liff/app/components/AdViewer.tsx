import { format, formatDistance } from 'date-fns';
import React from 'react';
import { QueQNS } from '~/types/app';
import { th } from 'date-fns/locale'

interface AdViewerProps {
  ad?: QueQNS.AdDetail
}

const AdViewer: React.FC<AdViewerProps> = ({ ad }) => {

  return (
    <>
      <div className='flex flex-col w-full h-screen max-w-screen-sm mx-auto'>
        <div className='cursor-pointer bg-white'>
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
      </div>
    </>
  );
};

export default AdViewer;