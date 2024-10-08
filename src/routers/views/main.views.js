import { Router } from "express";
import { showProducts } from "../../controllers/products.controllers.js";

const mainViewRouter = Router();

mainViewRouter.get("/", async (req, res, next) => {
    try {
        const products = await showProducts(req, res, next);
        return res.render("index", { products });
    } catch (error) {
        console.log(error);
        return next(error)
    }
});

export default mainViewRouter