const express=require("express")
const { CreateProject, ReadProject, UpdateProject, DeleteProject } = require("../controllers/project")



const router=express.Router()



router.post("/CreateProject",CreateProject)
router.get("/ReadProject",ReadProject)
router.put("/UpdateProject/:id",UpdateProject)
router.post("/DeleteProject/:id",DeleteProject)

 

module.exports=router