import dotenv from "dotenv";
import connectDB from "./db/index_db.js";

dotenv.config({
  path: './env'
})



connectDB ()










// ( async ()=> {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/$
//         {DB_N}`) 
//     } catch (error) {
//       console.error("Error:",error)
//       throw err  
//     }
// })()