import { Router } from "express";
import { getUser, loginViews, registerViews } from "../../controllers/users.controller.js";

const usersViewRouter = Router();

usersViewRouter.get("/register", registerViews)
usersViewRouter.get("/Login", loginViews)
usersViewRouter.get("/:pid", getUser)

export default usersViewRouter