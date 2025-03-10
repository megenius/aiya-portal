import { createItem, readItem, readItems, updateItem } from "@directus/sdk";
import { addDays, endOfDay } from "date-fns";
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
        fields:["*", {voucher_brand_id: ["*"]}],
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
        fields:["*", {voucher_brand_id: ["*"]}],
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
    let {
      utm_source,
      utm_medium,
      utm_campaign,
      voucher,
      collected_by,
      duration_days,
      end_date,
    } = await c.req.json();
    const directus = c.get("directAdmin");

    // get voucher by ref_code
    const vouchers = await directus.request(
      readItems("vouchers", {
        fields: ["id", "duration_days", "end_date"],
        filter: {
          id: {
            _eq: voucher as string,
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
    end_date = voucherData.end_date;
    duration_days = voucherData.duration_days;

    // get available voucher code
    const voucherCodes = await directus.request(
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

    if (!voucherCodes.length) {
      return c.json({ error: "No available voucher codes" }, { status: 404 });
    }

    const voucherCode = voucherCodes[0];

    // create voucher user
    const data = await directus.request(
      createItem("vouchers_users", {
        collected_by,
        collected_date: new Date().toISOString(),
        code: voucherCode.code,
        utm_source,
        utm_medium,
        utm_campaign,
        expired_date: duration_days
          ? endOfDay(addDays(new Date(), duration_days)).toISOString()
          : end_date,
      })
    );

    // update voucher code status to "collected"
    await directus.request(
      updateItem("vouchers_codes", voucherCode.id, {
        code_status: "collected",
      })
    );

    return c.json({
      ...data,
      voucher: voucher
    });
  }
);

// createVoucherCode
export const createVoucherCode = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { voucher_id } = await c.req.json();
    const directus = c.get("directAdmin");

    const code = nanoid(12).toUpperCase().replace(/[^A-Z0-9]/g, ''); // Generate a random code with 12 uppercase letters and numbers

    const data = await directus.request(
      createItem("vouchers_codes", {
        voucher: voucher_id,
        code,
        status: "draft",
        code_status: "available",
      })
    );
    return c.json(data);
  }
);

// getVouchersByUser
export const getVouchersByUser = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { uid } = c.req.query();
    const directus = c.get("directAdmin");
    const vouchers = await directus.request(
      readItems("vouchers_users", {
        filter: {
          collected_by: {
            _eq: uid,
          },
        },
      })
    );
    

    const vouchersUserCode = await Promise.all(
      vouchers.map(async (voucher: any) => {        
        const voucherData = await directus.request(
          readItems("vouchers_codes",  {
            fields: ["*", { voucher: ["*",{voucher_brand_id: ["*"]}] }],
            filter: {
              code: {
                _eq: voucher.code,
              },
            },
            limit: 1,
          })
        );
        voucher = _.omit(voucher, ["code"]);

        return {
          ...voucher,
          code: voucherData.length>0 ? voucherData[0] : null,
        };
      })
    );

    return c.json(vouchersUserCode);
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
      })
    );

    const grouped = _.groupBy(voucherCodes, "code_status");
    const allStatuses = ["available", "collected", "expired", "used","reserved"];
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
        fields: ["code"],
      })
    );

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
        return { ...voucherUser, code_status: voucherCode[0]?.code_status };
      })
    );

    const grouped = _.groupBy(voucherCodes, "code_status");
    const allStatuses = ["available", "collected", "expired", "used", "reserved"];
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
    const {id} =await c.req.json();    

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
        code_status: "used",
      })
    );

    return c.json({ collected_by: voucherUser.collected_by });
  }
);
