import React, { useState, useEffect } from "react";
import { addDays, endOfDay, format } from "date-fns";

interface DateSelectorProps {
  onDateChange?: (dates: {
    timeUnit?: string;
    startDate?: string;
    endDate?: string;
  }) => void;
}

const DATE_OPTS = [
  "Today",
  "Last 7 days",
  "Last 14 days",
  "Last 30 days",
  "This Month",
  "Last Month",
];

const DateSelector: React.FC<DateSelectorProps> = ({ onDateChange }) => {
  const [selectedOption, setSelectedOption] = useState<string>("Today");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  // const handleSelectOption = (option: string) => {
  //   setSelectedOption(option);
  //   setIsOpen(false);
  // };

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);

    let result: { timeUnit?: string; startDate?: string; endDate?: string } =
      {};

    if (["Today", "This Month", "Last Month"].includes(option)) {
      result = {
        timeUnit:
          option === "Today"
            ? "day"
            : option === "This Month"
              ? "month"
              : "lastMonth",
      };
    } else {
      let startDate, endDate;
      if (option === "Last 7 days") {
        startDate = addDays(new Date(), -7);
        endDate = endOfDay(new Date());
      } else if (option === "Last 14 days") {
        startDate = addDays(new Date(), -14);
        endDate = endOfDay(new Date());
      } else if (option === "Last 30 days") {
        startDate = addDays(new Date(), -30);
        endDate = endOfDay(new Date());
      }
      // switch (option) {
      //   case "Last 7 days":
      //     startDate = addDays(new Date(), -7);
      //     endDate = endOfDay(new Date());
      //     break;
      //   case "Last 14 days":
      //     startDate = addDays(new Date(), -14);
      //     endDate = endOfDay(new Date());
      //     break;
      //   case "Last 30 days":
      //     startDate = addDays(new Date(), -30);
      //     endDate = endOfDay(new Date());
      //     break;
      // }
      result = {
        startDate: format(startDate!, "yyyy-MM-dd"),
        endDate: format(endDate!, "yyyy-MM-dd"),
      };
    }

    onDateChange?.(result);
  };

  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-default"
        type="button"
        className="hs-dropdown-toggle py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
        aria-haspopup="menu"
        aria-expanded={isOpen ? "true" : "false"}
        aria-label="Dropdown"
        onClick={toggleDropdown}
      >
          <svg
            className="shrink-0 size-3.5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
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
          {selectedOption}
        

        <svg
          className={`hs-dropdown-open:rotate-180 size-4 ${isOpen ? "rotate-180" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <ul
          className="p-1 hs-dropdown-menu transition-[opacity,margin] duration-150 opacity-100 min-w-[120px] w-full bg-white shadow-md rounded-lg mt-2 absolute right-0 top-full z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="hs-dropdown-default"
        >
          {DATE_OPTS.map((item, index) => (
            <li key={index}>
              <button
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 w-full text-left"
                onClick={() => handleSelectOption(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DateSelector;
