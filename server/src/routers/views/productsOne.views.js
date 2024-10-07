import { Router } from "express";
import { showOneProducts } from "../../controllers/products.controllers.js";

const productsViewRouter = Router();

productsViewRouter.get("/:pid", showOneProducts)

export default productsViewRouter