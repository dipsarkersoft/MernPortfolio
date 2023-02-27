const mongoose=require("mongoose")


const aboutSchema=mongoose.Schema({
     lottieURL: {
          type: String   
        },

        description1: {
          type: String
             },

        description2: {
          type: String
        },

        skills: {
          type: Array   
        }
},{versionKey:false,timestamps:true})


const aboutModel=mongoose.model("ABOUT",aboutSchema)

module.exports=aboutModel