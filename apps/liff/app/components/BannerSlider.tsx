import React, { useState, useEffect, useRef, useCallback } from "react";
import LazyImage from "./LazyImage";
import { getDirectusFileUrl } from "~/utils/files";

export interface BannerItem {
  id: string;
  image: string;
  title?: string;
  link?: string;
  alt?: string;
  type?: 'voucher' | 'campaign';
}

export interface BannerSliderProps {
  banners: BannerItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showDots?: boolean;
  aspectRatio?: number | string;
  className?: string;
  onBannerClick?: (banner: BannerItem) => void;
}

const BannerSlider: React.FC<BannerSliderProps> = ({
  banners,
  autoPlay = true,
  autoPlayInterval = 3000,
  showDots = true,
  aspectRatio = "16/9",
  className = "",
  onBannerClick,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef<number>(0);
  const touchEndRef = useRef<number>(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const totalBanners = banners.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || totalBanners === 0) return;

      setIsTransitioning(true);
      setCurrentIndex(index);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning, totalBanners],
  );

  const goToNext = useCallback(() => {
    const nextIndex = (currentIndex + 1) % totalBanners;
    goToSlide(nextIndex);
  }, [currentIndex, totalBanners, goToSlide]);

  const goToPrev = useCallback(() => {
    const prevIndex = currentIndex === 0 ? totalBanners - 1 : currentIndex - 1;
    goToSlide(prevIndex);
  }, [currentIndex, totalBanners, goToSlide]);

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || totalBanners <= 1) return;

    autoPlayRef.current = setInterval(goToNext, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, autoPlayInterval, goToNext, totalBanners]);

  // Pause auto play on hover
  const handleMouseEnter = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const handleMouseLeave = () => {
    if (autoPlay && totalBanners > 1) {
      autoPlayRef.current = setInterval(goToNext, autoPlayInterval);
    }
  };

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const distance = touchStartRef.current - touchEndRef.current;
    const minSwipeDistance = 50;

    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > 0) {
      goToNext();
    } else {
      goToPrev();
    }

    touchStartRef.current = 0;
    touchEndRef.current = 0;
  };

  const handleBannerClick = (banner: BannerItem) => {
    if (onBannerClick) {
      onBannerClick(banner);
    } else if (banner.link) {
      window.open(banner.link, "_blank");
    }
  };

  if (totalBanners === 0) {
    return null;
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        ref={sliderRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ aspectRatio: String(aspectRatio) }}
      >
        <div
          className="flex h-full transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className="w-full flex-shrink-0 cursor-pointer"
              onClick={() => handleBannerClick(banner)}
            >
              <LazyImage
                src={getDirectusFileUrl(banner.image)}
                alt={banner.alt || `Banner ${index + 1}`}
                className="h-full object-cover"
                aspectRatio={aspectRatio}
                placeholder="blur"
                blurDataURL={getDirectusFileUrl(banner.image, {
                  width: 24,
                  height: 24,
                })}
                priority
              />
              {banner.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {banner.title}
                  </h3>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      {showDots && totalBanners > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "scale-125 bg-white"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Navigation arrows (optional - hidden on mobile) */}
      {totalBanners > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 hidden -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white transition-all duration-200 hover:bg-black/50 sm:block"
            aria-label="Previous banner"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 hidden -translate-y-1/2 transform rounded-full bg-black/30 p-2 text-white transition-all duration-200 hover:bg-black/50 sm:block"
            aria-label="Next banner"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};

export default BannerSlider;
