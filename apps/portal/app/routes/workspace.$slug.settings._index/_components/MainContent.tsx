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
import { useParams } from '@remix-run/react';
import { useWorkspace } from '~/hooks/workspace';
import NameEditor from './NameEditor';
import { Workspace } from '~/@types/app';

interface MainContentProps {
  workspace: Workspace
}

const MainContent: React.FC<MainContentProps> = ({ workspace }) => {

  return (
    <>
      {workspace && (
        <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <Title />
          <NameEditor workspace={workspace} />
          {/* Form */}
          <AvartarUploader workspace={workspace} />
          {/* <CoverPhoto /> */}
          {/* <PersonalInfo user={workspace} /> */}
          {/* <SocialAccount /> */}
          {/* <ConnectAccounts /> */}
          <DangerZone workspace={workspace} />
          {/* End Form */}
        </div>
      )}
    </>
  );
};

export default MainContent;


