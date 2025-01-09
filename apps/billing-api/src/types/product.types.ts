import { components } from "./directus";
import { PlanFeatures } from "./plans.type";

export type Product = components["schemas"]["ItemsSaasProducts"] & {
  features: PlanFeatures;
};
