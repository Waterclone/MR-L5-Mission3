import { Request, Response } from "express";

export const getRisk = (req: Request, res: Response) => {
  try {
    const { claim_history } = req.body;

    if (!claim_history || claim_history.trim() === "") {
      res.status(400).send({ error: "Invalid value or missing claim_history parameter" });
      return;
    } else {
      const keywords = ["collide", "crash", "scratch", "bump", "smash"];

      const occurrences = keywords.reduce((count, keyword) => count + (claim_history.toLowerCase().split(keyword).length - 1), 0);

      let riskRating;
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
