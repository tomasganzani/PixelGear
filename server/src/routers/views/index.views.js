import { Router } from "express";
import productsViewRouter from "./products.views.js";
//import cartsViewRouter from "./carts.views.js";
//import usersViewRouter from "./users.views.js";

const viewsRouter = Router();

viewsRouter.use("/products", productsViewRouter);
viewsRouter.use("/", (req, res, next) => {
    try {
        return res.render("index")
    } catch (error) {
        console.log(error);
        return next(error)
    }
});
//viewsRouter.use("/carts", cartsViewRouter);
//viewsRouter.use("/users", usersViewRouter);

export default viewsRouter