import React from 'react';
import { useLineProfile } from '~/hooks/useLineProfile';
import Avartar from '../Avartar';

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
        <Avartar src={profile?.pictureUrl} placeholder="/images/no_profile4.png" />
        <div className=''>
          <div>Welcome</div>
          <div>{profile?.displayName}</div>
        </div>
      </div>
    </div>
  );
};

export default Header1;