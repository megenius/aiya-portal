import React from "react";

interface DateRangeSelectorProps {
  value: number;
  onChange: (days: number) => void;
  loading?: boolean;
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  value,
  onChange,
  loading = false
}) => {
  const options = [
    { label: "Today", days: 1 },
    { label: "7 Days", days: 7 },
    { label: "30 Days", days: 30 },
    { label: "90 Days", days: 90 },
    { label: "All Time", days: 0 }
  ];

  const getDisplayText = (days: number) => {
    switch (days) {
      case 0: return "all time";
      case 1: return "today";
      case 7: return "7 days";
      case 30: return "30 days";
      case 90: return "90 days";
      default: return `${days} days`;
    }
  };

  return (
    <div className="flex items-center gap-2">
      {options.map((option) => (
        <button
          key={option.days}
          onClick={() => onChange(option.days)}
          disabled={loading}
          className={`px-3 py-1.5 text-xs rounded-full border transition-all ${
            value === option.days
              ? "bg-purple-600 text-white border-purple-600 shadow-sm"
              : "bg-white text-purple-700 border-purple-300 hover:bg-purple-50"
          } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {option.label}
        </button>
      ))}
      {loading && (
        <div className="flex items-center gap-2 ml-2">
          <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-purple-600"></div>
          <span className="text-xs text-gray-500">Loading {getDisplayText(value)}...</span>
        </div>
      )}
    </div>
  );
};

export default DateRangeSelector;