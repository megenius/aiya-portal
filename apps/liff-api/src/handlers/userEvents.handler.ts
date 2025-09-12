import { createItem, readItems } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import * as _ from "lodash";
import { directusMiddleware } from "~/middlewares/directus.middleware";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

// POST /user-events
export const createUserEvent = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const { id: userId, liff_id } = c.get("jwtPayload");
    const directus = c.get("directAdmin");

    const body = await c.req.json().catch(() => ({}));
    const event_type: string | undefined = body?.event_type;
    const event_properties: Record<string, any> | undefined = body?.event_properties;
    // Prefer page_liff id from body to avoid extra lookup; fallback to lookup via liff_id
    let liff: number | null = typeof body?.liff === "number" ? body.liff : null;

    if (!event_type || typeof event_type !== "string") {
      return c.json({ error: "event_type is required" }, 400);
    }

    if (!liff) {
      // try to resolve pages_liff id by liff_id string from JWT
      const pages = await directus.request(
        readItems("pages_liff", {
          filter: { liff_id: { _eq: liff_id } },
          fields: ["id"],
          limit: 1,
        } as any)
      );
      liff = pages?.[0]?.id ?? null;
    }

    const payload: any = {
      user: userId,
      liff,
      event_type,
      event_properties: event_properties ?? {},
      created_at: new Date().toISOString(),
    };

    const result = await directus.request(createItem("user_events", payload));
    return c.json(result, 201);
  }
);

// GET /user-events (for debugging/listing)
export const getUserEvents = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { liff, event_type, from, to } = c.req.query();

    const filters: any = {};
    if (liff) filters.liff = { _eq: isNaN(Number(liff)) ? liff : Number(liff) };
    if (event_type) filters.event_type = { _eq: event_type };
    if (from || to) {
      filters.created_at = {} as any;
      if (from) (filters.created_at as any)._gte = from;
      if (to) (filters.created_at as any)._lte = to;
    }

    const items = await directus.request(
      readItems("user_events", {
        filter: filters,
        fields: ["id", "user", "liff", "event_type", "event_properties", "created_at"],
        limit: -1,
      })
    );

    return c.json(items, 200);
  }
);

// GET /user-events/stats
// Query params:
// - liff: number (optional)
// - from, to: ISO datetime (optional)
// - event_type: string (optional)
// - group_by: "event_type" | "utm_source" | "utm_campaign" (optional)
export const getUserEventsStats = factory.createHandlers(
  logger(),
  directusMiddleware,
  async (c) => {
    const directus = c.get("directAdmin");
    const { liff, event_type, from, to, group_by } = c.req.query();

    const filters: any = {};
    if (liff) filters.liff = { _eq: isNaN(Number(liff)) ? liff : Number(liff) };
    if (event_type) filters.event_type = { _eq: event_type };
    if (from || to) {
      filters.created_at = {} as any;
      if (from) (filters.created_at as any)._gte = from;
      if (to) (filters.created_at as any)._lte = to;
    }

    const events: any[] = await directus.request(
      readItems("user_events", {
        filter: filters,
        fields: ["id", "event_type", "event_properties", "created_at"],
        limit: -1,
      })
    );

    const total = events.length;

    let grouped: Record<string, number> = {};
    if (group_by === "event_type" || !group_by) {
      grouped = _.countBy(events, (e) => e.event_type || "unknown");
    } else if (group_by === "utm_source") {
      grouped = _.countBy(events, (e) => e?.event_properties?.utm_source || "(none)");
    } else if (group_by === "utm_campaign") {
      grouped = _.countBy(events, (e) => e?.event_properties?.utm_campaign || "(none)");
    } else {
      grouped = { total };
    }

    const by_type = _.countBy(events, (e) => e.event_type || "unknown");

    return c.json({ total, by_type, grouped_by: group_by || "event_type", grouped });
  }
);
