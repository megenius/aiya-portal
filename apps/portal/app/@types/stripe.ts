export interface PaymentIntentRequest {
  amount: number;
  currency: string;
  metadata?: Record<string, string>;
}

export interface WebhookEvent {
  type: string;
  data: {
    object: any;
  };
}

interface CheckoutSession {
  id: string;
  object: "checkout.session";
  status: "open" | "complete" | "expired";
  payment_status: "paid" | "unpaid" | "no_payment_required";
  url: string | null;
  customer: string | null;
  amount_total: number;
  currency: string;
  payment_intent: string | null;
  subscription: string | null;
  metadata: Record<string, string>;
  created: number;
  expires_at: number;
}
