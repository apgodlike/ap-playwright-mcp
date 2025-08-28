import { Router } from "express";
import { getBigBasketResponse } from "../controller/getBigBasketResponseController";
const router = Router();

router.get("/search", getBigBasketResponse);
export default router;
