const userModel = require("../models/userModel")

const createUser=async (req,res)=>{
    let data = req.body
    let savedData= await userModel.create(data)
    res.send({msg:savedData})
}

module.exports.createUser= createUser