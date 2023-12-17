/**
 * Import the express module
 * @type {import('express')}
 */
import express, { Express, Request, Response } from 'express';

/**
 * Create an instance of an Express application
 * @type {Express}
 */
const app: Express = express();

/**
 * Set the port number that your server will listen on
 * @type {number}
 */
const port: number = 3000;

/**
 * Set up a route handler for GET requests to the root URL ('/')
 * It sends back the text "Hello World!"
 * @param {Request} req - The request object
 * @param {Response} res - The response object
 */
app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

/**
 * Start the server and make it listen for connections on the specified port
 * Log a message to the console once the server is ready
 */
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
