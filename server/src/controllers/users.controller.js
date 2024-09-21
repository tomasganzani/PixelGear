import userManager from "../data/user.manager.js";

async function getAllUsers(req, res, next) {
    try {
        let { category } = req.query;
        let response;
        if (!category) {
            response = await userManager.readAll();
        } else {
            response = await userManager.readAll(category);
        }
        if (response.length > 0) {
            return res.status(200).json({ message: "LIST OF USERS", response });
        } else {
            const error = new Error("NOT FOUND USER");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}
async function getUser(req, res, next) {
    try {
        const { pid } = req.params;
        const response = await userManager.read(pid);
        if (response) {
            return res.status(200).json({ message: "USER FOND", response });
        } else {
            const error = new Error("NOT FOUND USER");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}
async function create(req, res, next) {
    try {
        let { photo, role, ...otherData } = req.body;
        photo = photo || null;
        role = role || 0;
        const data = { ...otherData, photo, role };
        const response = await userManager.create(data);
        return res.status(201).json({ message: "user created", response });
    } catch (error) {
        return next(error)
    }
}
async function deleteUser(req, res, next) {
    try {
        const { pid } = req.params;
        const response = await userManager.delete(pid);
        if (!response) {
            const error = new Error("USER NOT FOUND");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "USER DELETED", response });
    } catch (error) {
        return next(error);
    }
}
async function updateUser(req, res, next) {
    try {
        const { pid } = req.params;
        const updatedData = req.body;
        const response = await userManager.update(pid, updatedData);
        if (!response) {
            const error = new Error("NOT FOUND USER");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "USER UPDATE", response });
    } catch (error) {
        return next(error);
    }
}

export {
    getAllUsers,
    getUser,
    create,
    deleteUser,
    updateUser
}