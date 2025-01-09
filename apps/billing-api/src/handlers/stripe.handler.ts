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
  const billingAdminService = c.get("billingAdminService");
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

  try {
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data.object;
        await billingAdminService.onCheckoutSessionCompleted(checkoutSessionCompleted);
        // await onCheckoutSessionCompleted(checkoutSessionCompleted);
        // Then define and call a function to handle the event charge.succeeded
        break;

      case "customer.created":
        const customerCreated = event.data.object;
        await billingAdminService.onCustomerCreated(customerCreated);
        break;

      // case "customer.updated":
      //   const customerUpdated = event.data.object;
      //   await onCustomerUpdated(customerUpdated);
      //   break;

      case "customer.subscription.created":
        const subscriptionCreated = event.data.object;
        await billingAdminService.onCustomerSubscriptionCreated(subscriptionCreated);
        // await onSubscriptionCreated(subscriptionCreated);
        break;

      case "customer.subscription.updated":
        const subscriptionUpdated = event.data.object;
        await billingAdminService.onCustomerSubscriptionUpdated(subscriptionUpdated);
        // await onSubscriptionUpdated(subscriptionUpdated);
        break;

      case "customer.subscription.deleted":
        const subscriptionDeleted = event.data.object;
        await billingAdminService.onCustomerSubscriptionDeleted(subscriptionDeleted);
        // await onSubscriptionDeleted(subscriptionDeleted);
        break;

      case "invoice.created":
        const invoiceCreated = event.data.object;
        await billingAdminService.onInvoiceCreated(invoiceCreated);
        break;

      case "invoice.paid":
        const invoicePaid = event.data.object;
        await billingAdminService.onInvoicePaid(invoicePaid);
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
