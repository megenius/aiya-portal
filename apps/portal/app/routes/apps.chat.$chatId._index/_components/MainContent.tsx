import React from 'react';
import Landing from './Landing';

interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <main
      id="content"
      className="2xl:hs-overlay-layout-open:pe-96 lg:ps-[22rem] transition-all duration-300"
    >
      <Landing />
    </main>
  );
};

export default MainContent;