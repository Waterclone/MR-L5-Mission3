export const calculateRiskRating = (claim_history: string) => {
  if (!claim_history || claim_history.trim() === "") {
    return { error: "Invalid value or missing claim history" };
  } else {
    const keywords = ["collide", "crash", "scratch", "bump", "smash"];

    const occurrences = keywords.reduce((count, keyword) => count + (claim_history.toLowerCase().split(keyword).length - 1), 0);

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

    return { riskRating };
  }
};
