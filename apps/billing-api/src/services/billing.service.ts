import {
  createItem,
  DirectusClient,
  readItem,
  readItems,
  readUser,
  sleep,
  updateItem,
} from "@directus/sdk";
import { StripeService } from "./stripe.service";
import { AdminClientType, ClientType } from "~/utils/directus";
import Stripe from "stripe";

export class BillingService {
  private stripeService: StripeService;
  private directus: ClientType | AdminClientType;
  private env: string;

  constructor(
    stripeService: StripeService,
    directus: ClientType | AdminClientType,
    env: string
  ) {
    this.stripeService = stripeService;
    this.directus = directus;
    this.env = env;
  }

  async getPlans({
    lang = "en-US",
    interval = "month",
    env = "production",
  }: {
    lang?: string;
    interval?: string;
    env?: string;
  }) {
    const freePlan = await this.directus.request(
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
        filter: {
          lookup_key: {
            _eq: "aibots_free_plan",
          },
          env: {
            _eq: env,
          },
        },
        fields: ["*", { translations: ["*"] }],
      })
    );

    const _prices = await this.directus.request(
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
            _eq: env,
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

    return prices;
  }

  async getCurrentPlan(user: Stripe.Customer) {
    const subscription = await this.directus.request(
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

    if (subscription.length === 0) {
      return null;
    }

    const plan = await this.directus.request(
      readItem("saas_prices", subscription[0].stripe_price_id)
    );

    return { subscription: subscription[0], plan };
  }

  async changePlan(subscriptionId: string, newPriceId: string) {
    const subscription = await this.directus.request(
      readItem("saas_subscriptions", subscriptionId)
    );
    const plan = await this.directus.request(
      readItem("saas_prices", subscription.stripe_price_id)
    );
    const newPlan = await this.directus.request(
      readItem("saas_prices", newPriceId)
    );

    const isFreePlan = plan.pricing_type === "free";
    const isFreePlanUpgrade = newPlan.pricing_type === "free";

    if (isFreePlan && !isFreePlanUpgrade) {
      // Upgrade from free plan to paid plan
      await this.stripeService.upgradeSubscription(subscriptionId, newPriceId);
    } else if (!isFreePlan && !isFreePlanUpgrade) {
      // Upgrade from paid plan to paid plan
      await this.stripeService.upgradeSubscription(subscriptionId, newPriceId);
    } else if (!isFreePlan && isFreePlanUpgrade) {
      // Downgrade from paid plan to free plan
      await this.stripeService.cancelSubscription(subscriptionId);
      await this.stripeService.createFreePlan(
        subscription.stripe_customer_id as string,
        subscription.customer as string
      );
    }
  }

  async getCoupons({ lang = "th-TH" }: { lang?: string; customer?: string }) {
    const coupons = await this.directus.request(
      readItems("saas_coupons", {
        deep: {
          translations: {
            _filter: {
              languages_code: {
                _eq: lang,
              },
            },
          },
        },
        filter: {
          env: {
            _eq: this.env,
          },
        },
        fields: ["*", { translations: ["*"] }],
      })
    );

    return coupons.map((item) => {
      let mappedItem = { ...item } as any;

      const translation = item.translations?.[0]
        ? (item.translations?.[0] as {
            metadata: {
              discount: string;
              desciption: string;
              terms: string;
            };
          })
        : null;

      if (translation) {
        mappedItem = { ...mappedItem, ...translation.metadata };
      }

      // Remove the translations property
      delete mappedItem.translations;

      return mappedItem;
    });
  }

  async getCoupon(couponId: string) {
    return this.directus.request(readItem("saas_coupons", couponId));
  }

  async onCustomerCreated(customer: Stripe.Customer) {
    const user = await this.directus.request(
      readUser(customer.metadata?.user_id)
    );
    if (!user) {
      console.error(`User with ID ${customer.metadata?.user_id} not found`);
      return;
    }

    const customerCreated = await this.directus.request(
      createItem("saas_customers", {
        id: user.id,
        stripe_customer_id: customer.id,
        name: customer.name as string,
        email: customer.email as string,
        env: this.env,
      })
    );

    console.log("Customer was created!", customerCreated);
  }

  async onCustomerSubscriptionCreated(subscription: Stripe.Subscription) {
    const item = subscription.items.data[0];
    const plan = item.plan as Stripe.Plan;
    console.log("Subscription was created!", subscription);

    const price = await this.stripeService.getPrice(item.price.id);

    const product = await this.stripeService.getProduct(plan.product as string);

    const { features } = await this.directus.request(
      readItem("saas_prices", price.id)
    );

    const subscriptionCreated = await this.directus
      .request(
        createItem("saas_subscriptions", {
          id: subscription.id,
          customer: subscription.metadata?.user_id,
          stripe_customer_id: subscription.customer as string,
          stripe_price_id: item.price.id,
          stripe_product_id: product.id,
          plan_type: product.metadata?.type,
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
          env: this.env,
        })
      )
      .catch((error) => {
        console.error("Error creating subscription:", error);
        throw error;
      });

    console.log("Saas Subscription was created!", subscriptionCreated);
  }

  async onCustomerSubscriptionUpdated(subscription: Stripe.Subscription) {
    const subscriptionUpdated = await this.directus.request(
      updateItem("saas_subscriptions", subscription.id, {
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
  }

  async onCustomerSubscriptionDeleted(subscription: Stripe.Subscription) {
    const subscriptionDeleted = await this.directus.request(
      updateItem("saas_subscriptions", subscription.id, {
        status: subscription.status,
        ended_at: subscription.ended_at
          ? new Date((subscription.ended_at as number) * 1000).toISOString()
          : null,
      })
    );
    console.log("Subscription was cancelled!", subscriptionDeleted);

    if (subscription.metadata?.canceled_by === "user") {
      // create free plan
      await this.stripeService.createFreePlan(
        subscription.customer as string,
        subscriptionDeleted.customer as string
      );
    }
  }

  async onCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
    const userId = session.metadata?.user_id as string;
    const customer = session.customer_details;

    const newSubscription = await this.stripeService.getSubscription(
      session.subscription as string
    );

    if (newSubscription.metadata?.action === "upgrade") {
      // Get the old subscription ID from metadata
      const oldSubscriptionId = newSubscription.metadata.old_subscription_id;
      if (oldSubscriptionId) {
        // Cancel the old subscription
        const oldSubscription = await this.directus.request(
          readItem("saas_subscriptions", oldSubscriptionId)
        );
        const plan = await this.directus.request(
          readItem("saas_prices", oldSubscription.stripe_price_id)
        );

        await this.stripeService.cancelSubscription(oldSubscriptionId, {
          isFreePlan: plan.pricing_type === "free",
        });
      }
    }

    const customerUpdated = await this.directus.request(
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

    const subscriptionUpdated = await this.directus.request(
      updateItem("saas_subscriptions", newSubscription.id, {
        status: "active",
      })
    );

    console.log(
      "onCheckoutSessionCompleted:Customer was updated!",
      customerUpdated
    );
    console.log(
      "onCheckoutSessionCompleted:Subscription was updated!",
      subscriptionUpdated
    );
  }

  async onInvoiceCreated(invoice: Stripe.Invoice) {
    const invoiceCreated = await this.directus.request(
      createItem("saas_invoices", {
        id: invoice.id,
        customer: invoice.subscription_details?.metadata?.user_id,
        stripe_customer_id: invoice.customer as string,
        stripe_subscription_id: invoice.subscription as string,
        stripe_payment_intent_id: invoice.payment_intent as string,
        amount_due: invoice.amount_due / 100,
        subtotal: invoice.subtotal / 100,
        total: invoice.total / 100,
        currency: invoice.currency,
        status: invoice.status as string,
        period_start: new Date(invoice.period_start * 1000).toISOString(),
        period_end: new Date(invoice.period_end * 1000).toISOString(),
        due_date: invoice.due_date
          ? new Date(invoice.due_date * 1000).toISOString()
          : null,
        metadata: invoice.metadata,
      })
    );

    console.log("Invoice was created!", invoiceCreated);
  }

  async onInvoicePaid(invoice: Stripe.Invoice) {
    const invoicePaid = await this.directus.request(
      updateItem("saas_invoices", invoice.id, {
        status: invoice.status as string,
        paid_at: invoice.status_transitions?.paid_at
          ? new Date(invoice.status_transitions?.paid_at * 1000).toISOString()
          : null,
      })
    );

    const subscriptionUpdated = await this.directus.request(
      updateItem(
        "saas_subscriptions",
        invoicePaid.stripe_subscription_id as string,
        {
          status: "active",
        }
      )
    );

    console.log("Subscription was updated!", subscriptionUpdated);
    console.log("Invoice was paid!", invoicePaid);
  }

  async getAiBotFreePlan() {
    return await this.stripeService.getAiBotFreePlan();
  }
}

export default BillingService;
