import "dotenv/config.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./src/routers/index.router.js";
import  __dirname  from "./utils.js";
import { createServer } from "http";
import { Server } from "socket.io";
import { engine } from "express-handlebars";
import errorHandler from "./src/middleware/errorHandler.mid.js";
import pathHandler from "./src/middleware/pathHandler.mid.js";
import socketCallBack from "./src/routers/index.socket.js";
import connectDB from "./utils/db.js";
// Server config
const server = express();
const port = 8080;
const ready = async () => {
    console.log(`Server running on port ${port}`);
    await connectDB();
}
const httpServer = createServer(server);
const tcpServer = new Server(httpServer);
tcpServer.on("connection", socketCallBack)
httpServer.listen(port, ready); 

server.use(cors())

// Handlebars
server.use(express.urlencoded({ extended: true }));
server.use(express.json())
server.use(morgan("dev"))
server.use("/public",express.static("public"));

// templates config
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/src/views");


// Routers
server.use(router)
server.use(errorHandler)
server.use(pathHandler)