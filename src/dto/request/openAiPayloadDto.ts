import { z } from "zod";

export const openAiPayloadDto = z.object({
  message: z.tuple([
    z.object({
      role: z.string(),
      content: z.string(),
    }),
  ]),
  model: z.string(),
  temperature: z.number(),
});
