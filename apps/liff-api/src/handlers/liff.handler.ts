import { readItems } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";
import { getLineChannelAccessToken } from "~/utils/line";
import { decryptWithSecret, encryptWithSecret } from "~/utils/secretHelper";

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
            banner_vouchers: {
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
              categories: [
                {
                  voucher_categories_id: ["*"],
                },
              ],
            },
            {
              campaigns: [
                {
                  campaigns_id: ["*"],
                },
              ],
            },
            {
              vouchers: [
                {
                  vouchers_id: [
                    "*",
                    {
                      categories: [{ voucher_categories_id: ["*"] }],
                    },
                    { voucher_brand_id: ["*"] },
                    { translations: ["*"] },
                  ],
                },
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
                    {
                      categories: [{ voucher_categories_id: ["*"] }],
                    },
                    { voucher_brand_id: ["*"] },
                    { translations: ["*"] },
                  ],
                },
              ],
            },
            {
              banner_vouchers: [
                {
                  vouchers_id: [
                    "*",
                    {
                      categories: [{ voucher_categories_id: ["*"] }],
                    },
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

    if (page?.categories) {
      page.categories = page.categories.map(
        ({ voucher_categories_id }) => voucher_categories_id
      );
    }

    // map campaigns
    if (page?.campaigns) {
      page.campaigns = page.campaigns.map(({ campaigns_id }) => campaigns_id);
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
        (voucher) => voucher.vouchers_id,
        lang
      );
    }

    // map banner vouchers have translations
    if (page?.banner_vouchers) {
      page.banner_vouchers = filterAndMapVouchers(
        page.banner_vouchers,
        (voucher) => voucher.vouchers_id,
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
        voucher?.hide_on_homepage !== true &&
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
      const rawCats = Array.isArray(voucher.categories)
        ? voucher.categories
        : [];
      const categories = rawCats
        .map((x: any) => x?.voucher_categories_id ?? x)
        .filter(Boolean);
      return {
        ..._.omit(voucher, ["translations", "categories"]),
        ...cleanTrans,
        categories,
      };
    });
}

export const encryptChannelSecret = factory.createHandlers(
  logger(),
  async (c) => {
    try {
      const { channel_secret } = await c.req.json();

      if (!channel_secret || typeof channel_secret !== "string") {
        return c.json({ error: "channel_secret is required" }, 400);
      }

      const { LIFF_SECRET_KEY } = c.env;
      if (!LIFF_SECRET_KEY) {
        return c.json(
          { error: "Server misconfiguration: LIFF_SECRET_KEY is missing" },
          500
        );
      }

      const encrypted = await encryptWithSecret(
        LIFF_SECRET_KEY,
        channel_secret
      );
      return c.json({ encrypted_secret: encrypted });
    } catch (err: any) {
      return c.json(
        {
          error: "Failed to encrypt channel_secret",
          detail: err?.message ?? String(err),
        },
        500
      );
    }
  }
);

export const requestChannelAccessToken = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    try {
      const { liff_id } = c.get("jwtPayload");
      const directus = c.get("directAdmin");

      // หา secret ciphertext จาก DB
      const pageLiff = await directus.request(
        readItems("pages_liff", {
          fields: ["liff_id", "liff_secret_ciphertext"],
          filter: { liff_id: { _eq: liff_id } },
          limit: 1,
        })
      );

      if (!pageLiff.length) {
        return c.json({ error: "Page liff not found" }, 404);
      }
      if (!pageLiff[0].liff_secret_ciphertext) {
        return c.json({ error: "Page liff secret not found" }, 404);
      }

      // decrypt client_secret
      const liffSecret = await decryptWithSecret(
        c.env.LIFF_SECRET_KEY,
        pageLiff[0].liff_secret_ciphertext
      );

      // ใช้ helper function
      const token = await getLineChannelAccessToken(liff_id, liffSecret);

      return c.json({ success: true, ...token });
    } catch (error: any) {
      console.error("Error getting channel access token:", error);
      return c.json(
        { error: "Something went wrong", detail: error?.message ?? error },
        500
      );
    }
  }
);
