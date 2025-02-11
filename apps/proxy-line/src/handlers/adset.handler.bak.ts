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
  const { FB_API_URL } = c.env;
  const ad = c.get("ad_account");

  const adsetApi = new AdSetApi(
    ad.ad_account_id as string,
    ad.access_token as string,
    FB_API_URL
  );

  const response = await adsetApi.getAdSetInfo((adsets, totalFetched) => {
    console.log(`Fetched ${totalFetched} adsets`);
    return { adsets, totalFetched };
  });

  return c.json(response);
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
