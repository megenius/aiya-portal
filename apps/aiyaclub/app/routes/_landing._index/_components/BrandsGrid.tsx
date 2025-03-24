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
        <div key={brand.id} className="flex flex-col items-center hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
          <div className="w-16 h-16 rounded-full bg-gray-100 border border-gray-200 p-1 flex items-center justify-center mb-2 overflow-hidden">
            {brand.logo ? (
              <img 
                src={getDirectusFileUrl(brand.logo as string)}
                alt={brand.name || "Brand logo"}
                className="max-w-[80%] max-h-[80%] object-contain"
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
