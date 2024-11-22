import { AdAccount } from "./app";

export type Env = {
  Bindings: Bindings;
  Variables: Variables;
};

type Variables = {
  token: string;
  ad_account: AdAccount;
};

type Bindings = {
  NODE_ENV: string;
  LAMBDA_SECRET_KEY: string;
  AD_ACCOUNT_SYNC: Queue;
  AD_CAMPAIGN_SYNC: Queue;
  AD_SETS_SYNC: Queue;
  AD_ADS_SYNC: Queue;
  AD_CAMPAIGN_SYNC_START: Queue<AdAccount>;
  AD_CAMPAIGN_SYNC_PROCESS: Queue;
  AD_CAMPAIGN_SYNC_PROCESS_ADSET: Queue;
  AD_CAMPAIGN_SYNC_PROCESS_ADSET_ADS: Queue;
  DIRECTUS_URL: string
  DIRECTUS_SECRET_KEY: string
  DIRECTUS_SERVICE_TOKEN: string
  PORTAL_URL: string
  FB_API_URL: string;
  FB_APP_ID: string
  FB_APP_SECRET: string
}
