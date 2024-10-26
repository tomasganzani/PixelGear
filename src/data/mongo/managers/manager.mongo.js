import mongoose from "mongoose";
class MongoManager {
    constructor(model) {
        this.model = model;
    }
    async create(data) {
        try {
            const one = await this.model.create(data);
            return one
        } catch (error) {
            throw new Error("Error al crear el producto: " + error.message);
        }
    }
    async readAll() {
        try {
            const all = await this.model.find();
            return all
        } catch (error) {
            throw error;
        }
    }
    async read(cid) {
        if (!mongoose.Types.ObjectId.isValid(cid)) {
            throw new Error("Invalid ObjectId");
        }
        try {
            const one = await this.model.findById(cid);
            if (!one) {
                throw new Error("Document not found");
            }
            return one;
        } catch (error) {
            throw new Error(`Error fetching document: ${error.message}`);
        }
    }
    
    
    update = async (id, data) => {
        try {
            const opts = { new: true };
            const one = await this.model.findOneAndUpdate({ _id: id }, data, opts);
            return one;
        } catch (error) {
            throw error;
        }
    };
    async destroy(id) {
        try {
            const deletedDocument = await this.model.findByIdAndDelete(id);
            if (!deletedDocument) {
                throw new Error("Document not found");
            }
            return deletedDocument;
        } catch (error) {
            throw error;
        }
    }

}

export default MongoManager