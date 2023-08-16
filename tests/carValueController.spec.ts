import { calculateCarValue } from '../src/services/carValueServices';


describe('Convert car model and year to a "Car Value"', () => {
  it('should calculate car value for valid input', () => {
    // Arrange
    const model = "Civic";
    const year = 2014;
    const expected = 6614;

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toBe(expected);
  });

  it('should calculate car value for model with space', () => {
    // Arrange
    const model = "Ford Mustang";
    const year = 2021;
    const expected = 15821;

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toBe(expected);
  });

  it('should calculate car value for model with symbols', () => {
    // Arrange
    const model = "CX-8";
    const year = 2020;
    const expected = 4720;

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toBe(expected);
  });

  it('should calculate car value for model name with number', () => {
    // Arrange
    const model = "Toyota 86";
    const year = 2010;
    const expected = 11610;

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toBe(expected);
  });

  it('should return error for empty model name', () => {
    // Arrange
    const model = "";
    const year = 2022;
    const errorExpected = { error: "Model and year are required" };

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toEqual(errorExpected);
  });

  // it('should return error for empty year', () => {
  //   // Arrange
  //   const model = "Prius";
  //   const year = "";
  //   const errorExpected = { error: "Model and year are required" };

  //   // Act
  //   const result = calculateCarValue(model, year);

  //   // Assert
  //   expect(result).toEqual(errorExpected);
  // });

  it('should return error for future year', () => {
    // Arrange
    const model = "Camry";
    const year = 2025;
    const errorExpected = { error: "Invalid year" };

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toEqual(errorExpected);
  });

  it('should return error for older year less than 2000', () => {
    // Arrange
    const model = "Accord";
    const year = 1995;
    const errorExpected = { error: "Invalid year" };

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toEqual(errorExpected);
  });

  it('should return error for negative year', () => {
    // Arrange
    const model = "Impreza";
    const year = -555;
    const errorExpected = { error: "Invalid year" };

    // Act
    const result = calculateCarValue(model, year);

    // Assert
    expect(result).toEqual(errorExpected);
  });

  // it('should return error for wrong data type for year', () => {
  //   // Arrange
  //   const model = "Camaro";
  //   const year = "twenty twenty";
  //   const errorExpected = { error: "Invalid year" };

  //   // Act
  //   const result = calculateCarValue(model, year);

  //   // Assert
  //   expect(result).toEqual(errorExpected);
  // });
});

