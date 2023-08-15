import express from "express";
import { getQuote } from "../controllers/quoteController";

const router = express.Router();

router.get("/", getQuote);

export default router;
