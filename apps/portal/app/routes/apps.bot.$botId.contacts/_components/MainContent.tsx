import React, { useState } from "react";
import { Bot, PageInfo } from "~/@types/app";
import * as _ from "lodash";
import MemberTableFilter from "./MemberTableFilter";
import ContactTable from "./ContactTable";

interface MainContentProps {
  bot: Bot;
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  // const { data: orders, isLoading } = useBotOrders({ botId: bot.id as string });
  const [searchValue, setSearchValue] = useState("");
  const [pages, setPages] = useState<Array<PageInfo & { checked: boolean }>>(
    []
  );

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };


  return (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Title */}
        <div className="mb-4 xl:mb-8">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Contacts
          </h1>
          {/* <p className="text-sm text-gray-500 dark:text-neutral-500">
            Manage slips
          </p> */}
        </div>
        {/* End Title */}
        <div className="space-y-5">
          <MemberTableFilter onChanged={handleSearchChange} button={<></>} />
          {/* End Filter Group */}
          {/* <MemberStats channels={channels?.items} /> */}

          {/* Table Section */}
          <ContactTable botId={bot.id} searchValue={searchValue} />
          {/* End Table Section */}
        </div>
      </div>

      {/* <ChannelEditor id="channel-modal" channel={selectedChannel} /> */}
    </>
  );
};

export default MainContent;
