import React, { useEffect, useState, useCallback } from 'react';
import { Bot, BotIntent, BotKnowledge } from '~/@types/app';
import IntentsList from './IntentsList';
import { Outlet, useNavigate, useSearchParams } from '@remix-run/react';
import { useAppSelector } from '~/store';
import { updateItem } from '@directus/sdk';
import IntentImporter from './IntentImporter';
import { useBotKnowlegdeUpdate } from '~/hooks/bot/useBotKnowlegdeUpdate';
import BasicAddModal from '~/components/BasicAddModal';
import { randomHexString } from '~/utils/random';
import { useBotKnowlegdeImport } from '~/hooks/bot/useBotKnowlegdeImport';
import { useBotKnowledgeIntentInsert } from '~/hooks/bot/useBotKnowledgeIntentInsert';
import { useBotKnowledgeIntentDelete } from '~/hooks/bot/useBotKnowledgeIntentDelete';

interface MainContentProps {
  knowledge: BotKnowledge;
  bot: Bot;
}

const MainContent: React.FC<MainContentProps> = ({ knowledge, bot }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchIntent, setSearchIntent] = useState<string>('');
  const [intents, setIntents] = useState<BotIntent[]>(knowledge?.intents || []);
  const [showImporter, setShowImporter] = useState<boolean>(false);
  const navigate = useNavigate();
  const insertIntent = useBotKnowledgeIntentInsert();
  const updateKnowlegde = useBotKnowlegdeUpdate()
  const importKnowlegde = useBotKnowlegdeImport()
  const removeIntent = useBotKnowledgeIntentDelete();

  useEffect(() => {
    setSearchIntent(searchParams.get('q') || '');
  }, [searchParams]);


  useEffect(() => {
    async function initializePreline() {
      const { HSAccordion, HSOverlay } = await import('preline/preline');
      setTimeout(() => {
        HSAccordion.autoInit();
        HSOverlay.autoInit();
      }, 500);
    }

    initializePreline();
  }, [intents]);


  const onIntentRemove = useCallback(async (intentId: string) => {
    const updatedIntents = intents.filter(intent => intent.id !== intentId);
    setIntents(updatedIntents);
    removeIntent.mutateAsync({
      variables: {
        bot_id: bot.id as string,
        knowledge_id: knowledge.id as string,
        intent_id: intentId
      }
    })
    
  }, [intents, knowledge.id]);


  const handleImport = async (newIntents: BotIntent[]) => {

    try {

      const updatedIntents = [...intents, ...newIntents];

      setIntents(updatedIntents);
      setShowImporter(false);

      importKnowlegde.mutateAsync({
        variables: {
          knowledge_id: knowledge.id as string,
          intents: updatedIntents
        }
      })


    } catch (error) {
      console.error("Failed to import intents:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  useEffect(() => {
    setIntents(knowledge?.intents || []);
  }, [knowledge?.intents])

  return (
    <>
      <div className='md:py-2.5 px-4 sm:px-6 lg:px-8'>
        <div className="sm:pb-0 sm:pt-2 space-y-5">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div className='flex gap-2'>
              <h1 className="text-lg md:text-xl font-semibold text-stone-800 dark:text-neutral-200">
                {knowledge.name}
              </h1>
              <h1 className="text-lg md:text-xl font-semibold text-stone-600 dark:text-neutral-200">
                ({intents.length})
              </h1>
            </div>
            <div className="flex gap-2">
              <AddButton />
              <ImportButton onClick={() => setShowImporter(!showImporter)} />
            </div>
          </div>

          {showImporter && (
            <IntentImporter
              existingIntents={intents}
              onImport={handleImport}
            />
          )}

          <IntentsList
            bot={bot}
            knowledgeId={knowledge.id as string}
            searchIntent={searchIntent}
            intents={intents}
            onIntentRemove={onIntentRemove}
          />

        </div>
        <BasicAddModal
          id="hs-pro-create-intent-modal"
          title="Add Intent"
          fields={[
            {
              name: 'intent',
              label: 'Intent Name',
              type: 'text',
              required: true,
              placeholder: 'Enter intent name',
            },
            {
              name: 'name',
              label: 'Question',
              type: 'text',
              required: true,
              placeholder: 'Enter user question',
            }
          ]}
          onOk={(data) => {
            const newIntent: BotIntent = {
              id: randomHexString(8),
              name: data.name,
              intent: data.intent,
              quick_reply: "",
              questions: [],
              responses: [],
              tags: []
            }
            setIntents([newIntent, ...intents]);

            insertIntent.mutateAsync({
              variables: {
                knowledge_id: knowledge.id as string,
                intent: data.intent,
                name: data.name
              }
            })
          }}
        />
      </div>
    </>
  );
};

export default MainContent;

// ... (rest of the code remains the same)

const AddButton: React.FC = () => {
  return (
    <button
      type="button"
      className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      data-hs-overlay="#hs-pro-create-intent-modal"
    >
      <svg className="hidden sm:block flex-shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
      </svg>
      <span className="hidden sm:block">Add</span>Intent
    </button>
  )
}


const ImportButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      type="button"
      className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-green-500"
      onClick={onClick}
    >
      <svg className="hidden sm:block flex-shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
        <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" />
      </svg>
      <span className="hidden sm:block">Import</span>Intents
    </button>
  );
};