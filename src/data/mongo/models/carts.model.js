import { Schema, Types, model } from "mongoose";

const collection = "carts";
const schema = new Schema ({
    product_id: {
        type: Types.ObjectId,
        ref: "products",
        required: false
    },
    user_id: {
        type: Types.ObjectId,
        ref: "users",
        required: false
    },
    quantity: {
        type: Number,
        required: false,
        default: 1
    },
    price: {
        type: Number,
        required: false,
        default: 1
    },
    state: {
        type: String,
        required: false,
        default: "Reserved",
        enum: ["Reserved", "Delivered", "Paid"]
    },
})

const Carts = model(collection, schema);

export default Carts