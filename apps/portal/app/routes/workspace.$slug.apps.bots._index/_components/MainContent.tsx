import React, { useState, useCallback, useEffect } from "react";
import { Loading } from "@repo/preline";
import { BotTable } from "./BotTable";
import PageFilter from "./PageFilter";
import { useNavigate } from "@remix-run/react";
import MainContainer from "~/components/MainContainer";
import {
  Bot,
  BotModalDetails,
  BotIntent,
  BotType,
  Workspace,
} from "~/@types/app";
import { useWorkspaceBots } from "~/hooks/workspace/useWorkspaceBots";
import AddBotModal from "./AddBotModal";
import LoadingModal from "./LoadingModal";
import { getDirectusFileUrl } from "~/utils/files";
import { useBotExtractionChatbotStatus } from "~/hooks/bot/useBotExtractionChatbotStatus";
import { randomHexString } from "~/utils/random";
import { toast } from "react-toastify";
import { useBotInsert } from "~/hooks/bot/useBotInsert";
import { useFileUpload } from "~/hooks/useFileUpload";
import { useBotExtractChatbotConfig } from "~/hooks/bot/useBotExtractChatbotConfig";
import { useBotKnowledgeInsert } from "~/hooks/bot/useBotKnowledgeInsert";
import { transformKnowledgeBase } from "~/utils/utils";

interface MainContentProps {
  workspace: Workspace;
}

const BOT_TYPES: BotType[] = [
  {
    name: "Chatbot",
    description: "Chatbot",
    icon: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </>
    ),
    type: "chatbot",
    status: "active",
  },
  {
    name: "Orderbot",
    description: "Orderbot",
    icon: (
      <>
        <circle cx={8} cy={21} r={1} />
        <circle cx={19} cy={21} r={1} />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </>
    ),
    type: "orderbot",
    status: "inactive",
  },
  // {
  //   name: "Adbot",
  //   description: "Adbot",
  //   icon: "",
  //   type: "adbot"
  // },
  // {
  //   name: "Docbot",
  //   description: "Docbot",
  //   icon: "",
  //   type: "docbot"
  // }
];

const MainContent: React.FC<MainContentProps> = ({ workspace }) => {
  const bots = useWorkspaceBots({
    variables: { workspaceId: workspace?.id as string },
  });
  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const [isBotTypeModalOpen, setIsBotTypeModalOpen] = useState(false);

  const insertBot = useBotInsert();
  const insertBotKnowledge = useBotKnowledgeInsert();
  const fileUpload = useFileUpload();
  const extractChatbotConfig = useBotExtractChatbotConfig();
  const [bot, setBot] = useState<Partial<Bot>>();

  const [taskId, setTaskId] = useState<string>("");
  const {
    data: extractionChatbotStatus,
    // refetch: refetchExtractionChatbotStatus,
    // isRefetching: isRefetchingExtractionChatbotStatus,
  } = useBotExtractionChatbotStatus({ task_id: taskId, enabled: !!taskId });
  const [isExtracting, setIsExtracting] = useState(false);

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const openBotTypeModal = useCallback(() => {
    setIsBotTypeModalOpen(true);
  }, []);

  const filteredItems = React.useMemo(() => {
    if (!searchValue) return bots.data?.items || [];

    const searchText = searchValue.toLowerCase().trim();

    return bots.data?.items.filter((bot) => {
      return bot.name?.toLowerCase().includes(searchText);
    });
  }, [bots.data, searchValue]);

  const handleRowClick = (item: Bot) => {
    navigate(`/apps/bot/${item.id}`);
  };

  //add bot

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
    if (!extractionChatbotStatus) return;

    if (extractionChatbotStatus.response.status === "success") {
      console.log("extractChatbotStatus success", extractionChatbotStatus);
      const { chatbot_config } = extractionChatbotStatus.response;
      const data: Bot = {
        ...bot,
        id: randomHexString(10),
        slug: randomHexString(8),
        date_created: new Date().toISOString(),
        date_updated: new Date().toISOString(),
        team: workspace.id,
        status: "Draft",
        product_name: chatbot_config.name.trim(),
        product_description: chatbot_config.description.trim(),
        greeting_message: chatbot_config.greeting_message.trim(),
        greeting_message_mobile: chatbot_config.greeting_message.trim(),
        context: chatbot_config.context_markdown.trim(),
        guidelines: chatbot_config.instruction.trim(),
      };
      insertBot.mutateAsync(data, {
        onSuccess: (res) => {
          const knowledgeBase = chatbot_config.knowledge_base;
          const intents: BotIntent[] = transformKnowledgeBase(knowledgeBase);
          insertBotKnowledge.mutateAsync(
            {
              variables: {
                bot_id: res.id,
                data: {
                  name: knowledgeBase.name,
                  intents,
                  total_intent: intents.length,
                  lang: knowledgeBase.lang || "en",
                },
              },
            },
            {
              onSuccess: () => {
                toast.success("Bot added successfully");
                navigate(`/apps/bot/${res.id}`);
              },
              onError: (error) => {
                toast.error(error.message || "Failed to add knowledge");
                setIsExtracting(false);
              },
            }
          );
        },
        onError: (error) => {
          toast.error(error.message || "Failed to add bot");
          setIsExtracting(false);
        },
      });
    } else if (
      extractionChatbotStatus &&
      !POLL_STATUSES.includes(extractionChatbotStatus.response.status)
    ) {
      setIsExtracting(false);
      toast.error(extractionChatbotStatus.response.message);
    }
  }, [extractionChatbotStatus]);

  const handleAddBot = async (values: BotModalDetails) => {
    setIsExtracting(true);
    const bot: Partial<Bot> = { name: values.name, type: values.bot_type };
    setBot(bot);
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
    const extractingData = {
      source_type: values.source_type,
      url: values.url,
      text: values.text,
      document_urls: values.document_urls,
      user_prompt: values.user_prompt,
      filter_type: values.url ? "fit" : "",
      max_depth: 0,
      model: "gemini-2.0-flash-001",
      team: workspace.id,
    };

    extractChatbotConfig.mutateAsync(
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

  if (bots.isPending) {
    return <Loading />;
  }

  return (
    <>
      <LoadingModal
        isVisible={isExtracting}
        status={extractionChatbotStatus?.response?.status}
      />
      
      <MainContainer
        title="Chatbots"
        description="Manage your chatbots"
        button={
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
            <span className="hidden sm:block">Add</span>Bot
          </button>
        }
      >
        <PageFilter onChanged={handleSearchChange} />
        <BotTable bots={filteredItems} onRowClick={handleRowClick} />
      </MainContainer>

      <AddBotModal
        workspaceId={workspace.id}
        isOpen={isBotTypeModalOpen}
        onClose={() => setIsBotTypeModalOpen(false)}
        onOk={(botDetails: BotModalDetails & { documentFile: File[] | null }) => {
          setIsBotTypeModalOpen(false);
          console.log("Bot Details:", botDetails);

          handleAddBot(botDetails);
        }}
        botTypes={BOT_TYPES}
      />
    </>
  );
};

export default MainContent;
