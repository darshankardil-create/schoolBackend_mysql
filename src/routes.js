import express from "express";
import { handleaddschool, handlelistschool,handleclearall } from "./controller.js";

const routes = express.Router();

routes.post("/addSchool", handleaddschool);
routes.get("/listSchools", handlelistschool);
routes.delete("/clearall",handleclearall)

export default routes;
