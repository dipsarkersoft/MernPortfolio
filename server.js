const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const{readdirSync}=require('fs')


const app =express()
app.use(express.json())
app.use(express.urlencoded({extended: false}));


//routes........
readdirSync("./src/routes/").map(r =>app.use("/api/v1", require(`./src/routes/${r}`)))


//database....

const port=process.env.PORT
const uri=process.env.DATABASE


mongoose.connect(uri,(error)=>{
     console.log(error)
})


app.listen(port,(error)=>{
    if(error){
     console.log(error)
    }
    else{console.log("Database Connection Sucess "+port)}

})