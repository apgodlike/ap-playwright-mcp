import { Router } from "express";
import { getAiResponse, getMcpTools } from "../controller/openAiController";
const router = Router();

router.post("/ai-prompt", getAiResponse);
router.get("/get-tools", getMcpTools);
export default router;
