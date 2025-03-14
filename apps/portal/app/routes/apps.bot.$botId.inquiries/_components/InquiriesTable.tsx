// ContactTable.tsx
import React, { useState } from "react";
import { Avatar } from "@repo/preline/Avatar";
import { useBotInquiry } from "~/hooks/bot/useBotInquiries";
import { format } from "date-fns";

interface InquiriesTableProps {
  botId: string;
  searchValue: string;
}

const InquiriesTable: React.FC<InquiriesTableProps> = ({
  botId,
  searchValue,
}) => {
  const { data: inquiries, isLoading } = useBotInquiry({
    id: botId,
  });
  const isValidUUID = (str) => {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return uuidRegex.test(str);
  };

  const getUID = (socialId: string) => {
    if (isValidUUID(socialId)) {
      const formattedToken = `U${socialId.split('-')[0]}`;
      return formattedToken;
    }

    return socialId;
  }

  const filteredInquiries = inquiries?.filter(
    (inquiry) =>
      inquiry.email?.toLowerCase().includes(searchValue.toLowerCase()) ||
      inquiry.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <div className="min-w-full inline-block align-middle">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
            <tr>
              <th scope="col" className="min-w-[170px]">
                <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Date created
                </div>
              </th>
              <th scope="col" className="min-w-[200px]">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Name/User ID
                </div>
              </th>
              <th scope="col" className="min-w-[200px]">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Email/Phone
                </div>
              </th>
              <th scope="col" className="min-w-[350px]">
                <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Topic
                </div>
              </th>
              <th scope="col" className="min-w-[100px]">
                <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Type
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {isLoading
              ? [...Array(5)].map((_, index) => (
                <tr key={index} className="animate-pulse">
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <div className="h-4 w-28 bg-gray-300 dark:bg-neutral-700 rounded"></div>
                  </td>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <div className="h-4 w-40 bg-gray-300 dark:bg-neutral-700 rounded"></div>
                  </td>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <div className="h-4 w-40 bg-gray-300 dark:bg-neutral-700 rounded"></div>
                  </td>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <div className="h-4 w-36 bg-gray-300 dark:bg-neutral-700 rounded"></div>
                  </td>
                  <td className="size-px pe-4 py-3">
                    <div className="h-4 w-48 bg-gray-300 dark:bg-neutral-700 rounded"></div>
                  </td>
                  <td className="size-px pe-4 py-3">
                    <div className="h-4 w-28 bg-gray-300 dark:bg-neutral-700 rounded"></div>
                  </td>
                </tr>
              ))
              : filteredInquiries?.map((inquiry) => (
                <tr key={inquiry.id}>
                  <td className="size-px pe-4 py-3">
                    {/* <span className="text-sm text-gray-600">
                      {formatDate(inquiry.date_created)}
                    </span> */}
                    <div className="w-full items-center gap-x-3">
                      <div className="grow">
                        <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {format(inquiry.date_created, "HH:mm:ss")}
                        </span>
                      </div>
                      <div className="grow">
                        <span className="text-sm font-medium text-gray-400 dark:text-neutral-200">
                          {format(inquiry.date_created, "yyyy-MM-dd")}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="size-px pe-4 py-3">
                    <div className="grow">
                      <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {inquiry.name}
                      </span>
                    </div>
                    <div className="grow">
                      <span className="text-sm font-medium text-gray-400 dark:text-neutral-200">
                        {getUID(inquiry?.uid || "")}
                      </span>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap pe-4 py-3">
                    <div className="grow">
                      <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {inquiry.email}
                      </span>
                    </div>
                    <div className="grow">
                      <span className="text-sm font-medium text-gray-400 dark:text-neutral-200">
                        {inquiry?.phone}
                      </span>
                    </div>
                  </td>
                  <td className="size-px pe-4 py-3">
                  <div className="grow">
                      <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {inquiry.subject}
                      </span>
                    </div>
                    <div className="grow">
                      <span className="text-sm font-medium text-gray-400 dark:text-neutral-200">
                        {inquiry.description}
                      </span>
                    </div>
                  </td>
                  <td className="size-px pe-4 py-3">
                    <span className="text-sm text-gray-600">
                      {inquiry.inquiry_type}
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InquiriesTable;

function formatDate(isoString) {
  const date = new Date(isoString);

  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleString("en-US", options);
}
