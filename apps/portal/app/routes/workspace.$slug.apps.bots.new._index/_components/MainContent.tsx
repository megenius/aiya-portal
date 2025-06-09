import React, { useEffect, useState } from "react";
import { Loading } from "@repo/preline";
import AddBot from "./AddBot";
import { useNavigate } from "@remix-run/react";
import { useBotInsert } from "~/hooks/bot/useBotInsert";
import { Bot, Workspace } from "~/@types/app";
import { useWorkspaceBots } from "~/hooks/workspace/useWorkspaceBots";
import { toast } from "react-toastify";
import { useBotExtractChatbotConfig } from "~/hooks/bot/useBotExtractChatbotConfig";
import { useBotExtractionChatbotStatus } from "~/hooks/bot/useBotExtractionChatbotStatus";
import { randomHexString } from "~/utils/random";
import { uploadFile } from "~/services/file";
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
  const [selectedType, setSelectedType] = useState<TYPES>();
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
  const [bot, setBot] = useState<Bot>();

  const [searchValue, setSearchValue] = useState("");

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

  const POLL_STATUSES = ["queued", "processing", "processing_documents", "downloading", "crawling", "generating"];

  useEffect(() => {
    if (extractionChatbotStatus?.response.status === "success") {
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
  }, [extractionChatbotStatus]);

  const handleAddBot = async (values: any) => {
    setIsExtracting(true);
    console.log("values", values);
    const bot: Bot = {
      name: values.name,
      type: selectedType,
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
          max_depth: 2,
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

  const handleRowClick = (item: Bot) => {
    navigate(`/apps/bot/${item.id}`);
  };

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
        {/* Card */}
        {BOT_TYPES.map((bot, key) => (
          <div
            key={key}
            className="p-4 group  cursor-pointer  relative flex flex-col border border-gray-200 bg-white hover:border-gray-300 rounded-lg"
            onClick={() => setSelectedType(bot.type as TYPES)}
            data-hs-overlay={`#hs-add-bot`}
          >
            <div className="h-full flex gap-x-5">
              {/* <div className="shrink-0 size-8">
                <svg className="shrink-0 size-8" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M11.7326 0C9.96372 0.00130479 8.53211 1.43397 8.53342 3.19935C8.53211 4.96473 9.96503 6.39739 11.7339 6.39869H14.9345V3.20065C14.9358 1.43527 13.5029 0.00260958 11.7326 0C11.7339 0 11.7339 0 11.7326 0M11.7326 8.53333H3.20053C1.43161 8.53464 -0.00130383 9.9673 3.57297e-06 11.7327C-0.00261123 13.4981 1.4303 14.9307 3.19922 14.9333H11.7326C13.5016 14.932 14.9345 13.4994 14.9332 11.734C14.9345 9.9673 13.5016 8.53464 11.7326 8.53333V8.53333Z" fill="#36C5F0" /><path fillRule="evenodd" clipRule="evenodd" d="M32 11.7327C32.0013 9.9673 30.5684 8.53464 28.7995 8.53333C27.0306 8.53464 25.5976 9.9673 25.5989 11.7327V14.9333H28.7995C30.5684 14.932 32.0013 13.4994 32 11.7327ZM23.4666 11.7327V3.19935C23.4679 1.43527 22.0363 0.00260958 20.2674 0C18.4984 0.00130479 17.0655 1.43397 17.0668 3.19935V11.7327C17.0642 13.4981 18.4971 14.9307 20.2661 14.9333C22.035 14.932 23.4679 13.4994 23.4666 11.7327Z" fill="#2EB67D" /><path fillRule="evenodd" clipRule="evenodd" d="M20.2661 32C22.035 31.9987 23.4679 30.566 23.4666 28.8007C23.4679 27.0353 22.035 25.6026 20.2661 25.6013H17.0656V28.8007C17.0642 30.5647 18.4972 31.9974 20.2661 32ZM20.2661 23.4654H28.7995C30.5684 23.4641 32.0013 22.0314 32 20.266C32.0026 18.5006 30.5697 17.068 28.8008 17.0654H20.2674C18.4985 17.0667 17.0656 18.4993 17.0669 20.2647C17.0656 22.0314 18.4972 23.4641 20.2661 23.4654V23.4654Z" fill="#ECB22E" /><path fillRule="evenodd" clipRule="evenodd" d="M8.93953e-07 20.266C-0.00130651 22.0314 1.43161 23.4641 3.20052 23.4654C4.96944 23.4641 6.40235 22.0314 6.40105 20.266V17.0667H3.20052C1.43161 17.068 -0.00130651 18.5006 8.93953e-07 20.266ZM8.53342 20.266V28.7993C8.53081 30.5647 9.96372 31.9974 11.7326 32C13.5016 31.9987 14.9345 30.566 14.9332 28.8007V20.2686C14.9358 18.5032 13.5029 17.0706 11.7339 17.068C9.96372 17.068 8.53211 18.5006 8.53342 20.266C8.53342 20.2673 8.53342 20.266 8.53342 20.266Z" fill="#E01E5A" /></svg>
              </div> */}
              <div className="grow">
                <div className="h-full flex flex-col">
                  <div>
                    <h3 className="inline-flex items-center gap-x-1 font-medium text-gray-800">
                      {bot.name}
                    </h3>
                    {/* <p className="mt-1 text-sm text-gray-500">
                      {bot.description}
                    </p> */}
                  </div>
                  <div className="pt-1 mt-auto">
                    <span className="inline-flex items-center gap-x-2 text-sm font-medium group-disabled:opacity-50 group-disabled:pointer-events-none text-blue-600 group-hover:text-blue-700 group-hover:decoration-2">
                      Click to Add
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* End Card */}
      </div>

      {/* <MainContainer title="Chatbots" description="Manage your chatbots"
        button={
          <button
            type="button"
            className="py-2 px-3 inline-flex items-center text-sm gap-x-1 font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            data-hs-overlay={`#hs-add-bot`}
          >
            <svg className="hidden sm:block shrink-0 size-3 me-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z" />
            </svg>
            <span className="hidden sm:block">Add</span>Bot
          </button>
        }
      >
        <div></div>
      </MainContainer> */}

      <AddBot id="hs-add-bot" onOk={handleAddBot} type={selectedType} />
    </>
  );
};

export default MainContent;
