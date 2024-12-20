import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import { ReferralService } from "~/services/referral.service";

const factory = createFactory<Env>();

export const createReferral = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    try {
      const payload = await c.req.json();
      const referralService = new ReferralService(directus);
      const result = await referralService.createReferral(payload);
      return c.json(result, 200);
    } catch (error) {
      console.error(error);
      return c.json({ error: "Failed to create referral" }, 400);
    }
  }
);

export const convertReferral = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    try {
      const { referralCode } = c.req.param();
      const payload = await c.req.json();
      const referralService = new ReferralService(directus);
      const result = await referralService.convertReferral(referralCode, payload);
      return c.json(result, 200);
    } catch (error) {
      console.error(error);
      return c.json({ error: "Failed to convert referral" }, 400);
    }
  }
);