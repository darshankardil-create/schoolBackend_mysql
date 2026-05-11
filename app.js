import dotenv from "dotenv";
import mysql from "mysql2/promise";
import express from "express";
import router from "./src/routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.use("/schoolapi", (req, _, next) => {
  console.log("got req :", req.method);
  next();
});

app.use("/schoolapi", router);

const port = process.env.EXPRESSPORT || 3000;

app.listen(port, () => {
  console.log("server is live on port", port);
});
