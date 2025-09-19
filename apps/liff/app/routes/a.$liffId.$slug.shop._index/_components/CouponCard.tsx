import { useNavigate, useParams } from "@remix-run/react";
import React from "react";
import { getDirectusFileUrl } from "~/utils/files";
import LazyImage from "~/components/LazyImage";

interface CouponCardProps {
  couponId: string;
  cover: string;
  logo?: string;
  title: string;
  description?: string;
  endDate?: string;
  language: string;
  width?: number | "full";
  height?: number | "full";
  priority?: boolean;
  placeholder?: "shimmer" | "blur" | "none";
}

// removed unused date formatting utilities

const CouponCard: React.FC<CouponCardProps> = ({
  couponId,
  cover,
  logo,
  title,
  description,
  width = "full",
  height = "full",
  priority = false,
  placeholder = "blur",
}) => {
  const { liffId, slug } = useParams();
  const navigate = useNavigate();

  const navigateToCollectCoupon = () =>
    navigate(`/a/${liffId}/${slug}/coupon/${couponId}`);
  return (
    <button
      onClick={() => navigateToCollectCoupon()}
      className={`flex shrink-0 flex-col bg-white ${width === "full" ? "w-full" : `w-32`}`}
    >
      <div
        className={`relative aspect-square ${height === "full" ? "h-full" : `h-32`}`}
      >
        <LazyImage
          src={
            getDirectusFileUrl(
              cover,
              { width: width === "full" ? 512 : 256, format: "webp", quality: 60, fit: "cover" }
            ) ?? ""
          }
          srcSet={[
            `${getDirectusFileUrl(cover, { width: 160, format: "webp", quality: 60, fit: "cover" })} 160w`,
            `${getDirectusFileUrl(cover, { width: 256, format: "webp", quality: 60, fit: "cover" })} 256w`,
            `${getDirectusFileUrl(cover, { width: 320, format: "webp", quality: 60, fit: "cover" })} 320w`,
            `${getDirectusFileUrl(cover, { width: 384, format: "webp", quality: 60, fit: "cover" })} 384w`,
            `${getDirectusFileUrl(cover, { width: 512, format: "webp", quality: 60, fit: "cover" })} 512w`,
            `${getDirectusFileUrl(cover, { width: 640, format: "webp", quality: 60, fit: "cover" })} 640w`,
          ].join(", ")}
          sizes={width === "full" ? "(max-width: 640px) 100vw, 50vw" : "128px"}
          alt={title ?? ""}
          className={`w-full ${height === "full" ? "h-full" : `h-32`} rounded-2xl object-cover`}
          wrapperClassName={`w-full ${height === "full" ? "h-full" : `h-32`} rounded-2xl`}
          placeholder={placeholder}
          blurDataURL={getDirectusFileUrl(cover, { width: 12, height: 12, format: "webp", quality: 40 })}
          rootMargin="600px"
          priority={priority}
        />
        {/* Gradient Overlay */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[35%] w-full rounded-b-2xl bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
        {logo && (
          <div className="absolute bottom-2 left-2">
            <LazyImage
              src={getDirectusFileUrl(logo, { width: 56, format: "webp", quality: 60, fit: "cover" }) ?? ""}
              srcSet={[
                `${getDirectusFileUrl(logo, { width: 28, format: "webp", quality: 60, fit: "cover" })} 28w`,
                `${getDirectusFileUrl(logo, { width: 42, format: "webp", quality: 60, fit: "cover" })} 42w`,
                `${getDirectusFileUrl(logo, { width: 56, format: "webp", quality: 60, fit: "cover" })} 56w`,
              ].join(", ")}
              sizes="28px"
              alt="Logo"
              className="h-7 w-7 rounded-full border border-white object-cover shadow-sm"
              wrapperClassName="h-7 w-7 rounded-full"
              placeholder="blur"
              blurDataURL={getDirectusFileUrl(logo, { width: 10, height: 10, format: "webp", quality: 40 })}
              rootMargin="200px"
            />
          </div>
        )}
      </div>
      <div className="pt-3 text-start">
        <h3 className="line-clamp-2 text-start text-sm font-semibold leading-snug">
          {title}
        </h3>
        {description && (
          <p className="mt-1 line-clamp-2 text-xs text-gray-600">
            {description}
          </p>
        )}
        {/* {endDate && (
          <p className="mt-1 text-xs text-gray-500">
            {language === "th" ? "หมดเขต" : "Expires"}: {formatDate(endDate)} - {formatHHMM(endDate)}
          </p>
        )} */}
      </div>
    </button>
  );
};

export default CouponCard;
