import { json, useParams } from '@remix-run/react';
import { Loading } from '@repo/preline';
import { format } from 'date-fns';
import { Download, FileUp, Train } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';
import { useBotUpdate } from '~/hooks/bot';
import { useBotLogs } from '~/hooks/bot/useBotLogs';
import { useBotMutedUsersInsert } from '~/hooks/bot/useBotMutedUsersInsert';
import { read, utils } from 'xlsx';
import { jsonArrayToExcel } from '@repo/shared/utils/xlsx-helper';
interface MainContentProps {
}

const MainContent: React.FC<MainContentProps> = () => {
  const { botId } = useParams();
  const { data: logs, isLoading } = useBotLogs({ id: botId });
  const muteUser = useBotMutedUsersInsert()

  const handleMute = (socialId: string) => {
    muteUser.mutateAsync({
      bot: botId as string,
      uid: socialId
    }).then(() => {
      toast.success('User muted successfully')
    })
  }

  const handleDownload = () => {
    if (logs?.data) {
      jsonArrayToExcel(logs.data.map(d => {
        return {
          Date: format(d.created, "yyyy-MM-dd HH:mm:ss"),
          Intent: d.intent,
          Confience: d.confidence,
          Question: d.sentence,
          SocialID: d.social_id,
          Platform: d.platform,
          Fallback: d.fallback,
          Action: d.action,
          Answer: d.answer,
          TrainingIntent: d.training_intent,
          TrainingQuestion: d.training_question,
        }
      }), {
        // file name with datetime
        fileName: `bot-logs-${format(new Date(), 'yyyyMMddHHmmss')}.xlsx`,
        sheetName: 'Logs'
      })
    }
  }

  const getUID = (socialId: string) => {
    const isValidUUID = (str) => {
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      return uuidRegex.test(str);
    };

    if (isValidUUID(socialId)) {
      const formattedToken = `U${socialId.split('-')[0]}`;
      return formattedToken;
    }

    return socialId;
  }


  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-2 sm:p-5 sm:py-0 sm:py-5 space-y-5">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h2 className="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Logs
        </h2>

        <div className="flex md:justify-end items-center gap-x-2">
          {/* Import / Export Dropdown */}
          <div className="hs-dropdown [--auto-close:true] relative inline-flex">
            {/* Import / Export Button */}
            <button id="hs-pro-dptied"
              onClick={handleDownload}
              type="button" className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-xs hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
              <div className='text-gray-800'>
                <Download size={16} />
              </div>
              Download
            </button>
            {/* End Import / Export Button */}
          </div>
          {/* End Import / Export Dropdown */}
        </div>
      </div>
      <div>
        {/* {logs?.data?.map((log, index) => (
          <div key={index} className="bg-gray-100 dark:bg-neutral-800 p-2 rounded-lg">
            <p className="text-sm text-gray-800 dark:text-neutral-200">
              {log.intent}
            </p>
          </div>
        ))} */}
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead>
            <tr>
              <th scope="col" className="min-w-[80px] ">
                <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Date
                </div>
              </th>
              <th scope="col" className="min-w-[100px]">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Question
                </div>
              </th>
              <th scope="col" className="min-w-[150px]">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Intent
                </div>
              </th>
              {/* <th scope="col" className="min-w-[300px]">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Action
                </div>
              </th> */}
              <th scope="col" className="max-w-[80px]">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  User ID
                </div>
              </th>
              {/* <th scope="col">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Answer
                </div>
              </th> */}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {logs?.data?.map((item) => (
              <tr key={item.id} className="items-start">
                <td className="size-px whitespace-nowrap pe-4 py-3 cursor-pointer">
                  <div className="w-full items-center gap-x-3">
                    <div className="grow">
                      <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                        {format(item.created, "HH:mm:ss")}
                      </span>
                    </div>
                    <div className="grow">
                      <span className="text-sm font-medium text-gray-400 dark:text-neutral-200">
                        {format(item.created, "yyyy-MM-dd")}
                      </span>
                    </div>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap px-4 py-3 text-wrap">
                  <span className="text-sm text-gray-600 dark:text-neutral-400">
                    {item.sentence}
                  </span>
                  <div className="text-sm font-medium text-gray-400 dark:text-neutral-200">
                    {item.action}
                  </div>
                </td>
                <td className="size-px px-4 py-3">
                  <div className='flex flex-col'>
                    <span className="text-sm text-gray-600 dark:text-neutral-400">
                      {item.intent}
                    </span>
                    <span className="text-sm font-medium text-gray-400 dark:text-neutral-200">
                      {item.confidence}
                    </span>
                  </div>
                </td>

                <td className="size-px whitespace-nowrap px-4 py-3">
                  <span className="text-sm text-gray-600 dark:text-neutral-400">
                    {getUID(item.social_id)}
                  </span>

                </td>
                {/* <td className="size-px px-4 py-3">
                  <span className="text-sm text-gray-600 dark:text-neutral-400">
                    <div dangerouslySetInnerHTML={{ __html: item.answer?.replaceAll("\n", "<br/>") }} />
                  </span>
                </td> */}

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;