const authenticate = async function(req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-auth-token"]
    if (!token) { return res.send("Header is missing") }
    let decodedToken = jwt.verify(token, "I am learning the creation of jwt")
    if (!decodedToken) { return res.send("Not a valid token") }
    let userId = req.params.userId
    let idCheck = mongoose.Types.ObjectId.isValid(userId)
    if (!idCheck) { return res.send("Not a valid userID") }
    let check = await userModel.findById(userId)
    if (!check) { return res.send("No such user exist") }
    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    let requestedUserId= req.params.userId
    if (requestedUserId!==req.loggedInUser){
        res.send({status:false, msg:"permission denied"})
    }
    next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise