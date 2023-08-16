export const riskRatingCalc = (inputData: { claim_history: string }): { risk_rating?: number; error?: string } => {
    const keywordList = ["collide", "crash", "scratch", "bump", "smash"];

    if (!inputData || !inputData.claim_history) {
        return { error: "Input data is invalid" };
    }

    const claimHistory = inputData.claim_history.toLowerCase();
    let riskRating = 0;

    keywordList.forEach(keyword => {
        const keywordOccurrences = claimHistory.split(keyword).length - 1;
        riskRating += keywordOccurrences;
    });

    return { risk_rating: Math.min(5, riskRating) };
}