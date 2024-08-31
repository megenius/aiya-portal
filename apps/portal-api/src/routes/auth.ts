// routes/auth.ts

import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import {
  login,
  logout,
  readMe,
  refresh,
  registerUser,
  registerUserVerify,
} from "@directus/sdk";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { addMilliseconds } from "date-fns";
import { camelcaseKeys } from "~/utils/str";
import { Env } from "~/types/hono.types";

const authRoutes = new Hono<Env>()
  .post(
    "/login",
    zValidator(
      "json",
      z.object({
        email: z.string(),
        password: z.string(),
      })
    ),
    async (c) => {
      const { email, password } = await c.req.json();
      try {
        const directus = getDirectusClient();
        await directus.setToken("");
        const auth = await directus.request(
          login(email, password, { mode: "json" })
        );
        const expiresAt =
          auth.expires_at ||
          addMilliseconds(new Date(), Number(auth.expires) - 60000).valueOf();

        return c.json(
          camelcaseKeys({
            token: auth.access_token,
            refresh_token: auth.refresh_token,
            expires: auth.expires,
            expires_at: expiresAt,
          })
        );
      } catch (error) {
        console.error(error);
        return c.json({ error: "Invalid email or password" }, 401);
      }
    }
  )
  .post("/refresh", async (c) => {
    const refreshToken = c.req.header("Refresh-Token") as string;
    console.log("refresh token...", refreshToken);
    if (!refreshToken) {
      return c.json({ error: "No refresh token provided" }, 400);
    }
    try {
      const directus = getDirectusClient();
      const auth = await directus.request(refresh("json", refreshToken));

      const expiresAt =
        auth.expires_at ||
        addMilliseconds(new Date(), Number(auth.expires) - 60000).valueOf();

      return c.json(
        camelcaseKeys({
          token: auth.access_token,
          refresh_token: auth.refresh_token,
          expiresAt,
        })
      );
    } catch (error) {
      console.error(error);
      return c.json({ error: "Invalid refresh token" }, 401);
    }
  })
  .post("/logout", async (c) => {
    const refreshToken = c.req.header("Refresh-Token") as string;
    if (!refreshToken) {
      return c.json({ error: "No refresh token provided" }, 400);
    }
    try {
      const directus = getDirectusClient();
      await directus.request(logout(refreshToken, "json"));
      return c.json({ message: "Logged out successfully" });
    } catch (error) {
      return c.json({ error: "Logout failed" }, 500);
    }
  })
  .post("/signup", async (c) => {
    const { email, password, first_name, last_name } = await c.req.json();
    try {
      const directus = getDirectusClient();
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
      await directus.request(
        registerUser(email, password, {
          verification_url: `${c.env.PORTAL_URL}/verify-email`,
          first_name,
          last_name,
        })
      );
      return c.json({});
    } catch (error) {
      console.error(error);
      return c.json({ error: "sign-up failed" }, 500);
    }
  })
  .post("/verify-email", async (c) => {
    const { token } = await c.req.json();
    try {
      const directus = getDirectusClient();
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
      await directus.request(registerUserVerify(token));
      return c.json({});
    } catch (error) {
      console.error(error);
      return c.json({ error: "verify-email failed" }, 500);
    }
  });

export { authRoutes };
