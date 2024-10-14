import Product from "../models/product.model.js";
class ProductsMongoManager {
    async create(data) {
        try {
            const one = await Product.create(data);
            return one
        } catch (error) {
            return next(error)
        }
    }
    async readAll() {
        try {
            const all = await Product.find();
            return all
        } catch (error) {
            throw error;
        }
    }
    async read(pid) {
        try {
            const one = await Product.findById(pid);
            return one
        } catch (error) {
            throw error;
        }
    }
    async update() {
        try {
            const one = await Product.findByIdAndUpdate(pid, updatedData, opts);
            return one
        } catch (error) {
            throw error;
        }
    }
    async delete() {
        try {
            const one = await Product.findByIdAndDelete(pid);
            return one
        } catch (error) {
            throw error;
        }
    }
}
const productsMongoManager = new ProductsMongoManager();
export default productsMongoManager;