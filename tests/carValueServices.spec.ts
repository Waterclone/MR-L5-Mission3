import { calculateCarValue } from "../src/services/carValueServices";
import { describe, it, expect } from "@jest/globals";

describe('Convert car model and year to a "Car Value"', () => {
  it("should calculate for valid input and return a value of number types", () => {
    // Arrange
    const model = "Civic";
    const year = 2014;
    const expected = 6614;

    // Act
    const actual = calculateCarValue(model, year);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should calculate car value for model with space", () => {
    // Arrange
    const model = "Ford Mustang";
    const year = 2021;
    const expected = 15821;

    // Act
    const actual = calculateCarValue(model, year);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should calculate car value for model with symbols", () => {
    // Arrange
    const model = "CX-@";
    const year = 2020;
    const expected = 4720;

    // Act
    const actual = calculateCarValue(model, year);

    // Assert
    expect(actual).toBe(expected);
  });

  it("should calculate car value for model name with number on it", () => {
    // Arrange
    const model = "Toyota 86";
    const year = 2010;
    const expected = 11610;

    // Act
    const actual = calculateCarValue(model, year);

    // Assert
    expect(actual).toBe(expected);
  });

  //----Expecting Error message

  it("should throw an error for empty string", () => {
    // Arrange
    const model = "";
    const year = 2022;
    const expectedError = "Invalid input";

    // Act
    const actual = () => calculateCarValue(model, year);

    // Assert
    expect(actual).toThrow(expectedError);
  });

  it("should return error for older year less than 2000", () => {
    // Arrange
    const model = "Accord";
    const year = 1995;
    const expectedError = "Invalid input";

    // Act
    const actual = () => calculateCarValue(model, year);

    // Assert
    expect(actual).toThrow(expectedError);
  });

  it("should throw an error for negative year", () => {
    // Arrange
    const model = "Impreza";
    const year = -555;
    const expectedError = "Invalid input";

    // Act
    const actual = () => calculateCarValue(model, year);

    // Assert
    expect(actual).toThrow(expectedError);
  });

  it("should return error for floating-point number", () => {
    // Arrange
    const model = "Prius";
    const year = 2010.1;
    const expectedError = "Invalid input";

    // Act
    const actual = () => calculateCarValue(model, year);

    // Assert
    expect(actual).toThrow(expectedError);
  });

  it("should return error for future year", () => {
    // Arrange
    const model = "Axela";
    const year = 2025;
    const expectedError = "Invalid input";

    // Act
    const actual = () => calculateCarValue(model, year);

    // Assert
    expect(actual).toThrow(expectedError);
  });
});
