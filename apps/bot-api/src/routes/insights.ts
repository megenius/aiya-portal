import { Hono } from "hono";
import * as InsightHandler from "../handlers/insights.handler";
import { Env } from "~/types/hono.types";

const insightsRoutes = new Hono<Env>();

insightsRoutes.get("/logs", ...InsightHandler.getLogsHandler);


export default insightsRoutes
