export interface Plan {
  name: string;
  price: number;
  billing: string;
  label?: string;
  features: PlanFeatures;
}

export interface PlansConfig {
  plans: {
    free_trial: Plan;
    starter: Plan;
    growth: Plan;
  };
}

export interface PlanFeatures {
  smart_replies_per_month: number;
  generative_replies_per_month: number;
  checks_per_month: number;
  service_hours: number;
  notifications_per_service: number;
  knowledge_bases: number;
  storage: string;
  team_members_per_service: number;
  supported_formats: string[];
  support_type: string;
  integrations: {
    line: boolean;
    facebook: boolean;
  };
}

