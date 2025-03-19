import React from "react";
import { Brand } from "~/types/app";
import { PageLiff } from "~/types/page";
import BrandCard from "./BrandCard";

interface BrandListProps {
  brands?: Brand[];
  page: PageLiff;
  language: string;
}

const BrandList: React.FC<BrandListProps> = ({ brands, page, language }) => {
  const brandText = {
    th: "แบรนด์",
    en: "Brands",
  };

  if (!brands?.length) return null;

  return (
    <div className="space-y-2">
      <h3 className="px-4 text-lg font-medium">{brandText[language]}</h3>
      <div
        className="flex overflow-x-auto overflow-y-hidden gap-3 px-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {brands.map((brand) => (
          <BrandCard 
            key={brand.id} 
            brand={brand} 
            page={page}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandList;
