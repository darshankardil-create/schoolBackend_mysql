import mysql from "mysql2/promise";
import { defineschema } from "./schema.js";
import dotenv from "dotenv";


dotenv.config()

export default async function connectDB() {

  try {

    const db = await mysql.createConnection({

      // uri: process.env.MYSQLURL,

      uri:process.env.MYSQLURL,

      ssl: { rejectUnauthorized: false }

    });

    console.log("connected to mysql successfully");


    await defineschema(db); //define schema

    return db; //return final instance

  } catch (error) {

    console.error(error);

    process.exit(1);

  }
}
