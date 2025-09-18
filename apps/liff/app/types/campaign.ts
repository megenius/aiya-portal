import { language } from "./app";
import { components } from "./directus";

export type CampaignStatus = "draft" | "published" | "archived";

export type MissionFrequency = "ONCE" | "MULTIPLE";

export type SubmissionStatus = "pending" | "approved" | "rejected";

export type RegistrationStatus =
  | "not_started"
  | "pdpa_pending"
  | "form_pending"
  | "registered";

export interface FormField {
  name: string;
  label: {
    th: string;
    en: string;
  };
  type: "text" | "tel" | "email" | "textarea" | "file" | "select" | "checkbox" | "image_upload";
  required: boolean;
  placeholder?: {
    th?: string;
    en?: string;
  };
  description?: {
    th?: string;
    en?: string;
  };
  accept?: string;
  max_size?: number; // in MB
  options?: Array<{
    value: string;
    label: {
      th: string;
      en: string;
    };
  }>;
}

export interface FormStructure {
  fields: FormField[];
}

export type Campaign = Omit<
  components["schemas"]["ItemsCampaigns"],
  "registration_form" | "title" | "description"
> & {
  registration_form: FormStructure;
  title: language;
  description: language;
};

export type CampaignMission = Omit<
  components["schemas"]["ItemsCampaignMissions"],
  "mission_type" | "title" | "submission_form"
> & {
  title: language;
  description?: language;
  instructions?: language;
  mission_type: string;
  submission_form?: FormStructure | null;
};

export type UserCampaignRegistration = Omit<
  components["schemas"]["ItemsUserCampaignRegistrations"],
  "registration_data"
> & {
  registration_data: Record<string, unknown> | null;
};

export type UserMissionSubmission = Omit<
  components["schemas"]["ItemsUserMissionSubmissions"],
  "submission_data"
> & {
  submission_data: Record<string, unknown>;
};

export type UserRewardCredits = components["schemas"]["ItemsUserRewardCredits"];

export type RewardCreditTransaction =
  components["schemas"]["ItemsRewardCreditTransactions"];

export interface CampaignWithUserStats extends Campaign {
  user_stats: {
    registration_status: RegistrationStatus;
    total_credits: number;
    is_registered: boolean;
    has_agreed_pdpa: boolean;
  };
}

export interface MissionWithUserProgress extends CampaignMission {
  user_progress: {
    completed_count: number;
    can_submit: boolean;
    last_submission_at: string | null;
    is_completed: boolean;
    has_started: boolean;
    is_available: boolean;
    submitted_at?: string | null;
  };
  user_submissions: UserMissionSubmission[];
}

export interface CampaignCreditsResponse {
  total_earned: number;
  current_balance: number;
  transactions: Array<{
    id: string;
    mission_id: string | null;
    mission_title: string;
    amount: number;
    type: "mission_reward" | "bonus" | "redemption" | "refund" | string;
    description?: string;
    created_at: string;
  }>;
}

export interface MissionSubmissionRequest {
  submission_data: Record<string, unknown>;
}

export interface MissionSubmissionResponse {
  submission_id: string;
  credits_earned: number;
  new_total_credits: number;
  transaction_id: string;
}

export interface CampaignRegistrationRequest {
  registration_data: Record<string, unknown>;
  // Optional PDPA fields when sending consent together with registration
  has_agreed_pdpa?: boolean;
  pdpa_agreed_at?: string;
}

export interface PDPAConsentRequest {
  has_agreed_pdpa: boolean;
  pdpa_agreed_at: string;
}
