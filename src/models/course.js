const mongoose=require("mongoose")


const coursesSchema=mongoose.Schema({
     
     title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
        link: {
          type: String,
          required: true,
        }
},{versionKey:false,timestamps:true})


const coursesModel=mongoose.model("COURSES",coursesSchema)

module.exports=coursesModel