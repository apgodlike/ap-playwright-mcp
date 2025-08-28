import { postopenAiRequestDto } from "../dto/request/postopenAiRequestDto";
import { playwrightMcpService } from "../service/mcpService";
import { openAiApiRequest } from "../service/openAiService";
import { postAiResponse } from "../types/postAiResponse";
import { Request, Response } from "express";

export interface openAiPayload {
  model: string;
  messages: [{ role: string; content: string }];
  temperature: number;
}

export const getAiResponse = async (req: Request, res: Response) => {
  try {
    await playwrightMcpService();
    const payload = postopenAiRequestDto.parse(req.body);

    const openAiPaylaod: openAiPayload = {
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: payload.message }],
      temperature: 0.7,
    };

    const openAIResponse = await openAiApiRequest(openAiPaylaod);

    const responseBody: postAiResponse = {
      message: openAIResponse.choices[0].message.content,
    };
    return res.status(200).json(responseBody);
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong", error });
  }
};
