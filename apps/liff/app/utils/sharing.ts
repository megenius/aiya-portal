import type { PageLiff } from "~/types/page";

/**
 * Generate a shareable URL for a coupon with OG meta tags
 * @param page - Page data with slug
 * @param couponId - Coupon ID
 * @returns Shareable URL (e.g., https://liff.aiya.me/share/tdh/coupon/123)
 */
export function createShareableLink(page: PageLiff, couponId: string): string {
  // Priority: window.location.origin > ENV variable > fallback
  const baseUrl =
    (typeof window !== "undefined" ? window.location.origin : null) ||
    import.meta.env.VITE_BASE_URL ||
    "https://liff.aiya.me"; // Final fallback for production

  return `${baseUrl}/share/${page.slug}/coupon/${couponId}`;
}

/**
 * Generate LIFF URL for deep linking
 * @param liffId - LIFF ID
 * @param path - Optional path (e.g., /coupon/123)
 * @returns LIFF URL (e.g., https://miniapp.line.me/2008092679-REErnN7G/coupon/123)
 */
export function createLiffUrl(liffId: string, path?: string): string {
  const baseLiffUrl = `https://miniapp.line.me/${liffId}`;
  return path ? `${baseLiffUrl}${path}` : baseLiffUrl;
}

/**
 * Check if current user agent is a crawler/bot
 * @returns true if crawler detected
 */
export function isCrawler(): boolean {
  if (typeof navigator === "undefined") return false;

  const userAgent = navigator.userAgent.toLowerCase();
  const crawlerPatterns = [
    "bot",
    "crawler",
    "spider",
    "facebook",
    "twitter",
    "whatsapp",
    "telegram",
    "slack",
    "linkedin",
    "pinterest",
    "reddit",
  ];

  return crawlerPatterns.some((pattern) => userAgent.includes(pattern));
}

/**
 * Copy text to clipboard
 * @param text - Text to copy
 * @returns Promise that resolves when copied
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      const successful = document.execCommand("copy");
      document.body.removeChild(textArea);
      return successful;
    } catch (err) {
      document.body.removeChild(textArea);
      return false;
    }
  } catch (err) {
    console.error("Failed to copy:", err);
    return false;
  }
}
