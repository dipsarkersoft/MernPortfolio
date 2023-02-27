const mongoose=require("mongoose")


const projectSchema=mongoose.Schema({
     
     title: {
          type: String
     },
        description: {
          type: String
     },

        image: {
          type: String
      },

        link: {
          type: String
      },

        technolgies: {
          type: Array }
},{versionKey:false,timestamps:true})


const projectModel=mongoose.model("PROJECT",projectSchema)

module.exports=projectModel