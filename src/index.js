// require('dotenv').config()
import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})


connectDB()
.then(() => {
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        app.on('error', (error) => {
            console.log("ERROR: ", error);
            throw error
        })
    } )
})
.catch((error) => {
    console.log("MONGODB connection failed : ", error);
})




/*
import express from "express";
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log("ERROR: ",error);
            throw error
        })

        app.listen(process.env.PORT, () => {
            console.log(`server is running on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.log(error);
        throw error
    }
})()
    */