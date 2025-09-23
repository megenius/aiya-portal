import React from "react";
import { Ticket, Clock } from "lucide-react";
import { t } from "~/i18n/messages";

interface ComingSoonVoucherProps {
  language: string;
  primaryColor?: string;
}

const ComingSoonVoucher : React.FC<ComingSoonVoucherProps> = ({ language,primaryColor }) => {
  
  return (
    <div className="space-y-2">
      <div className="px-4 py-8 flex flex-col items-center justify-center text-gray-500 rounded-lg">
        <div className="relative mb-2">
          <Ticket className="w-16 h-16 text-gray-400" />
          <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
            <Clock className="w-6 h-6 text-primary" style={{color : primaryColor ?? undefined}} />
          </div>
        </div>
        
        <span className="text-lg font-medium text-primary" style={{color : primaryColor ?? undefined}} >
          {t(language as "th" | "en", "comingSoon.comingSoon")}
        </span>
        
        <p className="text-sm text-center text-gray-600">
          {t(language as "th" | "en", "comingSoon.noVouchers")}
        </p>
        
        {/* <div className="flex items-center mt-4 text-sm text-gray-500">
          <AlertCircle className="w-4 h-4 mr-1" />
          <span>{translations.checkBack[language]}</span>
        </div> */}
      </div>
    </div>
  );
};

export default ComingSoonVoucher;