import express, { Application } from "express";
import carFinderRoute from "./routes/carFinderRoute";
import carColourSearchRoute from "./routes/carColourSearchRoute";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app: Application = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());

app.use("/api/upload", carFinderRoute);
app.use("/api/search/colour", carColourSearchRoute);

const port: number = Number(process.env.PORT) || 8000;
app.listen(port, () => {
  console.log(`Server started and listening on port ${port}`);
});
