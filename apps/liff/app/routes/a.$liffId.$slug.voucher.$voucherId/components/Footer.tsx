import React from 'react';

interface FooterProps {
  onClick: () => void;
  buttonText?: string;
  color?: string;
  collected: boolean;
}

const Footer: React.FC<FooterProps> = ({
  onClick = () => {}, 
  buttonText = "เก็บคูปอง",
  color,
  collected = false,
}) => {
  return (
    <div className="px-4 py-2 bg-white w-full border-t bottom-0">
      <button
        onClick={onClick}
        className={`w-full py-4 rounded-xl font-medium transition border border-primary ${collected ? "bg-white text-primary" : "bg-primary text-white"}`}
        style={{ backgroundColor: collected ? "white" : color, color: collected ? color : "white", borderColor: color }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Footer;
