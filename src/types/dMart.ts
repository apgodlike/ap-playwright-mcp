export interface DMartSearchResponse {
  xSellData: any[];
  totalRecords: number;
  products: Product[];
}

export interface Product {
  buyable: string;
  manufacturer?: string;
  name: string;
  seo_token_ntk: string;
  numberOfskus: number;
  seo_meta_desc?: string;
  seo_meta_title?: string;
  availabilityType: string;
  categoryId: string;
  categoryName: string;
  parentCategoryIds: string[];
  categoryThumbnail?: string;
  isItemShareable: string;
  PRODUCT_SKUS_SPLIT: string;
  announcementTags: any[];
  productAnnouncement: any[];
  productId: string;
  targetUrl: string;
  sKUs: SKu[];
  templatetype: string;
}

export interface SKu {
  availabilityType: string;
  groceryType?: string;
  variantText: string;
  variantTextValue: string;
  variantInfoTxtValue: string;
  variantType: string;
  variantImgValue: string;
  defaultRank: string;
  imageKey: string;
  productImageKey: string;
  binaryImgCode: string;
  imgCode: string;
  homeorpup: string;
  cod: string;
  priceMRP: string;
  priceSALE: string;
  savePrice: string;
  savingPercentage: number;
  invStatus: string;
  maxQuantity: string;
  skuUniqueID: string;
  articleNumber: string;
  buyable: string;
  defaultVariant: string;
  isPriceEditAllowed: string;
  bulkQuantity: string;
  bulkThreshold: string;
  exclusive: string;
  minBulkQuantity: string;
  giftItem: string;
  offers?: string;
  invType: string;
  name: string;
  tags: string[];
  usp: string;
  description: string;
  isProductNotifiable: string;
}
