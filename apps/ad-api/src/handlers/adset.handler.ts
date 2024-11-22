import { Context } from "hono";
import { getDirectusClient } from "../config/directus";
import { readItems, readItem } from "@directus/sdk";
import * as _ from "lodash";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { Env } from "~/@types/hono.types";
import { AdDataExtractor, CampaignDataExtractor } from "~/utils/Extractor";
import { AdAccountApi, AdApi, AdSetApi } from "~/utils/facebook-api";
import { AdInsight, DialyRevenueSpend } from "~/types/ads.types";

export const getAdsets = async (c: Context<Env>) => {
  const date_preset = c.req.query("date_preset") || "last_28d";
  const debug = c.req.query("debug") === "true";
  const FB_API_URL = c.env["FB_API_URL"];
  const adAccount = c.get("ad_account");
  const { limit, after, q } = c.req.query();

  const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/adsets`);
  // url.searchParams.append("fields", "name,id,status,start_time");
  url.searchParams.append(
    "fields",
    "name,campaign_id,campaign{name},bid_amount,bid_strategy,daily_budget,start_time,created_time,budget_remaining,lifetime_budget,insights{spend,impressions,clicks,cpc,cpm,cpp,ctr,reach,conversions,conversion_values,purchase_roas,actions,action_values}"
  );
  // url.searchParams.append("date_preset", date_preset);
  if (limit) {
    url.searchParams.append("limit", limit);
  }
  if (after) {
    url.searchParams.append("after", after);
  }
  if (q) {
    url.searchParams.append(
      "filtering",
      JSON.stringify([
        {
          field: "name",
          operator: "CONTAIN",
          value: q,
        },
      ])
    );
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${adAccount.access_token}`,
    },
  });
  // const tmp = await response.json();
  // return c.json({ tmp });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { data: _data, paging } = await response.json<{
    data: Array<{
      id: string;
      name: string;
      status: string;
      start_time: string;
      created_time: string;
      campaign_id: string;
      campaign: any;
      bid_amount: number;
      bid_strategy: string;
      daily_budget: number;
      budget_remaining: number;
      lifetime_budget: number;
      insights: {
        data: AdInsight[];
      };
    }>;
    paging: { cursors: { after: string; before: string }; next: string };
  }>();

  const data = _data.map((item) => {
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
      insight.actions?.find((a) => a.action_type === "omni_purchase")?.value ||
      0;
    const purchase_value =
      insight.action_values?.find((a) => a.action_type === "omni_purchase")
        ?.value || 0;

    return {
      id: item.id,
      name: item.name,
      campaign_id: item.campaign_id,
      campaign_name: item.campaign?.name,
      bid_amount: item.bid_amount,
      bid_strategy: item.bid_strategy,
      daily_budget: item.daily_budget,
      created_time: item.created_time,
      budget_remaining: item.budget_remaining,
      lifetime_budget: item.lifetime_budget,
      status: item.status,
      start_time: item.start_time,

      ..._.omit(insight, ["actions", "action_values", "purchase_roas"]),
      roas,
      purchase,
      purchase_value,
    };
  });
  // .filter((item) => item.spend > 0);

  return c.json({
    data,
    total: data.length,
    cursors: paging?.cursors,
  });
};

export const getInsight = async (c: Context<Env>) => {
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
