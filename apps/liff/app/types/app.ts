import { components } from "./directus";
import { Category } from "./page";

export type LeadSubmission = components["schemas"]["ItemsLeadSubmissions"];
// export type Profile = components["schemas"]["ItemsProfiles"];
export type AdvanceProfile = components["schemas"]["ItemsAdvanceProfiles"];
export type PointTransaction = components["schemas"]["ItemsPointTransactions"];
export type Brand = Omit<components["schemas"]["ItemsVouchersBrands"], "metadata"> & {
  metadata: BrandMetadata;
  vouchers: Voucher[];
};

interface BrandMetadata {
  category: Category;
}

export type Voucher = Omit<
  components["schemas"]["ItemsVouchers"], "metadata" | "voucher_brand_id"
> & {
  metadata: VoucherMetadata;
  voucher_brand_id: Brand;
};

export type VoucherCode = Omit<
  components["schemas"]["ItemsVouchersCodes"],
  "voucher"
> & {
  voucher: Voucher;
};

export type VoucherUser = Omit<
  components["schemas"]["ItemsVouchersUsers"],
  "code"
> & {
  code: VoucherCode;
};

export interface VoucherCodeUpdate {
  userId: string;
  code:string;
  code_status: string;
}

export interface VoucherStats {
  available: number;
  collected: number;
  expired: number;
  used: number;
  reserved: number;
  total: number;
}

interface VoucherMetadata {
  title: language;
  description: language;
  condition: language;
  redemptionType: "instant" | "form" | "limited_time";
  form?: Form;
  discount_tiers?: DiscountTier[];
}

interface TierCondition {
  duration_before_claim_seconds?: number;
  default?: boolean;
}

export interface DiscountTier {
  value: number;
  type: 'percentage' | 'fixed_amount';
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
  voucher: string;
  channel: string;
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
