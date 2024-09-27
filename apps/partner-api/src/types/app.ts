export type QueQBaseResponse = {
  return_code: string;
  return_message: string;
};

export type Ad = {
  zone_name: string;
  ads_code: string;
  ads_detail: string;
  ads_name: string;
  ads_img_cover: string;
  is_all_zone: boolean;
  is_promote: boolean;
  priority: number;
  tags_match_count: number;
  optional_link: any;
} & QueQBaseResponse;

export type Ads = {
  lstAds: Ad[];
} & QueQBaseResponse;
