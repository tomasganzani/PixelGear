function pathHandler(req, res, next) {
    const { url, method } = req;
    const message = `method: ${method}, path: ${url} not found`;
    return res.status(404).json({ message });
}

export default pathHandler