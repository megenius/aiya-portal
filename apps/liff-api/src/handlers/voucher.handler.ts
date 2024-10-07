import { createItem, readItem, readItems, updateItem } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { addDays, endOfDay, formatDate } from "date-fns";

const factory = createFactory<Env>();

// getVouchers
export const getVouchers = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const vouchers = await directus.request(readItems("vouchers"));
    return c.json(vouchers);
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
        fields: ["id", "name", "cover", "ref_code", "status"],
      })
    );
    return c.json(voucher);
  }
);

export const collectVoucher = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    let {
      utm_source,
      utm_medium,
      utm_campaign,
      code,
      collected_by,
      duration_days,
      end_date,
    } = await c.req.json();
    const directus = c.get("directAdmin");

    if (!code) {
      // get voucher by ad_code
      const vouchers = await directus.request(
        readItems("vouchers", {
          fields: ["id", "duration_days", "end_date"],
          filter: {
            ref_code: {
              _eq: utm_campaign as string,
            },
          },
          limit: 1,
        })
      );

      if (!vouchers.length) {
        return c.json({ error: "Voucher not found" }, { status: 404 });
      }

      const voucher = vouchers[0];
      end_date = voucher.end_date;
      duration_days = voucher.duration_days;

      const voucher_code = await directus.request(
        readItems("vouchers_codes", {
          fields: ["id", "code"],
          filter: {
            voucher: {
              _eq: voucher.id,
            },
            code_status: {
              _eq: "available",
            },
          },
          limit: 1,
        })
      );
    }

    // create voucher user
    const data = await directus.request(
      createItem("vouchers_users", {
        collected_by,
        collected_date: new Date().toISOString(),
        code,
        utm_source,
        utm_medium,
        utm_campaign,
        expired_date: duration_days
          ? endOfDay(addDays(new Date(), duration_days)).toISOString()
          : end_date,
      })
    );

    return c.json(data);
  }
);
