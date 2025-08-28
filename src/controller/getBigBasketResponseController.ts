import { Request, Response } from "express";
import { bigbasketAxiosSearchRequest } from "../axios/bigBasketSearchRequest";
import { extractBigBasketResponseData } from "../service/bigBasketService";
import {
  sortByPriceService,
  updatePricePerGram,
} from "../service/sortByPriceService";

export const getBigBasketResponse = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchterm;

    if (!searchTerm) {
      return res.sendStatus(404);
    }

    const bigBasketAxiosResponse = await bigbasketAxiosSearchRequest(
      searchTerm as string
    );
    if (!bigBasketAxiosResponse) {
      return res.sendStatus(400);
    }
    const extractedData = extractBigBasketResponseData(bigBasketAxiosResponse);
    if (!extractedData) {
      return res.sendStatus(400);
    }
    const updatePricePerGramValue = updatePricePerGram(extractedData);

    const sortedResponse = sortByPriceService(updatePricePerGramValue);
    if (!sortedResponse) {
      return res.sendStatus(400);
    }

    return res.status(200).json(sortedResponse);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
};
