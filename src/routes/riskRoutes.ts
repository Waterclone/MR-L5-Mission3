import express from "express";
import { getRisk } from "../controllers/riskController";

const router = express.Router();

router.get("/", getRisk);

export default router;
