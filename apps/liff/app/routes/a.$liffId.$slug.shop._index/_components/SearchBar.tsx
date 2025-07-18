import React, { useState } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  language: string;
  primaryColor?: string;
  showSearch?: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ language, primaryColor, showSearch = false }) => {
  const [isFocused, setIsFocused] = useState(false);
  const findVoucherText = {
    th: "ค้นหาคูปอง ร้านค้า...",
    en: "Find Voucher, Shop...",
  };
  return (
    showSearch && <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
      <input
        type="text"
        placeholder={findVoucherText[language]}
        className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-xl border-0 
               focus:bg-white focus:ring-2 focus:ring-primary focus:outline-none"
               style={{
                boxShadow: isFocused
                  ? `0 0 0 2px ${primaryColor}` // Ring effect แบบ Dynamic
                  : "none",
              }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default SearchBar;
