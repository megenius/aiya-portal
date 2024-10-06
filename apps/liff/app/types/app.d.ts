export namespace QueQNS {
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
  };

  export type AdDetail = {
    return_code: string;
    return_message: string;
    barcode: string;
    ads_name: string;
    ads_detail: string;
    ads_img_detail: string;
    use_start_datetime: string;
    use_expire_datetime: string;
  };
}
