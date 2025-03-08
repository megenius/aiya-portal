import React from "react";

interface FooterProps {
  onClick: () => void;
  buttonText?: string;
  color?: string;
  status?: string;
}

const Footer: React.FC<FooterProps> = ({
  onClick = () => {},
  buttonText = "เก็บคูปอง",
  color,
  status,
}) => {

  return (
    <div className="px-4 py-2 bg-white w-full border-t bottom-0">
      <button
        onClick={onClick}
        className={`w-full py-4 rounded-xl font-medium transition border border-primary ${status === "collected" ? "bg-white text-primary" : status === "instant" || status === "form" ? "bg-primary text-white" : "bg-gray-300 text-gray-500"}`}
        style={{
          backgroundColor:
            status === "collected"
              ? "white"
              : status === "instant" || status === "form"
              ? color
              : "",
          color: status === "collected" ? color : "white",
          borderColor: status === "instant" || status === "form" || status === "collected" ? color : "transparent",
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Footer;