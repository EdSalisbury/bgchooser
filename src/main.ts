import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { config } from 'dotenv';
import { resolve } from 'path';

const env = process.env.NODE_ENV || 'development';
config({ path: resolve(__dirname, `../.env.${env}`) });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
  await app.listen(3000);
}
bootstrap();
