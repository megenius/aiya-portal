import { Hono } from "hono";
import { Env } from "~/@types/hono.types";
import * as CampaignHandler from "../handlers/campaign.handler";

import { adMiddleware } from "~/middlewares/ads.middleware";

const campaignsRoutes = new Hono<Env>();

campaignsRoutes.get("/", adMiddleware, CampaignHandler.getCampaigns);
campaignsRoutes.get("/:campaignId", adMiddleware, CampaignHandler.getCampaignInsight);
campaignsRoutes.get("/:campaignId/dashboard", adMiddleware, CampaignHandler.getCampaignsDashboard);

export { campaignsRoutes };