import TicketItem from './TicketItem';

const TicketsList = () => {
  // Sample tickets data - in a real app, this would come from your data source
  const tickets = [
    {
      id: '1',
      title: 'Inquiry about client project license',
      status: 'closed',
      avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      name: 'Costa Franci',
      time: '5:05 PM',
      isActive: true
    },
    {
      id: '2',
      title: 'I keep getting failed payments. what\'s the reason?',
      status: 'snoozed',
      avatar: 'https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80',
      name: 'Bryan Curtis',
      time: 'Wed 9:00 AM',
      isActive: false
    },
    // Add more tickets as needed
  ];

  return (
    <div id="hs-pro-tabs-chtshid-all" className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
      <div aria-label="Tabs" role="tablist" aria-orientation="vertical">
        {tickets.map(ticket => (
          <TicketItem 
            key={ticket.id}
            ticket={ticket}
          />
        ))}
      </div>
      
      {/* Loading indicator at the bottom */}
      <div className="h-16 flex flex-col justify-center items-center text-center">
        <span className="inline-flex gap-x-1">
          <span className="size-1.5 bg-gray-400 rounded-full animate-[typing_1s_ease-in-out_infinite] dark:bg-neutral-600"></span>
          <span className="size-1.5 bg-gray-400 rounded-full animate-[typing_1s_ease-in-out_infinite_0.2s] dark:bg-neutral-600"></span>
          <span className="size-1.5 bg-gray-400 rounded-full animate-[typing_1s_ease-in-out_infinite_0.4s] dark:bg-neutral-600"></span>
        </span>
      </div>
    </div>
  );
};

export default TicketsList;
