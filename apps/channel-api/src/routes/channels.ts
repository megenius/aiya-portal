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
import * as _ from "lodash";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { Env } from "~/@types/hono.types";

import * as line from "@line/bot-sdk";
const { MessagingApiClient } = line.messagingApi;

const channelsRoutes = new Hono<Env>()
  .get("/:providerId", async (c) => {
    try {
      const providerId = c.req.param("providerId");
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const items = await directus.request(
        readItems("channels", {
          fields: [
            "*",
            {
              // @ts-ignore
              "bots.bot_id": [
                "*",
                { datasources: ["*", { tables: ["*", { fields: ["*"] }] }] },
              ],
            },
            {
              // @ts-ignore
              "orderbots.orderbot_id": ["*"],
            },
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
        const bots = items[0].bots
          ?.filter((bot) => !!bot.bot_id)
          .map((bot) => bot.bot_id);
        const orderbots = items[0].orderbots
          ?.filter((bot) => !!bot.orderbot_id)
          .map((bot) => bot.orderbot_id);
        const channel = _.omit(items[0], "bots");
        const response = {
          ...channel,
          orderbots,
          bots: bots?.map((bot) => {
            return {
              ...bot,
              datasources:
                bot?.datasources?.length > 0
                  ? transformData(bot?.datasources)
                  : [],
            };
          }),
        };
        return c.json(response);
      }
      return c.json({ message: `Not found: ${providerId}` }, 404);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .patch("/:providerId", async (c) => {
    try {
      const providerId = c.req.param("providerId");
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const item = await directus.request(
        updateItem("channels", providerId, c.req.json())
      );

      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .post("/line/webhook-endpoint", async (c) => {
    try {
      const { channel_id, endpoint } = await c.req.json();
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const channel = await directus.request(readItem("channels", channel_id));
      const client = new MessagingApiClient({
        channelAccessToken: channel.provider_access_token as string,
      });
      const result = await client.setWebhookEndpointWithHttpInfo({ endpoint });
      return c.json(result);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  });

export function transformData(inputData: any) {
  return inputData.map((item: any) => {
    const table = item.tables[0];
    if (table) {
      return {
        id: item.id,
        sheet_id: item.connection_string.split("/").pop(),
        sheet_name: table.name,
        table_name: table.name,
        table_schema: table.fields?.map((field: any) => ({
          example: field.example,
          field_name: field.name,
          field_type: field.map_type,
          is_noun: field.is_noun,
          description: field.description,
        })),
        example_queries: table.metadata?.example_queries,
        table_description: table.description,
        instructions: table.instructions,
      };
    }
    return {};
  });
}

export { channelsRoutes };
