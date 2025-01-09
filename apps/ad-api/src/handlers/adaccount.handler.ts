import { Context } from "hono";
import { getDirectusClient } from "../config/directus";
import { readItems, readItem } from "@directus/sdk";
import * as _ from "lodash";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { Env } from "~/@types/hono.types";
import { AdDataExtractor, CampaignDataExtractor } from "~/utils/Extractor";
import { AdAccountApi, AdApi, AdSetApi } from "~/utils/facebook-api";
import { AdInsight, DialyRevenueSpend } from "~/types/ads.types";

export const getAdAccount = async (c: Context<Env>) => {
  const ad = c.get("ad_account");
  return c.json(ad);
};

export const getInsights = async (c: Context<Env>) => {
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
};

export const getDailySpend = async (c: Context<Env>) => {
  try {
    const date_preset = c.req.query("date_preset") || "last_28d";
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

    const { data } = await response.json<{ data: DialyRevenueSpend[] }>();

    return c.json(
      data.map((item) => ({
        date: item.date_start,
        spend: item.spend,
        revenue:
          item.action_values?.find((a) => a.action_type === "omni_purchase")
            ?.value || 0,
      }))
    );
  } catch (error) {
    throw DirectusError.fromDirectusResponse(error);
  }
};

export const getPerformanceCampaigns = async (c: Context<Env>) => {
  try {
    const date_preset = c.req.query("date_preset") || "last_28d";
    const debug = c.req.query("debug") === "true";
    const FB_API_URL = c.env["FB_API_URL"];
    const adAccount = c.get("ad_account");

    const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/campaigns`);
    url.searchParams.append("fields", "name,insights{spend,action_values}");
    url.searchParams.append("date_preset", date_preset);
    url.searchParams.append("limit", "100");

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
};

export const getPerformanceCampaignsTop10 = async (c: Context<Env>) => {
  try {
    const date_preset = c.req.query("date_preset") || "last_28d";
    const debug = c.req.query("debug") === "true";
    const FB_API_URL = c.env["FB_API_URL"];
    const adAccount = c.get("ad_account");

    console.log("FB_API_URL", FB_API_URL);
    
    const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/campaigns`);
    url.searchParams.append(
      "fields",
      "name,status,insights{spend,impressions,clicks,cpc,cpm,cpp,ctr,reach,conversions,conversion_values,purchase_roas,actions,action_values}"
    );
    url.searchParams.append("date_preset", date_preset);
    url.searchParams.append("limit", "100");

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

    const res = await response.json<{
      data: Array<{
        id: string;
        name: string;
        status: string;
        start_time: string;
        insights: {
          data: AdInsight[];
        };
      }>;
      paging: { cursors: { after: string; before: string }; next: string };
    }>();

    const data = res.data.map((item) => {
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
        insight.purchase_roas?.find((a) => a.action_type === "omni_purchase")
          ?.value || 0;
      const purchase =
        insight.actions?.find((a) => a.action_type === "omni_purchase")
          ?.value || 0;
      const purchase_value =
        insight.action_values?.find((a) => a.action_type === "omni_purchase")
          ?.value || 0;

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
    });

    return c.json(data.sort((a, b) => b.roas - a.roas).slice(0, 10));
  } catch (error) {
    throw DirectusError.fromDirectusResponse(error);
  }
};

export const getCampaignPerformance = async (c: Context<Env>) => {
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
};

export const getPerformanceAdsTop10 = async (c: Context<Env>) => {
  const debug = c.req.query("debug") === "true";
  const FB_API_URL = c.env["FB_API_URL"];
  const adAccount = c.get("ad_account");
  const { limit, after, q } = c.req.query();

  const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/insights`);
  url.searchParams.append(
    "fields",
    "ad_name,campaign_name,spend,impressions,cpc,cpm,cpp,ctr,action_values,cost_per_action_type,cost_per_thruplay"
  );
  url.searchParams.append("level", "ad");
  url.searchParams.append("sort", "impressions_descending");
  if (limit) {
    url.searchParams.append("limit", limit);
  }

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

  const { data: _data, paging } = await response.json<{
    data: Array<{
      ad_name: string;
      campaign_name: string;
      spend: string;
      impressions: string;
      cpc: string;
      cpm: string;
      cpp: string;
      ctr: string;
      action_values: any;
      cost_per_action_type: any;
      cost_per_thruplay: string;
    }>;
    paging: { cursors: { after: string; before: string }; next: string };
  }>();

  const data = _data.map((item) => ({
    ad_name: item.ad_name,
    campaign_name: item.campaign_name,
    spend: item.spend,
    impressions: item.impressions,
    cpc: item.cpc,
    cpm: item.cpm,
    cpp: item.cpp,
    ctr: item.ctr,
    revenue: Number(
      item.action_values?.find((a: any) => a.action_type === "omni_purchase")
        ?.value
    ) || 0,
    // action_values: item.action_values,
    // cost_per_action_type: item.cost_per_action_type,
    // cost_per_thruplay: item.cost_per_thruplay,
  }));

  return c.json(data);
};

export const getAdAccountCampaignsDashboard = async (c: Context<Env>) => {
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
};

export const getAdCampaigns = async (c: Context<Env>) => {};

export const getAdSets = async (c: Context<Env>) => {};

export const getAdAds = async (c: Context<Env>) => {};
