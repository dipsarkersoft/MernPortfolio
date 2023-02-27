const mongoose=require("mongoose")


const experienceSchema=mongoose.Schema({
     
     title:{
          type: String
        },

        period:{
          type: String
           },

        company:{
          type: String
       },

        description:{
          type: String
      }
},{versionKey:false,timestamps:true})


const experienceModel=mongoose.model("EXPERIENCE",experienceSchema)

module.exports=experienceModel