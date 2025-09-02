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
    const { id } = c.get("jwtPayload");
    const profile = await directus.request(
      sdk.readItem("profiles", id, {
        fields: ["*"],
      })
    );

    if (!profile) {
      return c.json({ error: "Profile not found" }, 404);
    }

    return c.json(profile, 200);
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
          fields: ["id", "code", "collected_by"],
          filter: {
            collected_by: {
              _eq: id,
            },
          },
        })
      );

      if (!vouchersUsers.length) {
        return c.json({ error: "Vouchers not found" }, 404);
      }

      // เก็บ code เป็น array ของ string ทั้งหมดของผู้ใช้
      const codes: string[] = vouchersUsers
        .map((vu: any) => vu.code)
        .filter(Boolean);

      if (!codes.length) {
        return c.json(
          { success: true, updated_codes: [], total_updated: 0 },
          200
        );
      }

      // ดึง vouchers_codes ที่ตรงกับ codes เหล่านี้
      const voucherCodes = await directus.request(
        readItems("vouchers_codes", {
          fields: ["id", "code", "code_status"],
          filter: { code: { _in: codes } },
          limit: -1,
        })
      );

      for (const vc of voucherCodes) {
        await directus.request(
          updateItem("vouchers_codes", vc.id, { code_status: "available" })
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

      return c.json(
        {
          success: true,
          updated_codes: voucherCodes.map((vc) => vc.code),
          total_updated: voucherCodes.length,
        },
        200
      );
    } catch (error) {
      console.error(error);
      return c.json({ error: "Invalid credentials" }, 401);
    }
  }
);
