import React from "react";

interface TextMessageProps {
  content: string;
  timestamp: string;
  isOwn: boolean;
  status?: "sent" | "delivered" | "read";
}

const TextMessage: React.FC<TextMessageProps> = ({ 
  content, 
  timestamp, 
  isOwn,
  status = "sent" 
}) => {
  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-[75%] rounded-2xl px-4 py-2 ${
        isOwn 
          ? 'bg-blue-600 text-white rounded-br-none' 
          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-bl-none'
      }`}>
        <p className="text-sm">{content}</p>
        <div className={`text-xs mt-1 flex items-center gap-1 ${
          isOwn ? 'text-blue-200' : 'text-gray-500'
        }`}>
          <span>{timestamp}</span>
          {isOwn && (
            <span>
              {status === "read" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022z"/>
                </svg>
              )}
              {status === "delivered" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                </svg>
              )}
              {status === "sent" && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                </svg>
              )}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TextMessage;
