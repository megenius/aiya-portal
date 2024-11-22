import { Context } from "hono";
import { getDirectusClient } from "../config/directus";
import { readItems, readItem } from "@directus/sdk";
import * as _ from "lodash";
import { DirectusError } from "@repo/shared/exceptions/directus";
import { Env } from "~/@types/hono.types";
import { AdDataExtractor, CampaignDataExtractor } from "~/utils/Extractor";
import { AdAccountApi, AdApi, AdSetApi } from "~/utils/facebook-api";
import { AdInsight, DialyRevenueSpend } from "~/types/ads.types";

export const getAds = async (c: Context<Env>) => {
  const date_preset = c.req.query("date_preset") || "last_28d";
  const debug = c.req.query("debug") === "true";
  const FB_API_URL = c.env["FB_API_URL"];
  const adAccount = c.get("ad_account");
  const { limit, after, q } = c.req.query();

  const url = new URL(`${FB_API_URL}/${adAccount.ad_account_id}/ads`);
  // url.searchParams.append("fields", "name,id,status,start_time");
  url.searchParams.append(
    "fields",
    "id,name,campaign_id,campaign{name},adset{name},adset_id,status,insights{spend,impressions,clicks,cpc,cpm,cpp,ctr,reach,conversions,conversion_values,purchase_roas,actions,action_values}"
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

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const { data: _data, paging } = await response.json<{
    data: Array<{
      id: string;
      name: string;
      status: string;
      start_time: string;
      campaign_id: string;
      adset_id: string;
      adset: { name: string };
      campaign: { name: string };
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
      status: item.status,
      start_time: item.start_time,
      campaign_id: item.campaign_id,
      campaign_name: item.campaign.name,
      adset_id: item.adset_id,
      adset_name: item.adset.name,
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

export const getAdsInsight = async (c: Context<Env>) => {
  const debug = c.req.query("debug") === "true";
  const FB_API_URL = c.env["FB_API_URL"];
  const adAccount = c.get("ad_account");
  const { adId } = c.req.param();
  const { limit, after, q } = c.req.query();

  const url = new URL(`${FB_API_URL}/${adId}`);
  // url.searchParams.append("fields", "name,id,status,start_time");
  url.searchParams.append(
    "fields",
    "id,name,campaign_id,campaign{name},adset{name},adset_id,status,insights{spend,impressions,clicks,cpc,cpm,cpp,ctr,reach,conversions,conversion_values,purchase_roas,actions,action_values}"
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

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  // const data = (await response.json()) as any;
  // return c.json(data);

  const item = await response.json<{
    id: string;
    name: string;
    status: string;
    start_time: string;
    campaign_id: string;
    adset_id: string;
    adset: { name: string };
    campaign: { name: string };
    insights: {
      data: AdInsight[];
    };
  }>();

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
    insight.actions?.find((a) => a.action_type === "omni_purchase")?.value || 0;
  const purchase_value =
    insight.action_values?.find((a) => a.action_type === "omni_purchase")
      ?.value || 0;

  return c.json({
    id: item.id,
    name: item.name,
    status: item.status,
    start_time: item.start_time,
    campaign_id: item.campaign_id,
    campaign_name: item.campaign.name,
    adset_id: item.adset_id,
    adset_name: item.adset.name,
    ..._.omit(insight, ["actions", "action_values", "purchase_roas"]),
    roas,
    purchase,
    purchase_value,
  });
};
