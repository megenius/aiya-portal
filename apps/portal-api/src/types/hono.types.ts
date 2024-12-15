import { KVNamespace, Queue, Vectorize, R2Bucket } from "@cloudflare/workers-types";
import Stripe from "stripe";
import { ClientType, AdminClientType } from "~/utils/directus";

export type Env = {
  Bindings: Bindings;
  Variables: Variables;
};

type Variables = {
  token: string;
  directus: ClientType;
  directAdmin: AdminClientType;
  stripe: Stripe;
};

export type Bindings = {
  NODE_ENV: string
  DIRECTUS_URL: string
  DIRECTUS_SECRET_KEY: string
  DIRECTUS_SERVICE_TOKEN: string
  PORTAL_URL: string
  FB_API_URL: string;
  FB_APP_ID: string
  FB_APP_SECRET: string
  AWS_ACCESS_KEY_ID: string
  AWS_SECRET_ACCESS_KEY: string
  AWS_REGION: string
  BOT_MESSAGE_BUCKET_CDN: string;
  BOT_MESSAGE_BUCKET: R2Bucket
  LINE_WEBHOOK_ENDPOINT: string
  GOOGLE_CLIENT_ID: string
  GOOGLE_CLIENT_SECRET: string
  GOOGLE_REDIRECT_URI: string
  LINE_CLIENT_ID: string
  LINE_CLIENT_SECRET: string
  LINE_REDIRECT_URI: string

  STRIPE_API_KEY: string
  STRIPE_WEBHOOK_SECRET: string
}

