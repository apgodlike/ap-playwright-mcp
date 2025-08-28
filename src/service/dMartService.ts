import { DMartSearchResponse } from "../types/dMart";
import { SearchTermResponse } from "../types/searchTermResponse";

export const extractDMartResponseData = (
  rawData: DMartSearchResponse
): SearchTermResponse[] => {
  const results: SearchTermResponse[] = [];
  const products = rawData.products;
  products.forEach((product, index) => {
    if (index >= 5) {
      return;
    }
    const childern = product.sKUs;
    childern.forEach((eachChildren) => {
      let magnitudeValue = eachChildren.variantTextValue.trim();
      if (magnitudeValue.includes("kg")) {
        magnitudeValue = magnitudeValue.replace("kg", "").trim();
        magnitudeValue = String(Number(magnitudeValue) * 1000);
      } else if (magnitudeValue.includes("g")) {
        magnitudeValue = magnitudeValue.replace("g", "").trim();
        //   } else if (magnitudeValue.includes("L")) {
        //     magnitudeValue = magnitudeValue.replace("g", "").trim();
        //   } else if (magnitudeValue.includes("g")) {
        //     magnitudeValue = magnitudeValue.replace("g", "").trim();
      }

      const result: SearchTermResponse = {
        absolute_url: "https://dmart.in/product/" + product.seo_token_ntk,
        brand_name: product.manufacturer || "",
        id: product.productId,
        magnitude: magnitudeValue,
        price: eachChildren.priceSALE,
        price_per_gram: Number(extractPrice(eachChildren.variantInfoTxtValue)),
        product: eachChildren.name,
        quantity: eachChildren.variantTextValue,
        store: "DMart",
      };
      results.push(result);
    });
  });
  return results;
};

function extractPrice(variantInfoTxtValue: string): number | null {
  // Trim any extra spaces and remove the surrounding parentheses
  const cleanedValue = variantInfoTxtValue.replace(/[()]/g, "").trim();

  // Split the string by spaces
  const parts = cleanedValue.split(" ");

  // Check if the first part is the rupee symbol and the second part is the price
  if (parts.length > 1 && parts[0] === "₹") {
    // Parse and return the price as a number
    return parseFloat(parts[1]);
  }

  // Return null if the format is unexpected
  return null;
}
