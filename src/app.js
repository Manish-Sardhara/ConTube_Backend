import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" })) // this is for json data handling config
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // this is for url handling config
app.use(express.static("public")) // this for static file ex:image etc config

app.use(cookieParser())

export { app }