import { Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  language: string;
}

const SearchBar: React.FC<SearchBarProps> = ({language}) => {
  const findVoucherText = {
    th: "ค้นหาคูปอง ร้านค้า...",
    en: "Find Voucher, Shop...",
  }
  return (
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder={findVoucherText['en']}
          className="w-full pl-10 pr-4 py-2 bg-gray-100 border-transparent rounded-xl"
        />
      </div>
  );
}

export default SearchBar;
