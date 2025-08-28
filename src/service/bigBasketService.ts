import { BigBasketSearchResponse } from "../types/bigBasket";
import { SearchTermResponse } from "../types/searchTermResponse";

export const extractBigBasketResponseData = (
  rawData: BigBasketSearchResponse
): SearchTermResponse[] => {
  const products = rawData.tabs[0].product_info.products;

  const bigBasketResult: SearchTermResponse[] = [];

  products.forEach((product, index) => {
    if (index >= 5) {
      return;
    }
    const result: SearchTermResponse = {
      store: "BigBasket",
      id: product.id,
      absolute_url: product.absolute_url,
      brand_name: product.brand.name,
      product: product.desc,
      magnitude: product.magnitude,
      price: product.pricing.discount.prim_price.sp,
      quantity: product.w,
      price_per_gram: 0,
    };
    bigBasketResult.push(result);
    const children = product.children;
    children.forEach((product) => {
      const childernResult: SearchTermResponse = {
        store: "BigBasket",
        id: product.id,
        absolute_url: product.absolute_url,
        brand_name: product.brand.name,
        product: product.desc,
        magnitude: product.magnitude,
        price: product.pricing.discount.prim_price.sp,
        quantity: product.w,
        price_per_gram: 0,
      };
      bigBasketResult.push(childernResult);
    });
  });

  return bigBasketResult;
};
