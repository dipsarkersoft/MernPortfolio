const about = require("../models/about")


exports.ReadAbout = async (req, res) => {
     try {

          const result =await about.find()
          res.status(200).json({
               data: result,
               message: "About Find Sucess"
          })
     }

     catch (error) {
          console.log(error)
          res.status(400).json({
               data: error.message,
               message: "About Find failed"
          })
     }
}



exports.UpdateAbout = async (req, res) => {

     try {
          const id = req.params.id
          const data = req.body
          const result =await about.findByIdAndUpdate(id,data)

          res.status(200).json({
               data: result,
               message: "About update Sucess"
          })
     }

     catch (error) {
          res.status(400).json({
               data: error,
               message: "About Create failed"
          })
     }
}
