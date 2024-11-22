import { Hono } from "hono";
import { Env } from "~/@types/hono.types";
import * as AdAccountHandler from "../handlers/adaccount.handler";

import { adMiddleware } from "~/middlewares/ads.middleware";
import { campaignsRoutes } from "./campaign.route";
import { adsetsRoutes } from "./adset.route";
import { adRoutes } from "./ad.route";

const adsRoutes = new Hono<Env>();

adsRoutes
  .get("/:id", adMiddleware, AdAccountHandler.getAdAccount)
  .get("/:id/insights", adMiddleware, AdAccountHandler.getInsights)
  .get("/:id/spend-daily", adMiddleware, AdAccountHandler.getDailySpend)
  .get("/:id/performance", adMiddleware, AdAccountHandler.getPerformance)
  .route("/:id/campaigns", campaignsRoutes)
  .route("/:id/adsets", adsetsRoutes)
  .route("/:id/ads", adRoutes);
// .get("/:id/campaigns/:campaignId/dashboard", adMiddleware, CampaignHandler.getCampaignDashboard)
// .get("/:id/campaigns/dashboard", adMiddleware, AdsHandler.getAdAccountDashboard)
// .get("/:id/campaigns/activity", adMiddleware, AdsHandler.getAdAccountCampaignsActivity)
// .get("/:id/sync", adMiddleware, AdsHandler.syncAdAccount)
// .get("/:id/ad-campaigns", adMiddleware, AdsHandler.getAdCampaigns)
// .get("/:id/ad-sets", adMiddleware, AdsHandler.getAdSets);

export { adsRoutes };
