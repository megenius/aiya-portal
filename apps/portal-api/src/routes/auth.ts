// routes/auth.ts

import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as AuthHandler from "../handlers/auth.hanlder";
import * as GoogleOAuthHandler from "../handlers/auth/google.handler";
import * as LineOAuthHandler from "../handlers/auth/line.handler";

const authRoutes = new Hono<Env>()
  .post("/login", ...AuthHandler.login)
  .post("/refresh", ...AuthHandler.refresh)
  .post("/logout", ...AuthHandler.logout)
  .post("/signup", ...AuthHandler.registerUser)
  .post("/verify-email", ...AuthHandler.registerUserVerify)
  .post("/reset-password-request", ...AuthHandler.resetPasswordRequest)
  .post("/reset-password", ...AuthHandler.resetPassword)
  .get("/providers", ...AuthHandler.getProviders)
  .get("/google/callback", ...GoogleOAuthHandler.callback)
  .get("/line/callback", ...LineOAuthHandler.callback);

export { authRoutes };
