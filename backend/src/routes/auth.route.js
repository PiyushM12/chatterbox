import express from "express"
import { signup } from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/login",(req,res)=>{
    res.send("Login endpoint")
})
router.get("/logout",(req,res)=>{
    res.send("Logout endpoint")
})
router.post("/signup",signup)

export default router;