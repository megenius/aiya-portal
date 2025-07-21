// routes/auth.ts

import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as AuthHandler from "../handlers/auth.hanlder";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { directusAdminMiddleware } from "~/middlewares/directus-admin.middleware";

const authRoutes = new Hono<Env>()
  .post(
    "/identify",
    directusMiddleware,
    directusAdminMiddleware,
    ...AuthHandler.identify
  )

export { authRoutes };
