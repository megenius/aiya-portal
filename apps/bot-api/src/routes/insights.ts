import { Hono } from "hono";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";
import * as InsightHandler from "../handlers/insights.handler";

const insightsRoutes = new Hono<Env>();

insightsRoutes.get("/logs", ...InsightHandler.getLogsHandler);
insightsRoutes.get("/:workspaceid/contacts",directusMiddleware, ...InsightHandler.getLatestLogs)

// 'Today', 'Last 7 days', 'Last 14 days', 'Last 30 days', 'Last Month'
insightsRoutes.get("/stats", ...InsightHandler.getStatsHandler);
insightsRoutes.get("/stats/today", ...InsightHandler.getStatsHandler);


export default insightsRoutes
