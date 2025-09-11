import { components } from "./directus";
import { Category } from "./page";

export type LeadSubmission = components["schemas"]["ItemsLeadSubmissions"];
// export type Profile = components["schemas"]["ItemsProfiles"];
export type AdvanceProfile = components["schemas"]["ItemsAdvanceProfiles"];
export type PointTransaction = components["schemas"]["ItemsPointTransactions"];
export type Brand = Omit<
  components["schemas"]["ItemsVouchersBrands"],
  "metadata"
> & { metadata: BrandMetadata; vouchers: Voucher[] };

interface BrandMetadata {
  category: Category;
}

// Combined page payload for v2 endpoint
export interface VoucherPageV2 {
  serverComputed: VoucherViewV2;
  stats: VoucherStats;
  myCoupon: VoucherUser | null;
}

export type Voucher = Omit<
  components["schemas"]["ItemsVouchers"],
  "metadata" | "voucher_brand_id"
> & { metadata: VoucherMetadata; voucher_brand_id: Brand };

export type VoucherCode = Omit<
  components["schemas"]["ItemsVouchersCodes"],
  "voucher"
> & { voucher: Voucher };

export type VoucherUser = Omit<
  components["schemas"]["ItemsVouchersUsers"],
  "code"
> & { code: VoucherCode };

export interface VoucherCodeUpdate {
  userId: string;
  code: string;
  code_status: string;
}

export interface VoucherStats {
  available: number;
  collected: number;
  pending_confirmation: number;
  expired: number;
  used: number;
  reserved: number;
  total: number;
}

// Server-computed view (v2) used by LimitedTime page
export interface VoucherViewV2 {
  serverNow: string;
  firstViewedAt: string | null;
  effectiveStatus: string; // "not_started" | "started" | "ended" etc.
  canCollect: boolean;
  currentTier: { id?: string; value?: number; type?: string } | null;
  timeLeftSeconds: number;
  progressPercent: number;
  nextBoundaryAt: string | null;
  campaignEndAt: string | null;
  available: number;
  // Optional reason why canCollect is false
  deniedReason?: "group_quota_full" | "already_collected" | null;
}

// v2 - My Coupons response & computed fields
export type VoucherEffectiveStatus = "available" | "used" | "expired";

export type VoucherUserComputed = VoucherUser & {
  timeLeftSeconds: number;
  isExpired: boolean;
  effectiveStatus: VoucherEffectiveStatus;
};

export interface MyVouchersV2 {
  serverNow: string;
  stats: VoucherStats;
  items: VoucherUserComputed[];
}

interface LayoutRule {
  visible: boolean;
}

interface ContainerLayoutRule {
  paddingTop?: string;
}

interface LayoutOptions {
  title?: LayoutRule;
  description?: LayoutRule;
  conditions?: LayoutRule;
  container?: ContainerLayoutRule;
}

interface VoucherMetadata {
  title: language;
  description: language;
  condition: language;
  redemptionType: "instant" | "form" | "limited_time";
  form?: Form;
  discount_tiers?: DiscountTier[];
  layout?: LayoutOptions;
}

export type VoucherView = components["schemas"]["ItemsVoucherViews"];

interface TierCondition {
  duration_before_claim_seconds?: number;
  default?: boolean;
}

export interface DiscountTier {
  value: number;
  type: "percentage" | "fixed_amount" | "gift";
  condition: TierCondition;
}

interface Form {
  fields: Field[];
  submitLabel: string;
}

interface Field {
  name: string;
  label: language;
  type: "text" | "email" | "number" | "tel" | "textarea";
  required: boolean;
}

export interface FieldData {
  name: string;
  value: string;
}

export interface language {
  th: string;
  en: string;
}

export interface CollectVoucher {
  voucher_id: string;
  channel: string;
  discount_value?: number | null;
  discount_type?: "percentage" | "fixed_amount" | "gift" | null;
}

export interface ServiceMessage {
  liff_access_token: string;
  template_name: string;
  template_params: Record<string, string>;
}

export interface Profile {
  id: string;
  uid: string;
  liff_id: string;
  display_name: string;
  picture_url?: string;
  interests?: string[];
  referrer_id?: string; // เพิ่มฟิลด์เก็บข้อมูลผู้แนะนำ (referrer)
  point_transaction?: PointTransaction[];
  totalPoints: number;
  // Add any other profile fields you need
}
