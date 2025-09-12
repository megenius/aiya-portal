import api from "./api";

export type UserEventType = "page_view" | "voucher_click" | string;

export interface CreateUserEventPayload {
  event_type: UserEventType;
  event_properties?: Record<string, unknown>;
  liff?: number; // pages_liff.id (optional; server can resolve from JWT liff_id)
}

export const createUserEvent = (data: CreateUserEventPayload) =>
  api.post("/user-events", data);
