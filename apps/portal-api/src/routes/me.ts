import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import { readMe, updateUser } from "@directus/sdk";
import { Env } from "~/types/hono.types";

const meRoutes = new Hono<Env>()
  .get("/", async (c) => {
    try {
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const user = await directus.request(
        readMe({
          fields: ["id", "email", "first_name", "last_name", "avatar"],
        })
      );

      return c.json(
        { name: `${user.first_name} ${user.last_name || ""}`.trim(), ...user },
        200
      );
    } catch (error) {
      console.error(error);
      return c.json({ error: "Invalid credentials" }, 401);
    }
  })
  .patch("/", async (c) => {
    try {
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const user = await directus.request(
        readMe({
          fields: ["id"],
        })
      );
      const { email, first_name, last_name, avatar } = await c.req.json();
      const updatedUser = await directus.request(
        updateUser(user.id, {
          email,
          first_name,
          last_name,
          avatar,
        })
      );

      return c.json(updatedUser, 200);
    } catch (error) {
      console.error(error);
      return c.json({ error: "Invalid credentials" }, 401);
    }
  });

export { meRoutes };
