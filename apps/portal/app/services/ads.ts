import { AdApp, AdDashboard, AdInsight, FacebookAdAccount } from "~/@types/app";
import api from "./api";
import { CampaignResult } from "~/@types/ads/campaign.type";
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
  api.get<FacebookAdAccount>("/items/ad_accounts/" + id);

export const fetchAdDashboard = (id: string) =>
  api.get<AdDashboard>("/ads/" + id + "/dashboard");

export const fetchAdSpendDaily = (id: string) =>
  api.get<
    Array<{
      date: string;
      spend: number;
      revenue: number;
    }>
  >("/ads/" + id + "/spend-daily");

export const fetchAdCampaigns = (id: string) =>
  api.get<
    Array<{
      id: string;
      name: string;
      revenue: number;
      spend: number;
    }>
  >("/ads/" + id + "/campaigns");

export const fetchAdCampaignPerformance = (id: string) =>
  api.get<
    Array<{
      id: string;
      name: string;
      revenue: number;
      spend: number;
    }>
  >("/ads/" + id + "/campaigns/performance");


export const getCampaigns = (
  id: string,
  { q, limit = 25, after }: { q?: string; limit?: number; after?: string }
) => {
  const url = new URL(window.location.origin + `/api/ads/${id}/campaigns`);
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
  const url = new URL(window.location.origin + `/api/ads/${id}/adsets`);
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
  const url = new URL(window.location.origin + `/api/ads/${id}/ads`);
  url.searchParams.append("limit", limit.toString());
  if (after) {
    url.searchParams.append("after", after);
  }
  if (q) {
    url.searchParams.append("q", q);
  }
  return api.get<AdsetResult>(url.toString());
};
