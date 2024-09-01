// File: src/routes/items.ts
import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import {
  readItems,
  createItem,
  updateItem,
  deleteItem,
  readItem,
  deleteItems,
} from "@directus/sdk";
import { Env } from "@repo/shared";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { cache } from "hono/cache";
import { Channel, Workspace } from "~/@types/app";
import { knowledgesRoutes } from "./knowledges";

const botsRoutes = new Hono<Env>()
  .get(
    "/:id",
    cache({
      cacheName: "my-app",
      cacheControl: "max-age=15",
    }),
    async (c) => {
      try {
        const id = c.req.param("id");
        const directus = getDirectusClient();
        await directus.setToken(c.get("token"));
        const item = await directus.request(readItem("bots", id));
        return c.json(item);
      } catch (error) {
        throw DirectusError.fromDirectusResponse(error);
      }
    }
  )
  .post("/:id/logs", async (c) => {
    try {
      const id = c.req.param("id") as string;
      const data = await c.req.json();
      console.log(data);

      return c.json(data);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:id/channels", async (c) => {
    try {
      const id = c.req.param("id");
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));

      const item = await directus.request<{
        team: { channels: Array<Partial<Channel>> };
        channels: Array<{
          id: number;
          channel_id: Partial<Channel>;
        }>;
      }>(
        readItem("bots", id, {
          fields: [
            {
              // @ts-ignore
              channels: [
                "id",
                {
                  channel_id: ["id", "name", "logo", "provider_id", "platform"],
                },
              ],
            },
            {
              // @ts-ignore
              "team.channels": [
                "id",
                "name",
                "logo",
                "provider_id",
                "platform",
              ],
            },
          ],
        })
      );

      const active = item.channels
        .map((channel) => {
          return {
            _id: channel.id,
            ...channel.channel_id,
          };
        })
        .sort((a, b) => a.name?.localeCompare(b.name as string) || 0);
      const inactive = item.team.channels
        .filter(
          (channel) =>
            !active.some((activeChannel) => activeChannel.id === channel.id)
        )
        .sort((a, b) => a.name?.localeCompare(b.name as string) || 0);

      return c.json([...active, ...inactive]);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .delete("/:id/channels", async (c) => {
    try {
      const id = c.req.param("id");
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));

      const { bot_id, channel_id } = await c.req.json();

      // @ts-ignore
      const channels = item.channels.map((channel) => channel.channel_id);
      return c.json(channels);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:id/knowledges", async (c) => {
    try {
      const id = c.req.param("id") as string;
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const item = await directus.request(
        readItems("bots_knowledges", {
          fields: ["id", "name", "total_intent"],
          filter: { bot: id },
        })
      );
      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  });

export { botsRoutes };
