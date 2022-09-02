const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBooks= async function (req, res) {
    let book = req.body
   
    let authorid=book.author 
   
    let publisherid=book.publisher

    let checkAuthorid=await authorModel.find({_id:authorid})

     let checkPublisherid= await publisherModel.find({_id:publisherid})
     
     if(!authorid){
        res.send("Author is REQUIRED!")
     }  else if (!checkAuthorid[0]){
        res.send("Please give a valid Auther id, auther is not present!")
     }else if (!publisherid){
        res.send(" This field (Publisher) is REQUIRED!")
     }else if (!checkPublisherid[0]){
        res.send("Please give a valid Publisher id, publisher is not present!")
      }
    else {
        let bookCreated= await bookModel.create(book)
        res.send({msg: bookCreated})
     }
}    

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let allBook = await bookModel.find().populate(['author','publisher'])
    res.send({data: allBook})

}
// const updateBooks=async function (req,res){
//     let updateB=await publisherModel.find({$in:[{name:'penguin'},{name:'HarperCollins'}]})
//    let updatA= await authorModel.find({$in:{rating:{$gt:3.5}}})
//    if (updateB){
//     bookModel.updateMany({isHardCovered:true})
//    }
// }


module.exports.createBook= createBooks
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
 