import express from "express";
import { getRisk } from "../controllers/riskController";

const router = express.Router();

router.post("/", getRisk);

export default router;
