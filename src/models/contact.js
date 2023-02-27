const mongoose=require("mongoose")


const contactSchema=mongoose.Schema({
     name: {
          type: String },

        gender: {
          type: String },

        email: {
          type: String },

        mobile: {
          type: String },

        age: {
          type: String},

        address: {
          type: String  
     },
     
},{versionKey:false,timestamps:true})


const contactModel=mongoose.model("CONTACTS",contactSchema)

module.exports=contactModel