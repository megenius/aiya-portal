import {
  KVNamespace,
  Queue,
  Vectorize,
  R2Bucket,
} from "@cloudflare/workers-types";
import { DirectusUser } from "@directus/sdk";
import Stripe from "stripe";
import { CounterDurable } from "~/durables/CounterDurable";
import { AdminClientType, ClientType } from "~/utils/directus";
import { WorkerEnv } from "./worker-configuration";
import { SubscriptionDurable } from "~/durables/SubscriptionDurable";
import { StripeService } from "~/services/stripe.service";
import BillingService from "~/services/billing.service";
export interface Env {
  Bindings: WorkerEnv;
  Variables: {
    token: string;
    directus: ClientType;
    directAdmin: AdminClientType;
    stripe: Stripe;
    stripeService: StripeService;
    billingService: BillingService;
    billingAdminService: BillingService;
    user: DirectusUser;
    counterDurable: DurableObjectStub<CounterDurable>;
    subscriptionDurable: DurableObjectStub<SubscriptionDurable>;
  };
}
