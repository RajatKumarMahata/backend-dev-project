const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController')
const loginController = require('../controllers/loginCNT')
const userDetailsController = require("../controllers/userDetails")
const updateDetails = require('../controllers/updateDetails')
const deleteDetail = require('../controllers/deleteUser')


const midWare = require('../middleWare/auth')

router.post('/registerUser', userController.createUser)
router.post('/userLogin', loginController.loginUser)
router.get('/users/:userId', midWare.midWare1, userDetailsController.userDetails)
router.put('/updateDetails/:userId', midWare.midWare1, updateDetails.updateDetails)
router.delete('/deleteDetail/:userId',  midWare.midWare1, deleteDetails.deleteDetail)


module.exports = router;