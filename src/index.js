import dotenv from "dotenv";
import connectDB from "./db/index_db.js";

dotenv.config({
  path: './env'
})



connectDB ()
.then(()=>{
  app.listen(process.env.PORT||8000, () => {
    console.log(`Example app listening on port: ${process.env.PORT}`)
  })
})
.catch((err) => {
  console.log("MONGO db connection error:", err);
})










// ( async ()=> {
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/$
//         {DB_N}`) 
//     } catch (error) {
//       console.error("Error:",error)
//       throw err  
//     }
// })()