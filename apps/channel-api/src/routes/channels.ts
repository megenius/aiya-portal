// File: src/routes/items.ts
import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import {
  readItems,
  createItem,
  updateItem,
  deleteItem,
  readItem,
} from "@directus/sdk";
import { Env } from "@repo/shared";
import * as _ from "lodash";
import { DirectusError } from "@repo/shared/exceptions/directus";

const channelsRoutes = new Hono<Env>().get("/:providerId", async (c) => {
  try {
    const providerId = c.req.param("providerId");
    const directus = getDirectusClient();
    await directus.setToken(c.get("token"));
    const items = await directus.request(
      readItems("channels", {
        fields: [
          "*",
          // @ts-ignore
          "bots.bot_id.*",
        ],
        filter: {
          provider_id: {
            _eq: providerId,
          },
        },
      })
    );

    // console.log(items);

    if (items.length > 0) {
      const bots = items[0].bots?.map((bot) => bot.bot_id);
      const channel = _.omit(items[0], "bots");
      const response = {
        ...channel,
        bots,
      };
      return c.json(response);
    }
    return c.json({ message: `Not found: ${providerId}` }, 404);
  } catch (error) {
    throw DirectusError.fromDirectusResponse(error);
  }
});

export { channelsRoutes };
