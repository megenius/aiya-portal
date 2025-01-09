import {
  createCollection,
  createField,
  createRelation,
  deleteCollection,
  readCollection,
  readFields,
  readFieldsByCollection,
  readItem,
  readItems,
} from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import {
  affiliateMonthlyStatsAffiliateFieldRelationship,
  affiliateMonthlyStatsCollection,
  affiliatesCollection,
  affiliatesUserFieldRelationship,
  commissionPaymentsAffiliateFieldRelationship,
  commissionPaymentsCollection,
  commissionPaymentsReferralFieldRelationship,
  commissionRulesCollection,
  referralsCollection,
  referralsReferredFieldRelationship,
  referralsReferrerFieldRelationship,
  referralsSubscriptionFieldRelationship,
  subscriptionsCollection,
  subscriptionsUserFieldRelationship,
  // subscriptionUserField,
} from "../collections";

const factory = createFactory<Env>();

const testCollection = {
  collection: "tasks",
  meta: {
    collection: "tasks",
    icon: "assignment",
    note: "Test collection for task management",
    display_template: "{{ title }}",
    hidden: false,
    singleton: false,
    translations: [
      {
        language: "en-US",
        translation: "Tasks",
      },
      {
        language: "nl-NL",
        translation: "Taken",
      },
    ],
    archive_field: "status",
    archive_value: "archived",
    unarchive_value: "draft",
    archive_app_filter: true,
    sort_field: "sort",
    item_duplication_fields: null,
    sort: 1,
  },
  schema: {
    name: "tasks",
    comment: "Task management collection",
  },
  fields: [
    {
      field: "id",
      type: "uuid",
      meta: {
        icon: "key",
        hidden: true,
        readonly: true,
        interface: "input",
        special: ["uuid"],
        note: "The unique identifier of the task",
      },
      schema: {
        is_primary_key: true,
        is_nullable: false,
      },
    },
    {
      field: "title",
      type: "string",
      meta: {
        icon: "title",
        interface: "input",
        special: null,
        required: true,
        note: "Task title",
      },
      schema: {
        is_nullable: false,
        max_length: 255,
      },
    },
    {
      field: "description",
      type: "text",
      meta: {
        icon: "description",
        interface: "input-multiline",
        special: null,
        note: "Detailed task description",
      },
      schema: {
        is_nullable: true,
      },
    },
    {
      field: "status",
      type: "string",
      meta: {
        icon: "flag",
        interface: "select-dropdown",
        special: null,
        required: true,
        note: "Current status of the task",
        options: {
          choices: [
            { text: "Draft", value: "draft" },
            { text: "In Progress", value: "in_progress" },
            { text: "Completed", value: "completed" },
            { text: "Archived", value: "archived" },
          ],
        },
      },
      schema: {
        is_nullable: false,
        default_value: "draft",
      },
    },
    {
      field: "sort",
      type: "integer",
      meta: {
        hidden: true,
        interface: "input",
        special: null,
        note: "Sort order of the task",
      },
      schema: {
        is_nullable: false,
        default_value: 0,
      },
    },
  ],
};

export const setupCollection = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directAdmin");
  

  // const a = await directus.request(readFieldsByCollection("subscriptions"));
  // return c.json(a);

  // const result = await directus.request(createCollection(testCollection));

  try {

    // 0. Delete all collections first by reverse order
    // console.log("Deleting existing collections...");
    // await directus.request(deleteCollection("commission_rules"));
    // await directus.request(deleteCollection("commission_payments"));
    // await directus.request(deleteCollection("affiliate_monthly_stats"));
    // await directus.request(deleteCollection("affiliates"));
    // await directus.request(deleteCollection("referrals"));
    // await directus.request(deleteCollection("subscriptions"));
    

    // 1. Create independent collections first

    console.log("Creating subscriptions collection...");
    await directus.request(createCollection(subscriptionsCollection));

    await directus.request(createRelation(subscriptionsUserFieldRelationship));

    // 2. Create referrals collection (depends on users and subscriptions)
    console.log("Creating referrals collection...");
    await directus.request(createCollection(referralsCollection));

    console.log("Creating referrals relationships...");
    await directus.request(createRelation(referralsReferrerFieldRelationship));
    await directus.request(createRelation(referralsReferredFieldRelationship));
    await directus.request(createRelation(referralsSubscriptionFieldRelationship));


    // 3. Create affiliates collection (depends on users)
    console.log("Creating affiliates collection...");
    await directus.request(createCollection(affiliatesCollection));
    await directus.request(createRelation(affiliatesUserFieldRelationship));


    // 4. Create affiliate monthly stats collection (depends on affiliates)
    console.log("Creating affiliate monthly stats collection...");
    await directus.request(createCollection(affiliateMonthlyStatsCollection));
    await directus.request(createRelation(affiliateMonthlyStatsAffiliateFieldRelationship));


    // 5. Create commission payments collection (depends on affiliates and referrals)
    console.log("Creating commission payments collection...");
    await directus.request(createCollection(commissionPaymentsCollection));
    await directus.request(createRelation(commissionPaymentsAffiliateFieldRelationship));
    await directus.request(createRelation(commissionPaymentsReferralFieldRelationship));


    // 6. Create commission rules collection (independent)
    console.log("Creating commission rules collection...");
    await directus.request(createCollection(commissionRulesCollection));


    console.log("All collections created successfully!");
    return c.json({ message: "Collections created successfully!" });
  } catch (error) {
    console.error("Error creating collections:", error);
    throw error;
  }
});
