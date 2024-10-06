import { PageLiff } from "~/types/page";
import api from "./api";
import { QueQNS } from "~/types/app";

export const fetchAds = () =>
  api.get<Array<QueQNS.Ad>>(`/partners/queq/ads`).then((res) => res.data);

export const fetchAd = (adId: string) =>
  api.get<QueQNS.AdDetail>(`/partners/queq/ads/${adId}`).then((res) => res.data);
