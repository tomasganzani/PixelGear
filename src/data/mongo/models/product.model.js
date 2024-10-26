import { Schema, model } from "mongoose";

const collection = "products";

const schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        default: 1,
    },
    stock: {
        type: Number,
        required: false,
        default: 1,
    },
    category: {
        type: String,
        required: false,
        default: "Teclados",
    },
    photo: {
        type: String,
        required: false,
        default: "https://imgs.search.brave.com/L35xuY9rLpgS4Fh-6AD4abs8X9S_AKzxuMeG3ccOkrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzkxLzIyLzU5/LzM2MF9GXzc5MTIy/NTkyNl9NVUVQdWtv/MHhnakt2V2VBSEdQ/ZEVyUUhZNlgyWkox/bS5qcGc",
    },
});


const Product = model(collection, schema);
export default Product;