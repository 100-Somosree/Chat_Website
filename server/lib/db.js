import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://somosreesikdar01_db_user:Sbcdu9ZQ8sjCRVh2@cluster0.nguvtub.mongodb.net/chatapp?retryWrites=true&w=majority&appName=Cluster0");
    console.log("MongoDB connected");
  } catch (err) {
    console.error("Database connection error", err);
  }
};

export default connectDB;
