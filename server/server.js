import express from "express";
import router from "./src/routers/index.router.js";
import errorHandler from "./src/middleware/errorHandler.mid.js";
import pathHandler from "./src/middleware/pathHandler.mid.js";
import morgan from "morgan";
import cors from "cors";
// Server config
const server = express();
const port = 8000;
const ready = () => console.log(`Server running on port ${port}`);
// Config
server.use(express.urlencoded({ extended: true }));
server.use(express.json())
server.use(morgan("dev"))
server.use(cors())
// Server on
server.listen(port, ready);
// functions
server.use(router)
server.use(errorHandler)
server.use(pathHandler)