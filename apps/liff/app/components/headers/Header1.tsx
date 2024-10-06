import React from 'react';
import { useLineProfile } from '~/hooks/useLineProfile';

interface Header1Props {
  backgroundColor?: string;
  color?: string;
  height?: string;
}

const Header1: React.FC<Header1Props> = ({ backgroundColor = "black", color = "white" }) => {
  const { data: profile } = useLineProfile();
  return (
    <div className="px-4 py-5" style={{ backgroundColor, color }}>
      <div className='flex items-center gap-2'>
        <img src={profile?.pictureUrl} alt="Profile" className="w-16 h-16 rounded-full" />
        <div className=''>
          <div>Welcome</div>
          <div>{profile?.displayName}</div>
        </div>
      </div>
    </div>
  );
};

export default Header1;