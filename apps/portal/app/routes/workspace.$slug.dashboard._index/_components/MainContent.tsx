import React from 'react';
import SalesChart from './SalesChart';
import TotalSales from './TotalSales';
import TopAgents from './TopAgents';
import Traffic from './Traffic';

interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-5">
      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <TotalSales />
        <TopAgents />
        {/* <Traffic /> */}
      </div>
      {/* End Cards Grid */}
      <SalesChart />
      {/* Sales Stats Card */}

      {/* End Sales Stats Card */}
    </div>

  );
};

export default MainContent;