const PublisherModel= require("../models/publisherModel")

const createpublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await PublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublishersData= async function (req, res) {
    let publishers = await publisherModel.find()
    res.send({data: publishers})
}

module.exports.createpublisher= createpublisher
module.exports.getPublishersData= getPublishersData