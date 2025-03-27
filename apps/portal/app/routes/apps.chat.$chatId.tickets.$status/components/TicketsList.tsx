import React from "react";
import { useNavigate } from "@remix-run/react";
import { TicketItem, TicketItemProps } from "./TicketItem";
import { TicketHeader } from "./TicketHeader";

export const TicketsList: React.FC = () => {
  const navigate = useNavigate();
  
  // In a real app, this data would likely come from props or a data hook
  const tickets: TicketItemProps[] = [
    {
      id: "1",
      name: "Costa Quinn",
      time: "1m",
      subject: "Telegram chat",
      message: "Awesome!",
      isActive: true,
      avatarSrc: "https://images.unsplash.com/photo-1601935111741-ae98b2b230b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80",
      platformIcon: (
        <svg className="shrink-0 size-3.5" width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 32C24.8365 32 32 24.8365 32 16C32 7.16346 24.8365 0 16 0C7.16346 0 0 7.16346 0 16C0 24.8365 7.16346 32 16 32Z" fill="#34AADF" />
          <path d="M6.65901 15.8612C6.65901 15.8612 14.659 12.578 17.4335 11.422C18.4972 10.9596 22.1041 9.47974 22.1041 9.47974C22.1041 9.47974 23.7688 8.83238 23.6301 10.4046C23.5838 11.052 23.2139 13.3179 22.844 15.7688C22.289 19.237 21.6879 23.0289 21.6879 23.0289C21.6879 23.0289 21.5954 24.0925 20.8093 24.2774C20.0232 24.4624 18.7283 23.6301 18.4972 23.4451C18.3121 23.3064 15.0289 21.2254 13.8266 20.2081C13.5029 19.9306 13.133 19.3757 13.8728 18.7283C15.5376 17.2023 17.526 15.3064 18.7283 14.1041C19.2833 13.5491 19.8381 12.2543 17.526 13.8266C14.2428 16.0925 11.0058 18.2196 11.0058 18.2196C11.0058 18.2196 10.2659 18.682 8.87866 18.2659C7.49133 17.8497 5.87283 17.2948 5.87283 17.2948C5.87283 17.2948 4.76307 16.6012 6.65901 15.8612Z" fill="white" />
        </svg>
      )
    },
    // More ticket examples for demonstration
    {
      id: "2",
      name: "Inbox team",
      time: "34m",
      subject: "[Gmail Forwarding Confirmation of the Payment]",
      message: "I keep getting failed payments. what's the reason?",
      avatarType: "initial",
      avatarText: "I",
      platformIcon: (
        <svg className="shrink-0 size-3" width={32} height={25} viewBox="0 0 32 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.18187 24.4817H7.27275V12.1181L0 6.66351V22.2999C0 23.5054 0.976375 24.4817 2.18187 24.4817Z" fill="#4285F4" />
          <path d="M24.7272 24.4817H29.8182C31.0236 24.4817 32 23.5053 32 22.2999V6.66351L24.7272 12.1181V24.4817Z" fill="#34A853" />
          <path d="M24.7272 2.66351V12.1181L32 6.66351V3.75445C32 1.05807 28.9219 -0.481929 26.7636 1.13626L24.7272 2.66351Z" fill="#FBBC04" />
          <path fillRule="evenodd" clipRule="evenodd" d="M7.27275 12.1181V2.66351L16 9.20901L24.7272 2.66351V12.1181L16 18.6635L7.27275 12.1181Z" fill="#EA4335" />
          <path d="M0 3.75445V6.66351L7.27275 12.1181V2.66351L5.23637 1.13626C3.07812 -0.48193 0 1.0582 0 3.75445Z" fill="#C5221F" />
        </svg>
      ),
      statusIcon: (
        <span className="flex shrink-0 justify-center items-center size-4 rounded-full">
          <svg className="shrink-0 size-4 text-orange-500" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <line x1={10} x2={14} y1={2} y2={2} />
            <line x1={12} x2={15} y1={14} y2={11} />
            <circle cx={12} cy={14} r={8} />
          </svg>
        </span>
      ),
      statusTooltip: "Snoozed"
    },
    // More predefined tickets would go here
  ];

  // Handle ticket click navigation
  const handleTicketClick = (ticketId: string) => {
    navigate(`./${ticketId}`);
  };

  return (
    <div id="hs-pro-chtshid1" className="hs-overlay [--auto-close:xl] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform sm:w-80 w-full hidden fixed inset-y-0 start-0 z-20 lg:start-0 xl:start-80 lg:block lg:translate-x-0 bg-white border-e border-gray-200 dark:bg-neutral-800 dark:border-neutral-700" tabIndex={-1} aria-labelledby="hs-pro-chtshid1-label">
      <div className="h-full flex flex-col">
        <TicketHeader />
        
        <div id="hs-pro-tabs-chtshid-all" className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
          <div aria-label="Tabs" role="tablist" aria-orientation="vertical">
            {tickets.map(ticket => (
              <TicketItem 
                key={ticket.id} 
                {...ticket} 
                onClick={() => handleTicketClick(ticket.id)}
              />
            ))}
          </div>
          
          <LoadingIndicator />
        </div>
      </div>
    </div>
  );
};

const LoadingIndicator: React.FC = () => {
  return (
    <div className="h-16 flex flex-col justify-center items-center text-center">
      <span className="inline-flex gap-x-1">
        <span className="size-1.5 bg-gray-400 rounded-full animate-[typing_1s_ease-in-out_infinite] dark:bg-neutral-600" />
        <span className="size-1.5 bg-gray-400 rounded-full animate-[typing_1s_ease-in-out_infinite_0.2s] dark:bg-neutral-600" />
        <span className="size-1.5 bg-gray-400 rounded-full animate-[typing_1s_ease-in-out_infinite_0.4s] dark:bg-neutral-600" />
      </span>
    </div>
  );
};
