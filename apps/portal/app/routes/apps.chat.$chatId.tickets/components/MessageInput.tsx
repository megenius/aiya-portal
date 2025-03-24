import React, { useState } from 'react';

interface MessageInputProps {
  onSend?: (message: string) => void;
  replyTo?: {
    id: string;
    sender: string;
    content: string;
  } | null;
  onCancelReply?: () => void;
}

const MessageInput = ({ onSend, replyTo, onCancelReply }: MessageInputProps) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim() && onSend) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <label htmlFor="message-input" className="sr-only">Message</label>

      {/* Reply indicator */}
      {replyTo && (
        <div id="reply-container" className="py-2.5 px-5 border-b border-gray-100 dark:border-neutral-700">
          <div className="flex justify-between items-center gap-x-3 border-s-2 border-blue-600 ps-2">
            <div className="w-full">
              <p className="font-medium text-xs text-blue-600">Reply to {replyTo.sender}</p>
              <p className="text-xs text-gray-800 dark:text-neutral-200">{replyTo.content}</p>
            </div>
            <div className="grow">
              <button 
                type="button" 
                className="inline-flex shrink-0 justify-center items-center size-6 rounded-full text-gray-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500" 
                aria-label="Close"
                onClick={onCancelReply}
              >
                <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="pb-2 ps-2">
        <div className="mb-1.5 sm:mb-0 sm:flex sm:items-center sm:gap-2">
          <div className="grow">
            <textarea 
              id="message-input"
              className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" 
              placeholder="Type your message..." 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              data-hs-textarea-auto-height
            />
          </div>

          <div className="pe-4">
            <label htmlFor="send-as-internal" className="py-1.5 px-2 relative inline-flex justify-center items-center gap-x-1.5 text-center text-[13px] text-nowrap bg-white border border-gray-200 text-gray-800 cursor-pointer rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200 dark:border-neutral-700 has-checked:bg-blue-100 has-checked:border-blue-100 has-checked:hover:bg-blue-200 dark:has-checked:bg-blue-800/30 dark:has-checked:border-blue-800/10 dark:hover:has-checked:bg-blue-800/50 has-disabled:pointer-events-none has-disabled:text-gray-200 dark:has-disabled:text-neutral-700">
              <input type="checkbox" id="send-as-internal" className="absolute inset-0 z-10 opacity-0" />
              <span className="shrink-0">
                <svg className="size-3.5 text-gray-400 dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                  <path d="M12 2v2" />
                  <path d="M12 22v-2" />
                  <path d="m17 20.66-1-1.73" />
                  <path d="M11 10.27 7 3.34" />
                  <path d="m20.66 17-1.73-1" />
                  <path d="m3.34 7 1.73 1" />
                  <path d="M14 12h8" />
                  <path d="M2 12h2" />
                  <path d="m20.66 7-1.73 1" />
                  <path d="m3.34 17 1.73-1" />
                  <path d="m17 3.34-1 1.73" />
                  <path d="m7 20.66-1-1.73" />
                </svg>
              </span>
              Internal
            </label>
          </div>
        </div>

        <div className="pe-4 flex justify-between items-center gap-x-1">
          {/* Button Group - Left */}
          <div className="flex items-center gap-x-1">
            {/* Attachment button */}
            <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </button>
            
            {/* Emoji button */}
            <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <line x1="9" x2="9.01" y1="9" y2="9" />
                <line x1="15" x2="15.01" y1="9" y2="9" />
              </svg>
            </button>
            
            {/* AI assist dropdown could be added here */}
          </div>

          {/* Button Group - Right */}
          <div className="flex items-center gap-x-1">
            {/* Template button */}
            <button type="button" className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <line x1="3" x2="21" y1="9" y2="9" />
                <line x1="3" x2="21" y1="15" y2="15" />
              </svg>
            </button>
            
            {/* Send button */}
            <button 
              type="button" 
              className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
              onClick={handleSend}
            >
              <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 14 21 3" />
                <path d="M21 3v7h-7" />
                <path d="M3 21V7l7 7-7 7Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MessageInput;
