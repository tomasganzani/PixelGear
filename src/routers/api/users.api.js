import { Router } from "express";
import { readAll, read, create, update, destroy } from "../../controllers/apicontrollers/users.controller.js";

const usersApiRouter = Router();

usersApiRouter.get("/", readAll);
usersApiRouter.get("/:pid", read);
usersApiRouter.post("/", create);
usersApiRouter.put("/:pid", update);
usersApiRouter.delete("/:pid", destroy);

export default usersApiRouter