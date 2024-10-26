import { Router } from "express";
import { showProducts } from "../../controllers/viewscontrollers/views.products.js";
import { create } from "../../controllers/apicontrollers/products.controllers.js";

const adminViewRouter = Router();

adminViewRouter.get("/", async (req, res, next) => {
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
        return res.render("admin", { products });
    } catch (error) {
        console.log(error);
        return next(error)
    }
});
adminViewRouter.post("/add", async (req, res, next) => {
    try {
        const { title, price, stock, category, photo } = req.body;
        const data = {title, price, stock, category, photo};
        await create(data);
        return res.redirect("/admin");
    } catch (error) {
        return next(error);
    }
});

export default adminViewRouter