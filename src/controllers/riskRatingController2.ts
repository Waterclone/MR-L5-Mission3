import { Request, Response } from "express";
import { riskRatingCalc } from "../services/riskRatingServices2";

export const getRiskRating2 = async (req: Request, res: Response) => {
    try {
        const claim_history: string = req.body.claim_history;

        if (!claim_history || typeof claim_history !== 'string') {
            return res.status(400).json({ error: 'Invalid claim history data' });
        }

        const output = await riskRatingCalc(claim_history);
        res.json(output);
    } catch (error) {
        console.error('Error in getRiskRating:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
