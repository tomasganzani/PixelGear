import { Router } from "express";
import { getUser, loginViews, registerViews } from "../../controllers/viewscontrollers/views.users.js";

const usersViewRouter = Router();

usersViewRouter.get("/register", registerViews)
usersViewRouter.get("/Login", loginViews)
usersViewRouter.get("/:pid", getUser)

export default usersViewRouter