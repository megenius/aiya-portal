import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(3);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setUnreadCount(0);
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-96 h-[600px] bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-blue-600 p-4 flex justify-between items-center">
            <h3 className="text-white font-semibold">Chat Support</h3>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X size={20} />
            </button>
          </div>
          <iframe 
            src="http://localhost:8501/?id=W124&embed=true&compact=true&playground=1"
            style={{width: '100%', height: 'calc(100% - 4rem)', border: 0, overflow: 'hidden'}}
            title="Chat Interface"
          />
        </div>
      )}
      
      <button onClick={toggleChat} className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 relative">
        <MessageCircle size={24} />
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;