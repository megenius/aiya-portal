import React from "react";

interface QuotedMessage {
  id: string;
  content: string;
  senderName: string;
  messageType: "text" | "image" | "file" | "audio" | "video" | "location";
  thumbnailUrl?: string;
}

interface ReplyMessageProps {
  content: string;
  timestamp: string;
  isOwn: boolean;
  quotedMessage: QuotedMessage;
  status?: "sent" | "delivered" | "read";
  onQuotedMessageClick?: (messageId: string) => void;
}

const ReplyMessage: React.FC<ReplyMessageProps> = ({ 
  content, 
  timestamp, 
  isOwn,
  quotedMessage,
  status = "sent",
  onQuotedMessageClick
}) => {
  const handleQuotedClick = () => {
    if (onQuotedMessageClick) {
      onQuotedMessageClick(quotedMessage.id);
    }
  };

  const getQuotePreview = () => {
    if (quotedMessage.messageType === "text") {
      return (
        <p className="text-xs overflow-hidden text-ellipsis whitespace-nowrap">{quotedMessage.content}</p>
      );
    }

    const typeLabels = {
      image: "Photo",
      file: "File",
      audio: "Audio",
      video: "Video",
      location: "Location"
    };

    const hasPreview = quotedMessage.messageType === "image" || quotedMessage.messageType === "video";

    return (
      <div className="flex items-center gap-2">
        {hasPreview && quotedMessage.thumbnailUrl && (
          <div className="w-8 h-8 flex-shrink-0">
            <img 
              src={quotedMessage.thumbnailUrl} 
              alt=""
              className="w-full h-full object-cover rounded"
            />
          </div>
        )}
        <div>
          <p className="text-xs">
            {typeLabels[quotedMessage.messageType]}
            {quotedMessage.content ? `: ${quotedMessage.content}` : ""}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-[75%] rounded-2xl px-4 py-2 ${
        isOwn 
          ? 'bg-blue-600 text-white rounded-br-none' 
          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-bl-none'
      }`}>
        <div 
          className={`mb-1 pl-2 border-l-2 rounded ${
            isOwn 
              ? 'border-blue-300 bg-blue-700/50' 
              : 'border-gray-400 bg-gray-200/50 dark:bg-gray-600/50'
          } py-1 cursor-pointer`}
          onClick={handleQuotedClick}
        >
          <p className="text-xs font-medium">{quotedMessage.senderName}</p>
          {getQuotePreview()}
        </div>
        
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

export default ReplyMessage;
