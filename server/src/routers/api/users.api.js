import { Router } from "express";
import { getAllUsers, getUser, create, deleteUser, updateUser } from "../../controllers/users.controller.js";
import isValidUser from "../../middleware/isValidUser.mid.js";

const usersApiRouter = Router();

usersApiRouter.get("/", getAllUsers);
usersApiRouter.get("/:pid", getUser);
usersApiRouter.post("/", isValidUser, create);
usersApiRouter.put("/:pid", updateUser);
usersApiRouter.delete("/:pid", deleteUser);

export default usersApiRouter