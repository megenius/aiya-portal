import { createItem, readItem, readItems } from "@directus/sdk";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { createFactory } from "hono/factory";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { Env } from "~/types/hono.types";
import { logger as honoLogger } from "hono/logger";

const factory = createFactory<Env>();

// -------- Create Inquiry --------
export const createInquiry = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const data = await c.req.json();
      const item = await directus.request(createItem("bots_inquiries", data));

      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
);
