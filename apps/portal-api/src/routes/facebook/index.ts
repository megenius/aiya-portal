import { Hono } from "hono";
import { z } from "zod";
import { env } from "hono/adapter";
import { csrf } from "hono/csrf";
import { encryptSHA256, Logger, LogLevel } from "@repo/shared/utils";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { getDirectusClient } from "~/config/directus";
import { readItem } from "@directus/sdk";
import { endOfDay, subDays, startOfDay, format } from "date-fns";
import { campaignRoutes } from "./campaign";
import { Env } from "~/@types/hono.types";

const logger = new Logger("facebook", LogLevel.DEBUG);

// Middleware for CSRF protection
// app.use('*', csrf());

// Body schema validation
const bodySchema = z.object({
  code: z.string().optional(),
  shortLivedToken: z.string().optional(),
  // csrfToken: z.string().min(1),
});

const token =
  "EAALNNj7RlU8BO7POhI0X5Y0ZB6JLRARRFTVZBILOUzQqZCb3IFqtEIpZChmapZBN8r4hBqAPZBLAhhr4bxLDiStFYCEFbtX3MTpPlEXNVQN0lFhjpTNvN5ThyyUBqI9ajq0wYohtXLXmHJRG9TImMElSGSfYlKJo4l3WQ8d6x1qJ9nsiRdl2evGx62";

const facebookRoutes = new Hono<Env>()
  .post("/exchange-token", async (c) => {
    try {
      // Parse and validate the request body
      const body = await c.req.json();

      const { code, shortLivedToken } = await bodySchema.parseAsync(body);

      // CSRF validation
      // if (c.get('csrf') !== csrfToken) {
      //   return c.json({ error: 'Invalid CSRF token' }, 403);
      // }

      const { FB_API_URL, FB_APP_ID, FB_APP_SECRET } = c.env;

      logger.debug("Request exchange", { appID: FB_APP_ID, code });

      let fbURL = `${FB_API_URL}/oauth/access_token?client_id=${FB_APP_ID}&client_secret=${FB_APP_SECRET}&code=${code}`;

      if (shortLivedToken) {
        fbURL = `${FB_API_URL}/oauth/access_token?grant_type=fb_exchange_token&client_id=${FB_APP_ID}&client_secret=${FB_APP_SECRET}&fb_exchange_token=${shortLivedToken}`;
      }

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
  })
  .get("/business", async (c) => {
    const { FB_API_URL } = c.env;
    const fbURL = `${FB_API_URL}/me/businesses?fields=id,name`;
    const response = await fetch(fbURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return c.json(data);
  })
  .get("/adaccounts", async (c) => {
    const { FB_API_URL } = c.env;
    const fbURL = `${FB_API_URL}/me/adaccounts?limit=100&fields=name,business,id,account_status,disable_reason,created_time,currency,timezone_name,timezone_offset_hours_utc,customconversions`;
    const response = await fetch(fbURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return c.json(data);
  })
  .post("/adaccounts/spend", async (c) => {
    const { FB_API_URL } = c.env;
    const { ids } = await c.req.json();

    const results = await Promise.all(
      ids.map(async (adAccountId: string) => {
        const fbURL = new URL(`${FB_API_URL}/${adAccountId}/insights`);
        // fbURL.searchParams.append(
        //   "time_range",
        //   JSON.stringify({ since: formattedStartDate, until: formattedEndDate })
        // );
        fbURL.searchParams.append("fields", "spend");
        fbURL.searchParams.append("level", "account");

        const response = await fetch(fbURL.toString(), {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }).then((res) => res.json());

        const data = response.data[0];

        return { id: adAccountId, ...data };
      })
    );

    return c.json(results.filter((r) => r.spend));
  })
  .get("/:pageId/*", async (c) => {
    const { FB_API_URL } = c.env;
    const fbURL = `${FB_API_URL}/${c.req.param("pageId")}`;
    const response = await fetch(fbURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    return c.json(data);
  })
  .post("/system-user-token", async (c) => {
    const { FB_API_URL } = c.env;
    // const fbURL = `${FB_API_URL}/824121811460009/system_user_access_tokens?scope=ads_management,ads_read`;
    const fbURL = `${FB_API_URL}/824121811460009`;
    console.log("c.env.FB_APP_SECRET", c.env.FB_APP_SECRET);

    const { access_token } = await c.req.json();
    const appsecret_proof = await encryptSHA256(
      access_token,
      c.env.FB_APP_SECRET
    );
    const response = await fetch(fbURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      // body: JSON.stringify({ appsecret_proof, access_token }),
    });

    const data = await response.json();
    return c.json(data);
  })
  .route("/campaigns", campaignRoutes);

export { facebookRoutes };

async function getLastMonthAdSpend(accessToken: string, adAccountId: string) {
  const today = new Date();
  const endDate = endOfDay(subDays(today, 1));
  const startDate = startOfDay(subDays(endDate, 29));

  // Format dates for the API
  const formattedStartDate = format(startDate, "yyyy-MM-dd");
  const formattedEndDate = format(endDate, "yyyy-MM-dd");

  // Construct the API URL with query parameters
  const url = new URL(
    `https://graph.facebook.com/v17.0/${adAccountId}/insights`
  );
  url.searchParams.append("access_token", accessToken);
  url.searchParams.append(
    "time_range",
    JSON.stringify({ since: formattedStartDate, until: formattedEndDate })
  );
  url.searchParams.append("fields", "spend");
  url.searchParams.append("level", "account");

  return fetch(url.toString()).then((res) => res.json());
}
