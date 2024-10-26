import handlerProductEvents from "./socket/productSocketHandler.js";
import handlerUserEvents from "./socket/userSocketHandlers.js";

const socketCallBack = async (socket) => {
    console.log(`Client connected: ${socket.id}`);
    handlerProductEvents(socket);
    handlerUserEvents(socket);
};

export default socketCallBack;
