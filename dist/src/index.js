"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Import the express module
 * @type {import('express')}
 */
const express_1 = __importDefault(require("express"));
/**
 * Create an instance of an Express application
 */
const app = (0, express_1.default)();
/**
 * Route handler for GET requests to the root URL ('/')
 * Sends back the text "Hello World!"
 * @param req - The request object
 * @param res - The response object
 */
app.get("/", (req, res) => {
    res.send("Hello World!");
});
exports.default = app;
