import mysql from "mysql2/promise";
import { defineschema } from "./schema.js";
import dotenv from "dotenv";

dotenv.config();

export default async function connectDB() {
  try {
    const db = await mysql.createConnection({
      //connect

      host: process.env.HOST,
      user:"sql12826373",
      port: process.env.PORT,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
    });

    console.log("connected to mysql successfully");

    await defineschema(db); //define schema

    return db; //return final instance
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
