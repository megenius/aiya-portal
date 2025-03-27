import React from "react";
import { MessageCircle } from "lucide-react";

interface ChatToggleButtonProps {
  isOpen: boolean;
  toggleChat: () => void;
}

const ChatToggleButton: React.FC<ChatToggleButtonProps> = ({ isOpen, toggleChat }) => {
  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 relative"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default ChatToggleButton;
