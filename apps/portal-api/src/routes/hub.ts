import { Hono } from "hono";
import * as HubHandler from "~/handlers/hub.handler";
import { Env } from "~/types/hono.types";

const hubRoutes = new Hono<Env>()
  .get("/",...HubHandler.getHubData)
  .post("/", ...HubHandler.insertHub);

export { hubRoutes };
