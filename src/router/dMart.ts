import { Router } from "express";
import { getDMartSearchResponse } from "../controller/getDMartResponseController";
const router = Router();

router.get("/search", getDMartSearchResponse);
export default router;
