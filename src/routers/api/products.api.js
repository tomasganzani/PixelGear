import { readAll, read, create, update, destroy } from "../../controllers/apicontrollers/products.controllers.js";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/", readAll);
productsRouter.get("/:cid", read);
productsRouter.post("/", create);
productsRouter.put("/:cid", update);
productsRouter.delete("/:cid", destroy);

export default productsRouter