import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { AdDashboard, Bot, BotIntent, Campaign, FacebookAdAccount } from '~/@types/app';
import * as _ from 'lodash';
// import Filters from './Filters';
import { useLocation } from '@remix-run/react';
import CampaignItem from './CampaignItem';

interface IntentsListProps {
  // bot?: Bot;
  // knowledgeId?: string;
  // searchIntent?: string;
  // intents: BotIntent[];
  // onIntentRemove?: (intentId: string) => void;

  adaccount?: FacebookAdAccount;
  campaigns: Array<Campaign & AdDashboard>
}

const IntentsList: React.FC<IntentsListProps> = ({ adaccount, campaigns }) => {
  const [search, setSearch] = useState<string>("");
  const location = useLocation();

  const filteredItems = useMemo(() => {
    if (!search.trim()) return campaigns;
    const searchLower = search.trim().toLowerCase();
    return campaigns.filter((campaign) =>
      campaign.name.toLowerCase().includes(searchLower)
      // intent.questions?.some(q => q.question.toLowerCase().includes(searchLower))
    );
  }, [campaigns, search]);

  const handleSearchChange = useCallback(_.debounce((value: string) => {
    setSearch(value);
  }, 300), []);

  useEffect(() => {
    async function initializePreline() {
      const { HSAccordion, HSOverlay } = await import('preline/preline');
      setTimeout(() => {
        HSAccordion.autoInit();
        HSOverlay.autoInit();
      }, 500);
    }

    initializePreline();
  }, [location.pathname, search]);


  // return (
  //   <div className="hs-accordion-group">
  //     {filteredItems?.map((campaign) => (
  //       <div className="hs-accordion active" id={`hs-basic-heading-${campaign}`}>
  //         <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">
  //           <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
  //             <path d="M5 12h14" />
  //             <path d="M12 5v14" />
  //           </svg>
  //           <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
  //             <path d="M5 12h14" />
  //           </svg>
  //           {campaign.name}
  //         </button>
  //         <div id="hs-basic-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
  //           <p className="text-gray-800">
  //             <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
  //           </p>
  //         </div>
  //       </div>
  //     ))}

  //     <div className="hs-accordion active" id="hs-basic-heading-one">
  //       <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="true" aria-controls="hs-basic-collapse-one">
  //         <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
  //           <path d="M5 12h14" />
  //           <path d="M12 5v14" />
  //         </svg>
  //         <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
  //           <path d="M5 12h14" />
  //         </svg>
  //         Accordion #1
  //       </button>
  //       <div id="hs-basic-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-one">
  //         <p className="text-gray-800">
  //           <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
  //         </p>
  //       </div>
  //     </div>
  //     <div className="hs-accordion" id="hs-basic-heading-two">
  //       <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-collapse-two">
  //         <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
  //           <path d="M5 12h14" />
  //           <path d="M12 5v14" />
  //         </svg>
  //         <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
  //           <path d="M5 12h14" />
  //         </svg>
  //         Accordion #2
  //       </button>
  //       <div id="hs-basic-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-two">
  //         <p className="text-gray-800">
  //           <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
  //         </p>
  //       </div>
  //     </div>
  //     <div className="hs-accordion" id="hs-basic-heading-three">
  //       <button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-hidden focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none" aria-expanded="false" aria-controls="hs-basic-collapse-three">
  //         <svg className="hs-accordion-active:hidden block size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
  //           <path d="M5 12h14" />
  //           <path d="M12 5v14" />
  //         </svg>
  //         <svg className="hs-accordion-active:block hidden size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
  //           <path d="M5 12h14" />
  //         </svg>
  //         Accordion #3
  //       </button>
  //       <div id="hs-basic-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-heading-three">
  //         <p className="text-gray-800">
  //           <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
  //         </p>
  //       </div>
  //     </div>
  //   </div>

  // )

  return (
    <div className="p-5 space-y-4 flex flex-col bg-white border border-stone-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      {/* <Filters onSearchChanged={handleSearchChange} /> */}
      <div className="overflow-x-auto">
        <div className="hs-accordion-group">
          {filteredItems?.map((item) => (
            <CampaignItem
              key={item.id}
              adaccount={adaccount}
              campaign={item}
              searchText={search}
            />
          ))}
        </div>
      </div>
      {filteredItems?.length === 0 && (
        <div className="text-center py-4 text-stone-500 dark:text-neutral-400">
          No matching intents found.
        </div>
      )}
    </div>
  );
};

export default IntentsList;