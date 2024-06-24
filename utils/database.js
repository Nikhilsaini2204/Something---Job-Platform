import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery',true);

    if(isConnected){
        console.log("Database already connected")
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName:"something"
        })

        isConnected = true;
        console.log("Database connected successfully")
    } catch (error) {
        console.log(error);
    }
}