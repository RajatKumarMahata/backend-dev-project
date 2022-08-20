const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    authorName: String,
    age:Number,
    address:String,
    rating:Number
}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)
// authorName:"Chetan Bhagat",
// age:50,
// address:"New Delhi",
// rating: 2
 
