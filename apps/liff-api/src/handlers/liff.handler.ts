import { readItems } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const getByLiffIdAndSlug = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const lang = c.req.query("lang") || "en-US";
    const directus = c.get("directAdmin");

    // const [page] = await directus.request(
    //       readItems("pages_liff", {
    //         filter: {
    //           liff_id: { _eq: c.req.param("liffId") },
    //           slug:    { _eq: c.req.param("slug")   },
    //         },
    //         fields: [
    //           "*",
    //           "vouchers.*",
    //           "populars.vouchers_id.*",
    //           "brands.vouchers_brands_id.*",
    //         ],
    //         locale: lang,   // <-- Directus จะ swap fields ให้เป็นภาษานั้นๆ ให้เอง
    //       })
    //     ).then((res) => res || []);

    //     if (!page) {
    //       return c.json({ error: "Not found" }, 404);
    //     }
    //     return c.json(page);

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
      page.populars = filterAndMapVouchers(
        page.populars,
        (popular) => popular.vouchers_id,
        lang
      );
    }

    // map vouchers have translations
    if (page?.vouchers) {
      page.vouchers = filterAndMapVouchers(
        page.vouchers,
        (voucher) => voucher,
        lang
      );
    }

    return c.json(page);
  }
);


function filterAndMapVouchers<T>(
  items: T[],
  getVoucher: (item: T) => any,
  lang: string
): any[] {
  return (items || [])
    .filter((item) => {
      const voucher = getVoucher(item);
      return (
        voucher?.codes?.length > 0 &&
        voucher?.end_date &&
        new Date(voucher.end_date) > new Date()
      );
    })
    .map((item) => {
      const voucher = getVoucher(item);
      const langTrans = _.find(voucher.translations, {
        languages_code: lang,
      });
      const cleanTrans = langTrans
        ? _.omit(langTrans, ["id", "languages_code"])
        : {};
      return {
        ..._.omit(voucher, ["translations"]),
        ...cleanTrans,
      };
    });
}
