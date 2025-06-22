import React, { useState, useCallback, useEffect } from "react";
import { Loading } from "@repo/preline";
import { BotTable } from "./BotTable";
import PageFilter from "./PageFilter";
import { useNavigate } from "@remix-run/react";
import MainContainer from "~/components/MainContainer";
import { Bot, BotDetails, BotType, Workspace } from "~/@types/app";
import { useWorkspaceBots } from "~/hooks/workspace/useWorkspaceBots";
import AddBotModal from "./AddBotModal";
import { getDirectusFileUrl } from "~/utils/files";
import { useBotExtractionChatbotStatus } from "~/hooks/bot/useBotExtractionChatbotStatus";
import { randomHexString } from "~/utils/random";
import { toast } from "react-toastify";
import { useBotInsert } from "~/hooks/bot/useBotInsert";
import { useFileUpload } from "~/hooks/useFileUpload";
import { useBotExtractChatbotConfig } from "~/hooks/bot/useBotExtractChatbotConfig";

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
  const fileUpload = useFileUpload();
  const extractChatbotConfig = useBotExtractChatbotConfig();
  const [bot, setBot] = useState<Partial<Bot>>();

  const [taskId, setTaskId] = useState<string>("");
  const {
    data: extractionChatbotStatus,
    // refetch: refetchExtractionChatbotStatus,
    // isRefetching: isRefetchingExtractionChatbotStatus,
  } = useBotExtractionChatbotStatus({
    task_id: taskId,
    enabled: !!taskId,
  });
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
        product_name: chatbot_config.name,
        product_description: chatbot_config.description,
        greeting_message: chatbot_config.greeting_message,
        greeting_message_mobile: chatbot_config.greeting_message,
        context: chatbot_config.context_markdown,
        guidelines: chatbot_config.instruction,
      };
      insertBot.mutateAsync(data, {
        onSuccess: (res) => {
          toast.success("Bot added successfully");
          navigate(`/apps/bot/${res.id}`);
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

  const handleAddBot = async (values: BotDetails) => {
    setIsExtracting(true);
    console.log("values", values);
    const bot: Partial<Bot> = {
      name: values.name,
      type: values.bot_type,
    };
    setBot(bot);
    const documentUrls: string[] = [];
    if (values.source_type === "document" && values.documentFile) {
      const files = values.documentFile;
      while (files.length >= 1) {
        const file = files.shift();
        if (file) {
          const res = await fileUpload.mutateAsync({
            file,
            folder: "f2d6968d-3100-4aac-be27-8f31de96a99f",
          });
          const fileUrl = getDirectusFileUrl(res.id as string, {
            baseUrl: "aiya:/",
            key: "",
          });
          if (fileUrl) {
            documentUrls.push(fileUrl);
          }
        }
      }
      values.document_urls = documentUrls;
    }

    const extractingData = {
      source_type: values.source_type,
      url: values.url,
      text: values.text,
      document_urls: values.document_urls,
      user_prompt: values.user_prompt,
      filter_type: values.url ? "fit" : "",
      max_depth: values.url ? 1 : 0,
      model: "gemini-2.0-flash-001",
      team: workspace.id,
    };

    extractChatbotConfig.mutateAsync(
      {
        variables: extractingData,
      },
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

  const getStatusMessage = (status?: string) => {
    switch (status) {
      case "queued":
        return "Preparing Your Chatbot";
      case "processing":
        return "Processing Your Request";
      case "crawling":
        return "Gathering Information";
      case "generating":
        return "Generating Responses";
      default:
        return "Processing Your Request";
    }
  };

  const getStatusSubtitle = (status?: string) => {
    switch (status) {
      case "queued":
        return "Your request is in the queue";
      case "processing":
        return "Analyzing the content";
      case "crawling":
        return "Collecting data from the source";
      case "generating":
        return "Creating your chatbot responses";
      default:
        return "Please wait while we set everything up";
    }
  };

  const getProgressWidth = (status?: string) => {
    const statusOrder = [
      "queued",
      "processing",
      "crawling",
      "generating",
      "success",
    ];
    const index = statusOrder.indexOf(status || "queued");
    return `${((index + 1) / statusOrder.length) * 100}%`;
  };

  if (bots.isPending) {
    return <Loading />;
  }

  return (
    <>
      {isExtracting && (
        <div className="fixed inset-0 w-screen h-screen flex flex-col items-center justify-center bg-white/95 z-[9999] p-4 transition-all duration-300">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 max-w-md w-full mx-4 shadow-xl transform transition-all duration-300 hover:shadow-2xl">
            <div className="flex flex-col items-center space-y-6">
              {/* Animated Loading Icon */}
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 rounded-full border-4 border-blue-100 animate-ping"></div>
                <div className="absolute inset-1 rounded-full border-4 border-blue-200 animate-spin [animation-duration:3s]"></div>
                <div className="absolute inset-3 rounded-full border-4 border-gray-100"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Status Text */}
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-gray-800">
                  {getStatusMessage(extractionChatbotStatus?.response?.status)}
                </h3>
                {extractionChatbotStatus?.response?.status && (
                  <div className="text-blue-600 font-medium text-lg capitalize tracking-wide">
                    {extractionChatbotStatus.response.status}
                  </div>
                )}
                <div className="text-gray-600 text-sm mt-2">
                  {getStatusSubtitle(extractionChatbotStatus?.response?.status)}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 rounded-full h-2.5 mt-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: getProgressWidth(
                      extractionChatbotStatus?.response?.status
                    ),
                  }}
                ></div>
              </div>

              <p className="text-xs text-gray-400 text-center mt-2">
                This may take a few moments. Please don&apos;t close this
                window.
              </p>
            </div>
          </div>
        </div>
      )}
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
        onOk={(botDetails: BotDetails & { documentFile: File[] | null }) => {
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
