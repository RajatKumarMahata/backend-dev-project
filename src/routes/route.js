
const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")


router.post ("/createPruduct",productController.createModel)
router.post ("/createUser",commonMW.isFreeMid,UserController.createUsers)
router.post("/createOrder", orderController.createOrders)


module.exports = router;