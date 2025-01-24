import React, { useEffect, useState, useCallback } from 'react';
import { Bot, BotIntent, BotKnowledge, ResponseElementType } from '~/@types/app';
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
import { cn } from '@repo/ui/utils';
import { CloudUpload, DownloadIcon, EllipsisVertical, OctagonPause, Rocket, Rss, Trash, Upload } from 'lucide-react';
import { useBotKnowlegdeDelete } from '~/hooks/bot/useBotKnowlegdeDelete';
import { set } from 'lodash';
import { Loading } from '@repo/preline';
import { toast } from 'react-toastify';
import { useBotKnowlegdeDeploy } from '~/hooks/bot/useBotKnowlegdeDeploy';
import { useBotKnowlegdeUndeploy } from '~/hooks/bot/useBotKnowlegdeUndeploy';
import { jsonArrayToExcel } from '@repo/shared/utils/xlsx-helper';
import { format } from 'date-fns';
import { useBotGenIntent } from '~/hooks/bot/useBotGenIntent';
import { useBotKnowledgeIntentMultipleInsert } from '~/hooks/bot/useBotKnowledgeIntentMultipleInsert';
import BasicModal from '~/components/BasicModal';

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
  const multiInsertIntent = useBotKnowledgeIntentMultipleInsert();
  const updateKnowlegde = useBotKnowlegdeUpdate()
  const importKnowlegde = useBotKnowlegdeImport()
  const deleteKnowlegde = useBotKnowlegdeDelete()
  const removeIntent = useBotKnowledgeIntentDelete();

  const deployKnowledge = useBotKnowlegdeDeploy();
  const undeployKnowledge = useBotKnowlegdeUndeploy();

  const generateIntent = useBotGenIntent();

  const [loading, setLoading] = useState<boolean>(false);
  const [generateLoading, setGenerateLoading] = useState<boolean>(false);

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
          intents: newIntents
        }
      })


    } catch (error) {
      console.error("Failed to import intents:", error);
      // Handle error (e.g., show error message to user)
    }
  };

  //export using jsonArrayToExcel
  const handleExport = async () => {
    const data = intents.map(intent => {
      const questions = intent.questions.map(question => question.question).join('\n####')
      const answers = intent.responses.map(response => response.payload?.text).join('\n####')

      return {
        name: intent.name,
        intent: intent.intent,
        questions: "####" + questions,
        answers: "####" + answers,
        tags: "####" + intent.tags.join('\n####'),
      }
    });

    const fileName = `knowledge-${knowledge.name}-${format(new Date(), 'yyyyMMddHHmmss')}.xlsx`;

    console.log('data', data);

    jsonArrayToExcel(data, {
      fileName,
      sheetName: 'Intents'
    });
  }



  const handleStatusChange = async (status: 'draft' | 'published') => {
    try {
      updateKnowlegde.mutateAsync({
        variables: {
          key: knowledge.id as string,
          data: {
            status
          }
        }
      })
    } catch (error) {
      console.error("Failed to update knowledge status:", error);
      // Handle error (e.g., show error message to user)
    }
  }

  const handleDelete = async () => {
    try {
      setLoading(true);
      deleteKnowlegde.mutateAsync({
        variables: {
          key: knowledge.id as string
        }
      }).then(() => {
        setLoading(false);
        navigate(`/apps/bot/${bot.id}/knowledges`);
      })
    } catch (error) {
      console.error("Failed to delete knowledge:", error);
      // Handle error (e.g., show error message to user)
    }
  }

  const handleDeploy = async () => {
    try {
      deployKnowledge.mutateAsync({
        variables: {
          key: knowledge.id as string,
        }
      }).then(() => {
        toast.success('Knowledge deployed successfully');
      }).catch((error) => {
        toast.error('Failed to deploy knowledge');
      })
    } catch (error) {
      console.error("Failed to update knowledge status:", error);
    }
  }

  const handleUndeploy = async () => {
    try {
      undeployKnowledge.mutateAsync({
        variables: {
          key: knowledge.id as string,
        }
      }).then(() => {
        toast.success('Knowledge undeployed successfully');
      }).catch((error) => {
        toast.error('Failed to undeploy knowledge');
      })
    } catch (error) {
      console.error("Failed to update knowledge status:", error);
    }
  }

  useEffect(() => {
    setIntents(knowledge?.intents || []);
  }, [knowledge?.intents])

  if (loading) {
    return <Loading />
  }

  if (generateLoading) {
    return <Loading />
  }

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
              <div>
                {/* drop down status */}
                <div className="hs-dropdown relative inline-flex">
                  <span className={cn("inline-flex items-center gap-x-1.5 py-1.5 px-2.5 text-xs font-medium rounded-full", {
                    'bg-yellow-100 text-yellow-800 dark:bg-red-500/10 dark:text-yellow-500': knowledge.status === 'draft',
                    "bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500": knowledge.status === 'published',
                  })}
                  >
                    <span className={cn("size-1.5 inline-block bg-gray-800 rounded-full dark:bg-neutral-200", {
                      'bg-yellow-500': knowledge.status === 'draft',
                      'bg-teal-500': knowledge.status === 'published',
                    })} />
                    {knowledge.status === 'draft' ? 'Draft' : 'Published'}
                  </span>
                  {/* <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                    role="menu"
                  >
                    <div className="p-1">
                      <button
                        className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        onClick={() => handleStatusChange('draft')}
                      >
                        Draft
                      </button>
                      <button
                        className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                        onClick={() => handleStatusChange('published')}
                      >
                        Published
                      </button>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <AddMagicButton />
              <AddButton />
              {/* drop down delete & import */}
              <div className="hs-dropdown relative inline-flex">
                <EllipsisVertical className='cursor-pointer' />
                <div
                  className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 transition-[opacity,margin] duration opacity-0 hidden z-10 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900"
                  role="menu"
                >
                  <div className="p-1">
                    <button
                      className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      onClick={() => handleDeploy()}
                    >
                      <Rocket className='size-4' />
                      Publish
                    </button>
                    <button
                      className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      onClick={() => handleUndeploy()}
                    >
                      <OctagonPause className='size-4' />
                      Unpublish
                    </button>
                    <button
                      className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      onClick={() => handleExport()}
                    >
                      <Upload className='size-4' />
                      Export
                    </button>
                    <button
                      className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      onClick={() => setShowImporter(!showImporter)}
                    >
                      <DownloadIcon className='size-4' />
                      Import
                    </button>
                    <button
                      className="flex w-full items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                      onClick={handleDelete}
                    >
                      <Trash className='size-4' />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
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
              name: 'name',
              label: 'Question',
              type: 'text',
              required: true,
              placeholder: 'Enter user question',
            },
            {
              name: 'intent',
              label: 'Intent Name',
              type: 'text',
              required: true,
              placeholder: 'Enter intent name',
            },
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
                ...newIntent
              }
            })
          }}
        />

        <BasicAddModal
          id="hs-pro-create-magic-intent-modal"
          title="Magic Intent"
          submitButtonLabel='Generate'
          className="lg:max-w-4xl lg:w-full lg:mx-auto"
          fields={[
            {
              name: 'faq',
              // label: 'FAQ',
              type: 'textarea',
              required: true,
              placeholder: 'Enter your FAQ',
              maxLength: 5000,
            },
          ]}
          onOk={(data) => {
            // setGenerateLoading(true)
            window.HSOverlay.open('#hs-static-backdrop-modal')

            generateIntent.mutateAsync(data.faq).then((response) => {
              const newIntents = response.data.map((item) => ({
                id: randomHexString(8),
                name: item.name,
                intent: item.intent,
                quick_reply: item.quickReply,
                questions: item.questions.map((question) => ({ id: randomHexString(8), question })),
                responses: item.answers.split("\n").map((answer) => ({ id: randomHexString(8), type: ResponseElementType.Text, payload: { text: answer } })),
                tags: item.tags
              }))

              setIntents([...newIntents, ...intents]);

              multiInsertIntent.mutateAsync({
                variables: {
                  knowledge_id: knowledge.id as string,
                  intents: newIntents
                }
              }).then(() => {
                // setGenerateLoading(false)
                window.HSOverlay.close('#hs-static-backdrop-modal')
                toast.success('Intents generated successfully');
              })
            }).catch((error) => {
              console.error("Failed to generate intent:", error);
            })



          }}
        />

        <GenerateWaitModal />

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
      className="py-3 px-4 inline-flex items-center gap-x-1 text-sm font-medium rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 focus:outline-none focus:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-400 dark:hover:bg-blue-900 dark:focus:bg-blue-900"
      data-hs-overlay="#hs-pro-create-intent-modal"
    >
      <svg className="hidden sm:block flex-shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
      </svg>
      <span className="hidden sm:block">Add</span>Intent
    </button>
  )
}

const AddMagicButton: React.FC = () => {
  return (
    <button
      type="button"
      className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      data-hs-overlay="#hs-pro-create-magic-intent-modal"
    // onClick={() => {
    //   window.HSOverlay.open('#hs-static-backdrop-modal')
    // }}
    >
      <svg className="hidden sm:block flex-shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
      </svg>
      <span className="hidden sm:block">Add</span>Magic Intent
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


const GenerateWaitModal: React.FC<{}> = ({ }) => {
  return (
    <div id="hs-static-backdrop-modal" className="hs-overlay [--overlay-backdrop:static] hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none" role="dialog" tabindex="-1" aria-labelledby="hs-static-backdrop-modal-label" data-hs-overlay-keyboard="false">
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500  mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <h3 id="hs-static-backdrop-modal-label" className="font-bold text-gray-800">
              AI Magic Intent
            </h3>
          </div>
          <div className="p-4 overflow-y-auto">
            <p className="mt-1 text-gray-800">
              Generating intents, may be take up to 5 mins. Please do not close this window.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}