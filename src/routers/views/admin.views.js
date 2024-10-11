import { Router } from "express";

const adminViewRouter = Router();

adminViewRouter.get("/admin", async (req, res, next) => {
    try {
        return res.render("admin");
    } catch (error) {
        console.log(error);
        return next(error)
    }
});

export default adminViewRouter