import React, { useEffect } from 'react';
import { Bot, BotIntent } from '~/@types/app';
import { cn } from '@repo/ui/utils';
import { HighlightText } from '@repo/ui';
import IntentQuestionList from './IntentQuestionList';
import ChatBubbles from './ChatBubbles';
import { CreateTextMessageModal } from '@repo/preline/chat';
import { Trash } from 'lucide-react';
import { useBotKnowledgeIntentQuestionDelete } from '~/hooks/bot/useBotKnowledgeIntentQuestionDelete';
import { useBotKnowledgeIntentQuestionInsert } from '~/hooks/bot/useBotKnowledgeIntentQuestionInsert';
import { useBotKnowledgeIntentQuestionUpdate } from '~/hooks/bot/useBotKnowledgeIntentQuestionUpdate';
import { set } from 'lodash';
interface IntentItemProps {
  bot: Bot;
  knowledgeId: string;
  intent: BotIntent;
  searchText: string;
  isActive?: boolean;
  onUpdate?: (updatedIntent: BotIntent) => void;
  onRemove?: (intentId: string) => void;
}

const IntentItem: React.FC<IntentItemProps> = ({ bot, knowledgeId, intent, searchText, isActive = false, onUpdate, onRemove }) => {
  const createQuestion = useBotKnowledgeIntentQuestionInsert();
  const updateQuestion = useBotKnowledgeIntentQuestionUpdate();
  const deleteQuestion = useBotKnowledgeIntentQuestionDelete();

  const [questions, setQuestions] = React.useState(intent.questions || []);

  const handleRemove = () => {
    if (window.confirm('Are you sure you want to remove this intent?')) {
      onRemove && onRemove(intent.id);
    }
  };

  useEffect(() => {
    setQuestions(intent?.questions || []);
  }, [intent, intent?.questions])

  return (
    <div className={cn("hs-accordion", { "active": isActive })} id={`hs-basic-heading-${intent.id}`}>
      <div className="flex justify-between items-center">
        <button
          className="hs-accordion-toggle hs-accordion-active:text-green-700 px-6 py-3 inline-flex justify-between items-center gap-x-3 text-sm w-full font-semibold text-start text-gray-800 hover:text-gray-500 focus:outline-none focus:text-gray-500 rounded-lg disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400"
          aria-expanded={isActive}
          aria-controls={`hs-basic-heading-${intent.id}`}
        >
          <div className='flex gap-2 items-start'>
            <ExpandIcon isExpanded={false} />
            <div className='flex items-start flex-col'>
              <HighlightText text={intent.name} highlight={searchText} />
              <div className='text-sm text-gray-400'>{intent.intent}</div>
            </div>
          </div>
          <div className='flex gap-2'>
            <div className='font-normal'>
              ({intent.questions?.length ?? 0})({intent.responses?.length ?? 0})
            </div>
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
          <IntentQuestionList questions={questions} searchText={searchText}
            onChanged={(updatedQuestions, index, action) => {
              if (action === 'create') {
                createQuestion.mutateAsync({
                  variables: {
                    bot_id: bot.id as string,
                    knowledge_id: knowledgeId,
                    intent_id: intent.id,
                    questions: updatedQuestions
                  }
                }).then((res) => { 
                  console.log('res', res);
                  
                  const newQuestions = [...questions, ...updatedQuestions];
                  setQuestions(newQuestions);
                })
              } else if (action === 'update') {
                updateQuestion.mutateAsync({
                  variables: {
                    bot_id: bot.id as string,
                    knowledge_id: knowledgeId,
                    intent_id: intent.id,
                    question: updatedQuestions[index]
                  }
                }).then((res) => {
                  const newQuestions = questions.map((q, i) => i === index ? updatedQuestions[index] : q);
                  setQuestions(newQuestions);
                })
              } else if (action === 'delete') {
                deleteQuestion.mutateAsync({
                  variables: {
                    bot_id: bot.id as string,
                    knowledge_id: knowledgeId,
                    intent_id: intent.id,
                    question_id: questions[index].id
                  }
                }).then((res) => {
                  const newQuestions = questions.filter((_, i) => i !== index);
                  setQuestions(newQuestions);
                })
              }
            }}
          />
          <div className="flex flex-col gap-y-3 pb-6 px-5 bg-slate-300 py-5">
            <ChatBubbles bot={bot} knowledgeId={knowledgeId} intent={intent} onUpdate={onUpdate} />
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
          // onUpdate && onUpdate({ ...intent, responses: [...(intent.responses || []), newResponse] });
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