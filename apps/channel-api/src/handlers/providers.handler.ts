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
import { Env } from "~/types/hono.types";

import * as line from "@line/bot-sdk";
import { Channel } from "~/@types/app";
import { createFactory } from "hono/factory";
import { directusMiddleware } from "~/middlewares/directus.middleware";
const { MessagingApiClient } = line.messagingApi;

const factory = createFactory<Env>();

export const getProvider = factory.createHandlers(
  directusMiddleware,
  async (c) => {
    try {
      const providerId = c.req.param("providerId");
      const directus = c.get("directus");
      const items = await directus.request(
        readItems("channels", {
          fields: [
            "*",
            {
              // @ts-ignore
              "bots.bot_id": [
                "*",
                { datasources: ["*", { tables: ["*", { fields: ["*"] }] }] },
                { muted_users: ["uid"] },
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
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
)

export const updateProvider = factory.createHandlers(
  directusMiddleware,
  async (c) => {
    try {
      const providerId = c.req.param("providerId");
      const directus = c.get("directus");
      const item = await directus.request(
        updateItem("channels", providerId, c.req.json())
      );

      return c.json(item);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
)

//line webhook endpoint

export const lineWebhookEndpoint = factory.createHandlers(
  directusMiddleware,
  async (c) => {
    try {
      const { channel_id, endpoint } = await c.req.json();
      const directus = c.get("directus");
      const channel = await directus.request<Channel>(
        readItem("channels", channel_id)
      );
      const client = new MessagingApiClient({
        channelAccessToken: channel.provider_access_token as string,
      });

      const { endpoint: existEndpoint, active } =
        await client.getWebhookEndpoint();

      const forward_urls = channel.forward_urls || [];
      const ignoreEndpoints = [
        ...forward_urls,
        "https://webhook-line.megenius.workers.dev/v1/line",
        "https://6upazw951k.execute-api.ap-southeast-1.amazonaws.com/prod",
        "https://beacon-webhook.aiya.ai",
        "https://4bjzpvprnd.execute-api.ap-southeast-1.amazonaws.com/prod",
        "https://webhook-dev.aiya.me/api/v2/line/webhook",
        "https://webhook.aiya.me/api/v2/line/webhook",
      ];

      if (existEndpoint && !ignoreEndpoints.includes(existEndpoint)) {
        const channel = await directus.request(
          updateItem("channels", channel_id, {
            forward_urls: _.uniqBy(
              [
                ...forward_urls,
                {
                  name: "External",
                  url: existEndpoint,
                  enabled: active,
                },
              ],
              "url"
            ),
          })
        );

        // await c.env.KV_PORTAL?.put(
        //   `channel.id=${channel_id}`,
        //   JSON.stringify(channel)
        // ).then(() => console.log("put kv - " + `channel.id=${channel_id}`));
      }

      const result = await client.setWebhookEndpoint({ endpoint });
      return c.json(result);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  }
)

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