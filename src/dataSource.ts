import { DataSource } from "typeorm"
import "dotenv/config"
import "reflect-metadata"

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + "/**/entities/*.{js,ts}"],
  migrations: [__dirname + "/**/migrations/*.{js,ts}"],
})

export default AppDataSource
