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
import { formatDate, sub } from "date-fns";

const factory = createFactory<Env>();

// createFreePlan
export const createFreePlan = factory.createHandlers(logger(), async (c) => {
  const directus = c.get("directus");
  const user = c.get("user") as DirectusUser;
  const stripe = c.get("stripe");
  try {
    const existCustomer = await directus
      .request(readItem("saas_customers", user.id))
      .catch((e) => null);

    if (existCustomer) {
      console.log("Customer already exists");

      return c.json({ error: "Customer already exists" });
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
      currency: "thb",
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
  const { priceId, language, annual, price, currency } = await c.req.json();
  const stripe = c.get("stripe");
  const directus = c.get("directus");

  // cancel stripe subscription
  const cancelFreePlanSubscription = async () => {
    const user = c.get("user") as DirectusUser;
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

    if (subscriptions.length === 0) {
      throw new Error("No subscriptions found for this user");
    }

    const subscription = subscriptions[0];
    console.log("Cancelling subscription", subscription.stripe_subscription_id);

    await stripe.subscriptions.cancel(
      subscription.stripe_subscription_id as string,
    );
  };

  // let trialDays = getTrialPeriodDays();

  // if (annual || price === 0) {
  //   trialDays = 0;
  // }

  // console.log(
  //   `Creating checkout session with ${trialDays} days trial period`,
  //   language
  // );

  await cancelFreePlanSubscription();

  // check if user already subscribed
  const user = c.get("user") as DirectusUser;
  const customer = await directus.request(readItem("saas_customers", user.id));

  const subscriptions = await stripe.subscriptions.list({
    customer: customer.stripe_customer_id,
    status: "active",
    limit: 1,
  });

  const everTrialed = async () => {
    const subscriptions = await stripe.subscriptions.list({
      customer: customer.stripe_customer_id,
      status: "trialing",
      limit: 1,
    });

    return subscriptions.data.length > 0;
  };

  const alreayTrialed = await everTrialed();

  // if (alreayTrialed) {
  //   trialDays = 0;
  // }

  const subscription = subscriptions.data[0];

  const metadata = {
    user_id: user.id,
    old_subscription_id: subscription?.id,
  };

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    currency,
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    mode: "subscription",
    subscription_data: {
      metadata,
    },
    // subscription_data: trialDays
    //   ? {
    //       trial_period_days: trialDays,
    //       trial_settings: {
    //         end_behavior: {
    //           missing_payment_method: "cancel",
    //         },
    //       },
    //       metadata,
    //     }
    //   : {
    //       metadata,
    //     },
    success_url: `${PORTAL_URL}/payment/stripe/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${PORTAL_URL}/plans`,
    billing_address_collection: "required",
    customer: customer.stripe_customer_id,
    // customer_email: email,
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
    metadata,
    locale: language,
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
  const stripe = c.get("stripe");
  const directus = c.get("directus");
  const { lang = "en-US", interval = "month" } = c.req.query();

  const freePlan = await directus.request(
    readItems("saas_prices", {
      filter: {
        lookup_key: {
          _eq: "aibots_free_plan",
        },
      },
      fields: ["*", { translations: ["*"] }],
    })
  );

  const _prices = await directus.request(
    readItems("saas_prices", {
      deep: {
        translations: {
          _filter: {
            languages_code: {
              _eq: lang,
            },
          },
        },
      },
      fields: ["*", { translations: ["*"] }],
      filter: {
        active: {
          _eq: true,
        },
        env: {
          _eq: c.env.NODE_ENV,
        },
        pricing_plan_interval: {
          _eq: interval,
        },
      },
    })
  );

  const prices = [...freePlan, ..._prices].map((item) => {
    const mappedItem = { ...item } as any;

    if (item.translations?.length === 0) {
      return {
        ...item,
        description: "",
        unit_amount: 0,
        currency: "usd",
      };
    }

    const translation = item.translations?.[0] as {
      description: string;
      unit_amount: number;
      currency: string;
    };

    mappedItem.description = translation.description;
    mappedItem.unit_amount = translation.unit_amount / 100;
    mappedItem.currency = translation.currency;

    // Remove the translations property
    delete mappedItem.translations;

    return mappedItem;
  });

  return c.json(prices);
});
