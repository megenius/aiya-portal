import { KVNamespace, Queue, Vectorize, R2Bucket } from "@cloudflare/workers-types";
import Stripe from "stripe";
import { ClientType, AdminClientType } from "~/utils/directus";

export type Env = {
  Bindings: WorkerEnv;
  Variables: Variables;
};

type Variables = {
  token: string;
  directus: ClientType;
  directAdmin: AdminClientType;
  stripe: Stripe;
};