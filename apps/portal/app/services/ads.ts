import { AdApp, AdDashboard, AdInsight, FacebookAdAccount } from "~/@types/app";
import api from "./api";
import { CampaignResult, Campaign } from "~/@types/ads/campaign.type";
import { AdsetResult } from "~/@types/ads/adset.type";

export const fetchAdAccounts = () => api.get("/facebook/adaccounts");

export const fetchAds = (wsid: string) =>
  api.get<{ items: AdApp[] }>("/ads?wsid=" + wsid);

export const fetchAd = (id: string) => api.get<AdApp>(`/items/ads/${id}`);

export const insertFacebookAdAccounts = (data: FacebookAdAccount[]) =>
  api.post<FacebookAdAccount[]>("/items/ad_accounts", data);

export const updateAd = (id: string, data: AdApp) => {
  return api.patch(`/items/ads/${id}`, data);
};

export const deleteAd = (id: string) => {
  return api.delete(`/items/ads/${id}`);
};

export const fetchAdAccount = (id: string) =>
  api.get<FacebookAdAccount>("/adaccounts/" + id);

export const fetchAdaccountInsight = (id: string) =>
  api.get<AdDashboard>("/adaccounts/" + id + "/insights");

export const fetchAdaccountSpendDaily = (id: string) =>
  api.get<
    Array<{
      date: string;
      spend: number;
      revenue: number;
    }>
  >("/adaccounts/" + id + "/spend-daily");

export const fetchAdSpendDaily = (adaccountId: string, adId: string) =>
  api.get<
    Array<{
      date: string;
      spend: number;
      revenue: number;
    }>
  >("/adaccounts/" + adaccountId + "/ads/" + adId + "/spend-daily");

export const fetchAdCampaigns = (id: string) =>
  api.get<
    Array<{
      id: string;
      name: string;
      revenue: number;
      spend: number;
    }>
  >("/adaccounts/" + id + "/campaigns");

export const fetchAdccountPerformanceCampaigns = (id: string) =>
  api.get<
    Array<{
      id: string;
      name: string;
      revenue: number;
      spend: number;
    }>
  >("/adaccounts/" + id + "/performance/campaigns");

export const fetchAdccountPerformanceCampaignsTop10 = (id: string) =>
  api.get<Array<Campaign>>(
    "/adaccounts/" + id + "/performance/campaigns/top10"
  );

export const getCampaigns = (
  id: string,
  { q, limit = 25, after }: { q?: string; limit?: number; after?: string }
) => {
  const url = new URL(
    window.location.origin + `/api/adaccounts/${id}/campaigns`
  );
  url.searchParams.append("limit", limit.toString());
  if (after) {
    url.searchParams.append("after", after);
  }
  if (q) {
    url.searchParams.append("q", q);
  }
  return api.get<CampaignResult>(url.toString());
};

export const getAdsets = (
  id: string,
  { q, limit = 25, after }: { q?: string; limit?: number; after?: string }
) => {
  const url = new URL(window.location.origin + `/api/adaccounts/${id}/adsets`);
  url.searchParams.append("limit", limit.toString());
  if (after) {
    url.searchParams.append("after", after);
  }
  if (q) {
    url.searchParams.append("q", q);
  }
  return api.get<AdsetResult>(url.toString());
};

export const getAds = (
  id: string,
  { q, limit = 25, after }: { q?: string; limit?: number; after?: string }
) => {
  const url = new URL(window.location.origin + `/api/adaccounts/${id}/ads`);
  url.searchParams.append("limit", limit.toString());
  if (after) {
    url.searchParams.append("after", after);
  }
  if (q) {
    url.searchParams.append("q", q);
  }
  return api.get<AdsetResult>(url.toString());
};

export const fetchAdInsight = (adaccountId: string, adId: string) =>
  api.get<AdDashboard>(`adaccounts/${adaccountId}/ads/${adId}/insight`);
