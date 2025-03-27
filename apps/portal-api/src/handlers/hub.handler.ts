import { createItem, readItem, readItems } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger as honoLogger } from "hono/logger";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const getHub = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const hubId = c.req.param("id");
      const hubData = await directus.request<{
        id: string;
        name: string;
        team: string;
        channels: {
          channels_id: {
            name: string;
            provider_id: string;
          };
        }[];
      }>(
        readItem("chat_hubs", hubId, {
          fields: [
            "id",
            "name",
            "team",
            "channels.channels_id.name",
            "channels.channels_id.provider_id",
          ],
        })
      );

      const channels = hubData.channels.map((channel) => ({
        name: channel.channels_id.name,
        providerId: channel.channels_id.provider_id,
      }));

      return c.json({ ...hubData, channels }, 200);
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
      const newHub = await directus.request(createItem("chat_hubs", body));
      return c.json(newHub, 201);
    } catch (error) {
      console.error(error);
      return c.json({ error: "Failed to create hub" }, 400);
    }
  }
);

export const updateHub = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const hubId = c.req.param("id");
      const body = await c.req.json();
      const updatedHub = await directus.request(
        createItem("chat_hubs", { ...body, id: hubId })
      );
      return c.json(updatedHub);
    } catch (error) {
      console.error(error);
      return c.json({ error: "Failed to update hub" }, 400);
    }
  }
);

export const deleteHub = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const directus = c.get("directus");
      const hubId = c.req.param("id");
      await directus.request(createItem("chat_hubs", { id: hubId }));
      return c.json({ message: "Hub deleted successfully" });
    } catch (error) {
      console.error(error);
      return c.json({ error: "Failed to delete hub" }, 400);
    }
  }
);
