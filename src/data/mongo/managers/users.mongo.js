import User from "../models/user.model.js";
class UsersMongoManager {
    async create(data) {
        try {
            const one = await User.create(data); 
            return one;
        } catch (error) {
            throw error;
        }
    }

    async readAll() {
        try {
            const all = await User.find(); 
            return all;
        } catch (error) {
            throw error;
        }
    }

    async read(uid) {
        try {
            const one = await User.findById(uid); 
            return one;
        } catch (error) {
            throw error;
        }
    }

    async update(uid, updatedData) {
        try {
            const one = await User.findByIdAndUpdate(uid, updatedData, { new: true });
            return one;
        } catch (error) {
            throw error;
        }
    }

    async delete(uid) {
        try {
            const one = await User.findByIdAndDelete(uid);
            return one;
        } catch (error) {
            throw error;
        }
    }
}

const usersMongoManager = new UsersMongoManager();
export default usersMongoManager;
