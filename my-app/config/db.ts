import mongoose from 'mongoose'

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        console.log("Connected to DB");
    }
    catch (error) {
        console.error(`Error connecting to DB: ${error}`);
        process.exit(1);
    }
};

export default connectDb;