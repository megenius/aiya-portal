import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Bot, BotIntent } from '~/@types/app';
import * as _ from 'lodash';
import Filters from './Filters';
import { useLocation } from '@remix-run/react';
import IntentItem from './IntentItem';

interface IntentsListProps {
  bot: Bot;
  knowledgeId: string;
  searchIntent: string;
  intents: BotIntent[];
  onIntentRemove?: (intentId: string) => void;
}

const IntentsList: React.FC<IntentsListProps> = ({ bot, knowledgeId, intents, searchIntent, onIntentRemove }) => {
  const [search, setSearch] = useState<string>("");
  const location = useLocation();

  const filteredIntents = useMemo(() => {
    if (!search.trim()) return intents;
    const searchLower = search.trim().toLowerCase();
    return intents.filter((intent) =>
      intent.name.toLowerCase().includes(searchLower) ||
      intent.questions?.some(q => q.question.toLowerCase().includes(searchLower))
    );
  }, [intents, search]);

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

  return (
    <div className="p-5 space-y-4 flex flex-col bg-white border border-stone-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
      <Filters onSearchChanged={handleSearchChange} />
      <div className="overflow-x-auto">
        <div className="hs-accordion-group">
          {filteredIntents.map((intent) => (
            <IntentItem
              key={intent.id}
              bot={bot}
              knowledgeId={knowledgeId}
              intent={intent}
              searchText={search}
              isActive={intent.id === searchIntent}
              onRemove={onIntentRemove}
            />
          ))}
        </div>
      </div>
      {filteredIntents.length === 0 && (
        <div className="text-center py-4 text-stone-500 dark:text-neutral-400">
          No matching intents found.
        </div>
      )}
    </div>
  );
};

export default IntentsList;