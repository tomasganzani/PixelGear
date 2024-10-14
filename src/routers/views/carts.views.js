import { Router } from "express";

const cartsViewRouter = Router();

cartsViewRouter.get("/", async (req, res, next) => {
    try {
        return res.render("carts")
    }
    catch (error) {
        next(error)
    }
});

export default cartsViewRouter

