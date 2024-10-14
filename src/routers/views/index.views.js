import { Router } from "express";
import mainViewRouter from "./main.views.js";
import productsViewRouter from "./productsOne.views.js";
import usersViewRouter from "./users.views.js";
import adminViewRouter from "./admin.views.js";
import cartsViewRouter from "./carts.views.js";

const viewsRouter = Router();

viewsRouter.use("/products", adminViewRouter)
viewsRouter.use("/products", productsViewRouter);
viewsRouter.use("/carts", cartsViewRouter);
viewsRouter.use("/users", usersViewRouter);
viewsRouter.use("/", mainViewRouter);   

export default viewsRouter