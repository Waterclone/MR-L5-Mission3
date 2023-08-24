import { calculateQuote } from "../src/services/quoteServices";
import { describe, it, expect } from "@jest/globals";

describe("premium quote tests", () => {
  it("should return monthly premium: 22 and yearly premium: 264. sunshine scenario", () => {
    // Arrange
    const car_value = 6600;
    const risk_rating = 4;
    const expected = { premiumData: { monthly_premium: 22, yearly_premium: 264 } };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message. risk_rating > 8. ", () => {
    // Arrange
    const car_value = 6600;
    const risk_rating = 8;
    const expected = { error: "Missing parameters" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });

  it("should return error message. risk_rating < 1. ", () => {
    // Arrange
    const car_value = 6600;
    const risk_rating = 0;
    const expected = { error: "Missing parameters" };

    // Act
    const actual = calculateQuote(car_value, risk_rating);

    // Assert
    expect(actual).toEqual(expected);
  });
});
