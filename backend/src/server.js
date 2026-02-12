
import express from "express"
const app = express();
import cookieParser from "cookie-parser"
import dotenv from "dotenv"
import path from "path"
import authRoutes from"./routes/auth.route.js"
import { connectDB } from "./lib/db.js";
dotenv.config();
console.log(process.env.PORT)

const __dirname = path.resolve();

const PORT = process.env.PORT||5000;

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth",authRoutes)
app.use("api/messages",messageRoutes);
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
    })
}

app.listen(PORT,()=>{console.log(`server is running on port: ${PORT}`)
connectDB()
});