import userMongoManager from "../data/mongo/managers/users.mongo.js";

const socketCallBack = async (socket) => {
    console.log(`Client connected: ${socket.id}`);
    const allUsers = await userMongoManager.readAll();
    socket.emit("register", allUsers);

    socket.on("register", async (data) => {
        try {
            await userMongoManager.create(data);
            const updatedUsers = await userMongoManager.readAll();
            socket.emit("register", updatedUsers);
        } catch (error) {
            console.error("Error al registrar usuario:", error);
        }
    });
};

export default socketCallBack;
