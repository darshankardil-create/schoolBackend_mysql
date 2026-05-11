import express from "express";
import { handleaddschool, handlelistschool } from "./controller.js";

const routes = express.Router();

routes.post("/addSchool", handleaddschool);
routes.get("/listSchools/:latitude/:longitude", handlelistschool);

export default routes;
