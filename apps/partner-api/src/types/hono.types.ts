import {
  KVNamespace,
  Queue,
  Vectorize,
  R2Bucket,
} from "@cloudflare/workers-types";

interface QueqEnv {
  endpoint: string;
  token: string;
}

export interface Env {
  Bindings: WorkerEnv;
  Variables: {
  
  };
}
