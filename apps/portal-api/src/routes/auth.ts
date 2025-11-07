// routes/auth.ts

import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as AuthHandler from "../handlers/auth.handler";
import * as GoogleOAuthHandler from "../handlers/auth/google.handler";
import * as LineOAuthHandler from "../handlers/auth/line.handler";
import * as WorkspaceOAuthHandler from "../handlers/auth/workspace.handler";

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
  .get("/line/callback", ...LineOAuthHandler.callback)
  .get("/workspace/sso", ...WorkspaceOAuthHandler.sso)
  .post("/workspace/token", ...WorkspaceOAuthHandler.generateToken) // API-friendly token endpoint (with SSO token)
  .post("/service/user-token", ...WorkspaceOAuthHandler.generateTokenFromService); // Service token authentication endpoint

export { authRoutes };
