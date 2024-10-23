import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as Handler from "../handlers/users.handler";

const usersRoutes = new Hono<Env>()
  .get("/", ...Handler.getUsers)
  .post("/verify-invite", ...Handler.verifyInvite)
  .post("/accept-invite", ...Handler.acceptInvite);

export { usersRoutes };
