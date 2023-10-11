import mongoose from 'mongoose';

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGODB_)
        console.log("Connected to MongoDB")
    } catch (error) {
        log.error("Error connecting to MongoDB")
    }
}

export default connectMongoDB