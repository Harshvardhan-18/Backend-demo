import connectDB from "./db/index.js";
import dotenv from "dotenv";
import path from "path";
dotenv.config({
    path:'.env'
});

connectDB();