import {
  createCollection,
  createField,
  createRelation,
  deleteCollection,
  readCollection,
  readCollections,
  readFields,
  readFieldsByCollection,
  readItem,
  readItems,
  readRelationByCollection,
} from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import { botsInquiriesBotFieldRelationship, botsInquiriesWithTracking } from "../collections";

const factory = createFactory<Env>();


export const setupCollection = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directAdmin");

  try {
    // create bots_inquiries collection
    console.log("Creating bots_inquiries collection...");
    await directus.request(deleteCollection("bots_inquiries"));
    await directus.request(createCollection(botsInquiriesWithTracking));
    await directus.request(createRelation(botsInquiriesBotFieldRelationship));

    return c.json({ message: "Collections created successfully!" });
  } catch (error) {
    console.error("Error creating collections:", error);
    throw error;
  }


});

export const getCollection = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directAdmin");
  const { collection } = c.req.param();

  try {
    const collectionData = await directus.request(readCollection(collection));
    return c.json(collectionData);
    // let collections = await directus.request(readCollections());
    // const names = [collection];
    // collections = collections.filter((collection) =>
    //   names.includes(collection.collection)
    // );

    // return c.json(collections);
  } catch (error) {
    console.error("Error reading collections:", error);
    throw error;
  }
});

export const getFields = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directAdmin");
  const { collection } = c.req.param();

  try {
    const fields = await directus.request(readFieldsByCollection(collection));
    return c.json(fields);
  } catch (error) {
    console.error("Error reading fields:", error);
    throw error;
  }
});

export const getRelations = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directAdmin");
  const { collection } = c.req.param();

  try {
    const relations = await directus.request(
      readRelationByCollection(collection)
    );
    return c.json(relations);
  } catch (error) {
    console.error("Error reading fields:", error);
    throw error;
  }
});
