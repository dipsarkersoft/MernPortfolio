const course=require("../models/course")


exports.CreateCourse=async(req,res)=>{

     try{
          const data=req.body
          const result=await course.create(data)
          res.status(200).json({ 
               data:result,
               message:"course Create Sucess"
          }) 
     }

   catch(error){
     console.log(error)
     res.status(400).json({  
          data:error,
          message:"course Create failed"
     }) } }

 
exports.ReadCourse=async(req,res)=>{

          try{
              
                const result=await course.find()
                  res.status(200).json({ 
                    data:result,
                    message:"course Find Sucess"
               }) 
          }
     
        catch(error){
          res.status(400).json({  
               data:error,
               message:"course Find failed"
          }) } }

exports.UpdateCourse=async(req,res)=>{

     try{
        const id=req.params.id
          const data=req.body
          const result=await course.findOneAndUpdate(id,data)

          res.status(200).json({ 
               data:result,
               message:"course update Sucess"
          })  }

   catch(error){
     res.status(400).json({  
          data:error,
          message:"course Create failed"
     })
   }}
 
   
exports.DeleteCourse=async(req,res)=>{

     try{
        const id=req.params.id
        const query={_id:id}
          const result=await course.deleteOne(query)
          res.status(200).json({ 
               data:result,
               message:"course delete Sucess"
          })  }

   catch(error){
     res.status(400).json({  
          data:error,
          message:"course delete failed"
     })
   }



     }