//require('dotenv').config({path:'./env'}) // update code 
import dotenv from "dotenv"
import connectDB from "./db/index.js"

dotenv.config({
    path: "./env"
})

connectDB()












// first approch: this approch also good in this approch we connect the database and listen here 
/*
import { express } from "express"
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MOGODB_URL}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("Not Connect to data base :", error)
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`app running on this port : ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR :", error)
    }
})()
*/