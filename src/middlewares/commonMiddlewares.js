const isFreeMid= (req, res, next)=>{
    // const data = req.headers.isfreeappuser
    // if(!data){
    //     res.send({msg:"request is missing a mandatory header"})
    // }
    // req.body["isFreeAppUser"] = data
    // next()
    if (req.headers.isfreeappuser=== undefined)
    res.send({msg:"The request is missing a mandatory header"})
    else{req.isfreeappuser=Boolean(req.headers.isfreeappuser)
    next()
}
}

module.exports.isFreeMid= isFreeMid