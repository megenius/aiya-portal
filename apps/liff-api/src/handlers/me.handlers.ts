import * as sdk from "@directus/sdk";
import { readItems, updateItem, deleteItem, deleteItems } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const getMe = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directAdmin");
  try {
    const { id, liff_id } = c.get("jwtPayload") as { id: string; liff_id?: string };
    const profile = await directus.request(
      sdk.readItem("profiles", id, {
        fields: ["*"],
      })
    );

    if (!profile) {
      return c.json({ error: "Profile not found" }, 404);
    }

    // Build voucher user stats scoped by pages_liff (same logic baseline as getStatVoucherUser)
    // 1) Resolve allowed voucher IDs from pages_liff for current liff_id
    const allowedVoucherIds = new Set<string>();
    if (liff_id) {
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
      for (const page of pages || []) {
        for (const v of page?.vouchers ?? []) {
          const vid = v?.vouchers_id?.id;
          if (vid) allowedVoucherIds.add(vid);
        }
        for (const p of page?.populars ?? []) {
          const vid = p?.vouchers_id?.id;
          if (vid) allowedVoucherIds.add(vid);
        }
        for (const b of page?.banner_vouchers ?? []) {
          const vid = b?.vouchers_id?.id;
          if (vid) allowedVoucherIds.add(vid);
        }
      }
    }

    // 2) Load user's voucher records (with linked voucher id) and filter by allowed set
    const vouchersUsers = await directus.request(
      readItems("vouchers_users", {
        filter: { collected_by: { _eq: id } },
        fields: [
          "expired_date",
          "used_date",
          { code: ["id", "code_status", { voucher: ["id"] }] },
        ],
        limit: -1,
      })
    );
    const scopedVoucherUsers = (vouchersUsers as any[]).filter((vu: any) => {
      const voucherId = vu?.code?.voucher?.id;
      // If we successfully resolved allowedVoucherIds, enforce scoping; otherwise, yield empty (no pages context)
      return allowedVoucherIds.size > 0 ? allowedVoucherIds.has(voucherId) : false;
    });

    const currentDate = new Date();
    const withStatus = scopedVoucherUsers.map((voucherUser: any) => {
      const usedDate = voucherUser.used_date ? new Date(voucherUser.used_date) : null;
      const expiredDate = voucherUser.expired_date ? new Date(voucherUser.expired_date) : null;
      const isExpired = expiredDate ? expiredDate < currentDate : false;
      const codeStatus = voucherUser.code?.code_status as string | undefined;

      let finalStatus: string = "available";
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

    const allStatuses = [
      "available",
      "pending_confirmation",
      "collected",
      "expired",
      "used",
      "reserved",
    ];
    const stats: Record<string, number> = Object.fromEntries(
      allStatuses.map((s) => [s, 0])
    );
    for (const vu of withStatus) {
      const st = (vu as any).code_status as string;
      if (st in stats) stats[st]++;
    }
    const total = (withStatus as any[]).length;

    return c.json({ ...profile, voucherUserStats: { ...stats, total } }, 200);
  } catch (error) {
    console.error(error);
    return c.json({ error: "Invalid credentials" }, 401);
  }
});

//reset my voucher
export const resetMyVoucher = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    try {
      const { id } = c.get("jwtPayload");

      await directus.request(
        deleteItems("voucher_views", {
          filter: {
            user_id: {
              _eq: id,
            },
          },
        })
      );

      const vouchersUsers = await directus.request(
        readItems("vouchers_users", {
          fields: [
            "id",
            "collected_by",
            {
              code: ["id", "code", "code_status"],
            },
          ],
          filter: {
            collected_by: {
              _eq: id,
            },
          },
          limit: -1,
        })
      );

      if (!vouchersUsers.length) {
        return c.json({ error: "Vouchers not found" }, 404);
      }

      // ดึงรหัสโค้ด (id) และค่ารหัส (code) ที่ผู้ใช้งานถืออยู่
      const codeIds: string[] = (vouchersUsers as any[])
        .map((vu: any) => vu?.code?.id)
        .filter(Boolean);
      const codeValues: string[] = (vouchersUsers as any[])
        .map((vu: any) => vu?.code?.code)
        .filter(Boolean);

      if (!codeIds.length) {
        return c.json(
          { success: true, updated_codes: [], total_updated: 0 },
          200
        );
      }

      // ตั้งสถานะ codes ที่ถืออยู่กลับเป็น available โดยอิงตามรหัส id ของ relation
      for (const codeId of codeIds) {
        await directus.request(
          updateItem("vouchers_codes", codeId, { code_status: "available" })
        );
      }

      await directus.request(
        deleteItems("vouchers_users", {
          filter: {
            collected_by: {
              _eq: id,
            },
          },
        })
      );

      // Reset my campaign-related data as well
      // 1) Delete reward credit transactions (must go first because they can reference submissions)
      await directus.request(
        deleteItems("reward_credit_transactions", {
          filter: {
            user_id: { _eq: id },
          },
        })
      );

      // 2) Delete mission submissions
      await directus.request(
        deleteItems("user_mission_submissions", {
          filter: {
            user_id: { _eq: id },
          },
        })
      );

      // 3) Delete accumulated user credits per campaign
      await directus.request(
        deleteItems("user_reward_credits", {
          filter: {
            user_id: { _eq: id },
          },
        })
      );

      // 4) Delete campaign registrations (includes PDPA + registration state)
      await directus.request(
        deleteItems("user_campaign_registrations", {
          filter: {
            user: { _eq: id },
          },
        })
      );

      return c.json(
        {
          success: true,
          updated_codes: codeValues,
          total_updated: codeIds.length,
        },
        200
      );
    } catch (error) {
      console.error(error);
      return c.json({ error: "Invalid credentials" }, 401);
    }
  }
);
