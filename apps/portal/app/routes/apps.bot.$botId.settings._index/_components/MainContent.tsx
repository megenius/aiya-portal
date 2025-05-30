import React from "react";
import Title from "./Title";
import CoverPhoto from "./CoverPhoto";
import PersonalInfo from "./PersonalInfo";
import SocialAccount from "./SocialAccount";
import ConnectAccounts from "./ConnectAccounts";
import DangerZone from "./DangerZone";
import { useMe } from "~/hooks/useMe";
import { Loading } from "@repo/preline";
import AvartarUploader from "./AvartarUploader";
import NameEditor from "./NameEditor";
import { Bot } from "~/@types/app";
import StartKeyword from "./StartKeyword";
import StopKeyword from "./StopKeyword";
import ModelDropdown from "./ModelDropdown";
import Playground from "./Playground";

interface MainContentProps {
  bot: Bot;
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  return (
    <>
      {bot && (
        <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
          <Title />
          <NameEditor bot={bot} />
          {/* Form */}
          <AvartarUploader bot={bot} />
          <ModelDropdown bot={bot} />
          <Playground bot={bot} />
          <StopKeyword bot={bot} />
          <StartKeyword bot={bot} />
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
