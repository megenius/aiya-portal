export type CampaignStatus = 'draft' | 'active' | 'ended' | 'cancelled';

export type MissionFrequency = 'ONCE' | 'MULTIPLE';

export type SubmissionStatus = 'pending' | 'approved' | 'rejected';

export type RegistrationStatus = 'not_started' | 'pdpa_pending' | 'form_pending' | 'registered';

export interface FormField {
  name: string;
  label: {
    th: string;
    en: string;
  };
  type: 'text' | 'tel' | 'email' | 'textarea' | 'file' | 'select' | 'checkbox';
  required: boolean;
  placeholder?: {
    th?: string;
    en?: string;
  };
  accept?: string;
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

export interface Campaign {
  id: string;
  title: string;
  description: string;
  banner_image: string;
  start_date: string;
  end_date: string;
  status: CampaignStatus;
  registration_form: FormStructure;
  created_at: string;
  updated_at: string;
}

export interface CampaignMission {
  id: string;
  campaign_id: string;
  title: string;
  description: string;
  reward_credits: number;
  frequency: MissionFrequency;
  mission_data: FormStructure;
  sort_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface UserCampaignRegistration {
  id: string;
  campaign_id: string;
  user_id: string;
  has_agreed_pdpa: boolean;
  pdpa_agreed_at: string | null;
  registration_data: Record<string, unknown> | null;
  registered_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserMissionSubmission {
  id: string;
  mission_id: string;
  user_id: string;
  submission_data: Record<string, unknown>;
  status: SubmissionStatus;
  admin_notes: string | null;
  submitted_at: string;
  reviewed_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserRewardCredits {
  id: string;
  campaign_id: string;
  user_id: string;
  total_earned: number;
  created_at: string;
  updated_at: string;
}

export interface RewardCreditTransaction {
  id: string;
  campaign_id: string;
  user_id: string;
  mission_id: string;
  credits: number;
  submission_id: string | null;
  created_at: string;
}

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
  };
  user_submissions: UserMissionSubmission[];
}

export interface CampaignCreditsResponse {
  total_earned: number;
  transactions: Array<{
    id: string;
    mission_id: string;
    mission_title: string;
    credits: number;
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
}

export interface PDPAConsentRequest {
  has_agreed_pdpa: boolean;
  pdpa_agreed_at: string;
}