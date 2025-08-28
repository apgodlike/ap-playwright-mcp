import { Router } from "express";
import { getAiResponse } from "../controller/openAiController";
const router = Router();

router.post("/ai-prompt", getAiResponse);
export default router;
