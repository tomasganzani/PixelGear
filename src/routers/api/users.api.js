import { Router } from "express";
import { readAll, read, create, update, destroy } from "../../controllers/apicontrollers/users.controller.js";

const usersApiRouter = Router();

usersApiRouter.get("/", readAll);
usersApiRouter.get("/:cid", read);
usersApiRouter.post("/", create);
usersApiRouter.put("/:cid", update);
usersApiRouter.delete("/:cid", destroy);

export default usersApiRouter