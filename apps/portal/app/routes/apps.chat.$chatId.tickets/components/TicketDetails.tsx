import { useState } from "react";

export type TicketStatus = "open" | "closed" | "snoozed";

interface TicketDetailsProps {
  ticket: {
    id: string;
    title: string;
    status: TicketStatus;
    tags: string[];
    assignedTo?: string;
    createdAt: string;
    dueDate?: string;
    description?: string;
    customerInfo?: {
      name: string;
      email?: string;
      phone?: string;
    };
    previousConversations?: Array<{
      id: string;
      title: string;
      date: string;
    }>;
    sharedMedia?: Array<{
      id: string;
      type: "image" | "document";
      url: string;
      name: string;
    }>;
  };
  onTagsClick: () => void;
  onSnoozeClick: () => void;
  onAssignClick: () => void;
  onCloseTicket: () => void;
  onReopenTicket: () => void;
}

const TicketDetails = ({
  ticket,
  onTagsClick,
  onSnoozeClick,
  onAssignClick,
  onCloseTicket,
  onReopenTicket,
}: TicketDetailsProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  // Format status based on ticket status
  const getStatusStyles = (status: TicketStatus) => {
    switch (status) {
      case "open": return "py-1.5 px-2.5 bg-blue-600 text-white text-xs rounded-lg";
      case "closed": return "py-1.5 px-2.5 bg-gray-800 text-white text-xs rounded-lg";
      case "snoozed": return "py-1.5 px-2.5 bg-red-50 text-red-600 text-xs rounded-lg dark:bg-red-500/10 dark:text-red-500";
      default: return "py-1.5 px-2.5 bg-gray-100 text-gray-800 text-xs rounded-lg";
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="py-3 px-5 flex justify-between items-center border-b border-gray-200 dark:border-neutral-800">
        <span className="block font-semibold text-gray-800 dark:text-neutral-200">
          Details
        </span>

        <button 
          type="button"
          className="size-8 flex justify-center items-center gap-x-2 rounded-full border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
          aria-label="Toggle details"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "−" : "+"}
        </button>
      </div>
      {/* End Header */}

      {/* Body */}
      <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
        <div className="p-5">
          {/* Title Input */}
          <div className="">
            <textarea 
              className="py-3 px-0 block w-full bg-white border-transparent border-b-gray-200 font-semibold text-base rounded-0 resize-none hover:border-b-gray-400 focus:outline-hidden focus:border-transparent focus:border-b-gray-400 focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-neutral-400 dark:border-b-neutral-700 dark:hover:border-b-neutral-500 dark:focus:bg-neutral-800 dark:placeholder-neutral-500 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
              placeholder="Edit ticket title..."
              rows={1}
              value={ticket.title}
              readOnly
            />
          </div>
          {/* End Title Input */}

          <div className="mt-3">
            {ticket.description && (
              <div className="mt-2">
                <p className="text-sm text-gray-500 dark:text-neutral-400">
                  {ticket.description}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="hs-accordion-group" data-hs-accordion-always-open>
          {/* Base Details */}
          <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active">
            <div className="p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 dark:text-neutral-200">
              <span className="font-medium">Ticket Status</span>
              <span className={getStatusStyles(ticket.status)}>
                {ticket.status.charAt(0).toUpperCase() + ticket.status.slice(1)}
              </span>
            </div>

            <div className="w-full overflow-hidden p-5 pt-0">
              <div className="flex flex-row gap-2 mt-4">
                {ticket.status === "snoozed" ? (
                  <button 
                    type="button" 
                    onClick={onReopenTicket}
                    className="flex-1 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    Unsnooze
                  </button>
                ) : (
                  <button 
                    type="button" 
                    onClick={onSnoozeClick}
                    className="flex-1 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    Snooze
                  </button>
                )}
                
                {ticket.status === "closed" ? (
                  <button 
                    type="button" 
                    onClick={onReopenTicket}
                    className="flex-1 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    Reopen
                  </button>
                ) : (
                  <button 
                    type="button" 
                    onClick={onCloseTicket}
                    className="flex-1 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* End Base Details */}

          {/* Ticket Details */}
          <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active">
            <div className="p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 dark:text-neutral-200">
              <span className="font-medium">Details</span>
            </div>

            <div className="w-full overflow-hidden p-5 pt-0">
              <div className="flex flex-col gap-3 mt-2">
                {/* Assigned to */}
                <div className="flex items-center gap-2">
                  <svg className="size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span className="text-sm">
                    {ticket.assignedTo || "Unassigned"}
                  </span>
                  <button 
                    type="button" 
                    onClick={onAssignClick}
                    className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700"
                  >
                    {ticket.assignedTo ? "Reassign" : "Assign"}
                  </button>
                </div>
                
                {/* Created at */}
                <div className="flex items-center gap-2">
                  <svg className="size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span className="text-sm">Created {new Date(ticket.createdAt).toLocaleDateString()}</span>
                </div>
                
                {/* Due date */}
                {ticket.dueDate && (
                  <div className="flex items-center gap-2">
                    <svg className="size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
                      <line x1="16" x2="16" y1="2" y2="6"></line>
                      <line x1="8" x2="8" y1="2" y2="6"></line>
                      <line x1="3" x2="21" y1="10" y2="10"></line>
                    </svg>
                    <span className="text-sm">Due {new Date(ticket.dueDate).toLocaleDateString()}</span>
                  </div>
                )}
                
                {/* Tags */}
                <div className="flex items-center gap-2">
                  <svg className="size-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"></path>
                    <path d="M7 7h.01"></path>
                  </svg>
                  <div className="flex flex-wrap gap-1">
                    {ticket.tags.length > 0 ? (
                      ticket.tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center gap-x-1 py-1 px-2 rounded-full text-xs font-medium border border-gray-200 bg-white text-gray-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300">
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500 dark:text-neutral-400">No tags</span>
                    )}
                  </div>
                  <button 
                    type="button" 
                    onClick={onTagsClick}
                    className="py-1 px-2 inline-flex text-xs font-medium rounded-full text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
                  >
                    Edit Tags
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* End Ticket Details */}

          {/* User Data */}
          {ticket.customerInfo && (
            <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active">
              <div className="p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 dark:text-neutral-200">
                <span className="font-medium">Customer Information</span>
              </div>

              <div className="w-full overflow-hidden p-5 pt-0">
                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium">{ticket.customerInfo.name}</span>
                  {ticket.customerInfo.email && (
                    <span className="text-sm">{ticket.customerInfo.email}</span>
                  )}
                  {ticket.customerInfo.phone && (
                    <span className="text-sm">{ticket.customerInfo.phone}</span>
                  )}
                </div>
              </div>
            </div>
          )}
          {/* End User Data */}

          {/* Previous Conversations */}
          {ticket.previousConversations && ticket.previousConversations.length > 0 && (
            <div className="hs-accordion border-b border-gray-100 dark:border-neutral-800 active">
              <div className="p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 dark:text-neutral-200">
                <span className="font-medium">Previous Conversations</span>
              </div>

              <div className="w-full overflow-hidden p-5 pt-0">
                <div className="flex flex-col gap-2">
                  {ticket.previousConversations.map((conversation) => (
                    <div key={conversation.id} className="py-1.5">
                      <span className="text-sm font-medium">{conversation.title}</span>
                      <p className="text-xs text-gray-500 dark:text-neutral-500">{conversation.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* End Previous Conversations */}

          {/* Shared Media */}
          {ticket.sharedMedia && ticket.sharedMedia.length > 0 && (
            <div className="hs-accordion active">
              <div className="p-5 pb-2 w-full flex justify-between items-center gap-x-3 text-gray-800 dark:text-neutral-200">
                <span className="font-medium">Shared Media</span>
              </div>

              <div className="w-full overflow-hidden p-5 pt-0">
                <div className="flex flex-col gap-2">
                  {ticket.sharedMedia.map((media) => (
                    <a 
                      key={media.id} 
                      href={media.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-x-2 py-1.5 hover:bg-gray-50 rounded-md dark:hover:bg-neutral-700"
                    >
                      <div className="size-8 bg-gray-100 rounded flex items-center justify-center dark:bg-neutral-700">
                        {media.type === "image" ? (
                          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                            <circle cx="8.5" cy="8.5" r="1.5"></circle>
                            <polyline points="21 15 16 10 5 21"></polyline>
                          </svg>
                        ) : (
                          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                          </svg>
                        )}
                      </div>
                      <span className="text-sm">{media.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
          {/* End Shared Media */}
        </div>
      </div>
      {/* End Body */}
    </div>
  );
};

export default TicketDetails;
