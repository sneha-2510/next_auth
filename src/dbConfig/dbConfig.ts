import { error } from "console";
import mongoose from "mongoose";

export async function connectDb() {
    try {

        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("MongoDB connected ")
        })

        connection.on('error', () => {
            console.log('MongoDB connection error , Please make sure db is up and running' + error);
            process.exit()
        })


    } catch (error) {
        console.log("Something went wrong while connecting db ");
        console.log(error)
    }
}