import { createFactory } from "hono/factory";
import BillingService from "~/services/billing.service";
import { Env } from "~/types/hono.types";

const factory = createFactory<Env>();

export const billingMiddleware = factory.createMiddleware(async (c, next) => {
  const billingService = new BillingService(
    c.get("stripeService"),
    c.get("directus")
  );
  c.set("billingService", billingService);

  await next();
});

export const billingAdminMiddleware = factory.createMiddleware(
  async (c, next) => {
    const billingAdminService = new BillingService(
      c.get("stripeService"),
      c.get("directAdmin")
    );

    c.set("billingAdminService", billingAdminService);

    await next();
  }
);
