/**
 * Sanitize user-generated content to prevent XSS attacks
 * Note: React already escapes text content by default when rendering through JSX.
 * This function provides additional validation and removes potentially harmful characters.
 */
export const sanitizeUserInput = (input: string | undefined | null): string => {
  if (!input) return "";
  // Remove null bytes and trim whitespace
  return input.replace(/\0/g, "").trim();
};

/**
 * Safely get the first character of a string, uppercased
 * Returns '?' if string is empty or undefined
 */
export const getInitial = (name: string | undefined | null): string => {
  const sanitized = sanitizeUserInput(name);
  return sanitized?.[0]?.toUpperCase() || "?";
};

/**
 * Validate voucher ID format
 * Allows alphanumeric characters, hyphens, and underscores
 */
export const isValidVoucherId = (id: string | undefined | null): boolean => {
  if (!id) return false;
  return /^[a-zA-Z0-9_-]+$/.test(id);
};

/**
 * Validate URL to ensure it's safe
 */
export const isSafeUrl = (url: string | undefined | null): boolean => {
  if (!url) return false;
  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    // If it's a relative URL, it's safe
    return url.startsWith("/");
  }
};

/**
 * Format date to Thai locale with time
 */
export const formatDateTimeThTH = (date: Date | string | null | undefined): string => {
  if (!date) return "-";
  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return (
      dateObj.toLocaleDateString("th-TH", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "Asia/Bangkok",
      }) +
      " " +
      dateObj.toLocaleTimeString("th-TH", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Bangkok",
      })
    );
  } catch {
    return "-";
  }
};

/**
 * Format date to short format with smart year display (for table/card display)
 * Shows year only if different from current year
 * Format: "15 Jan, 14:30" (same year) or "15 Jan 2023, 14:30" (different year)
 */
export const formatDateShort = (date: Date | string | null | undefined): string => {
  if (!date) return "-";
  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    const now = new Date();
    const sameYear = dateObj.getFullYear() === now.getFullYear();

    const datePart = dateObj.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      ...(sameYear ? {} : { year: "numeric" }),
      timeZone: "Asia/Bangkok",
    });
    const timePart = dateObj.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Bangkok",
    });
    return `${datePart}, ${timePart}`;
  } catch {
    return "-";
  }
};

/**
 * Format full date-time with explicit locale and timezone (default: th-TH @ Asia/Bangkok)
 */
export const formatDateTimeTZ = (
  date: Date | string | null | undefined,
  locale: string = "th-TH",
  timeZone: string = "Asia/Bangkok"
): string => {
  if (!date) return "-";
  try {
    const dateObj = typeof date === "string" ? new Date(date) : date;
    return dateObj.toLocaleString(locale, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone,
    });
  } catch {
    return "-";
  }
};

/**
 * Check if a date is within a time threshold (in milliseconds)
 */
export const isWithinTimeThreshold = (
  date: Date | null | undefined,
  thresholdMs: number
): boolean => {
  if (!date) return false;
  const now = new Date();
  return now.getTime() - date.getTime() < thresholdMs;
};
