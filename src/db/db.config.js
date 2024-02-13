import mongoose from "mongoose";

async function db() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    const connection = mongoose.connection;

    connection.on('open', () => {
      console.log("MongoDB connection established");
    });

    connection.on('error', (error) => {
      console.error("MongoDB connection error:", error);
      process.exit(1); // Exit with error code 1
    });
  } catch (error) {
    console.log("Mongodb connection error: ", error);
  }
}

export default db;
