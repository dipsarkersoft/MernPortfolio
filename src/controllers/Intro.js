const intro = require("../models/intro")


exports.ReadIntro = async (req, res) => {
     try {

          const result =await intro.find()
          res.status(200).json({
               data: result,
               message: "Intro Find Sucess"
          })
     }

     catch (error) {
          res.status(400).json({
               data: error,
               message: "Intro Find failed"
          })
     }
}



exports.UpdateIntro = async (req, res) => {

     try {
          const id = req.params.id
          const data = req.body
          const result =await intro.findByIdAndUpdate(id, data)

          res.status(200).json({
               data: result,
               message: "Intro update Sucess"
          })
     }

     catch (error) {
          res.status(400).json({
               data: error,
               message: "Intro Create failed"
          })
     }
}
