import type {
  CampaignWithUserStats,
  MissionWithUserProgress,
  CampaignCreditsResponse,
} from "~/types/campaign";

export const mockCampaigns: CampaignWithUserStats[] = [
  {
    id: "campaign-123",
    title: "AIYA Fun Fest 2025",
    description: "ร่วมสนุกกับกิจกรรม AIYA Fun Fest ปี 2025 ทำภารกิจง่ายๆ รับสิทธิ์พิเศษ และลุ้นรางวัลใหญ่มากมาย!",
    banner_image: "campaign-banner-123.jpg",
    start_date: "2025-01-01T00:00:00Z",
    end_date: "2025-01-31T23:59:59Z",
    status: "active",
    registration_form: {
      fields: [
        {
          name: "first_name",
          label: { th: "ชื่อจริง", en: "First Name" },
          type: "text",
          required: true,
        },
        {
          name: "last_name",
          label: { th: "นามสกุล", en: "Last Name" },
          type: "text",
          required: true,
        },
        {
          name: "phone",
          label: { th: "เบอร์โทรศัพท์", en: "Phone Number" },
          type: "tel",
          required: true,
        },
      ],
    },
    created_at: "2024-12-01T00:00:00Z",
    updated_at: "2024-12-01T00:00:00Z",
    user_stats: {
      registration_status: "not_started",
      total_credits: 0,
      is_registered: false,
      has_agreed_pdpa: false,
    },
  },
];

export const mockMissions: MissionWithUserProgress[] = [
  {
    id: "mission-photo-booth",
    campaign_id: "campaign-123",
    title: "ถ่ายรูปที่บูท AIYA",
    description: "ถ่ายรูปที่บูท AIYA ในงาน และแชร์ความสนุกของคุณ",
    reward_credits: 1,
    frequency: "ONCE",
    mission_data: {
      fields: [
        {
          name: "photo",
          label: { th: "รูปภาพที่ถ่ายที่บูท", en: "Photo at AIYA Booth" },
          type: "file",
          accept: "image/*",
          required: true,
        },
        {
          name: "description",
          label: { th: "รายละเอียดเพิ่มเติม", en: "Additional Description" },
          type: "textarea",
          required: false,
        },
      ],
    },
    sort_order: 1,
    is_active: true,
    created_at: "2024-12-01T00:00:00Z",
    updated_at: "2024-12-01T00:00:00Z",
    user_progress: {
      completed_count: 0,
      can_submit: true,
      last_submission_at: null,
    },
    user_submissions: [],
  },
  {
    id: "mission-purchase",
    campaign_id: "campaign-123",
    title: "ซื้อสินค้า AIYA",
    description: "ซื้อสินค้า AIYA 1 ชิ้น รับ 10 สิทธิ์ (สามารถทำซ้ำได้)",
    reward_credits: 10,
    frequency: "MULTIPLE",
    mission_data: {
      fields: [
        {
          name: "receipt_image",
          label: { th: "รูปใบเสร็จ", en: "Receipt Image" },
          type: "file",
          accept: "image/*",
          required: true,
        },
        {
          name: "post_screenshot",
          label: { th: "รูป Screenshot การโพสต์", en: "Post Screenshot" },
          type: "file",
          accept: "image/*",
          required: true,
        },
        {
          name: "purchase_amount",
          label: { th: "จำนวนเงิน", en: "Purchase Amount" },
          type: "text",
          required: true,
        },
      ],
    },
    sort_order: 2,
    is_active: true,
    created_at: "2024-12-01T00:00:00Z",
    updated_at: "2024-12-01T00:00:00Z",
    user_progress: {
      completed_count: 0,
      can_submit: true,
      last_submission_at: null,
    },
    user_submissions: [],
  },
];

export const mockCredits: CampaignCreditsResponse = {
  total_earned: 0,
  transactions: [],
};

// Mock storage for development
class MockStorage {
  private data = new Map<string, any>();

  get(key: string) {
    return this.data.get(key);
  }

  set(key: string, value: any) {
    this.data.set(key, value);
  }

  has(key: string) {
    return this.data.has(key);
  }
}

export const mockStorage = new MockStorage();

// Initialize mock data
mockStorage.set("campaigns", mockCampaigns);
mockStorage.set("campaign-123-missions", mockMissions);
mockStorage.set("campaign-123-credits", mockCredits);
mockStorage.set("user-registrations", new Map());
mockStorage.set("user-submissions", []);