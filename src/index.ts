/**
 * Import the express module
 * @type {import('express')}
 */
import express, { Express, Request, Response } from "express";

/**
 * Create an instance of an Express application
 * @type {Express}
 */
const app: Express = express();

/**
 * Set up a route handler for GET requests to the root URL ('/')
 * It sends back the text "Hello World!"
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
