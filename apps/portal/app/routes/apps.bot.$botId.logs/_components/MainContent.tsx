import { useParams } from '@remix-run/react';
import { Loading } from '@repo/preline';
import { format } from 'date-fns';
import React from 'react';
import { useBotLogs } from '~/hooks/bot/useBotLogs';

interface MainContentProps {

}

const MainContent: React.FC<MainContentProps> = () => {
  const { botId } = useParams();
  const { data: logs, isLoading } = useBotLogs({ id: botId });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-2 sm:p-5 sm:py-0 sm:py-5 space-y-5">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h2 className="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Logs
        </h2>
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
              <th scope="col" className="min-w-[250px] ">
                <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Date
                </div>
              </th>
              <th scope="col" className="min-w-48">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Intent
                </div>
              </th>
              <th scope="col">
                <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                  Question
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
                    {item.sentence}
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