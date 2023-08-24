import { Request, Response } from "express";
import { carColourSearchService } from "../services/carColourSearchService";

const carColourSearchController = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  try {
    const predictionResponse = await carColourSearchService(req.file.buffer);
    const predictions: string[] = predictionResponse.map((prediction: any) => prediction.tagName);
    return res.json({ predictions });
  } catch (error) {
    console.error("Error making prediction:", error);
    return res.status(500).json({ message: "Server error." });
  }
};

export { carColourSearchController };
