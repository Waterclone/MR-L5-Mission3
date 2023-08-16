import express from "express";
import { getQuote } from "../controllers/quoteController";

const router = express.Router();

router.post("/", getQuote);

export default router;
