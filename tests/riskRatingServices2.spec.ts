import { riskRatingCalc } from "../src/services/riskRatingServices2";
import { describe, it, expect } from "@jest/globals";

describe('Convert claim history to a "Risk Rating""', () => {
  it("should return a risk rating of 1 if there is no keyword occur", () => {
    // Arrange
    const claim_history = "No claims in the last 3 years.";
    const expected = { risk_rating: 1 };

    // Act
    const actual = riskRatingCalc(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return a risk rating equivalent to keyword occurence", () => {
    // Arrange
    const claim_history = "Car got bumped while parked.";
    const expected = { risk_rating: 1 };

    // Act
    const actual = riskRatingCalc(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should maximum risk rating of 5", () => {
    // Arrange
    const claim_history = "Car got bump bump bump bump bump and bump.";
    const expected = { risk_rating: 5 };

    // Act
    const actual = riskRatingCalc(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should calculate risk rating for repeated keywords", () => {
    // Arrange
    const claim_history = "Crash, crash, crash, bump";
    const expected = { risk_rating: 4 };

    // Act
    const actual = riskRatingCalc(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should minimum risk rating of 1", () => {
    // Arrange
    const claim_history = "No keywords on input";
    const expected = { risk_rating: 1 };

    // Act
    const actual = riskRatingCalc(claim_history);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should throw an error for an empty string", () => {
    // Arrange
    const claim_history = "";
    const expectedError = "Claim history cannot be empty";

    // Act and Assert
    expect(() => riskRatingCalc(claim_history)).toThrow(expectedError);
  });
});
