import { Hono } from "hono";
import { z } from "zod";
import { env } from "hono/adapter";
import { csrf } from "hono/csrf";
import { Env } from "~/types/hono.types";
import { Logger, LogLevel } from "@repo/shared/utils";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { getDirectusClient } from "~/config/directus";
import { readItem } from "@directus/sdk";

const logger = new Logger("facebook", LogLevel.DEBUG);

// Middleware for CSRF protection
// app.use('*', csrf());

// Body schema validation
const bodySchema = z.object({
  code: z.string().optional(),
  // shortLivedToken: z.string().optional(),
  // csrfToken: z.string().min(1),
});

const facebookRoutes = new Hono<Env>()
  .post("/exchange-token", async (c) => {
    try {
      // Parse and validate the request body
      const body = await c.req.json();
      const { code } = await bodySchema.parseAsync(body);

      // CSRF validation
      // if (c.get('csrf') !== csrfToken) {
      //   return c.json({ error: 'Invalid CSRF token' }, 403);
      // }

      const { FB_API_URL, FB_APP_ID, FB_APP_SECRET } = c.env;

      logger.debug("Request exchange", { appID: FB_APP_ID, code });

      const fbURL = `${FB_API_URL}/oauth/access_token?client_id=${FB_APP_ID}&client_secret=${FB_APP_SECRET}&code=${code}`;

      const response = await fetch(fbURL, {
        method: "GET",
      });

      const data = await response.json();
      console.log(data);

      if ("error" in data) {
        return c.json({ error: data.error.message }, 400);
      }

      return c.json({
        code,
        accessToken: data.access_token,
        expiresIn: data.expires_in,
      });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .post("/subscribe", async (c) => {
    const { channelId } = await c.req.json();
    const directus = getDirectusClient();
    await directus.setToken(c.get("token"));
    const { FB_API_URL } = c.env;
    const { provider_id, provider_access_token } = await directus.request(
      readItem("channels", channelId, {
        fields: ["provider_id", "provider_access_token"],
      })
    );

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
      ];
      const fbURL = `${FB_API_URL}/${provider_id}/subscribed_apps}`;
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
      const data = await response.json();
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
      const data = await response.json();
      logger.debug("Setup get started", channelId);
      return data;
    };

    const data = await Promise.all([subscribeApp(), setupGetStarted()]);

    return c.json(data);
  })
  .post("/unsubscribe", async (c) => {
    const { channelId } = await c.req.json();
    const directus = getDirectusClient();
    await directus.setToken(c.get("token"));
    const { FB_API_URL } = c.env;

    const { provider_id, provider_access_token } = await directus.request(
      readItem("channels", channelId, {
        fields: ["provider_id", "provider_access_token"],
      })
    );

    const fbURL = `${FB_API_URL}/${provider_id}/subscribed_apps`;
    const response = await fetch(fbURL, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${provider_access_token}`,
      },
    });

    const data = await response.json();
    logger.debug("Unsubscribed app", channelId);
    return c.json(data);
  });

export { facebookRoutes };
