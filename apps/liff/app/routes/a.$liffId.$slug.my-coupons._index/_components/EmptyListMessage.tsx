import React from "react";
import { t } from "~/i18n/messages";

interface EmptyListMessageProps {
  activeTab: string;
  language: string;
}

const EmptyListMessage: React.FC<EmptyListMessageProps> = ({
  activeTab,
  language,
}) => {
  const keyMap: Record<string, string> = {
    available: "myCoupons.empty.available",
    used: "myCoupons.empty.used",
    expired: "myCoupons.empty.expired",
  };
  const msgKey = keyMap[activeTab] || keyMap.available;
  const message = t(language as "th" | "en", msgKey);

  return (
    <div className="flex flex-col items-center justify-center h-40 text-gray-500">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-12 w-12 mb-2" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" 
        />
      </svg>
      <p className="text-center font-medium">{message}</p>
    </div>
  );
};

export default EmptyListMessage;
