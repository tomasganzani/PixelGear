import productsManager from "../data/products.manager.js";
function index(req, res, next) {
    try {
        return res.status(200).json({
            message: "Welcome Pixel Gear Store",
        });
    } catch (error) {
        return next(error);
    }
}
async function getAllProducts(req, res, next) {
    try {
        let { category } = req.query;
        let response;
        if (!category) {
            response = await productsManager.readAll();
        } else {
            response = await productsManager.readAll(category);
        }
        if (response.length > 0) {
            return res.status(200).json({ message: "PRODUCTS READ", response });
        } else {
            const error = new Error("NOT FOUND PRODUCTS");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}
async function getProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const response = await productsManager.read(pid);
        if (response) {
            return res.status(200).json({ message: "product found", response });
        } else {
            const error = new Error("NOT FOUND PRODUCT");
            error.statusCode = 404;
            throw error;
        }
    } catch (error) {
        return next(error);
    }
}
async function create(req, res, next) {
    try {
        let { photo, category, ...otherData } = req.body;
        photo = photo || null;
        category = category || null;
        const data = { ...otherData, photo, category };
        const response = await productsManager.create(data);
        return res.status(201).json({ message: "product created", response });
    } catch (error) {
        return next(error)
    }
}
async function updateProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const updatedData = req.body;
        const response = await productsManager.update(pid, updatedData);
        if (!response) {
            const error = new Error("NOT FOUND PRODUCT");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "product updated", response });
    } catch (error) {
        return next(error);
    }
}
async function deleteProduct(req, res, next) {
    try {
        const { pid } = req.params;
        const response = await productsManager.delete(pid);
        if (!response) {
            const error = new Error("NOT FOUND PRODUCT");
            error.statusCode = 404;
            throw error;
        }
        return res.status(200).json({ message: "product deleted", response });
    } catch (error) {
        return next(error);
    }
}

export {
    index,
    getAllProducts,
    getProduct,
    create,
    updateProduct,
    deleteProduct,
}