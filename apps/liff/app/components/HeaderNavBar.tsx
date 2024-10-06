import { useNavigate } from '@remix-run/react';
import { ChevronLeft } from 'lucide-react';
import React from 'react';

interface HeaderNavBarProps {
  title?: string;
}

const HeaderNavBar: React.FC<HeaderNavBarProps> = ({ title }) => {
  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1)
  }

  return (
    <div className='flex items-center border-b p-2 justify-between'>
      <div>
        <ChevronLeft className="w-8 h-8 text-gray-600" onClick={navigateBack} />
      </div>
      <div className="text-lg font-bold text-gray-800">{title}</div>
      <div></div>
    </div>
  );
};

export default HeaderNavBar;