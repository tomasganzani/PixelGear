import { Router } from "express";
import { showOneProduct } from "../../controllers/viewscontrollers/views.products.js";

const productsViewRouter = Router();

productsViewRouter.get("/:pid", showOneProduct)

export default productsViewRouter