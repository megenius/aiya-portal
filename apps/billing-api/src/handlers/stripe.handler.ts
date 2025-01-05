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

const factory = createFactory<Env>();

export const webhook = factory.createHandlers(logger(), async (c) => {
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

  const onCustomerUpdated = async (customer: Stripe.Customer) => {
    const customerUpdated = await directus.request(
      updateItem("saas_customers", customer.metadata.user_id, {
        address_line1: customer.address?.line1 as string,
        address_line2: customer.address?.line2 as string,
        city: customer.address?.city as string,
        state: customer.address?.state as string,
        postal_code: customer.address?.postal_code as string,
        country: customer.address?.country as string,
        phone: customer.phone as string,
      })
    );

    console.log("Customer was updated!", customer);
  };

  const onCheckoutSessionCompleted = async (
    session: Stripe.Checkout.Session
  ) => {
    const userId = session.metadata?.user_id as string;
    const customer = session.customer_details;

    // Get the new subscription ID from the session
    const newSubscription = await stripe.subscriptions.retrieve(
      session.subscription as string
    );

    // Get the old subscription ID from metadata
    const oldSubscriptionId = newSubscription.metadata.old_subscription_id;

    if (oldSubscriptionId) {
      // Cancel the old subscription
      try {
        await stripe.subscriptions.cancel(oldSubscriptionId);
        console.log(
          `Successfully cancelled old subscription: ${oldSubscriptionId}`
        );
      } catch (error) {
        console.error("Error cancelling old subscription:", error);
      }
    }

    const customerUpdated = await directus.request(
      updateItem("saas_customers", userId, {
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
      })
    );

    console.log("Customer was updated!", customerUpdated);
  };

  const onSubscriptionCreated = async (subscription: Stripe.Subscription) => {
    const item = subscription.items.data[0];
    const plan = item.plan as Stripe.Plan;

    console.log("Subscription was created!", subscription);

    const price = await stripe.prices.retrieve(item.price.id, {
      expand: ["product", "currency_options"],
    });

    const { features } = await directus.request(
      readItem("saas_prices", price.id)
    );

    const subscriptionCreated = await directus
      .request(
        createItem("saas_subscriptions", {
          customer: subscription.metadata?.user_id,
          stripe_customer_id: subscription.customer as string,
          stripe_subscription_id: subscription.id,
          stripe_price_id: item.price.id,
          stripe_product_id: plan.product as string,
          plan_type: getPlanTypeFromProductId(plan.product as string), // function แปลง product id เป็น plan_type
          amount:
            (price.currency_options?.[subscription.currency]
              ?.unit_amount as number) / 100, // แปลงจาก cents เป็นหน่วยเงิน
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
          features: features,
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

      // case "customer.updated":
      //   const customerUpdated = event.data.object;
      //   await onCustomerUpdated(customerUpdated);
      //   break;

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
