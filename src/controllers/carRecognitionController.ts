import { Request, Response } from 'express';
import makePrediction from '../services/carRecognitionServices'; // Correct the import path

export async function predictImage(req: Request, res: Response): Promise<void> {
  try {
    const imageData: string = req.body.imageData;
    const predictionResult = await makePrediction(imageData); // Use the imported function
    console.log('Prediction result:', predictionResult);
    res.status(200).json(predictionResult);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
}
