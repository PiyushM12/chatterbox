import mongoose from "mongoose"
export const connectDB= async ()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGODB Connected")
    } catch(error){
        console.error("error connecting to db",error);
        process.exit(1);
    }
}