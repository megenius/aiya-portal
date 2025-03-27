import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface SnoozeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (snoozeUntil: Date) => void;
  ticketId: string;
}

type SnoozeOption = "1h" | "4h" | "1d" | "3d" | "1w" | "custom";

const SnoozeModal = ({ isOpen, onClose, onConfirm, ticketId }: SnoozeModalProps) => {
  const [snoozeOption, setSnoozeOption] = useState<SnoozeOption>("4h");
  const [customDate, setCustomDate] = useState<Date | null>(null);
  const [showCustomDatePicker, setShowCustomDatePicker] = useState(false);
  
  const calculateSnoozeDate = (): Date => {
    const now = new Date();
    
    switch (snoozeOption) {
      case "1h":
        return new Date(now.getTime() + 60 * 60 * 1000); // 1 hour
      case "4h":
        return new Date(now.getTime() + 4 * 60 * 60 * 1000); // 4 hours
      case "1d":
        return new Date(now.getTime() + 24 * 60 * 60 * 1000); // 1 day
      case "3d":
        return new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000); // 3 days
      case "1w":
        return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000); // 1 week
      case "custom":
        return customDate || new Date(now.getTime() + 24 * 60 * 60 * 1000);
      default:
        return new Date(now.getTime() + 4 * 60 * 60 * 1000); // Default: 4 hours
    }
  };

  const handleConfirm = () => {
    onConfirm(calculateSnoozeDate());
    onClose();
  };

  const handleOptionChange = (value: SnoozeOption) => {
    setSnoozeOption(value);
    if (value === "custom") {
      setShowCustomDatePicker(true);
    } else {
      setShowCustomDatePicker(false);
    }
  };

  const handleCustomClick = () => {
    setSnoozeOption("custom");
    setShowCustomDatePicker(true);
  };

  if (!isOpen) return null;

  // Derived from tickets.html modal structure
  return (
    <div className="hs-overlay show size-full fixed top-0 start-0 z-80 overflow-x-hidden overflow-y-auto pointer-events-auto">
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-100 ease-out transition-all sm:max-w-sm sm:w-full m-3 sm:mx-auto h-[calc(100%-56px)] min-h-[calc(100%-56px)] flex items-center">
        <div className="w-full max-h-full overflow-hidden flex flex-col bg-white rounded-xl pointer-events-auto shadow-xl dark:bg-neutral-800">
          {/* Header */}
          <div className="py-2.5 px-4 flex justify-between items-center border-b border-gray-200 dark:border-neutral-700">
            <h3 className="font-medium text-gray-800 dark:text-neutral-200">
              Snooze
            </h3>
            <button 
              type="button" 
              className="size-8 shrink-0 flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" 
              aria-label="Close" 
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          {/* End Header */}

          {/* Body */}
          <div className="p-1 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <fieldset className="grid gap-y-1">
              <legend className="sr-only">Snooze</legend>

              {/* Radio group */}
              <div className="grid gap-y-1">
                {/* 1 hour option */}
                <label 
                  className={`py-2 px-3 flex items-center rounded-lg cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 ${snoozeOption === "1h" ? "bg-gray-100 dark:bg-neutral-700" : ""}`}
                  onClick={() => handleOptionChange("1h")}
                >
                  <input 
                    type="radio" 
                    name="snoozeOption" 
                    value="1h" 
                    checked={snoozeOption === "1h"} 
                    onChange={() => handleOptionChange("1h")}
                    className="sr-only" 
                  />
                  <span className="grow">1 hour</span>
                  <span className="font-normal text-xs text-gray-500 dark:text-neutral-500">
                    {new Date(Date.now() + 60 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </label>
                
                {/* 4 hours option */}
                <label 
                  className={`py-2 px-3 flex items-center rounded-lg cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 ${snoozeOption === "4h" ? "bg-gray-100 dark:bg-neutral-700" : ""}`}
                  onClick={() => handleOptionChange("4h")}
                >
                  <input 
                    type="radio" 
                    name="snoozeOption" 
                    value="4h" 
                    checked={snoozeOption === "4h"} 
                    onChange={() => handleOptionChange("4h")}
                    className="sr-only" 
                  />
                  <span className="grow">4 hours</span>
                  <span className="font-normal text-xs text-gray-500 dark:text-neutral-500">
                    {new Date(Date.now() + 4 * 60 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </label>
                
                {/* Tomorrow option */}
                <label 
                  className={`py-2 px-3 flex items-center rounded-lg cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 ${snoozeOption === "1d" ? "bg-gray-100 dark:bg-neutral-700" : ""}`}
                  onClick={() => handleOptionChange("1d")}
                >
                  <input 
                    type="radio" 
                    name="snoozeOption" 
                    value="1d" 
                    checked={snoozeOption === "1d"} 
                    onChange={() => handleOptionChange("1d")}
                    className="sr-only" 
                  />
                  <span className="grow">Tomorrow</span>
                  <span className="font-normal text-xs text-gray-500 dark:text-neutral-500">
                    {new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                  </span>
                </label>
                
                {/* 3 days option */}
                <label 
                  className={`py-2 px-3 flex items-center rounded-lg cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 ${snoozeOption === "3d" ? "bg-gray-100 dark:bg-neutral-700" : ""}`}
                  onClick={() => handleOptionChange("3d")}
                >
                  <input 
                    type="radio" 
                    name="snoozeOption" 
                    value="3d" 
                    checked={snoozeOption === "3d"} 
                    onChange={() => handleOptionChange("3d")}
                    className="sr-only" 
                  />
                  <span className="grow">3 days</span>
                  <span className="font-normal text-xs text-gray-500 dark:text-neutral-500">
                    {new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                  </span>
                </label>
                
                {/* 1 week option */}
                <label 
                  className={`py-2 px-3 flex items-center rounded-lg cursor-pointer rounded-md hover:bg-gray-100 dark:hover:bg-neutral-700 ${snoozeOption === "1w" ? "bg-gray-100 dark:bg-neutral-700" : ""}`}
                  onClick={() => handleOptionChange("1w")}
                >
                  <input 
                    type="radio" 
                    name="snoozeOption" 
                    value="1w" 
                    checked={snoozeOption === "1w"} 
                    onChange={() => handleOptionChange("1w")}
                    className="sr-only" 
                  />
                  <span className="grow">1 week</span>
                  <span className="font-normal text-xs text-gray-500 dark:text-neutral-500">
                    {new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric' })}
                  </span>
                </label>
              </div>

              <div className="mt-1">
                {/* Custom date button */}
                <button 
                  type="button" 
                  className="w-full flex justify-between items-center gap-x-3 py-2 px-3 text-start font-medium text-sm text-gray-800 hover:bg-gray-100 rounded-md disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                  onClick={handleCustomClick}
                >
                  Custom
                  <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Show custom date picker */}
              {showCustomDatePicker && (
                <div className="p-3">
                  <DatePicker
                    selected={customDate}
                    onChange={(date) => setCustomDate(date)}
                    minDate={new Date()}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    placeholderText="Select date and time"
                    className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:placeholder-neutral-400"
                  />
                  
                  <div className="mt-2 text-center">
                    <button 
                      type="button"
                      onClick={handleConfirm}
                      disabled={!customDate}
                      className="w-full py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                      Confirm Custom Date
                    </button>
                  </div>
                </div>
              )}
            </fieldset>
          </div>
          {/* End Body */}

          {/* Footer - only show for non-custom options */}
          {!showCustomDatePicker && (
            <div className="p-4 flex justify-end">
              <button 
                type="button" 
                onClick={onClose}
                className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:ring-neutral-700"
              >
                Cancel
              </button>
              <button 
                type="button"
                onClick={handleConfirm}
                className="ml-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
              >
                Confirm
              </button>
            </div>
          )}
          {/* End Footer */}
        </div>
      </div>
    </div>
  );
};

export default SnoozeModal;
