import express from "express";
import { index } from "../controller/Controlleruser.js";

const routes = express.Routes();

router.get("/", index.usersController);

export default routes;