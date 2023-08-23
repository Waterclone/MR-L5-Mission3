import axios, { AxiosError } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export default async function makePrediction(imageData: string): Promise<any> {
  const predictionKey = process.env.PREDICTION_KEY;
  const endpoint = process.env.PREDICTION_ENDPOINT;

  if (!predictionKey) {
    throw new Error('Prediction key is missing in the configuration.');
  }

  if (!endpoint) {
    throw new Error('Prediction endpoint is missing in the configuration.');
  }

  try {
    const headers = {
      'Prediction-Key': predictionKey,
      'Content-Type': 'application/octet-stream',
    };

    const response = await axios.post(endpoint, imageData, { headers });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error('Prediction failed: ' + error.message);
    } else {
      throw new Error('carRecognitionServices not working.');
    }
  }
}




