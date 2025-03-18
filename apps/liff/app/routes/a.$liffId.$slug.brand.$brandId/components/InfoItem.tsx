import React from 'react';

interface InfoItemProps {
  icon: React.ReactNode;
  count: string;
  subtitle: string;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, count: title, subtitle }) => (
  <div className="flex items-center mr-6 mb-1">
    <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center mr-2">
      {icon}
    </div>
    <div>
      <div className="font-bold text-sm">{title}</div>
      <div className="text-xs text-gray-500">{subtitle}</div>
    </div>
  </div>
);

export default InfoItem;