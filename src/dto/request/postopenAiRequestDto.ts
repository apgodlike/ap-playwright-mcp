import { z } from "zod";

export const postopenAiRequestDto = z.object({
  message: z.string(),
});
