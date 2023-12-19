/**
 * Import the express module
 * @type {import('express')}
 */
import express, { Express, Request, Response } from "express";

/**
 * Create an instance of an Express application
 */
const app: Express = express();

/**
 * Route handler for GET requests to the root URL ('/')
 * Sends back the text "Hello World!"
 * @param req - The request object
 * @param res - The response object
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
