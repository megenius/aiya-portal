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
  btnTextTH: string;
  btnTextEN: string;
  destTH: string;
  destEN: string;
  pageTitleTH: string;
  pageTitleEN: string;
  browser: string;
  condition: Condition;
  scripts: Script[];
  tracking: Tracking;
  layout: Layout;
  welcomeTextTH: string;
  welcomeTextEN: string;
  descriptionTH: string;
  descriptionEN: string;
  coupons: Coupon[];
  categories: Category[];
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

export interface Field {
  name: string;
  type: string;
  label: string;
  required?: boolean
}

interface Coupon {
  id: string;
  to: string;
  titleTH: string;
  titleEN: string;
  category: string;
  image: string;
}

export interface Category {
  id: string;
  nameTH: string;
  nameEN: string;
  image: string;
  icon: string;
}