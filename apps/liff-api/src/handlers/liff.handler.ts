import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { readItem, readItems } from "@directus/sdk";

const factory = createFactory<Env>();

export const getByLiffIdAndSlug = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const lang = c.req.query("lang") || "en-US";
    const directus = c.get("directAdmin");
    const page = await directus
      .request(
        readItems("pages_liff", {
          deep: {
            vouchers: {
              translations: {
                _filter: {
                  languages_code: {
                    _eq: lang,
                  },
                },
              },
            },
            populars: {
              vouchers: {
                translations: {
                  _filter: {
                    languages_code: {
                      _eq: lang,
                    },
                  },
                },
              },
            },
          },
          fields: [
            "*",
            {
              vouchers: [
                "*",
                { voucher_brand_id: ["*"] },
                { translations: ["*"] },
              ],
            },
            // เอาข้อมูล brands ทั้งหมดมาโดยตรง
            {
              brands: [
                {
                  vouchers_brands_id: [
                    "id",
                    "name",
                    "logo",
                    "primaryColor",
                    "status",
                    "sort",
                    "metadata",
                  ],
                },
              ],
            },
            {
              populars: [
                {
                  vouchers_id: [
                    "*",
                    { voucher_brand_id: ["*"] },
                    { translations: ["*"] },
                  ],
                },
              ],
            },
          ],
          filter: {
            liff_id: {
              _eq: c.req.param("liffId"),
            },
            slug: {
              _eq: c.req.param("slug"),
            },
          },
        })
      )
      .then((data) => (data?.length ? data[0] : null));

    if (page?.brands) {
      page.brands = page.brands.map(
        ({ vouchers_brands_id }) => vouchers_brands_id
      );
    }

    // map populars have translations
    if (page?.populars) {
      page.populars = (page.populars || []).map((voucher) => {
        // หา translation ตามภาษาที่ต้องการ
        const langTrans = _.find(voucher.translations, {
          languages_code: lang,
        });

        // ถ้าเจอค่อย omit id กับ languages_code
        const cleanTrans = langTrans
          ? _.omit(langTrans, ["id", "languages_code"])
          : {};

        // สร้าง object ใหม่ โดยดึงเฉพาะฟิลด์ของ voucher (ไม่เอา translations) + ข้อมูล translation ที่ทำความสะอาดแล้ว
        return {
          ..._.omit(voucher, ["translations"]),
          ...cleanTrans,
        };
      });
    }

    // map vouchers have translations
    if (page?.vouchers) {
      page.vouchers = (page.vouchers || []).map((voucher) => {
        // หา translation ตามภาษาที่ต้องการ
        const langTrans = _.find(voucher.translations, {
          languages_code: lang,
        });

        // ถ้าเจอค่อย omit id กับ languages_code
        const cleanTrans = langTrans
          ? _.omit(langTrans, ["id", "languages_code"])
          : {};

        // สร้าง object ใหม่ โดยดึงเฉพาะฟิลด์ของ voucher (ไม่เอา translations) + ข้อมูล translation ที่ทำความสะอาดแล้ว
        return {
          ..._.omit(voucher, ["translations"]),
          ...cleanTrans,
        };
      });
    }

    return c.json(page);
  }
);
