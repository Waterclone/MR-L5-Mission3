import request from "supertest";
import app from "../src/app";

describe('Convert "Model" and "Year" of a car to "Car Value"', () => {
  it("should calculate for valid input, for example (Civic, 2014)", async () => {
    // Arrange
    const expected = { model: "Civic", year: 2014 };

    // Act
    const response = await request(app).post("/api/carvalue").send({ model: "Civic", year: 2014 });
    const actual = response.body;

    // Assert
    expect(response.status).toBe(200);
    expect(actual).toEqual(expected);
  });

  // it('should accept model with space (Ford Mustang, 2021)', async () => {
  //   // Arrange
  //   const inputData = { model: 'Ford Mustang', year: 2021 };

  //   // Act
  //   const response = await request(app)
  //     .post('/api/carvalue')
  //     .send(inputData);

  //   // Assert
  //   expect(response.status).toBe(200);
  //   // Add your expectation for the response value here
  // });

  // it('should accept model with symbols (CX-8, 2020)', async () => {
  //   // Arrange
  //   const inputData = { model: 'CX-8', year: 2020 };

  //   // Act
  //   const response = await request(app)
  //     .post('/api/carvalue')
  //     .send(inputData);

  //   // Assert
  //   // Add your assertions here
  // });

  // it('should accept model name with number (Toyota 86, 2010)', async () => {
  //   // Arrange
  //   const inputData = { model: 'Toyota 86', year: 2010 };

  //   // Act
  //   const response = await request(app)
  //     .post('/api/carvalue')
  //     .send(inputData);

  //   // Assert
  //   // Add your assertions here
  // });

  // it('should return an error message for future year (Camry, 2025)', async () => {
  //   // Arrange
  //   const inputData = { model: 'Camry', year: 2025 };

  //   // Act
  //   const response = await request(app)
  //     .post('/api/carvalue')
  //     .send(inputData);

  //   // Assert
  //   // Add your assertions here
  // });

  // it('should return an error message for older year (Accord, 1995)', async () => {
  //   // Arrange
  //   const inputData = { model: 'Accord', year: 1995 };

  //   // Act
  //   const response = await request(app)
  //     .post('/api/carvalue')
  //     .send(inputData);

  //   // Assert
  //   // Add your assertions here
  // });

  // Add similar sections for other test cases
});
