import axios from "axios";
import { DMartSearchResponse } from "../types/dMart";

export const dMartAxiosSearchResponse = async (
  searchTerm: string
): Promise<DMartSearchResponse> => {
  const headers = {
    accept: "application/json, text/plain, */*",
    "accept-language": "en-US,en;q=0.9",
    d_info: "w-20241125_173859",
    origin: "https://www.dmart.in",
    priority: "u=1, i",
    "sec-ch-ua": `"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"`,
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": `"Windows"`,
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site",
    storeid: "10708",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "x-request-id":
      "MTczY2NhNzctYjFhMi00MGYyLTgyYWUtNWQ4NmYzNzA1MGEyfHxTLTIwMjQxMTI1XzE3Mzg1OXx8LTEwMDI=",
  };

  const response = await axios.get(
    `https://digital.dmart.in/api/v2/search/${searchTerm}?page=1&size=40&channel=web&storeId=10708`,
    { headers }
  );

  return response.data;
};
