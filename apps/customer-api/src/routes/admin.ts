import { Hono } from "hono";
import {
  createDirectus,
  rest,
  createCollection,
  authentication,
  readCollections,
  readCollection,
  readFieldsByCollection,
} from "@directus/sdk";
import * as _ from "lodash";
import { getAdminDirectusClient } from "~/config/directus";

const adminRoutes = new Hono()
  .get("/collections", async (c) => {
    try {
      const directus = getAdminDirectusClient();
      let collections = await directus.request(readCollections());

      const names = ["facebook_ad_accounts", "campaigns"];
      collections = collections.filter((collection) =>
        names.includes(collection.collection)
      );

      return c.json(collections);
    } catch (error) {
      console.error("Error creating collection:", error);
      return c.json({ error: "Failed to create collection" }, 500);
    }
  })
  .post("/create-collection", async (c) => {
    try {
      const directus = getAdminDirectusClient();
      const { collectionName, fields } = await c.req.json();

      const newCollection = await directus.request(
        createCollection({
          collection: collectionName,
          fields: fields,
        })
      );

      return c.json(
        {
          message: "Collection created successfully",
          collection: newCollection,
        },
        201
      );
    } catch (error) {
      console.error("Error creating collection:", error);
      return c.json({ error: "Failed to create collection" }, 500);
    }
  })
  .post("/duplicate-collection", async (c) => {
    try {
      const directus = getAdminDirectusClient();
      const { source, destination } = await c.req.json();

      // Read the source collection
      const sourceCollection = await directus.request(readCollection(source));
      const fields = await directus.request(readFieldsByCollection(source));

      if (!sourceCollection) {
        return c.json({ error: "Source collection not found" }, 404);
      }

      const collectionBody = {
        collection: destination,
        meta: {
          ...sourceCollection.meta,
          collection: destination,
        },
        fields: fields.map((field) => {
          const newfield = {
            ...field,
            collection: destination,
            schema: {
              ...field.schema,
              table: destination,
            },
            meta: {
              ..._.omit(field.meta, "id"),
              collection: destination,
            },
          };
          return newfield;
        }),
        schema: {
          ...sourceCollection.schema,
        },
      };

      // Create the new collection
      const newCollection = await directus.request(createCollection(collectionBody));

      return c.json(
        {
          message: "Collection duplicated successfully",
          collection: newCollection,
        },
        201
      );
    } catch (error) {
      console.error("Error duplicating collection:", error);
      return c.json({ error: "Failed to duplicate collection" }, 500);
    }
  })
  .get("/collections/:collectionName/fields", async (c) => {
    try {
      const { collectionName } = c.req.param();
      const directus = getAdminDirectusClient();

      const fields = await directus.request(
        readFieldsByCollection(collectionName)
      );

      return c.json(fields);
    } catch (error) {
      console.error("Error creating collection:", error);
      return c.json({ error: "Failed to create collection" }, 500);
    }
  });

export { adminRoutes };
