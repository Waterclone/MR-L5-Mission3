import { Request, Response } from 'express';
import makePrediction from '../services/carRecognitionServices'; 

export async function predictImage(req: Request, res: Response): Promise<void> {
  try {
    const imageData: string = req.body.imageData;
    const predictionResult = await makePrediction(imageData); 
    console.log('Prediction result:', predictionResult);
    res.status(200).json(predictionResult);
  } catch (error) {
    console.error('Prediction error:', error); 
    res.status(500).json({ error: 'carRecognitionController not working' });
  }
}
