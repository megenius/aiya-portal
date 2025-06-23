import React, { useState } from "react";
import { X, RefreshCw } from "lucide-react";

interface ChatWidgetProps {
  providerId: string;
  toggleChat: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ providerId, toggleChat }) => {
  // State for timestamp to force iframe reload
  const [timestamp, setTimestamp] = useState(Date.now());

  // Handler to start a new chat by updating the timestamp
  const startNewChat = () => {
    setTimestamp(Date.now());
  };

  return (
    <div className="w-full h-full">
      <div className="bg-blue-600 p-4 flex justify-between items-center">
        <h3 className="text-lg text-white font-semibold">Playground</h3>
        <div className="flex space-x-2">
          {/* New Chat Button */}
          <button
            onClick={startNewChat}
            className="text-white hover:text-gray-200 flex items-center"
            aria-label="Start New Chat"
          >
            <RefreshCw size={20} className="mr-1" />
          </button>
          {/* Close Chat Button */}
          <button
            onClick={toggleChat}
            className="text-white hover:text-gray-200"
            aria-label="Close Chat"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      <iframe
        key={timestamp} // changing key forces React to remount iframe
        src={`https://webchat.aiya.me/?id=${providerId}&embed=true&compact=true&playground=1&_t=${timestamp}`}
        style={{
          width: "100%",
          height: "calc(100% - 4rem)",
          border: 0,
          overflow: "hidden",
        }}
        title="Chat Interface"
      />
    </div>
  );
};

export default ChatWidget;
