import express from "express";
import multer from "multer";
import { carColourSearchController } from "../controllers/carColourSearchController";

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post("/", upload.single("image"), carColourSearchController);

export default router;
