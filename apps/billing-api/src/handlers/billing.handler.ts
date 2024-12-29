import {
  createItem,
  DirectusUser,
  readItem,
  readItems,
  readMe,
  readUser,
  readUsers,
  updateItem,
} from "@directus/sdk";
import { createFactory } from "hono/factory";
import { logger } from "hono/logger";
import { Env } from "~/types/hono.types";
import * as _ from "lodash";
import Stripe from "stripe";
import { formatDate, sub } from "date-fns";
import * as yaml from "js-yaml";

const factory = createFactory<Env>();

// createFreePlan
export const createFreePlan = factory.createHandlers(logger(), async (c) => {
  const user = c.get("user") as DirectusUser;
  const stripe = c.get("stripe");
  try {
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
    const price = prices.data[0];

    // create stripe customer
    const customer = await stripe.customers.create({
      email: user.email as string,
      name: user.first_name + " " + user.last_name,
      metadata: {
        user_id: user.id,
      },
    });

    // create stripe subscription
    const sub = await stripe.subscriptions.create({
      customer: customer.id,
      items: [{ price: price.id }],
      metadata: {
        user_id: user.id,
      },
    });

    return c.json(sub);
  } catch (error: any) {
    return c.json({ error: error.message });
  }
});

function getTrialPeriodDays() {
  const currentDate = new Date();
  const newYear2025 = new Date("2025-01-01");

  // If current date is before 2025, return 45 days, otherwise 15 days
  return currentDate < newYear2025 ? 45 : 15;
}

export const createCheckout = factory.createHandlers(logger(), async (c) => {
  const { PORTAL_URL } = c.env;
  const { priceId, email, customerId } = await c.req.json();
  const stripe = c.get("stripe");
  const directus = c.get("directus");

  let trialDays = getTrialPeriodDays();
  console.log(`Creating checkout session with ${trialDays} days trial period`);

  // check if user already subscribed
  const user = c.get("user") as DirectusUser;

  const subscriptions = await directus.request(
    readItems("saas_subscriptions", {
      filter: {
        customer: {
          _eq: user.id,
        },
      },
      sort: ["-date_created"],
    })
  );

  if (subscriptions.length > 0) {
    trialDays = 0;
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    subscription_data: trialDays
      ? {
          trial_period_days: trialDays,
          trial_settings: {
            end_behavior: {
              missing_payment_method: "cancel",
            },
          },
        }
      : {},
    success_url: `${PORTAL_URL}/payment/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${PORTAL_URL}/plans`,
    billing_address_collection: "required",
    customer: customerId,
    // customer_email: email,
    phone_number_collection: {
      enabled: true,
    },
    tax_id_collection: {
      enabled: true,
    },
    metadata: {
      user_id: user.id,
    },
  });

  return c.json({ sessionId: session.id });
});

export const getCheckoutSession = factory.createHandlers(
  logger(),
  async (c) => {
    const { sessionId } = c.req.param();
    const stripe = c.get("stripe");
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    return c.json(session);
  }
);

// stripeWebhook
export const stripeWebhook = factory.createHandlers(logger(), async (c) => {
  const rawBody = await c.req.text(); // Get raw body as string
  const directus = c.get("directAdmin");
  const stripe = c.get("stripe");
  const sig = c.req.header("stripe-signature") as string;
  console.log("sig", sig);

  let event: Stripe.Event;

  try {
    const { STRIPE_WEBHOOK_SECRET } = c.env;
    event = await stripe.webhooks.constructEventAsync(
      rawBody,
      sig,
      STRIPE_WEBHOOK_SECRET
    );
  } catch (err: any) {
    console.log(`Webhook Error: ${err.message}`);
    throw new Error(`Webhook Error: ${err.message}`);
  }

  const getUserByEmail = async (email: string) => {
    try {
      const users = await directus.request(
        readUsers({
          fields: ["id"],
          filter: {
            email: {
              _eq: email,
            },
          },
          limit: 1,
        })
      );

      // Return the first user or null if none found
      return users.length > 0 ? users[0] : null;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  };

  const onCustomerCreated = async (customer: Stripe.Customer) => {
    const user = await directus.request(readUser(customer.metadata?.user_id));
    if (!user) {
      console.error(`User with ID ${customer.metadata?.user_id} not found`);
      return;
    }

    const customerCreated = await directus.request(
      createItem("saas_customers", {
        id: user.id,
        stripe_customer_id: customer.id,
        name: customer.name as string,
        email: customer.email as string,
      })
    );

    console.log("Customer was created!", customerCreated);
  };

  const onCheckoutSessionCompleted = async (
    session: Stripe.Checkout.Session
  ) => {
    const email = session.customer_email as string;
    const user = await getUserByEmail(email);
    if (!user) {
      console.error(`User with email ${email} not found`);
      return;
    }

    const customer = session.customer_details;
    const customerUpdated = await directus.request(updateItem("saas_customers", user.id, {
      stripe_customer_id: session.customer as string,
      company_name: customer?.name as string,
      email: customer?.email as string,
      phone: customer?.phone as string,
      tax_id: customer?.tax_ids?.length
        ? (customer.tax_ids[0].value as string)
        : "",
      tax_type: customer?.tax_ids?.length
        ? (customer.tax_ids[0].type as string)
        : "",
      address_line1: customer?.address?.line1 as string,
      address_line2: customer?.address?.line2 as string,
      city: customer?.address?.city as string,
      state: customer?.address?.state as string,
      postal_code: customer?.address?.postal_code as string,
      country: customer?.address?.country as string,
      metadata: session.metadata,
    }));

    console.log("Customer was updated!", customerUpdated);
  };

  const onSubscriptionCreated = async (subscription: Stripe.Subscription) => {
    const item = subscription.items.data[0];
    const plan = item.plan as Stripe.Plan;

    const price = await directus.request(
      readItem("saas_prices", item.price.id)
    );

    const subscriptionCreated = await directus
      .request(
        createItem("saas_subscriptions", {
          customer: subscription.metadata?.user_id,
          stripe_subscription_id: subscription.id,
          stripe_price_id: item.price.id,
          stripe_product_id: plan.product as string,
          plan_type: getPlanTypeFromProductId(plan.product as string), // function แปลง product id เป็น plan_type
          amount: (plan.amount as number) / 100, // แปลงจาก cents เป็นหน่วยเงิน
          currency: subscription.currency,
          status: subscription.status,
          collection_method: subscription.collection_method,
          trial_start: subscription.trial_start
            ? new Date(subscription.trial_start * 1000).toISOString()
            : null,
          trial_end: subscription.trial_end
            ? new Date(subscription.trial_end * 1000).toISOString()
            : null,
          billing_cycle_anchor: new Date(
            subscription.billing_cycle_anchor * 1000
          ).toISOString(),
          current_period_start: new Date(
            subscription.current_period_start * 1000
          ).toISOString(),
          current_period_end: new Date(
            subscription.current_period_end * 1000
          ).toISOString(),
          canceled_at: subscription.canceled_at
            ? new Date(subscription.canceled_at * 1000).toISOString()
            : null,
          cancel_at_period_end: subscription.cancel_at_period_end,
          metadata: subscription.metadata, // ไม่ต้อง JSON.stringify เพราะ field เป็น jsonb
          interval: plan.interval,
          features: price.features,
        })
      )
      .catch((error) => {
        console.error("Error creating subscription:", error);
        throw error;
      });

    console.log("Subscription was created!", subscriptionCreated);

    // Helper function to determine plan type from product id
    function getPlanTypeFromProductId(
      productId: string
    ): "free" | "starter" | "growth" {
      // Map your Stripe product IDs to plan types
      const planMap: Record<string, "free" | "starter" | "growth"> = {
        prod_RP7pmXwz5V8EMs: "starter",
        prod_RP99HiA5pw6xa8: "growth",
      };
      return planMap[productId] || "free";
    }
    console.log("Subscription was successful!", subscription);
  };

  const onSubscriptionUpdated = async (subscription: Stripe.Subscription) => {
    const subscriptions = await directus.request(
      readItems("saas_subscriptions", {
        filter: {
          stripe_subscription_id: {
            _eq: subscription.id,
          },
        },
      })
    );

    if (subscriptions.length === 0) {
      console.error(`Subscription with ID ${subscription.id} not found`);
      return;
    }

    const _subscription = subscriptions[0];

    const subscriptionUpdated = await directus.request(
      updateItem("saas_subscriptions", _subscription.id, {
        status: subscription.status,
        current_period_start: new Date(
          subscription.current_period_start * 1000
        ).toISOString(),
        current_period_end: new Date(
          subscription.current_period_end * 1000
        ).toISOString(),
        canceled_at: subscription.canceled_at
          ? new Date(subscription.canceled_at * 1000).toISOString()
          : null,
        cancel_at_period_end: subscription.cancel_at_period_end,
        metadata: subscription.metadata,
      })
    );
    console.log("Subscription was updated!", subscriptionUpdated);
  };

  const onSubscriptionDeleted = async (subscription: Stripe.Subscription) => {
    const subscriptions = await directus.request(
      readItems("saas_subscriptions", {
        filter: {
          stripe_subscription_id: {
            _eq: subscription.id,
          },
        },
      })
    );

    if (subscriptions.length === 0) {
      console.error(`Subscription with ID ${subscription.id} not found`);
      return;
    }

    const _subscription = subscriptions[0];

    const subscriptionDeleted = await directus.request(
      updateItem("saas_subscriptions", _subscription.id, {
        status: subscription.status,
        ended_at: subscription.ended_at,
      })
    );
    console.log("Subscription was deleted!", subscriptionDeleted);
  };

  try {
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        await onCheckoutSessionCompleted(checkoutSessionCompleted);
        // Then define and call a function to handle the event charge.succeeded
        break;

      case "customer.created":
        const customerCreated = event.data.object;
        await onCustomerCreated(customerCreated);
        break;

      case "customer.subscription.created":
        const subscriptionCreated = event.data.object;
        await onSubscriptionCreated(subscriptionCreated);
        break;

      case "customer.subscription.updated":
        const subscriptionUpdated = event.data.object;
        await onSubscriptionUpdated(subscriptionUpdated);
        break;

      case "customer.subscription.deleted":
        const subscriptionDeleted = event.data.object;
        await onSubscriptionDeleted(subscriptionDeleted);
        break;
      // ... handle other event types
      // default:
      //   console.log(`Unhandled event type ${event.type}`);
    }
  } catch (error) {
    console.error("Error handling event:", error);
    throw error;
  }

  return c.json({});
});

export const cancelSubscription = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const user = c.get("user") as DirectusUser;

    const subscriptions = await directus.request(
      readItems("saas_subscriptions", {
        filter: {
          customer: {
            _eq: user.id,
          },
        },
      })
    );

    if (subscriptions.length === 0) {
      throw new Error("No subscriptions found for this user");
    }

    const subscription = subscriptions[0];
    const stripe = c.get("stripe");

    await stripe.subscriptions.update(
      subscription.stripe_subscription_id as string,
      {
        cancel_at_period_end: true,
      }
    );

    return c.json({});
  }
);

export const getCurrentBillingPlan = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const user = c.get("user") as DirectusUser;
    // console.log("directus", await directus.getToken());
    // console.log("user", user);
    try {
      const subscriptions = await directus.request(
        readItems("saas_subscriptions", {
          filter: {
            customer: {
              _eq: user.id,
            },
            status: {
              _neq: "canceled",
            },
          },
          sort: ["-date_created"],
        })
      );
      // console.log("subscriptions", subscriptions);

      // if (subscriptions.length === 0) {
      //   const product = await directus.request(
      //     readItem("saas_products", "free_plan")
      //   );

      //   return c.json({
      //     subscription: null,
      //     product,
      //   });
      // }

      const subscription = subscriptions[0];
      return c.json({
        subscription,
        // product,
      });
    } catch (error:any) {
      return c.json(error);
    }
  }
);

export const getCurrentUsage = factory.createHandlers(logger(), async (c) => {
  const subscriptionDurable = c.get("subscriptionDurable");
  return c.json(await subscriptionDurable.get());
});

export const recordUsage = factory.createHandlers(logger(), async (c) => {
  const { bot: botId, usage } = await c.req.json();
  const directus = c.get("directAdmin");

  const bot = await directus.request(
    readItem("bots", botId, {
      fields: ["id", "name", "user_created"],
    })
  );

  const subscriptions = await directus.request(
    readItems("saas_subscriptions", {
      filter: {
        customer: {
          _eq: bot.user_created,
        },
        status: {
          _neq: "canceled",
        },
      },
      sort: ["-date_created"],
    })
  );

  if (subscriptions.length === 0) {
    throw new Error("No subscriptions found for this user");
  }

  const id = c.env.SUBSCRIPTION_DURABLE.idFromName(subscriptions[0].id);
  const subscriptionDurable = c.env.SUBSCRIPTION_DURABLE.get(id);

  if (usage.smart_reply) {
    await subscriptionDurable.incrementSmartReply(usage.smart_reply);
  }

  if (usage.generative_reply) {
    await subscriptionDurable.incrementGenerativeReply(usage.generative_reply);
  }

  if (usage.auto_reply) {
    await subscriptionDurable.incrementAutoReply(usage.auto_reply);
  }

  if (usage.check_slips) {
    await subscriptionDurable.incrementCheckSlips(usage.check_slips);
  }

  return c.json(bot);
});
