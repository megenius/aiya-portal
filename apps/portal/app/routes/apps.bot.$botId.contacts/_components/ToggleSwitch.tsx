import React, { useState } from "react";

interface ToggleButtonProps {
  onToggle: (checked: boolean) => void;
  initialChecked?: boolean;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  onToggle,
  initialChecked = false,
}) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleClick = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onToggle(newChecked);
  };

  return (
    <button
      className={`p-2 rounded-lg transition-colors ease-in-out duration-500 border flex items-center justify-center ${
        isChecked ? "bg-white" : "bg-gray-300"
      }`}
      onClick={handleClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`lucide lucide-bot ${ isChecked ? 'text-blue-600' : 'text-gray-600' }`}
      >
        {isChecked ? (
          <>
            <path d="M12 8V4H8" />
            <rect width="16" height="12" x="4" y="8" rx="2" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M15 13v2" />
            <path d="M9 13v2" />
          </>
        ) : (
          <>
            <path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
            <path d="M2 14h2" />
            <path d="M20 14h2" />
            <path d="M22 22 2 2" />
            <path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" />
            <path d="M9 13v2" />
            <path d="M9.67 4H12v2.33" />
          </>
        )}
      </svg>
    </button>
  );
};

export default ToggleButton;
