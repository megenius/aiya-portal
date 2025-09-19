import type {
  CampaignWithUserStats,
  MissionWithUserProgress,
  CampaignRegistrationRequest,
  PDPAConsentRequest,
  MissionSubmissionRequest,
  MissionSubmissionResponse,
  CampaignCreditsResponse,
} from "~/types/campaign";
import api from "./api";

export const fetchCampaigns = () =>
  api.get<{ data: CampaignWithUserStats[] }>("/campaigns").then((res) => res.data);

export const fetchCampaign = (campaignId: string) =>
  api.get<{ data: CampaignWithUserStats }>(`/campaigns/${campaignId}`).then((res) => res.data);

export const consentPDPA = (campaignId: string, data: PDPAConsentRequest) =>
  api.post<{ success: boolean; data: { registration_id: string; next_step: string } }>(
    `/campaigns/${campaignId}/consent`,
    data
  ).then((res) => res.data);

export const registerCampaign = (campaignId: string, data: CampaignRegistrationRequest) =>
  api.post<{ success: boolean; data: { registration_id: string; status: string } }>(
    `/campaigns/${campaignId}/register`,
    data
  ).then((res) => res.data);

export const fetchCampaignMissions = (campaignId: string) =>
  api.get<{ data: MissionWithUserProgress[] }>(`/campaigns/${campaignId}/missions`).then((res) => res.data);

export const fetchMission = (missionId: string) =>
  api.get<{ data: MissionWithUserProgress }>(`/missions/${missionId}`).then((res) => res.data);

export const submitMission = (missionId: string, data: MissionSubmissionRequest) =>
  api.post<{ success: boolean; data: MissionSubmissionResponse }>(
    `/missions/${missionId}/submissions`,
    data
  ).then((res) => res.data);

export const fetchCampaignCredits = (campaignId: string) =>
  api.get<{ data: CampaignCreditsResponse }>(`/campaigns/${campaignId}/credits`).then((res) => res.data);

// Ranking
export interface CampaignRankingUser {
  id: string;
  name: string;
  displayName: string;
  pictureUrl?: string | null;
  credits: number;
  rank: number;
}

export interface CampaignRankingData {
  items: CampaignRankingUser[];
  me?: CampaignRankingUser | null;
  total: number;
}

export const fetchCampaignRanking = (
  campaignId: string,
  params?: { limit?: number; offset?: number }
) =>
  api
    .get<{ data: CampaignRankingData }>(`/campaigns/${campaignId}/ranking`, {
      params,
    })
    .then((res) => res.data);