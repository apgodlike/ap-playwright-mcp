import axios from "axios";
import { BigBasketSearchResponse } from "../types/bigBasket";

export const bigbasketAxiosSearchRequest = async (
  searchTerm: string
): Promise<BigBasketSearchResponse> => {
  const headers = {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
    "x-channel": "BB-WEB",
    referer: "https://www.bigbasket.com/ps/?q=moong+dal&nc=as",
    "sec-ch-ua":
      '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"Windows"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-tracker": "c544b7c0-4ee3-4b68-8a6e-4f508c2aad29",
    cookie: `x-entry-context-id=100; x-entry-context=bb-b2c; _bb_locSrc=default; x-channel=web; _bb_bhid=; _bb_nhid=1723; _bb_vid=NTIxMDgyNzI0NDYyNTgzNzkw; _bb_dsevid=; _bb_dsid=; csrftoken=jv3IzM948l8L3hWLih5xqLEYHnFPs0bM3C1JvYpJCGiKS7zhjYPiYKkl0FLbn50w; _bb_home_cache=1c374645.1.visitor; _bb_bb2.0=1; _is_tobacco_enabled=0; _is_bb1.0_supported=0; bb2_enabled=true; csurftoken=31mtfQ.NTIxMDgyNzI0NDYyNTgzNzkw.1735126152082.FeHPb0o/QMBi2VtLX5QONAXennlNqMoQkdAyKdXpwW0=; jarvis-id=d3e12a41-0d02-47ef-8611-00d9f44d4a70; _bb_lat_long=MTMuMDM4MTg5Nnw4MC4xNTY1NDYx; _bb_cid=6; _bb_aid="MzA2MjMyMjkwNA=="; is_global=0; _bb_addressinfo=MTMuMDM4MTg5Nnw4MC4xNTY1NDYxfFJhamFzIEdhcmRlbnw2MDAxMTZ8Q2hlbm5haXwxfGZhbHNlfHRydWV8dHJ1ZXxCaWdiYXNrZXRlZXI=; _bb_pin_code=600116; _bb_cda_sa_info=djIuY2RhX3NhLjEwMC4xNDc0OSwxNDgxMg==; is_integrated_sa=1; ts=2024-12-25%2016:59:23.059; _bb_sa_ids=14749%2C14812`, // Add your actual cookies here
  };

  const response = await axios.get<BigBasketSearchResponse>(
    `https://www.bigbasket.com/listing-svc/v2/products?type=ps&slug=${searchTerm}&page=1`,
    { headers }
  );
  return response.data;
};
