import React, { useEffect, useState } from "react";
import { Loading } from "@repo/preline";
import AddBot from "../../workspace.$slug.apps.bots._index/_components/AddBot";
import { useNavigate } from "@remix-run/react";
import { useBotInsert } from "~/hooks/bot/useBotInsert";
import { Bot, Workspace } from "~/@types/app";
import { useWorkspaceBots } from "~/hooks/workspace/useWorkspaceBots";
import { toast } from "react-toastify";
import { useBotExtractChatbotConfig } from "~/hooks/bot/useBotExtractChatbotConfig";
import { useBotExtractionChatbotStatus } from "~/hooks/bot/useBotExtractionChatbotStatus";
import { randomHexString } from "~/utils/random";
// Remove unused import
// import { uploadFile } from "~/services/file";
import { useFileUpload } from "~/hooks/useFileUpload";
import { getDirectusFileUrl } from "~/utils/files";

interface MainContentProps {
  workspace: Workspace;
}

type TYPES = "chatbot" | "adbot";

interface BOT_TYPES {
  name: string;
  description: string;
  icon: string;
  type: TYPES;
}

const BOT_TYPES = [
  {
    name: "Chatbot",
    description: "Chatbot",
    icon: "",
    type: "chatbot",
  },
  // {
  //   name: "Adbot",
  //   description: "Adbot",
  //   icon: "",
  //   type: "adbot"
  // },
  {
    name: "Orderbot",
    description: "Orderbot",
    icon: "",
    type: "orderbot",
  },
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
  const insertBot = useBotInsert();
  const fileUpload = useFileUpload();
  const extractChatbotConfig = useBotExtractChatbotConfig();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<TYPES | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBotSelect = (type: TYPES) => {
    setSelectedType(type);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedType(null);
  };
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
  const [bot, setBot] = useState<Partial<Bot>>();

  // Remove unused search state
  // const [searchValue, setSearchValue] = useState("");

  // const handleSearchChange = (value: string) => {
  //   setSearchValue(value);
  // };

  // const filteredItems = React.useMemo(() => {
  //   if (!searchValue) return bots.data?.items || [];

  //   const searchText = searchValue.toLowerCase().trim();

  //   return bots.data?.items.filter((bot) => {
  //     return bot.name?.toLowerCase().includes(searchText);
  //   });
  // }, [bots.data, searchValue]);

  useEffect(() => {
    const POLL_STATUSES = ["queued", "processing", "processing_documents", "downloading", "crawling", "generating"];
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
      console.log("extractChatbotStatus error", extractionChatbotStatus);
    }
  }, [extractionChatbotStatus, bot, insertBot, navigate, workspace.id]);

  interface BotFormValues {
    name: string;
    source_type: string;
    documentFile?: File;
    url?: string;
    text?: string;
    document_urls?: string[];
    user_prompt?: string;
  }

  const handleAddBot = async (values: BotFormValues) => {
    setIsExtracting(true);
    console.log("values", values);
    // Create a minimal bot object with required fields
    const bot: Partial<Bot> = {
      name: values.name,
      type: selectedType as TYPES,
      // Add required fields with default values
      id: '',
      slug: '',
      date_created: new Date().toISOString(),
      date_updated: new Date().toISOString(),
      team: workspace.id,
      status: 'Draft',
    };
    setBot(bot);
    if (values.source_type === "document") {
      const res = await fileUpload.mutateAsync({file: values.documentFile, folder: "f2d6968d-3100-4aac-be27-8f31de96a99f"});
      const url = getDirectusFileUrl(res.id as string,{
        baseUrl: import.meta.env.DIRECTUS_URL,
      })
      values.document_urls = [url];
    }

    extractChatbotConfig.mutateAsync(
      {
        variables: {
          source_type: values.source_type,
          url: values.url,
          text: values.text,
          document_urls: values.document_urls,
          user_prompt: values.user_prompt,
          filter_type: values.url ? "fit" : "",
          max_depth: values.url ? 1 : 0,
          model: "gemini-2.0-flash-001",
          team: workspace.id,
        },
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
    
    // Close the modal after submission
    handleModalClose();

    // insertBot.mutateAsync({
    //   ...values,
    //   id: randomHexString(10),
    //   slug: randomHexString(8),
    //   date_created: new Date(),
    //   date_updated: new Date(),
    //   team: workspace.id,
    //   status: 'Draft',
    //   // metadata: {
    //   //   "basic": {},
    //   //   "enabled": 1,
    //   //   "bot_name": "",
    //   //   "shop_info": {
    //   //     "api_key": "",
    //   //     "shop_url": "",
    //   //     "shop_name": "",
    //   //     "shop_type": "",
    //   //     "basic_info": {
    //   //       "tel": "",
    //   //       "email": "",
    //   //       "address": ""
    //   //     }
    //   //   }
    //   // }
    // }).then((res) => {
    //   toast.success('Bot added successfully')
    //   navigate(`/apps/bot/${res.id}`)
    // })
  };

  // Remove unused function
  // const handleRowClick = (item: Bot) => {
  //   navigate(`/apps/bot/${item.id}`);
  // };

  if (bots.isPending) {
    return <Loading />;
  }

  // Helper functions for loading component
  const getStatusMessage = (status?: string) => {
    switch (status) {
      case 'queued':
        return 'Preparing Your Chatbot';
      case 'processing':
        return 'Processing Your Request';
      case 'crawling':
        return 'Gathering Information';
      case 'generating':
        return 'Generating Responses';
      default:
        return 'Processing Your Request';
    }
  };

  const getStatusSubtitle = (status?: string) => {
    switch (status) {
      case 'queued':
        return 'Your request is in the queue';
      case 'processing':
        return 'Analyzing the content';
      case 'crawling':
        return 'Collecting data from the source';
      case 'generating':
        return 'Creating your chatbot responses';
      default:
        return 'Please wait while we set everything up';
    }
  };

  const getProgressWidth = (status?: string) => {
    const statusOrder = ['queued', 'processing', 'crawling', 'generating', 'success'];
    const index = statusOrder.indexOf(status || 'queued');
    return `${((index + 1) / statusOrder.length) * 100}%`;
  };

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
                    width: getProgressWidth(extractionChatbotStatus?.response?.status)
                  }}
                ></div>
              </div>
              
              <p className="text-xs text-gray-400 text-center mt-2">
                This may take a few moments. Please don&apos;t close this window.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="p-2 sm:p-5 sm:py-0 md:pt-5 grid grid-cols-2 gap-2">
        {BOT_TYPES.map((botItem, key) => (
          <button
            key={key}
            type="button"
            className="p-4 group w-full text-left relative flex flex-col border border-gray-200 bg-white hover:border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => handleBotSelect(botItem.type as TYPES)}
            onKeyDown={(e) => e.key === 'Enter' && handleBotSelect(botItem.type as TYPES)}
            aria-label={`Add ${botItem.name}`}
          >
            <div className="h-full flex gap-x-5">
              <div className="grow">
                <div className="h-full flex flex-col">
                  <div>
                    <h3 className="inline-flex items-center gap-x-1 font-medium text-gray-800">
                      {botItem.name}
                    </h3>
                  </div>
                  <div className="pt-1 mt-auto">
                    <span className="inline-flex items-center gap-x-2 text-sm font-medium group-disabled:opacity-50 group-disabled:pointer-events-none text-blue-600 group-hover:text-blue-700 group-hover:underline">
                      Click to Add
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Add Bot Modal */}
      {isModalOpen && selectedType && (
        <AddBot
          id="add-bot-modal"
          type={selectedType}
          onOk={handleAddBot}
          documentFile={null}
          open={isModalOpen}
          onClose={handleModalClose}
        />
      )}
      {/* Add Bot Modal */}
      {isModalOpen && selectedType && (
        <AddBot
          id="add-bot-modal"
          type={selectedType}
          onOk={handleAddBot}
          documentFile={null}
          open={isModalOpen}
          onClose={handleModalClose}
        />
      )}
    </>
  );
};

export default MainContent;
