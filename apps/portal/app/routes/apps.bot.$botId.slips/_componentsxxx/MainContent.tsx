import { json, useParams } from '@remix-run/react';
import { Loading } from '@repo/preline';
import { format } from 'date-fns';
import { Download, FileUp, Train } from 'lucide-react';
import React from 'react';
import { toast } from 'react-toastify';
import { useBot, useBotUpdate } from '~/hooks/bot';
import { useBotLogs } from '~/hooks/bot/useBotLogs';
import { useBotMutedUsersInsert } from '~/hooks/bot/useBotMutedUsersInsert';
import { read, utils } from 'xlsx';
import { jsonArrayToExcel } from '@repo/shared/utils/xlsx-helper';
import { Bot } from '~/@types/app';

interface MainContentProps {
  bot: Bot
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {

  return (
    <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <div className="flex flex-wrap justify-between items-center gap-2">
        <h2 className="inline-block text-lg font-semibold text-gray-800 dark:text-neutral-200">
          Slips
        </h2>

        <div className="flex md:justify-end items-center gap-x-2">
          {/* Import / Export Dropdown */}
          <div className="hs-dropdown [--auto-close:true] relative inline-flex">
            {/* Import / Export Button */}
            <button id="hs-pro-dptied"
              type="button" className="py-2 px-2.5 inline-flex items-center gap-x-1.5 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
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

      </div>
    </div>
  );
};

export default MainContent;