import React, { useState } from "react";
import { Voucher } from "~/@types/app.type";
import { PageLiff } from "~/@types/page.type";
import { getDirectusFileUrl } from "~/utils/files";
import SearchBar from "./SearchBar";
import VoucherList from "./VoucherList";

interface MainContentProps {
  page: PageLiff;
  language: string;
  // Add pre-fetched data props
  vouchers: Array<Voucher>;
  brands: Array<any>;
}

const MainContent: React.FC<MainContentProps> = ({ 
  page, 
  language, 
  vouchers = [], 
  brands = [] 
}) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  // No need for loading state or useEffect - data is pre-fetched on the server
  
  const brandText = {
    th: "แบรนด์",
    en: "Brands",
  };
  const popularCouponsText = {
    th: "คูปองยอดนิยม",
    en: "Popular Coupons",
  };

  // Use language for localization
  const displayLanguage = language.startsWith('th') ? 'th' : 'en';

  return (
    <div className="bg-gray-50 pb-3 space-y-6">
      <div className="px-4">
        <SearchBar language={language} />
          
        {/* Popular Vouchers Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6 mt-4">
          <h2 className="text-xl font-semibold mb-4 border-l-4 border-blue-500 pl-3">
            {popularCouponsText[displayLanguage]}
          </h2>
          
          <VoucherList
            vouchers={vouchers}
            language={language}
            title=""
          />
        </div>
        
        {/* Brands Section */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 border-l-4 border-blue-500 pl-3">
            {brandText[displayLanguage]}
          </h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {brands?.map((brand) => (
              <div
                key={brand.id}
                className="flex flex-col items-center transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center mb-2 p-1 overflow-hidden">
                  <img
                    src={getDirectusFileUrl(brand.logo as string) ?? ""}
                    alt={brand.name || "Brand logo"}
                    className="max-w-[80%] max-h-[80%] object-contain"
                  />
                </div>
                <span className="text-xs text-center text-gray-700">
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
