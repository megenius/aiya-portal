import { Hono } from "hono";
import { Env } from "~/@types/hono.types";
import * as AdAccountHandler from "../handlers/adaccount.handler";

import { adMiddleware } from "~/middlewares/ads.middleware";
import { campaignsRoutes } from "./campaign.route";
import { adsetsRoutes } from "./adset.route";
import { adRoutes } from "./ad.route";

const adaccountsRoutes = new Hono<Env>();

adaccountsRoutes
  .get("/:id", adMiddleware, AdAccountHandler.getAdAccount)
  .get("/:id/insights", adMiddleware, AdAccountHandler.getInsights)
  .get("/:id/spend-daily", adMiddleware, AdAccountHandler.getDailySpend)
  .get("/:id/performance/campaigns", adMiddleware, AdAccountHandler.getPerformanceCampaigns)
  .get("/:id/performance/campaigns/top10", adMiddleware, AdAccountHandler.getPerformanceCampaignsTop10)
  .get("/:id/performance/ads/top10", adMiddleware, AdAccountHandler.getPerformanceAdsTop10)
  .route("/:id/campaigns", campaignsRoutes)
  .route("/:id/adsets", adsetsRoutes)
  .route("/:id/ads", adRoutes);
export { adaccountsRoutes };
