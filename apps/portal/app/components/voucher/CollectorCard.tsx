import React from "react";
import {
  VoucherCodeStatus,
  STATUS_BADGE_STYLES,
  VOUCHER_CONSTANTS,
} from "~/constants/voucher.constant";
import {
  sanitizeUserInput,
  getInitial,
  formatDateTimeThTH,
  isWithinTimeThreshold,
} from "~/utils/voucher";

export interface CollectorCardProps {
  userId: string;
  displayName: string;
  pictureUrl?: string | null;
  collectedDate?: Date | null;
  status: VoucherCodeStatus;
  rankingNumber?: number;
  showNewBadge?: boolean;
  variant?: "compact" | "detailed";
}

export const CollectorCard: React.FC<CollectorCardProps> = ({
  displayName,
  pictureUrl,
  collectedDate,
  status,
  rankingNumber,
  showNewBadge = true,
  variant = "detailed",
}) => {
  const safeName = sanitizeUserInput(displayName);
  const initial = getInitial(displayName);
  const isNew =
    showNewBadge &&
    isWithinTimeThreshold(
      collectedDate,
      VOUCHER_CONSTANTS.NEW_COLLECTOR_THRESHOLD_MS
    );

  const statusStyle =
    STATUS_BADGE_STYLES[status] || STATUS_BADGE_STYLES[VoucherCodeStatus.AVAILABLE];

  return (
    <div
      className={`relative flex items-center gap-3 rounded-xl border bg-white/10 p-4 shadow-sm backdrop-blur-sm transition-all hover:bg-white/15 ${
        isNew ? "border-green-400/80 shadow-green-400/20" : "border-white/20"
      }`}
    >
      {isNew && (
        <div className="absolute -right-1 -top-1 rounded-full bg-green-500 px-2 py-0.5 text-xs font-bold text-white shadow-lg">
          NEW
        </div>
      )}

      {rankingNumber && (
        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-sm font-bold text-white">
          #{rankingNumber}
        </div>
      )}

      <div className="h-10 w-10 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/30">
        {pictureUrl ? (
          <img
            src={pictureUrl}
            alt={safeName}
            className="h-full w-full object-cover"
            onError={(e) => {
              // Fallback to initial if image fails to load
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-white/20 text-sm text-white">
            {initial}
          </div>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-white">{safeName}</div>
        {variant === "detailed" && (
          <div className="text-xs text-white/70">
            {formatDateTimeThTH(collectedDate)}
          </div>
        )}
      </div>

      <span
        className={`flex-shrink-0 rounded-full px-2 py-1 text-xs font-medium ${statusStyle}`}
      >
        {status}
      </span>
    </div>
  );
};
