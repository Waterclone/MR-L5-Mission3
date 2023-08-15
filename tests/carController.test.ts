import request from 'supertest';
import app from '../src/app'; // Import your Express app
import http from 'http';
import { calculateCarValue } from '../src/controllers/carController'; // Import the car utility function


let server: http.Server;

beforeAll(done => {
    server = app.listen(0, () => {
        done();
    });
});

afterAll(done => {
    server.close(() => {
        done();
    });
});




describe('API 1 - Convert "Model" and "Year" of a car to a suggested "Car Value"', () => {
    it('should return the correct car value for valid input', async () => {
      const input = { model: "Civic", year: 2014 };
      const expectedOutput = { car_value: 6614 };
  
      const response = await request(app)
        .post('/api/carvalue')
        .send(input)
        .expect(200);
  
      expect(response.body).toEqual(expectedOutput);
    });
  
    it('should return an error for invalid input', async () => {
      const invalidInput = { model: "InvalidModel", year: "InvalidYear" };
      const expectedErrorOutput = { error: "Invalid input" };
  
      const response = await request(app)
        .post('/api/carvalue')
        .send(invalidInput)
        .expect(400);
  
      expect(response.body).toEqual(expectedErrorOutput);
    });
  
    it('should handle spaces and special characters in model name', async () => {
      const input = { model: "M@zda 3", year: 2020 };
      const expectedOutput = { car_value: 2826 };
  
      const response = await request(app)
        .post('/api/carvalue')
        .send(input)
        .expect(200);
  
      expect(response.body).toEqual(expectedOutput);
    });
  
    // Add more test cases for edge cases and additional scenarios
  
  });
