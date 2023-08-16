import { Request, Response } from "express";
import { riskRatingCalc } from "../services/riskRatingServices2";

export const getRiskRating2 = ((req: Request, res: Response) => {
    try {
        const input = req.query;

        const output = riskRatingCalc({ claim_history: input.claim_history as string });
        res.json(output);
    } catch (error) {
        console.error('Error in getRiskRating:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});