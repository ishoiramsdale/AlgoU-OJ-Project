import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async() => {
    const MONGO_URL = process.env.MONGO_URL;
    console.log("DB Connection established");
    try{
        await mongoose.connect(MONGO_URL);
    }
    catch (error) {
        console.log("Error while connecting to MONGODB " ,error);
    }
};

export default DBConnection;