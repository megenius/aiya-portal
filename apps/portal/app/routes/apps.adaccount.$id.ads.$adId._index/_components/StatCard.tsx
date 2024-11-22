import React from 'react';

interface StatCardProps {
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
  change?: number;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, change }) => (
  <div className="flex flex-col p-5 bg-white border-b md:border-b-0 md:border-r last:border-r-0 border-neutral-200">
    {icon}
    <div className="mt-3">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600">
        {value}
      </h2>
      <div className="mt-2 flex flex-wrap items-center gap-y-1 gap-x-2">
        {/* <p className="text-sm text-gray-500">{title}</p> */}
        <h3 className="text-gray-500">{title}</h3>
        {change !== undefined && (
        <span className={`py-1 px-1.5 inline-flex items-center gap-x-1 text-xs ${change >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'} rounded-md`}>
          <svg
            className="shrink-0 w-3 h-3"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points={change >= 0 ? "22 7 13.5 15.5 8.5 10.5 2 17" : "22 17 13.5 8.5 8.5 13.5 2 7"} />
            <polyline points={change >= 0 ? "16 7 22 7 22 13" : "16 17 22 17 22 11"} />
          </svg>
          {Math.abs(change)}%
        </span>)}
      </div>
    </div>
  </div>
);


export default StatCard;