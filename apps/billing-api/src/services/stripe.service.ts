import { DirectusUser } from "@directus/sdk";
import Stripe from "stripe";

export class StripeService {
  private stripe: Stripe;

  constructor(stripe: Stripe) {
    this.stripe = stripe;
  }

  static getInstance(stripe: Stripe) {
    return new StripeService(stripe);
  }

  async createCustomer(user: DirectusUser) {
    const customer = await this.stripe.customers.create({
      email: user.email as string,
      name: user.first_name + " " + user.last_name,
      metadata: {
        user_id: user.id,
      },
    });

    return customer;
  }

  async createFreePlan(stripCustomerId: string, userId: string) {
    // First check if free price already exists
    const prices = await this.stripe.prices.list({
      lookup_keys: ["aibots_free_plan"],
      active: true,
    });

    // get free plan price id from prices
    if (prices.data?.length === 0) {
      throw new Error("Free plan not found");
    }

    const price = prices.data[0];

    // create stripe subscription
    const subscription = await this.stripe.subscriptions.create({
      currency: "thb",
      customer: stripCustomerId,
      items: [{ price: price.id }],
      metadata: {
        user_id: userId,
      },
    });

    return subscription;
  }

  async getPrice(priceId: string) {
    return this.stripe.prices.retrieve(priceId, {
      expand: ["product", "currency_options"],
    });
  }

  async getProduct(productId: string) {
    return this.stripe.products.retrieve(productId);
  }

  async getCheckoutSession(sessionId: string) {
    return this.stripe.checkout.sessions.retrieve(sessionId);
  }

  async getSubscription(subscriptionId: string) {
    return this.stripe.subscriptions.retrieve(subscriptionId);
  }

  async cancelSubscription(
    subscriptionId: string,
    opts?: {
      isFreePlan?: boolean;
      feedback?: Stripe.SubscriptionUpdateParams.CancellationDetails.Feedback;
    }
  ) {
    return this.stripe.subscriptions.cancel(subscriptionId);
    // if (opts?.isFreePlan) {
    //   return this.stripe.subscriptions.cancel(subscriptionId);
    // }

    // return this.stripe.subscriptions.update(subscriptionId, {
    //   cancel_at_period_end: true,
    //   metadata: {
    //     action: "cancel",
    //     canceled_by: "user",
    //   },
    //   cancellation_details: {
    //     feedback: opts?.feedback,
    //   },
    // });
  }
}
