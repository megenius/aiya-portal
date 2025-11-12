import { Hono } from "hono";
import { z } from "zod";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { getDirectusClient } from "~/config/directus";
import { readItem } from "@directus/sdk";
import { endOfDay, subDays, startOfDay, format } from "date-fns";
import { Env } from "~/types/hono.types";
import { encryptSHA256, Logger, LogLevel } from "@repo/shared/utils";
import { createFactory } from "hono/factory";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { logger as honoLogger } from "hono/logger";
import exchangeToken from "./facebook/exchangeToken";

const logger = new Logger("facebook", LogLevel.DEBUG);

const factory = createFactory<Env>();

// Middleware for CSRF protection
// app.use('*', csrf());

// Body schema validation
const bodySchema = z.object({
  code: z.string().optional(),
  shortLivedToken: z.string().optional(),
  // csrfToken: z.string().min(1),
});

export const getExchangeToken = factory.createHandlers(
  honoLogger(),
  async (c) => {
    try {
      // Parse and validate the request body
      const body = await c.req.json();

      console.log("body", body);

      const { code, shortLivedToken } = await bodySchema.parseAsync(body);

      const data = await exchangeToken({
        env: c.env,
        code,
        shortLivedToken,
      }) as any;

      console.debug("Exchanged token", data);

      if ("error" in data) {
        return c.json({ error: data.error.message }, 400);
      }

      return c.json({
        code,
        accessToken: data.access_token,
        expiresIn: data.expires_in,
      });
    } catch (error) {
      console.error(error);
    }
  }
);

export const subscribe = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const { channelId } = await c.req.json();
      const directus = c.get("directus");

      const { FB_API_URL } = c.env;
      const { provider_id, provider_access_token } = await directus.request(
        readItem("channels", channelId, {
          fields: ["provider_id", "provider_access_token"],
        })
      );

      // Validate credentials
      if (!provider_id || !provider_access_token) {
        logger.error("Missing Facebook credentials", { channelId });
        return c.json({
          error: "Missing Facebook credentials (provider_id or access_token)",
          success: false
        }, 400);
      }

      const subscribeApp = async () => {
        const subscribed_fields = [
          "messages",
          "messaging_postbacks",
          "messaging_optins",
          "messaging_optouts",
          "message_deliveries",
          "message_reads",
          "messaging_referrals",
          "messaging_handovers",
          "feed",
          "inbox_labels",
          // "leadgen",
          // new
          "message_echoes",
          "message_context",
        ];
        const fbURL = `${FB_API_URL}/${provider_id}/subscribed_apps`;
        const response = await fetch(fbURL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${provider_access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            subscribed_fields: subscribed_fields.join(","),
          }),
        });

        if (!response.ok) {
          const errorData = await response.json() as any;
          logger.error("Facebook subscription failed", {
            channelId,
            status: response.status,
            error: errorData
          });
          throw new Error(`Facebook API error: ${errorData.error?.message || response.statusText}`);
        }

        const data = await response.json() as any;

        // Verify subscription was successful
        if (data.error) {
          logger.error("Facebook subscription error", { channelId, error: data.error });
          throw new Error(data.error.message || "Failed to subscribe to Facebook webhooks");
        }

        logger.debug("Subscribed app", channelId);
        return data;
      };

      const setupGetStarted = async () => {
        const fbURL = `${FB_API_URL}/me/messenger_profile`;
        const response = await fetch(fbURL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${provider_access_token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            get_started: {
              payload: "GET_STARTED",
            },
          }),
        });

        if (!response.ok) {
          const errorData = await response.json() as any;
          logger.warn("Get Started button setup failed", {
            channelId,
            status: response.status,
            error: errorData
          });
          // Don't throw - this is not critical, main subscription is more important
          return { success: false, error: errorData };
        }

        const data = await response.json() as any;
        logger.debug("Setup get started", channelId);
        return data;
      };

      const data = await Promise.all([subscribeApp(), setupGetStarted()]);

      return c.json({
        success: true,
        subscription: data[0],
        getStarted: data[1]
      });
    } catch (error) {
      logger.error("Subscribe handler error", error);
      return c.json({
        error: error instanceof Error ? error.message : "Unknown error occurred",
        success: false
      }, 500);
    }
  }
);

export const unsubscribe = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    try {
      const { channelId } = await c.req.json();
      const directus = c.get("directus");
      const { FB_API_URL } = c.env;

      const { provider_id, provider_access_token } = await directus.request(
        readItem("channels", channelId, {
          fields: ["provider_id", "provider_access_token"],
        })
      );

      // Validate credentials
      if (!provider_id || !provider_access_token) {
        logger.error("Missing Facebook credentials", { channelId });
        return c.json({
          error: "Missing Facebook credentials (provider_id or access_token)",
          success: false
        }, 400);
      }

      const fbURL = `${FB_API_URL}/${provider_id}/subscribed_apps`;
      const response = await fetch(fbURL, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${provider_access_token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json() as any;
        logger.error("Facebook unsubscribe failed", {
          channelId,
          status: response.status,
          error: errorData
        });
        throw new Error(`Facebook API error: ${errorData.error?.message || response.statusText}`);
      }

      const data = await response.json() as any;

      // Verify unsubscribe was successful
      if (data.error) {
        logger.error("Facebook unsubscribe error", { channelId, error: data.error });
        throw new Error(data.error.message || "Failed to unsubscribe from Facebook webhooks");
      }

      logger.debug("Unsubscribed app", channelId);
      return c.json({
        success: true,
        data
      });
    } catch (error) {
      logger.error("Unsubscribe handler error", error);
      return c.json({
        error: error instanceof Error ? error.message : "Unknown error occurred",
        success: false
      }, 500);
    }
  }
);

export const getCampaigns = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const { FB_API_URL } = c.env;
    const fbURL = `${FB_API_URL}/me/adaccounts?limit=100&fields=name,business,id,account_status,disable_reason,created_time,currency,timezone_name,timezone_offset_hours_utc,customconversions`;
    const response = await fetch(fbURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer`,
      },
    });

    const data = await response.json();
    return c.json(data);
  }
);
