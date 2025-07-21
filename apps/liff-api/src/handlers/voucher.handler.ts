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
import { formatDateBangkok } from "~/utils/dateUtils";

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
      let { utm_source, utm_medium, utm_campaign, voucher_id, channel, discount_value, discount_type } =
        await c.req.json();
      const { id } = c.get("jwtPayload");
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

      console.log(collected_date, expires_at);
      

      // create voucher user
      const newVoucherUser = await directus.request(
        createItem("vouchers_users", {
          collected_by: id,
          collected_date,
          code: availableCode.code,
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
    } catch (error) {
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
          filter: {
            collected_by: {
              _eq: id,
            },
          },
        })
      );

      // 1. รวม code ทั้งหมดที่ user มี
      const codes = vouchersUsers.map((vu: any) => vu.code);

      // ถ้า codes เป็น array ว่าง ให้ return [] ทันที
      if (!codes.length) {
        return c.json([]);
      }

      // 2. ดึง vouchers_codes ทีเดียวด้วย filter _in
      const vouchersCodes = await directus.request(
        readItems("vouchers_codes", {
          fields: [
            "*",
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
          filter: { code: { _in: codes } },
        })
      );

      // 3. ทำเป็น map เพื่อ lookup ง่าย
      const codeMap = _.keyBy(vouchersCodes, "code");

      // 4. รวมข้อมูลกลับไปที่ vouchersUsers
      const vouchersUserCode = vouchersUsers.map((voucherUser: any) => {
        const { code, ...rest } = voucherUser;
        return {
          ...rest,
          code: codeMap[code] || null,
        };
      });

      return c.json(vouchersUserCode);
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
    const { collected_by } = c.req.param();
    const directus = c.get("directAdmin");

    const filters: any = {};
    if (collected_by) filters.collected_by = { _eq: collected_by };

    const vouchersUsers = await directus.request(
      readItems("vouchers_users", {
        filter: filters,
        fields: ["code", "expired_date"],
      })
    );

    const currentDate = new Date();
    const voucherCodes = await Promise.all(
      vouchersUsers.map(async (voucherUser: any) => {
        const voucherCode = await directus.request(
          readItems("vouchers_codes", {
            filter: {
              code: {
                _eq: voucherUser.code,
              },
            },
            limit: 1,
          })
        );

        // If expired_date is in the past, set status to 'expired'
        const expiredDate = new Date(voucherUser.expired_date);
        const isExpired = expiredDate < currentDate;

        return {
          ...voucherUser,
          code_status: isExpired
            ? "expired"
            : voucherCode[0]?.code_status || "available",
        };
      })
    );

    const grouped = _.groupBy(voucherCodes, "code_status");
    const allStatuses = [
      "available",
      "collected",
      "expired",
      "used",
      "reserved",
    ];
    const stats = _.mapValues(_.keyBy(allStatuses), () => 0);

    _.forEach(grouped, (users, status) => {
      stats[status] = users.length;
    });

    const total = voucherCodes.length;
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
    const voucherUser = await directus.request(
      updateItem("vouchers_users", id, {
        used_date: formatDateBangkok(),
      })
    );
    console.log(voucherUser);

    if (!voucherUser) {
      return c.json({ error: "Voucher user not found" }, { status: 404 });
    }

    // Update voucher code status to "used"
    const voucherCode = await directus.request(
      readItems("vouchers_codes", {
        filter: {
          code: {
            _eq: voucherUser.code,
          },
        },
        limit: 1,
      })
    );

    if (!voucherCode.length) {
      return c.json({ error: "Voucher code not found" }, { status: 404 });
    }

    await directus.request(
      updateItem("vouchers_codes", voucherCode[0].id, {
        code_status: "pending_confirmation",
      })
    );

    return c.json({ collected_by: voucherUser.collected_by });
  }
);

export const updateVoucherCode = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { userId, code, code_status } = await c.req.json();

    const voucherCode = await directus.request(
      readItems("vouchers_codes", {
        filter: {
          code: {
            _eq: code,
          },
        },
        limit: 1,
      })
    );

    if (!voucherCode.length) {
      return c.json({ error: "Voucher code not found" }, { status: 404 });
    }

    await directus.request(
      updateItem("vouchers_codes", voucherCode[0].id, {
        code_status: code_status,
      })
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
    voucherBrand.vouchers = vouchers;
    return c.json(voucherBrand);
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
