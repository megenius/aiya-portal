import { Hono } from "hono";
import * as CampaignHandler from "../handlers/campaigns.handler";

const campaignRoutes = new Hono();

// Campaign management
campaignRoutes.get("/", ...CampaignHandler.getCampaigns);
campaignRoutes.get("/:id", ...CampaignHandler.getCampaign);

// Registration flow
campaignRoutes.post("/:id/consent", ...CampaignHandler.consentPDPA);
campaignRoutes.post("/:id/register", ...CampaignHandler.registerCampaign);

// Mission management
campaignRoutes.get("/:id/missions", ...CampaignHandler.getCampaignMissions);

// Credits and stats
campaignRoutes.get("/:id/credits", ...CampaignHandler.getCampaignCredits);
campaignRoutes.get("/:id/submissions", ...CampaignHandler.getCampaignSubmissions);
// Ranking
campaignRoutes.get("/:id/ranking", ...CampaignHandler.getCampaignRanking);

export { campaignRoutes };