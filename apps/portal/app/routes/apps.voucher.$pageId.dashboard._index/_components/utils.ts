/**
 * Utility function to convert various data types to displayable text
 * Handles multilingual objects (th, en) and fallbacks
 */
export function asText(v: unknown): string {
  if (v == null) return "-";
  if (typeof v === "string") return v;
  if (typeof v === "object") {
    const obj = v as Record<string, unknown>;
    return (
      (obj.en as string) ||
      (obj.th as string) ||
      (Object.values(obj)[0] as string) ||
      "-"
    );
  }
  return String(v);
}

/**
 * Formats a date string to a short format (e.g., "Sep 13")
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

/**
 * Formats numbers with proper locale formatting
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}