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
import { addDays, addMonths, differenceInDays, format, formatDate, sub } from "date-fns";
import { StripeService } from "~/services/stripe.service";
import { randomNumber, randomString } from "@repo/shared/utils";

const factory = createFactory<Env>();

// createFreePlan
export const createOnboardFreePlan = factory.createHandlers(
  logger(),
  async (c) => {
    const directus = c.get("directus");
    const directAdmin = c.get("directAdmin");
    const user = c.get("user") as DirectusUser;
    const stripe = c.get("stripe");
    const stripeService = c.get("stripeService");

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
        console.error("User already subscribed");
        return c.json({ error: "User already subscribed" });
      }

      // First check if free price already exists
      const prices = await stripe.prices.list({
        lookup_keys: ["aibots_free_plan"],
        active: true,
      });

      // get free plan price id from prices
      if (prices.data?.length === 0) {
        console.error("Free plan not found");
        throw new Error("Free plan not found");
      }

      if (user.email === undefined) {
        console.error("User email not found");
        throw new Error("User email not found");
      }

      const existCustomer = await directus
        .request(readItem("saas_customers", user.id))
        .catch((e) => null);

      console.log("existCustomer", existCustomer);

      if (!existCustomer) {
        // create stripe customer

        const customer = await stripeService.createCustomer(user);
        const sub = await stripeService.createFreePlan(customer.id, user.id);

        const promoCode = `WELCOME-${randomString(8).toUpperCase()}`;
        // create welcome promo code
        const promo = await stripeService.createPromotionCode({
          coupon: c.env.STRIPE_WELCOME_COUPON,
          code: promoCode,
          expires_at: Math.ceil(addDays(new Date(), 30).getTime() / 1000),
          max_redemptions: 1,
          customer: customer.id,
          metadata: {
            user_id: user.id,
          }
        });

        const coupon = await directAdmin.request(
          createItem("saas_coupons", {
            customer: user.id,
            code: promoCode,
            start_date: format(new Date(), "yyyy-MM-dd"),
            end_date: format(
              new Date((promo.expires_at as number) * 1000),
              "yyyy-MM-dd"
            ),
            env: c.env.NODE_ENV,
            translations: [
              {
                languages_code: "en-US",
                metadata: {
                  discount: "$30 OFF",
                  description: "Launch your first AI chatbot",
                  terms: "For any plans with $30 discount",
                },
              },
              {
                languages_code: "th-TH",
                metadata: {
                  discount: "ส่วนลด ฿1,000",
                  description: "เปิดตัวแชทบอท AI ตัวแรกของคุณ",
                  terms: "ส่วนลด 1,000 บาท ในทุกแพลน",
                },
              },
            ],
          })
        );

        return c.json(sub);
      }

      // create stripe subscription
      const sub = await stripeService.createFreePlan(
        existCustomer.stripe_customer_id,
        user.id
      );
      return c.json(sub);
    } catch (error: any) {
      console.error(error);
      return c.json({ error: error.message });
    }
  }
);

export const createCheckout = factory.createHandlers(logger(), async (c) => {
  const { PORTAL_URL, STRIPE_API_KEY, STRIPE_WEBHOOK_SECRET } = c.env;

  const {
    currentSubscriptionId,
    currentPriceId,
    newPriceId,
    language,
    currency,
    action,
  } = await c.req.json();
  const stripeService = c.get("stripeService");
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
    const subscription = await stripe.subscriptions.retrieve(
      currentSubscriptionId
    );
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
        const price = await stripeService.getPrice(
          subscription.items.data[0].price.id
        );
        let old_unit_amount = price.unit_amount;

        if (price.currency_options) {
          old_unit_amount = price.currency_options[currency].unit_amount;
        }

        // Calculate prorated amount
        const oldSubscriptionAmount = old_unit_amount || 0;
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

  const payload = {
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
    // discounts, // Apply the calculated discount
    // allow_promotion_codes: discounts.length < 1,
  } as any;

  if (discounts.length > 0) {
    payload["discounts"] = discounts;
  } else {
    payload["allow_promotion_codes"] = true;
  }
  // payload["allow_promotion_codes"] = true;

  const session = await stripe.checkout.sessions.create(payload);

  return c.json({
    sessionId: session.id,
    hasDiscount: discounts.length > 0,
  });
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
  console.log("recordUsage:body", body);
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

export const getCoupons = factory.createHandlers(logger(), async (c) => {
  const { lang } = c.req.query();
  const billingService = c.get("billingService");
  const user = c.get("user");

  const coupons = await billingService.getCoupons({
    lang,
    customer: user.id,
  });

  return c.json(coupons);
});
