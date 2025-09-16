import React, { useEffect, useRef, useState } from "react";

export type LazyImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "loading" | "className" | "style"
> & {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  imgStyle?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
  placeholder?: "shimmer" | "blur" | "none";
  blurDataURL?: string;
  threshold?: number;
  rootMargin?: string;
  priority?: boolean;
  fallbackSrc?: string;
  aspectRatio?: number | string; // e.g. 1.777... or "16 / 9"
};

// Built-in default fallback (No Image) as a lightweight SVG data URL
const DEFAULT_FALLBACK_DATA_URL =
  "data:image/svg+xml;utf8,\
<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>\
  <rect width='100%' height='100%' fill='%23e5e7eb'/>\
  <text x='50%' y='50%' text-anchor='middle' fill='%239ca3af' font-family='Arial, Helvetica, sans-serif' font-size='24' dy='.3em'>No Image</text>\
</svg>";

/**
 * LazyImage
 * - Uses IntersectionObserver to lazy load images when in view.
 * - Falls back to native loading="lazy" if necessary.
 * - Provides shimmer or blur placeholder until the image is loaded.
 * - Supports priority loading (eager) for above-the-fold images.
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  imgStyle,
  wrapperStyle,
  placeholder = "shimmer",
  blurDataURL,
  threshold = 0.1,
  rootMargin = "200px",
  priority = false,
  fallbackSrc,
  aspectRatio,
  onLoad,
  onError,
  ...imgProps
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(priority);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (priority) {
      setIsVisible(true);
      return;
    }

    const el = wrapperRef.current;
    if (!el) return;

    // If IntersectionObserver is not supported, load immediately
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { root: null, rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [priority, rootMargin, threshold]);

  const handleLoad: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setIsLoaded(true);
    onLoad?.(e);
  };

  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setIsError(true);
    onError?.(e);
  };

  const showPlaceholder = !isLoaded && placeholder !== "none";

  // Set native fetchpriority attribute via DOM to avoid React unknown prop warning
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;
    try {
      el.setAttribute("fetchpriority", priority ? "high" : "auto");
    } catch (e) {
      // no-op
    }
  }, [priority, isVisible]);

  return (
    <div
      ref={wrapperRef}
      className={["relative overflow-hidden", wrapperClassName || ""].join(" ")}
      style={{
        ...(aspectRatio ? { aspectRatio: String(aspectRatio) } : {}),
        ...(wrapperStyle || {}),
      }}
    >
      {showPlaceholder && (
        <div
          className={
            placeholder === "shimmer"
              ? "absolute inset-0 animate-pulse bg-gray-200"
              : "absolute inset-0 bg-gray-200"
          }
          style={
            placeholder === "blur" && blurDataURL
              ? {
                  backgroundImage: `url(${blurDataURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "blur(12px)",
                  transform: "scale(1.06)",
                }
              : undefined
          }
        />
      )}

      {isVisible && (
        <img
          src={isError || !src ? fallbackSrc || DEFAULT_FALLBACK_DATA_URL : src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          ref={imgRef}
          decoding="async"
          onLoad={handleLoad}
          onError={handleError}
          className={[
            "block h-auto w-full transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0",
            placeholder === "blur" && !isLoaded ? "blur-sm" : "",
            className || "",
          ]
            .join(" ")
            .trim()}
          style={imgStyle}
          {...imgProps}
        />
      )}
    </div>
  );
};

export default LazyImage;
