import React from 'react';
import { useMe } from '~/hooks/useMe';
import { Loading } from '@repo/preline';
import Title from './_components/Title';
import AvartarUploader from './_components/AvartarUploader';
import PersonalInfo from './_components/PersonalInfo';

interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  const { data: user, isLoading } = useMe()

  if (isLoading) {
    return <Loading />
  }

  return (
    <>
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 space-y-3">
        <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <Title />
          {/* Form */}
          <AvartarUploader user={user} />
          {/* <CoverPhoto /> */}
          <PersonalInfo user={user} />
          {/* <SocialAccount /> */}
          {/* <ConnectAccounts /> */}
          {/* <DangerZone /> */}
          {/* End Form */}
        </div>
      </div>
    </>
  );
};

export default MainContent;


