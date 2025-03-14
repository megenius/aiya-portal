import React from "react";

interface FooterProps {
  children: React.ReactNode;
  className?: string;
  fixed?: boolean;
  height?: string;
  textColor?: string;
  textSize?: string;
  bgColor?: string;
}

const Footer: React.FC<FooterProps> = ({
  children,
  className = "",
  fixed = true,
  height = "h-20",
  textColor = "text-white",
  textSize = "text-base md:text-lg lg:text-xl",
  bgColor = "bg-gray-800",
}) => {
  const baseClasses = `w-full ${height} flex flex-col justify-center items-center rounded-lg ${textColor} ${textSize} px-3`;
  const positionClass = fixed ? "fixed left-0 bottom-0" : "";

  return (
    <footer className={`p-3 w-full ${positionClass}`}>
      <div
        className={`${baseClasses} ${className}`}
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>
    </footer>
  );
};

export default Footer;
