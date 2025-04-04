// Generated by Wrangler by running `wrangler types src/types/worker-configuration.d.ts --env-interface WorkerEnv`

import { FollowerDO } from "~/durables/FollowerDO";

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
	FOLLOWERS: DurableObjectNamespace<FollowerDO>
	PROVIDERS: DurableObjectNamespace<ProviderDO>;
}
