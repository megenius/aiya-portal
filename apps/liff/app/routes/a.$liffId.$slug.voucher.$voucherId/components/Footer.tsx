import React from "react";

interface FooterProps {
  onClick: () => void;
  buttonText?: string;
  color?: string;
  status?: string;
  disabled?: boolean;
}

const Footer: React.FC<FooterProps> = ({
  onClick = () => {},
  buttonText = "collected",
  color,
  status,
  disabled = true,
}) => {

  return (
    <div className="px-4 py-2 bg-white w-full border-t bottom-0">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full py-4 rounded-xl font-medium transition border border-primary ${
          disabled ? "bg-gray-300 text-gray-500" : 
          status === "collected" ? "bg-white text-primary" : 
          status === "instant" || status === "form" ? "bg-primary text-white" : 
          "bg-gray-300 text-gray-500"
        }`}
        style={{
          backgroundColor:
            disabled ? "#d1d5db" :
            status === "collected"
              ? "white"
              : status === "instant" || status === "form"
              ? color
              : "",
          color: disabled ? "#6b7280" :
                 status === "collected" ? color : "white",
          borderColor: disabled ? "transparent" :
                      status === "instant" || status === "form" || status === "collected" ? color : "transparent",
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