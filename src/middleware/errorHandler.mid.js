function errorHandler(error, req, res, next) {
    const { message, statusCode } = error;
    console.log(error);
    res.status(statusCode || 500).json({ message: message || "FATAL ERROR" });
}

export default errorHandler