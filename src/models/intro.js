const mongoose=require("mongoose")


const introSchema=new mongoose.Schema({
     welcomeText:{
          type:String,
          unique:true
     },
     firstName: {
          type: String  
        },

        lastName: {
          type: String
       },

        caption: {
          type: String   
        },

        description: {
          type: String  
        }
},{versionKey:false,timestamps:true})


const introModel=mongoose.model("INTRO",introSchema)

module.exports=introModel