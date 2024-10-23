import * as sdk from "@directus/sdk";
import { Env } from "~/types/hono.types";
import { randomHexString } from "@repo/shared/utils";
import { logger as honoLogger } from "hono/logger";
import { directusMiddleware } from "~/middleware/directus.middleware";
import { createFactory } from "hono/factory";
import * as jwt from "hono/jwt";
import { DirectusError } from "@repo/shared/exceptions/directus";

const factory = createFactory<Env>();

export const verifyInvite = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const { token } = await c.req.json();
    const payload = await jwt.verify(token, c.env.DIRECTUS_SECRET_KEY);

    console.log("payload", payload);

    const { id, exp } = payload as any;
    const directus = c.get("directAdmin");

    try {
      const invite = await directus
        .request(
          sdk.readItem("saas_teams_invites", id, {
            fields: ["id", "team_id", "email", "role", "team_name"],
          })
        )
        .then((res) => res as any)
        .catch((err) => {
          throw new Error("Invite not found");
        });

      const users = await directus.request(
        sdk.readUsers({
          fields: ["id", "email"],
          filter: {
            email: {
              _eq: invite.email,
            },
          },
        })
      );

      let user_id = null;
      if (users.length > 0) {
        user_id = users[0].id;
      }

      return c.json({ ...invite, user_id });
    } catch (error: any) {
      return c.json({ error_message: error?.message }, error?.status || 400);
    }
  }
);

export const acceptInvite = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { id, user_id } = await c.req.json();
    const invite = await directus.request(
      sdk.readItem("saas_teams_invites", id, {
        fields: ["id", "team_id", "email", "role"],
      })
    );

    if (!invite) {
      return c.json({ error: "Invite not found" }, 404);
    }

    const users = await directus.request(
      sdk.readItems("saas_teams_users", {
        filter: {
          team_id: {
            _eq: invite.team_id,
          },
          user_id: {
            _eq: user_id,
          },
        },
      })
    );

    const workspace = await directus.request(
      sdk.readItem("saas_teams", invite.team_id as string, {
        fields: ["slug"],
      })
    );
    await directus.request(sdk.deleteItem("saas_teams_invites", id));

    if (users.length > 0) {
      return c.json({ slug: workspace.slug });
    }

    // const user = await directus.request(sdk.readUser(user_id));
    await directus.request(
      sdk.createItem("saas_teams_users", {
        team_id: invite.team_id,
        user_id,
        role: invite.role,
      })
    );

    return c.json({ slug: workspace.slug });
  }
);



export const getUsers = factory.createHandlers(
  honoLogger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directus");
    const users = await directus.request(
      sdk.readUsers({
        fields: ["id", "email", "first_name", "last_name"],
      })
    );

    return c.json(users);
  }
);