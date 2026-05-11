import mysql from "mysql2/promise";
import express from "express";
import dotenv from "dotenv";
import router from "./routes.js";

const app = express();

dotenv.config();

app.use(express.json());

app.use("/schoolapi", router);

const port = process.env.EXPRESSPORT || 3000;

app.listen(port, () => {
  console.log("server is live on port", port);
});
