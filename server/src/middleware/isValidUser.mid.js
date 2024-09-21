function isValidUser (req, res, next) {
    try {
        const { email, password } = req.body;
        if (!email || !password ) {
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
export default isValidUser