import { Avatar } from "@repo/preline/Avatar";
import React, { useState } from "react";
import { Bot, Channel, PageInfo, Workspace } from "~/@types/app";
import { getDirectusFileUrl } from "~/utils/files";
import * as _ from "lodash";
import MemberTableFilter from "./MemberTableFilter";
import { format, formatDistance } from "date-fns";
import { useFacebookSDK } from "~/hooks/useFacebookSDK";
import { Loading } from "@repo/preline";
import { useBotOrders } from "~/hooks/bot/useBotOrders";
import { NumericFormat } from "react-number-format";
import ToggleSwitch from "./ToggleSwitch";
import { useBotContacts } from "~/hooks/bot/useBotContacts";
import { useBotMutedUsers } from "~/hooks/bot/useBotMutedUsers";

interface MainContentProps {
  bot: Bot;
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  // const { data: orders, isLoading } = useBotOrders({ botId: bot.id as string });
  const { data: orders, isLoading } = useBotContacts({ id: bot.id as string });
  const { data: mutedBotUsers,isLoading:isMutedBotUsersLoading } = useBotMutedUsers({ botId: bot.id as string });
  const [searchValue, setSearchValue] = useState("");
  const [pages, setPages] = useState<Array<PageInfo & { checked: boolean }>>(
    []
  );
  const [isBotActive, setIsBotActive] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };
  

  // const filteredItems = React.useMemo(() => {
  //   if (!searchValue) return orders ? orders.data : [];

  //   const searchText = searchValue.toLowerCase().trim();

  //   return orders?.data.filter((item) => {
  //     return item.data._name?.toLowerCase().includes(searchText);
  //   });
  // }, [orders, searchValue]);

  return (
    <>
      <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
        {/* Title */}
        <div className="mb-4 xl:mb-8">
          <h1 className="text-lg font-semibold text-gray-800 dark:text-neutral-200">
            Orders
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
          <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <div className="min-w-full inline-block align-middle">
              {/* Loader */}
              {(isLoading || isMutedBotUsersLoading) && <Loading />}
              {/* End Loader */}
              {/* Table */}
              <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                <thead>
                  <tr>
                    <th scope="col" className="min-w-36">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Avatar
                      </div>
                    </th>
                    <th scope="col" className="min-w-48">
                      <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Name
                      </div>
                    </th>
                    <th scope="col" className="min-w-[350px]">
                      <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Recent Message
                      </div>
                    </th>
                    <th scope="col" className="min-w-[200px] ">
                      <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Received Time
                      </div>
                    </th>
                    <th scope="col" className="min-w-[200px] ">
                      <div className="py-3 flex justify-center items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                        Bot
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                  {orders?.map((order) => (
                    <tr key={order.id}>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <Avatar src={""} firstName={"T"} />
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm font-medium text-gray-800">
                              {order.social_id}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="size-px pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm text-gray-600">
                              {order.sentence}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <span className="text-sm text-gray-600">
                              {calculateTimeAgo(order.created)}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap py-3">
                        <div className="w-full flex justify-center items-center">
                          <ToggleSwitch
                            onToggle={setIsBotActive}
                            initialChecked={mutedBotUsers?.some(user => user.uid !== order.social_id)}
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                  {/* {filteredItems?.map((item) => (
                    <tr key={item.event_id}>
                      <td className="size-px whitespace-nowrap px-4 py-3">
                        <span className="text-sm text-gray-600 dark:text-neutral-400">
                          {item.created_at
                            ? format(new Date(item.created_at), "dd/MM/yyyy")
                            : ""}
                        </span>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">{item.data._name}</div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">{item.metadata.user_id}</div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">{item.data.phone}</div>
                        </div>
                      </td>
                      <td className="size-px whitespace-nowrap pe-4 py-3">
                        <div className="w-full flex items-center gap-x-3">
                          <div className="grow">
                            <NumericFormat
                              value={item.data.deposit || item.data.amount}
                              displayType={"text"}
                              thousandSeparator={true}
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
              {/* End Table */}
            </div>
          </div>
          {/* End Table Section */}
        </div>
      </div>

      {/* <ChannelEditor id="channel-modal" channel={selectedChannel} /> */}
    </>
  );
};

export default MainContent;

const getTimeAgo = (seconds: number) => {
  if (seconds < 60) {
    return `${seconds} second${seconds === 1 ? "" : "s"} ago`;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
  } else if (seconds < 86400) {
    const hours = Math.floor(seconds / 3600);
    return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  } else if (seconds < 2592000) {
    const days = Math.floor(seconds / 86400);
    return `${days} day${days === 1 ? "" : "s"} ago`;
  } else if (seconds < 31536000) {
    const months = Math.floor(seconds / 2592000);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  } else {
    const years = Math.floor(seconds / 31536000);
    return `${years} year${years === 1 ? "" : "s"} ago`;
  }
};

const calculateTimeAgo = (dateString: string) => {
  const date = new Date(dateString);
  const timeDifferenceInMilliseconds = Date.now() - date.getTime();

  const timeDifferenceInSeconds = Math.floor(timeDifferenceInMilliseconds / 1000);

  return getTimeAgo(timeDifferenceInSeconds);
};
