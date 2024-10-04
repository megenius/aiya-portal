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
    const directus = c.get("directAdmin");
    const page = await directus
      .request(
        readItems("pages_liff", {
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

    return c.json(page);
  }
);
