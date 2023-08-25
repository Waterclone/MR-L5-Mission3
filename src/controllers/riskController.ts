import { Request, Response } from "express";

interface RiskRequest extends Request {
  body: {
    model?: string;
    year?: number;
    claim_history?: string;
    car_value?: number;
    risk_rating?: number;
  };
}

export const getRisk = (req: RiskRequest, res: Response) => {
  try {
    const { claim_history } = req.body;

    if (!claim_history || claim_history.trim() === "") {
      res.status(400).send({ error: "Invalid value or missing claim history" });
      return;
    } else {
      const keywords: string[] = ["collide", "crash", "scratch", "bump", "smash"];

      const occurrences: number = keywords.reduce((count: number, keyword: string) => count + (claim_history.toLowerCase().split(keyword).length - 1), 0);

      let riskRating: number;
      if (occurrences <= 1) {
        riskRating = 1;
      } else if (occurrences <= 2) {
        riskRating = 2;
      } else if (occurrences <= 3) {
        riskRating = 3;
      } else if (occurrences <= 4) {
        riskRating = 4;
      } else {
        riskRating = 5;
      }

      res.json({ risk_rating: riskRating });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    res.status(500).send({ error: "An error occurred while processing the request." });
  }
};
