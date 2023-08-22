import express, { Express } from "express";
import carValueRoutes from "./routes/carValueRoutes";
import riskRatingRoutes2 from "./routes/riskRatingRoutes2";
import quoteRoutes from "./routes/quoteRoutes";
import riskRoutes from "./routes/riskRoutes";
import carRecognitionRoutes from "./routes/carRecognitionRoutes";
import dotenv from "dotenv";
import cors from 'cors';
import multer from 'multer';
import bodyParser from 'body-parser'; 

dotenv.config();

const storage = multer.memoryStorage();
const upload = multer({ storage });
const app: Express = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(upload.single('file'));
app.use(cors({
  origin: 'http://localhost:3000'
}));


app.use("/api/carvalue", carValueRoutes);
app.use("/api/riskrating2", riskRatingRoutes2);
app.use("/api/riskrating", riskRoutes);
app.use("/api/premiumquote", quoteRoutes);
app.use("/api/upload", carRecognitionRoutes);


const port: number = Number(process.env.PORT) || 8000;
app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});

export default app;
