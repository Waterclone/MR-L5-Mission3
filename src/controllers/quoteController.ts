import { Request, Response } from "express";

interface PremiumRequest extends Request {
  body: {
    model?: string;
    year?: number;
    claim_history?: string;
    car_value?: number;
    risk_rating?: number;
  };
}

export const getQuote = (req: PremiumRequest, res: Response) => {
  try {
    const { car_value, risk_rating } = req.body;

    if (!car_value || !risk_rating || risk_rating > 5 || risk_rating < 1) {
      return res.status(400).json({ error: "Missing parameters" });
    }

    const calculatePremium = ({ car_value, risk_rating }: { car_value: number; risk_rating: number }) => {
      const yearlyPremium = car_value * (risk_rating / 100);
      const monthlyPremium = yearlyPremium / 12;
      return {
        monthly_premium: parseFloat(monthlyPremium.toFixed(2)),
        yearly_premium: parseFloat(yearlyPremium.toFixed(2)),
      };
    };

    const premiumData = calculatePremium({ car_value, risk_rating });

    return res.status(200).json(premiumData);
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
};
