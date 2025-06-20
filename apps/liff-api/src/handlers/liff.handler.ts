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
            { vouchers: ["*", {voucher_brand_id:["*"]}, { translations: ["*"] }] },
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
                  vouchers_id: ["*", {voucher_brand_id:["*"]}, { translations: ["*"] }],
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
      page.populars = page.populars.map((popular) => {
        const translations = popular.vouchers_id.translations;
        const langTranslation = _.find(translations, { languages_code: lang });
        return {
          ..._.omit(popular.vouchers_id, "translations"),
          ...langTranslation,
        };
      });
    }

    // map vouchers have translations
    if (page?.vouchers) {
      page.vouchers = page.vouchers.map((voucher) => {
        const translations = voucher.translations;
        const langTranslation = _.find(translations, { languages_code: lang });
        return {
          ..._.omit(voucher, "translations"),
          ...langTranslation,
        };
      });
    }

    return c.json(page);
  }
);
