const express=require("express")
const { UpdateContact, ReadContact } = require("../controllers/contact")

const router=express.Router()



router.get("/ReadContact",ReadContact)
router.put("/UpdateContact/:id",UpdateContact)





module.exports=router