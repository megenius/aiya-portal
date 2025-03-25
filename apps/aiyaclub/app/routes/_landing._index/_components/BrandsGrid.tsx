import React from "react";
import { VoucherBrand } from "~/@types/app.type";
import { getDirectusFileUrl } from "~/utils/files";

interface BrandsGridProps {
  brands: VoucherBrand[];
}

const BrandsGrid: React.FC<BrandsGridProps> = ({ brands }) => {
  if (brands.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">No brands available</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 py-2">
      {brands.map(brand => (
        <div 
          key={brand.id} 
          className="flex flex-col items-center transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center mb-2 overflow-hidden p-1">
            {brand.logo ? (
              <img 
                src={getDirectusFileUrl(brand.logo as string)}
                alt={brand.name || "Brand logo"}
                className="object-cover w-full h-full rounded-full"
              />
            ) : (
              <span className="text-lg font-medium text-gray-500">{(brand.name || "").charAt(0)}</span>
            )}
          </div>
          <span className="text-sm text-center text-gray-700">{brand.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BrandsGrid;
