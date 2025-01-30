import React, { useState } from "react";

interface ToggleSwitchProps {
  onToggle: (checked: boolean) => void;
  initialChecked?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ onToggle, initialChecked = false }) => {
  const [isChecked, setIsChecked] = useState(initialChecked);

  const handleChange = () => {
    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onToggle(newChecked);
  };

  return (
    <div className="flex items-center">
      <button
        className={`relative w-14 h-7 rounded-full cursor-pointer transition-colors ease-in-out duration-200 ${isChecked ? 'bg-blue-600' : 'bg-gray-300'}`}
        onClick={handleChange}
      >
        <div
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow transition-transform -translate-y-[2px] duration-200 ${isChecked ? 'translate-x-[1.5rem]' : ''}`}
        ></div>
      </button>
    </div>
  );
};

export default ToggleSwitch;
