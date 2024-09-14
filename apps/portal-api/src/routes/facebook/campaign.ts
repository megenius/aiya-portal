import { Hono } from "hono";
import { z } from "zod";
import { env } from "hono/adapter";
import { csrf } from "hono/csrf";
import { encryptSHA256, Logger, LogLevel } from "@repo/shared/utils";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { getDirectusClient } from "~/config/directus";
import { readItem } from "@directus/sdk";
import { endOfDay, subDays, startOfDay, format } from "date-fns";
import { Env } from "~/@types/hono.types";

const logger = new Logger("facebook.campaign", LogLevel.DEBUG);

const campaignRoutes = new Hono<Env>()
  .get("/", async (c) => {
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
  })


export { campaignRoutes };
