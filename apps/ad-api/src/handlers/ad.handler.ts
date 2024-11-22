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

export const getCampaignInsight = async (c: Context<Env>) => {
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

export const getCampaignsDashboard = async (c: Context<Env>) => {
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
