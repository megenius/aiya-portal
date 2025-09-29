import { createItem, readItem, readItems, updateItem } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import * as _ from "lodash";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { DirectusError } from "@repo/shared/exceptions/directus";

const factory = createFactory<Env>();

// getLiffPage - ดึงข้อมูล LIFF page เดียว
export const getLiffPage = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const directus = c.get("directAdmin");

    try {
      const liffPage = await directus.request(readItem("pages_liff", id));
      return c.json(liffPage);
    } catch (error) {
      console.error("LIFF page fetch error:", error);
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

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
    const voucher = await directus.request(readItem("vouchers", id));
    return c.json(voucher);
  }
);

export const collectVoucher = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { ad_code, barcode, uid } = await c.req.json();
    const directus = c.get("directAdmin");

    return c.json({});
  }
);

// getLiffPageDetails - ดึงข้อมูล LIFF page พร้อม vouchers แยกประเภท
export const getLiffPageDetails = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { id } = c.req.param();

    try {
      // ดึง LIFF page พร้อม relations ทั้งหมด
      const liffPage = await directus.request(
        readItem("pages_liff", id, {
          fields: [
            "*",
            {
              vouchers: [
                {
                  "vouchers_id": [
                    "*",
                    {
                      codes: ["*"]
                    }
                  ]
                }
              ]
            },
            {
              populars: [
                {
                  "vouchers_id": [
                    "*",
                    {
                      codes: ["*"]
                    }
                  ]
                }
              ]
            },
            {
              banner_vouchers: [
                {
                  "vouchers_id": [
                    "*",
                    {
                      codes: ["*"]
                    }
                  ]
                }
              ]
            },
            {
              brands: [
                "vouchers_brands_id.*"
              ]
            },
            {
              categories: [
                "voucher_categories_id.*"
              ]
            }
          ]
        })
      );

      // แยกข้อมูลตามประเภท
      const vouchersFromVouchers = (liffPage.vouchers || []).map((v: any) => v.vouchers_id).filter(Boolean);
      const popularVouchers = (liffPage.populars || []).map((v: any) => v.vouchers_id).filter(Boolean);
      const bannerVouchers = (liffPage.banner_vouchers || []).map((v: any) => v.vouchers_id).filter(Boolean);

      // รวม all vouchers จากทุก relation และ remove duplicates
      const allVouchersSet = new Set();
      [...vouchersFromVouchers, ...popularVouchers, ...bannerVouchers].forEach(voucher => {
        if (voucher && voucher.id) {
          allVouchersSet.add(JSON.stringify(voucher));
        }
      });
      const allVouchers = Array.from(allVouchersSet).map(v => JSON.parse(v as string));
      const brands = (liffPage.brands || []).map((b: any) => b.vouchers_brands_id).filter(Boolean);
      const categories = (liffPage.categories || []).map((c: any) => c.voucher_categories_id).filter(Boolean);

      return c.json({
        liffPage,
        allVouchers,
        popularVouchers,
        bannerVouchers,
        brands,
        categories
      });
    } catch (error) {
      console.error("LIFF page details error:", error);
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

// getDashboard
export const getDashboard = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { liff_page_id } = c.req.query();

    try {
      let allVouchers: any[] = [];

      if (liff_page_id) {
        // ดึง LIFF page พร้อม relations
        const liffPage = await directus.request(
          readItem("pages_liff", liff_page_id, {
            fields: [
              "*",
              {
                vouchers: [
                  {
                    "vouchers_id": [
                      "*",
                      {
                        codes: ["*"]
                      }
                    ]
                  }
                ]
              },
              {
                populars: [
                  {
                    "vouchers_id": [
                      "*",
                      {
                        codes: ["*"]
                      }
                    ]
                  }
                ]
              },
              {
                banner_vouchers: [
                  {
                    "vouchers_id": [
                      "*",
                      {
                        codes: ["*"]
                      }
                    ]
                  }
                ]
              }
            ]
          })
        );

        // รวม vouchers จากทุก relation
        const vouchersFromVouchers = (liffPage.vouchers || []).map((v: any) => v.vouchers_id).filter(Boolean);
        const vouchersFromPopulars = (liffPage.populars || []).map((v: any) => v.vouchers_id).filter(Boolean);
        const vouchersFromBanners = (liffPage.banner_vouchers || []).map((v: any) => v.vouchers_id).filter(Boolean);

        // รวมทุก vouchers และ remove duplicates
        const voucherSet = new Set();
        [...vouchersFromVouchers, ...vouchersFromPopulars, ...vouchersFromBanners].forEach(voucher => {
          if (voucher && voucher.id) {
            voucherSet.add(JSON.stringify(voucher));
          }
        });

        allVouchers = Array.from(voucherSet).map(v => JSON.parse(v as string));
      } else {
        // ดึง vouchers ทั้งหมด
        allVouchers = await directus.request(
          readItems("vouchers", {
            fields: [
              "*",
              {
                codes: ["*"]
              }
            ],
            limit: -1,
            sort: ["-date_created"]
          })
        );
      }

      // ดึง vouchers_users สำหรับ vouchers เหล่านี้
      const voucherIds = allVouchers.map((v: any) => v.id);
      const vouchersUsers = voucherIds.length > 0 ? await directus.request(
        readItems("vouchers_users", {
          fields: ["*"],
          filter: {
            voucher_id: { _in: voucherIds }
          }
        })
      ) : [];

      // คำนวณสถิติ
      const totalVouchers = allVouchers.length;
      const activeVouchers = allVouchers.filter(v =>
        v.status === 'published' &&
        (!v.end_date || new Date(v.end_date) > new Date())
      ).length;
      const usedVouchers = vouchersUsers.filter(vu => vu.used_date).length;
      const redemptionRate = totalVouchers > 0
        ? Math.round((usedVouchers / totalVouchers) * 100)
        : 0;

      const stats = {
        total: totalVouchers,
        active: activeVouchers,
        used: usedVouchers,
        redemptionRate
      };

      // Sort vouchers by date_created desc
      const sortedVouchers = allVouchers.sort((a, b) =>
        new Date(b.date_created).getTime() - new Date(a.date_created).getTime()
      );

      return c.json({
        stats,
        recentVouchers: sortedVouchers.slice(0, 10)
      });
    } catch (error) {
      console.error("Dashboard error:", error);
      return c.json({
        error: "Failed to fetch dashboard data",
        stats: { total: 0, active: 0, used: 0, redemptionRate: 0 },
        recentVouchers: []
      }, 500);
    }
  }
);
