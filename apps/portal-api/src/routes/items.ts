// File: src/routes/items.ts
import { Hono } from "hono";
import { getDirectusClient } from "../config/directus";
import {
  readItems,
  createItem,
  updateItem,
  deleteItem,
  readItem,
} from "@directus/sdk";
import { Schema } from "../config/schema";
import { Env } from "~/types/hono.types";
import { DirectusException } from "~/types/exception";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";
import { DirectusError } from "@repo/shared/exceptions/directus";

function isValidCollection(collection: any): collection is keyof Schema {
  const validCollections: Array<keyof Schema> = []; // Add valid collection names here
  return true;
}
const itemRoutes = new Hono<Env>()
  .get(
    "/:collection/:id",
    zValidator(
      "param",
      z.object({
        collection: z.string(),
        id: z.string(),
      })
    ),
    async (c) => {
      const { id, collection } = c.req.valid("param");
      if (!isValidCollection(collection)) {
        return c.json({ error: "Invalid collection" }, 400);
      }
      try {
        const directus = getDirectusClient();
        await directus.setToken(c.get("token"));
        const item = await directus.request(readItem(collection, id));
        return c.json(item);
      } catch (error) {
        throw DirectusError.fromDirectusResponse(error);
      }
    }
  )
  .get("/:collection", async (c) => {
    const collection = c.req.param("collection");
    if (!isValidCollection(collection)) {
      return c.json({ error: "Invalid collection" }, 400);
    }
    console.log("Fetching items from collection:", collection);

    try {
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const items = await directus.request(
        readItems(collection, {
          limit: 50,
        })
      );

      const response = {
        count: items.length,
        items,
      };
      return c.json(response);
    } catch (error: any) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .post("/:collection", async (c) => {
    const collection = c.req.param("collection");
    if (!isValidCollection(collection)) {
      return c.json({ error: "Invalid collection" }, 400);
    }
    const body = await c.req.json();
    try {
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const item = await directus.request(createItem(collection, body));
      return c.json(item, 201);
    } catch (error: any) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .patch("/:collection/:id", async (c) => {
    const collection = c.req.param("collection");
    if (!isValidCollection(collection)) {
      return c.json({ error: "Invalid collection" }, 400);
    }
    const id = c.req.param("id");
    const body = await c.req.json();
    try {
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      const item = await directus.request(updateItem(collection, id, body));
      return c.json(item);
    } catch (error: any) {
      throw DirectusError.fromDirectusResponse(error);
    }
  })
  .delete("/:collection/:id", async (c) => {
    const collection = c.req.param("collection");
    if (!isValidCollection(collection)) {
      return c.json({ error: "Invalid collection" }, 400);
    }
    const id = c.req.param("id");
    try {
      const directus = getDirectusClient();
      await directus.setToken(c.get("token"));
      await directus.request(deleteItem(collection, id));
      return c.json({ message: "Item deleted successfully" });
    } catch (error: any) {
      throw DirectusError.fromDirectusResponse(error);
    }
  });

export { itemRoutes };
