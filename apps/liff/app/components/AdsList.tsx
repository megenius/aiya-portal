import React from 'react';
import { QueQNS } from '~/types/app';

interface AdsListProps {
  ads?: Array<QueQNS.Ad>;
  onAdClick?: (ad: QueQNS.Ad) => void;
}

const MAX_LENGTH = 260;

const AdsList: React.FC<AdsListProps> = ({ ads, onAdClick }) => {


  return (
    <div className="flex flex-col w-full h-screen max-w-screen-sm mx-auto">
      <div className='flex flex-col gap-3'>
        {ads?.map((ad) => (
          <div key={ad.ads_code} className='cursor-pointer bg-white border shadow-sm rounded-lg' onClick={() => onAdClick && onAdClick(ad)}>
            <img src={ad.ads_img_cover} alt={ad.ads_name} className='rounded-t-lg' />
            <div className='p-2'>
              <div className='text-md font-bold'>{ad.ads_name}</div>
              {/* <p className='text-gray-400'>{ad.ads_detail?.slice(0, MAX_LENGTH) + "..."}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdsList;