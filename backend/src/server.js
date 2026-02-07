
import express from "express"
const app = express();
import dotenv from "dotenv"
import authRoutes from"./routes/auth.route.js"
dotenv.config();
console.log(process.env.PORT)
const PORT = process.env.PORT||5000;

app.use("/api/auth",authRoutes)

app.listen(PORT,()=>console.log(`server is running on port: ${PORT}`));