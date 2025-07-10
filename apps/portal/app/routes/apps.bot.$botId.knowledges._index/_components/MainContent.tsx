import React, { useCallback, useEffect, useState } from "react";
import { useBotKnowlegdes } from "~/hooks/bot/useBotKnowlegdes";
import {
  Bot,
  BotIntent,
  ChatbotKnowledgeExtractionRequest,
  KnowledgeModalDetails,
} from "~/@types/app";
import { Loading } from "@repo/preline";
import TableFilter from "./TableFilter";
import { useNavigate } from "@remix-run/react";
import { useBotKnowledgeInsert } from "~/hooks/bot/useBotKnowledgeInsert";
import { cn } from "@repo/ui/utils";
import AddKnowledgeModal from "./AddKnowledgeModal";
import { toast } from "react-toastify";
import { getDirectusFileUrl } from "~/utils/files";
import { useBotExtractChatbotKnowledge } from "~/hooks/bot/useBotExtractChatbotKnowledge";
import { useBotExtractionChatbotKnowledge } from "~/hooks/bot/useBotExtractionChatbotKnowledge";
import { useFileUpload } from "~/hooks/useFileUpload";
import { transformKnowledgeBase } from "~/utils/utils";
import LoadingModal from "./LoadingModal";

interface MainContentProps {
  bot: Bot;
}

const MainContent: React.FC<MainContentProps> = ({ bot }) => {
  const { data: knowledges, isLoading } = useBotKnowlegdes(bot.id as string);
  const [isKnowledgeModalOpen, setIsKnowledgeModalOpen] = useState(false);
  const insertBotKnowledge = useBotKnowledgeInsert();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [taskId, setTaskId] = useState<string>("");
  const [isExtracting, setIsExtracting] = useState(false);
  const { data: extractionChatbotKnowledge } = useBotExtractionChatbotKnowledge(
    { task_id: taskId, enabled: !!taskId }
  );
  const fileUpload = useFileUpload();
  const extractChatbotKnowledge = useBotExtractChatbotKnowledge();
  const [isAddKnowledgeLoading, setIsAddKnowledgeLoading] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleRowClick = (id: string) => {
    navigate("./" + id);
  };

  const openBotTypeModal = useCallback(() => {
    setIsKnowledgeModalOpen(true);
  }, []);

  const filteredItems = React.useMemo(() => {
    if (!searchValue)
      return (
        knowledges
          ?.map((item) => {
            let no = 0;
            try {
              no = Number(item.name?.split(".")[0]);
            } catch (e) {
              // Handle error if needed
            }
            return { ...item, no };
          })
          .sort((a, b) => a.no - b.no) || []
      );

    const searchText = searchValue.toLowerCase().trim();

    return knowledges
      ?.filter((item) => {
        return item.name?.toLowerCase().includes(searchText);
      })
      .map((item) => {
        let no = 0;
        try {
          no = Number(item.name?.split(".")[0]);
        } catch (e) {
          // Handle error if needed
        }
        return { ...item, no };
      })
      .sort((a, b) => a.no - b.no);
  }, [knowledges, searchValue]);

  useEffect(() => {
    const POLL_STATUSES = [
      "queued",
      "processing",
      "processing_documents",
      "downloading",
      "crawling",
      "generating",
      "ready_for_extraction",
    ];
    if (!extractionChatbotKnowledge) return;

    if (extractionChatbotKnowledge.response.status === "success") {
      console.log("extractChatbotStatus success", extractionChatbotKnowledge);
      const { knowledge_base } = extractionChatbotKnowledge.response;
      const intents: BotIntent[] = transformKnowledgeBase(knowledge_base);
      insertBotKnowledge.mutateAsync(
        {
          variables: {
            bot_id: bot.id,
            data: {
              name: knowledge_base.name,
              intents,
              total_intent: intents.length,
              lang: knowledge_base.lang || "en",
            },
          },
        },
        {
          onSuccess: (res) => {
            toast.success("Knowledge added successfully");
            navigate(res.id ?? "");
          },
          onError: (error) => {
            toast.error(error.message || "Failed to add knowledge");
            setIsExtracting(false);
          },
        }
      );
    } else if (
      extractionChatbotKnowledge &&
      !POLL_STATUSES.includes(extractionChatbotKnowledge.response.status)
    ) {
      setIsExtracting(false);
      toast.error(extractionChatbotKnowledge.response.message);
    }
  }, [extractionChatbotKnowledge]);

  const handleAddKnowledge = async (values: KnowledgeModalDetails) => {
    setIsExtracting(true);
    const documentUrls: string[] = [];
    if (values.source_type === "document" && values.documentFile) {
      const files = values.documentFile;
      while (files.length >= 1) {
        const file = files.shift();
        if (file) {
          await fileUpload.mutateAsync(
            { file, folder: "f2d6968d-3100-4aac-be27-8f31de96a99f" },
            {
              onSuccess: (res) => {
                const fileUrl = getDirectusFileUrl(res.id as string, {
                  baseUrl: "aiya:/",
                  key: "",
                });
                if (fileUrl) {
                  documentUrls.push(fileUrl);
                }
              },
              onError: (error) => {
                toast.error(error.message || "Failed to upload document", {
                  autoClose: 10000,
                  closeOnClick: true,
                });
                setIsExtracting(false);
                return;
              },
            }
          );
        }
      }
      values.document_urls = documentUrls;
    }
    if (!values.source_type) {
      toast.error("Please select a source type");
      setIsExtracting(false);
      return;
    }
    const extractingData: ChatbotKnowledgeExtractionRequest = {
      kb_name: values.name,
      source_type: values.source_type,
      url: values.url,
      text: values.text,
      document_urls: values.document_urls,
      model: "gemini-2.5-flash",
      team: bot.team as string,
      user_prompt: values.user_prompt,
      max_intents: values.text ? 50 : 100,
      max_depth: 0,
      max_pages: values.url ? 50 : 0,
      include_external: false,
    };

    extractChatbotKnowledge.mutateAsync(
      { variables: extractingData },
      {
        onSuccess: (res) => {
          setTaskId(res.task_id);
        },
        onError: (error) => {
          toast.error(error.message || "Failed to add bot");
          setIsExtracting(false);
        },
      }
    );
  };

  if (isLoading || isAddKnowledgeLoading || !knowledges) {
    return <Loading />;
  }

  return (
    <>
      <LoadingModal
        isVisible={isExtracting}
        status={extractionChatbotKnowledge?.response?.status}
      />

      <div className="md:py-2.5 px-4 sm:px-6 lg:px-8">
        <div className="sm:pb-0 sm:pt-5 space-y-5">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-center gap-2">
            <div>
              <h1 className="text-lg md:text-xl font-semibold text-stone-800 dark:text-neutral-200">
                Knowledges ({knowledges?.length ?? 0})
              </h1>
            </div>
          </div>
          {/* End Header */}
          <div className="flex justify-between">
            <div className="flex-1">
              <TableFilter onChanged={handleSearchChange} />
            </div>
            <div>
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                onClick={openBotTypeModal}
              >
                <svg
                  className="hidden sm:block shrink-0 size-3 me-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z"
                  />
                </svg>
                <span className="hidden sm:block">Add Knowledge</span>
              </button>
            </div>
          </div>

          <div className="p-5 md:p-8 bg-white border border-gray-200 shadow-xs rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
            <div className="overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
              <div className="min-w-full inline-block align-middle">
                {/* Table */}
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                  <thead>
                    <tr>
                      <th scope="col" className="min-w-[250px] ">
                        <div className="pe-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                          Name
                        </div>
                      </th>
                      <th scope="col" className="min-w-48">
                        <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                          Total Intents
                        </div>
                      </th>
                      <th scope="col">
                        <div className="px-4 py-3 text-start flex items-center gap-x-1 text-sm font-medium text-gray-800 dark:text-neutral-200">
                          Status
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {filteredItems?.map((item) => (
                      <tr key={item.id}>
                        <td className="size-px whitespace-nowrap pe-4 py-3 cursor-pointer">
                          <div
                            className="w-full flex items-center gap-x-3"
                            onClick={() => handleRowClick(item.id as string)}
                          >
                            <div className="grow">
                              <span className="text-sm font-medium text-gray-800 dark:text-neutral-200">
                                {item.name}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="size-px whitespace-nowrap px-4 py-3">
                          <span className="text-sm text-gray-600 dark:text-neutral-400">
                            {item.total_intent}
                          </span>
                        </td>
                        <td className="size-px whitespace-nowrap px-4 py-3">
                          <span
                            className={cn(
                              "inline-flex items-center gap-x-1.5 py-1.5 px-2.5 text-xs font-medium rounded-full",
                              {
                                "bg-yellow-100 text-yellow-800 dark:bg-red-500/10 dark:text-yellow-500":
                                  item.status === "draft",
                                "bg-teal-100 text-teal-800 dark:bg-teal-500/10 dark:text-teal-500":
                                  item.status === "published",
                              }
                            )}
                          >
                            <span
                              className={cn(
                                "size-1.5 inline-block bg-gray-800 rounded-full dark:bg-neutral-200",
                                {
                                  "bg-yellow-500": item.status === "draft",
                                  "bg-teal-500": item.status === "published",
                                }
                              )}
                            />
                            {item.status === "draft" ? "Draft" : "Published"}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* End Table */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddKnowledgeModal
        isOpen={isKnowledgeModalOpen}
        onClose={() => setIsKnowledgeModalOpen(false)}
        onOk={(
          knowledgeModalDetails: KnowledgeModalDetails & {
            documentFile: File[] | null;
          }
        ) => {
          setIsKnowledgeModalOpen(false);
          // console.log("Knowledge Details:", knowledgeModalDetails);
          if (knowledgeModalDetails.source_type === "empty") {
            setIsAddKnowledgeLoading(true);
            insertBotKnowledge
              .mutateAsync({
                variables: {
                  bot_id: bot.id as string,
                  data: {
                    name: knowledgeModalDetails.name,
                    lang: "th",
                    intents: [],
                    total_intent: 0,
                  },
                },
              },{
                onSuccess: (item) => {
                  toast.success("Knowledge added successfully");
                  navigate(item.id ?? "");
                },
                onError: (error) => {
                  setIsAddKnowledgeLoading(false);
                  toast.error(error.message || "Failed to add knowledge");
                },
              })
            return;
          }

          handleAddKnowledge(knowledgeModalDetails);
        }}
      />
      {/* <BasicAddModal
        title='Add Knowledge'
        id='hs-add-knowledge'
        fields={[
          {
            name: 'name',
            label: 'Knowledge name',
            type: 'text',
            placeholder: 'My Knowledge',
            required: true
          },
        ]}
        onOk={(values) => {
          insertBotKnowledge.mutateAsync({
            variables: {
              bot_id: bot.id as string,
              data: {
                ...values,
                lang: 'th',
                intents: [],
                total_intent: 0
              }
            }
          }).then((item) => {
            navigate(item.id ?? '')
          })
        }}
      /> */}
    </>
  );
};

export default MainContent;
