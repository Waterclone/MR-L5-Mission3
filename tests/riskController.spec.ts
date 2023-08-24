import { calculateRiskRating } from "../src/services/riskServices";
import { describe, it, expect } from "@jest/globals";

describe("risk rating tests", () => {
  it("should return risk rating of 3. sunshine scenario.", () => {
    // Arrange
    const claim_history = "My only claim was a crash into my house's garage door that left a scratch on my car.  There are no other crashes.";
    const expected = { riskRating: 3 };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return risk rating of 1 when no keywords identified", () => {
    // Arrange
    const claim_history = "I have never made a claim on my insurance";
    const expected = { riskRating: 1 };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return an error when claim_history is an empty string", () => {
    // Arrange
    const claim_history = "";
    const expected = { error: "Invalid value or missing claim history" };

    // Act
    const actual = calculateRiskRating(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });
});
