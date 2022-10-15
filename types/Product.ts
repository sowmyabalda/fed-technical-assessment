export interface Product {
  breadcrumb: Breadcrumb;
  breadCrumbs?: BreadCrumbsEntity[] | null;
  category: string;
  sub_category?: string[] | null;
  catalog_availability: CatalogAvailability;
  variations: Variations;
  decor?: string[] | null;
  dimensions: string;
  finish?: string[] | null;
  finish_family?: string[] | null;
  piececount: number;
  size: string;
  pricing: number;
  on_sale: boolean;
  type: string;
  title: string;
  description: string;
  delivery_type: string;
  catalog: string;
  room_type_code: string;
  single_item_room: boolean;
  sell_individually: boolean;
  mpn: string;
  swatch_request_flag: boolean;
  generic_name: string;
  monogram: boolean;
  customer_assembly_required: boolean;
  title_slug: string;
  vendorId: string;
  primary_image: string;
  grid_image: string;
  high_res_image: string;
  swatch_image: string;
  alternate_images?: string[] | null;
  dimension_image: string;
  primary_image_item: string;
  grid_image_item: string;
  route: string;
  lastModified: string;
  createdAt: string;
  sku: string;
  collection: string;
  lastModified_c: string;
  category_c: string;
  bed_size_c?: string[] | null;
  design_c?: string[] | null;
  feature_c?: string[] | null;
  finish_c?: string[] | null;
  headboard_design_c?: string[] | null;
  material_c?: string[] | null;
  style_c?: string[] | null;
  main_category_c: string;
}
export interface Breadcrumb {
  breadcrumb_url: string;
  breadcrumb_label: string;
}
export interface BreadCrumbsEntity {
  level: number;
  url: string;
  label: string;
  category: string;
}
export interface CatalogAvailability {
  FL: boolean;
  SE: boolean;
  TX: boolean;
  OOM: boolean;
}
export interface Variations {
  size?: SizeEntityOrFinishEntity[] | null;
  finish?: SizeEntityOrFinishEntity[] | null;
}
export interface SizeEntityOrFinishEntity {
  sku: string;
  variation_value: string;
  title: string;
  catalog_availability: CatalogAvailability;
  image: string;
  route: string;
}

export type ErrorResponse = {
  message: string;
};
