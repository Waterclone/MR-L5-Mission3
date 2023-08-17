export const riskRatingCalc = (claim_history: string) => {
    try {
        if (typeof claim_history !== 'string') {
            throw new Error("Claim history must be a string");
        }

        if (claim_history === "") {
            throw new Error("Claim history cannot be empty");
        }

        const keywordList: string[] = ["collide", "crash", "scratch", "bump", "smash"];
        const claimHistory: string = claim_history.toLowerCase();
        let riskRating: number = 0;

        keywordList.forEach(keyword => {
            const keywordOccurrences = claimHistory.split(keyword).length - 1;
            riskRating += keywordOccurrences;
        });

        const minRiskRating = Math.max(1, riskRating);

        return { risk_rating: Math.min(5, minRiskRating) };
    } catch (error) {
        console.error('Error in riskRatingCalc:', error);
        throw error;
    }
};

