const project=require("../models/projects")


exports.CreateProject=async(req,res)=>{

     try{
          const data=req.body
          const result=await project.create(data)
          res.status(200).json({ 
               data:result,
               message:"project Create Sucess"
          }) 
     }

   catch(error){
     console.log(error)
     res.status(400).json({  
          data:error,
          message:"project Create failed"
     }) } }

 
exports.ReadProject=async(req,res)=>{

          try{
              
                const result=await project.find()
                  res.status(200).json({ 
                    data:result,
                    message:"project Find Sucess"
               }) 
          }
     
        catch(error){
          res.status(400).json({  
               data:error,
               message:"project Find failed"
          }) } }

exports.UpdateProject=async(req,res)=>{

     try{
        const id=req.params.id
          const data=req.body
          const result=await project.findOneAndUpdate(id,data)

          res.status(200).json({ 
               data:result,
               message:"project update Sucess"
          })  }

   catch(error){
     res.status(400).json({  
          data:error,
          message:"project Create failed"
     })
   }}
 
   
exports.DeleteProject=async(req,res)=>{

     try{
        const id=req.params.id
        const query={_id:id}
          const result=await project.deleteOne(query)
          res.status(200).json({ 
               data:result,
               message:"project delete Sucess"
          })  }

   catch(error){
     res.status(400).json({  
          data:error,
          message:"project delete failed"
     })
   }



     }