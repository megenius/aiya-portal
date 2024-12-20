import {
  KVNamespace,
  Queue,
  Vectorize,
  R2Bucket,
} from "@cloudflare/workers-types";
import { AdminClientType, ClientType } from "~/utils/directus";

interface QueqEnv {
  endpoint: string;
  token: string;
}

export interface Env {
  Bindings: WorkerEnv;
  Variables: {
    token: string;
    directus: ClientType;
    directAdmin: AdminClientType;
  };
}
