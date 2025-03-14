import { LeadSubmission } from "~/types/app";
import api from "./api";

export const insertLeadSubmission = (data:Partial<LeadSubmission>) =>
  api.post(`/lead-submissions`,data);