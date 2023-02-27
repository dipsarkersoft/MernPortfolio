const  contact= require("../models/contact")


exports.ReadContact = async (req, res) => {
     try {

          const result =await contact.find()
          res.status(200).json({
               data: result,
               message: "contact Find Sucess"
          })
     }

     catch (error) {
          res.status(400).json({
               data: error,
               message: "contact Find failed"
          })
     }
}



exports.UpdateContact = async (req, res) => {

     try {
          const id = req.params.id
          const data = req.body
          const result =await contact.findByIdAndUpdate(id, data)

          res.status(200).json({
               data: result,
               message: "contact update Sucess"
          })
     }

     catch (error) {
          res.status(400).json({
               data: error,
               message: "contact Create failed"
          })
     }
}
