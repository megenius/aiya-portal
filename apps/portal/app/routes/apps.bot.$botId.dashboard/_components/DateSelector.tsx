import { useSearchParams } from '@remix-run/react';
import React, { useMemo } from 'react';
import { addDays, endOfDay, format, startOfDay, startOfMonth, endOfMonth } from 'date-fns'

interface DateSelectorProps {

}
const DATE_OPTS = ['Today', 'Last 7 days', 'Last 14 days', 'Last 30 days', 'This Month' ,'Last Month'];

const DateSelector: React.FC<DateSelectorProps> = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedDate, setSelectedDate] = React.useState<'Today' | 'Last 7 days' | 'Last 14 days' | 'Last 30 days' | 'This Month' | 'Last Month'>('Today');

  const filterDates = useMemo(() => {
    return DATE_OPTS.filter((date) => date !== selectedDate);
  }, [selectedDate]);

  const handleDateChange = (date: 'Today' | 'Last 7 days' | 'Last 14 days' | 'Last 30 days'| 'This Month' | 'Last Month') => {
    setSelectedDate(date);
    let start_date, end_date

    switch (date) {
      case 'Today':
        start_date = startOfDay(new Date());
        end_date = endOfDay(new Date());
        break;
      case 'Last 7 days':
        start_date = addDays(new Date(), -7);
        end_date = endOfDay(new Date());
        break;
      case 'Last 14 days':
        start_date = addDays(new Date(), -14);
        end_date = endOfDay(new Date());
        break;
      case 'Last 30 days':
        start_date = addDays(new Date(), -30);
        end_date = endOfDay(new Date());
        break;
      case 'This Month':
        start_date = startOfMonth(new Date());
        end_date = endOfMonth(new Date());
        break;
      case 'Last Month':
        start_date = startOfMonth(addDays(new Date(), -30));
        end_date = endOfMonth(addDays(new Date(), -30));
        break
    }

    const params = new URLSearchParams(searchParams);
    params.set('start', format(start_date, 'yyyy-MM-dd'));
    params.set('end', format(end_date, 'yyyy-MM-dd'));

    setSearchParams(params, {
      preventScrollReset: true,
    });
  }

  return (
    <>
      <div className="hs-dropdown [--auto-close:inside] inline-flex">
        <button id="hs-pro-dnic" type="button" className="py-2 px-3 inline-flex items-center text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:bg-gray-50 dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
          <svg className="shrink-0 me-2 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
            <line x1={16} x2={16} y1={2} y2={6} />
            <line x1={8} x2={8} y1={2} y2={6} />
            <line x1={3} x2={21} y1={10} y2={10} />
            <path d="M8 14h.01" />
            <path d="M12 14h.01" />
            <path d="M16 14h.01" />
            <path d="M8 18h.01" />
            <path d="M12 18h.01" />
            <path d="M16 18h.01" />
          </svg>
          {selectedDate}
          <svg className="shrink-0 ms-1.5 size-3.5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
        <div className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-[120px] transition-[opacity,margin] duration opacity-0 z-50 bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_40px_10px_rgba(0,0,0,0.2)] dark:bg-neutral-900 hidden" role="menu" aria-orientation="vertical" aria-labelledby="hs-pro-dnic" style={{}}>
          <div className="p-1">
            {filterDates.map((date) => (
              <button
                key={date}
                className="flex w-full gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                onClick={() => handleDateChange(date as 'Today' | 'Last 7 days' | 'Last 14 days' | 'Last 30 days')}
              >
                {date}
              </button>
            ))}
          </div>
        </div>
      </div>

    </>
  );
};

export default DateSelector;