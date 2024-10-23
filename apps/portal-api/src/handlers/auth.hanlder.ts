// routes/auth.ts
import * as sdk from "@directus/sdk";
import { z } from "zod";
import { addMilliseconds } from "date-fns";
import { camelcaseKeys } from "~/utils/str";
import { Env } from "~/types/hono.types";
import { createFactory } from "hono/factory";
import { logger as honoLogger } from "hono/logger";
import { directusMiddleware } from "~/middleware/directus.middleware";

const factory = createFactory<Env>();

export const login = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const { email, password } = await c.req.json();
    try {
      const directus = c.get("directus");
      await directus.setToken("");
      const auth = await directus.request(
        sdk.login(email, password, { mode: "json" })
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
);

export const refresh = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const refreshToken = c.req.header("Refresh-Token") as string;
    console.log("refresh token...", refreshToken);
    if (!refreshToken) {
      return c.json({ error: "No refresh token provided" }, 400);
    }
    try {
      const directus = c.get("directus");
      const auth = await directus.request(sdk.refresh("json", refreshToken));

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
  }
);

export const logout = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const refreshToken = c.req.header("Refresh-Token") as string;
    if (!refreshToken) {
      return c.json({ error: "No refresh token provided" }, 400);
    }
    try {
      const directus = c.get("directus");
      await directus.request(sdk.logout(refreshToken, "json"));
      return c.json({ message: "Logged out successfully" });
    } catch (error) {
      return c.json({ error: "Logout failed" }, 500);
    }
  }
);

export const registerUser = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const { email, password, first_name, last_name } = await c.req.json();
    try {
      const directus = c.get("directus");
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);

      const users = await directus.request(
        sdk.readUsers({
          fields: ["id", "email"],
          filter: {
            email: {
              _eq: email,
            },
          },
        })
      );

      if (users.length > 0) {
        return c.json({ error: "User already exists" }, 400);
      }

      const userId = await directus
        .request(
          sdk.registerUser(email, password, {
            verification_url: `${c.env.PORTAL_URL}/verify-email`,
            first_name,
            last_name,
          })
        )
        .then(async (res) => {
          const users = await directus.request(
            sdk.readUsers({
              fields: ["id", "email"],
              filter: {
                email: {
                  _eq: email,
                },
              },
            })
          );

          if (users.length > 0) {
            const user = users[0];
            return user.id;
          }
        });

      return c.json({ id: userId });
    } catch (error: any) {
      console.error(error);
      return c.json(error, error.status || 500);
    }
  }
);

export const registerUserVerify = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const { token } = await c.req.json();
    try {
      const directus = c.get("directus");
      await directus.setToken(c.env.DIRECTUS_SERVICE_TOKEN);
      await directus.request(sdk.registerUserVerify(token));
      return c.json({});
    } catch (error) {
      console.error(error);
      return c.json({ error: "verify-email failed" }, 500);
    }
  }
);

//resetPassword
export const resetPasswordRequest = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const { email } = await c.req.json();
    try {
      const directus = c.get("directAdmin");
      await directus.request(
        sdk.passwordRequest(email, `${c.env.PORTAL_URL}/auth/change-password`)
      );
      return c.json({});
    } catch (error) {
      console.error(error);
      return c.json({ error: "reset-password failed" }, 500);
    }
  }
);

export const resetPassword = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const { token, password } = await c.req.json();
    try {
      const directus = c.get("directAdmin");
      await directus.request(sdk.passwordReset(token, password));
      return c.json({});
    } catch (error) {
      console.error(error);
      return c.json({ error: "reset-password failed" }, 500);
    }
  }
);
