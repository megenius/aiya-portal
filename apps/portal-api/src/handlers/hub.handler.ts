import { createItem, readItems } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger as honoLogger } from "hono/logger";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const getHubData = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const hubData = await directus.request(readItems("chat_hubs"));
      return c.json(hubData);
    } catch (error) {
      console.error(error);
      return c.json({ error: "Failed to fetch hub data" }, 500);
    }
  }
);

export const insertHub = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const body = await c.req.json();
      const newHub = await directus.request(
        createItem("chat_hubs", body)
      );
      return c.json(newHub, 201);
    } catch (error) {
      console.error(error);
      return c.json({ error: "Failed to create hub" }, 400);
    }
  }
);
