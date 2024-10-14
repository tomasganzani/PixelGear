import { Router } from "express";
import { showProducts } from "../../controllers/viewscontrollers/views.products.js";

const mainViewRouter = Router();

mainViewRouter.get("/", async (req, res, next) => {
    try {
        let products = await showProducts();
        products = products.map(product => ({
            id: product._id.toString(),
            title: product._doc.title,
            price: product._doc.price,
            stock: product._doc.stock,
            category: product._doc.category,
            photo: product._doc.photo
        }));
        return res.render("index", { products });
    } catch (error) {
        console.log(error);
        return next(error);
    }
});

export default mainViewRouter;
