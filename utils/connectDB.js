import mongoose from "mongoose";

const connectDB = async () => {
  console.log(process.env.MONGODB_URI)
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit the Node.js process with an error code
  }
};

export default connectDB;
