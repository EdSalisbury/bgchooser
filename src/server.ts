import app from "./index";
import express, { Express } from "express";

/**
 * Set the port number that your server will listen on
 * @type {number}
 */
const port: number = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
