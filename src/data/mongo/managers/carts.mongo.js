import Carts from "../models/carts.model.js";
import MongoManager from "./manager.mongo.js";

const cartsMongoManager = new MongoManager(Carts);
export default cartsMongoManager