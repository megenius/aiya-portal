import {
  createItem,
  deleteItem,
  readItem,
  readItems,
  updateItem,
} from "@directus/sdk";
import { Context } from "hono";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import {
  Bot,
  BotIntent,
  BotKnowledge,
  Channel,
  ImageMessageResponse,
  TextMessageResponse,
  ResponseElementType,
} from "~/types/app";
import { Env } from "~/types/hono.types";
import { getDirectusClient } from "~/utils/directus";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { randomHexString } from "@repo/shared/utils";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { cachingMiddleware } from "~/middlewares/cache-get.middleware";
import { hasItemUpdated } from "~/utils/kv";
import { getKnowledge } from "~/services/knowledge.service";
import { textEmbeddingMiddleware } from "~/middlewares/text-embedding.middleware";
import { transformData } from "~/utils/datasource";
import { opensearchMiddleware } from "~/middlewares/opensearch.middleware";
import { sendEventToCapi } from "~/services/facebook.service";

const factory = createFactory<Env>();

// webhook ----------------------------------------------------------
export const webhookHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  opensearchMiddleware,
  async (c) => {
    const body = await c.req.json();
    console.log("webhookHandler", JSON.stringify(body, null, 2));
    let sendCapi = false;
    const opensearch = c.get("opensearch");
    const event_type = body.event_type;
    let payload = _.omit(body, ["event_type"]) as any;
    payload = { ...payload, created_at: new Date().toISOString() };

    const getChannel = async (providerId: string) => {
      const directus = c.get("directus");
      const items = await directus.request(
        readItems("channels", {
          fields: ["dataset", "provider_access_token"],
          filter: {
            provider_id: {
              _eq: providerId,
            },
          },
        })
      );

      if (items.length > 0) {
        return items[0];
      }

      return;
    };

    try {
      if (event_type === "bots_logs") {
        await opensearch.index(event_type, payload, crypto.randomUUID());
      } else if (event_type === "bots_slips") {
        await opensearch.index(event_type, payload, crypto.randomUUID());
        if (payload.metadata?.platform === "facebook") {
          sendCapi = true;
        }
      } else if (event_type === "bots_orders") {
        await opensearch.index(event_type, payload, crypto.randomUUID());
        if (payload.metadata?.platform === "facebook") {
          sendCapi = true;
        }
      } else {
        await opensearch.index(event_type, payload, crypto.randomUUID());
      }

      if (sendCapi) {
        const {
          metadata: { provider_id, user_id },
          data: { transaction_details },
        } = payload;
        const channel = await getChannel(provider_id);

        if (channel) {
          await c.env.CAPI_QUEUE.send({
            event: {
              event_name: "Purchase",
              event_time: Math.floor(Date.now() / 1000),
              action_source: "business_messaging",
              messaging_channel: "messenger",
              user_data: {
                page_id: provider_id,
                page_scoped_user_id: user_id,
              },
              custom_data: {
                currency: transaction_details.currency,
                value: transaction_details.amount,
              },
            },
            dataset: channel.dataset as string,
            botId: payload.metadata.bot_id as string,
            accessToken: channel.provider_access_token as string,
          });

          console.log("sendEventToCapi", "sent");
        } else {
          console.error("sendEventToCapi", "dataset not found");
        }
      }
    } catch (error) {
      console.error("webhookHandler", error);
    }
    return c.json({});
  }
);
