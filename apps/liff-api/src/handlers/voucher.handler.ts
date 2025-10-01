import {
  createItem,
  createItems,
  readItem,
  readItems,
  updateItem,
} from "@directus/sdk";
import { addSeconds } from "date-fns";
import { format } from "date-fns-tz";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import * as _ from "lodash";
import { customAlphabet } from "nanoid";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";
import { computeLimitedTimeSnapshot } from "../utils/limitedTime";

const factory = createFactory<Env>();

// getVouchers
export const getVouchers = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { status, q } = c.req.query();

    const filters: any = {};
    if (status) filters.status = { _eq: status };
    if (q) filters.name = { _icontains: q };

    const vouchers = await directus.request(
      readItems("vouchers", {
        fields: ["*", { voucher_brand_id: ["*"] }],
        filter: filters,
        limit: -1,
      })
    );
    return c.json(vouchers);
  }
);

// v2 - Combined page payload: serverComputed view + code stats + myCoupon
export const getVoucherPageV2 = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { id: voucher_id } = c.req.param() as { id: string };
      const directus = c.get("directAdmin");

      const serverNow = new Date();

      // Load voucher with full fields needed for UI (brand, categories, metadata, etc.)
      const voucherList: any[] = await directus.request(
        readItems("vouchers", {
          filter: { id: { _eq: voucher_id } },
          fields: [
            "*",
            { voucher_brand_id: ["*"] },
            { categories: [{ voucher_categories_id: ["*"] }] },
          ],
          limit: 1,
        } as any)
      );
      let voucher: any = voucherList[0];
      if (!voucher) return c.json({ error: "Voucher not found" }, 404);
      if (Array.isArray(voucher.categories)) {
        voucher.categories = voucher.categories
          .map((x: any) => x?.voucher_categories_id ?? x)
          .filter(Boolean);
      }

      const start = voucher.start_date ? new Date(voucher.start_date) : null;
      const end = voucher.end_date ? new Date(voucher.end_date) : null;

      // Count voucher code stats
      const codeItems = await directus.request(
        readItems("vouchers_codes", {
          fields: ["code_status"],
          filter: { voucher: { _eq: voucher_id } },
          limit: -1,
        })
      );
      const allStatuses = [
        "available",
        "collected",
        "pending_confirmation",
        "expired",
        "used",
        "reserved",
      ];
      const grouped = _.groupBy(codeItems as any[], "code_status");
      const statsBase = _.mapValues(_.keyBy(allStatuses), () => 0);
      _.forEach(grouped, (codes, status) => {
        (statsBase as any)[status] = codes.length;
      });
      const total = (codeItems as any[]).length;
      const stats = { ...statsBase, total } as any;

      const available = stats.available ?? 0;

      // Not started view (serverComputed)
      if (start && serverNow < start) {
        return c.json({
          serverComputed: {
            serverNow: serverNow.toISOString(),
            firstViewedAt: null,
            effectiveStatus: "not_started",
            canCollect: false,
            currentTier: null,
            timeLeftSeconds: Math.max(
              0,
              Math.round((start.getTime() - serverNow.getTime()) / 1000)
            ),
            progressPercent: 0,
            nextBoundaryAt: start.toISOString(),
            campaignEndAt: end ? end.toISOString() : null,
            available,
          },
          stats,
          myCoupon: null,
          voucher,
        });
      }

      // Ensure voucher_view for this user exists
      let voucherViews: any[] = await directus.request(
        readItems("voucher_views", {
          filter: {
            voucher_id: { _eq: voucher_id },
            user_id: { _eq: userId },
          },
          limit: 1,
        })
      );
      let voucherView = voucherViews[0];
      if (!voucherView) {
        voucherView = await directus.request(
          createItem("voucher_views", {
            voucher_id,
            user_id: userId,
            first_viewed_at: serverNow.toISOString(),
          })
        );
      }

      const firstViewedAt = new Date(
        voucherView?.first_viewed_at || serverNow.toISOString()
      );

      const snapshot = computeLimitedTimeSnapshot({
        serverNow,
        firstViewedAt,
        start,
        end,
        redemptionType: voucher?.metadata?.redemptionType,
        discountTiers: voucher?.metadata?.discount_tiers || [],
        available,
      });

      // myCoupon for this voucher (if any)
      const myCoupons = await directus.request(
        readItems("vouchers_users", {
          filter: { collected_by: { _eq: userId } },
          fields: [
            "id",
            "collected_by",
            "collected_date",
            "expired_date",
            "used_date",
            "redemption_expires_at",
            "discount_value",
            "discount_type",
            "channel",
            {
              code: [
                "id",
                "code",
                "code_status",
                {
                  voucher: [
                    "id",
                    "name",
                    "banner",
                    "cover",
                    "metadata",
                    "start_date",
                    "end_date",
                    "usage_end_date",
                    { voucher_brand_id: ["*"] },
                  ],
                },
              ],
            },
          ],
          limit: -1,
        })
      );
      const myCoupon =
        (myCoupons as any[]).find(
          (vu) => vu.code?.voucher?.id === voucher_id
        ) || null;

      // Evaluate duplicate and voucher group quota to drive canCollect
      const alreadyCollected = Boolean(myCoupon);
      let blockedByGroup = false;
      // Find active groups this voucher belongs to
      const groupLinks = await directus.request(
        readItems("voucher_groups_vouchers", {
          filter: {
            vouchers_id: { _eq: voucher_id },
            voucher_groups_id: { status: { _eq: "active" } },
          },
          fields: [
            { voucher_groups_id: ["id", "name", "claim_limit", "status"] },
          ],
          limit: -1,
        })
      );
      if ((groupLinks as any[]).length) {
        for (const link of groupLinks as any[]) {
          const group = (link as any).voucher_groups_id;
          if (!group || group.status !== "active") continue;
          // All voucher ids under this group
          const groupVouchers = await directus.request(
            readItems("voucher_groups_vouchers", {
              filter: { voucher_groups_id: { _eq: group.id } },
              fields: ["vouchers_id"],
              limit: -1,
            })
          );
          const voucherIds = (groupVouchers as any[])
            .map((x: any) => x.vouchers_id)
            .filter(Boolean);
          if (!voucherIds.length) continue;
          // Count user's collected vouchers in this group
          const claims = await directus.request(
            readItems("vouchers_users", {
              filter: {
                collected_by: { _eq: userId },
                code: { voucher: { _in: voucherIds } },
              },
              fields: ["id"],
              limit: -1,
            })
          );
          // Enforce only when claim_limit is positive (null/undefined/<=0 means unlimited)
          if (
            typeof group.claim_limit === "number" &&
            group.claim_limit > 0 &&
            (claims as any[]).length >= group.claim_limit
          ) {
            blockedByGroup = true;
            break;
          }
        }
      }
      const canCollectAllowed =
        snapshot.canCollect && !alreadyCollected && !blockedByGroup;
      const deniedReason = canCollectAllowed
        ? null
        : alreadyCollected
          ? "already_collected"
          : blockedByGroup
            ? "group_quota_full"
            : null;

      return c.json({
        serverComputed: {
          serverNow: serverNow.toISOString(),
          firstViewedAt: firstViewedAt.toISOString(),
          effectiveStatus: snapshot.effectiveStatus,
          canCollect: canCollectAllowed,
          deniedReason,
          currentTier: snapshot.currentTier,
          timeLeftSeconds: snapshot.timeLeftSeconds,
          progressPercent: snapshot.progressPercent,
          nextBoundaryAt: snapshot.nextBoundaryAt
            ? snapshot.nextBoundaryAt.toISOString()
            : null,
          campaignEndAt: snapshot.campaignEndAt
            ? snapshot.campaignEndAt.toISOString()
            : null,
          available,
        },
        stats,
        myCoupon,
        voucher,
      });
    } catch (error: any) {
      console.error(error);
      return c.json(
        {
          error: "Failed to build voucher page",
          detail: error?.message ?? error,
        },
        500
      );
    }
  }
);

// v2 - collect with server verification
export const collectVoucherV2 = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { id: voucher_id } = c.req.param() as { id: string };
      const directus = c.get("directAdmin");

      const {
        utm_source,
        utm_medium,
        utm_campaign,
        channel,
        discount_value,
        discount_type,
      } = await c.req.json();

      const serverNow = new Date();

      // Load voucher with fields needed for validation
      const voucher: any = await directus.request(
        readItem("vouchers", voucher_id, {
          fields: [
            "id",
            "start_date",
            "end_date",
            "validity_in_seconds",
            "usage_end_date",
            "metadata",
          ],
        })
      );
      if (!voucher) return c.json({ error: "Voucher not found" }, 404);

      const start = voucher.start_date ? new Date(voucher.start_date) : null;
      const end = voucher.end_date ? new Date(voucher.end_date) : null;

      // Not started yet
      if (start && serverNow < start) {
        return c.json({ error: "not started" }, 400);
      }

      // Ensure voucher_view exists and get first_viewed_at as anchor
      let voucherViews: any[] = await directus.request(
        readItems("voucher_views", {
          filter: {
            voucher_id: { _eq: voucher_id },
            user_id: { _eq: userId },
          },
          limit: 1,
        })
      );
      let voucherView = voucherViews[0];
      if (!voucherView) {
        voucherView = await directus.request(
          createItem("voucher_views", {
            voucher_id,
            user_id: userId,
            first_viewed_at: serverNow.toISOString(),
          })
        );
      }

      const firstViewedAt = new Date(
        voucherView?.first_viewed_at || serverNow.toISOString()
      );

      // Calculate current tier and status via utility
      const snapshot = computeLimitedTimeSnapshot({
        serverNow,
        firstViewedAt,
        start,
        end,
        redemptionType: voucher?.metadata?.redemptionType,
        discountTiers: voucher?.metadata?.discount_tiers || [],
        available: 1, // not used for collect decision here
      });

      // Determine allowed discount for this collect
      let finalDiscountValue = discount_value ?? null;
      let finalDiscountType = discount_type ?? null;
      const isLimited =
        Array.isArray(voucher?.metadata?.discount_tiers) &&
        (voucher?.metadata?.discount_tiers?.length ?? 0) > 0;
      if (voucher?.metadata?.redemptionType === "limited_time" && isLimited) {
        // enforce current tier
        if (!snapshot.currentTier) {
          return c.json({ error: "no active tier" }, 400);
        }
        finalDiscountValue = snapshot.currentTier.value;
        finalDiscountType = snapshot.currentTier.type;
      }

      // Stage 1: Basic rule — prevent duplicate collection of the same voucher
      const duplicate = await directus.request(
        readItems("vouchers_users", {
          filter: {
            collected_by: { _eq: userId },
            code: { voucher: { _eq: voucher_id } },
          },
          fields: ["id"],
          limit: 1,
        })
      );
      if ((duplicate as any[]).length) {
        return c.json(
          { error: "already_collected", message: "คุณเคยรับคูปองนี้ไปแล้ว" },
          409
        );
      }

      // Stage 2: Group rule — enforce claim_limit per group if voucher is in any active group
      let groupQuotaBlocked = false;
      const groupLinks2 = await directus.request(
        readItems("voucher_groups_vouchers", {
          filter: {
            vouchers_id: { _eq: voucher_id },
            voucher_groups_id: { status: { _eq: "active" } },
          },
          fields: [
            { voucher_groups_id: ["id", "name", "claim_limit", "status"] },
          ],
          limit: -1,
        })
      );
      if ((groupLinks2 as any[]).length) {
        for (const link of groupLinks2 as any[]) {
          const group = (link as any).voucher_groups_id;
          if (!group || group.status !== "active") continue;

          const groupVouchers2 = await directus.request(
            readItems("voucher_groups_vouchers", {
              filter: { voucher_groups_id: { _eq: group.id } },
              fields: ["vouchers_id"],
              limit: -1,
            })
          );
          const voucherIds2 = (groupVouchers2 as any[])
            .map((x: any) => x.vouchers_id)
            .filter(Boolean);
          if (!voucherIds2.length) continue;

          const claims2 = await directus.request(
            readItems("vouchers_users", {
              filter: {
                collected_by: { _eq: userId },
                code: { voucher: { _in: voucherIds2 } },
              },
              fields: ["id"],
              limit: -1,
            })
          );

          // Enforce only when claim_limit is positive (null/undefined/<=0 means unlimited)
          if (
            typeof group.claim_limit === "number" &&
            group.claim_limit > 0 &&
            (claims2 as any[]).length >= group.claim_limit
          ) {
            groupQuotaBlocked = true;
            break;
          }
        }
      }
      if (groupQuotaBlocked) {
        return c.json(
          {
            error: "group_quota_full",
            message: "คุณใช้สิทธิ์ในแคมเปญนี้ครบแล้ว",
          },
          409
        );
      }

      // Reserve available code with retry to handle races (emulates WHERE code_status='available')
      const maxAttempts = 3;
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        // 1) pick an available code
        const candidates = await directus.request(
          readItems("vouchers_codes", {
            fields: ["id", "code", "code_status"],
            filter: {
              voucher: { _eq: voucher_id },
              code_status: { _eq: "available" },
            },
            limit: 1,
          })
        );
        if (!candidates.length) {
          return c.json({ error: "fully collected" }, 409);
        }
        const candidate = candidates[0];

        // 2) attempt to reserve (set to collected)
        await directus.request(
          updateItem("vouchers_codes", candidate.id, {
            code_status: "collected",
          })
        );

        const now = new Date();
        const collected_date = now.toISOString();
        const validityCutoff = voucher.validity_in_seconds
          ? addSeconds(now, voucher.validity_in_seconds)
          : null;
        const usageCutoff = voucher.usage_end_date
          ? new Date(voucher.usage_end_date)
          : null;
        let expiresAtDate: Date | null = null;
        if (validityCutoff && usageCutoff) {
          expiresAtDate = new Date(
            Math.min(validityCutoff.getTime(), usageCutoff.getTime())
          );
        } else {
          expiresAtDate =
            validityCutoff ||
            usageCutoff ||
            (voucher.end_date ? new Date(voucher.end_date) : null);
        }
        const expires_at = expiresAtDate ? expiresAtDate.toISOString() : null;

        try {
          // 3) create vouchers_users with code relation (unique on code_id prevents double assign)
          const newVoucherUser = await directus.request(
            createItem("vouchers_users", {
              collected_by: userId,
              collected_date,
              code: candidate.id,
              channel,
              discount_value: finalDiscountValue,
              discount_type: finalDiscountType,
              utm_source,
              utm_medium,
              utm_campaign,
              expired_date: expires_at,
            })
          );

          return c.json({
            success: true,
            ...newVoucherUser,
            voucher_id,
            discount_value: finalDiscountValue,
            discount_type: finalDiscountType,
          });
        } catch (err: any) {
          const message = String(err?.message ?? err);
          const isUniqueOnCode =
            /unique|duplicate/i.test(message) && /code/i.test(message);
          // If unique violation on code, another request got this code; don't rollback (code is truly taken). Retry next candidate.
          if (!isUniqueOnCode) {
            // unknown failure: rollback to available so it can be retried later
            await directus.request(
              updateItem("vouchers_codes", candidate.id, {
                code_status: "available",
              })
            );
          }
          // try next attempt
        }
      }
      // If exhausted attempts
      return c.json({ error: "fully collected" }, 409);
    } catch (error: any) {
      console.error(error);
      return c.json(
        {
          error: "Failed to collect voucher",
          detail: error?.message ?? String(error),
        },
        500
      );
    }
  }
);

// v2 - my coupons for a page (filtered and server-computed)
export const getMyCouponsV2 = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId, liff_id } = c.get("jwtPayload");
      const directus = c.get("directAdmin");

      const serverNow = new Date();

      // Load all pages for this liff_id to get allowed voucher ids (from vouchers and populars)
      const pages: any[] = await directus.request(
        readItems("pages_liff", {
          filter: {
            liff_id: { _eq: liff_id },
          },
          fields: [
            {
              vouchers: [
                {
                  vouchers_id: ["id"],
                },
              ],
            },
            {
              populars: [
                {
                  vouchers_id: ["id"],
                },
              ],
            },
            {
              banner_vouchers: [
                {
                  vouchers_id: ["id"],
                },
              ],
            },
          ],
          limit: -1,
        } as any)
      );
      if (!pages?.length) return c.json({ error: "Page not found" }, 404);

      const allowedVoucherIds = new Set<string>();
      for (const page of pages) {
        for (const v of page?.vouchers ?? []) {
          const id = v?.vouchers_id?.id;
          if (id) allowedVoucherIds.add(id);
        }
        for (const p of page?.populars ?? []) {
          const id = p?.vouchers_id?.id;
          if (id) allowedVoucherIds.add(id);
        }
        for (const b of page?.banner_vouchers ?? []) {
          const id = b?.vouchers_id?.id;
          if (id) allowedVoucherIds.add(id);
        }
      }

      // Load user's vouchers
      const vouchersUsers: any[] = await directus.request(
        readItems("vouchers_users", {
          filter: { collected_by: { _eq: userId } },
          fields: [
            "id",
            "collected_by",
            "collected_date",
            "expired_date",
            "used_date",
            "redemption_expires_at",
            "discount_value",
            "discount_type",
            "channel",
            {
              code: [
                "id",
                "code",
                "code_status",
                {
                  voucher: [
                    "id",
                    "name",
                    "banner",
                    "cover",
                    "metadata",
                    "start_date",
                    "end_date",
                    "usage_end_date",
                    { voucher_brand_id: ["*"] },
                  ],
                },
              ],
            },
          ],
          limit: -1,
        })
      );

      // Filter by page's vouchers
      const filtered = (vouchersUsers || []).filter((vu: any) =>
        allowedVoucherIds.has(vu?.code?.voucher?.id)
      );

      // Compute server-side fields
      const nowTs = serverNow.getTime();
      const withComputed = filtered.map((vu: any) => {
        let timeLeftSeconds = 0;
        const expStr = vu?.redemption_expires_at as string | undefined;
        if (expStr) {
          const expiryTs = new Date(expStr).getTime();
          timeLeftSeconds = Math.floor((expiryTs - nowTs) / 1000);
        } else if (vu?.used_date) {
          const usedTs = new Date(vu.used_date).getTime();
          const expiryTs = usedTs + 15 * 60 * 1000; // fallback 15 minutes
          timeLeftSeconds = Math.floor((expiryTs - nowTs) / 1000);
        }
        const isExpired = Boolean(
          vu?.expired_date && new Date(vu.expired_date) < serverNow
        );

        let effectiveStatus = "available";
        const codeStatus = vu?.code?.code_status;
        if (codeStatus === "used") {
          effectiveStatus = "used";
        } else if (isExpired) {
          effectiveStatus = "expired";
        } else if (
          codeStatus === "pending_confirmation" &&
          timeLeftSeconds <= 0
        ) {
          effectiveStatus = "expired";
        } else {
          effectiveStatus = "available";
        }

        return { ...vu, timeLeftSeconds, isExpired, effectiveStatus };
      });

      // Build stats
      const statsBase: any = {
        available: 0,
        collected: 0,
        pending_confirmation: 0,
        expired: 0,
        used: 0,
        reserved: 0,
        total: 0,
      };
      for (const vu of withComputed) {
        if (vu.effectiveStatus === "available") statsBase.available++;
        if (vu.effectiveStatus === "used") statsBase.used++;
        if (vu.effectiveStatus === "expired") statsBase.expired++;
        const cs = vu?.code?.code_status;
        if (cs === "pending_confirmation" && vu.timeLeftSeconds > 0)
          statsBase.pending_confirmation++;
        if (cs === "collected") statsBase.collected++;
      }
      statsBase.total = withComputed.length;

      // Optional tab filter
      const tab = c.req.query("tab");
      let items = withComputed as any[];
      if (tab === "available" || tab === "used" || tab === "expired") {
        items = withComputed.filter((x: any) => x.effectiveStatus === tab);
      }

      // Sort by used_date ascending (used first by earliest time); non-used at the end
      items = items.sort((a: any, b: any) => {
        const dateA = a?.used_date ? new Date(a.used_date).getTime() : Infinity;
        const dateB = b?.used_date ? new Date(b.used_date).getTime() : Infinity;
        return dateA - dateB;
      });

      return c.json({
        serverNow: serverNow.toISOString(),
        stats: statsBase,
        items,
      });
    } catch (error: any) {
      console.error(error);
      return c.json(
        {
          error: "Failed to get my coupons for page",
          detail: error?.message ?? String(error),
        },
        500
      );
    }
  }
);

// getVoucher
export const getBrandPageV2 = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: brandId } = c.req.param() as { id: string };
      const { liff_id } = c.get("jwtPayload");
      const lang = c.req.query("lang") || "en-US";
      const directus = c.get("directAdmin");

      // Load all pages for this liff_id to determine allowed voucher ids
      const pages: any[] = await directus.request(
        readItems("pages_liff", {
          filter: { liff_id: { _eq: liff_id } },
          fields: [
            { vouchers: [{ vouchers_id: ["id"] }] },
            { populars: [{ vouchers_id: ["id"] }] },
            { banner_vouchers: [{ vouchers_id: ["id"] }] },
          ],
          limit: -1,
        } as any)
      );
      if (!pages?.length) {
        return c.json({ error: "Page not found" }, 404);
      }

      const allowedVoucherIds = new Set<string>();
      const popularVoucherIds = new Set<string>();
      for (const page of pages) {
        for (const v of page?.vouchers ?? []) {
          const id = v?.vouchers_id?.id;
          if (id) allowedVoucherIds.add(id);
        }
        for (const p of page?.populars ?? []) {
          const id = p?.vouchers_id?.id;
          if (id) {
            allowedVoucherIds.add(id);
            popularVoucherIds.add(id);
          }
        }
        for (const b of page?.banner_vouchers ?? []) {
          const id = b?.vouchers_id?.id;
          if (id) allowedVoucherIds.add(id);
        }
      }

      // Load brand with categories
      const voucherBrand: any = await directus.request(
        readItem("vouchers_brands", brandId, {
          fields: ["*", { categories: [{ voucher_categories_id: ["*"] }] }],
        })
      );
      if (!voucherBrand) return c.json(null);
      if (voucherBrand?.categories) {
        voucherBrand.categories = voucherBrand.categories
          .map((x: any) => x?.voucher_categories_id ?? x)
          .filter(Boolean);
      }

      // If no allowed vouchers for this page, return empty list with brand
      if (!allowedVoucherIds.size) {
        return c.json({ ...voucherBrand, vouchers: [] });
      }

      // Load vouchers for brand intersecting page's allowed list
      const vouchersRaw: any[] = await directus.request(
        readItems("vouchers", {
          filter: {
            id: { _in: Array.from(allowedVoucherIds) },
            voucher_brand_id: { _eq: brandId },
          },
          fields: [
            "*",
            { categories: [{ voucher_categories_id: ["*"] }] },
            { voucher_brand_id: ["*"] },
            { translations: ["*"] },
          ],
          limit: -1,
        } as any)
      );

      const now = new Date();

      // Batch load available code counts for these vouchers
      const codeItems: any[] = await directus.request(
        readItems("vouchers_codes", {
          fields: ["voucher", "code_status"],
          filter: {
            voucher: { _in: Array.from(allowedVoucherIds) },
            code_status: { _eq: "available" },
          },
          limit: -1,
        })
      );
      const availableByVoucher = _.countBy(codeItems, (x: any) => x.voucher);

      // Map vouchers: filter by visibility and availability, apply translations and categories
      const mapped = (vouchersRaw || [])
        .filter((v: any) => v?.hide_on_homepage !== true)
        .filter((v: any) => !v?.end_date || new Date(v.end_date) > now)
        .filter(
          (v: any) => !v?.usage_end_date || new Date(v.usage_end_date) > now
        )
        .map((voucher: any) => {
          const langTrans = _.find(voucher.translations, {
            languages_code: lang,
          });
          const cleanTrans = langTrans
            ? _.omit(langTrans, ["id", "languages_code"])
            : {};
          const rawCats = Array.isArray(voucher.categories)
            ? voucher.categories
            : [];
          const categories = rawCats
            .map((x: any) => x?.voucher_categories_id ?? x)
            .filter(Boolean);
          const available = availableByVoucher[voucher.id] || 0;
          return {
            ..._.omit(voucher, ["translations", "categories"]),
            ...cleanTrans,
            categories,
            isPopular: popularVoucherIds.has(voucher.id),
            stats: { available },
          };
        })
        .filter((v: any) => (v?.stats?.available ?? 0) > 0);

      return c.json({ ...voucherBrand, vouchers: mapped });
    } catch (error: any) {
      console.error(error);
      return c.json(
        {
          error: "Failed to get brand page",
          detail: error?.message ?? String(error),
        },
        500
      );
    }
  }
);

// getVoucher
export const getVoucher = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param() as { id: string };
    const directus = c.get("directAdmin");
    const voucher = await directus.request(
      readItem("vouchers", id, {
        fields: ["*", { voucher_brand_id: ["*"] }],
        // fields: ["id", "name", "cover", "ref_code", "status"],
      })
    );
    return c.json(voucher);
  }
);

export const collectVoucher = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      let {
        utm_source,
        utm_medium,
        utm_campaign,
        voucher_id,
        channel,
        discount_value,
        discount_type,
      } = await c.req.json();
      const { id, liff_id } = c.get("jwtPayload");
      const directus = c.get("directAdmin");

      // get voucher by ref_code
      const vouchers = await directus.request(
        readItems("vouchers", {
          fields: ["id", "validity_in_seconds", "end_date", "usage_end_date"],
          filter: {
            id: {
              _eq: voucher_id as string,
            },
            // ref_code: {
            //   _eq: utm_campaign as string,
            // },
          },
          limit: 1,
        })
      );

      if (!vouchers.length) {
        return c.json({ error: "Voucher not found" }, { status: 404 });
      }

      const voucherData = vouchers[0];

      // get available voucher code
      const availableCodes = await directus.request(
        readItems("vouchers_codes", {
          fields: ["id", "code"],
          filter: {
            voucher: {
              _eq: voucherData.id,
            },
            code_status: {
              _eq: "available",
            },
          },
          limit: 1,
        })
      );

      if (!availableCodes.length) {
        return c.json({ error: "No available voucher codes" }, { status: 404 });
      }

      const availableCode = availableCodes[0];

      const now = new Date();
      const collected_date = now.toISOString();
      const validityCutoff2 = voucherData.validity_in_seconds
        ? addSeconds(now, voucherData.validity_in_seconds)
        : null;
      const usageCutoff2 = voucherData.usage_end_date
        ? new Date(voucherData.usage_end_date)
        : null;
      let expiresAtDate2: Date | null = null;
      if (validityCutoff2 && usageCutoff2) {
        expiresAtDate2 = new Date(
          Math.min(validityCutoff2.getTime(), usageCutoff2.getTime())
        );
      } else {
        expiresAtDate2 =
          validityCutoff2 ||
          usageCutoff2 ||
          (voucherData.end_date ? new Date(voucherData.end_date) : null);
      }
      const expires_at = expiresAtDate2 ? expiresAtDate2.toISOString() : null;

      // create voucher user
      const newVoucherUser = await directus.request(
        createItem("vouchers_users", {
          collected_by: id,
          collected_date,
          code: availableCode.id,
          channel,
          discount_value,
          discount_type,
          utm_source,
          utm_medium,
          utm_campaign,
          expired_date: expires_at,
        })
      );

      // update voucher code status to "collected"
      await directus.request(
        updateItem("vouchers_codes", availableCode.id, {
          code_status: "collected",
        })
      );

      return c.json({
        success: true,
        ...newVoucherUser,
        voucher_id: voucher_id,
      });
    } catch (error: any) {
      console.error(error);
      return c.json(
        { error: "Something went wrong", detail: error?.message ?? error },
        500
      );
    }
  }
);

// createVoucherCode
export const createVoucherCode = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { voucher_id, count = 1, length = 12 } = await c.req.json();
      const directus = c.get("directAdmin");

      // Generate all codes at once (A-Z, 0-9 only) to guarantee fixed length
      const codeLength =
        typeof length === "number"
          ? length
          : parseInt(String(length), 10) || 12;
      const alphabet = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const generateCode = customAlphabet(alphabet, Math.max(1, codeLength));
      const codes = Array.from({ length: count }, () => generateCode());

      // Create array of objects for batch insert
      const items = codes.map((code) => ({
        voucher: voucher_id,
        code,
        status: "draft",
        code_status: "available",
      }));

      // Perform batch insert instead of looping
      const data = await directus.request(createItems("vouchers_codes", items));

      return c.json(data);
    } catch (error) {
      console.error("Error creating voucher codes:", error);
      return c.json(
        { error: "Failed to create voucher codes" },
        { status: 500 }
      );
    }
  }
);

// getVouchersByUser
export const getVouchersByUser = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.get("jwtPayload");
    const directus = c.get("directAdmin");
    try {
      const vouchersUsers = await directus.request(
        readItems("vouchers_users", {
          filter: { collected_by: { _eq: id } },
          fields: [
            "id",
            "collected_by",
            "collected_date",
            "expired_date",
            "used_date",
            "discount_value",
            "discount_type",
            "channel",
            {
              code: [
                "id",
                "code",
                "code_status",
                {
                  voucher: [
                    "id",
                    "name",
                    "banner",
                    "cover",
                    "metadata",
                    "start_date",
                    "end_date",
                    { voucher_brand_id: ["*"] },
                  ],
                },
              ],
            },
          ],
          limit: -1,
        })
      );

      return c.json(vouchersUsers);
    } catch (error) {
      console.error(error);
      return c.json({ error: "Invalid credentials" }, 401);
    }
  }
);
// updateVoucherUser
export const updateVoucherUser = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const body = await c.req.json();
    const directus = c.get("directAdmin");

    const data = await directus.request(
      updateItem("vouchers_users", body.id, body)
    );
    return c.json(data);
  }
);

// getVoucherCodes
export const getVoucherCodes = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { code_status, status, voucher } = c.req.query();
    const directus = c.get("directAdmin");

    const filters: any = {};
    if (code_status) filters.code_status = { _eq: code_status };
    if (status) filters.status = { _eq: status };
    if (voucher) filters.voucher = { _eq: voucher };

    const voucherCodes = await directus.request(
      readItems("vouchers_codes", {
        filter: filters,
        limit: -1,
      })
    );

    return c.json(voucherCodes);
  }
);

// getStatVoucherCode
export const getStatVoucherCode = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { status, voucher } = c.req.query();
    const directus = c.get("directAdmin");

    const filters: any = {};
    if (status) filters.status = { _eq: status };
    if (voucher) filters.voucher = { _eq: voucher };

    const voucherCodes = await directus.request(
      readItems("vouchers_codes", {
        filter: filters,
        fields: ["code_status"],
        limit: -1,
      })
    );

    const grouped = _.groupBy(voucherCodes, "code_status");
    const allStatuses = [
      "available",
      "collected",
      "pending_confirmation",
      "expired",
      "used",
      "reserved",
    ];
    const stats = _.mapValues(_.keyBy(allStatuses), () => 0);

    _.forEach(grouped, (codes, status) => {
      stats[status] = codes.length;
    });

    const total = voucherCodes.length;
    return c.json({ ...stats, total });
  }
);

// getStatVoucherUser
export const getStatVoucherUser = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.get("jwtPayload");
    const directus = c.get("directAdmin");

    const vouchersUsers = await directus.request(
      readItems("vouchers_users", {
        filter: { collected_by: { _eq: id } },
        fields: [
          "expired_date",
          "used_date",
          "redemption_expires_at",
          { code: ["id", "code_status"] },
        ],
        limit: -1,
      })
    );

    const currentDate = new Date();
    const withStatus = (vouchersUsers as any[]).map((voucherUser: any) => {
      const usedDate = voucherUser.used_date
        ? new Date(voucherUser.used_date)
        : null;
      const expiredDate = voucherUser.expired_date
        ? new Date(voucherUser.expired_date)
        : null;
      const isExpired = expiredDate ? expiredDate < currentDate : false;
      const codeStatus = voucherUser.code?.code_status;

      let finalStatus = "available";
      if (codeStatus === "pending_confirmation") {
        const redemptionExpiresAt = voucherUser.redemption_expires_at
          ? new Date(voucherUser.redemption_expires_at)
          : null;
        if (redemptionExpiresAt) {
          finalStatus = currentDate > redemptionExpiresAt ? "expired" : "pending_confirmation";
        } else if (usedDate) {
          const fallbackExpiry = new Date(usedDate.getTime() + 15 * 60 * 1000);
          finalStatus = currentDate > fallbackExpiry ? "expired" : "pending_confirmation";
        } else {
          finalStatus = "pending_confirmation";
        }
      } else if (isExpired) {
        finalStatus = "expired";
      } else if (codeStatus) {
        finalStatus = codeStatus;
      }

      return { ...voucherUser, code_status: finalStatus };
    });

    const grouped = _.groupBy(withStatus, "code_status");
    const allStatuses = [
      "available",
      "pending_confirmation",
      "collected",
      "expired",
      "used",
      "reserved",
    ];
    const stats = _.mapValues(_.keyBy(allStatuses), () => 0);

    _.forEach(grouped, (users, status) => {
      stats[status] = users.length;
    });

    const total = (withStatus as any[]).length;
    return c.json({ ...stats, total });
  }
);

// useVoucher
export const useVoucher = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { id } = await c.req.json();

    // Update voucher user with used date and compute redemption_expires_at
    const now = new Date();
    const nowIso = now.toISOString();

    // Read related code id from relation to compute expiry against voucher setting
    const vuWithCodePre = await directus.request(
      readItem("vouchers_users", id, { fields: [{ code: ["id"] }, "collected_by"] })
    );
    if (!vuWithCodePre) {
      return c.json({ error: "Voucher user not found" }, { status: 404 });
    }
    const relatedCodeIdPre = vuWithCodePre?.code?.id;
    if (!relatedCodeIdPre) {
      return c.json({ error: "Voucher code not found" }, { status: 404 });
    }

    // Load voucher id from code
    const codeItemForVoucher: any = await directus.request(
      readItem("vouchers_codes", relatedCodeIdPre, { fields: ["id", "voucher"] })
    );
    const voucherIdForExpiry = codeItemForVoucher?.voucher as string | undefined;

    // Load countdown seconds from voucher (nullable)
    let countdownSeconds = 15 * 60; // fallback 15 minutes
    if (voucherIdForExpiry) {
      const voucherItem: any = await directus.request(
        readItem("vouchers", voucherIdForExpiry, { fields: ["redemption_countdown_seconds"] })
      );
      const s = voucherItem?.redemption_countdown_seconds;
      if (typeof s === "number" && s > 0) countdownSeconds = s;
    }
    const redemptionExpiresAt = new Date(now.getTime() + countdownSeconds * 1000).toISOString();

    // Update vouchers_users with both used_date and redemption_expires_at
    const updatedVoucherUser = await directus.request(
      updateItem("vouchers_users", id, {
        used_date: nowIso,
        redemption_expires_at: redemptionExpiresAt,
      })
    );

    // Read related code id from relation and update code status
    const vuWithCode = await directus.request(
      readItem("vouchers_users", id, { fields: [{ code: ["id"] }] })
    );
    const relatedCodeId = vuWithCode?.code?.id;
    if (!relatedCodeId) {
      return c.json({ error: "Voucher code not found" }, { status: 404 });
    }

    await directus.request(
      updateItem("vouchers_codes", relatedCodeId, {
        code_status: "pending_confirmation",
      })
    );

    return c.json({ collected_by: updatedVoucherUser.collected_by, redemption_expires_at: redemptionExpiresAt });
  }
);

export const updateVoucherCode = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    // Read from body (code, code_status, code_id). userId is taken from JWT for security.
    const { code, code_status, code_id } = await c.req.json();
    const { id: userId } = c.get("jwtPayload");

    let targetCodeId = code_id as string | undefined;
    // Resolve when only "code" provided; try as id first, then as string code
    if (!targetCodeId && code) {
      const byId = await directus.request(
        readItems("vouchers_codes", {
          filter: { id: { _eq: code } },
          fields: ["id"],
          limit: 1,
        })
      );
      if (byId.length) {
        targetCodeId = byId[0].id as string;
      } else {
        const byCode = await directus.request(
          readItems("vouchers_codes", {
            filter: { code: { _eq: code } },
            fields: ["id"],
            limit: 1,
          })
        );
        if (byCode.length) targetCodeId = byCode[0].id as string;
      }
    }

    if (!targetCodeId) {
      return c.json({ error: "Voucher code not found" }, { status: 404 });
    }

    // Load current code for ownership and status validation
    const codeItem: any = await directus.request(
      readItem("vouchers_codes", targetCodeId, {
        fields: ["id", "voucher", "code_status"],
      })
    );
    if (!codeItem) {
      return c.json({ error: "Voucher code not found" }, { status: 404 });
    }

    // Verify ownership: there must be a vouchers_users entry linking this code to the same user
    const vu = await directus.request(
      readItems("vouchers_users", {
        filter: { code: { _eq: targetCodeId }, collected_by: { _eq: userId } },
        fields: ["id", "collected_by"],
        limit: 1,
      })
    );
    if (!vu.length) {
      return c.json(
        { error: "Forbidden: code not owned by user" },
        { status: 403 }
      );
    }

    const previous_status = codeItem.code_status as string | null;

    // Idempotent path: same status requested
    if (previous_status === code_status) {
      return c.json({
        success: true,
        idempotent: true,
        userId,
        code_id: targetCodeId,
        voucher_id: codeItem.voucher,
        previous_status,
        new_status: code_status,
        updated_at: new Date().toISOString(),
      });
    }

    // Guard transitions (simple rule): allow pending_confirmation -> used, otherwise reject
    const allowed =
      previous_status === "pending_confirmation" && code_status === "used";
    if (!allowed) {
      return c.json(
        {
          error: "invalid_transition",
          previous_status,
          requested_status: code_status,
        },
        { status: 409 }
      );
    }

    await directus.request(
      updateItem("vouchers_codes", targetCodeId, { code_status })
    );

    return c.json({
      success: true,
      idempotent: false,
      userId,
      code_id: targetCodeId,
      voucher_id: codeItem.voucher,
      previous_status,
      new_status: code_status,
      updated_at: new Date().toISOString(),
    });
  }
);

export const getVoucherBrandByIdWithVouchers = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param() as { id: string };
    const directus = c.get("directAdmin");

    const voucherBrand = await directus.request(
      readItem("vouchers_brands", id, {
        fields: ["*", { categories: [{ voucher_categories_id: ["*"] }] }],
      })
    );
    if (!voucherBrand) {
      return c.json(null);
    }

    if (voucherBrand?.categories) {
      voucherBrand.categories = (voucherBrand.categories as any[])
        .map((x: any) => x?.voucher_categories_id ?? x)
        .filter(Boolean);
    }

    const vouchers = await directus.request(
      readItems("vouchers", {
        filter: {
          voucher_brand_id: {
            _eq: voucherBrand.id,
          },
        },
        limit: -1,
      })
    );
    return c.json({ ...voucherBrand, vouchers });
  }
);
