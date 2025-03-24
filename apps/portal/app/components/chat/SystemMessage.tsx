import React from "react";

interface SystemMessageProps {
  content: string;
  timestamp?: string;
  variant?: "info" | "warning" | "error" | "success";
}

const SystemMessage: React.FC<SystemMessageProps> = ({ 
  content, 
  timestamp,
  variant = "info" 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "warning":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
      case "error":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "success":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "info":
      default:
        return "bg-gray-200 text-gray-800 dark:bg-gray-800 dark:text-gray-300";
    }
  };

  return (
    <div className="flex justify-center my-3">
      <div className={`inline-block rounded-full px-4 py-1.5 text-xs ${getVariantStyles()}`}>
        <span>{content}</span>
        {timestamp && <span className="ml-2 opacity-70">{timestamp}</span>}
      </div>
    </div>
  );
};

export default SystemMessage;
