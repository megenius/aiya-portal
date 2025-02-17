import React from "react";
import { X } from "lucide-react";

interface ChatWidgetProps {
  providerId: string;
  toggleChat: () => void;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ providerId, toggleChat }) => {
  return (
    <div className="w-full h-full"
    >
      <div className="bg-blue-600 p-4 flex justify-between items-center">
        <h3 className="text-lg text-white font-semibold">Playground</h3>
        <button
          onClick={toggleChat}
          className="text-white hover:text-gray-200"
          aria-label="Close Chat"
        >
          <X size={20} />
        </button>
      </div>
      <iframe
        src={`https://webchat.aiya.me/?id=${providerId}&embed=true&compact=true&playground=1`}
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
