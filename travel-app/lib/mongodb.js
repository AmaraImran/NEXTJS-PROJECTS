import mongoose from "mongoose";

export async function connectDB() {
  if (mongoose.connection.readyState === 1) return; // already connected, skip

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
  }
}