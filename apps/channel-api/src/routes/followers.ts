import { Hono } from "hono";
import * as Handler from "../handlers/followers.handler";
import { Env } from "~/types/hono.types";

const followersRoutes = new Hono<Env>()
  .get("/", ...Handler.listAll)
  .get("/:uid/set-active-bot", ...Handler.setActiveBot)

export { followersRoutes };
