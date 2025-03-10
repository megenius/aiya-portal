import { createItem, readItems } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const createLeadSubmission = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const data = await c.req.json();
    const directus = c.get("directAdmin");
    const result = await directus.request(createItem("lead_submissions", data));
    return c.json(result, 201);
  }
);

export const getLeadSubmissions = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const result = await directus.request(readItems("lead_submissions"));
    return c.json(result, 200);
  }
);
