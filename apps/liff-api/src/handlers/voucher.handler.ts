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
import { nanoid } from "nanoid";
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
      })
    );
    return c.json(vouchers);
  }
);

// v2 - collect with server verification
export const collectVoucherV2 = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { id: voucher_id } = c.req.param();
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
      const isLimited = Array.isArray(voucher?.metadata?.discount_tiers) && (voucher?.metadata?.discount_tiers?.length ?? 0) > 0;
      if (voucher?.metadata?.redemptionType === "limited_time" && isLimited) {
        // enforce current tier
        if (!snapshot.currentTier) {
          return c.json({ error: "no active tier" }, 400);
        }
        finalDiscountValue = snapshot.currentTier.value;
        finalDiscountType = snapshot.currentTier.type;
      }

      // Reserve available code with retry to handle races (emulates WHERE code_status='available')
      const maxAttempts = 3;
      for (let attempt = 0; attempt < maxAttempts; attempt++) {
        // 1) pick an available code
        const candidates = await directus.request(
          readItems("vouchers_codes", {
            fields: ["id", "code", "code_status"],
            filter: { voucher: { _eq: voucher_id }, code_status: { _eq: "available" } },
            limit: 1,
          })
        );
        if (!candidates.length) {
          return c.json({ error: "fully collected" }, 409);
        }
        const candidate = candidates[0];

        // 2) attempt to reserve (set to collected)
        await directus.request(
          updateItem("vouchers_codes", candidate.id, { code_status: "collected" })
        );

        const now = new Date();
        const collected_date = now.toISOString();
        const expires_at = voucher.validity_in_seconds
          ? addSeconds(now, voucher.validity_in_seconds).toISOString()
          : voucher.end_date;

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
          const isUniqueOnCode = /unique|duplicate/i.test(message) && /code/i.test(message);
          // If unique violation on code, another request got this code; don't rollback (code is truly taken). Retry next candidate.
          if (!isUniqueOnCode) {
            // unknown failure: rollback to available so it can be retried later
            await directus.request(
              updateItem("vouchers_codes", candidate.id, { code_status: "available" })
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
        { error: "Failed to collect voucher", detail: error?.message ?? String(error) },
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
    const { id } = c.req.param();
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
          fields: ["id", "validity_in_seconds", "end_date"],
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
      const expires_at = voucherData.validity_in_seconds
        ? addSeconds(now, voucherData.validity_in_seconds).toISOString()
        : voucherData.end_date;

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
      const { voucher_id, count = 1 } = await c.req.json();
      const directus = c.get("directAdmin");

      // Generate all codes at once
      const codes = Array.from({ length: count }, () =>
        nanoid(12)
          .toUpperCase()
          .replace(/[^A-Z0-9]/g, "")
      );

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
        fields: ["expired_date", "used_date", { code: ["id", "code_status"] }],
      })
    );

    const currentDate = new Date();
    const withStatus = (vouchersUsers as any[]).map((voucherUser: any) => {
      const usedDate = voucherUser.used_date ? new Date(voucherUser.used_date) : null;
      const expiredDate = voucherUser.expired_date ? new Date(voucherUser.expired_date) : null;
      const isExpired = expiredDate ? expiredDate < currentDate : false;
      const codeStatus = voucherUser.code?.code_status;

      let finalStatus = "available";
      if (codeStatus === "pending_confirmation" && usedDate) {
        const diffMs = currentDate.getTime() - usedDate.getTime();
        const diffMin = diffMs / (1000 * 60);
        finalStatus = diffMin > 15 ? "expired" : "pending_confirmation";
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

// getVoucherBrands
export const getVoucherBrands = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { status, q } = c.req.query();

    const filters: any = {};
    if (status) filters.status = { _eq: status };
    if (q) filters.name = { _icontains: q };

    const voucherBrands = await directus.request(
      readItems("vouchers_brands", {
        filter: filters,
      })
    );
    return c.json(voucherBrands);
  }
);

// useVoucher
export const useVoucher = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { id } = await c.req.json();

    // Update voucher user with used date
    const updatedVoucherUser = await directus.request(
      updateItem("vouchers_users", id, { used_date: new Date().toISOString() })
    );

    if (!updatedVoucherUser) {
      return c.json({ error: "Voucher user not found" }, { status: 404 });
    }

    // Read related code id from relation and update code status
    const vuWithCode = await directus.request(
      readItem("vouchers_users", id, { fields: [{ code: ["id"] }] })
    );
    const relatedCodeId = vuWithCode?.code?.id;
    if (!relatedCodeId) {
      return c.json({ error: "Voucher code not found" }, { status: 404 });
    }

    await directus.request(
      updateItem("vouchers_codes", relatedCodeId, { code_status: "pending_confirmation" })
    );

    return c.json({ collected_by: updatedVoucherUser.collected_by });
  }
);

export const updateVoucherCode = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { userId, code, code_status, code_id } = await c.req.json();

    let targetCodeId = code_id as string | undefined;
    // Resolve when only "code" provided; try as id first, then as string code
    if (!targetCodeId && code) {
      const byId = await directus.request(
        readItems("vouchers_codes", { filter: { id: { _eq: code } }, fields: ["id"], limit: 1 })
      );
      if (byId.length) {
        targetCodeId = byId[0].id as string;
      } else {
        const byCode = await directus.request(
          readItems("vouchers_codes", { filter: { code: { _eq: code } }, fields: ["id"], limit: 1 })
        );
        if (byCode.length) targetCodeId = byCode[0].id as string;
      }
    }

    if (!targetCodeId) {
      return c.json({ error: "Voucher code not found" }, { status: 404 });
    }

    await directus.request(
      updateItem("vouchers_codes", targetCodeId, { code_status })
    );

    return c.json({ userId });
  }
);

export const getVoucherBrandByIdWithVouchers = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const directus = c.get("directAdmin");

    const voucherBrand = await directus.request(
      readItem("vouchers_brands", id, {})
    );
    const vouchers = await directus.request(
      readItems("vouchers", {
        filter: {
          voucher_brand_id: {
            _eq: id,
          },
        },
      })
    );
    return c.json({ ...voucherBrand, vouchers });
  }
);

//voucher_views
export const getOrCreateVoucherViewByUser = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.get("jwtPayload");
    const { voucher_id } = c.req.param();
    const directus = c.get("directAdmin");
    const voucher = await directus.request(readItem("vouchers", voucher_id));
    if (!voucher) {
      return c.json({ error: "Voucher not found" }, { status: 404 });
    }

    // ถ้ายังไม่ถึง start_date ให้ส่ง null กลับไป
    const bangkokNow = new Date();
    console.log(
      `${voucher.start_date} && ${bangkokNow} < ${new Date(voucher.start_date as string)}`
    );
    if (voucher.start_date && bangkokNow < new Date(voucher.start_date)) {
      return c.json(null);
    }

    const voucherViews = await directus.request(
      readItems("voucher_views", {
        filter: {
          voucher_id: {
            _eq: voucher_id,
          },
          user_id: {
            _eq: id,
          },
        },
        limit: 1,
      })
    );
    if (!voucherViews.length) {
      const voucherView = await directus.request(
        createItem("voucher_views", {
          voucher_id: voucher_id,
          user_id: id,
          first_viewed_at: new Date().toISOString(),
        })
      );
      return c.json(voucherView);
    }

    return c.json(voucherViews[0]);
  }
);

// v2 - Compute limited-time tier state on server with time anchors
export const getVoucherViewV2 = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { id: userId } = c.get("jwtPayload");
      const { id: voucher_id } = c.req.param();
      const directus = c.get("directAdmin");

      const serverNow = new Date();

      // Load voucher
      const voucher: any = await directus.request(
        readItem("vouchers", voucher_id, {
          fields: ["id", "start_date", "end_date", "metadata"],
        })
      );
      if (!voucher) return c.json({ error: "Voucher not found" }, 404);

      const start = voucher.start_date ? new Date(voucher.start_date) : null;
      const end = voucher.end_date ? new Date(voucher.end_date) : null;

      // Count available codes (optimize later with aggregate)
      const availableCodes = await directus.request(
        readItems("vouchers_codes", {
          fields: ["code_status"],
          filter: { voucher: { _eq: voucher_id }, code_status: { _eq: "available" } },
          limit: -1,
        })
      );
      const available = availableCodes.length;

      if (start && serverNow < start) {
        return c.json({
          serverNow: serverNow.toISOString(),
          firstViewedAt: null,
          effectiveStatus: "not_started",
          canCollect: false,
          currentTier: null,
          timeLeftSeconds: Math.max(0, Math.round((start.getTime() - serverNow.getTime()) / 1000)),
          progressPercent: 0,
          nextBoundaryAt: start.toISOString(),
          campaignEndAt: end ? end.toISOString() : null,
          available,
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

      return c.json({
        serverNow: serverNow.toISOString(),
        firstViewedAt: firstViewedAt.toISOString(),
        effectiveStatus: snapshot.effectiveStatus,
        canCollect: snapshot.canCollect,
        currentTier: snapshot.currentTier,
        timeLeftSeconds: snapshot.timeLeftSeconds,
        progressPercent: snapshot.progressPercent,
        nextBoundaryAt: snapshot.nextBoundaryAt ? snapshot.nextBoundaryAt.toISOString() : null,
        campaignEndAt: snapshot.campaignEndAt ? snapshot.campaignEndAt.toISOString() : null,
        available,
      });
    } catch (error: any) {
      console.error(error);
      return c.json({ error: "Failed to compute voucher view", detail: error?.message ?? error }, 500);
    }
  }
);
