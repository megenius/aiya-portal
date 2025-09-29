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
          ],
          deep: {
            vouchers: { limit: -1 },
            populars: { limit: -1 },
            banner_vouchers: { limit: -1 }
          }
        } as any)
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
    const pageId = Array.isArray(liff_page_id) ? liff_page_id[0] : liff_page_id;

    try {
      console.log("getDashboard called with liff_page_id:", pageId);
      let allVouchers: any[] = [];

      if (pageId) {
        // ดึง LIFF page พร้อม relations
        const liffPage = await directus.request(
          readItem("pages_liff", pageId, {
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
            ],
            deep: {
              vouchers: { limit: -1 },
              populars: { limit: -1 },
              banner_vouchers: { limit: -1 }
            }
          } as any)
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
        console.log("Found allVouchers for LIFF page:", allVouchers.length);
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
            sort: ["-date_created"],
            limit: -1
          } as any)
        );
      }

      // ดึง vouchers_users สำหรับ vouchers เหล่านี้ผ่าน vouchers_codes
      const voucherIds = allVouchers
        .map((v: any) => v.id)
        .filter((id: any) => id !== null && id !== undefined);

      console.log("Valid voucher IDs:", voucherIds.length);
      let vouchersUsers: any[] = [];
      let collectedFromCodes = 0;
      let usedFromCodes = 0;

      if (voucherIds.length > 0) {
        // ก่อนอื่นดึง vouchers_codes ที่เชื่อมกับ vouchers เหล่านี้
        let voucherCodes: any[] = [];
        try {
          voucherCodes = await directus.request(
            readItems("vouchers_codes", {
              fields: ["id", "code", "code_status"],
              filter: {
                voucher: { _in: voucherIds }
              },
              limit: -1
            })
          );
        } catch (error) {
          console.warn("Error fetching voucher codes in main dashboard:", error);
          voucherCodes = [];
        }

        const codeIds = voucherCodes
          .map((vc: any) => vc.id)
          .filter((id: any) => id !== null && id !== undefined && id !== '');

        console.log("Valid code IDs found:", codeIds.length, voucherCodes.slice(0, 5).map((vc: any) => vc.code));

        // นับจากสถานะของ codes โดยตรง เพื่อความแม่นยำกว่า vouchers_users
        collectedFromCodes = voucherCodes.filter((vc: any) =>
          ["collected", "used", "pending_confirmation"].includes(vc.code_status)
        ).length;
        usedFromCodes = voucherCodes.filter((vc: any) => vc.code_status === "used").length;

        // แล้วดึง vouchers_users ด้วยการแบ่ง codeIds เป็นชุดย่อย เพื่อหลีกเลี่ยงทั้ง 403 และ 431
        if (codeIds.length > 0) {
          const chunkSize = 200;
          const chunks: any[][] = [];
          for (let i = 0; i < codeIds.length; i += chunkSize) {
            chunks.push(codeIds.slice(i, i + chunkSize));
          }
          const agg: any[] = [];
          for (const chunk of chunks) {
            if (chunk.length === 0) continue;
            try {
              const part = await directus.request(
                readItems("vouchers_users", {
                  fields: [
                    "id",
                    "collected_date",
                    "used_date",
                    "collected_by",
                    { "collected_by": ["id"] },
                    "code"
                  ],
                  filter: { code: { _in: chunk } },
                  limit: -1
                } as any)
              );
              agg.push(...(Array.isArray(part) ? part : (part as any)?.data || []));
            } catch (chunkErr) {
              console.warn("Chunk vouchers_users fetch failed for size", chunk.length, chunkErr);
            }
          }
          vouchersUsers = agg;
          console.log("vouchers_users chunked fetch aggregated:", vouchersUsers.length, "from", chunks.length, "chunks");
        } else {
          console.log("No valid codes found, skipping vouchers_users query");
        }
      }

      console.log("vouchersUsers found:", vouchersUsers.length);

      // คำนวณสถิติพื้นฐาน
      const totalVouchers = allVouchers.length;
      const activeVouchers = allVouchers.filter(v =>
        v.status === 'published' &&
        (!v.end_date || new Date(v.end_date) > new Date())
      ).length;

      // สถิติหลักจากสถานะของ vouchers_codes (เสริมความแม่นยำ)
      const collectedVouchers = (typeof collectedFromCodes !== 'undefined') ? collectedFromCodes : 0;
      const usedVouchers = (typeof usedFromCodes !== 'undefined') ? usedFromCodes : 0;

      // Redemption Rate = Used / Collected (not total vouchers)
      const redemptionRate = collectedVouchers > 0
        ? Math.round((usedVouchers / collectedVouchers) * 100)
        : 0;

      // สถิติการเก็บ voucher (ใช้ค่าเดียวกับ collectedVouchers)
      const totalCollections = collectedVouchers;
      const collectorIds = vouchersUsers
        .filter((vu: any) => !!vu.collected_by)
        .map((vu: any) => (typeof vu.collected_by === 'object' && vu.collected_by !== null)
          ? vu.collected_by.id
          : vu.collected_by)
        .filter((id: any) => !!id);
      console.log("Collected entries with user:", collectorIds.length);
      const uniqueCollectors = new Set(collectorIds).size;

      // คำนวณ Collection Rate - ป้องกัน error ถ้าไม่มี voucher codes
      let totalAvailableCodes: any[] = [];
      try {
        if (voucherIds.length > 0) {
          totalAvailableCodes = await directus.request(
            readItems("vouchers_codes", {
              fields: ["id"],
              filter: {
                voucher: { _in: voucherIds },
                code_status: { _in: ["available", "collected", "used"] }
              },
              limit: -1
            })
          );
        }
      } catch (codesError) {
        console.warn("vouchers_codes query error:", codesError);
        totalAvailableCodes = [];
      }

      const collectionRate = totalAvailableCodes.length > 0
        ? Math.round((totalCollections / totalAvailableCodes.length) * 100)
        : 0;

      // สถิติการดู voucher - ป้องกัน error ถ้าตารางไม่มี
      let voucherViews: any[] = [];
      try {
        if (voucherIds.length > 0) {
          voucherViews = await directus.request(
            readItems("voucher_views", {
              fields: ["id", "user_id"],
              filter: {
                voucher_id: { _in: voucherIds }
              },
              limit: -1
            })
          );
        }
      } catch (viewError) {
        console.warn("voucher_views table not found or error:", viewError);
        voucherViews = [];
      }

      const totalViews = voucherViews.length;
      const uniqueViewers = new Set(voucherViews
        .filter(vv => vv.user_id)
        .map(vv => vv.user_id)
      ).size;

      const viewToCollectionRate = totalViews > 0
        ? Math.round((totalCollections / totalViews) * 100)
        : 0;

      // สถิติเวลา - Collection วันนี้และสัปดาห์นี้
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayCollections = vouchersUsers.filter(vu =>
        vu.collected_date && new Date(vu.collected_date) >= today
      ).length;

      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - today.getDay());
      const thisWeekCollections = vouchersUsers.filter(vu =>
        vu.collected_date && new Date(vu.collected_date) >= weekStart
      ).length;

      // คำนวณเวลาเฉลี่ยในการใช้ voucher (วัน)
      const usedVouchersWithDates = vouchersUsers.filter(vu =>
        vu.collected_date && vu.used_date
      );
      const avgTimeToRedemption = usedVouchersWithDates.length > 0
        ? Math.round(
            usedVouchersWithDates.reduce((sum, vu) => {
              const collectedTime = new Date(vu.collected_date!).getTime();
              const usedTime = new Date(vu.used_date!).getTime();
              return sum + (usedTime - collectedTime) / (1000 * 60 * 60 * 24); // Convert to days
            }, 0) / usedVouchersWithDates.length
          )
        : 0;

      const stats = {
        total: totalVouchers,
        active: activeVouchers,
        used: usedVouchers,
        redemptionRate,
        totalCollections,
        uniqueCollectors,
        collectionRate,
        totalViews,
        uniqueViewers,
        viewToCollectionRate,
        todayCollections,
        thisWeekCollections,
        avgTimeToRedemption
      };

      // Sort vouchers by date_created desc
      const sortedVouchers = allVouchers.sort((a, b) => {
        const bt = b?.date_created ? new Date(b.date_created).getTime() : 0;
        const at = a?.date_created ? new Date(a.date_created).getTime() : 0;
        return bt - at;
      });

      return c.json({
        stats,
        recentVouchers: sortedVouchers.slice(0, 10)
      });
    } catch (error) {
      console.error("Dashboard error:", error);
      return c.json({
        error: "Failed to fetch dashboard data",
        stats: {
          total: 0,
          active: 0,
          used: 0,
          redemptionRate: 0,
          totalCollections: 0,
          uniqueCollectors: 0,
          collectionRate: 0,
          totalViews: 0,
          uniqueViewers: 0,
          viewToCollectionRate: 0,
          todayCollections: 0,
          thisWeekCollections: 0,
          avgTimeToRedemption: 0
        },
        recentVouchers: []
      }, 500);
    }
  }
);

// getDashboardQuick - สำหรับข้อมูลที่โหลดเร็ว (สถิติพื้นฐาน)
export const getDashboardQuick = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { liff_page_id } = c.req.query();

    try {
      console.log("getDashboardQuick called with liff_page_id:", liff_page_id);

      let basicStats = {
        total: 0,
        active: 0,
        totalCollections: 0,
        todayCollections: 0
      };

      if (liff_page_id) {
        // ดึงเฉพาะข้อมูลพื้นฐานที่เร็ว
        const liffPage = await directus.request(
          readItem("pages_liff", liff_page_id, {
            fields: [
              "id",
              "name",
              {
                vouchers: [
                  {
                    "vouchers_id": ["id", "status", "end_date"]
                  }
                ]
              }
            ]
          } as any)
        );

        const vouchers = ((liffPage as any).vouchers || []).map((v: any) => v.vouchers_id).filter(Boolean);
        console.log("Found vouchers:", vouchers.length);

        basicStats.total = vouchers.length;
        basicStats.active = vouchers.filter((v: any) =>
          v.status === 'published' &&
          (!v.end_date || new Date(v.end_date) > new Date())
        ).length;

        console.log("Basic stats calculated:", basicStats);

        // ดึงเฉพาะ collections วันนี้
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (vouchers.length > 0) {
          const voucherIds = vouchers
            .map((v: any) => v.id)
            .filter((id: any) => id !== null && id !== undefined);

          console.log("Valid voucher IDs in quick dashboard:", voucherIds.length);

          // ดึง vouchers_codes ที่เชื่อมกับ vouchers เหล่านี้
          let voucherCodes: any[] = [];
          if (voucherIds.length > 0) {
            try {
              voucherCodes = await directus.request(
                readItems("vouchers_codes", {
                  fields: ["id", "code"],
                  filter: {
                    voucher: { _in: voucherIds }
                  },
                  limit: -1
                })
              );
            } catch (error) {
              console.warn("Error fetching voucher codes in quick dashboard:", error);
              voucherCodes = [];
            }
          }

          const codeIds = voucherCodes
            .map((vc: any) => vc.id)
            .filter((id: any) => id !== null && id !== undefined && id !== '');

          console.log("Valid code IDs found in quick dashboard:", codeIds.length);

          if (codeIds.length > 0) {
            try {
              const todayCollectionsData = await directus.request(
                readItems("vouchers_users", {
                  fields: ["id"],
                  filter: {
                    code: { _in: codeIds },
                    collected_date: { _gte: today.toISOString() } as any
                  },
                  limit: -1
                })
              );
              basicStats.todayCollections = todayCollectionsData.length;
              console.log("Today collections found:", basicStats.todayCollections);
            } catch (error) {
              console.error("Error fetching today collections:", error);
              basicStats.todayCollections = 0;
            }
          } else {
            console.log("No valid code IDs for today collections query");
          }
        }
      }

      return c.json({
        quickStats: basicStats,
        isQuick: true
      });
    } catch (error) {
      console.error("Quick dashboard error:", error);
      return c.json({
        error: "Failed to fetch quick dashboard data",
        quickStats: {
          total: 0,
          active: 0,
          totalCollections: 0,
          todayCollections: 0
        },
        isQuick: true
      }, 500);
    }
  }
);

// getVoucherStats - ดึงสถิติเฉพาะ voucher หนึ่งตัว
export const getVoucherStats = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { id } = c.req.param();

    try {
      console.log("getVoucherStats called with voucher id:", id);

      // ดึงข้อมูล voucher พร้อม codes
      const voucher = await directus.request(
        readItem("vouchers", id, {
          fields: [
            "*",
            {
              codes: ["*"]
            }
          ]
        } as any)
      );

      if (!voucher) {
        return c.json({ error: "Voucher not found" }, 404);
      }

      // ดึง vouchers_codes สำหรับ voucher นี้ (เปลี่ยนแปลงตาม structure ใหม่)
      let voucherCodes: any[] = [];
      try {
        voucherCodes = await directus.request(
          readItems("vouchers_codes", {
            fields: ["id", "code", "code_status"],
            filter: {
              voucher: { _eq: id }
            }
          })
        );
      } catch (error) {
        console.warn("Error fetching voucher codes:", error);
        voucherCodes = [];
      }

      const codeIds = voucherCodes
        .map((vc: any) => vc.id)
        .filter((id: any) => id !== null && id !== undefined);

      console.log("Valid code IDs for voucher:", codeIds.length);

      // ดึง vouchers_users สำหรับ code IDs เหล่านี้ พร้อมข้อมูล user และ code reference
      let vouchersUsers: any[] = [];
      if (codeIds.length > 0) {
        try {
          vouchersUsers = await directus.request(
            readItems("vouchers_users", {
              fields: [
                "id",
                "code",
                "collected_date",
                "used_date",
                {
                  "collected_by": ["id", "display_name", "picture_url"]
                }
              ],
              filter: {
                code: { _in: codeIds }
              }
            } as any)
          );
        } catch (error) {
          console.warn("Error fetching vouchers_users for single voucher:", error);
          vouchersUsers = [];
        }
      }

      console.log("vouchers_users found for voucher:", vouchersUsers.length);

      // คำนวณสถิติ
      const totalCodes = codeIds.length;
      const collectedCodes = vouchersUsers.filter(vu => vu.collected_date).length;
      const usedCodes = vouchersUsers.filter(vu => vu.used_date).length;

      const collectionRate = totalCodes > 0
        ? Math.round((collectedCodes / totalCodes) * 100)
        : 0;

      const redemptionRate = collectedCodes > 0
        ? Math.round((usedCodes / collectedCodes) * 100)
        : 0;

      // สถิติเวลา
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const todayCollections = vouchersUsers.filter(vu =>
        vu.collected_date && new Date(vu.collected_date) >= today
      ).length;

      const weekStart = new Date(today);
      weekStart.setDate(today.getDate() - today.getDay());
      const thisWeekCollections = vouchersUsers.filter(vu =>
        vu.collected_date && new Date(vu.collected_date) >= weekStart
      ).length;

      // คำนวณเวลาเฉลี่ยในการใช้ voucher
      const usedVouchersWithDates = vouchersUsers.filter(vu =>
        vu.collected_date && vu.used_date
      );
      const avgTimeToRedemption = usedVouchersWithDates.length > 0
        ? Math.round(
            usedVouchersWithDates.reduce((sum, vu) => {
              const collectedTime = new Date(vu.collected_date!).getTime();
              const usedTime = new Date(vu.used_date!).getTime();
              return sum + (usedTime - collectedTime) / (1000 * 60 * 60 * 24);
            }, 0) / usedVouchersWithDates.length
          )
        : 0;

      // ดึง voucher views จาก user_events ที่เป็น voucher_click (เฉพาะ voucher นี้)
      let voucherViews: any[] = [];
      let totalViews = 0;
      let uniqueViewers = 0;
      let todayViews = 0;
      let thisWeekViews = 0;

      try {
        const getUserId = (u: any) => {
          if (!u) return undefined;
          if (typeof u === 'object') return u.id || String(u);
          return String(u);
        };

        try {
          // Strategy A: JSON path filter (may require permissions)
          const resA: any = await directus.request(
            readItems("user_events", {
              fields: ["id", "user", "date_created"],
              filter: {
                event_type: { _eq: "voucher_click" },
                "event_properties->voucher_id": { _eq: id }
              },
              limit: -1
            } as any)
          );
          voucherViews = Array.isArray(resA) ? resA : (resA?.data || []);
        } catch (errA) {
          console.warn("JSON-path filter not allowed, fallback to _contains", errA);
          try {
            // Strategy B: Substring contains filter on JSON text
            const resB: any = await directus.request(
              readItems("user_events", {
                fields: ["id", "user", "date_created"],
                filter: {
                  event_type: { _eq: "voucher_click" },
                  event_properties: { _contains: `\"voucher_id\":\"${id}\"` }
                },
                limit: -1
              } as any)
            );
            voucherViews = Array.isArray(resB) ? resB : (resB?.data || []);
          } catch (errB) {
            console.warn("_contains filter failed, fallback to JS filtering", errB);
            // Strategy C: Broad fetch and filter in JS (last resort)
            const resC: any = await directus.request(
              readItems("user_events", {
                fields: ["id", "user", "date_created", "event_properties"],
                filter: { event_type: { _eq: "voucher_click" } },
                limit: -1
              } as any)
            );
            const arrC = Array.isArray(resC) ? resC : (resC?.data || []);
            voucherViews = arrC.filter((event: any) => {
              if (!event?.event_properties) return false;
              try {
                const props = typeof event.event_properties === 'string'
                  ? JSON.parse(event.event_properties)
                  : event.event_properties;
                return props?.voucher_id === id;
              } catch { return false; }
            });
          }
        }

        totalViews = voucherViews.length;
        uniqueViewers = new Set(voucherViews.map(v => getUserId(v.user)).filter(Boolean)).size;

        // Views วันนี้
        todayViews = voucherViews.filter(v =>
          v.date_created && new Date(v.date_created) >= today
        ).length;

        // Views สัปดาห์นี้
        thisWeekViews = voucherViews.filter(v =>
          v.date_created && new Date(v.date_created) >= weekStart
        ).length;

        console.log("Voucher views found:", totalViews, "unique viewers:", uniqueViewers);

      } catch (error) {
        console.warn("Error fetching voucher views:", error);
      }

      // Top collectors with code details - แต่ละคนได้หนึ่งโค้ดเท่านั้น
      console.log("vouchersUsers sample for debugging:", vouchersUsers.slice(0, 3));

      const collectorData = vouchersUsers
        .filter(vu => vu.collected_date && vu.collected_by)
        .map(vu => {
          // Handle both string ID and populated object cases
          let userId, userInfo;

          if (typeof vu.collected_by === 'object' && vu.collected_by !== null) {
            userId = vu.collected_by.id || vu.collected_by;
            userInfo = vu.collected_by;
          } else {
            userId = vu.collected_by;
            userInfo = null;
          }

          if (!userId) return null; // Skip if no valid user ID

          // Find the corresponding voucher code และใช้ vouchers_codes.code
          const correspondingCode = voucherCodes.find((vc: any) => vc.id === vu.code);

          return {
            userId,
            display_name: userInfo?.display_name || `User ${String(userId).slice(-4)}`,
            picture_url: userInfo?.picture_url || null,
            codes: [{
              code: correspondingCode?.code || 'UNKNOWN', // ใช้ vouchers_codes.code
              status: correspondingCode?.code_status || 'unknown',
              collected_date: vu.collected_date,
              used_date: vu.used_date
            }]
          };
        })
        .filter(collector => collector !== null);

      console.log("Collector data:", collectorData.length, "unique collectors");

      const allCollectors = collectorData
        .sort((a: any, b: any) => {
          // เรียงตาม collected_date (ล่าสุดก่อน)
          const aDate = new Date(a.codes[0]?.collected_date || 0);
          const bDate = new Date(b.codes[0]?.collected_date || 0);
          return bDate.getTime() - aDate.getTime();
        });

      console.log("All collectors found:", allCollectors.length);

      const stats = {
        totalCodes,
        collectedCodes,
        usedCodes,
        collectionRate,
        redemptionRate,
        totalViews,
        uniqueViewers,
        todayViews,
        thisWeekViews,
        todayCollections,
        thisWeekCollections,
        avgTimeToRedemption,
        topCollectors: allCollectors // ส่งทั้งหมดแทน top 5
      };

      return c.json({
        voucher: {
          id: voucher.id,
          name: voucher.name,
          metadata: voucher.metadata,
          status: voucher.status,
          start_date: voucher.start_date,
          end_date: voucher.end_date,
          cover: voucher.cover
        },
        stats
      });

    } catch (error) {
      console.error("Voucher stats error:", error);
      return c.json({
        error: "Failed to fetch voucher statistics",
        stats: {
          totalCodes: 0,
          collectedCodes: 0,
          usedCodes: 0,
          collectionRate: 0,
          redemptionRate: 0,
          todayCollections: 0,
          thisWeekCollections: 0,
          avgTimeToRedemption: 0,
          topCollectors: []
        }
      }, 500);
    }
  }
);
