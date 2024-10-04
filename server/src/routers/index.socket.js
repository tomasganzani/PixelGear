import userManager from "../data/user.manager.js";
const socketCallBack = async (socket) => {
    console.log(`Client connected: ${socket.id}`);

    socket.on("register", async data => {
        const id = await userManager.create(data);
        const allUsers = await userManager.readAll();
        socket.emit("register", allUsers);
    })
    const allUsers = await userManager.readAll();
    socket.emit("register", allUsers);
};

export default socketCallBack   