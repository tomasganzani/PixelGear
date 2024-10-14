import { Schema, model } from "mongoose";

const collection = "users";

const schema = new Schema({
    photo: {
        type: String,
        required: false,
        default: "https://imgs.search.brave.com/L35xuY9rLpgS4Fh-6AD4abs8X9S_AKzxuMeG3ccOkrE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzkxLzIyLzU5/LzM2MF9GXzc5MTIy/NTkyNl9NVUVQdWtv/MHhnakt2V2VBSEdQ/ZEVyUUhZNlgyWkox/bS5qcGc",
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        default: 1,
    },
    role: {
        type: String,
        required: false,
        default: 0,
    },
    isOnline: {
        type: Boolean,
        required: false,
    },
});


const Users = model(collection, schema);
export default Users;