const express=require("express")
const { DeleteCourse, UpdateCourse, ReadCourse, CreateCourse } = require("../controllers/course")


const router=express.Router()



router.post("/CreateCourse",CreateCourse)
router.get("/ReadCourse",ReadCourse)
router.put("/UpdateCourse/:id",UpdateCourse)
router.post("/DeleteCourse/:id",DeleteCourse)

 

module.exports=router