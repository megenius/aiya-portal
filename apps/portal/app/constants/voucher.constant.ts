/**
 * Voucher Code Status Enum
 */
export enum VoucherCodeStatus {
  USED = "used",
  COLLECTED = "collected",
  PENDING_CONFIRMATION = "pending_confirmation",
  RESERVED = "reserved",
  AVAILABLE = "available",
  EXPIRED = "expired",
}

/**
 * Redemption Type Enum
 */
export enum RedemptionType {
  INSTANT = "instant",
  LIMITED_TIME = "limited_time",
  FORM = "form",
}

/**
 * Status Badge Styles Mapping
 */
export const STATUS_BADGE_STYLES: Record<VoucherCodeStatus, string> = {
  [VoucherCodeStatus.USED]: "bg-green-100 text-green-800",
  [VoucherCodeStatus.COLLECTED]: "bg-blue-100 text-blue-800",
  [VoucherCodeStatus.PENDING_CONFIRMATION]: "bg-yellow-100 text-yellow-800",
  [VoucherCodeStatus.RESERVED]: "bg-purple-100 text-purple-800",
  [VoucherCodeStatus.AVAILABLE]: "bg-gray-100 text-gray-800",
  [VoucherCodeStatus.EXPIRED]: "bg-red-100 text-red-800",
};

/**
 * Redemption Type Badge Styles
 */
export const REDEMPTION_TYPE_STYLES: Record<RedemptionType, string> = {
  [RedemptionType.INSTANT]: "bg-green-500/80 text-white",
  [RedemptionType.LIMITED_TIME]: "bg-orange-500/80 text-white",
  [RedemptionType.FORM]: "bg-blue-500/80 text-white",
};

/**
 * Redemption Type Labels
 */
export const REDEMPTION_TYPE_LABELS: Record<RedemptionType, string> = {
  [RedemptionType.INSTANT]: "Instant",
  [RedemptionType.LIMITED_TIME]: "Limited Time",
  [RedemptionType.FORM]: "Form Required",
};

/**
 * Timing Constants
 */
export const VOUCHER_CONSTANTS = {
  /** Polling interval for real-time updates (5 seconds) */
  STATS_REFETCH_INTERVAL_MS: 5000,
  /** Threshold to mark a collector as "NEW" (1 minute) */
  NEW_COLLECTOR_THRESHOLD_MS: 60000,
  /** Default items per page for pagination */
  ITEMS_PER_PAGE: 10,
} as const;
