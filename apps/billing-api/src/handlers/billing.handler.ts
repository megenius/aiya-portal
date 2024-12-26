import {
  createItem,
  DirectusUser,
  readItem,
  readItems,
  readMe,
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

export const getBillings = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directus");
  // const billings = await directus.request(readItems("billings"));
  return c.json({});
});

function getTrialPeriodDays() {
  const currentDate = new Date();
  const newYear2025 = new Date("2025-01-01");

  // If current date is before 2025, return 45 days, otherwise 15 days
  return currentDate < newYear2025 ? 45 : 15;
}

export const createCheckout = factory.createHandlers(logger(), async (c) => {
  // const { amount, currency, description, success_url, cancel_url } = await c.req.json();
  const { PORTAL_URL } = c.env;
  const { priceId, customerEmail } = await c.req.json();
  const stripe = c.get("stripe");

  const trialDays = getTrialPeriodDays();
  console.log(`Creating checkout session with ${trialDays} days trial period`);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    subscription_data: {
      trial_period_days: 45,
      trial_settings: {
        end_behavior: {
          missing_payment_method: "cancel",
        },
      },
    },
    success_url: `${PORTAL_URL}/payment/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${PORTAL_URL}/plans`,
    billing_address_collection: "required",
    // customer: customerId,
    customer_email: customerEmail,
    phone_number_collection: {
      enabled: true,
    },
    tax_id_collection: {
      enabled: true,
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

  const onSubscriptionCreated = async (
    userId: string,
    subscription: Stripe.Subscription
  ) => {
    const item = subscription.items.data[0];
    const plan = item.plan as Stripe.Plan;

    const subscriptionCreated = await directus
      .request(
        createItem("saas_subscriptions", {
          user_id: userId,
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
    const customerCreated = await directus.request(
      createItem("saas_customers", {
        user_id: user.id,
        stripe_customer_id: session.customer as string,
        company_name: customer?.name as string,
        email: customer?.email as string,
        phone: customer?.phone as string,
        tax_id: customer?.tax_ids ? (customer.tax_ids[0].value as string) : "",
        tax_type: customer?.tax_ids ? (customer.tax_ids[0].type as string) : "",
        address_line1: customer?.address?.line1 as string,
        address_line2: customer?.address?.line2 as string,
        city: customer?.address?.city as string,
        state: customer?.address?.state as string,
        postal_code: customer?.address?.postal_code as string,
        country: customer?.address?.country as string,
        metadata: session.metadata,
      })
    );
    console.log("Customer was created!", customerCreated);

    const subscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );
    await onSubscriptionCreated(user.id, subscription);
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
  try {
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        await onCheckoutSessionCompleted(checkoutSessionCompleted);
        // Then define and call a function to handle the event charge.succeeded
        break;

      case "customer.subscription.updated":
        const subscriptionUpdated = event.data.object;
        await onSubscriptionUpdated(subscriptionUpdated);
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
          user_id: {
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

    const subscriptions = await directus.request(
      readItems("saas_subscriptions", {
        filter: {
          user_id: {
            _eq: user.id,
          },
        },
        sort: ["-date_created"],
      })
    );

    if (subscriptions.length === 0) {
      const product = await directus.request(
        readItem("saas_products", "free_plan")
      );

      return c.json({
        subscription: null,
        product,
      });
    }

    const product = await directus.request(
      readItem("saas_products", subscriptions[0].stripe_product_id)
    );

    const subscription = subscriptions[0];
    return c.json({
      subscription,
      product,
    });
  }
);
