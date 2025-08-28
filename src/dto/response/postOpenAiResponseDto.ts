import { z } from "zod";

export const postOpenAiResponseDto = z.object({
  message: z.string(),
});
