import React from 'react';
import MessageInput from './MessageInput';

interface ChatContentProps {
  messages?: {
    id: string;
    content: string;
    timestamp: string;
    sender: {
      id: string;
      name: string;
      avatar: string;
    };
    isUser: boolean;
  }[];
  isLoading?: boolean;
}

const ChatContent = ({ messages = [], isLoading = false }: ChatContentProps) => {
  if (isLoading) {
    return (
      <div className="h-full flex flex-col justify-center items-center text-center">
        <span className="py-1.5 inline-flex gap-x-1">
          <span className="size-2.5 bg-gray-800 rounded-full animate-[typing_1s_ease-in-out_infinite] dark:bg-neutral-200"></span>
          <span className="size-2.5 bg-gray-800 rounded-full animate-[typing_1s_ease-in-out_infinite_0.2s] dark:bg-neutral-200"></span>
          <span className="size-2.5 bg-gray-800 rounded-full animate-[typing_1s_ease-in-out_infinite_0.4s] dark:bg-neutral-200"></span>
        </span>
        <p className="mt-3 text-sm text-gray-500 dark:text-neutral-500">
          Loading conversation...
        </p>
      </div>
    );
  }

  return (
    <div className="relative h-dvh flex flex-col justify-end">
      {/* Header */}
      <header className="sticky top-0 inset-x-0 z-10 p-2 sm:px-4 flex justify-between items-center gap-x-2 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
        <div className="w-32 sm:w-auto xl:hidden flex items-center">
          {/* Mobile menu toggles - implementation will depend on your navigation system */}
        </div>

        {/* Status Button - replace with TicketStatus component */}
        <div className="hs-dropdown relative inline-flex">
          <button type="button" className="py-1.5 px-2.5 flex justify-center items-center bg-gray-800 text-white hover:bg-gray-900 focus:bg-gray-900 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-white dark:focus:bg-white text-nowrap text-xs sm:text-[13px] rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden">
            Closed
          </button>
        </div>

        {/* Action buttons */}
        <div className="w-32 sm:w-auto flex justify-end items-center gap-x-0.5">
          {/* Various buttons here... */}
          <div className="hs-tooltip [--placement:bottom] hidden sm:inline-block">
            <button type="button" className="hs-tooltip-toggle flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
                <path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2" />
                <path d="M10 10v4" />
                <path d="M14 10v4" />
              </svg>
              <span className="sr-only">Snooze</span>
            </button>
            <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-20 py-1.5 px-2.5 bg-gray-900 text-xs text-white rounded-lg whitespace-nowrap dark:bg-neutral-700" role="tooltip">
              Snooze
            </span>
          </div>

          <div className="relative ps-1.5 ms-0.5 before:block before:absolute before:top-1/2 before:start-0 before:w-px before:h-4 before:bg-gray-200 before:-translate-y-1/2 dark:before:bg-neutral-700">
            {/* Sidebar toggle */}
            <button type="button" className="flex justify-center items-center gap-x-3 size-8 text-sm text-gray-600 hover:bg-gray-100 rounded-full disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200">
              <svg className="xl:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 3v18" />
              </svg>
              <svg className="hidden xl:block shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M15 3v18" />
              </svg>
              <span className="sr-only">Navigation Toggle</span>
            </button>
          </div>
        </div>
      </header>

      {/* Chat Content */}
      <div className="h-full p-2 pb-8 sm:p-4 overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="relative">
          {/* Time */}
          <div className="sticky top-0 inset-x-0 z-8 max-w-lg mx-auto text-center">
            <span className="py-0.5 px-1.5 bg-gray-100 text-xs text-gray-500 rounded-full dark:bg-neutral-900 dark:text-neutral-500">Today</span>
          </div>

          {/* Messages */}
          <div className="w-full space-y-5">
            {messages.map((message) => (
              <div key={message.id} className={`max-w-md ${message.isUser ? 'ms-auto text-end flex justify-end' : 'flex'} gap-x-2`}>
                {!message.isUser && (
                  <div className="shrink-0 mt-auto">
                    <img className="size-8 rounded-full" src={message.sender.avatar} alt={message.sender.name} />
                  </div>
                )}
                
                {/* Chat Bubble */}
                <div>
                  <div className={`p-4 ${message.isUser ? 'bg-blue-600 text-white dark:bg-blue-500' : 'bg-gray-100 dark:bg-neutral-700 text-gray-800 dark:text-neutral-200'} rounded-xl`}>
                    <p>{message.content}</p>
                  </div>
                  <div className={`mt-1 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                    <span className="text-xs text-gray-500 dark:text-neutral-500">{message.timestamp}</span>
                  </div>
                </div>
                
                {message.isUser && (
                  <div className="shrink-0 mt-auto">
                    <img className="size-8 rounded-full" src={message.sender.avatar} alt={message.sender.name} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Message Input */}
      <MessageInput />
    </div>
  );
};

export default ChatContent;
