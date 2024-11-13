// tests/user.test.js
const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose'); // Import mongoose to close the connection

describe('User API Endpoints', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/api/users')
      .send({
        name: 'Test User',
        email: 'testuser@example.com',
        phone: '1234567890',
        password: 'password',
        role: 'user'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'Test User');
  });

  // Additional tests for other endpoints can be added here
});

// Close the MongoDB connection after all tests
afterAll(async () => {
  await mongoose.connection.close();
});
