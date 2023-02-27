const express=require("express")
const {loginUser, CreateUser} = require("../controllers/user")

const router=express.Router()




router.post("/CreateUser",CreateUser)
router.get("/loginUser",loginUser)






module.exports=router