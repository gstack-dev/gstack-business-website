import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

const globalForMongoose = global as unknown as { mongoose: typeof mongoose | null };

export const cached = globalForMongoose.mongoose;

export async function connectMongoDB() {
    if (cached) {
        return cached;
    }

    const connection = await mongoose.connect(MONGODB_URI as string);
    globalForMongoose.mongoose = connection;
    return connection;
}