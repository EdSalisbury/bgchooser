import dotenv from "dotenv";
import { DataSource } from "typeorm";
import { User } from "./user/user.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
});
