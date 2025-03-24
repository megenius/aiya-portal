import React from "react";

interface ChatInputProps {
  recipient: string;
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ recipient, onSendMessage }) => {
  const [message, setMessage] = React.useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };
  
  return (
    <footer className="sticky bottom-0 inset-x-0 z-9 bg-white border-t border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <form onSubmit={handleSubmit}>
        <label htmlFor="hs-chat-autoheight-textarea-1" className="sr-only">Message</label>
        <div className="pb-2 ps-2">
          <textarea 
            id="hs-chat-autoheight-textarea-1" 
            className="max-h-36 pt-4 pb-2 ps-2 pe-4 block w-full border-transparent rounded-0 md:text-sm leading-4 resize-none focus:outline-hidden focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500" 
            placeholder={`Message ${recipient}`} 
            data-hs-textarea-auto-height
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="pe-4 flex justify-between items-center gap-x-1">
            {/* Button Group */}
            <div className="flex items-center gap-x-1">
              {/* Attachment Button */}
              <button 
                type="button" 
                className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
              
              {/* Emoji Button */}
              <button 
                type="button" 
                className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11v1a10 10 0 1 1-9-10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1={9} x2="9.01" y1={9} y2={9} />
                  <line x1={15} x2="15.01" y1={9} y2={9} />
                  <path d="M16 5h6" />
                  <path d="M19 2v6" />
                </svg>
                <span className="sr-only">Add emoji</span>
              </button>
            </div>
            
            {/* Right Button Group */}
            <div className="flex items-center gap-x-1">
              {/* Voice Message Button */}
              <button 
                type="button" 
                className="flex justify-center items-center gap-x-1.5 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
              >
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1={12} x2={12} y1={19} y2={22} />
                </svg>
                <span className="sr-only">Send voice message</span>
              </button>
              
              {/* Send Button */}
              <button 
                type="submit" 
                className="inline-flex shrink-0 justify-center items-center size-8 text-sm font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:bg-blue-600"
              >
                <span className="sr-only">Send</span>
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="m5 12 7-7 7 7" />
                  <path d="M12 19V5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </form>
    </footer>
  );
};

export default ChatInput;
