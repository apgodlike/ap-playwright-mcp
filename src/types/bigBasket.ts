export interface BigBasketSearchResponse {
  tabs: Tab[];
}

export interface Tab {
  product_info: ProductInfo;
}

export interface ProductInfo {
  products: Product[];
}

export interface Product {
  id: string;
  desc: string;
  sku_max_quantity: number;
  pack_desc: string;
  sort_index_pos: number;
  cart_count: number;
  is_best_value: boolean;
  magnitude: string;
  w: string;
  absolute_url: string;
  unit: string;
  usp: string;
  availability: Availability;
  pricing: Pricing;
  images: Image[];
  variable_weight: null;
  brand: Brand;
  category: Category;
  additional_attr: AdditionalAttr;
  combo: null;
  children: Child[];
  rating_info: RatingInfo;
  visibility: Visibility;
  additional_info: ProductAdditionalInfo;
  ctas: Ctas;
  ean_code: string;
  parent_info: ParentInfo;
  high_affinity: any[];
  inv_info: null;
  is_tobacco: boolean;
}

export interface AdditionalAttr {
  info: Info[];
}

export interface Info {
  type: string;
  label: string;
  sub_type: string;
}

export interface ProductAdditionalInfo {
  ppu: Ppu;
}

export interface Ppu {
  url: string;
  label: string;
  type: string;
}

export interface Availability {
  avail_status: string;
  short_eta: string;
  medium_eta: string;
  long_eta: string;
  display_mrp: boolean;
  display_sp: boolean;
  not_for_sale: boolean;
  button: string;
  show_express: boolean;
}

export interface Brand {
  name: string;
  slug: string;
  url: string;
}

export interface Category {
  tlc_name: string;
  tlc_slug: string;
  mlc_name: string;
  mlc_slug: string;
  mlc_id: number;
  llc_name: string;
  llc_slug: string;
  llc_id: number;
}

export interface Child {
  id: string;
  desc: string;
  sku_max_quantity: number;
  pack_desc: string;
  sort_index_pos: number;
  cart_count: number;
  is_best_value: boolean;
  magnitude: string;
  w: string;
  absolute_url: string;
  unit: string;
  usp: string;
  availability: Availability;
  pricing: Pricing;
  images: Image[];
  variable_weight: null;
  brand: Brand;
  category: Category;
  additional_attr: AdditionalAttr;
  combo: null;
  rating_info: RatingInfo;
  visibility: Visibility;
  additional_info: ChildAdditionalInfo;
  ctas: Ctas;
  ean_code: string;
  parent_info: ParentInfo;
  high_affinity: any[];
  inv_info: null;
  is_tobacco: boolean;
}

export interface ChildAdditionalInfo {}

export interface Ctas {
  data: any[];
}

export interface Image {
  s: string;
  m: string;
  l: string;
}

export interface ParentInfo {
  id: number;
  parent_product_id: null;
  child_product_id: null;
  order: number;
  parent_id: number;
  child_id: number;
  is_default: number;
  type: number;
  created_by_id: number;
  updated_by_id: number;
  created_on: Date;
  updated_on: Date;
}

export interface Pricing {
  discount: Discount;
  promo: null;
  subscribe: Subscribe;
  offer: Offer;
}

export interface Discount {
  mrp: string;
  mrp_per_pack: null;
  d_text: string;
  d_avail: string;
  prim_price: PrimPrice;
  sec_price: SECPrice;
  subscription_price: string;
  camp_detail: CampDetail;
  offer_entry_text: string;
  offer_available: string;
}

export interface CampDetail {
  c: number[];
  c_f: number;
  d_t: string;
  d_v: number;
  dual_pricing: boolean;
  invoiced: Invoiced;
  m_f: number;
  narq: number;
  r_c: number[];
  v_f: number;
}

export interface Invoiced {
  "2619488"?: string;
  r_v_f: number;
  t_v_f: number;
  "2621510"?: string;
}

export interface PrimPrice {
  sp: string;
  sp_per_pack: null;
  icon: Icon;
  desc: string;
  base_price: string;
  base_unit: string;
}

export interface Icon {
  base_url: null;
  image: null;
  format: null;
}

export interface SECPrice {
  sp: null;
  icon: null;
  desc: null;
  background: null;
}

export interface Offer {
  arrow_image: null;
  background: Background;
  background_border: Background;
  campaign_type: null;
  campaign_type_icon: null;
  campaign_type_slug: string;
  offer_available: string;
  offer_ent_txt: string;
  offer_entry_text: string;
  text_color: null;
}

export interface Background {
  direction: null;
  gradient: null;
}

export interface Subscribe {
  desc: null;
  desc_label: null;
  subs_c: any[];
  subs_sp: null;
}

export interface RatingInfo {
  avg_rating: string;
  rating_count: number;
  review_count: number;
  sku_id: number;
}

export interface Visibility {
  path_id: number;
  fc_id: number;
  sa_id: number;
}
