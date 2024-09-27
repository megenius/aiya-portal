import { Hono } from "hono";
type EventType = "slip" | "purchase" | "signup" | "lead";

interface BaseEvent {
  event_type: EventType;
  version: string;
  timestamp: string;
  event_id: string;
  environment: string;
  metadata: {
    ip_address: string;
    user_agent: string;
  };
}

interface SlipEvent extends BaseEvent {
  event_type: "slip";
  data: {
    transaction_status: string;
    transaction_time: string;
    payer: {
      name: string;
      bank: string;
      account_number: string;
    };
    payee: {
      name: string;
      company: string;
      account_number: string;
    };
    transaction_details: {
      transaction_id: string;
      amount: number;
      currency: string;
      fee: number;
    };
  };
}

interface PurchaseEvent extends BaseEvent {
  event_type: "purchase";
  data: {
    customer_id: string;
    product_id: string;
    purchase_amount: number;
    currency: string;
    purchase_time: string;
    payment_method: string;
    product_name: string;
    product_category: string;
  };
}

interface SignupEvent extends BaseEvent {
  event_type: "signup";
  data: {
    user_id: string;
    email: string;
    signup_time: string;
    signup_method: string;
    plan_type: string;
    referral_source: string;
  };
}

interface LeadEvent extends BaseEvent {
  event_type: "lead";
  data: {
    lead_id: string;
    name: string;
    email: string;
    phone: string;
    source: string;
    interest: string;
    created_at: string;
    lead_score: number;
    company: string;
    job_title: string;
    estimated_budget: string;
    preferred_contact_method: string;
  };
}

type Event = SlipEvent | PurchaseEvent | SignupEvent | LeadEvent;

const webhookRoutes = new Hono()

  .post("/conversion", async (c) => {
    const body = (await c.req.json()) as Event;
    const eventType = body.event_type;

    switch (eventType) {
      case "slip":
        return handleSlipEvent(c, body);
      case "purchase":
        return handlePurchaseEvent(c, body);
      case "signup":
        return handleSignupEvent(c, body);
      case "lead":
        return handleLeadEvent(c, body);
      default:
        return c.json({ error: "Unknown event type" }, 400);
    }
  });

function handleSlipEvent(c: any, event: SlipEvent) {
  console.log("Processing slip event:", event.event_id);
  // Add your slip event processing logic here
  return c.json({ status: "success", message: "Slip event processed" });
}

function handlePurchaseEvent(c: any, event: PurchaseEvent) {
  console.log("Processing purchase event:", event.event_id);
  // Add your purchase event processing logic here
  return c.json({ status: "success", message: "Purchase event processed" });
}

function handleSignupEvent(c: any, event: SignupEvent) {
  console.log("Processing signup event:", event.event_id);
  // Add your signup event processing logic here
  return c.json({ status: "success", message: "Signup event processed" });
}

function handleLeadEvent(c: any, event: LeadEvent) {
  console.log("Processing lead event:", event.event_id);
  // Add your lead event processing logic here
  return c.json({ status: "success", message: "Lead event processed" });
}

export { webhookRoutes };
