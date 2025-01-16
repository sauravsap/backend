import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { DB_Name } from '../constants.js';


dotenv.config();
const connectDB =async()=>{
const dbURI = process.env.MONGODB_URI;
if (!dbURI) {
    throw new Error('DB_URI is not defined in the environment variables');
}

  try {
    const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MONGODB connection error: ${error.message}`);
    process.exit(1);
  }
}

export default connectDB;





