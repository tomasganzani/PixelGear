import fs from "fs";
import crypto from "crypto";

class UserManager {
    constructor(path) {
        this.path = path;
        this.#ensureFileExists();
    }
    async #ensureFileExists() {
        try {
            await fs.promises.access(this.path, fs.constants.F_OK);
            console.log("File user exists");
        } catch (error) {
            await fs.promises.writeFile(this.path, JSON.stringify([]));
            console.log("File does not exist");
        }
    }
    async readAll(category = null) {
        try {
            const data = await fs.promises.readFile(this.path, "utf-8");
            const parseData = JSON.parse(data);

            if (category) {
                return parseData.filter((product) => product.category === category);
            } else {
                return parseData;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async read(id) {
        try {
            const allProducts = await this.readAll();
            const product = allProducts.find((product) => product.id === id);
            if (!product) {
                throw new Error("Product not found");
            }
            return product;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async create(data) {
        try {
            data.id = crypto.randomBytes(12).toString("hex");
            const allProducts = await this.readAll();
            allProducts.push(data);

            const formattedData = JSON.stringify(allProducts, null, 4);
            await fs.promises.writeFile(this.path, formattedData);

            return data.id;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async update(id, updatedData) {
        try {
            const allProducts = await this.readAll();
            const productIndex = allProducts.findIndex((product) => product.id === id);

            if (productIndex === -1) {
                return null
            }

            allProducts[productIndex] = { ...allProducts[productIndex], ...updatedData };

            const formattedData = JSON.stringify(allProducts, null, 4);
            await fs.promises.writeFile(this.path, formattedData);

            return allProducts[productIndex];
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    async delete(id) {
        try {
            const allProducts = await this.readAll();
            const productIndex = allProducts.findIndex((product) => product.id === id);

            if (productIndex === -1) {
                return null
            }

            allProducts.splice(productIndex, 1);

            const formattedData = JSON.stringify(allProducts, null, 4);
            await fs.promises.writeFile(this.path, formattedData);

            return { message: "Product deleted successfully" };
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

const userManager = new UserManager("./src/data/fs/files/users.json");
export default userManager