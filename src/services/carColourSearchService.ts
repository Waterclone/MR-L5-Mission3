import axios from "axios";

const carColourSearchService = async (imageBuffer: Buffer) => {
  const predictionEndpoint = process.env.PREDICTION_ENDPOINT2 ?? "";

  try {
    const predictionResponse = await axios.post(predictionEndpoint, imageBuffer, {
      headers: {
        "Prediction-Key": process.env.PREDICTION_KEY2 || "",
        "Content-Type": "application/octet-stream",
      },
    });

    return predictionResponse.data.predictions;
  } catch (error) {
    throw error;
  }
};

export { carColourSearchService };
