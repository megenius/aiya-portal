import { th } from "date-fns/locale";
import { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Register Thai locale
registerLocale("th", th);

export function DateRangePicker({
  className,
  onDateChange,
}: {
  className?: string;
  onDateChange?: (dates: { start: string; end: string }) => void;
}) {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const globalStyles = `
    .react-datepicker-wrapper {
      width: 100%;
    }
    .react-datepicker__input-container {
      width: 100%;
    }
    .react-datepicker-popper {
      z-index: 9999 !important;
    }
  `;

  // Format date to Thailand timezone (Asia/Bangkok)
  const formatToThailandTime = (date: Date | null): string => {
    if (!date) return "";

    // Format date to Thailand timezone (Asia/Bangkok)
    const thailandTime = new Intl.DateTimeFormat("en-TH", {
      timeZone: "Asia/Bangkok",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
    const [month, day, year] = thailandTime
      .split("/")
      .map((part) => parseInt(part, 10));
    const formattedDate = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    return formattedDate;
  };

  const handleStartChange = (date: Date | null) => {
    setStartDate(date);
    if (date && endDate) {
      onDateChange?.({
        start: formatToThailandTime(date),
        end: formatToThailandTime(endDate),
      });
    }
  };

  const handleEndChange = (date: Date | null) => {
    setEndDate(date);
    if (startDate && date) {
      onDateChange?.({
        start: formatToThailandTime(startDate),
        end: formatToThailandTime(date),
      });
    }
  };

  const clearDates = () => {
    setStartDate(null);
    setEndDate(null);
    onDateChange?.({ start: "", end: "" });
  };

  return (
    <div
      className={`space-y-4 ${className} flex flex-col gap-4 md:flex-row md:items-center md:justify-center`}
    >
      <div className="flex flex-row gap-2">
        {/* Start Date Picker */}
        <div className="flex-1 md:flex md:justify-center">
          <div className="relative flex items-center justify-center">
            <DatePicker
              selected={startDate}
              onChange={handleStartChange}
              dateFormat="yyyy-MM-dd"
              className="z-50 block w-full pr-10 pl-4 py-2 text-sm border border-gray-300 rounded-lg shadow-xs focus:ring-blue-500 focus:border-blue-500"
              placeholderText="เลือกวันที่เริ่มต้น"
              id="startDate"
              maxDate={new Date()} // Restricts future dates
              showYearDropdown
              showMonthDropdown
              scrollableYearDropdown
              locale="th"
              popperClassName="custom-datepicker-popper"
              popperProps={{
                strategy: "fixed", // Ensure fixed positioning
              }}
              popperPlacement="bottom-start"
            />
          </div>
        </div>

        {/* Icon or Divider */}
        <div className="flex items-center justify-center">
          <span className="font-medium text-gray-700 dark:text-gray-300">
            -
          </span>
        </div>

        {/* End Date Picker */}
        <div className="flex-1 md:flex md:justify-center">
          <div className="relative flex items-center justify-center">
            <DatePicker
              selected={endDate}
              onChange={handleEndChange}
              dateFormat="yyyy-MM-dd"
              className="block w-full pr-10 pl-4 py-2 text-sm border border-gray-300 rounded-lg shadow-xs focus:ring-blue-500 focus:border-blue-500 "
              placeholderText="เลือกวันที่สิ้นสุด"
              id="endDate"
              maxDate={new Date()} // Restricts future dates
              showYearDropdown
              showMonthDropdown
              scrollableYearDropdown
              locale="th"
              startDate={startDate!}
              endDate={endDate!}
              minDate={startDate!} // Ensure start date constraint
              popperClassName="custom-datepicker-popper"
              popperProps={{
                strategy: "fixed", // Ensure fixed positioning
              }}
              popperPlacement="bottom-start"
            />
          </div>
        </div>

        {/* Clear Button */}
        <button
          type="button"
          className="text-center text-gray-400 hover:text-gray-600 flex items-center justify-center"
          onClick={clearDates}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
