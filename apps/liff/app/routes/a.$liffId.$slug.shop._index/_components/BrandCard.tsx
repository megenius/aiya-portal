import React from "react";
import LazyImage from "~/components/LazyImage";
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
      className="flex min-w-16 flex-col items-center gap-1"
    >
      <div className="h-14 w-14 rounded-full border border-gray-200 p-0.5">
        <LazyImage
          src={getDirectusFileUrl(brand.logo as string, { width: 56, format: "webp", quality: 60, fit: "cover" }) ?? ""}
          srcSet={[
            `${getDirectusFileUrl(brand.logo as string, { width: 56, format: "webp", quality: 60, fit: "cover" })} 56w`,
            `${getDirectusFileUrl(brand.logo as string, { width: 84, format: "webp", quality: 60, fit: "cover" })} 84w`,
            `${getDirectusFileUrl(brand.logo as string, { width: 112, format: "webp", quality: 60, fit: "cover" })} 112w`,
          ].join(", ")}
          sizes="56px"
          alt={brand.id}
          wrapperClassName="w-full h-full"
          className="h-full w-full rounded-full object-cover"
          width={56}
          height={56}
          placeholder="blur"
          blurDataURL={getDirectusFileUrl(brand.logo as string, {
            width: 12,
            height: 12,
            format: "webp",
            quality: 40,
          })}
          rootMargin="600px"
        />
      </div>
      <span className="text-center text-xs text-gray-700">{brand.name}</span>
    </button>
  );
};

export default BrandCard;
