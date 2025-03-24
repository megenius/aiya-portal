import { Link } from "@remix-run/react";

interface TicketItemProps {
  ticket: {
    id: string;
    title: string;
    status: string;
    avatar: string;
    name: string;
    time: string;
    isActive: boolean;
  };
}

const TicketItem = ({ ticket }: TicketItemProps) => {
  return (
    <div 
      className={`hs-tab-active:bg-gray-200 dark:hs-tab-active:bg-neutral-700/70 relative overflow-hidden group cursor-pointer bg-white hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:border-neutral-700 ${ticket.isActive ? 'active' : ''}`} 
      id={`hs-pro-tabs-chtcpt-item-${ticket.id}`} 
      aria-selected={ticket.isActive ? "true" : "false"} 
      data-hs-tab={`#hs-pro-tabs-chtcpt-${ticket.id}`} 
      aria-controls={`hs-pro-tabs-chtcpt-${ticket.id}`} 
      role="tab"
    >
      <div className="py-4 px-5 border-b border-b-gray-100 dark:border-neutral-700">
        <div className="flex gap-x-2.5">
          <div className="flex-shrink-0">
            <img className="size-9 rounded-full" src={ticket.avatar} alt={ticket.name} />
          </div>
          <div className="grow flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-800 truncate dark:text-neutral-200">{ticket.name}</span>
              <span className="text-xs text-gray-400 dark:text-neutral-500">{ticket.time}</span>
            </div>
            <p className="text-xs text-gray-800 dark:text-neutral-200 line-clamp-2">{ticket.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketItem;
