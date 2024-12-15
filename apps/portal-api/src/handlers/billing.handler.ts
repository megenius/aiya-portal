import { createItem, readItem, readItems, updateItem } from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import * as _ from "lodash";
import Stripe from "stripe";

const factory = createFactory<Env>();

export const getBillings = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directus");
  // const billings = await directus.request(readItems("billings"));
  return c.json({});
});

export const createCheckout = factory.createHandlers(logger(), async (c) => {
  // const { amount, currency, description, success_url, cancel_url } = await c.req.json();
  const { PORTAL_URL } = c.env;
  const { priceId } = await c.req.json();
  const stripe = c.get("stripe");

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    success_url: `${PORTAL_URL}/payment/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${PORTAL_URL}/plans`,
  });

  return c.json({ sessionId: session.id });
});

export const getCheckoutSession = factory.createHandlers(
  logger(),
  async (c) => {
    const { sessionId } = c.req.param();
    const stripe = c.get("stripe");
    console.log("sessionId", sessionId);
    console.log("stripe", stripe);
    
    
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    console.log("XXXXX");
    
    console.log("getCheckoutSession", session);
    
    return c.json(session);
  }
);

// stripeWebhook
export const stripeWebhook = factory.createHandlers(logger(), async (c) => {
  const body = await c.req.json();
  console.log("stripeWebhook", body);

  return c.json({});
});
