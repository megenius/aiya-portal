import {
  KVNamespace,
  Queue,
  Vectorize,
  R2Bucket,
} from "@cloudflare/workers-types";

import { ClientType, AdminClientType } from "~/utils/directus";

export interface Env {
  Bindings: WorkerEnv;
  Variables: {
    token: string;
    directus: ClientType;
    directAdmin: AdminClientType;
  };
}
