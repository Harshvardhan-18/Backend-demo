import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_DB_URI}/${DB_NAME}`)
        console.log(`Connected to MongoDB , DB Host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Failed",error);
    }
}
export default connectDB;