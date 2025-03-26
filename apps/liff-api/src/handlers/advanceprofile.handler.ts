import { createItem, deleteItem, readItem, readItems, updateItem } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { nanoid } from "nanoid";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

// getAdvanceProfiles
export const getAdvanceProfiles = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { status, q } = c.req.query();

    const filters: any = {};
    if (status) filters.status = { _eq: status };
    if (q) filters.name = { _icontains: q };

    const profiles = await directus.request(
      readItems("advance_profiles", {
        filter: filters,
      })
    );

    if (profiles.length === 0) {
      return c.json(null);
    }

    if (profiles.length === 1) {
      return c.json(profiles[0]);
    }

    return c.json(profiles);
  }
);

// getAdvanceProfilesByUid
export const getAdvanceProfilesByUid = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { uid } = c.req.query();

    const filters: any = {};
    if (uid) filters.uid = { _eq: uid };

    const profiles = await directus.request(
      readItems("advance_profiles", {
        filter: filters,
        fields: ["*", { point_transactions: ["type", "points"] }]
      })
    );

    if (profiles.length === 0) {
      return c.json(null);
    }

    const enrichedProfiles = profiles.map((profile: any) => {
      const pointTransactions = profile.point_transactions || [];
      const totalPoints = pointTransactions.reduce((sum: number, transaction: any) => {
        if (transaction.type === "Earn") {
          return sum + transaction.points;
        } else if (transaction.type === "Burn") {
          return sum - transaction.points;
        }
        return sum; // Ignore other types
      }, 0);

      return {
        ...profile,
        totalPoints,
      };
    });

    if (enrichedProfiles.length === 1) {
      return c.json(enrichedProfiles[0]);
    }

    return c.json(enrichedProfiles);
  }
);

// getAdvanceProfile
export const getAdvanceProfile = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const directus = c.get("directAdmin");
    const profile = await directus.request(
      readItem("advance_profiles", id)
    );

    if (!profile) {
      return c.json(null);
    }

    return c.json(profile);
  }
);

// createAdvanceProfile
export const createAdvanceProfile = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const profileData = await c.req.json();
    const directus = c.get("directAdmin");

    // Generate a random 10-character alphanumeric ID
    const id = nanoid(10);

    const profile = await directus.request(
      createItem("advance_profiles", { id, ...profileData })
    );

    return c.json(profile);
  }
);

// updateAdvanceProfile
export const updateAdvanceProfile = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const profileData = await c.req.json();
    const directus = c.get("directAdmin");

    const profile = await directus.request(
      updateItem("advance_profiles", id, profileData)
    );

    return c.json(profile);
  }
);

// deleteAdvanceProfile
export const deleteAdvanceProfile = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id } = c.req.param();
    const directus = c.get("directAdmin");

    await directus.request(
      deleteItem("advance_profiles", id)
    );

    return c.json({ success: true });
  }
);
