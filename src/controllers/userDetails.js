const userModel = require('../models/userModel')


const updateDetails = async function (req, res) {
    let add = req.body
    let userId=req.params.userId
    let update = await userModel.findByIdAndUpdate({ _id: userId }, add, { new: true })
    res.send(update)
}

module.exports.userDetails = userDetails
