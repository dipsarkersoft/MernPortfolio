const express=require("express")
const { CreateExperience, ReadExperience, UpdateExperience, DeleteExperience } 

= require("../controllers/experience")


const router=express.Router()



router.post("/CreateExperience",CreateExperience)
router.get("/ReadExperience",ReadExperience)
router.put("/UpdateExperience/:id",UpdateExperience)
router.post("/DeleteExperience/:id",DeleteExperience)

 

module.exports=router