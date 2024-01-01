import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { config } from "dotenv";
import { resolve } from "path";
import {
  Controller,
  Get,
  Logger,
  Injectable,
  NestMiddleware,
} from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

const env = process.env.NODE_ENV || "development";
config({ path: resolve(__dirname, `../.env.${env}`) });

function loggerMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
}

function rootRoutes(req: Request, res: Response, next: NextFunction) {
  if (req.url === "/" || req.url === "/api" || req.url === "/api/v1") {
    res.send({ validRoutes: ["/api/v1/users"] });
  }
  next();
}

async function bootstrap() {
  const logger = new Logger("Bootstrap");
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.useLogger(logger);
  app.use(rootRoutes);
  app.setGlobalPrefix("api/v1");
  app.use(loggerMiddleware);

  await app.listen(8080);
}
bootstrap();
