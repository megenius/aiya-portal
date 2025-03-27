import React, { useState } from "react";

interface ImageMessageProps {
  imageUrl: string;
  timestamp: string;
  isOwn: boolean;
  caption?: string;
  status?: "sent" | "delivered" | "read";
}

const ImageMessage: React.FC<ImageMessageProps> = ({ 
  imageUrl, 
  timestamp, 
  isOwn, 
  caption,
  status = "sent" 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setIsError(true);
  };

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-[75%] rounded-2xl overflow-hidden ${
        isOwn 
          ? 'bg-blue-600 text-white rounded-br-none' 
          : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-bl-none'
      }`}>
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <div className="w-6 h-6 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
          )}
          {isError ? (
            <div className="flex items-center justify-center h-32 bg-gray-200 dark:bg-gray-800">
              <span className="text-sm text-gray-500">Failed to load image</span>
            </div>
          ) : (
            <img 
              src={imageUrl} 
              alt={caption || "Image"} 
              className="w-full max-h-80 object-contain" 
              onLoad={handleImageLoad}
              onError={handleImageError}
            />
          )}
        </div>
        
        {caption && (
          <div className="px-3 py-2">
            <p className="text-sm">{caption}</p>
          </div>
        )}
        
        <div className={`text-xs px-3 pb-2 flex items-center gap-1 ${
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

export default ImageMessage;
