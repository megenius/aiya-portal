// Generated by Wrangler by running `wrangler types src/types/worker-configuration.d.ts --env-interface WorkerEnv`

import { MyDurableObject } from "~/durables/MyDurableObject";

interface WorkerEnv {
	CACHING: KVNamespace;
	NODE_ENV: string;
	PORT: string;
	LAMBDA_SECRET_KEY: string;
	DIRECTUS_URL: string;
	DIRECTUS_SECRET_KEY: string;
	DIRECTUS_SERVICE_TOKEN: string;
	PORTAL_URL: string;
	FB_APP_ID: string;
	FB_APP_SECRET: string;
	FB_APP_LOGIN_ID: string;
	AWS_ACCESS_KEY_ID: string;
	AWS_SECRET_ACCESS_KEY: string;
	OPENSEARCH_ENDPOINT: string;
	OPENSEARCH_USERNAME: string;
	OPENSEARCH_PASSWORD: string;
	COUNTERS: DurableObjectNamespace<MyDurableObject> /* Counter */;
}