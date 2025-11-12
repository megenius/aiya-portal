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
      const mode = c.req.query("mode");
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
                { model: ["id", "max_input_tokens", "max_output_tokens", "provider"] },
                { datasources: ["*", { tables: ["*", { fields: ["*"] }] }] },
                { muted_users: ["uid"] },
                { orders: ["name", "template", "metadata"] },
                { documents: ["id", "language", "description", "text", "example_queries", "json_data"] },

              ],
            },
            // {
            //   // @ts-ignore
            //   "orderbots.orderbot_id": ["*"],
            // },
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
          orderbots: bots?.filter((b) => b.type === "orderbot"),
          bots: bots
            ?.filter((b) => b.type === "chatbot")
            .map((bot) => {
              return {
                ...bot,
                datasources:
                  bot?.datasources?.length > 0
                    ? transformData(bot?.datasources)
                    : [],
              };
            }),
          quota: {
            auto_reply: 1,
            smart_reply: 1,
            generative_reply: 1,
            check_slip: 1
          },
        };

        return c.json(response);
      }

      throw Error("Provider not found");
    } catch (error) {
      console.log("error", error);

      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

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
);

//line webhook endpoint

export const lineWebhookEndpoint = factory.createHandlers(
  directusMiddleware,
  async (c) => {
    try {
      const { channel_id, endpoint } = await c.req.json();

      console.log("lineWebhookEndpoint", channel_id, endpoint);

      // Validate input
      if (!channel_id || !endpoint) {
        console.error("Missing required parameters", { channel_id, endpoint });
        return c.json({
          error: "Missing required parameters (channel_id or endpoint)",
          success: false
        }, 400);
      }

      const directus = c.get("directus");
      const channel = await directus.request<Channel>(
        readItem("channels", channel_id)
      );

      console.log("channel", channel);

      // Validate channel credentials
      if (!channel.provider_access_token) {
        console.error("Missing LINE access token", { channel_id });
        return c.json({
          error: "Missing LINE channel access token",
          success: false
        }, 400);
      }

      const client = new MessagingApiClient({
        channelAccessToken: channel.provider_access_token as string,
      });

      // Get existing webhook endpoint
      const { endpoint: existEndpoint, active } = await client
        .getWebhookEndpoint()
        .catch((error) => {
          console.warn("Failed to get existing webhook endpoint", error);
          return { endpoint: null, active: false };
        });

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

      // Save existing external webhook for forwarding
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

      // Set new webhook endpoint
      const result = await client.setWebhookEndpoint({ endpoint });
      console.log("setWebhookEndpoint result", result);

      // Verify webhook was set successfully
      if (!result || typeof result !== 'object') {
        console.error("Invalid LINE API response", result);
        return c.json({
          error: "Failed to set LINE webhook - invalid API response",
          success: false
        }, 500);
      }

      // Get webhook endpoint to verify it was set
      const verification = await client.getWebhookEndpoint().catch(() => null);

      if (verification && verification.endpoint === endpoint) {
        console.log("Webhook endpoint verified successfully", { channel_id, endpoint });
        return c.json({
          success: true,
          result,
          verified: true,
          endpoint: verification.endpoint,
          active: verification.active
        });
      } else {
        console.warn("Webhook endpoint set but verification failed", {
          channel_id,
          expected: endpoint,
          actual: verification?.endpoint
        });
        return c.json({
          success: true,
          result,
          verified: false,
          warning: "Webhook was set but verification failed"
        });
      }
    } catch (error) {
      console.error("LINE webhook setup error", error);

      // Check if it's a LINE API error
      if (error && typeof error === 'object' && 'message' in error) {
        return c.json({
          error: error.message,
          success: false,
          details: error
        }, 500);
      }

      throw DirectusError.fromDirectusResponse(error);
    }
  }
);

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
