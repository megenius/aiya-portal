import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  /** List of items to display */
  items: string[];
  /** Currently selected item */
  selected?: string;
  /** Callback when an item is selected */
  onSelect: (item: string) => void;
  /** Placeholder text when nothing is selected */
  placeholder?: string;
  /** Disable interaction */
  disabled?: boolean;
  /** Show error state */
  error?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  selected,
  onSelect,
  placeholder = "Select...",
  disabled = false,
  error = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative inline-block w-full ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <button
        type="button"
        onClick={toggleOpen}
        disabled={disabled}
        className={`flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-left bg-white border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 ${
          disabled 
            ? 'bg-gray-50 border-gray-300' 
            : error 
              ? 'border-red-500' 
              : 'border-gray-300 hover:bg-gray-50'
        }`}
      >
        <span className={selected ? "text-gray-900" : "text-gray-500"}>
          {selected || placeholder}
        </span>
        <svg
          className="ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="z-50 absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-gray-200 ring-opacity-5">
          <div
            role="menu"
            aria-orientation="vertical"
            className="max-h-60 overflow-y-auto"
          >
            {items.map((item) => (
              <button
                key={item}
                type="button"
                className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                onClick={() => {
                  onSelect(item);
                  setIsOpen(false);
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
