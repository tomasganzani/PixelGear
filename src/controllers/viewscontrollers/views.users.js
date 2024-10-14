import usersMongoManager from "../../data/mongo/managers/users.mongo.js";

async function getUser(req, res, next) {
    try {
        const users = await usersMongoManager.readAll();
        res.render('users', { users }); 
    } catch (error) {
        next(error);
    }
}
async function loginViews(req, res) {
    try {
        res.render('login'); 
    } catch (error) {
        res.status(500).send('Error al cargar la vista de inicio de sesión');
    }
}

async function registerViews(req, res) {
    try {
        res.render('register');
    } catch (error) {
        res.status(500).send('Error al cargar la vista de registro');
    }
}

export { getUser, loginViews, registerViews };
