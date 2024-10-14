import { readAll, read, create, update, destroy } from "../../controllers/apicontrollers/products.controllers.js";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", readAll);
productsRouter.get("/:pid", read);
productsRouter.post("/", create);
productsRouter.put("/:pid", update);
productsRouter.delete("/:pid", destroy);

export default productsRouter