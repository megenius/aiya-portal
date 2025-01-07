import { readItems } from "@directus/sdk";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { createFactory } from "hono/factory";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { Env } from "~/types/hono.types";
import { logger as honoLogger } from "hono/logger";

const factory = createFactory<Env>();

// -------- HelpDesk --------
// get helpdesk
export const getHelpDesk = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");

      const items = await directus.request(
        readItems("saas_helpdesk", {
          filter: {
            status: {
              _eq: "published",
            },
          },
        })
      );
      return c.json(items);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);
