import {
  readItems,
  readItem,
  updateItem,
  createItem,
  readUsers,
} from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import { directusMiddleware } from "~/middleware/directus.middleware";

const factory = createFactory<Env>();

// Helper: start of day in Asia/Bangkok (UTC+7)
const getBangkokStartOfDay = (d: Date) => {
  const tzOffsetMs = 7 * 60 * 60 * 1000; // UTC+7
  const shifted = new Date(d.getTime() + tzOffsetMs);
  shifted.setUTCHours(0, 0, 0, 0);
  return new Date(shifted.getTime() - tzOffsetMs);
};

// Normalize Directus SDK responses to a plain array
function toArray<T = any>(res: any): T[] {
  if (Array.isArray(res)) return res as T[];
  if (res && Array.isArray(res.data)) return res.data as T[];
  return [] as T[];
}

// Extract id string from a value that may be an object relation or a primitive
function getId(val: any): string | undefined {
  if (!val) return undefined;
  if (typeof val === "object") {
    if (val.id) return String(val.id);
    return undefined;
  }
  return String(val);
}

// Resolve voucher IDs that belong to a given LIFF page (pages_liff)
async function getVoucherIdsForPage(
  directus: any,
  pageId?: string | string[]
): Promise<Set<string>> {
  const pid = Array.isArray(pageId) ? pageId[0] : pageId;
  const result = new Set<string>();
  if (!pid) return result;
  try {
    const page = await directus.request(
      (readItem as any)("pages_liff", pid, {
        fields: [
          { vouchers: [{ vouchers_id: ["id"] }] },
          { populars: [{ vouchers_id: ["id"] }] },
          { banner_vouchers: [{ vouchers_id: ["id"] }] },
        ],
        deep: {
          vouchers: { limit: -1 },
          populars: { limit: -1 },
          banner_vouchers: { limit: -1 },
        },
      } as any)
    );
    (page?.vouchers || []).forEach(
      (v: any) => v?.vouchers_id?.id && result.add(String(v.vouchers_id.id))
    );
    (page?.populars || []).forEach(
      (v: any) => v?.vouchers_id?.id && result.add(String(v.vouchers_id.id))
    );
    (page?.banner_vouchers || []).forEach(
      (v: any) => v?.vouchers_id?.id && result.add(String(v.vouchers_id.id))
    );
  } catch (e) {
    console.warn("getVoucherIdsForPage failed", e);
  }
  return result;
}

// GET /analytics/trends?days=30
export const getAnalyticsTrends = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { days, liff_page_id } = c.req.query();
    const rangeDays = Math.max(1, parseInt(String(days || 30), 10) || 30);
    const now = new Date();
    const start = new Date(now.getTime() - rangeDays * 24 * 60 * 60 * 1000);
    const startOfToday = getBangkokStartOfDay(now);
    const pageVoucherIds = await getVoucherIdsForPage(directus, liff_page_id);
    // Resolve page.liff_id for user-level filtering
    const pid = Array.isArray(liff_page_id) ? liff_page_id[0] : liff_page_id;
    let pageLiffId: string | undefined;
    try {
      console.log("leaderboards page liff:", { pid, pageLiffId });
      if (pid) {
        const pageMeta = await directus.request(
          (readItem as any)("pages_liff", pid, { fields: ["id", "liff_id"] } as any)
        );
        pageLiffId = pageMeta?.liff_id ? String(pageMeta.liff_id) : undefined;
      }
    } catch {}

    // Helper: format YYYY-MM-DD
    const toDateKey = (d: Date | string) => {
      const dt = typeof d === "string" ? new Date(d) : d;
      const y = dt.getFullYear();
      const m = String(dt.getMonth() + 1).padStart(2, "0");
      const da = String(dt.getDate()).padStart(2, "0");
      return `${y}-${m}-${da}`;
    };

    try {
      // Users new per day from profiles
      let usersDaily: Record<string, number> = {};
      // Users new per hour (today only)
      let usersHourly: number[] = new Array(24).fill(0);
      try {
        const profRes = await directus.request(
          readItems("profiles", {
            fields: ["id", "date_created"],
            filter: {
              date_created: { _gte: (rangeDays === 1 ? startOfToday.toISOString() : start.toISOString()) } as any,
              ...(pageLiffId ? { liff_id: { _eq: pageLiffId } } : {}),
            } as any,
            limit: -1,
          } as any)
        );
        const profs = toArray<any>(profRes);
        profs.forEach((p) => {
          if (!p?.date_created) return;
          const dt = new Date(p.date_created);
          const key = toDateKey(dt);
          usersDaily[key] = (usersDaily[key] || 0) + 1;
          if (rangeDays === 1) {
            const h = dt.getHours();
            if (h >= 0 && h < 24) usersHourly[h] = (usersHourly[h] || 0) + 1;
          }
        });
      } catch (e) {
        console.warn("profiles usersDaily query failed", e);
        usersDaily = {};
        usersHourly = new Array(24).fill(0);
      }

      // Claims per day from vouchers_codes.date_updated for statuses that represent collected-like states
      let claimsDaily: Record<string, number> = {};
      let claimsHourly: number[] = new Array(24).fill(0);
      try {
        const codeFilter: any = {
          date_updated: {
            _gte: (rangeDays === 1
              ? startOfToday.toISOString()
              : start.toISOString()),
          },
          code_status: { _in: ["collected", "used", "pending_confirmation"] },
          ...(pageVoucherIds.size > 0
            ? { voucher: { _in: Array.from(pageVoucherIds) } }
            : {}),
        };
        const codesRes = await directus.request(
          readItems("vouchers_codes", {
            fields: ["id", "voucher", "code_status", "date_updated"],
            filter: codeFilter,
            limit: -1,
          } as any)
        );
        const codes = toArray<any>(codesRes);
        codes.forEach((vc: any) => {
          const dt = new Date(vc.date_updated || now);
          const key = toDateKey(dt);
          claimsDaily[key] = (claimsDaily[key] || 0) + 1;
          if (rangeDays === 1) {
            const h = dt.getHours();
            if (h >= 0 && h < 24) claimsHourly[h] = (claimsHourly[h] || 0) + 1;
          }
        });
      } catch (e) {
        console.warn("trends codes-based claims query failed", e);
        claimsHourly = new Array(24).fill(0);
      }

      // Events per day (all user_events) optionally limited to current page by event_properties.page_id
      let eventsDaily: Record<string, number> = {};
      let eventsHourly: number[] = new Array(24).fill(0);
      try {
        const eventsRes = await directus.request(
          readItems("user_events", {
            fields: ["id", "date_created", "event_properties"],
            filter: { date_created: { _gte: (rangeDays === 1 ? startOfToday.toISOString() : start.toISOString()) } as any },
            limit: -1,
          } as any)
        );
        let events = toArray<any>(eventsRes);
        if (pageVoucherIds.size > 0) {
          // Need page id from query
          const pid = Array.isArray(liff_page_id)
            ? liff_page_id[0]
            : liff_page_id;
          if (pid) {
            events = events.filter((ev) => {
              let props = ev.event_properties;
              if (!props) return false;
              if (typeof props === "string") {
                try {
                  props = JSON.parse(props);
                } catch {
                  return false;
                }
              }
              return props?.page_id === pid;
            });
          }
        }
        events.forEach((ev) => {
          const dt = new Date(ev.date_created || now);
          const key = toDateKey(dt);
          eventsDaily[key] = (eventsDaily[key] || 0) + 1;
          if (rangeDays === 1) {
            const h = dt.getHours();
            if (h >= 0 && h < 24) eventsHourly[h] = (eventsHourly[h] || 0) + 1;
          }
        });
      } catch (e) {
        console.warn("trends events query failed", e);
        eventsHourly = new Array(24).fill(0);
      }

      // Build series sorted by date asc
      const buildSeries = (rec: Record<string, number>) => {
        return Object.keys(rec)
          .sort()
          .map((k) => ({ date: k, count: rec[k] }));
      };

      return c.json({
        range: {
          days: rangeDays,
          startDate: (rangeDays === 1 ? startOfToday : start).toISOString(),
          endDate: now.toISOString(),
        },
        usersNewDaily: buildSeries(usersDaily),
        claimsDaily: buildSeries(claimsDaily),
        eventsDaily: buildSeries(eventsDaily),
        ...(rangeDays === 1
          ? {
              usersNewHourly: usersHourly.map((count, h) => ({
                date: new Date(new Date(startOfToday).setHours(h, 0, 0, 0)).toISOString(),
                count,
              })),
              claimsHourly: claimsHourly.map((count, h) => ({
                date: new Date(new Date(startOfToday).setHours(h, 0, 0, 0)).toISOString(),
                count,
              })),
              eventsHourly: eventsHourly.map((count, h) => ({
                date: new Date(new Date(startOfToday).setHours(h, 0, 0, 0)).toISOString(),
                count,
              })),
            }
          : {}),
      });
    } catch (error) {
      console.error("Analytics trends error:", error);
      return c.json(
        {
          range: {
            days: rangeDays,
            startDate: start.toISOString(),
            endDate: now.toISOString(),
          },
          usersNewDaily: [],
          claimsDaily: [],
          eventsDaily: [],
        },
        500
      );
    }
  }
);

// GET /analytics/leaderboards?days=30&limit=5
export const getAnalyticsLeaderboards = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { days, limit, liff_page_id } = c.req.query();
    const rangeDays = Math.max(1, parseInt(String(days || 30), 10) || 30);
    const topN = Math.max(1, parseInt(String(limit || 5), 10) || 5);
    const now = new Date();
    const start =
      rangeDays === 1
        ? getBangkokStartOfDay(now)
        : new Date(now.getTime() - rangeDays * 24 * 60 * 60 * 1000);
    const pid = Array.isArray(liff_page_id) ? liff_page_id[0] : liff_page_id;
    const pageVoucherIds = await getVoucherIdsForPage(directus, pid);
    // Resolve page's liff_id to restrict users by tenant
    let pageLiffId: string | undefined;
    try {
      if (pid) {
        const pageMeta = await directus.request(
          (readItem as any)("pages_liff", pid, { fields: ["id", "liff_id" ] } as any)
        );
        pageLiffId = (pageMeta as any)?.liff_id ? String((pageMeta as any).liff_id) : undefined;
      }
    } catch {}

    try {
      // 1) Claims timeframe
      const claimsRes = await directus.request(
        readItems("vouchers_users", {
          fields: ["id", "code", "collected_date", "used_date", "collected_by"],
          filter: { collected_date: { _gte: start.toISOString() } as any },
          limit: -1,
        })
      );
      let claims = toArray<any>(claimsRes);
      // 2) Map code -> voucher using codes fetched by voucher ∈ pageVoucherIds (or from claims codes if no page filter)
      let codeToVoucher: Record<string, string> = {};
      let voucherIdsSet = new Set<string>();
      let allowedCodeIds: Set<string> | undefined;
      if (pid && pageVoucherIds.size > 0) {
        try {
          const codesRes = await directus.request(
            readItems("vouchers_codes", {
              fields: ["id", "voucher"],
              filter: { voucher: { _in: Array.from(pageVoucherIds) } },
              limit: -1,
            } as any)
          );
          const codes = toArray<any>(codesRes);
          allowedCodeIds = new Set<string>();
          if (codes.length > 0) {
            codes.forEach((vc: any) => {
              if (vc?.id && vc?.voucher) {
                const cid = String(vc.id);
                const vid = String(vc.voucher);
                codeToVoucher[cid] = vid;
                voucherIdsSet.add(vid);
                allowedCodeIds!.add(cid);
              }
            });
          } else {
            // Fallback: map from claims' code ids with chunking
            const codeIdsAll = Array.from(
              new Set(
                claims
                  .map((vu: any) => getId(vu.code))
                  .filter(
                    (x): x is string => typeof x === "string" && x.length > 0
                  )
              )
            );
            const chunkSize = 500;
            for (let i = 0; i < codeIdsAll.length; i += chunkSize) {
              const chunk = codeIdsAll.slice(i, i + chunkSize);
              try {
                const part = await directus.request(
                  readItems("vouchers_codes", {
                    fields: ["id", "voucher"],
                    filter: { id: { _in: chunk } },
                    limit: -1,
                  } as any)
                );
                const arr = toArray<any>(part);
                arr.forEach((vc) => {
                  if (
                    vc?.id &&
                    vc?.voucher &&
                    pageVoucherIds.has(String(vc.voucher))
                  ) {
                    const cid = String(vc.id);
                    const vid = String(vc.voucher);
                    codeToVoucher[cid] = vid;
                    voucherIdsSet.add(vid);
                    if (!allowedCodeIds) allowedCodeIds = new Set<string>();
                    allowedCodeIds.add(cid);
                  }
                });
              } catch {}
            }
          }
          // Restrict claims to allowed codes; if empty after filter, keep global claims
          const filtered = claims.filter((vu: any) => {
            const cid = getId(vu.code);
            return !!cid && !!allowedCodeIds?.has(cid);
          });
          claims = filtered.length > 0 ? filtered : claims;
        } catch (codesErr) {
          console.warn(
            "leaderboards: vouchers_codes filter failed, using global claims",
            codesErr
          );
          // continue without page restriction
        }
      } else {
        // No page filter: minimize extra fetch by mapping from claims' code ids (smaller set)
        const codeIds = Array.from(
          new Set(
            claims
              .map((vu: any) => getId(vu.code))
              .filter((x): x is string => typeof x === "string" && x.length > 0)
          )
        );
        if (codeIds.length > 0) {
          const codesRes = await directus.request(
            readItems("vouchers_codes", {
              fields: ["id", "voucher"],
              filter: { id: { _in: codeIds } },
              limit: -1,
            })
          );
          const codes = toArray<any>(codesRes);
          codes.forEach((vc: any) => {
            if (vc?.id && vc?.voucher) {
              codeToVoucher[String(vc.id)] = String(vc.voucher);
              voucherIdsSet.add(String(vc.voucher));
            }
          });
        }
      }
      const voucherIds = Array.from(voucherIdsSet);

      // Further restrict by collected_by.liff_id == page.liff_id (tenant guard)
      if (pid && pageLiffId) {
        try {
          const profileIds = Array.from(
            new Set(
              claims
                .map((vu: any) => getId(vu.collected_by))
                .filter((x): x is string => typeof x === "string" && x.length > 0)
            )
          );
          if (profileIds.length > 0) {
            // Diagnostics: log liff_id distribution for these profiles (claims)
            try {
              const chunkSize = 200;
              const raw: any[] = [];
              for (let i = 0; i < profileIds.length; i += chunkSize) {
                const ids = profileIds.slice(i, i + chunkSize);
                const profAllRes = await directus.request(
                  (readItems as any)("profiles", {
                    fields: ["id", "liff_id"],
                    filter: { id: { _in: ids } } as any,
                    limit: -1,
                  } as any)
                );
                raw.push(...toArray<any>(profAllRes));
              }
              const dist: Record<string, number> = {};
              raw.forEach((p: any) => {
                const lv = String((p as any)?.liff_id ?? "null");
                dist[lv] = (dist[lv] || 0) + 1;
              });
              const examples = raw.slice(0, 10).map((p: any) => ({ id: String(p.id), liff_id: String((p as any)?.liff_id ?? "null") }));
              const matchIds = raw
                .filter((p: any) => String((p as any)?.liff_id ?? "null") === String(pageLiffId))
                .map((p: any) => String(p.id));
              const nonMatch = raw
                .filter((p: any) => String((p as any)?.liff_id ?? "null") !== String(pageLiffId))
                .slice(0, 10)
                .map((p: any) => ({ id: String(p.id), liff_id: String((p as any)?.liff_id ?? "null") }));
              console.log(
                "leaderboards claims liff distribution:",
                {
                  pid,
                  pageLiffId,
                  profiles: profileIds.length,
                  distinct: Object.keys(dist).length,
                  sample: Object.entries(dist).slice(0, 5),
                  examples,
                  matchCount: matchIds.length,
                  matchesSample: matchIds.slice(0, 10),
                  nonMatchSample: nonMatch,
                }
              );
            } catch {}
            // Fetch allowed profiles (chunked)
            const allowed = new Set<string>();
            try {
              const chunkSize = 200;
              for (let i = 0; i < profileIds.length; i += chunkSize) {
                const ids = profileIds.slice(i, i + chunkSize);
                const profRes = await directus.request(
                  (readItems as any)("profiles", {
                    fields: ["id", "liff_id"],
                    filter: { id: { _in: ids }, liff_id: { _eq: pageLiffId } } as any,
                    limit: -1,
                  } as any)
                );
                toArray<any>(profRes).forEach((p: any) => allowed.add(String(p.id)));
              }
            } catch {}
            const filtered = claims.filter((vu: any) => {
              const uid = getId(vu.collected_by);
              return !!uid && allowed.has(uid);
            });
            claims = filtered;
          }
        } catch (e) {
          console.warn("leaderboards: profiles filter by liff_id failed", e);
        }
      }

      // Prepare containers for voucher and brand metadata
      let voucherById: Record<string, any> = {};
      let brandMeta: Record<
        string,
        { id: string; name: string; logo?: string }
      > = {};

      // 5) Top vouchers by clicks from user_events (event_type = 'voucher_click')
      const clickEventsRes = await directus.request(
        readItems("user_events", {
          fields: ["id", "event_type", "event_properties", "date_created"],
          filter: {
            date_created: { _gte: start.toISOString() } as any,
            event_type: { _eq: "voucher_click" },
          },
          limit: -1,
        })
      );
      const voucherClicks: Record<string, number> = {};
      const clickEvents = toArray<any>(clickEventsRes);
      clickEvents.forEach((ev: any) => {
        let props = ev.event_properties;
        if (typeof props === "string") {
          try {
            props = JSON.parse(props);
          } catch {
            props = null;
          }
        }
        const vid = props?.voucher_id ? String(props.voucher_id) : undefined;
        const pageOk = !pid || props?.page_id === pid;
        const voucherOk =
          !pid || pageVoucherIds.size === 0 || (vid && pageVoucherIds.has(vid));
        if (!pageOk || !voucherOk) return;
        if (!vid) return;
        voucherClicks[vid] = (voucherClicks[vid] || 0) + 1;
      });
      // Ensure voucher names for click vouchers
      const clickVoucherIds = Object.keys(voucherClicks);

      // Merge voucher ids from claims and clicks for metadata fetching
      const metaVoucherIds = Array.from(
        new Set([...(voucherIds || []), ...clickVoucherIds])
      ).filter(
        (id) => !pid || pageVoucherIds.size === 0 || pageVoucherIds.has(id)
      );
      if (metaVoucherIds.length > 0) {
        try {
          const vouchersRes = await directus.request(
            readItems("vouchers", {
              fields: [
                "id",
                "name",
                "cover",
                { voucher_brand_id: ["id", "name", "logo"] },
              ],
              filter: { id: { _in: metaVoucherIds } },
              limit: -1,
            } as any)
          );
          const vouchers = toArray(vouchersRes);
          vouchers.forEach((v) => {
            const vid = String((v as any).id);
            voucherById[vid] = v;
            const b = (v as any)?.voucher_brand_id;
            if (b?.id) {
              const bid = String(b.id);
              if (!brandMeta[bid])
                brandMeta[bid] = {
                  id: bid,
                  name: b.name || "Unknown",
                  logo: b.logo,
                };
            }
          });
        } catch (e) {
          console.warn("fetch vouchers metadata failed", e);
        }
      }

      // 4) Build brand leaderboard (prefer claims, fallback to clicks)
      const brandCountsClaims: Record<
        string,
        { id: string; name: string; claims: number }
      > = {};
      claims.forEach((vu: any) => {
        const codeId = getId(vu.code);
        const vid = codeId ? codeToVoucher[String(codeId)] : undefined;
        if (!vid) return;
        const v = voucherById[vid];
        const b = v?.voucher_brand_id;
        const bid = b?.id ? String(b.id) : "unknown";
        const bname = b?.name || "Unknown";
        if (!brandCountsClaims[bid])
          brandCountsClaims[bid] = { id: bid, name: bname, claims: 0 };
        brandCountsClaims[bid].claims += 1;
      });

      const brandCountsClicks: Record<
        string,
        { id: string; name: string; claims: number }
      > = {};
      Object.entries(voucherClicks).forEach(([vid, clicks]) => {
        const v = voucherById[vid];
        const b = v?.voucher_brand_id;
        const bid = b?.id ? String(b.id) : "unknown";
        const bname = b?.name || "Unknown";
        if (!brandCountsClicks[bid])
          brandCountsClicks[bid] = { id: bid, name: bname, claims: 0 };
        brandCountsClicks[bid].claims += Number(clicks);
      });

      const brandCounts =
        Object.keys(brandCountsClaims).length > 0
          ? brandCountsClaims
          : brandCountsClicks;
      const topBrandsByClaims = Object.values(brandCounts)
        .sort((a, b) => b.claims - a.claims)
        .slice(0, topN)
        .map((b) => ({ ...b, logo: brandMeta[b.id]?.logo }));

      // Ensure voucher names (clicks) if any
      if (clickVoucherIds.length > 0) {
        try {
          const vouchersRes = await directus.request(
            readItems("vouchers", {
              fields: ["id", "name"],
              filter: { id: { _in: clickVoucherIds } },
              limit: -1,
            })
          );
          const vouchers = toArray(vouchersRes);
          vouchers.forEach((v) => {
            voucherById[String((v as any).id)] = {
              ...(voucherById[String((v as any).id)] || {}),
              ...v,
            };
          });
        } catch {}
      }
      const topVouchersByClicks = Object.entries(voucherClicks)
        .map(([vid, clicks]) => ({
          voucherId: vid,
          name: voucherById[vid]?.name || vid,
          clicks,
          cover: voucherById[vid]?.cover,
        }))
        .sort((a, b) => (b.clicks as number) - (a.clicks as number))
        .slice(0, topN);

      // 6) Category share (prefer claims, fallback to clicks) via m2m vouchers_voucher_categories
      const categoryCounts: Record<
        string,
        { id: string; name: string; claims: number }
      > = {};
      const voucherIdsForCategories = metaVoucherIds;
      if (voucherIdsForCategories.length > 0) {
        try {
          const vvcRes = await directus.request(
            readItems("vouchers_voucher_categories", {
              fields: [
                { voucher_categories_id: ["id", "name"] },
                { vouchers_id: ["id"] },
              ],
              filter: { vouchers_id: { _in: voucherIdsForCategories } },
              limit: -1,
            } as any)
          );
          const vvc = toArray(vvcRes);
          const voucherToCats: Record<string, { id: string; name: string }[]> =
            {};
          vvc.forEach((row: any) => {
            const vid = String(row?.vouchers_id?.id || row?.vouchers_id);
            const cat = row?.voucher_categories_id;
            if (!vid || !cat?.id) return;
            if (!voucherToCats[vid]) voucherToCats[vid] = [];
            voucherToCats[vid].push({
              id: String(cat.id),
              name: cat.name || "Unknown",
            });
          });
          const addCount = (vid: string, count: number) => {
            const cats = voucherToCats[vid] || [];
            if (cats.length === 0) {
              if (!categoryCounts["other"])
                categoryCounts["other"] = {
                  id: "other",
                  name: "Other",
                  claims: 0,
                };
              categoryCounts["other"].claims += count;
            } else {
              cats.forEach((ca) => {
                if (!categoryCounts[ca.id])
                  categoryCounts[ca.id] = {
                    id: ca.id,
                    name: ca.name,
                    claims: 0,
                  };
                categoryCounts[ca.id].claims += count;
              });
            }
          };

          // Prefer claims (already restricted if page filter present)
          claims.forEach((vu: any) => {
            const codeId = getId(vu.code);
            const vid = codeId ? codeToVoucher[String(codeId)] : undefined;
            if (!vid) return;
            addCount(vid, 1);
          });
          // Fallback/additive from clicks if no category bucket was populated by claims
          if (Object.keys(categoryCounts).length === 0) {
            Object.entries(voucherClicks).forEach(([vid, clicks]) =>
              addCount(vid, Number(clicks))
            );
          }
        } catch (e) {
          console.warn("fetch categories mapping failed", e);
          // Strong fallback when can't read mapping (e.g., permissions):
          // Aggregate everything into 'Other' using claims count; if no claims, use clicks sum.
          let total = 0;
          if (claims.length > 0) total = claims.length;
          else
            total = Object.values(voucherClicks).reduce(
              (s, n) => s + Number(n || 0),
              0
            );
          if (total > 0) {
            categoryCounts["other"] = {
              id: "other",
              name: "Other",
              claims: total,
            };
          }
        }
      }
      const categoryShareByClaims = Object.values(categoryCounts).sort(
        (a, b) => b.claims - a.claims
      );

      // 7) Top users by collected (within timeframe) and used (within timeframe, independent of collected timeframe)
      const countsCollected: Record<string, number> = {};
      const countsUsed: Record<string, number> = {};
      const claimsForUsers = claims; // already restricted by page if pid present
      claimsForUsers.forEach((vu: any) => {
        const uid = getId(vu.collected_by);
        if (!uid) return;
        countsCollected[uid] = (countsCollected[uid] || 0) + 1;
      });

      // Fetch used entries in timeframe
      try {
        const usedRes = await directus.request(
          readItems("vouchers_users", {
            fields: ["id", "used_date", "collected_by", "code"],
            filter: { used_date: { _gte: start.toISOString() } as any },
            limit: -1,
          } as any)
        );
        let usedEntries = toArray<any>(usedRes);
        if (pid && pageVoucherIds.size > 0) {
          if (allowedCodeIds && allowedCodeIds.size > 0) {
            usedEntries = usedEntries.filter((vu: any) => {
              const cid = getId(vu.code);
              return !!cid && allowedCodeIds!.has(cid);
            });
          } else {
            // Fallback: map used code ids to vouchers and filter by page vouchers
            const usedCodeIds = Array.from(
              new Set(
                usedEntries
                  .map((vu: any) => getId(vu.code))
                  .filter((x): x is string => typeof x === "string" && x.length > 0)
              )
            );
            const chunkSize = 500;
            const allowed = new Set<string>();
            for (let i = 0; i < usedCodeIds.length; i += chunkSize) {
              const chunk = usedCodeIds.slice(i, i + chunkSize);
              try {
                const part = await directus.request(
                  readItems("vouchers_codes", {
                    fields: ["id", "voucher"],
                    filter: { id: { _in: chunk } },
                    limit: -1,
                  } as any)
                );
                const arr = toArray<any>(part);
                arr.forEach((vc: any) => {
                  if (vc?.id && vc?.voucher && pageVoucherIds.has(String(vc.voucher))) {
                    allowed.add(String(vc.id));
                  }
                });
              } catch {}
            }
            usedEntries = usedEntries.filter((vu: any) => {
              const cid = getId(vu.code);
              return !!cid && allowed.has(cid);
            });
          }
        }
        // Restrict usedEntries by collected_by.liff_id == page.liff_id
        if (pid && pageLiffId) {
          try {
            const profileIds = Array.from(
              new Set(
                usedEntries
                  .map((vu: any) => getId(vu.collected_by))
                  .filter((x): x is string => typeof x === "string" && x.length > 0)
              )
            );
            if (profileIds.length > 0) {
              // Diagnostics: log liff_id distribution for these profiles (used)
              try {
                const chunkSize = 200;
                const raw: any[] = [];
                for (let i = 0; i < profileIds.length; i += chunkSize) {
                  const ids = profileIds.slice(i, i + chunkSize);
                  const profAllRes = await directus.request(
                    (readItems as any)("profiles", {
                      fields: ["id", "liff_id"],
                      filter: { id: { _in: ids } } as any,
                      limit: -1,
                    } as any)
                  );
                  raw.push(...toArray<any>(profAllRes));
                }
                const dist: Record<string, number> = {};
                raw.forEach((p: any) => {
                  const lv = String((p as any)?.liff_id ?? "null");
                  dist[lv] = (dist[lv] || 0) + 1;
                });
                const examples = raw.slice(0, 10).map((p: any) => ({ id: String(p.id), liff_id: String((p as any)?.liff_id ?? "null") }));
                console.log(
                  "leaderboards used liff distribution:",
                  { pid, pageLiffId, profiles: profileIds.length, distinct: Object.keys(dist).length, sample: Object.entries(dist).slice(0, 5), examples }
                );
              } catch {}
              // Fetch allowed profiles (chunked)
              const allowed = new Set<string>();
              try {
                const chunkSize = 200;
                for (let i = 0; i < profileIds.length; i += chunkSize) {
                  const ids = profileIds.slice(i, i + chunkSize);
                  const profRes = await directus.request(
                    (readItems as any)("profiles", {
                      fields: ["id", "liff_id"],
                      filter: { id: { _in: ids }, liff_id: { _eq: pageLiffId } } as any,
                      limit: -1,
                    } as any)
                  );
                  toArray<any>(profRes).forEach((p: any) => allowed.add(String(p.id)));
                }
              } catch {}
              const filtered = usedEntries.filter((vu: any) => {
                const uid = getId(vu.collected_by);
                return !!uid && allowed.has(uid);
              });
              usedEntries = filtered;
            }
          } catch (e) {
            console.warn("leaderboards: profiles filter by liff_id (used) failed", e);
          }
        }
        usedEntries.forEach((vu: any) => {
          const uid = getId(vu.collected_by);
          if (!uid) return;
          countsUsed[uid] = (countsUsed[uid] || 0) + 1;
        });
      } catch (usedErr) {
        console.warn("leaderboards: used entries query failed", usedErr);
      }
      const topUserIdsCollected = Object.entries(countsCollected)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN)
        .map(([id]) => id);
      const topUserIdsUsed = Object.entries(countsUsed)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN)
        .map(([id]) => id);

      const uniqueUserIds = Array.from(
        new Set([...topUserIdsCollected, ...topUserIdsUsed])
      );
      let userMeta: Record<
        string,
        { id: string; name: string; avatar?: string }
      > = {};
      if (uniqueUserIds.length > 0) {
        try {
          const profilesRes = await directus.request(
            readItems("profiles", {
              fields: ["id", "display_name", "picture_url"],
              filter: { id: { _in: uniqueUserIds } } as any,
              limit: -1,
            } as any)
          );
          const profiles = toArray<any>(profilesRes);
          profiles.forEach((p) => {
            const name = p.display_name || String(p.id);
            userMeta[String(p.id)] = {
              id: String(p.id),
              name,
              avatar: p.picture_url,
            };
          });
        } catch (e) {
          console.warn("fetch profiles meta failed", e);
        }
      }

      const topUsersByCollected = topUserIdsCollected.map((id) => ({
        id,
        name: userMeta[id]?.name || id,
        avatar: userMeta[id]?.avatar,
        collected: countsCollected[id] || 0,
      }));
      const topUsersByUsed = topUserIdsUsed.map((id) => ({
        id,
        name: userMeta[id]?.name || id,
        avatar: userMeta[id]?.avatar,
        used: countsUsed[id] || 0,
      }));

      return c.json({
        period: {
          days: rangeDays,
          startDate: start.toISOString(),
          endDate: now.toISOString(),
        },
        topBrandsByClaims,
        topVouchersByClicks,
        categoryShareByClaims,
        topUsersByCollected,
        topUsersByUsed,
      });
    } catch (error) {
      console.error("Analytics leaderboards error:", error);
      return c.json(
        {
          period: {
            days: rangeDays,
            startDate: start.toISOString(),
            endDate: now.toISOString(),
          },
          topBrandsByClaims: [],
          topVouchersByClicks: [],
          categoryShareByClaims: [],
        },
        500
      );
    }
  }
);

// GET /analytics/overview
export const getAnalyticsOverview = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { liff_page_id, days } = c.req.query();
    const pid = Array.isArray(liff_page_id) ? liff_page_id[0] : liff_page_id;
    const rangeDays = Math.max(1, parseInt(String(days || 30), 10) || 30);
    const pageVoucherIds = await getVoucherIdsForPage(directus, pid);

    try {
      const now = new Date();
      const startOfRange =
        rangeDays === 1
          ? getBangkokStartOfDay(now)
          : new Date(now.getTime() - rangeDays * 24 * 60 * 60 * 1000);
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);

      // Resolve page's liff_id for tenant-guard (if pid provided)
      let pageLiffId: string | undefined;
      try {
        if (pid) {
          const pageMeta = await directus.request(
            (readItem as any)("pages_liff", pid, { fields: ["id", "liff_id"] } as any)
          );
          pageLiffId = pageMeta?.liff_id ? String(pageMeta.liff_id) : undefined;
        }
      } catch {}

      // 1) Users total from profiles
      let totalUsers = 0;
      try {
        const profRes = await directus.request(
          readItems("profiles", { fields: ["id"], limit: -1 } as any)
        );
        totalUsers = toArray(profRes).length;
      } catch (e) {
        console.warn("profiles count failed, fallback to 0");
        totalUsers = 0;
      }

      // 2) Active Providers = pages_liff where status = 'active'
      let activeProviders = 0;
      try {
        const providersRes = await directus.request(
          readItems("pages_liff", {
            fields: ["id", "status"],
            filter: { status: { _eq: "active" } },
            limit: -1,
          })
        );
        activeProviders = toArray(providersRes).length;
      } catch (e) {
        console.warn("pages_liff query failed", e);
        activeProviders = 0;
      }

      // 3) Active Campaigns = campaigns where status = 'active'
      let activeCampaigns = 0;
      try {
        const campaignsRes = await directus.request(
          readItems("campaigns", {
            fields: ["id", "status"],
            filter: { status: { _eq: "active" } },
            limit: -1,
          })
        );
        activeCampaigns = toArray(campaignsRes).length;
      } catch (e) {
        console.warn("campaigns query failed", e);
        activeCampaigns = 0;
      }

      // 4) Claims in range from vouchers_codes (include pending_confirmation) and unique collectors in range
      // Claims: use vouchers_codes.date_updated and code_status ∈ [collected, used, pending_confirmation]
      let claimsInRange = 0;
      let uniqueCollectorsInRange = 0;
      try {
        // Build allowed code IDs for page filter (if any)
        let allowedCodeIds: Set<string> | undefined;
        if (pid && pageVoucherIds.size > 0) {
          try {
            const codesAllowedRes = await directus.request(
              readItems("vouchers_codes", {
                fields: ["id"],
                filter: { voucher: { _in: Array.from(pageVoucherIds) } },
                limit: -1,
              } as any)
            );
            allowedCodeIds = new Set<string>(
              toArray<any>(codesAllowedRes).map((vc: any) => String(vc.id))
            );
          } catch (e) {
            console.warn("overview: allowed codes fetch failed", e);
            allowedCodeIds = undefined;
          }
        }

        // Count claims from vouchers_codes
        const codeFilter: any = {
          date_updated: { _gte: startOfRange.toISOString() } as any,
          code_status: { _in: ["collected", "used", "pending_confirmation"] },
          ...(pid && pageVoucherIds.size > 0
            ? { voucher: { _in: Array.from(pageVoucherIds) } }
            : {}),
        };
        const codesRangeRes = await directus.request(
          readItems("vouchers_codes", {
            fields: ["id"],
            filter: codeFilter,
            limit: -1,
          } as any)
        );
        claimsInRange = toArray<any>(codesRangeRes).length;

        // Unique collectors in range: use vouchers_users by collected_date >= startOfRange; filter by allowed code ids if present
        try {
          const vuRes = await directus.request(
            readItems("vouchers_users", {
              fields: ["id", "collected_by", "code", "collected_date"],
              filter: { collected_date: { _gte: startOfRange.toISOString() } as any },
              limit: -1,
            } as any)
          );
          let vus = toArray<any>(vuRes);
          if (allowedCodeIds && allowedCodeIds.size > 0) {
            vus = vus.filter((vu: any) => {
              const cid = getId(vu.code);
              return !!cid && allowedCodeIds!.has(cid);
            });
          }
          // Further restrict by profiles.liff_id == page.liff_id
          if (pid && pageLiffId) {
            const profileIds = Array.from(
              new Set(
                vus
                  .map((vu: any) => getId(vu.collected_by))
                  .filter((x): x is string => typeof x === "string" && x.length > 0)
              )
            );
            if (profileIds.length > 0) {
              try {
                const profRes = await directus.request(
                  (readItems as any)("profiles", {
                    fields: ["id", "liff_id"],
                    filter: { id: { _in: profileIds }, liff_id: { _eq: pageLiffId } } as any,
                    limit: -1,
                  } as any)
                );
                const allowed = new Set<string>(toArray<any>(profRes).map((p: any) => String(p.id)));
                vus = vus.filter((vu: any) => {
                  const uid = getId(vu.collected_by);
                  return !!uid && allowed.has(uid);
                });
              } catch {}
            } else {
              vus = [];
            }
          }
          const uniq = new Set<string>();
          vus.forEach((vu: any) => {
            const uid = getId(vu.collected_by);
            if (uid) uniq.add(uid);
          });
          uniqueCollectorsInRange = uniq.size;
        } catch (e) {
          console.warn("overview: vouchers_users unique collectors failed", e);
          uniqueCollectorsInRange = 0;
        }
      } catch (e) {
        console.warn("overview: claims/collectors range query failed", e);
        claimsInRange = 0;
        uniqueCollectorsInRange = 0;
      }

      // 5) Events in range = user_events within range (respect page if present)
      let eventsInRange = 0;
      try {
        const eventsRes = await directus.request(
          readItems("user_events", {
            fields: ["id", "date_created", "event_properties"],
            filter: { date_created: { _gte: startOfRange.toISOString() } as any },
            limit: -1
          } as any)
        );
        let events = toArray<any>(eventsRes);
        if (pid) {
          events = events.filter((ev) => {
            let props = ev.event_properties;
            if (!props) return false;
            if (typeof props === "string") {
              try {
                props = JSON.parse(props);
              } catch {
                return false;
              }
            }
            return props?.page_id === pid;
          });
        }
        eventsInRange = events.length;
      } catch (e) {
        console.warn("user_events range query failed", e);
        eventsInRange = 0;
      }

      return c.json({
        kpi: {
          totalUsers,
          activeProviders,
          activeCampaigns,
          claimsToday: claimsInRange, // backward-compat
          claimsInRange,
          uniqueCollectorsInRange,
          eventsInRange,
        },
        period: { days: rangeDays, startDate: startOfRange.toISOString(), endDate: now.toISOString() },
        generatedAt: now.toISOString(),
      });
    } catch (error) {
      console.error("Analytics overview error:", error);
      return c.json(
        {
          error: "Failed to fetch analytics overview",
          kpi: {
            totalUsers: 0,
            activeProviders: 0,
            activeCampaigns: 0,
            claimsToday: 0,
            eventsLastHour: 0,
          },
        },
        500
      );
    }
  }
);
