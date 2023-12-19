"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const index_1 = __importDefault(require("../src/index")); // import your Express app
describe("GET /", () => {
    let server;
    beforeAll(() => {
        server = index_1.default.listen(); // start the server
    });
    afterAll(done => {
        server.close(done); // close the server after your tests
    });
    it('responds with "Hello World!"', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request(index_1.default).get("/");
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Hello World!");
    }));
});