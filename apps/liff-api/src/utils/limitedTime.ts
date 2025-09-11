export type Tier = {
  id?: string;
  value?: number;
  type?: string;
  condition?: {
    duration_before_claim_seconds?: number;
    default?: boolean;
  };
};

export interface ComputeInput {
  serverNow: Date;
  firstViewedAt: Date;
  start?: Date | null;
  end?: Date | null;
  redemptionType?: string | null;
  discountTiers?: Tier[];
  available?: number; // available code count to compute canCollect
}

export interface ComputeResult {
  effectiveStatus: string; // limited_time | instant | form | not_started
  currentTier: { id?: string; value?: number; type?: string } | null;
  timeLeftSeconds: number;
  progressPercent: number;
  nextBoundaryAt: Date | null;
  campaignEndAt: Date | null;
  canCollect: boolean;
}

export function computeLimitedTimeSnapshot(input: ComputeInput): ComputeResult {
  const {
    serverNow,
    firstViewedAt,
    start = null,
    end = null,
    redemptionType,
    discountTiers = [],
    available = 0,
  } = input;

  // Not started path
  if (start && serverNow < start) {
    return {
      effectiveStatus: "not_started",
      currentTier: null,
      timeLeftSeconds: Math.max(0, Math.round((start.getTime() - serverNow.getTime()) / 1000)),
      progressPercent: 0,
      nextBoundaryAt: start,
      campaignEndAt: end ?? null,
      canCollect: false,
    };
  }

  const isLimitedTime = Array.isArray(discountTiers) && discountTiers.length > 0;
  const effectiveStatus = isLimitedTime ? "limited_time" : (redemptionType || "instant");

  let currentTier: { id?: string; value?: number; type?: string } | null = null;
  let nextBoundaryAt: Date | null = null;
  let timeLeftSeconds = 0;
  let progressPercent = 0;

  if (isLimitedTime) {
    const nowMs = serverNow.getTime();
    let cumulativeStart = firstViewedAt.getTime();
    let totalDurationForTier = 0;

    for (const t of discountTiers) {
      const durSec = t?.condition?.duration_before_claim_seconds;
      if (durSec) {
        const durMs = durSec * 1000;
        const deadline = cumulativeStart + durMs;
        if (nowMs < deadline) {
          currentTier = { id: t.id, value: t.value, type: t.type };
          totalDurationForTier = durMs;
          nextBoundaryAt = new Date(deadline);
          timeLeftSeconds = Math.max(0, Math.round((deadline - nowMs) / 1000));
          progressPercent = totalDurationForTier > 0
            ? ((deadline - nowMs) / totalDurationForTier) * 100
            : 0;
          break;
        } else {
          cumulativeStart = deadline;
        }
      }
    }

    if (!currentTier) {
      const defaultTier = discountTiers.find((t) => t?.condition?.default === true);
      if (defaultTier) {
        currentTier = { id: defaultTier.id, value: defaultTier.value, type: defaultTier.type };
        if (end) {
          nextBoundaryAt = end;
          timeLeftSeconds = Math.max(0, Math.round((end.getTime() - nowMs) / 1000));
          const finalPhaseTotal = end.getTime() - cumulativeStart;
          progressPercent = finalPhaseTotal > 0
            ? ((end.getTime() - nowMs) / finalPhaseTotal) * 100
            : 0;
        }
      }
    }
  }

  const canCollect = available > 0 && effectiveStatus !== "not_started" && (!!currentTier || effectiveStatus !== "limited_time");

  return {
    effectiveStatus,
    currentTier,
    timeLeftSeconds,
    progressPercent,
    nextBoundaryAt,
    campaignEndAt: end ?? null,
    canCollect,
  };
}
