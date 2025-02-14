import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";

// กำหนด Props interface
interface ChatWidgetProps {
  providerId: string;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ providerId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setUnreadCount(0);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 flex flex-col items-end">
        {!isOpen && (
          <button
            onClick={toggleChat}
            className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 relative"
          >
            <MessageCircle size={24} />
            {!isOpen && unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
        )}
      </div>
      <div
        className={`top-0 right-0 h-screen w-1/4 min-w-96 max-w-[500px] bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "hidden translate-x-full"
        } transition-transform duration-300 ease-in-out`}
        role="complementary"
        aria-label="Chat Sidebar"
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
    </>
  );
};

export default ChatWidget;
