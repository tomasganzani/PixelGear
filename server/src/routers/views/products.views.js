import { Router } from "express";
import { showProducts, showOneProducts } from "../../controllers/products.controllers.js";

const productsViewRouter = Router();

productsViewRouter.get("/:pid", showOneProducts)
productsViewRouter.get ( "/", showProducts)

export default productsViewRouter