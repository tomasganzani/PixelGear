import { Router } from "express";
import { registerViews } from "../../controllers/users.controller.js";

const usersViewRouter = Router();

usersViewRouter.get("/register", registerViews)

export default usersViewRouter