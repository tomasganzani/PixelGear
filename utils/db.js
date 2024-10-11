import { connect } from "mongoose";

const connectDB = async () => {
    try {
        const conn = await connect(process.env.LINK.MONGO);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;