import { createFactory } from "hono/factory";
import { Env } from "~/types/hono.types";
import Stripe from "stripe";

const factory = createFactory<Env>();

export const stripeMiddleware = factory.createMiddleware(async (c, next) => {
  const { STRIPE_API_KEY } = c.env;

  if (!STRIPE_API_KEY) {
    throw new Error("Stripe API key is required");
  }

  const stripe = new Stripe(STRIPE_API_KEY, {
    apiVersion: "2024-11-20.acacia",
  });

  c.set("stripe", stripe);

  await next();
});
