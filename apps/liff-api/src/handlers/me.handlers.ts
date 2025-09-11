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
