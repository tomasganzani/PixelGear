import productMongoManager from "../../data/mongo/managers/product.mongo.js"; // Cambié el nombre del manager

const handlerProductEvents = async (socket) => {
    try {
        const allProducts = await productMongoManager.readAll();
        socket.emit("allProducts", allProducts);
    } catch (error) {
        console.error("Error al obtener los productos:", error);
    }
    socket.on("addProduct", async (data) => {
        try {
            await productMongoManager.create(data); 
            const updatedProducts = await productMongoManager.readAll(); 
            socket.emit("productAdded", updatedProducts);
        } catch (error) {
            console.error("Error al registrar producto:", error);
        }
    });
};

export default handlerProductEvents;
