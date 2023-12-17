import request = require("supertest");
import app from "../src/index"; // import your Express app
import { Server } from 'http';

describe("GET /", () => {
  let server: Server;

  beforeAll(() => {
    server = app.listen(); // start the server
  });

  afterAll((done) => {
    server.close(done); // close the server after your tests
  });

  it('responds with "Hello World!"', async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Hello World!");
  });
});
