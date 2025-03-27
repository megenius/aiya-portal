interface TicketStatusProps {
  status: 'open' | 'closed' | 'snoozed' | 'pending';
  onClick?: () => void;
}

const TicketStatus = ({ status, onClick }: TicketStatusProps) => {
  const getStatusStyles = () => {
    switch(status) {
      case 'closed':
        return "bg-gray-800 text-white hover:bg-gray-900 focus:bg-gray-900 dark:bg-neutral-100 dark:text-neutral-800 dark:hover:bg-white dark:focus:bg-white";
      case 'snoozed':
        return "bg-red-50 text-red-600 hover:bg-red-100 focus:bg-red-100 dark:bg-red-500/10 dark:text-red-500 dark:hover:bg-red-500/20 dark:focus:bg-red-500/20";
      case 'pending':
        return "bg-yellow-50 text-yellow-600 hover:bg-yellow-100 focus:bg-yellow-100 dark:bg-yellow-500/10 dark:text-yellow-500 dark:hover:bg-yellow-500/20 dark:focus:bg-yellow-500/20";
      case 'open':
      default:
        return "bg-green-50 text-green-600 hover:bg-green-100 focus:bg-green-100 dark:bg-green-500/10 dark:text-green-500 dark:hover:bg-green-500/20 dark:focus:bg-green-500/20";
    }
  };

  return (
    <button 
      type="button" 
      className={`py-1.5 px-2.5 flex justify-center items-center ${getStatusStyles()} text-nowrap text-xs sm:text-[13px] rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden`}
      onClick={onClick}
    >
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </button>
  );
};

export default TicketStatus;
