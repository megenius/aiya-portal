import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as Handler from "../handlers/public.handler";

const publicRoutes = new Hono<Env>()
  .get("/helpdesks", ...Handler.getHelpDesks)
  .get("/helpdesk/:id", ...Handler.getHelpDesk)
  .get("/terms", ...Handler.getTerms)
  .get("/terms/:id", ...Handler.getTerm)
  .post("/inquiry", ...Handler.createInquiry);

export { publicRoutes };
