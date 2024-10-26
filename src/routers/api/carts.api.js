import { Router } from "express";
import { readAll, read, create, update, destroy } from "../../controllers/apicontrollers/carts.controllers.js";
const cartsApiRouter = Router();

cartsApiRouter.post("/", create)
cartsApiRouter.get("/", readAll)
cartsApiRouter.get("/:cid", read)
cartsApiRouter.put("/:cid", update)
cartsApiRouter.delete("/:cid", destroy)

export default cartsApiRouter