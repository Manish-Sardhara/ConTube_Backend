import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MOGODB_URL}/${DB_NAME}`)
        console.log(`mogodb connected !!! ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("Mogodb connection faild :", error)
        process.exit(1) // read this
    }
}

export default connectDB