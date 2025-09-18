import { components } from "./directus";
import { Brand, Category, language, Voucher } from "./app";
import { Campaign } from "./campaign";

// export interface PageLiff {
//   id: string;
//   status: string;
//   sort: any;
//   user_created: string;
//   date_created: string;
//   user_updated: string;
//   date_updated: string;
//   slug: string;
//   team: string;
//   liff_id: string;
//   image: string;
//   metadata: Metadata;
//   fore_color: string;
//   bg_color: any;
//   name: string;
//   content: string;
//   require_login: number;
//   favicon: string;
// }

export type PageLiff = Omit<
  components["schemas"]["ItemsPagesLiff"],
  | "vouchers"
  | "populars"
  | "banner_vouchers"
  | "banner_campaigns"
  | "brands"
  | "categories"
  | "metadata"
> & {
  vouchers: Voucher[];
  populars: Voucher[];
  banner_vouchers: Voucher[];
  campaigns?: Campaign[];
  brands: Brand[];
  categories: Category[];
  metadata: Metadata;
};

export interface Metadata {
  browser: string;
  condition: Condition;
  scripts: Script[];
  tracking: Tracking;
  layout: Layout;
  template: string;
  welcomeText: language;
  subWelcomeText: language;
  popularVouchersText: language;
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
      body: Record<string, unknown>;
    };
  };
}

export interface Layout {
  showProfile: boolean;
  showAIProfile: boolean;
  showCategory: boolean;
  showSearch: boolean;
  showPoint: boolean;
  showInvite: boolean;
  showVoucherSummary: boolean;
  showBrands: boolean;
  showPopulars: boolean;
  showMyCoupons: boolean;
  showBannerVouchers: boolean;
  form: {
    fields: Field[];
  };
}

export interface Field {
  name: string;
  type: string;
  label: string;
  required?: boolean;
}
