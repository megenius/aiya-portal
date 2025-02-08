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
import { adMiddleware } from "~/middlewares/ads.middleware";
import { Env } from "~/@types/hono.types";
import { AdDataExtractor, CampaignDataExtractor } from "~/utils/Extractor";
import {
  AdAccountApi,
  AdApi,
  AdSetApi,
  CampaignApi,
} from "~/utils/facebook-api";

type DialyRevenueSpend = {
  spend: number;
  date_start: string;
  date_stop: string;
  action_values: { action_type: string; value: number }[];
};

type AdInsight = {
  spend: number;
  impressions: number;
  clicks: number;
  cpc: number;
  cpm: number;
  cpp: number;
  ctr: number;
  reach: number;
  conversions: number;
  conversion_values: number;
  purchase_roas: { action_type: string; value: number }[];
  actions: { action_type: string; value: number }[];
  action_values: { action_type: string; value: number }[];
};

const adsRoutes = new Hono<Env>()
  .get("/:id", adMiddleware, async (c) => {
    const ad = c.get("ad_account");
    return c.json(ad);
  })
  .get("/:id/dashboard", adMiddleware, async (c) => {
    try {
      const debug = c.req.query("debug") === "true";
      const FB_API_URL = c.env["FB_API_URL"];
      const ad = c.get("ad_account");
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
  .get("/:id/spend-daily", adMiddleware, async (c) => {
    try {
      const date_preset = c.req.query("date_preset") || "last_28d";
      const debug = c.req.query("debug") === "true";
      const FB_API_URL = c.env["FB_API_URL"];
      const adAccount = c.get("ad_account");

      const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/insights`);
      url.searchParams.append("fields", "spend,action_values");
      url.searchParams.append("date_preset", date_preset);
      url.searchParams.append("level", "account");
      url.searchParams.append("time_increment", "1");

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adAccount.access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data } = await response.json<{
        data: Array<{
          spend: number;
          date_start: string;
          date_stop: string;
          action_values: { action_type: string; value: number }[];
        }>;
      }>();

      return c.json(
        data.map((item) => {
          return {
            date: item.date_start,
            spend: item.spend,
            revenue:
              item.action_values?.find((a) => a.action_type === "omni_purchase")
                ?.value || 0,
          };
        })
      );
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })

  .get("/:id/campaigns/:campaignId/dashboard", adMiddleware, async (c) => {
    try {
      const debug = c.req.query("debug") === "true";
      const FB_API_URL = c.env["FB_API_URL"];
      const ad = c.get("ad_account");
      const campaignId = c.req.param("campaignId");
      const extractor = await CampaignDataExtractor.fetchAndCreate(
        c,
        { id: campaignId },
        ad.access_token as string
      );

      const api = new AdApi(campaignId, ad.access_token as string, FB_API_URL);

      const ads_volume = await api.countTotalAds();

      if (debug) {
        return c.text(extractor.getSummary());
      }
      return c.json({ ...extractor.extractMetrics(), ads_volume });
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })

  .get("/:id/campaigns/dashboard", adMiddleware, async (c) => {
    try {
      const date_preset = c.req.query("date_preset") || "last_28d";
      const debug = c.req.query("debug") === "true";
      const FB_API_URL = c.env["FB_API_URL"];
      const adAccount = c.get("ad_account");

      const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/campaigns`);
      url.searchParams.append(
        "fields",
        "name,insights{spend,action_values,frequency,reach,conversions,purchase_roas,cpc,cpm,cpp,ctr}"
      );
      url.searchParams.append("date_preset", date_preset);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adAccount.access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data } = await response.json<{
        data: Array<{
          id: string;
          name: string;
          insights: {
            data: Array<
              DialyRevenueSpend & {
                frequency: number;
                reach: number;
                conversions: number;
                purchase_roas: {
                  action_type: string;
                  value: number;
                }[];
                cpc: number;
                cpm: number;
                cpp: number;
                ctr: number;
              }
            >;
          };
        }>;
      }>();

      return c.json(
        data
          .map((item) => {
            return {
              id: item.id,
              name: item.name,
              spend: Number(_.sumBy(item.insights?.data, "spend")),
              revenue: Number(
                _.sumBy(
                  item.insights?.data.map((i) =>
                    i.action_values?.find(
                      (a) => a.action_type === "omni_purchase"
                    )
                  ),
                  "value"
                )
              ),
              reach: item.insights?.data[0].reach,
              frequency: item.insights?.data[0].frequency,
              cpc: item.insights?.data[0].cpc,
              cpm: item.insights?.data[0].cpm,
              cpp: item.insights?.data[0].cpp,
              ctr: item.insights?.data[0].ctr,
            };
          })
          .filter((item) => item.spend > 0)
      );
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })

  .get("/:id/campaigns/performance", adMiddleware, async (c) => {
    try {
      const date_preset = c.req.query("date_preset") || "last_28d";
      const debug = c.req.query("debug") === "true";
      const FB_API_URL = c.env["FB_API_URL"];
      const adAccount = c.get("ad_account");

      const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/campaigns`);
      url.searchParams.append("fields", "name,insights{spend,action_values}");
      url.searchParams.append("date_preset", date_preset);

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adAccount.access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data } = await response.json<{
        data: Array<{
          id: string;
          name: string;
          insights: {
            data: DialyRevenueSpend[];
          };
        }>;
      }>();

      return c.json(
        data
          .map((item) => {
            return {
              id: item.id,
              name: item.name,
              spend: Number(_.sumBy(item.insights?.data, "spend")),
              revenue: Number(
                _.sumBy(
                  item.insights?.data.map((i) =>
                    i.action_values?.find(
                      (a) => a.action_type === "omni_purchase"
                    )
                  ),
                  "value"
                )
              ),
            };
          })
          .filter((item) => item.spend > 0)
      );
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })

  .get("/:id/campaigns/activity", adMiddleware, async (c) => {
    try {
      const date_preset = c.req.query("date_preset") || "last_28d";
      const debug = c.req.query("debug") === "true";
      const FB_API_URL = c.env["FB_API_URL"];
      const adAccount = c.get("ad_account");

      const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/campaigns`);
      url.searchParams.append(
        "fields",
        "insights{spend,impressions,clicks,cpc,cpm,cpp,ctr,reach,conversions,conversion_values,purchase_roas,actions,action_values},name,id,status,start_time"
      );
      url.searchParams.append("date_preset", date_preset);
      // url.searchParams.append("limit", "10");

      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adAccount.access_token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const { data } = await response.json<{
        data: Array<{
          id: string;
          name: string;
          status: string;
          start_time: string;
          insights: {
            data: AdInsight[];
          };
        }>;
      }>();

      return c.json(
        data
          .map((item) => {
            const insight =
              item.insights?.data.length > 0
                ? item.insights?.data[0]
                : ({
                    spend: 0,
                    impressions: 0,
                    clicks: 0,
                    cpc: 0,
                    cpm: 0,
                    cpp: 0,
                    ctr: 0,
                    reach: 0,
                    conversions: 0,
                    conversion_values: 0,
                    purchase_roas: [],
                    actions: [],
                    action_values: [],
                  } as AdInsight);

            const roas =
              insight.purchase_roas?.find(
                (a) => a.action_type === "omni_purchase"
              )?.value || 0;
            const purchase =
              insight.actions?.find((a) => a.action_type === "omni_purchase")
                ?.value || 0;
            const purchase_value =
              insight.action_values?.find(
                (a) => a.action_type === "omni_purchase"
              )?.value || 0;

            return {
              id: item.id,
              name: item.name,
              status: item.status,
              start_time: item.start_time,
              ..._.omit(insight, ["actions", "action_values", "purchase_roas"]),
              roas,
              purchase,
              purchase_value,
            };
          })
          .filter((item) => item.spend > 0)
      );
    } catch (error) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  // .get("/:id/campaigns", adMiddleware, async (c) => {
  //   try {
  //     const debug = c.req.query("debug") === "true";
  //     const ad = c.get("ad_account");

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
      const ad = c.get("ad_account");
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
      const ad = c.get("ad_account");

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
      const ad = c.get("ad_account");

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
