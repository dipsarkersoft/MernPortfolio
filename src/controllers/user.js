const user=require("../models/user")


exports.CreateUser=async(req,res)=>{

     try{
          const {email,password}=req.body
          const body={email,password}
          const isEmailExists=await user.findOne({email})

          if(isEmailExists){
               res.status(400).json({ 
                    data:"failed",
                    message:"email Already Exists"
               }) 

          }
          else{
               const result=await user.create(body)
               res.status(200).json({ 
               data:result,
               message:"user Create Sucess"
          }) 

          }
          
     }

   catch(error){
     console.log(error)
     res.status(400).json({  
          data:error,
          message:"user Create failed"
     }) } }


exports.loginUser=async(req,res)=>{

     try{
          const email=req.body.email
          const password=req.body.password

          const ismailAndPassExists=await user.findOne({email,password})

          if(!ismailAndPassExists){
               res.status(401).json({
                    status:"failed",
                    message:"No user Found"
               })

          }
          else{
               res.status(200).json({
                    data: ismailAndPassExists,
                    success: true,
                    message: "Login successfully",
                  })}

     }
     catch(error){
          res.status(401).json({
               status:"failed",
               message:"SomeThing went Wrong"
          })
     }
}