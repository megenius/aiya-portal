import { readItems } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";

import { Env } from "~/types/hono.types";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { opensearchMiddleware } from "~/middlewares/opensearch.middleware";

const factory = createFactory<Env>();

// webhook ----------------------------------------------------------
export const webhookHandler = factory.createHandlers(
  logger(),
  directusMiddleware,
  opensearchMiddleware,
  async (c) => {
    const body = await c.req.json();
    console.log("webhookHandler", JSON.stringify(body, null, 2));
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

        await c.env.BillingService.fetch(
          `${c.env.PORTAL_URL}/api/billing/record`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${c.get("token")}`,
            },
            body: JSON.stringify({
              bot: payload.bot_id,
              type: payload.reply_type,
              count: 1,
            }),
          }
        );
      } else if (event_type === "bots_slips") {
        await opensearch.index(event_type, payload, crypto.randomUUID());

        await c.env.BillingService.fetch(
          `${c.env.PORTAL_URL}/api/billing/record`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${c.get("token")}`,
            },
            body: JSON.stringify({
              bot: payload.bot_id,
              type: "slip",
              count: 1,
            }),
          }
        );
        if (payload.metadata?.platform === "facebook") {
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
          }
        }
      } else if (event_type === "bots_orders") {
        await opensearch.index(event_type, payload, crypto.randomUUID());
        if (payload.metadata?.platform === "facebook") {
          // const {
          //   metadata: { provider_id, user_id },
          //   data: { transaction_details },
          // } = payload;
          // const channel = await getChannel(provider_id);
          // if (channel) {
          //   await c.env.CAPI_QUEUE.send({
          //     event: {
          //       event_name: "Purchase",
          //       event_time: Math.floor(Date.now() / 1000),
          //       action_source: "business_messaging",
          //       messaging_channel: "messenger",
          //       user_data: {
          //         page_id: provider_id,
          //         page_scoped_user_id: user_id,
          //       },
          //       custom_data: {
          //         currency: transaction_details.currency,
          //         value: transaction_details.amount,
          //       },
          //     },
          //     dataset: channel.dataset as string,
          //     botId: payload.metadata.bot_id as string,
          //     accessToken: channel.provider_access_token as string,
          //   });
          // }
        }
      } else {
        await opensearch.index(event_type, payload, crypto.randomUUID());
      }
    } catch (error) {
      console.error("webhookHandler", error);
    }
    return c.json({});
  }
);
