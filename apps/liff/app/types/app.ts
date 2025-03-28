import { components } from "./directus";

export type LeadSubmission = components["schemas"]["ItemsLeadSubmissions"];
export type Brand = components["schemas"]["ItemsVouchersBrands"];
export type Voucher = Omit<
  components["schemas"]["ItemsVouchers"],
  "metadata"
> & {
  metadata: Metadata;
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

export interface VoucherStats {
  available: number;
  collected: number;
  expired: number;
  used: number;
  reserved: number;
  total: number;
}

interface Metadata {
  title: language;
  description: language;
  condition: language;
  redemptionType: "instant" | "form";
  form?: Form;
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
  collected_by: string;
}
