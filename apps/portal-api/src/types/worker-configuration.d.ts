// Generated by Wrangler by running `wrangler types src/types/worker-configuration.d.ts --env-interface WorkerEnv`

interface WorkerEnv {
	CACHING: KVNamespace;
	NODE_ENV: string;
	PORT: string;
	DIRECTUS_URL: string;
	DIRECTUS_SECRET_KEY: string;
	DIRECTUS_SERVICE_TOKEN: string;
	PORTAL_URL: string;
	AWS_ACCESS_KEY_ID: string;
	AWS_SECRET_ACCESS_KEY: string;
	AWS_REGION: string;
	BOT_MESSAGE_BUCKET_CDN: string;
	R2_TOKEN: string;
	RS_AWS_ACCESS_KEY_ID: string;
	R2_AWS_SECRET_ACCESS_KEY: string;
	LINE_WEBHOOK_ENDPOINT: string;
	FB_API_URL: string;
	FB_APP_ID: string;
	FB_APP_SECRET: string;
	GOOGLE_CLIENT_ID: string;
	GOOGLE_CLIENT_SECRET: string;
	GOOGLE_REDIRECT_URI: string;
	LINE_CLIENT_ID: string;
	LINE_CLIENT_SECRET: string;
	LINE_REDIRECT_URI: string;
	STRIPE_API_KEY: string;
	STRIPE_WEBHOOK_SECRET: string;
	SERVICE_BILLING_API: string;
	BOT_MESSAGE_BUCKET: R2Bucket;
	BillingService: Fetcher;
}