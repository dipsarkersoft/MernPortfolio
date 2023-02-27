const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
     email:{
          type:String,
          unique:true
     },
     password:{
          type:String
     }
},{versionKey:false,timestamps:true})


const userModel=mongoose.model("USERS",userSchema)

module.exports=userModel