import mongoose from 'mongoose';

class Controller {
    constructor(manager, model) {
        this.manager = manager;
        this.model = model;
    }

    create = async (req, res, next) => {
        try {
            const data = req.body;
            const response = await this.manager.create(data);
            return res
                .status(201)
                .json({ message: `${this.model} CREATED`, id: response._id });
        } catch (error) {
            return next(error);
        }
    };

    readAll = async (req, res, next) => {
        try {
            const filter = req.query;
            const response = await this.manager.readAll(filter);
            if (!response || response.length === 0) {
                return res.status(404).json({ message: `${this.model}S NOT FOUND` });
            }
            return res.status(200).json({ message: `${this.model}S READ`, data: response });
        } catch (error) {
            return next(error);
        }
    };

    read = async (req, res, next) => {
        try {
            const { cid } = req.params;
            if (!mongoose.Types.ObjectId.isValid(cid)) {
                return res.status(400).json({ message: `Invalid ${this.model} ID` });
            }
            const response = await this.manager.read(cid);
            if (!response) {
                return res.status(404).json({ message: `${this.model} NOT FOUND` });
            }
            return res.status(200).json({ message: `${this.model} READ`, data: response });
        } catch (error) {
            return next(error);
        }
    };

    update = async (req, res, next) => {
        try {
            const { cid } = req.params;
            if (!mongoose.Types.ObjectId.isValid(cid)) {
                return res.status(400).json({ message: `Invalid ${this.model} ID` });
            }
            const data = req.body;
            const response = await this.manager.update(cid, data);
            if (!response) {
                return res.status(404).json({ message: `${this.model} NOT FOUND` });
            }
            return res.status(200).json({ message: `${this.model} UPDATED`, data: response });
        } catch (error) {
            return next(error);
        }
    };

    destroy = async (req, res, next) => {
        try {
            const { cid } = req.params;
            if (!mongoose.Types.ObjectId.isValid(cid)) {
                return res.status(400).json({ message: `Invalid ${this.model} ID` });
            }
            const response = await this.manager.destroy(cid);
            if (!response) {
                return res.status(404).json({ message: `${this.model} NOT FOUND` });
            }
            return res.status(200).json({ message: `${this.model} DELETED`, data: response });
        } catch (error) {
            return next(error);
        }
    };
}

export default Controller;
