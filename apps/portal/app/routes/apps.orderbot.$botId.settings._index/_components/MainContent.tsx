import React from 'react';
import Title from './Title';
import CoverPhoto from './CoverPhoto';
import PersonalInfo from './PersonalInfo';
import SocialAccount from './SocialAccount';
import ConnectAccounts from './ConnectAccounts';
import DangerZone from './DangerZone';
import { useMe } from '~/hooks/useMe';
import { Loading } from '@repo/preline';
import AvartarUploader from './AvartarUploader';
import NameEditor from './NameEditor';
import { Orderbot } from '~/@types/app';

interface MainContentProps {
  bot: Orderbot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {

  return (
    <>
      {bot && (
        <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <Title />
          <NameEditor bot={bot} />
          {/* Form */}
          <AvartarUploader bot={bot} />
          {/* <CoverPhoto /> */}
          {/* <PersonalInfo user={workspace} /> */}
          {/* <SocialAccount /> */}
          {/* <ConnectAccounts /> */}
          <DangerZone bot={bot} />
          {/* End Form */}
        </div>
      )}
    </>
  );
};

export default MainContent;

