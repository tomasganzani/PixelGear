import cartsMongoManager from "../../data/mongo/managers/carts.mongo.js";
import Controller from "./controllers.js";

const cartsController = new Controller(cartsMongoManager, "CART");
const { create, readAll, read, update, destroy } = cartsController;

export { create, readAll, read, update, destroy };