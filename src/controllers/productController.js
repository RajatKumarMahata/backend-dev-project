const productModel= require("../models/productModel.js")

const createModel= async (req,res)=>{
    let model=req.body
    let savedProductData=productModel.create(model)
  return res.send(savedProductData)
}

module.exports.createModel=createModel