import {
  mockStorage,
  mockCampaigns,
  mockMissions,
  mockCredits,
} from "./mock-campaign-data";
import type {
  CampaignWithUserStats,
  MissionWithUserProgress,
  PDPAConsentRequest,
  CampaignRegistrationRequest,
  MissionSubmissionRequest,
  MissionSubmissionResponse,
  CampaignCreditsResponse,
} from "~/types/campaign";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export class MockCampaignAPI {
  static async getCampaigns(): Promise<{ data: CampaignWithUserStats[] }> {
    await delay(500);
    const campaigns = mockStorage.get("campaigns") || mockCampaigns;
    return { data: campaigns };
  }

  static async getCampaign(campaignId: string): Promise<{ data: CampaignWithUserStats }> {
    await delay(300);
    const campaigns = mockStorage.get("campaigns") || mockCampaigns;
    const campaign = campaigns.find((c: CampaignWithUserStats) => c.id === campaignId);

    if (!campaign) {
      throw new Error("Campaign not found");
    }

    // Check user registration status
    const userRegistrations = mockStorage.get("user-registrations") || new Map();
    const userRegistration = userRegistrations.get(campaignId);

    if (userRegistration) {
      campaign.user_stats = {
        registration_status: userRegistration.registered_at ? "registered" :
                          userRegistration.has_agreed_pdpa ? "form_pending" : "pdpa_pending",
        total_credits: this.getUserTotalCredits(campaignId),
        is_registered: !!userRegistration.registered_at,
        has_agreed_pdpa: userRegistration.has_agreed_pdpa,
      };
    }

    return { data: campaign };
  }

  static async consentPDPA(
    campaignId: string,
    data: PDPAConsentRequest
  ): Promise<{ success: boolean; data: { registration_id: string; next_step: string } }> {
    await delay(300);

    const userRegistrations = mockStorage.get("user-registrations") || new Map();
    const registrationId = `reg-${Date.now()}`;

    userRegistrations.set(campaignId, {
      id: registrationId,
      campaign_id: campaignId,
      user_id: "mock-user-123",
      has_agreed_pdpa: data.has_agreed_pdpa,
      pdpa_agreed_at: data.pdpa_agreed_at,
      registration_data: null,
      registered_at: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    mockStorage.set("user-registrations", userRegistrations);

    return {
      success: true,
      data: {
        registration_id: registrationId,
        next_step: "registration_form",
      },
    };
  }

  static async registerCampaign(
    campaignId: string,
    data: CampaignRegistrationRequest
  ): Promise<{ success: boolean; data: { registration_id: string; status: string } }> {
    await delay(300);

    const userRegistrations = mockStorage.get("user-registrations") || new Map();
    const existingRegistration = userRegistrations.get(campaignId);

    if (!existingRegistration) {
      throw new Error("PDPA consent required first");
    }

    existingRegistration.registration_data = data.registration_data;
    existingRegistration.registered_at = new Date().toISOString();
    existingRegistration.updated_at = new Date().toISOString();

    userRegistrations.set(campaignId, existingRegistration);
    mockStorage.set("user-registrations", userRegistrations);

    return {
      success: true,
      data: {
        registration_id: existingRegistration.id,
        status: "registered",
      },
    };
  }

  static async getCampaignMissions(campaignId: string): Promise<{ data: MissionWithUserProgress[] }> {
    await delay(300);
    const missions = mockStorage.get(`${campaignId}-missions`) || mockMissions;

    // Update user progress
    const userSubmissions = mockStorage.get("user-submissions") || [];

    missions.forEach((mission: MissionWithUserProgress) => {
      const submissions = userSubmissions.filter(
        (sub: any) => sub.mission_id === mission.id
      );

      mission.user_submissions = submissions;
      mission.user_progress = {
        completed_count: submissions.length,
        can_submit: mission.frequency === "MULTIPLE" || submissions.length === 0,
        last_submission_at: submissions.length > 0 ? submissions[submissions.length - 1].submitted_at : null,
      };
    });

    return { data: missions };
  }

  static async getMission(missionId: string): Promise<{ data: MissionWithUserProgress }> {
    await delay(300);
    const allMissions = mockStorage.get("campaign-123-missions") || mockMissions;
    const mission = allMissions.find((m: MissionWithUserProgress) => m.id === missionId);

    if (!mission) {
      throw new Error("Mission not found");
    }

    // Update user progress
    const userSubmissions = mockStorage.get("user-submissions") || [];
    const submissions = userSubmissions.filter((sub: any) => sub.mission_id === missionId);

    mission.user_submissions = submissions;
    mission.user_progress = {
      completed_count: submissions.length,
      can_submit: mission.frequency === "MULTIPLE" || submissions.length === 0,
      last_submission_at: submissions.length > 0 ? submissions[submissions.length - 1].submitted_at : null,
    };

    return { data: mission };
  }

  static async submitMission(
    missionId: string,
    data: MissionSubmissionRequest
  ): Promise<{ success: boolean; data: MissionSubmissionResponse }> {
    await delay(500);

    const allMissions = mockStorage.get("campaign-123-missions") || mockMissions;
    const mission = allMissions.find((m: MissionWithUserProgress) => m.id === missionId);

    if (!mission) {
      throw new Error("Mission not found");
    }

    // Create submission
    const submissionId = `sub-${Date.now()}`;
    const transactionId = `trans-${Date.now()}`;

    const userSubmissions = mockStorage.get("user-submissions") || [];
    userSubmissions.push({
      id: submissionId,
      mission_id: missionId,
      user_id: "mock-user-123",
      submission_data: data.submission_data,
      status: "approved",
      admin_notes: null,
      submitted_at: new Date().toISOString(),
      reviewed_at: new Date().toISOString(),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });
    mockStorage.set("user-submissions", userSubmissions);

    // Update credits
    const currentCredits = this.getUserTotalCredits(mission.campaign_id);
    const newTotalCredits = currentCredits + mission.reward_credits;

    const creditsData = mockStorage.get(`${mission.campaign_id}-credits`) || { ...mockCredits };
    creditsData.total_earned = newTotalCredits;
    creditsData.transactions.push({
      id: transactionId,
      mission_id: missionId,
      mission_title: mission.title,
      credits: mission.reward_credits,
      created_at: new Date().toISOString(),
    });
    mockStorage.set(`${mission.campaign_id}-credits`, creditsData);

    return {
      success: true,
      data: {
        submission_id: submissionId,
        credits_earned: mission.reward_credits,
        new_total_credits: newTotalCredits,
        transaction_id: transactionId,
      },
    };
  }

  static async getCampaignCredits(campaignId: string): Promise<{ data: CampaignCreditsResponse }> {
    await delay(300);
    const creditsData = mockStorage.get(`${campaignId}-credits`) || { ...mockCredits };
    return { data: creditsData };
  }

  static async uploadFile(file: File): Promise<{
    data: { file_id: string; url: string; mime_type: string; size: number }
  }> {
    await delay(1000);

    const fileId = `file-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;

    return {
      data: {
        file_id: fileId,
        url: `https://mock-api.example.com/files/${fileId}`,
        mime_type: file.type,
        size: file.size,
      },
    };
  }

  private static getUserTotalCredits(campaignId: string): number {
    const creditsData = mockStorage.get(`${campaignId}-credits`);
    return creditsData ? creditsData.total_earned : 0;
  }
}