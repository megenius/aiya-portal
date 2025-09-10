import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  primaryColor?: string;
  secondaryColor?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  text,
  className,
  primaryColor,
  secondaryColor,
  onClick,
}) => {
  const baseClass = "w-full py-2 rounded-lg font-medium";
  const primaryClass = "bg-primary text-white";
  const secondaryClass = "text-primary border border-primary";
  const buttonClass = primaryColor ? primaryClass : secondaryClass;
  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${className} ${buttonClass}`}
      style={{
        backgroundColor: primaryColor,
        color: secondaryColor,
        border: secondaryColor && `1px solid ${secondaryColor}`,
      }}
    >
      {text}
    </button>
  );
};

export default Button;
