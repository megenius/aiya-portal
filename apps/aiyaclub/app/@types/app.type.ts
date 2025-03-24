import { components } from "./directus";

export type LeadSubmission = components["schemas"]["ItemsLeadSubmissions"];
export type Brand = components["schemas"]["ItemsVouchersBrands"];
export type VoucherBrand = components["schemas"]["ItemsVouchersBrands"];
export type Voucher = Omit<
  components["schemas"]["ItemsVouchers"],
  "metadata"
> & {
  metadata: Metadata;
  voucher_brand_id: VoucherBrand;
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


export interface PageLiff {
  id: string;
  status: string;
  sort: any;
  user_created: string;
  date_created: string;
  user_updated: string;
  date_updated: string;
  slug: string;
  team: string;
  liff_id: string;
  image: string;
  metadata: Metadata;
  fore_color: string;
  bg_color: any;
  name: string;
  content: string;
  require_login: number;
  favicon: string;
}

export interface Metadata {
  title: language;
  description: language;
  condition: language;
  redemptionType: language;
}

export interface Condition {
  friend: {
    url: string;
  };
  "non-friend": {
    url: string;
  };
}

export interface Script {
  src: string;
  attributes?: Record<string, string>;
}

export interface Tracking {
  button: {
    id: string;
    onClick: {
      url: string;
      body: any;
    };
  };
}

export interface Layout {
  showProfile: boolean
  showAIProfile: boolean
  showCategory: boolean
  showSearch: boolean
  form: {
    fields: Field[];
  };
}


export interface Coupon {
  id: string;
  to: string;
  titleTH: string;
  titleEN: string;
  promotionTH: string;
  promotionEN: string;
  category: string;
  image: string;
}

export interface Category {
  id: string;
  name: language;
  image: string;
  icon: string;
}