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
            }
          },
          fields: [
            "*", {
              "vouchers": ["*", { translations: ["*"] }]
            }
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

    // map vouchers have translations
    if (page?.vouchers) {
      page.vouchers = page.vouchers.map((voucher) => {
        const translations = voucher.translations;
        const langTranslation = _.find(translations, { languages_code: lang });
        return {
          ..._.omit(voucher, "translations"),
          ...langTranslation
        };
      });
    }


      

    return c.json(page);
  }
);
