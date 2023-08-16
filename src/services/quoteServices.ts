export const calculateQuote = (car_value: number, risk_rating: number) => {
  if (!car_value || !risk_rating || risk_rating > 5 || risk_rating < 1) {
    return { error: "Missing parameters" };
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

  return { premiumData };
};
