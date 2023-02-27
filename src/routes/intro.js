const express=require("express")
const { ReadIntro, UpdateIntro } = require("../controllers/intro")
const router=express.Router()



router.put("/ReadIntro",ReadIntro)
router.get("/UpdateIntro/:id",UpdateIntro)





module.exports=router