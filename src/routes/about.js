const express=require("express")
const { ReadAbout, UpdateAbout } = require("../controllers/about")

const router=express.Router()



router.get("/ReadAbout",ReadAbout)
router.put("/UpdateAbout/:id",UpdateAbout)





module.exports=router