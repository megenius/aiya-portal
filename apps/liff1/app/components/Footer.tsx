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
  height = "h-24",
  textColor = "text-white",
  textSize = "text-base md:text-lg lg:text-xl",
  bgColor = "bg-gray-800"
}) => {
  const baseClasses = `w-full ${height} flex flex-col justify-center items-center ${textColor} ${textSize} px-3`;
  const positionClass = fixed ? "fixed left-0 bottom-0" : "";

  return (
    <footer className={`${baseClasses} ${positionClass} ${className}`} style={{ backgroundColor: bgColor }}>
      {children}
    </footer>
  );
};

export default Footer;