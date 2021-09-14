const app = require('../src/server')
const supertest = require('supertest');
const request = supertest(app);

  test('Testing the status and the response message', async () => {
    const data = await request.get("/test");
    expect(data.status).toBe(200);
    expect(data.text).toBe('pass!');
   
  });
