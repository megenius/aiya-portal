import { AdApp, FacebookAdAccount } from "~/@types/app";
import api from "./api";

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
  api.get<{
    ad_account_id: string;
    date_range: string;
    reach: number;
    frequency: number;
    spend: number;
    cpc: number;
    cpm: number;
    cpp: number;
    ctr: number;
    roas: number;
    purchase: number
  }>("/ads/" + id + "/dashboard");
