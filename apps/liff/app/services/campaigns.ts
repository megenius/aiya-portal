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

export const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return api.post<{ data: { file_id: string; url: string; mime_type: string; size: number } }>(
    "/upload",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  ).then((res) => res.data);
};