export interface GnaviRestSearchApiResponseSchema {
  '@attributes': {
    api_version: string;
  };
  total_hit_count: number;
  hit_per_page: number;
  page_offset: number;
  rest: Array<Rest>;
}

interface Rest {
  '@attributes': {
    order: number;
  };
  id: string;
  update_date: string;
  name: string;
  name_kana: string;
  latitude: string;
  longitude: string;
  category: string;
  url: string;
  url_mobile: string;
  coupon_url: {
    pc: string;
    mobile: string;
  };
  image_url: {
    shop_image1: string;
    shop_image2: string;
    qrcode: string;
  };
  address: string;
  tel: string;
  tel_sub: string;
  fax: string;
  opentime: string;
  holiday: string;
  access: {
    line: string;
    station: string;
    station_exit: string;
    walk: string;
    note: string;
  };
  parking_lots: string;
  pr: {
    pr_short: string;
    pr_long: string;
  };
  code: {
    areacode: string;
    areaname: string;
    prefcode: string;
    prefname: string;
    areacode_s: string;
    areaname_s: string;
    category_code_l: Array<string>;
    category_name_l: Array<string>;
    category_code_s: Array<string>;
    category_name_s: Array<string>;
  };
  budget: number;
  party: number;
  lunch: number;
  credit_card: string;
  e_money: string;
  flags: {
    mobile_site: number;
    mobile_coupon: number;
    pc_coupon: number;
  };
}
