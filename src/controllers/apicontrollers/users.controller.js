
import usersMongoManager from "../../data/mongo/managers/users.mongo.js";
import Controller from "./controllers.js";

const usersController = new Controller(usersMongoManager, "USER");
const { create, readAll, read, update, destroy } = usersController;

export { create, readAll, read, update, destroy };
