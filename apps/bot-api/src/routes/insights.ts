import { Hono } from "hono";
import * as InsightHandler from "../handlers/insights.handler";
import { Env } from "~/types/hono.types";

const insightsRoutes = new Hono<Env>();

insightsRoutes.get("/logs", ...InsightHandler.getLogsHandler);

// 'Today', 'Last 7 days', 'Last 14 days', 'Last 30 days', 'Last Month'
insightsRoutes.get("/stats/today", ...InsightHandler.getTodayStatsHandler);


export default insightsRoutes
