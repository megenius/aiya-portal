import {
  createItem,
  DirectusUser,
  readItem,
  readItems,
  readMe,
  readUser,
  readUsers,
  sleep,
  updateItem,
} from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import * as _ from "lodash";
import Stripe from "stripe";
import { differenceInDays, formatDate, sub } from "date-fns";
import { StripeService } from "~/services/stripe.service";

const factory = createFactory<Env>();

// createFreePlan
export const createOnboardFreePlan = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const user = c.get("user") as DirectusUser;
    const stripe = c.get("stripe");
    const stripeService = c.get("stripeService");
    const billingService = c.get("billingService");

    try {
      // check if user already subscribed
      const subscriptions = await directus.request(
        readItems("saas_subscriptions", {
          filter: {
            customer: {
              _eq: user.id,
            },
            status: {
              _eq: "active",
            },
          },
        })
      );

      if (subscriptions.length > 0) {
        return c.json({ error: "User already subscribed" });
      }

      // First check if free price already exists
      const prices = await stripe.prices.list({
        lookup_keys: ["aibots_free_plan"],
        active: true,
      });

      // get free plan price id from prices
      if (prices.data?.length === 0) {
        throw new Error("Free plan not found");
      }

      if (user.email === undefined) {
        throw new Error("User email not found");
      }

      const existCustomer = await directus
        .request(readItem("saas_customers", user.id))
        .catch((e) => null);

      if (!existCustomer) {
        // create stripe customer
        const customer = await stripeService.createCustomer(user);
        const sub = await stripeService.createFreePlan(customer.id, user.id);
        return c.json(sub);
      }

      // create stripe subscription
      const sub = await stripeService.createFreePlan(
        existCustomer.stripe_customer_id,
        user.id
      );
      return c.json(sub);
    } catch (error: any) {
      return c.json({ error: error.message });
    }
  }
);

export const createCheckout = factory.createHandlers(logger(), async (c) => {
  const { PORTAL_URL } = c.env;
  const {
    currentSubscriptionId,
    currentPriceId,
    newPriceId,
    language,
    currency,
    action,
  } = await c.req.json();
  const stripe = c.get("stripe");
  const directus = c.get("directus");

  console.log(
    currentPriceId,
    currentSubscriptionId,
    newPriceId,
    language,
    currency
  );

  // check if user already subscribed
  const user = c.get("user") as DirectusUser;
  const customer = await directus.request(readItem("saas_customers", user.id));

  const metadata = {
    user_id: user.id,
    old_subscription_id: "",
    old_price_id: currentPriceId,
    new_price_id: newPriceId,
    rollback_subscription_id: "",
    action,
  };

  let discounts: any = [];
  if (currentSubscriptionId) {
    const subscription = await stripe.subscriptions.retrieve(currentSubscriptionId);
    if (subscription.currency !== currency) {
      await stripe.subscriptions.cancel(subscription.id as string);
      metadata["rollback_subscription_id"] = subscription.id;
    } else {
      metadata["old_subscription_id"] = subscription.id;

      // Calculate remaining time and create a discount
      const remainingDays = differenceInDays(
        new Date(subscription.current_period_end * 1000),
        new Date()
      );

      if (remainingDays > 0) {
        // Calculate prorated amount
        const oldSubscriptionAmount =
          subscription.items.data[0].price.unit_amount || 0;
        const proratedAmount = Math.floor(
          (oldSubscriptionAmount * remainingDays) / 30
        );

        if (proratedAmount > 0) {
          // Create a coupon with the prorated amount
          const coupon = await stripe.coupons.create({
            amount_off: proratedAmount,
            duration: "once",
            currency: currency,
            name: `Proration credit`,
            metadata: {
              old_subscription_id: subscription.id,
              remaining_days: remainingDays.toString(),
            },
          });

          discounts = [
            {
              coupon: coupon.id,
            },
          ];
        }
      }
    }
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    currency,
    line_items: [
      {
        price: newPriceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    subscription_data: {
      metadata,
    },
    discounts, // Apply the calculated discount
    success_url: `${PORTAL_URL}/payment/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${PORTAL_URL}/plans`,
    billing_address_collection: "required",
    customer: customer.stripe_customer_id,
    phone_number_collection: {
      enabled: true,
    },
    tax_id_collection: {
      enabled: true,
    },
    customer_update: {
      name: "auto",
      address: "auto",
    },
    metadata: {
      ...metadata,
      discount_applied: discounts.length > 0 ? "true" : "false",
    },
    locale: language,
  });

  return c.json({
    sessionId: session.id,
    hasDiscount: discounts.length > 0,
  });
});

// export const createCheckout = factory.createHandlers(logger(), async (c) => {
//   const { PORTAL_URL } = c.env;
//   const { priceId, language, currency, action } = await c.req.json();
//   const stripe = c.get("stripe");
//   const directus = c.get("directus");

//   console.log(priceId, language, currency);

//   // check if user already subscribed
//   const user = c.get("user") as DirectusUser;
//   const customer = await directus.request(readItem("saas_customers", user.id));

//   const subscriptions = await stripe.subscriptions.list({
//     customer: customer.stripe_customer_id,
//     status: "active",
//     limit: 1,
//   });

//   const metadata = {
//     user_id: user.id,
//     old_subscription_id: "",
//     rollback_subscription_id: "",
//     action,
//   };

//   if (subscriptions.data.length > 0) {
//     const subscription = subscriptions.data[0];
//     if (subscription.currency !== currency) {
//       await stripe.subscriptions.cancel(subscription.id as string);
//       metadata["rollback_subscription_id"] = subscription.id;
//     } else {
//       metadata["old_subscription_id"] = subscription.id;
//     }
//   }

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ["card"],
//     currency,
//     line_items: [
//       {
//         price: priceId,
//         quantity: 1,
//       },
//     ],
//     mode: "subscription",
//     subscription_data: {
//       metadata,
//     },
//     success_url: `${PORTAL_URL}/payment/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `${PORTAL_URL}/plans`,
//     billing_address_collection: "required",
//     customer: customer.stripe_customer_id,
//     // customer_email: email,
//     phone_number_collection: {
//       enabled: true,
//     },
//     tax_id_collection: {
//       enabled: true,
//     },
//     customer_update: {
//       name: "auto",
//       address: "auto",
//     },
//     metadata,
//     locale: language,
//   });

//   return c.json({ sessionId: session.id });
// });

export const getCheckoutSession = factory.createHandlers(
  logger(),
  async (c) => {
    const { sessionId } = c.req.param();
    const stripe = c.get("stripe");
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return c.json(session);
  }
);

export const cancelSubscription = factory.createHandlers(
  logger(),
  async (c) => {
    const stripeSubscriptionId = c.req.query("id") as string;
    const billingService = c.get("billingService");
    const freePlan = await billingService.getAiBotFreePlan();
    await billingService.changePlan(stripeSubscriptionId, freePlan.id);
    return c.json({});
  }
);

export const getCurrentBillingPlan = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const user = c.get("user") as DirectusUser;

    try {
      const subscriptions = await directus.request(
        readItems("saas_subscriptions", {
          filter: {
            customer: {
              _eq: user.id,
            },
            status: {
              _eq: "active",
            },
          },
          sort: ["-date_created"],
        })
      );

      if (subscriptions.length === 0) {
        return c.json({});
      }

      const subscription = subscriptions[0];
      const plan = await directus.request(
        readItem("saas_prices", subscription.stripe_price_id)
      );

      return c.json({
        subscription,
        plan,
      });
    } catch (error: any) {
      return c.json(error);
    }
  }
);

export const getCurrentUsage = factory.createHandlers(logger(), async (c) => {
  const subscriptionDurable = c.get("subscriptionDurable");
  return c.json(await subscriptionDurable.get());
});

export const recordUsage = factory.createHandlers(logger(), async (c) => {
  const body = await c.req.json();
  await c.env.BILLING_QUEUE.send(body);
  return c.json({});
});

export const getPlans = factory.createHandlers(logger(), async (c) => {
  const { lang = "en-US", interval = "month" } = c.req.query();
  const billingService = c.get("billingService");
  const plan = await billingService.getPlans({
    lang,
    interval,
    env: c.env.NODE_ENV,
  });
  return c.json(plan);
});

export const changePlan = factory.createHandlers(logger(), async (c) => {
  const { currentPlanId, newPlanId } = await c.req.json();
  const billingService = c.get("billingService");
  const user = c.get("user") as DirectusUser;
  await billingService.changePlan(currentPlanId, newPlanId);
  return c.json({});
});
