import { describe, it, expect } from "bun:test";
import { computeLimitedTimeSnapshot, type Tier } from "../utils/limitedTime";

function d(s: string) {
  return new Date(s);
}

describe("computeLimitedTimeSnapshot", () => {
  it("returns not_started when serverNow < start", () => {
    const serverNow = d("2025-01-01T00:00:00.000Z");
    const start = d("2025-01-01T00:00:10.000Z");
    const res = computeLimitedTimeSnapshot({
      serverNow,
      firstViewedAt: serverNow,
      start,
      end: d("2025-01-01T00:01:00.000Z"),
      redemptionType: "limited_time",
      discountTiers: [
        { value: 50, type: "percentage", condition: { duration_before_claim_seconds: 10 } },
        { value: 30, type: "percentage", condition: { default: true } },
      ],
      available: 10,
    });

    expect(res.effectiveStatus).toBe("not_started");
    expect(res.canCollect).toBe(false);
    expect(res.timeLeftSeconds).toBe(10);
    expect(res.nextBoundaryAt?.toISOString()).toBe(start.toISOString());
  });

  it("is within first timed tier before deadline", () => {
    const firstView = d("2025-01-01T00:00:00.000Z");
    const serverNow = d("2025-01-01T00:00:05.000Z");
    const tiers: Tier[] = [
      { value: 50, type: "percentage", condition: { duration_before_claim_seconds: 10 } },
      { value: 30, type: "percentage", condition: { default: true } },
    ];

    const res = computeLimitedTimeSnapshot({
      serverNow,
      firstViewedAt: firstView,
      start: firstView,
      end: d("2025-01-01T00:01:00.000Z"),
      redemptionType: "limited_time",
      discountTiers: tiers,
      available: 5,
    });

    expect(res.effectiveStatus).toBe("limited_time");
    expect(res.currentTier?.value).toBe(50);
    expect(res.timeLeftSeconds).toBe(5);
    expect(res.canCollect).toBe(true);
  });

  it("moves to default tier after timed tiers elapse", () => {
    const firstView = d("2025-01-01T00:00:00.000Z");
    const serverNow = d("2025-01-01T00:00:15.000Z");
    const end = d("2025-01-01T00:01:00.000Z");
    const tiers: Tier[] = [
      { value: 50, type: "percentage", condition: { duration_before_claim_seconds: 10 } },
      { value: 30, type: "percentage", condition: { default: true } },
    ];

    const res = computeLimitedTimeSnapshot({
      serverNow,
      firstViewedAt: firstView,
      start: firstView,
      end,
      redemptionType: "limited_time",
      discountTiers: tiers,
      available: 3,
    });

    expect(res.currentTier?.value).toBe(30);
    expect(res.nextBoundaryAt?.toISOString()).toBe(end.toISOString());
    expect(res.timeLeftSeconds).toBe(45);
  });

  it("boundary at exact deadline switches to next tier (strict <)", () => {
    const firstView = d("2025-01-01T00:00:00.000Z");
    const serverNow = d("2025-01-01T00:00:10.000Z"); // exactly 10s after
    const tiers: Tier[] = [
      { value: 50, type: "percentage", condition: { duration_before_claim_seconds: 10 } },
      { value: 30, type: "percentage", condition: { default: true } },
    ];

    const res = computeLimitedTimeSnapshot({
      serverNow,
      firstViewedAt: firstView,
      start: firstView,
      end: d("2025-01-01T00:01:00.000Z"),
      redemptionType: "limited_time",
      discountTiers: tiers,
      available: 1,
    });

    // Should be on default tier already
    expect(res.currentTier?.value).toBe(30);
  });

  it("non-limited redemptionType uses provided type and ignores tiers", () => {
    const serverNow = d("2025-01-01T00:00:00.000Z");
    const res = computeLimitedTimeSnapshot({
      serverNow,
      firstViewedAt: serverNow,
      start: serverNow,
      end: null,
      redemptionType: "instant",
      discountTiers: [],
      available: 0,
    });

    expect(res.effectiveStatus).toBe("instant");
    expect(res.currentTier).toBeNull();
    expect(res.canCollect).toBe(false);
  });
});
