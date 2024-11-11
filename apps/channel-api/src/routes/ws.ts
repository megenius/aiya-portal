import { Hono } from "hono";
import * as Handler from "../handlers/ws.handler";
import { Env } from "~/types/hono.types";

const wsRoutes = new Hono<Env>()
  .get("/provider/:providerId", ...Handler.connectProvider)
  .post("/provider/:providerId/broadcast", ...Handler.broadcast);

export { wsRoutes };
