import React from "react";

interface FooterProps {
  onClick: () => void;
  buttonText?: string;
  color?: string;
  disabled?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  onClick = () => {},
  buttonText = "เก็บคูปอง",
  color,
  disabled = false,
}) => {
  return (
    <div className="px-4 py-2 bg-white w-full border-t bottom-0">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-4 rounded-xl font-medium transition ${
          disabled ? "bg-gray-300 text-gray-500" : "bg-primary text-white"
        }`}
        style={{
          backgroundColor: disabled ? "#d1d5db" : color,
          color: disabled ? "#6b7280" : "white",
          opacity: disabled ? 0.7 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Footer;
