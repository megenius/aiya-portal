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
import { adMiddleware } from "~/middlewares/ads";
import { Env } from "~/@types/hono.types";
import { AdDataExtractor } from "~/utils/Extractor";
import { AdAccountApi, AdSetApi, CampaignApi } from "~/utils/facebook-api";

const adsRoutes = new Hono<Env>()
  .get("/:id", adMiddleware, async (c) => {
    const ad = c.get("ad");
    return c.json(ad);
  })
  .get("/:id/dashboard", adMiddleware, async (c) => {
    try {
      const debug = c.req.query("debug") === "true";
      const FB_API_URL = c.env["FB_API_URL"];
      const ad = c.get("ad");
      const extractor = await AdDataExtractor.fetchAndCreate(c, ad);
      const adsetApi = new AdAccountApi(
        ad.ad_account_id as string,
        ad.access_token as string,
        FB_API_URL
      );

      const ads_volume = await adsetApi.countTotalAds();

      if (debug) {
        return c.text(extractor.getSummary());
      }
      return c.json({ ...extractor.extractMetrics(), ads_volume });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  // .get("/:id/campaigns", adMiddleware, async (c) => {
  //   try {
  //     const debug = c.req.query("debug") === "true";
  //     const ad = c.get("ad");

  //     const FB_API_URL = c.env["FB_API_URL"];
  //     const startDate = c.req.query("startDate") || "2024-09-06";
  //     const endDate = c.req.query("endDate") || "2024-09-12";

  //     const url = new URL(`${FB_API_URL}/${ad.ad_account_id}/campaigns`);

  //     url.searchParams.append("fields", "id,name,spend,impressions,clicks");
  //     url.searchParams.append("date_preset", "last_7d");
  //     // Uncomment the following lines if you want to use custom date range
  //     // url.searchParams.append(
  //     //   "time_range",
  //     //   JSON.stringify({ since: startDate, until: endDate })
  //     // );
  //     url.searchParams.append("level", "account");

  //     const response = await fetch(url.toString(), {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${ad.access_token}`,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const { data } = await response.json();

  //     return c.json(data);
  //   } catch (error) {
  //     throw DirectusError.fromDirectusResponse(error);
  //   }
  // })
  .get("/:id/sync", adMiddleware, async (c) => {
    try {
      const ad = c.get("ad");
      console.log("Syncing ad", ad.id);

      await c.env.AD_ACCOUNT_SYNC.sendBatch([
        {
          body: {
            ad: {
              id: ad.id,
              ad_account_id: ad.ad_account_id,
              access_token: ad.access_token,
            },
            type: "campaigns",
          },
        },
        {
          body: {
            ad: {
              id: ad.id,
              ad_account_id: ad.ad_account_id,
              access_token: ad.access_token,
            },
            type: "adsets",
          },
        },
        {
          body: {
            ad: {
              id: ad.id,
              ad_account_id: ad.ad_account_id,
              access_token: ad.access_token,
            },
            type: "ads",
          },
        },
      ]);

      return c.json({});
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:id/ad-campaigns", adMiddleware, async (c) => {
    try {
      const directus = getDirectusClient();
      const ad = c.get("ad");

      const campaigns = await directus.request(
        readItems("ad_campaigns", {
          filter: { ad_account: { _eq: ad.id } },
        })
      );

      return c.json(campaigns);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .get("/:id/ad-sets", adMiddleware, async (c) => {
    try {
      const directus = getDirectusClient();
      const ad = c.get("ad");

      const api = new AdSetApi(
        ad.ad_account_id as string,
        ad.access_token as string,
        c.env["FB_API_URL"]
      );

      const adsets = await api.getAdSetInfo();

      return c.json(adsets);
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  });

export { adsRoutes };
