const experience=require("../models/experience")


exports.CreateExperience=async(req,res)=>{

     try{
          const data=req.body
          const result=await experience.create(data)
          res.status(200).json({ 
               data:result,
               message:"Experience Create Sucess"
          }) 
     }

   catch(error){
     console.log(error)
     res.status(400).json({  
          data:error,
          message:"Experience Create failed"
     }) } }

 
exports.ReadExperience=async(req,res)=>{

          try{
              
                const result=await experience.find()
                  res.status(200).json({ 
                    data:result,
                    message:"Experience Find Sucess"
               }) 
          }
     
        catch(error){
          res.status(400).json({  
               data:error,
               message:"Experience Find failed"
          }) } }

exports.UpdateExperience=async(req,res)=>{

     try{
        const id=req.params.id
          const data=req.body
          const result=await experience.findOneAndUpdate(id,data)

          res.status(200).json({ 
               data:result,
               message:"Experience update Sucess"
          })  }

   catch(error){
     res.status(400).json({  
          data:error,
          message:"Experience Create failed"
     })
   }}
 
   
exports.DeleteExperience=async(req,res)=>{

     try{
        const id=req.params.id
        const query={_id:id}
          const result=await experience.deleteOne(query)
          res.status(200).json({ 
               data:result,
               message:"Experience delete Sucess"
          })  }

   catch(error){
     res.status(400).json({  
          data:error,
          message:"Experience delete failed"
     })
   }



     }