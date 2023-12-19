"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
/**
 * Set the port number that your server will listen on
 * @type {number}
 */
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
/**
 * Start the server and listen on the specified port.
 */
index_1.default.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
