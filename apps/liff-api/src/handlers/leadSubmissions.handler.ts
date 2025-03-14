import { createItem, readItems, updateItem } from "@directus/sdk";
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
    
    // Wait for 0.5 seconds
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Update status to "ready"
    await directus.request(updateItem("lead_submissions", result.id, { status: "ready" }));
    
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

export const updateLeadSubmission = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const data = await c.req.json();
    const directus = c.get("directAdmin");
    const result = await directus.request(updateItem("lead_submissions", data.id, data));
    return c.json(result, 200);
  }
);
