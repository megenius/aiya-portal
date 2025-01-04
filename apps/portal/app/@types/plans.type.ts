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
  auto_reply: number
  smart_reply: number
  generative_reply: number
  check_slip: number
  workspace: number
  bot: number
  knowledge_base: number
  storage: string
  team_members: number
}

