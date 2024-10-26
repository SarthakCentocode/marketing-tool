import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("already connected");
    return;
  }

  
  try {
    const uri:string  = "mongodb+srv://sarthak:20112002@cluster0.dj2rtuo.mongodb.net/";
    const db = await mongoose.connect(uri);

    connection.isConnected = db.connections[0].readyState;

    console.log("db connected successfully");
  } catch (error) {
    console.log("connection failed", error);

    process.exit();
  }
}

export default dbConnect;
