import { SearchTermResponse } from "../types/searchTermResponse";

export const sortByPriceService = (
  unSortedData: SearchTermResponse[]
): SearchTermResponse[] => {
  //   unSortedData.forEach((product) => {
  //     product.price_per_gram = Number(product.price) / Number(product.magnitude);
  //   });

  unSortedData.sort((a, b) => {
    return a.price_per_gram - b.price_per_gram;
  });
  return unSortedData;
};

export const updatePricePerGram = (
  unSortedData: SearchTermResponse[]
): SearchTermResponse[] => {
  unSortedData.forEach((product) => {
    product.price_per_gram = Number(product.price) / Number(product.magnitude);
  });

  return unSortedData;
};
