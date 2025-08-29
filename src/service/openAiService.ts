import { openAiPayload } from "../controller/openAiController";
import { ChatCompletionResponse } from "../types/openAiResponse";
import { openaiApi } from "../axios/axios";

export const openAiApiRequest = async (
  payload: openAiPayload
): Promise<ChatCompletionResponse> => {
  console.log("openAiApiRequest");
  const response = await openaiApi.post<ChatCompletionResponse>(
    "/chat/completions",
    payload
  );
  return response.data;
};
