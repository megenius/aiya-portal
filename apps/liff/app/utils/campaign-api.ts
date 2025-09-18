import type {
  Campaign,
  CampaignWithUserStats,
  CampaignMission,
  MissionWithUserProgress,
  UserCampaignRegistration,
  CampaignRegistrationRequest,
  PDPAConsentRequest,
  MissionSubmissionRequest,
  MissionSubmissionResponse,
  CampaignCreditsResponse,
} from "~/types/campaign";
import { MockCampaignAPI } from "./mock-campaign-api";

const API_BASE = "/api";
const USE_MOCK_API = false; // Set to false when real API is ready

export class CampaignAPI {
  static async getCampaigns(): Promise<{ data: CampaignWithUserStats[] }> {
    if (USE_MOCK_API) {
      return MockCampaignAPI.getCampaigns();
    }

    const response = await fetch(`${API_BASE}/campaigns`);
    if (!response.ok) {
      throw new Error(`Failed to fetch campaigns: ${response.statusText}`);
    }
    return response.json();
  }

  static async getCampaign(campaignId: string): Promise<{ data: CampaignWithUserStats }> {
    if (USE_MOCK_API) {
      return MockCampaignAPI.getCampaign(campaignId);
    }

    const response = await fetch(`${API_BASE}/campaigns/${campaignId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch campaign: ${response.statusText}`);
    }
    return response.json();
  }

  static async consentPDPA(
    campaignId: string,
    data: PDPAConsentRequest
  ): Promise<{ success: boolean; data: { registration_id: string; next_step: string } }> {
    if (USE_MOCK_API) {
      return MockCampaignAPI.consentPDPA(campaignId, data);
    }

    const response = await fetch(`${API_BASE}/campaigns/${campaignId}/consent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to consent PDPA: ${response.statusText}`);
    }
    return response.json();
  }

  static async registerCampaign(
    campaignId: string,
    data: CampaignRegistrationRequest
  ): Promise<{ success: boolean; data: { registration_id: string; status: string } }> {
    if (USE_MOCK_API) {
      return MockCampaignAPI.registerCampaign(campaignId, data);
    }

    const response = await fetch(`${API_BASE}/campaigns/${campaignId}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to register campaign: ${response.statusText}`);
    }
    return response.json();
  }

  static async getCampaignMissions(campaignId: string): Promise<{ data: MissionWithUserProgress[] }> {
    if (USE_MOCK_API) {
      return MockCampaignAPI.getCampaignMissions(campaignId);
    }

    const response = await fetch(`${API_BASE}/campaigns/${campaignId}/missions`);
    if (!response.ok) {
      throw new Error(`Failed to fetch missions: ${response.statusText}`);
    }
    return response.json();
  }

  static async getMission(missionId: string): Promise<{ data: MissionWithUserProgress }> {
    if (USE_MOCK_API) {
      return MockCampaignAPI.getMission(missionId);
    }

    const response = await fetch(`${API_BASE}/missions/${missionId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch mission: ${response.statusText}`);
    }
    return response.json();
  }

  static async submitMission(
    missionId: string,
    data: MissionSubmissionRequest
  ): Promise<{ success: boolean; data: MissionSubmissionResponse }> {
    if (USE_MOCK_API) {
      return MockCampaignAPI.submitMission(missionId, data);
    }

    const response = await fetch(`${API_BASE}/missions/${missionId}/submissions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to submit mission: ${response.statusText}`);
    }
    return response.json();
  }

  static async getCampaignCredits(campaignId: string): Promise<{ data: CampaignCreditsResponse }> {
    if (USE_MOCK_API) {
      return MockCampaignAPI.getCampaignCredits(campaignId);
    }

    const response = await fetch(`${API_BASE}/campaigns/${campaignId}/credits`);
    if (!response.ok) {
      throw new Error(`Failed to fetch credits: ${response.statusText}`);
    }
    return response.json();
  }

  static async uploadFile(file: File): Promise<{ data: { file_id: string; url: string; mime_type: string; size: number } }> {
    if (USE_MOCK_API) {
      return MockCampaignAPI.uploadFile(file);
    }

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(`${API_BASE}/upload`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Failed to upload file: ${response.statusText}`);
    }
    return response.json();
  }
}