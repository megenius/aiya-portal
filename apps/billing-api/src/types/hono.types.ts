import {
  KVNamespace,
  Queue,
  Vectorize,
  R2Bucket,
} from "@cloudflare/workers-types";
import { DirectusUser } from "@directus/sdk";
import Stripe from "stripe";
import { AdminClientType, ClientType } from "~/utils/directus";


export interface Env {
  Bindings: WorkerEnv;
  Variables: {
    token: string;
    directus: ClientType;
    directAdmin: AdminClientType;
    stripe: Stripe;
    user: DirectusUser;
  };
}
