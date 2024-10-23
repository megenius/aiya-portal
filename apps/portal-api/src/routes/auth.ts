// routes/auth.ts

import { Hono } from "hono";
import { Env } from "~/types/hono.types";
import * as AuthHandler from "../handlers/auth.hanlder";

const authRoutes = new Hono<Env>()
  .post("/login", ...AuthHandler.login)
  .post("/refresh", ...AuthHandler.refresh)
  .post("/logout", ...AuthHandler.logout)
  .post("/signup", ...AuthHandler.registerUser)
  .post("/verify-email", ...AuthHandler.registerUserVerify)
  .post("/reset-password-request", ...AuthHandler.resetPasswordRequest)
  .post("/reset-password", ...AuthHandler.resetPassword);

export { authRoutes };
