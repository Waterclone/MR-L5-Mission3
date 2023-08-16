import express, { Express } from "express";
import carValueRoutes from "./routes/carValueRoutes";
import riskRatingRoutes2 from "./routes/riskRatingRoutes2";
import quoteRoutes from "./routes/quoteRoutes";
import riskRoutes from "./routes/riskRoutes";
import dotenv from "dotenv";
dotenv.config();

const app: Express = express();
app.use(express.json());

app.use("/api/carvalue", carValueRoutes);
app.use("/api/riskrating2", riskRatingRoutes2);
app.use("/api/riskrating", riskRoutes);
app.use("/api/premiumquote", quoteRoutes);

const port: number = Number(process.env.PORT) || 8000;
app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});

export default app;
