import { getAllProducts, getProduct, create, updateProduct, deleteProduct } from "../../controllers/products.controllers.js";
import { Router } from "express";
import isValidProduct from "../../middleware/isValidProduct.mid.js";

const productsRouter = Router();

productsRouter.get("/", getAllProducts);
productsRouter.get("/:pid", getProduct);
productsRouter.post("/", isValidProduct,create);
productsRouter.put("/:pid", updateProduct);
productsRouter.delete("/:pid", deleteProduct);

export default productsRouter