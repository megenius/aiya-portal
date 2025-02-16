import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as Handler from "../handlers/client.handler";

const clientRoutes = new Hono<Env>()
  .post("/inquiry", ...Handler.createInquiry);

export { clientRoutes };
