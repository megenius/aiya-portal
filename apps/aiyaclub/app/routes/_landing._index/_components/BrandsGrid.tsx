import React from "react";
import { VoucherBrand } from "~/@types/app.type";
import { getDirectusFileUrl } from "~/utils/files";

interface Brand {
  id: string;
  name: string;
  logo?: string;
}

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
    <div className="brands-grid grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 py-2">
      {brands.map(brand => (
        <div key={brand.id} className="brand-item flex flex-col items-center hover:transform hover:-translate-y-1 transition-transform cursor-pointer">
          <div className="brand-logo w-16 h-16 rounded-full bg-gray-100 border border-gray-200 p-1 flex items-center justify-center mb-2">
            {brand.logo ? (
              <img 
                src={getDirectusFileUrl(brand.logo as string)}
                alt={brand.name || "Brand logo"}
                className="max-w-[80%] max-h-[80%]"
              />
            ) : (
              <span className="text-2xl">{brand.name}</span>
            )}
          </div>
          <span className="brand-name text-sm text-center">{brand.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BrandsGrid;
