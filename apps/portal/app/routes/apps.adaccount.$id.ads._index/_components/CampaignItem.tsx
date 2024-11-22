import React, { useEffect } from 'react';
import { AdDashboard, Bot, BotIntent, Campaign, FacebookAdAccount } from '~/@types/app';
import { cn } from '@repo/ui/utils';
import { HighlightText } from '@repo/ui';
// import IntentQuestionList from './IntentQuestionList';
// import ChatBubbles from './ChatBubbles';
import { Trash } from 'lucide-react';
import Overview from './Overview';
interface CampaignItemProps {
  // bot: Bot;
  // knowledgeId: string;
  // intent: BotIntent;
  searchText: string;
  // isActive?: boolean;
  // onUpdate?: (updatedIntent: BotIntent) => void;
  // onRemove?: (intentId: string) => void;

  adaccount?: FacebookAdAccount;
  campaign: Campaign & AdDashboard
}

const CampaignItem: React.FC<CampaignItemProps> = ({ adaccount, searchText, campaign }) => {
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div className={cn("hs-accordion", { "active": isActive })} id={`hs-basic-heading-${campaign.id}`}>
      <div className="flex justify-between items-center">
        <button
          className="hs-accordion-toggle hs-accordion-active:text-green-700 px-6 py-3 inline-flex justify-between items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
          aria-expanded={false}
          aria-controls={`hs-basic-heading-${campaign.id}`}
        >
          <div className='flex gap-2 items-start'>
            <ExpandIcon isExpanded={false} />
            <div className='flex items-start flex-col'>
              <HighlightText text={campaign.name} highlight={searchText} />
              {/* <div className='text-sm text-gray-400'>{campaign.intent}</div> */}
            </div>
          </div>
          {/* <div className='flex gap-2'>
            <div className='font-normal'>
              ({intent.questions?.length ?? 0})({intent.responses?.length ?? 0})
            </div>
          </div> */}
        </button>
        {/* <button
          onClick={handleRemove}
          className="px-3 py-1 text-sm font-medium text-red-300 hover:text-red-700 focus:outline-none"
        >
          <Trash size={20} />
        </button> */}
      </div>
      <div
        id={`hs-basic-collapse-${campaign.id}`}
        className={cn("hs-accordion-content w-full overflow-auto transition-[height] duration-300", {
          "hidden": !isActive
        })}
        role="region"
        aria-labelledby={`hs-basic-heading-${campaign.id}`}
      >
        <div className="pb-10 px-6">
          {campaign.id}
          <Overview adaccount={adaccount} />
        </div>
      </div>

    </div>
  );
};


export default CampaignItem;


const ExpandIcon: React.FC<{ isExpanded: boolean }> = ({ isExpanded }) => (
  <svg
    className={`hs-accordion-active:${isExpanded ? 'hidden' : 'block'} hs-accordion-active:text-blue-600 hs-accordion-active:group-hover:text-blue-600 block size-4 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400`}
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path d={isExpanded ? "M5 12h14" : "M12 5v14M5 12h14"} />
  </svg>
);