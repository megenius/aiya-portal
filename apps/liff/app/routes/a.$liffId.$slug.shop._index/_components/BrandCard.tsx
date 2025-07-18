import React from "react";
import { Brand } from "~/types/app";
import { PageLiff } from "~/types/page";
import { getDirectusFileUrl } from "~/utils/files";
import { useNavigate } from "@remix-run/react";

interface BrandCardProps {
  brand: Brand;
  page: PageLiff;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand, page }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/a/${page.liff_id}/${page.slug}/brand/${brand.id}`);
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center gap-1 min-w-16"
    >
      <div className="w-14 h-14 rounded-full border border-gray-200 p-0.5">
        <img
          src={getDirectusFileUrl(brand.logo as string) ?? ""}
          alt={brand.id}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <span className="text-xs text-gray-700 text-center">
        {brand.name}
      </span>
    </button>
  );
};

export default BrandCard;
