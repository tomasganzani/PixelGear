import productsMongoManager from "../../data/mongo/managers/product.mongo.js";

async function showProducts(req, res) {
    try {
        const products = await productsMongoManager.readAll();
        return products
    } catch (error) {
        console.log(error);
        throw error;
    }
}
async function showOneProduct(req, res) {
    try {
        const product = await productsMongoManager.read(req.params.pid);
        return product
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export { showProducts, showOneProduct };