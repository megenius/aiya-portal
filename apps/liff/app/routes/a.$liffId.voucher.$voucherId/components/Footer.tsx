import React from 'react';

interface FooterProps {
  onClick?: () => void;
  buttonText?: string;
  color?: string;
}

const Footer: React.FC<FooterProps> = ({ 
  onClick = () => {}, 
  buttonText = "กดเพื่อรับสิทธิ์",
  color
}) => {
  return (
    <div className="p-4 w-full fixed bottom-0">
      <button
        onClick={onClick}
        className={`w-full text-white py-4 rounded-xl font-medium ${!color ? 'bg-primary' : ''}`}
        style={color ? { backgroundColor: color } : {}}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Footer;
