import { Request, Response } from "express";
import { dMartAxiosSearchResponse } from "../axios/dMartSearchResponse";
import { extractDMartResponseData } from "../service/dMartService";
import { sortByPriceService } from "../service/sortByPriceService";

export const getDMartSearchResponse = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchterm;
    if (!searchTerm) {
      return res.sendStatus(404);
    }

    const dMartAxiosResponse = await dMartAxiosSearchResponse(
      searchTerm as string
    );
    if (!dMartAxiosResponse) {
      return res.sendStatus(400);
    }
    const extractedData = extractDMartResponseData(dMartAxiosResponse);
    if (!extractedData) {
      return res.sendStatus(400);
    }
    const sortedResponse = sortByPriceService(extractedData);
    if (!sortedResponse) {
      return res.sendStatus(400);
    }

    return res.status(200).json(sortedResponse);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong", error });
  }
};
