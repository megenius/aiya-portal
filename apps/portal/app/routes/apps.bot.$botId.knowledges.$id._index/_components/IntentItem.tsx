import React from 'react';
import { Bot, BotIntent } from '~/@types/app';
import { cn } from '@repo/ui/utils';
import { HighlightText } from '@repo/ui';
import IntentQuestionList from './IntentQuestionList';
import ChatBubbles from './ChatBubbles';
import { CreateTextMessageModal } from '@repo/preline/chat';
import { Trash } from 'lucide-react';
interface IntentItemProps {
  bot: Bot;
  intent: BotIntent;
  searchText: string;
  isActive?: boolean;
  onUpdate?: (updatedIntent: BotIntent) => void;
  onRemove?: (intentId: string) => void;
}

const IntentItem: React.FC<IntentItemProps> = ({ bot, intent, searchText, isActive = false, onUpdate, onRemove }) => {
  const handleRemove = () => {
    if (window.confirm('Are you sure you want to remove this intent?')) {
      onRemove && onRemove(intent.id);
    }
  };

  return (
    <div className={cn("hs-accordion", { "active": isActive })} id={`hs-basic-heading-${intent.id}`}>
      <div className="flex justify-between items-center">
        <button
          className="hs-accordion-toggle hs-accordion-active:text-green-700 px-6 py-3 inline-flex justify-between items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
          aria-expanded={isActive}
          aria-controls={`hs-basic-heading-${intent.id}`}
        >
          <div className='flex gap-2 items-center'>
            <ExpandIcon isExpanded={false} />
            <HighlightText text={intent.name} highlight={searchText} />
          </div>
          <div className='font-normal'>
            ({intent.questions?.length ?? 0})({intent.responses?.length ?? 0})
          </div>
        </button>
        <button
          onClick={handleRemove}
          className="px-3 py-1 text-sm font-medium text-red-300 hover:text-red-700 focus:outline-none"
        >
          <Trash size={20} />
        </button>
      </div>
      <div
        id={`hs-basic-collapse-${intent.id}`}
        className={cn("hs-accordion-content w-full overflow-auto transition-[height] duration-300", {
          "hidden": !isActive
        })}
        role="region"
        aria-labelledby={`hs-basic-heading-${intent.id}`}
      >
        <div className="pb-10 px-6">
          <IntentQuestionList questions={intent.questions} searchText={searchText}
            onChanged={(updatedQuestions) => {
              onUpdate && onUpdate({ ...intent, questions: updatedQuestions });
            }}
          />
          <div className="flex flex-col gap-y-3 pb-6 px-5 bg-slate-300 py-5">
            <ChatBubbles bot={bot} intent={intent} onUpdate={onUpdate} />
          </div>
        </div>
      </div>

      <CreateTextMessageModal
        modalId={`hs-pro-create-text-message-modal-${intent.id}`}
        onChanged={(message) => {
          // const newResponse: ResponseElement = {
          //   id: randomHexString(8),
          //   type: ResponseElementType.Text,
          //   payload: { text: message.text }
          // };
          const newResponse = message.text;
          onUpdate && onUpdate({ ...intent, responses: [...(intent.responses || []), newResponse] });
        }}
      />
    </div>
  );
};


export default IntentItem;


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