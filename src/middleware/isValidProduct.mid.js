function isValidProduct (req, res, next) {
    try {
        const {title, stock, price } = req.body;
        if (!title || !stock || !price) {
            const error = new Error('Missing data, please check your request')
            error.statusCode = 400
            throw error
        } else {
            next()
        }
    } catch (error) {
        throw error
    }
}
export default isValidProduct