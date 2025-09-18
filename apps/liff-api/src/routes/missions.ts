import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as CampaignHandler from "../handlers/campaigns.handler";

const missionsRoutes = new Hono<Env>()
  .get("/:missionId", ...CampaignHandler.getMission)
  .post("/:missionId/submissions", ...CampaignHandler.submitMission);

export { missionsRoutes };
